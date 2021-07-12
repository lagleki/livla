var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var proxyquire = require('proxyquire');

describe('Client', function() {
  describe('out', function() {
    before(function() {
      var logStub = sinon.spy();
      var utilStub = {log: logStub};
      var irc = proxyquire('../lib/irc', {util: utilStub});
      this.logStub = logStub;
      this.ircWithStub = irc;

      this.makeClient = function(config) {
        this.client = new this.ircWithStub.Client('localhost', 'nick', Object.assign({autoConnect: false}, config));
        return this.client;
      };
    });

    beforeEach(function() {
      this.logStub.resetHistory();
    });

    describe('debug', function() {
      it('does not output with debug config disabled', function() {
        this.makeClient({debug: false});
        this.client.out.debug('Test message');
        expect(this.logStub.args).to.deep.equal([]);
      });

      it('outputs with debug config enabled', function() {
        this.makeClient({debug: true});
        this.client.out.debug('Test message');
        expect(this.logStub.args).to.deep.equal([['Test message']]);
        this.client.out.debug('New message');
        expect(this.logStub.args).to.deep.equal([['Test message'], ['New message']]);
      });
    });

    describe('error', function() {
      before(function(){
        this.testErrorOutput = function() {
          this.client.out.error('Test message');
          expect(this.logStub.args).to.deep.equal([
            ['\u001b[01;31mERROR:', 'Test message', '\u001b[0m']
          ]);
          this.client.out.error('New message');
          expect(this.logStub.args).to.deep.equal([
            ['\u001b[01;31mERROR:', 'Test message', '\u001b[0m'],
            ['\u001b[01;31mERROR:', 'New message', '\u001b[0m']
          ]);
        };
      });

      it('does not output with both configs disabled', function() {
        this.makeClient({debug: false, showErrors: false});
        this.client.out.error('Test message');
        expect(this.logStub.args).to.deep.equal([]);
      });

      it('outputs if debug config enabled', function() {
        this.makeClient({debug: true, showErrors: false});
        this.testErrorOutput();
      });

      it('outputs if errors config enabled', function() {
        this.makeClient({debug: false, showErrors: true});
        this.testErrorOutput();
      });

      it('outputs if both configs enabled', function() {
        this.makeClient({debug: true, showErrors: true});
        this.testErrorOutput();
      });
    });
  });
});
