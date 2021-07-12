var testHelpers = require('./helpers');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('Client', function() {
  describe('reconnection', function() {
    context('on connection interruption', function() {
      var clientConfig = {retryDelay: 50, autoConnect: false, millisecondsOfSilenceBeforePingSent: 100, millisecondsBeforePingTimeout: 200};
      var metaConfig = {callbackEarly: true, autoGreet: false};

      function sharedExample(callback) {
        context('with reconnecting client', function() {
          testHelpers.hookMockSetup(beforeEach, afterEach, {client: clientConfig, meta: metaConfig});

          it('reconnects with exactly one connection at a time', function(done) {
            var mock = this.mock;
            var client = this.client;
            var registeredSpy = sinon.spy();
            client.on('registered', registeredSpy);
            var debugStub = sinon.stub(client.out, 'debug');
            var abortSpy = sinon.spy();
            client.on('abort', abortSpy);

            var conns = [];
            mock.server.on('connection', function(c) {
              conns.push(c);
              mock.greet();
            });

            client.once('registered', function() {
              setTimeout(function() {
                callback(client, conns);
              }, 100);
              setTimeout(teardown, 400);
            });

            client.connect();

            function teardown() {
              expect(registeredSpy.calledTwice).to.be.true;
              expect(conns.length).to.equal(2);
              expect(conns[0].destroyed).to.be.true;
              expect(debugStub.args).to.deep.include(['Waiting 50ms before retrying']);
              expect(abortSpy.callCount).to.equal(0);
              done();
            }
          });
        });

        context('with opt.retryCount', function() {
          testHelpers.hookMockSetup(beforeEach, afterEach, {client: Object.assign({retryCount: 1}, clientConfig), meta: metaConfig});

          it('retries when disconnected', function(done) {
            var self = this, mock = self.mock, client = self.client;
            var registerSpy = sinon.spy();
            client.on('registered', registerSpy);
            var debugStub = sinon.stub(client.out, 'debug');
            var abortSpy = sinon.spy();
            client.on('abort', abortSpy);

            var conns = [];
            mock.server.on('connection', function(c) {
              conns.push(c);
              mock.greet();
            });

            client.once('registered', function() {
              setTimeout(function() {
                callback(client, conns);
              }, 100);
              setTimeout(teardown, 400);
            });

            client.connect();

            function teardown() {
              expect(registerSpy.callCount).to.equal(2);
              expect(conns.length).to.equal(2);
              expect(conns[0].destroyed).to.be.true;
              expect(debugStub.args).to.deep.include(['Waiting 50ms before retrying']);
              expect(abortSpy.callCount).to.equal(0);
              done();
            }
          });

          it('retries only once', function(done) {
            var self = this, mock = self.mock, client = self.client;
            var registerSpy = sinon.spy();
            client.on('registered', registerSpy);
            var debugStub = sinon.stub(client.out, 'debug');
            var abortSpy = sinon.spy();
            client.on('abort', abortSpy);

            var conns = [];
            mock.server.on('connection', function(c) {
              conns.push(c);
              mock.greet();
            });

            client.once('registered', function() {
              setTimeout(function() {
                callback(client, conns);
              }, 100);
              setTimeout(function() {
                callback(client, conns);
              }, 200);
              setTimeout(teardown, 400);
            });

            client.connect();

            function teardown() {
              expect(registerSpy.callCount).to.equal(2);
              expect(conns.length).to.equal(2);
              expect(conns[0].destroyed).to.be.true;
              expect(debugStub.args).to.deep.include(['Maximum retry count (1) reached. Aborting']);
              expect(abortSpy.args).to.deep.equal([
                [1]
              ]);
              done();
            }
          });

          it('obeys first parameter to Client.connect', function(done) {
            // doesn't reconnect
            var self = this, mock = self.mock, client = self.client;
            var registerSpy = sinon.spy();
            client.on('registered', registerSpy);
            var debugStub = sinon.stub(client.out, 'debug');
            var abortSpy = sinon.spy();
            client.on('abort', abortSpy);

            var conns = [];
            mock.server.on('connection', function(c) {
              conns.push(c);
              mock.greet();
            });

            client.once('registered', function() {
              setTimeout(function() {
                callback(client, conns);
              }, 100);
              setTimeout(teardown, 400);
            });

            client.connect(1);

            function teardown() {
              expect(registerSpy.callCount).to.equal(1);
              expect(conns.length).to.equal(1);
              expect(conns[0].destroyed).to.be.true;
              expect(debugStub.args).to.deep.include(['Maximum retry count (1) reached. Aborting']);
              expect(abortSpy.args).to.deep.equal([
                [1]
              ]);
              done();
            }
          });
        });
      }

      context('when ended', function() {
        // when the client ends the connection (potentially unexpectedly)
        sharedExample(function(client, _conns) {
          client.end();
        });
      });

      context('when connection breaks', function() {
        // when connection breaks from server end, like connection error
        sharedExample(function(_client, conns) {
          conns[conns.length-1].destroy();
        });
      });
    });
  });
});
