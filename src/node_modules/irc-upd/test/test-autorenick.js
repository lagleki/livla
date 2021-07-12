var testHelpers = require('./helpers');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('Client', function() {
  describe('autoRenick', function() {
    function defaultRenickTest(local, onRegister) {
      var rebuked = false;
      var mock = local.mock;
      var client = local.client;
      mock.on('line', function(line) {
        var args = line.split(' ');
        if (args[0] !== 'NICK') return;
        if (args[1] === 'testbot') {
          if (!rebuked) {
            rebuked = true;
            mock.send(':localhost 433 * testbot :Nickname is already in use.\r\n');
          } else {
            mock.send(':testbot2!~testbot@mockhost.com NICK :testbot\r\n');
          }
        } else if (args[1] === 'testbot1') {
          mock.send(':localhost 433 * testbot1 :Nickname is already in use.\r\n');
        } else if (args[1] === 'testbot2') {
          mock.greet('testbot2');
        }
      });
      client.on('registered', function() {
        if (onRegister) onRegister();
      });
    }

    context('with config disabled', function() {
      var clientConfig = {autoRenick: false, renickDelay: 300};

      context('when it gets the desired nickname', function() {
        testHelpers.hookMockSetup(beforeEach, afterEach, {client: clientConfig});

        beforeEach(function() {
          this.nickSpy = this.lineSpy.withArgs(sinon.match(/^NICK/i));
        });

        it('settles on first nickname', function() {
          expect(this.client.nick).to.equal('testbot');
          expect(this.client.hostMask).to.equal('testbot');
          expect(this.client.maxLineLength).to.equal(483);
        });

        it('does not plan to renick', function() {
          expect(this.client.conn.renickInterval).to.be.undefined;
        });

        it('does not send renick', function(done) {
          var nickSpy = this.nickSpy;
          setTimeout(function() {
            expect(nickSpy.calledOnce).to.be.true;
            expect(nickSpy.calledWithExactly('NICK testbot')).to.be.true;
            done();
          }, 400);
        });
      });

      context('when it does not get the desired nickname', function() {
        testHelpers.hookMockSetup(beforeEach, afterEach, {client: clientConfig, meta: {callbackEarly: true, autoGreet: false}});

        beforeEach(function() {
          this.nickSpy = this.lineSpy.withArgs(sinon.match(/^NICK/i));
        });

        it('attains suitable fallback', function(done) {
          var client = this.client;
          var nickSpy = this.nickSpy;
          defaultRenickTest(this, function onRegistered() {
            expect(nickSpy.args).to.deep.equal([
              ['NICK testbot'],
              ['NICK testbot1'],
              ['NICK testbot2']
            ]);
            expect(client.nick).to.eq('testbot2');
            expect(client.hostMask).to.equal('testbot');
            expect(client.maxLineLength).to.equal(482);
            done();
          });
        });

        it('does not plan to renick', function(done) {
          var client = this.client;
          defaultRenickTest(this, function onRegistered() {
            expect(client.conn.renickInterval).to.be.undefined;
            done();
          });
        });

        it('does not send renick', function(done) {
          var nickSpy = this.nickSpy;
          setTimeout(function() {
            expect(nickSpy.calledOnce).to.be.true;
            expect(nickSpy.calledWithExactly('NICK testbot')).to.be.true;
            done();
          }, 500);
        });
      });
    });

    context('with config enabled', function() {
      context('when it gets the desired nickname', function() {
        var clientConfig = {autoRenick: true, renickDelay: 300};
        testHelpers.hookMockSetup(beforeEach, afterEach, {client: clientConfig});

        beforeEach(function() {
          this.nickSpy = this.lineSpy.withArgs(sinon.match(/^NICK/i));
        });

        it('settles on first nickname', function() {
          expect(this.client.nick).to.equal('testbot');
          expect(this.client.hostMask).to.equal('testbot');
          expect(this.client.maxLineLength).to.equal(483);
        });

        it('does not plan to renick', function() {
          expect(this.client.conn.renickInterval).to.be.undefined;
        });

        it('does not send renick', function(done) {
          var nickSpy = this.nickSpy;
          setTimeout(function() {
            expect(nickSpy.calledOnce).to.be.true;
            expect(nickSpy.calledWithExactly('NICK testbot')).to.be.true;
            done();
          }, 400);
        });
      });

      context('when it does not get the desired nickname', function() {
        context('longer tests', function() {
          var clientConfig = {autoRenick: true, renickDelay: 300};
          testHelpers.hookMockSetup(beforeEach, afterEach, {client: clientConfig, meta: {callbackEarly: true, autoGreet: false}});

          beforeEach(function() {
            this.nickSpy = this.lineSpy.withArgs(sinon.match(/^NICK/i));
          });

          it('attains suitable fallback', function(done) {
            var client = this.client;
            var nickSpy = this.nickSpy;
            defaultRenickTest(this, function onRegistered() {
              expect(nickSpy.args).to.deep.equal([
                ['NICK testbot'],
                ['NICK testbot1'],
                ['NICK testbot2']
              ]);
              expect(client.nick).to.eq('testbot2');
              expect(client.hostMask).to.equal('testbot');
              expect(client.maxLineLength).to.equal(482);
              done();
            });
          });

          it('plans to renick', function(done) {
            var client = this.client;
            defaultRenickTest(this, function onRegistered() {
              expect(client.conn.renickInterval).to.be.ok;
              done();
            });
          });

          it('does not renick early', function(done) {
            var nickSpy = this.nickSpy;
            defaultRenickTest(this, function onRegistered() {
              setTimeout(function() {
                expect(nickSpy.args).to.deep.equal([
                  ['NICK testbot'],
                  ['NICK testbot1'],
                  ['NICK testbot2']
                ]);
                done();
              }, 250);
            });
          });

          it('renicks', function(done) {
            var nickSpy = this.nickSpy;
            defaultRenickTest(this, function onRegistered() {
              setTimeout(function() {
                expect(nickSpy.args).to.deep.equal([
                  ['NICK testbot'],
                  ['NICK testbot1'],
                  ['NICK testbot2'],
                  ['NICK testbot']
                ]);
                done();
              }, 350);
            });
          });

          it('stops renicking when it gets its nickname', function(done) {
            var client = this.client;
            var nickSpy = this.nickSpy;
            defaultRenickTest(this, function onRegistered() {
              client.on('nick', function(oldNick, newNick) {
                if (oldNick !== 'testbot2' || newNick !== 'testbot') return;
                expect(client.nick).to.eq('testbot');
                expect(client.hostMask).to.equal('testbot');
                expect(client.maxLineLength).to.equal(483);
                expect(client.conn.renickInterval).to.be.null;
                expect(nickSpy.args).to.deep.equal([
                  ['NICK testbot'],
                  ['NICK testbot1'],
                  ['NICK testbot2'],
                  ['NICK testbot']
                ]);
                setTimeout(function() {
                  expect(nickSpy.args).to.deep.equal([
                    ['NICK testbot'],
                    ['NICK testbot1'],
                    ['NICK testbot2'],
                    ['NICK testbot']
                  ]);
                  done();
                }, 350);
              });
            });
          });
        });

        context('shorter tests', function() {
          function basicRenickTest(local, expected, onFinish, repeatRebuke) {
            var rebuked = false;
            var greeted = false;
            var mock = local.mock;
            var nickSpy = local.nickSpy;
            mock.on('line', function(line) {
              var args = line.split(' ');
              if (args[0] !== 'NICK') return;
              if (args[1] === 'testbot') {
                if (repeatRebuke || !rebuked) {
                  rebuked = true;
                  mock.send(':localhost 433 * testbot :Nickname is already in use.\r\n');
                }
              } else if (!greeted) {
                mock.greet(args[1]);
              }
              if (expected.length === nickSpy.args.length) {
                expect(nickSpy.args).to.deep.equal(expected);
                setTimeout(function() {
                  expect(nickSpy.args).to.deep.equal(expected);
                  onFinish();
                }, 200);
              }
            });
          }

          var metaConfig = {callbackEarly: true, autoGreet: false};
          var clientConfig = {autoRenick: true, renickDelay: 50, renickCount: 3};
          testHelpers.hookMockSetup(beforeEach, afterEach, {client: clientConfig, meta: metaConfig});

          beforeEach(function() {
            this.nickSpy = this.lineSpy.withArgs(sinon.match(/^NICK/i));
          });

          it('only renicks given amount without further response', function(done) {
            basicRenickTest(
              this,
              [
                ['NICK testbot'],
                ['NICK testbot1'],
                ['NICK testbot'],
                ['NICK testbot'],
                ['NICK testbot']
              ],
              done
            );
          });

          it('only renicks given amount with further response', function(done) {
            basicRenickTest(
              this,
              [
                ['NICK testbot'],
                ['NICK testbot1'],
                ['NICK testbot'],
                ['NICK testbot'],
                ['NICK testbot']
              ],
              done,
              true
            );
          });

          it('does not renick if nickinuse handler calls cancelAutoRenick', function(done) {
            var client = this.client;
            client.on('raw', function handler(message) {
              if (message.command !== 'err_nicknameinuse') return;
              client.removeListener('raw', handler);
              setTimeout(function() {
                client.cancelAutoRenick();
                expect(client.conn.renickInterval).to.be.null;
              }, 75);
            });

            basicRenickTest(
              this,
              [
                ['NICK testbot'],
                ['NICK testbot1'],
                ['NICK testbot']
              ],
              function() {
                expect(client.conn.renickInterval).to.be.null;
                done();
              }
            );
          });

          it('does not renick if it renicks in the meantime', function(done) {
            var client = this.client;
            var mock = this.mock;
            client.on('raw', function handler(message) {
              if (message.command !== 'err_nicknameinuse') return;
              client.removeListener('raw', handler);
              expect(client.conn.renickInterval).to.be.ok;
              mock.send(':testbot1!~testbot@mockhost.com NICK :testbot2\r\n');
            });

            basicRenickTest(
              this,
              [
                ['NICK testbot'],
                ['NICK testbot1']
              ],
              function() {
                expect(client.conn.renickInterval).to.be.null;
                done();
              }
            );
          });

          it('does not renick if it has its config nick changed to the temporary one', function(done) {
            var client = this.client;
            client.on('raw', function handler(message) {
              if (message.command !== 'err_nicknameinuse') return;
              client.removeListener('raw', handler);
              expect(client.conn.renickInterval).to.be.ok;
              client.opt.nick = 'testbot1';
            });

            basicRenickTest(
              this,
              [
                ['NICK testbot'],
                ['NICK testbot1']
              ],
              function() {
                expect(client.nick).to.eq('testbot1');
                expect(client.opt.nick).to.eq('testbot1');
                expect(client.conn.renickInterval).to.be.null;
                done();
              }
            );
          });
        });
      });
    });
  });
});
