var testHelpers = require('./helpers');
var CyclingPingTimer = require('../lib/cycling_ping_timer.js');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('CyclingPingTimer', function() {
  beforeEach(function() {
    this.debugSpy = sinon.spy();
    this.wantPingSpy = sinon.spy();
    this.pingTimeoutSpy = sinon.spy();
    this.clientStub = {
      opt: {millisecondsBeforePingTimeout: 500, millisecondsOfSilenceBeforePingSent: 200},
      out: {debug: this.debugSpy}
    };
    this.cyclingPingTimer = new CyclingPingTimer(this.clientStub);
    this.cyclingPingTimer.on('wantPing', this.wantPingSpy);
    this.cyclingPingTimer.on('pingTimeout', this.pingTimeoutSpy);
  });

  afterEach(function() {
    this.cyclingPingTimer.stop();
  });

  it('is stopped by default', function() {
    expect(this.cyclingPingTimer.started).to.be.false;
  });

  it('starts', function() {
    this.cyclingPingTimer.start();
    expect(this.debugSpy.args).to.deep.equal([
      ['CyclingPingTimer ' + this.cyclingPingTimer.timerNumber + ':', 'ping timer started']
    ]);
    expect(this.cyclingPingTimer.started).to.be.true;
    expect(this.cyclingPingTimer.loopingTimeout).to.be.ok;
  });

  it('cannot start when started', function() {
    this.cyclingPingTimer.start();
    var loopingTimeout = this.cyclingPingTimer.loopingTimeout;
    this.cyclingPingTimer.start();
    expect(this.debugSpy.args).to.deep.equal([
      ['CyclingPingTimer ' + this.cyclingPingTimer.timerNumber + ':', 'ping timer started'],
      ['CyclingPingTimer ' + this.cyclingPingTimer.timerNumber + ':', 'can\'t start, not stopped!']
    ]);
    expect(this.cyclingPingTimer.loopingTimeout).to.equal(loopingTimeout);
    expect(this.cyclingPingTimer.started).to.be.true;
  });

  it('cannot stop when stopped', function() {
    this.cyclingPingTimer.stop();
    expect(this.debugSpy.args).to.deep.equal([]);
    expect(this.cyclingPingTimer.started).to.be.false;
  });

  it('stops', function() {
    this.cyclingPingTimer.start();
    this.cyclingPingTimer.stop();
    expect(this.debugSpy.args).to.deep.equal([
      ['CyclingPingTimer ' + this.cyclingPingTimer.timerNumber + ':', 'ping timer started'],
      ['CyclingPingTimer ' + this.cyclingPingTimer.timerNumber + ':', 'ping timer stopped']
    ]);
    expect(this.cyclingPingTimer.started).to.be.false;
    expect(this.cyclingPingTimer.loopingTimeout).to.be.null;
  });

  it('does nothing if notified of activity when stopped', function() {
    var self = this;
    function wrap() {
      self.cyclingPingTimer.notifyOfActivity();
    }
    expect(wrap).not.to.throw();
    expect(self.debugSpy.args).to.be.empty;
    expect(self.cyclingPingTimer.started).to.be.false;
    expect(self.cyclingPingTimer.loopingTimeout).to.be.null;
  });

  it('does not want ping early', function(done) {
    var cyclingPingTimer = this.cyclingPingTimer;
    cyclingPingTimer.start();
    var wantPingSpy = this.wantPingSpy;
    setTimeout(function() {
      expect(wantPingSpy.called).to.be.false;
      done();
    }, 150);
  });

  it('wants ping after configured time', function(done) {
    var cyclingPingTimer = this.cyclingPingTimer;
    var debugSpy = this.debugSpy;
    var wantPingSpy = this.wantPingSpy;
    cyclingPingTimer.start();
    setTimeout(function() {
      expect(wantPingSpy.calledOnce).to.be.true;
      expect(debugSpy.args).to.deep.equal([
        ['CyclingPingTimer ' + cyclingPingTimer.timerNumber + ':', 'ping timer started'],
        ['CyclingPingTimer ' + cyclingPingTimer.timerNumber + ':', 'server silent for too long, let\'s send a PING']
      ]);
      expect(cyclingPingTimer.pingWaitTimeout).to.be.ok;
      done();
    }, 250);
  });

  it('does not want ping if notified of activity', function(done) {
    var cyclingPingTimer = this.cyclingPingTimer;
    var debugSpy = this.debugSpy;
    cyclingPingTimer.start();
    var wantPingSpy = this.wantPingSpy;
    setTimeout(function() {
      cyclingPingTimer.notifyOfActivity();
    }, 150);
    setTimeout(function() {
      expect(wantPingSpy.called).to.be.false;
      expect(debugSpy.args).to.deep.equal([
        ['CyclingPingTimer ' + cyclingPingTimer.timerNumber + ':', 'ping timer started']
      ]);
      expect(cyclingPingTimer.loopingTimeout).to.be.ok;
      expect(cyclingPingTimer.pingWaitTimeout).to.be.null;
      expect(cyclingPingTimer.started).to.be.true;
      done();
    }, 250);
  });

  it('does not want ping if stopped', function(done) {
    var cyclingPingTimer = this.cyclingPingTimer;
    var debugSpy = this.debugSpy;
    cyclingPingTimer.start();
    var wantPingSpy = this.wantPingSpy;
    setTimeout(function() {
      cyclingPingTimer.stop();
      expect(cyclingPingTimer.loopingTimeout).to.be.null;
      expect(cyclingPingTimer.started).to.be.false;
    }, 150);
    setTimeout(function() {
      expect(wantPingSpy.called).to.be.false;
      expect(debugSpy.args).to.deep.equal([
        ['CyclingPingTimer ' + cyclingPingTimer.timerNumber + ':', 'ping timer started'],
        ['CyclingPingTimer ' + cyclingPingTimer.timerNumber + ':', 'ping timer stopped']
      ]);
      expect(cyclingPingTimer.loopingTimeout).to.be.null;
      expect(cyclingPingTimer.pingWaitTimeout).to.be.null;
      expect(cyclingPingTimer.started).to.be.false;
      done();
    }, 250);
  });

  it('does not time out early', function(done) {
    var cyclingPingTimer = this.cyclingPingTimer;
    var pingTimeoutSpy = this.pingTimeoutSpy;
    cyclingPingTimer.start();
    cyclingPingTimer.on('wantPing', function() {
      setTimeout(function() {
        expect(pingTimeoutSpy.called).to.be.false;
        done();
      }, 450);
    });
  });

  it('times out after configured time', function(done) {
    var cyclingPingTimer = this.cyclingPingTimer;
    var debugSpy = this.debugSpy;
    var pingTimeoutSpy = this.pingTimeoutSpy;
    cyclingPingTimer.start();
    cyclingPingTimer.on('wantPing', function() {
      setTimeout(function() {
        expect(pingTimeoutSpy.calledOnce).to.be.true;
        expect(debugSpy.args).to.deep.equal([
          ['CyclingPingTimer ' + cyclingPingTimer.timerNumber + ':', 'ping timer started'],
          ['CyclingPingTimer ' + cyclingPingTimer.timerNumber + ':', 'server silent for too long, let\'s send a PING'],
          ['CyclingPingTimer ' + cyclingPingTimer.timerNumber + ':', 'ping timer stopped'],
          ['CyclingPingTimer ' + cyclingPingTimer.timerNumber + ':', 'ping timeout!']
        ]);
        done();
      }, 550);
    });
  });

  it('does not time out if notified of activity', function(done) {
    var cyclingPingTimer = this.cyclingPingTimer;
    var debugSpy = this.debugSpy;
    cyclingPingTimer.start();
    var pingTimeoutSpy = this.pingTimeoutSpy;
    cyclingPingTimer.on('wantPing', function() {
      setTimeout(function() {
        cyclingPingTimer.notifyOfActivity();
      }, 450);
      setTimeout(function() {
        expect(pingTimeoutSpy.called).to.be.false;
        expect(debugSpy.args).to.deep.equal([
          ['CyclingPingTimer ' + cyclingPingTimer.timerNumber + ':', 'ping timer started'],
          ['CyclingPingTimer ' + cyclingPingTimer.timerNumber + ':', 'server silent for too long, let\'s send a PING']
        ]);
        expect(cyclingPingTimer.loopingTimeout).to.be.ok;
        expect(cyclingPingTimer.pingWaitTimeout).to.be.null;
        expect(cyclingPingTimer.started).to.be.true;
        done();
      }, 550);
    });
  });

  it('does not time out if stopped', function(done) {
    var cyclingPingTimer = this.cyclingPingTimer;
    var debugSpy = this.debugSpy;
    cyclingPingTimer.start();
    var pingTimeoutSpy = this.pingTimeoutSpy;
    cyclingPingTimer.on('wantPing', function() {
      setTimeout(function() {
        cyclingPingTimer.stop();
        expect(cyclingPingTimer.loopingTimeout).to.be.null;
        expect(cyclingPingTimer.started).to.be.false;
      }, 450);
      setTimeout(function() {
        expect(pingTimeoutSpy.called).to.be.false;
        expect(debugSpy.args).to.deep.equal([
          ['CyclingPingTimer ' + cyclingPingTimer.timerNumber + ':', 'ping timer started'],
          ['CyclingPingTimer ' + cyclingPingTimer.timerNumber + ':', 'server silent for too long, let\'s send a PING'],
          ['CyclingPingTimer ' + cyclingPingTimer.timerNumber + ':', 'ping timer stopped']
        ]);
        expect(cyclingPingTimer.loopingTimeout).to.be.null;
        expect(cyclingPingTimer.pingWaitTimeout).to.be.null;
        expect(cyclingPingTimer.started).to.be.false;
        done();
      }, 550);
    });
  });
});

