var parseMessage = require('../lib/parse_message');
var testHelpers = require('./helpers');
var chai = require('chai');
var expect = chai.expect;

describe('parseMessage', function() {
  function sharedExamples(type) {
    it('parses fixtures correctly', function() {
      var checks = testHelpers.getFixtures('parse-line');
      Object.keys(checks).forEach(function(line) {
        var stripColors = false;
        var expected = Object.assign({}, checks[line]);
        if (Object.prototype.hasOwnProperty.call(expected, 'stripColors')) {
            stripColors = expected.stripColors;
            delete expected.stripColors;
        }
        expect(JSON.stringify(parseMessage(line, stripColors, type === 'strict'))).to.equal(JSON.stringify(expected));
      });
    });
  }

  context('in strict mode', function() {
    sharedExamples('strict');

    it('parses nonstandard fixtures according to spec', function() {
      var checks = testHelpers.getFixtures('parse-line-strict');

      Object.keys(checks).forEach(function(line) {
        expect(JSON.stringify(parseMessage(line, false, true))).to.equal(JSON.stringify(checks[line]));
      });
    });
  });

  context('in non-strict mode', function() {
    sharedExamples('non-strict');

    it('parses Unicode fixtures correctly', function() {
      var checks = testHelpers.getFixtures('parse-line-nonstrict');

      Object.keys(checks).forEach(function(line) {
        expect(JSON.stringify(parseMessage(line, false, false))).to.equal(JSON.stringify(checks[line]));
      });
    });

    it('does not crash with no prefix', function() {
      var checks = testHelpers.getFixtures('parse-line-noprefix');

      Object.keys(checks).forEach(function(line) {
        expect(JSON.stringify(parseMessage(line, false, false))).to.equal(JSON.stringify(checks[line]));
      });
    });
  });
});
