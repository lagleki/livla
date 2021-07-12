var testHelpers = require('./helpers');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('Client', function() {
  describe('disconnect', function() {
    it('sends correct message to server', function(done) {
      function teardown(mocks) {
        var quitSpy = mocks.lineSpy.withArgs(sinon.match(/^QUIT/i));
        expect(quitSpy.args).to.deep.equal([
          ['QUIT :quitting as a test']
        ]);
        mocks.mock.close(function(){ done(); });
      }
      function body(mocks) {
        mocks.mock.on('end', function(){ teardown(mocks); });
        mocks.client.disconnect('quitting as a test', function() { });
      }
      testHelpers.setupMocks(null, body);
    });
  });
});