describe('Client', function() {
  describe('ping timer', function() {
    context('with stubs', function() {
      testHelpers.hookMockSetup(beforeEach, afterEach, {meta: {stubTimer: true}});
      beforeEach(function() {
        this.pingSpy = this.lineSpy.withArgs(sinon.match(/^PING/i));
      });

      it('sends ping when timer emits wantPing', function(done) {
        var self = this;
        self.mock.on('line', function(line) {
          if (line === 'PING 1') teardown();
        });

        self.client.conn.cyclingPingTimer.emit('wantPing');

        function teardown() {
          expect(self.pingSpy.callCount).to.equal(1);
          done();
        }
      });

      it('notifies timer of activity when PONG received', function(done) {
        var self = this;
        expect(self.pingTimerStubs.notifyOfActivity.callCount).to.equal(1);
        expect(self.pingTimerStubs.start.callCount).to.equal(1);
        expect(self.pingTimerStubs.stop.callCount).to.equal(0);

        self.client.on('raw', function(message) {
          if (message.command !== 'PONG') return;
          expect(message.args).to.deep.equal(['1']);
          teardown();
        });

        self.mock.send(':localhost PONG 1\r\n');

        function teardown() {
          expect(self.pingTimerStubs.notifyOfActivity.callCount).to.equal(2);
          expect(self.pingTimerStubs.start.callCount).to.equal(1);
          expect(self.pingTimerStubs.stop.callCount).to.equal(0);
          expect(self.pingSpy.callCount).to.equal(0);
          done();
        }
      });

      it('disconnects when timer emits pingTimeout', function(done) {
        var self = this;

        self.client.conn.once('close', function() {
          teardown();
        });

        expect(self.pingTimerStubs.notifyOfActivity.callCount).to.equal(1);
        expect(self.pingTimerStubs.start.callCount).to.equal(1);
        expect(self.pingTimerStubs.stop.callCount).to.equal(0);
        expect(self.pingSpy.callCount).to.equal(0);

        self.client.conn.cyclingPingTimer.emit('pingTimeout');

        function teardown() {
          expect(self.pingTimerStubs.notifyOfActivity.callCount).to.equal(1);
          expect(self.pingTimerStubs.start.callCount).to.equal(1);
          expect(self.pingTimerStubs.stop.callCount).to.equal(2); // one for end(), one for on(close)
          expect(self.pingSpy.callCount).to.equal(0);
          // client attempts reconnect:
          expect(self.client.conn).to.be.null;
          expect(self.client.retryTimeout).to.be.ok;
          done();
        }
      });

      context('with foreign timer', function() {
        beforeEach(function(done) {
          this.foreignConn = this.client.conn;
          this.client.conn = null;
          this.client.connect(function() {
            done();
          });
        });

        afterEach(function() {
          this.foreignConn.destroy();
        });

        it('ignores wantPing', function(done) {
          var self = this, conn = this.foreignConn;
          conn.cyclingPingTimer.emit('wantPing');
          setTimeout(function() {
            expect(self.pingSpy.callCount).to.equal(0);
            done();
          }, 50);
        });

        it('ignores pingTimeout', function(done) {
          var self = this, conn = this.foreignConn;
          conn.cyclingPingTimer.emit('pingTimeout');
          setTimeout(function() {
            expect(self.client.conn).to.be.ok;
            done();
          }, 50);
        });
      });
    });

    context('with server', function() {
      var clientConfig = {
        millisecondsOfSilenceBeforePingSent: 200,
        millisecondsBeforePingTimeout: 500
      };
      testHelpers.hookMockSetup(beforeEach, afterEach, {client: clientConfig});

      beforeEach(function() {
        this.pingSpy = this.lineSpy.withArgs(sinon.match(/^PING/i));
        this.cyclingPingTimer = this.client.conn.cyclingPingTimer;
      });

      it('does not send ping early', function(done) {
        var pingSpy = this.pingSpy;
        setTimeout(function() {
          expect(pingSpy.called).to.be.false;
          done();
        }, 150);
      });

      it('sends ping after time with no server activity', function(done) {
        var pingSpy = this.pingSpy;
        setTimeout(function() {
          expect(pingSpy.calledOnce).to.be.true;
          done();
        }, 250);
      });

      it('does not time out early', function(done) {
        var cyclingPingTimer = this.cyclingPingTimer;
        var conn = this.client.conn;
        cyclingPingTimer.on('wantPing', function() {
          setTimeout(function() {
            expect(cyclingPingTimer.started).to.be.true;
            expect(conn.destroyed).to.be.false;
            done();
          }, 450);
        });
      });

      it('times out after period with no server activity', function(done) {
        var cyclingPingTimer = this.cyclingPingTimer;
        var conn = this.client.conn;
        this.cyclingPingTimer.on('wantPing', function() {
          setTimeout(function() {
            expect(cyclingPingTimer.started).to.be.false;
            expect(conn.destroyed).to.be.true;
            done();
          }, 550);
        });
      });

      it('does not time out with activity', function(done) {
        var mock = this.mock;
        var pingSpy = this.pingSpy;
        var clientPingSpy = sinon.spy();
        this.client.on('ping', clientPingSpy);
        var activityGiven = 0;
        var activityGiver;
        var giveActivity = function() {
          if (activityGiven >= 5) {
            clearInterval(activityGiver);
            expect(pingSpy.called).to.be.false;
            expect(clientPingSpy.called).to.be.true;
            done();
            return;
          }
          activityGiven += 1;
          mock.send(':localhost PING ' + activityGiven.toString() + '\r\n');
        };

        activityGiver = setInterval(giveActivity, 100);
      });
    });
  });
});
