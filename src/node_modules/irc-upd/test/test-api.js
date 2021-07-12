var testHelpers = require('./helpers');
var joinChannelsBefore = testHelpers.joinChannelsBefore;
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('Client', function() {
  describe('raw handler', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach);
    it('throws if an error occurs and no error handler is bound', function() {
      var self = this;
      function wrap() {
        self.client.conn.emit('data', ':127.0.0.1 PING :1\r\n');
      }
      self.client.on('raw', function() {
        throw new Error('test error');
      });
      expect(wrap).to.throw(Error, 'test error');
    });

    it('passes error to error handler if bound', function() {
      var self = this;
      var errorSpy = sinon.spy();
      var error = new Error('test error');
      function wrap() {
        self.client.conn.emit('data', ':127.0.0.1 PING :1\r\n');
      }
      self.client.on('raw', function() {
        throw error;
      });
      self.client.on('error', errorSpy);
      expect(wrap).not.to.throw();
      expect(errorSpy.args).to.deep.equal([[error]]);
    });

    it('does not emit error if disconnect requested', function() {
      var self = this;
      var errorSpy = sinon.spy();
      var error = new Error('test error');
      function wrap() {
        self.client.conn.emit('data', ':127.0.0.1 PING :1\r\n');
      }
      self.client.on('raw', function() {
        self.client.disconnect();
        throw error;
      });
      self.client.on('error', errorSpy);
      expect(wrap).not.to.throw();
      expect(errorSpy.callCount).to.equal(0);
    });
  });

  describe('#connect', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach, {client: {autoConnect: false}});

    it('establishes socket without arguments', function(done) {
      var self = this;
      self.client.connect();
      self.client.on('registered', function() {
        done();
      });
    });

    it('accepts callback in first position', function(done) {
      var self = this;
      self.client.connect(function() { done(); });
    });

    it('accepts callback in second position', function(done) {
      var self = this;
      self.client.connect(0, function() { done(); });
    });

    // see test-reconnect.js for testing of retryCount parameter
  });

  describe('#send', function() {
    describe('with standard client and server', function() {
      testHelpers.hookMockSetup(beforeEach, afterEach);

      beforeEach(function() {
        this.debugSpy = sinon.spy();
        this.connSpy = sinon.spy();
        this.client.out.debug = this.debugSpy;
        this.client.conn.write = this.connSpy;
      });

      it('works with simple data', function() {
        this.client.send('JOIN', '#channel');
        expect(this.debugSpy.args).to.deep.equal([
          ['SEND:', 'JOIN #channel']
        ]);
        expect(this.connSpy.args).to.deep.equal([
          ['JOIN #channel\r\n']
        ]);
      });

      it('works with multiple arguments', function() {
        this.client.send('TEST', 'example', 'data');
        expect(this.debugSpy.args).to.deep.equal([
          ['SEND:', 'TEST example data']
        ]);
        expect(this.connSpy.args).to.deep.equal([
          ['TEST example data\r\n']
        ]);
      });

      it('works with multi-word last parameter', function() {
        this.client.send('TEST', 'example data');
        expect(this.debugSpy.args).to.deep.equal([
          ['SEND:', 'TEST :example data']
        ]);
        expect(this.connSpy.args).to.deep.equal([
          ['TEST :example data\r\n']
        ]);
      });

      it('works with comma-separated channel example', function() {
        this.client.send('PART', '#channel1,#channel2,#channel3', 'test message');
        expect(this.debugSpy.args).to.deep.equal([
          ['SEND:', 'PART #channel1,#channel2,#channel3 :test message']
        ]);
        expect(this.connSpy.args).to.deep.equal([
          ['PART #channel1,#channel2,#channel3 :test message\r\n']
        ]);
      });

      it('does not throw when disconnecting', function() {
        var self = this;
        function wrap() {
          self.client.disconnect();
          self.client.send('TEST', 'example data');
        }
        expect(wrap).not.to.throw();
        expect(self.debugSpy.args).to.deep.include([
          '(Disconnected) SEND:', 'TEST :example data'
        ]);
        expect(self.connSpy.args).to.deep.equal([
          ['QUIT :node-irc says goodbye\r\n']
        ]);
      });
    });

    describe('with client but no server', function() {
      testHelpers.hookMockSetup(beforeEach, afterEach, {meta: {withoutServer: true}});

      beforeEach(function() {
        this.debugSpy = sinon.spy();
        this.client.out.debug = this.debugSpy;
      });

      it('does not throw when disconnected', function() {
        var self = this;
        function wrap() {
          self.client.send('TEST', 'example data');
        }
        expect(wrap).not.to.throw();
        expect(self.debugSpy.args).to.deep.equal([
          ['(Disconnected) SEND:', 'TEST :example data']
        ]);
      });
    });
  });

  describe('#join', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach);

    function downcaseChannels(chans) {
      return chans.map(function(x) { return x.toLowerCase(); });
    }

    beforeEach(function(done) {
      var self = this;
      setTimeout(function() {
        self.debugSpy = sinon.spy();
        self.sendSpy = sinon.spy();
        self.client.out.debug = self.debugSpy;
        self.client.send = self.sendSpy;
        done();
      }, 10);
    });

    function sharedExamplesFor(channels, remoteChannels) {
      it('sends correct command and does not throw with no callback', function() {
        var self = this;
        function wrap() {
          self.client.join(channels.join(','));
        }
        expect(wrap).not.to.throw();
        expect(this.sendSpy.args).to.deep.equal([
          ['JOIN', channels.join(',')]
        ]);
      });

      it('adds to opt.channels on successful join', function(done) {
        var self = this;
        var i = 0;
        self.client.on('join', function() {
          i++;
          if (i === channels.length) setTimeout(check, 10);
        });
        expect(self.client.opt.channels).to.be.empty;
        self.client.join(channels.join(','));
        remoteChannels.forEach(function(remoteChan) {
          self.mock.send(':testbot!~testbot@EXAMPLE.HOST JOIN :' + remoteChan + '\r\n');
        });

        function check() {
          expect(downcaseChannels(self.client.opt.channels)).to.deep.equal(downcaseChannels(channels));
          done();
        }
      });

      it('does not add duplicates to opt.channels', function(done) {
        var self = this;
        var i = 0;
        self.client.on('join', function() {
          i++;
          if (i === channels.length) setTimeout(check, 10);
        });
        self.client.opt.channels = channels;
        self.client.join(channels.join(','));
        remoteChannels.forEach(function(remoteChan) {
          self.mock.send(':testbot!~testbot@EXAMPLE.HOST JOIN :' + remoteChan + '\r\n');
        });

        function check() {
          expect(downcaseChannels(self.client.opt.channels)).to.deep.equal(downcaseChannels(channels));
          done();
        }
      });

      it('calls given callback', function(done) {
        var self = this;
        expect(self.client.opt.channels).to.be.empty;
        self.client.join(channels.join(','), check);
        remoteChannels.forEach(function(remoteChan) {
          self.mock.send(':testbot!~testbot@EXAMPLE.HOST JOIN :' + remoteChan + '\r\n');
        });

        var i = 0;
        function check(nick, message) {
          expect(nick).to.equal('testbot');
          expect(message).to.deep.equal({
            prefix: 'testbot!~testbot@EXAMPLE.HOST',
            nick: 'testbot',
            user: '~testbot',
            host: 'EXAMPLE.HOST',
            commandType: 'normal',
            command: 'JOIN',
            rawCommand: 'JOIN',
            args: [remoteChannels[i]]
          });
          i++;
          if (i === channels.length) done();
        }
      });

      it('sends right command with key', function() {
        var self = this;
        function wrap() {
          self.client.join(channels.join(',') + ' ' +  channels.map(function() { return 'key'; }).join(','));
        }
        expect(wrap).not.to.throw();
        expect(this.sendSpy.args).to.deep.equal([
          ['JOIN', channels.join(','), channels.map(function() { return 'key'; }).join(',')]
        ]);
      });

      it('works with key', function(done) {
        var self = this;
        self.client.opt.channels = [channels[0]];
        self.client.join(channels.join(',') + ' ' +  channels.map(function() { return 'key'; }).join(','), check);
        remoteChannels.forEach(function(remoteChan) {
          self.mock.send(':testbot!~testbot@EXAMPLE.HOST JOIN :' + remoteChan + '\r\n');
        });

        var i = 0;
        function check(nick, message) {
          expect(nick).to.equal('testbot');
          expect(message).to.deep.equal({
            prefix: 'testbot!~testbot@EXAMPLE.HOST',
            nick: 'testbot',
            user: '~testbot',
            host: 'EXAMPLE.HOST',
            commandType: 'normal',
            command: 'JOIN',
            rawCommand: 'JOIN',
            args: [remoteChannels[i]]
          });
          i++;
          if (i === channels.length) end();
        }

        function end() {
          var expected = downcaseChannels(channels);
          expected = expected.map(function(x, index) {
            if (index === 0) return x;
            return x + ' key';
          });
          expect(downcaseChannels(self.client.opt.channels)).to.deep.equal(expected);
          done();
        }
      });
    }

    context('with same lowercase local and remote channel', function() {
      sharedExamplesFor(['#channel'], ['#channel']);
    });

    context('with same mixed-case local and remote channel', function() {
      sharedExamplesFor(['#Channel'], ['#Channel']);
    });

    context('with mixed-case local channel differing from lowercase remote channel', function() {
      sharedExamplesFor(['#Channel'], ['#channel']);
    });

    context('with lowercase local channel differing from mixed-case remote channel', function() {
      sharedExamplesFor(['#channel'], ['#Channel']);
    });

    context('with multiple channels', function() {
      var localChannels = ['#channel', '#channel2', '#Test', '#Test2'];
      var remoteChannels = ['#channel', '#Channel2', '#test', '#Test2'];

      sharedExamplesFor(localChannels, remoteChannels);
    });

    context('with zero parameter', function() {
      var localChannels = ['#channel', '#channel2', '#Test', '#Test2'];
      var remoteChannels = ['#channel', '#Channel2', '#test', '#Test2'];

      joinChannelsBefore(beforeEach, localChannels, remoteChannels);

      it('sends correct command and does not throw without callback', function() {
        var self = this;
        function wrap() {
          self.client.join('0');
        }
        expect(wrap).not.to.throw();
        expect(this.sendSpy.args).to.deep.equal([
          ['JOIN', '0']
        ]);
      });

      it('removes all channels from opt.channels and does not call callback', function() {
        var self = this;
        var localPartSpy = sinon.spy();
        var callbackSpy = sinon.spy();
        self.client.on('part', localPartSpy);
        self.client.join('0', callbackSpy);
        self.mock.on('line', function(line) {
          if (line !== 'JOIN 0') return;
          remoteChannels.forEach(function(remoteChan) {
            self.mock.send(':testbot!~testbot@EXAMPLE.HOST PART ' + remoteChan + ' :Left all channels\r\n');
          });
        });
        var i = 0;
        self.client.on('part', function() {
          i++;
          if (i === localChannels.length) setTimeout(teardown, 10);
        });

        function teardown() {
          expect(self.client.opt.channels).to.be.empty;
          expect(callbackSpy.callCount).to.equal(0);
          var standardMsg = {
            prefix: 'testbot!~testbot@EXAMPLE.HOST',
            nick: 'testbot',
            user: '~testbot',
            host: 'EXAMPLE.HOST',
            command: 'PART',
            rawCommand: 'PART',
            commandType: 'normal'
          };
          var expected = remoteChannels.map(function(remoteChan) {
            var message = Object.assign({args: [remoteChan, 'Left all channels']}, standardMsg);
            return [remoteChan, 'testbot', 'Left all channels', message];
          });
          expect(localPartSpy.args).to.deep.equal(expected);
        }
      });
    });
  });

  describe('#part', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach);

    function downcaseChannels(chans) {
      return chans.map(function(x) { return x.toLowerCase(); });
    }

    beforeEach(function(done) {
      var self = this;
      setTimeout(function() {
        self.debugSpy = sinon.spy();
        self.sendSpy = sinon.spy();
        self.client.out.debug = self.debugSpy;
        self.client.send = self.sendSpy;
        done();
      }, 10);
    });

    function sharedExamplesFor(channels, remoteChannels) {
      joinChannelsBefore(beforeEach, channels, remoteChannels);

      it('works with no message or callback', function() {
        var self = this;
        function wrap() {
          self.client.part(channels.join(','));
        }
        expect(wrap).not.to.throw();
        expect(this.sendSpy.args).to.deep.equal([
          ['PART', channels.join(',')]
        ]);
      });

      it('sends with message and no callback', function() {
        var self = this;
        function wrap() {
          self.client.part(channels.join(','), 'test message');
        }
        expect(wrap).not.to.throw();
        expect(this.sendSpy.args).to.deep.equal([
          ['PART', channels.join(','), 'test message']
        ]);
      });

      it('sends with callback and no message', function() {
        var self = this;
        function wrap() {
          self.client.part(channels.join(','), function() {});
        }
        expect(wrap).not.to.throw();
        expect(this.sendSpy.args).to.deep.equal([
          ['PART', channels.join(',')]
        ]);
      });

      it('sends with message and callback', function() {
        var self = this;
        function wrap() {
          self.client.part(channels.join(','), 'test message', function() {});
        }
        expect(wrap).not.to.throw();
        expect(this.sendSpy.args).to.deep.equal([
          ['PART', channels.join(','), 'test message']
        ]);
      });

      it('removes from opt.channels', function(done) {
        var self = this;
        var i = 0;
        self.client.on('part', function() {
          i++;
          if (i === channels.length) setTimeout(check, 10);
        });
        expect(downcaseChannels(self.client.opt.channels)).to.deep.equal(downcaseChannels(remoteChannels));
        self.client.part(channels.join(','), 'test message');
        remoteChannels.forEach(function(remoteChan) {
          self.mock.send(':testbot!~testbot@EXAMPLE.HOST PART ' + remoteChan + ' :test message\r\n');
        });

        function check() {
          expect(self.client.opt.channels).to.empty;
          done();
        }
      });

      it('calls given callback', function(done) {
        var self = this;
        expect(downcaseChannels(self.client.opt.channels)).to.deep.equal(downcaseChannels(remoteChannels));
        self.client.part(channels.join(','), check);
        remoteChannels.forEach(function(remoteChan) {
          self.mock.send(':testbot!~testbot@EXAMPLE.HOST PART ' + remoteChan + ' :test message\r\n');
        });

        var i = 0;
        function check(nick, reason, message) {
          expect(nick).to.equal('testbot');
          expect(reason).to.equal('test message');
          expect(message).to.deep.equal({
            prefix: 'testbot!~testbot@EXAMPLE.HOST',
            nick: 'testbot',
            user: '~testbot',
            host: 'EXAMPLE.HOST',
            commandType: 'normal',
            command: 'PART',
            rawCommand: 'PART',
            args: [remoteChannels[i], 'test message']
          });
          i++;
          if (i === channels.length) done();
        }
      });
    }

    context('with same lowercase local and remote channel', function() {
      sharedExamplesFor(['#channel'], ['#channel']);
    });

    context('with same mixed-case local and remote channel', function() {
      sharedExamplesFor(['#Channel'], ['#Channel']);
    });

    context('with mixed-case local channel differing from lowercase remote channel', function() {
      sharedExamplesFor(['#Channel'], ['#channel']);
    });

    context('with lowercase local channel differing from mixed-case remote channel', function() {
      sharedExamplesFor(['#channel'], ['#Channel']);
    });

    context('with multiple channels', function() {
      var localChannels = ['#channel', '#channel2', '#Test', '#Test2'];
      var remoteChannels = ['#channel', '#Channel2', '#test', '#Test2'];

      sharedExamplesFor(localChannels, remoteChannels);
    });
  });

  describe('#list', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach);

    beforeEach(function(done) {
      var self = this;
      setTimeout(function() {
        self.sendSpy = sinon.spy();
        self.client.send = self.sendSpy;
        done();
      }, 10);
    });

    it('sends given arguments directly', function() {
      this.client.list('arg1', 'arg2');
      expect(this.sendSpy.args).to.deep.equal([
        ['LIST', 'arg1', 'arg2']
      ]);
    });
  });

  describe('#whois', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach);

    // skip client whois handling
    beforeEach(function(done) {
      setTimeout(done, 10);
    });

    context('with stubbed send', function() {
      beforeEach(function() {
        this.sendSpy = sinon.spy();
        this.client.send = this.sendSpy;
      });

      it('sends whois with given nick and no callback', function() {
        this.client.whois('testbot2');
        expect(this.sendSpy.args).to.deep.equal([
          ['WHOIS', 'testbot2']
        ]);
      });

      it('sends whois with given nick and callback', function() {
        this.client.whois('testbot3', function() {});
        expect(this.sendSpy.args).to.deep.equal([
          ['WHOIS', 'testbot3']
        ]);
      });
    });

    function respondWhois(local, targetUsername) {
      // first arg is nick of target
      local.mock.send(':127.0.0.1 311 testbot ' + targetUsername + ' ~testbot2 EXAMPLE.HOST * :testbot2\r\n'); // whoisuser (user, host, ?, realname)
      local.mock.send(':127.0.0.1 319 testbot ' + targetUsername + ' :#channel @#channel2\r\n'); // rpl_whoischannels (channels)
      local.mock.send(':127.0.0.1 312 testbot ' + targetUsername + ' 127.0.0.1 :Test server\r\n'); // whoisserver (server, serverinfo)
      local.mock.send(':127.0.0.1 301 testbot ' + targetUsername + ' :I\'m busy\r\n'); // away (away)
      local.mock.send(':127.0.0.1 317 testbot ' + targetUsername + ' 100 1000000000 :seconds idle, signon time\r\n'); // whoisidle (idle)
      local.mock.send(':127.0.0.1 318 testbot ' + targetUsername + ' :End of /WHOIS list.\r\n');
    }

    function whoisResponse(local, localNick, remoteNick, done) {
      local.mock.on('line', function(line) {
        if (line !== 'WHOIS ' + localNick) return;
        respondWhois(local, remoteNick);
      });

      local.client.whois(localNick, function(data) {
        expect(data).to.deep.equal({
          user: '~testbot2',
          host: 'EXAMPLE.HOST',
          realname: 'testbot2',
          server: '127.0.0.1',
          serverinfo: 'Test server',
          idle: '100',
          nick: remoteNick,
          channels: ['#channel', '@#channel2'],
          away: 'I\'m busy'
        });
        done();
      });
    }

    it('calls callback on whois response with lowercase nick', function(done) {
      whoisResponse(this, 'testbot4', 'testbot4', done);
    });

    it('calls callback on whois response with mixed-case nick', function(done) {
      whoisResponse(this, 'Testbot4', 'Testbot4', done);
    });

    it('calls callback on whois response with differing mixed-case server nick', function(done) {
      whoisResponse(this, 'testbot4', 'Testbot4', done);
    });

    it('calls callback on whois response with differing lowercase server nick', function(done) {
      whoisResponse(this, 'Testbot4', 'testbot4', done);
    });
  });

  // for notice, say, as they work the same
  function sharedExamplesForSpeaks(commandName, expectedCommand, isAction) {
    // see also test-irc.js #_speak

    function wrapMessage(message) {
      if (!isAction) return message;
      return '\u0001ACTION ' + message + '\u0001';
    }

    beforeEach(function() {
      this.sendStub = sinon.stub(this.client, 'send');
    });

    it('skips if no text given', function() {
      this.client[commandName]('#channel');
      expect(this.sendStub.callCount).to.equal(0);
    });

    it('works with basic text', function() {
      this.client[commandName]('#channel', 'test message');
      expect(this.sendStub.args).to.deep.equal([
        [expectedCommand, '#channel', wrapMessage('test message')]
      ]);
    });

    it('works with basic text and user', function() {
      this.client[commandName]('testbot2', 'test message');
      expect(this.sendStub.args).to.deep.equal([
        [expectedCommand, 'testbot2', wrapMessage('test message')]
      ]);
    });

    it('splits on manual linebreak and skips empty lines', function() {
      this.client[commandName]('#channel', 'test\r\nmessage\r\n\r\nanother');
      expect(this.sendStub.args).to.deep.equal([
        [expectedCommand, '#channel', wrapMessage('test')],
        [expectedCommand, '#channel', wrapMessage('message')],
        [expectedCommand, '#channel', wrapMessage('another')]
      ]);
    });

    it('splits on long lines as normal for _speak', function() {
      var splitStub = sinon.stub();
      splitStub.callsFake(function(str) {
        return str.split(' ');
      });
      this.client._splitLongLines = splitStub;
      this.client[commandName]('#channel', 'test message lines');
      expect(this.sendStub.args).to.deep.equal([
        [expectedCommand, '#channel', wrapMessage('test')],
        [expectedCommand, '#channel', wrapMessage('message')],
        [expectedCommand, '#channel', wrapMessage('lines')]
      ]);
    });
  }

  describe('#notice', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach);
    sharedExamplesForSpeaks('notice', 'NOTICE');

    it('does not emit selfMessage on send', function() {
      var selfMsgSpy = sinon.spy();
      this.client.on('selfMessage', selfMsgSpy);
      this.client.notice('target', 'test message');
      expect(selfMsgSpy.callCount).to.equal(0);
    });
  });

  describe('#say', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach);
    sharedExamplesForSpeaks('say', 'PRIVMSG');

    it('emits selfMessage on send', function() {
      var selfMsgSpy = sinon.spy();
      this.client.on('selfMessage', selfMsgSpy);
      this.client.say('target', 'test message');
      expect(selfMsgSpy.args).to.deep.equal([
        ['target', 'test message']
      ]);
    });
  });

  describe('#action', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach, {client: {messageSplit: 19}, meta: {withoutServer: true}});
    sharedExamplesForSpeaks('action', 'PRIVMSG', true);

    it('calculates maxLength correctly', function() {
      var client = this.client;
      var tests = [
        {maxLineLength: 39, expected: 10},
        {maxLineLength: 16, expected: 1}
      ];
      tests.forEach(function(item) {
        var splitStub = sinon.stub().callsFake(function(words) { return [words]; });
        client._splitLongLines = splitStub;
        client.maxLineLength = item.maxLineLength;
        client.action('target', 'test message'); // sample data
        expect(splitStub.args).to.deep.equal([
          ['test message', item.expected, []]
        ]);
      });
    });

    it('emits selfMessage on action send', function() {
      var selfMsgSpy = sinon.spy();
      this.client.on('selfMessage', selfMsgSpy);
      this.client.action('target', 'test message');
      expect(selfMsgSpy.args).to.deep.equal([
        ['target', '\u0001ACTION test message\u0001']
      ]);
    });
  });

  describe('#ctcp', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach, {meta: {withoutServer: true}});

    beforeEach(function() {
      this.saySpy = sinon.spy();
      this.noticeSpy = sinon.spy();
      this.client.say = this.saySpy;
      this.client.notice = this.noticeSpy;
    });

    it('passes through properly', function() {
      this.client.ctcp('user', null, 'ACTION message');
      expect(this.noticeSpy.args).to.deep.equal([
        ['user', '\u0001ACTION message\u0001']
      ]);
      expect(this.saySpy.callCount).to.equal(0);
    });

    it('uses privmsg instead if told to', function() {
      this.client.ctcp('user', 'privmsg', 'ACTION message');
      expect(this.noticeSpy.callCount).to.equal(0);
      expect(this.saySpy.args).to.deep.equal([
        ['user', '\u0001ACTION message\u0001']
      ]);
    });
  });
});
