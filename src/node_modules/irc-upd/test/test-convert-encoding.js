var testHelpers = require('./helpers');
var checks = testHelpers.getFixtures('convert-encoding');
var proxyquire = require('proxyquire');
var chai = require('chai');
var expect = chai.expect;

describe('Client', function() {
  function ircStubbedWith(chardet, converter) {
    return proxyquire('../lib/irc', { chardet: chardet, 'iconv-lite': converter });
  }

  describe('convertEncoding', function() {
    function sharedExamplesFor(encoding) {
      var clientConfig = {};
      if (encoding) clientConfig.encoding = encoding;

      context('with stubbed libraries', function() {
        it('works with valid data');
        it('does not throw with sample data');
        it('does not throw with invalid data');
      });

      context('without optional libraries', function() {
        it('does not throw with sample data', function() {
          var ircWithoutCharset = ircStubbedWith(null, null);
          var client = new ircWithoutCharset.Client('localhost', 'nick', Object.assign({autoConnect: false}, clientConfig));
          expect(client.canConvertEncoding()).not.to.be.true;
          checks.causesException.forEach(function(line) {
            var wrap = function() {
              client.convertEncoding(line);
            };
            expect(wrap).not.to.throw();
          });
        });
      });

      context('with proper charset detector and converter', function() {
        testHelpers.hookMockSetup(beforeEach, afterEach, {client: clientConfig});
        beforeEach(function() {
          if (!this.client.canConvertEncoding()) this.skip();
        });

        it('does not throw with sample data', function() {
          var client = this.client;
          checks.causesException.forEach(function(line) {
            var wrap = function() {
              client.convertEncoding(Buffer.from(line));
            };
            expect(wrap).not.to.throw();
          });
        });

        it('does not throw with invalid data');
      });
    }

    context('without encoding config', function() {
      sharedExamplesFor();
    });

    context('with utf-8 encoding config', function() {
      var encoding = 'utf-8';
      sharedExamplesFor(encoding);

      context("with valid data", function() {
        testHelpers.hookMockSetup(beforeEach, afterEach, {client: {encoding: encoding}});

        var data = checks.sampleData;
        Object.keys(data).forEach(function(conversion) {
          var tests = data[conversion];
          it('works ' + conversion, function() {
            var client = this.client;
            tests.forEach(function(pair) {
              var original = Buffer.from(pair[0]);
              var expected = Buffer.from(pair[1]);
              var actual = client.convertEncoding(original);
              expect(actual).to.deep.equal(expected);
            });
          });
        });
      });
    });
  });

  describe('canConvertEncoding', function() {
    var latinData = [0x73, 0x63, 0x68, 0xf6, 0x6e];
    var utfData = [0x73, 0x63, 0x68, 0xc3, 0xb6, 0x6e];
    var mockCharsetDetector = {detect: function(str) {
        expect(Array.from(str)).to.deep.equal(latinData);
        return 'ISO-8859-1';
    }};
    var mockConv = {
      decode: function(str, charset) {
        expect(Array.from(str)).to.deep.equal(latinData);
        expect(charset).to.equal('ISO-8859-1');
        return 'stubbed data';
      },
      encode: function(decoded, encoding) {
        expect(decoded).to.equal('stubbed data');
        expect(encoding).to.equal('utf-8');
        return utfData;
      }
    };

    it('is false when the charset detector doesn\'t load', function() {
      var ircWithoutCharsetDetector = ircStubbedWith(null, mockConv);
      var client = new ircWithoutCharsetDetector.Client('localhost', 'nick', {autoConnect: false});
      expect(ircWithoutCharsetDetector.canConvertEncoding()).to.be.false;
      expect(client.canConvertEncoding()).to.be.false;
    });

    it('is false when the encoding converter doesn\'t load', function() {
      var ircWithoutIconv = ircStubbedWith(mockCharsetDetector, null);
      var client = new ircWithoutIconv.Client('localhost', 'nick', {autoConnect: false});
      expect(ircWithoutIconv.canConvertEncoding()).to.be.false;
      expect(client.canConvertEncoding()).to.be.false;
    });

    it('is true when convertEncoding works with test data', function() {
      var ircWithRequires = ircStubbedWith(mockCharsetDetector, mockConv);
      var client = new ircWithRequires.Client('localhost', 'nick', {autoConnect: false});
      expect(ircWithRequires.canConvertEncoding()).to.be.true;
      expect(client.canConvertEncoding()).to.be.true;
    });
  });
});
