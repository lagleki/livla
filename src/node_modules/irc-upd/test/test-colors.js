var colors = require('../lib/colors.js');
var chai = require('chai');
var expect = chai.expect;

describe('Colors', function() {
  describe('.wrap', function() {
    it('does nothing if invalid color given', function() {
      expect(colors.wrap('unknown', 'test')).to.equal('test');
    });

    it('wraps in color without resetColor given', function() {
      expect(colors.wrap('white', 'test')).to.equal('\u000300test\u000f');
    });

    it('wraps in color with resetColor given', function() {
      expect(colors.wrap('white', 'test', 'black')).to.equal('\u000300test\u000301');
    });

    it('wraps in color even with invalid resetColor given', function() {
      expect(colors.wrap('white', 'test', 'invalid')).to.equal('\u000300test\u000f');
    });
  });

  describe('.codes', function() {
    specify('should be exported', function() {
      expect(colors.codes).to.be.an('object');
      expect(colors.codes.reset).to.eq('\u000f');
    });
  });
});
