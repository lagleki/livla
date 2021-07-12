var testHelpers = require('./helpers');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('Client', function() {
  describe('command queue', function() {
    context('with config disabled', function() {
      testHelpers.hookMockSetup(beforeEach, afterEach);

      beforeEach(function(done) {
        var self = this;
        setTimeout(function() {
          self.connSpy = sinon.spy();
          self.client.conn.write = self.connSpy;
          done();
        }, 10);
      });

      it('is not enabled', function() {
        this.client.send('PING', 'test 1');
        this.client.send('PING', 'test 2');
        expect(this.connSpy.args).to.deep.equal([
          ['PING :test 1\r\n'],
          ['PING :test 2\r\n']
        ]);
      });
    });

    function sharedExamplesForCmdQueue() {
      beforeEach(function() {
        this.connSpy = sinon.spy();
        this.client.conn.write = this.connSpy;
      });

      it('is enabled', function(done) {
        var self = this;
        self.client.send('PING', 'test 1');
        self.client.send('PING', 'test 2');
        expect(self.connSpy.callCount).to.equal(0);
        setTimeout(first, 10);
        setTimeout(second, 30);

        function first() {
          expect(self.connSpy.args).to.deep.equal([
            ['PING :test 1\r\n']
          ]);
        }
        function second() {
          expect(self.connSpy.args).to.deep.equal([
            ['PING :test 1\r\n'],
            ['PING :test 2\r\n']
          ]);
          done();
        }
      });

      it('provides internal _sendImmediate to send immediately', function() {
        var self = this;
        function wrap() {
          self.client._sendImmediate('PING', 'test 1');
          self.client._sendImmediate('PING', 'test 2');
        }
        expect(wrap).not.to.throw();
        expect(this.connSpy.args).to.deep.equal([
          ['PING :test 1\r\n'],
          ['PING :test 2\r\n']
        ]);
      });

      it('disconnects immediately and clears queue', function(done) {
        var self = this;
        self.client.send('PING', 'test 1');
        self.client.send('PING', 'test 2');
        expect(self.connSpy.callCount).to.equal(0);
        setTimeout(first, 10);
        setTimeout(second, 50);

        function first() {
          expect(self.connSpy.args).to.deep.equal([
            ['PING :test 1\r\n']
          ]);
          self.client.disconnect();
          expect(self.connSpy.args).to.deep.equal([
            ['PING :test 1\r\n'],
            ['QUIT :node-irc says goodbye\r\n']
          ]);
        }
        function second() {
          expect(self.connSpy.args).to.deep.equal([
            ['PING :test 1\r\n'],
            ['QUIT :node-irc says goodbye\r\n']
          ]);
          done();
        }
      });

      it('can be disabled', function() {
        expect(this.client.floodProtectionInterval).to.be.ok;
        expect(this.client.floodProtectionEnabled).to.be.true;
        expect(this.client.cmdQueue).to.be.empty;
        expect(this.connSpy.args).to.be.empty;

        this.client.deactivateFloodProtection();

        // it clears the relevant things:
        expect(this.client.floodProtectionInterval).to.be.null;
        expect(this.client.floodProtectionEnabled).to.be.false;
        expect(this.client.cmdQueue).to.be.empty;
        expect(this.client._origSend).to.be.null;
        expect(this.client._sendImmediate).to.be.null;
        expect(this.client._clearCmdQueue).to.be.null;
        expect(this.client.dequeue).to.be.null;
        expect(this.connSpy.args).to.be.empty;

        // and it now sends immediately:
        this.client.send('PING', 'test1');
        this.client.send('PING', 'test2');
        expect(this.connSpy.args).to.deep.equal([
          ['PING test1\r\n'],
          ['PING test2\r\n']
        ]);
      });

      it('sends queue immediately in order when disabled', function(done) {
        var self = this;
        self.client.send('PING', 'test1');
        self.client.send('PING', 'test2');
        self.client.send('PING', 'test3');
        expect(self.connSpy.args).to.be.empty;

        self.client.deactivateFloodProtection();
        // it sends in order immediately:
        expect(self.client.cmdQueue).to.be.empty;
        expect(self.connSpy.callCount).to.equal(3);
        expect(self.connSpy.args).to.deep.equal([
          ['PING test1\r\n'],
          ['PING test2\r\n'],
          ['PING test3\r\n']
        ]);

        // and it now sends immediately when called more:
        self.client.send('PING', 'test4');
        self.client.send('PING', 'test5');
        expect(self.client.cmdQueue).to.be.empty;
        expect(self.connSpy.args).to.deep.equal([
          ['PING test1\r\n'],
          ['PING test2\r\n'],
          ['PING test3\r\n'],
          ['PING test4\r\n'],
          ['PING test5\r\n']
        ]);

        // and it doesn't send duplicates:
        setTimeout(end, 50);

        function end() {
          expect(self.connSpy.callCount).to.equal(5);
          done();
        }
      });

      it('does not do anything when deactivated twice', function(done) {
        var self = this;
        self.client.send('PING', 'test1');
        self.client.send('PING', 'test2');
        expect(self.connSpy.args).to.be.empty;

        self.client.deactivateFloodProtection();
        expect(self.client.cmdQueue).to.be.empty;
        expect(self.connSpy.callCount).to.equal(2);

        // and it now sends immediately when called more:
        self.client.send('PING', 'test3');
        self.client.send('PING', 'test4');
        expect(self.client.cmdQueue).to.be.empty;
        expect(self.connSpy.args).to.deep.equal([
          ['PING test1\r\n'],
          ['PING test2\r\n'],
          ['PING test3\r\n'],
          ['PING test4\r\n']
        ]);

        // and doesn't fail when re-disabled:
        self.client.deactivateFloodProtection();
        expect(self.client.cmdQueue).to.be.empty;
        expect(self.connSpy.args).to.deep.equal([
          ['PING test1\r\n'],
          ['PING test2\r\n'],
          ['PING test3\r\n'],
          ['PING test4\r\n']
        ]);

        // and it doesn't send duplicates:
        setTimeout(end, 50);

        function end() {
          expect(self.connSpy.callCount).to.equal(4);
          done();
        }
      });
    }

    context('with config enabled', function() {
      testHelpers.hookMockSetup(beforeEach, afterEach, {client: {floodProtection: true, floodProtectionDelay: 10}});

      beforeEach(function(done) {
        setTimeout(done, 50);
      });

      sharedExamplesForCmdQueue();
    });

    context('with method called', function() {
      testHelpers.hookMockSetup(beforeEach, afterEach);

      beforeEach(function(done) {
        this.client.activateFloodProtection(10);
        setTimeout(done, 10);
      });

      sharedExamplesForCmdQueue();
    });

    context('with method called to enable, disable and re-enable', function() {
      testHelpers.hookMockSetup(beforeEach, afterEach);

      beforeEach(function(done) {
        this.client.activateFloodProtection(10);
        this.client.deactivateFloodProtection();
        this.client.activateFloodProtection(10);
        setTimeout(done, 10);
      });

      sharedExamplesForCmdQueue();
    });
  });
});
