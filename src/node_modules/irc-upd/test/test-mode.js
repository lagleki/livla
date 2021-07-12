var testHelpers = require('./helpers');
var chai = require('chai');
var expect = chai.expect;

describe('Client events', function() {
  describe('+mode', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach);

    it('should trigger +mode when joining as operator', function(done) {
      // Set prefix modes
      this.mock.send(':localhost 005 testbot PREFIX=(ov)@+ CHANTYPES=#& :are supported by this server\r\n');

      // Force join into auditorium
      this.mock.send(':testbot JOIN #auditorium\r\n');

      // +o the invisible user
      this.mock.send(':ChanServ MODE #auditorium +o user\r\n');

      this.client.on('+mode', function(channel, by, mode, argument) {
        if (channel === '#auditorium' && argument === 'user') {
          done();
        }
      });
    });
  });

  describe('modes', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach);
    it('should have accurate state at each step as per fixture', function(done) {
      var mock = this.mock;
      var client = this.client;

      var count = 0;
      function checkModes() {
        expect(client.chans['#channel']).to.deep.equal(expected[count++]);
        if (count === expected.length) teardown();
      }
      client.on('+mode', checkModes);
      client.on('-mode', checkModes);

      var fixture = testHelpers.getFixtures('mode');
      var expected = fixture.expected;
      var serverMessages = fixture.serverMessages;

      serverMessages.forEach(function(message) {
        mock.send(message);
      });

      function teardown() {
        expect(count).to.equal(expected.length);
        done();
      }
    });
  });
});
