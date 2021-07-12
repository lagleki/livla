var testHelpers = require('./helpers');
var ircWithStubbedOutput = testHelpers.ircWithStubbedOutput;
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('Client', function() {
  describe('connect', function() {
    context('with standard greeting', function() {
      function runTests(done, isSecure, useSecureObject, skipObject) {
        var expected = testHelpers.getFixtures('basic');
        var port = isSecure ? 6697 : 6667;
        var mock = testHelpers.MockIrcd(port, 'utf-8', isSecure, true);
        var client;
        if (skipObject) {
          client = ircWithStubbedOutput('localhost', 'testbot');
        } else if (isSecure && useSecureObject) {
          client = ircWithStubbedOutput('notlocalhost', 'testbot', {
            secure: {
              host: 'localhost',
              port: port,
              rejectUnauthorized: false
            },
            selfSigned: true,
            retryCount: 0,
            debug: true
          });
        } else {
          client = ircWithStubbedOutput('localhost', 'testbot', {
            secure: isSecure,
            port: port,
            selfSigned: true,
            retryCount: 0,
            debug: true
          });
        }

        mock.server.on(isSecure ? 'secureConnection' : 'connection', function() { mock.greet(); });

        client.on('registered', function() {
          expect(mock.outgoing).to.deep.equal(expected.received);
          client.disconnect();
        });

        mock.on('end', function() {
          var msgs = mock.getIncomingMsgs();
          expect(msgs).to.deep.equal(expected.sent);
          mock.close(function() { done(); });
        });
      }

      it('connects, registers and quits with basic config', function(done) {
        runTests(done, false, false, false);
      });

      it('connects, registers and quits with secure boolean config', function(done) {
        runTests(done, true, false, false);
      });

      it('connects, registers and quits, with secure object config', function(done) {
        runTests(done, true, true, false);
      });

      it('connects, registers and quits with no config', function(done) {
        runTests(done, false, false, true);
      });
    });

    context('with double-CRLF greeting', function() {
      testHelpers.hookMockSetup(beforeEach, afterEach, {meta: {callbackEarly: true, autoGreet: false}});

      it('responds properly to greeting with double CRLF', function(done) {
        var greeting = ":localhost 001 testbot :Welcome to the Internet Relay Chat Network testbot\r\n\r\n";
        var mock = this.mock;
        var client = this.client;
        var lineSpy = this.lineSpy;
        mock.server.on('connection', function() { mock.send(greeting); });

        client.on('registered', function() {
          client.disconnect(teardown);
        });

        function teardown() {
          expect(lineSpy.args).to.deep.equal([
            ["NICK testbot"],
            ["USER nodebot 8 * :nodeJS IRC client"],
            ["QUIT :node-irc says goodbye"]
          ]);
          done();
        }
      });
    });

    context('with standard client', function() {
      context('with server', function() {
        testHelpers.hookMockSetup(beforeEach, afterEach, {client: {retryDelay: 50}});
        it('disallows double connections', function() {
          var client = this.client;
          var oldConn = client.conn;
          client.out.error = sinon.spy();

          client.connect();
          expect(client.conn).to.equal(oldConn);
          expect(client.out.error.args).to.deep.equal([
            ['Connection already active, not reconnecting – please disconnect first']
          ]);
        });

        it('disallows double disconnections', function() {
          var client = this.client;
          client.disconnect();
          expect(client.conn.requestedDisconnect).to.be.true;
          client.out.error = sinon.spy();

          client.disconnect();
          expect(client.conn.requestedDisconnect).to.be.true;
          expect(client.out.error.args).to.deep.equal([
            ['Connection already disconnecting, skipping disconnect']
          ]);
        });

        it('clears up auto-reconnect if told to disconnect while waiting', function(done) {
          var client = this.client;
          client.conn.on('close', abortReconnect);
          client.out.error = sinon.spy();
          client.end();
          function abortReconnect() {
            expect(client.retryTimeout).to.be.ok;
            client.disconnect();
            expect(client.conn).to.be.null;
            expect(client.retryTimeout).to.be.null;
            expect(client.out.error.args).to.deep.equal([
              ['Connection already broken, skipping disconnect (and clearing up automatic retry)']
            ]);
            done();
          }
        });
      });

      context('without server', function() {
        testHelpers.hookMockSetup(beforeEach, afterEach, {meta: {withoutServer: true}});

        it('skips disconnection if not connected', function() {
          var client = this.client;
          expect(client.conn).to.be.null;
          client.out.error = sinon.spy();

          client.disconnect();
          expect(client.conn).to.be.null;
          expect(client.retryTimeout).not.to.be.ok;
          expect(client.out.error.args).to.deep.equal([
            ['Connection already broken, skipping disconnect']
          ]);
        });
      });
    });

    context('with motd', function() {
      function sendMotd(mock, nick, messages) {
        messages = messages || ['Message'];
        mock.send(':127.0.0.1 375 ' + nick + ' :- 127.0.0.1 Message of the Day -\r\n');
        messages.forEach(function(line) {
          mock.send(':127.0.0.1 372 ' + nick + ' :- ' + line + '\r\n');
        });
        mock.send(':127.0.0.1 376 ' + nick + ' :End of /MOTD command.\r\n');
      }

      function verifyMotd(client, motd, motdLines) {
        var expected = '- 127.0.0.1 Message of the Day -\n';
        expected += motdLines.map(function(x) { return '- ' + x; }).join('\n') + '\n';
        expected += 'End of /MOTD command.\n';
        expect(motd).to.equal(expected);
        expect(client.motd).to.equal(expected);
      }

      function sharedTests() {
        it('emits motd', function(done) {
          var self = this;
          var motdLines = [
            'Line 1',
            'This is some more text as a test',
            'last line'
          ];
          self.client.on('motd', function(motd) {
            verifyMotd(self.client, motd, motdLines);
            done();
          });
          sendMotd(self.mock, 'testbot', motdLines);
        });

        it('overwrites old motd on new connection', function(done) {
          var self = this;
          var first = ['Sample'];
          var second = ['Sample text'];

          self.client.once('motd', verifyFirst);
          sendMotd(self.mock, 'testbot', first);

          function verifyFirst(motd) {
            verifyMotd(self.client, motd, first);
            self.client.disconnect(setupSecond);
          }

          function setupSecond() {
            self.client.connect();
            self.client.on('registered', function() {
              self.client.once('motd', verifySecond);
              sendMotd(self.mock, 'testbot', second);
            });
          }

          function verifySecond(motd) {
            verifyMotd(self.client, motd, second);
            done();
          }
        });
      }

      context('with opt.channels', function() {
        testHelpers.hookMockSetup(beforeEach, afterEach, {client: {channels: ['#test', '#test2', '#test3 password']}});

        sharedTests();

        beforeEach(function() {
          this.joinSpy = this.lineSpy.withArgs(sinon.match(/^JOIN/i));
        });

        it('joins specified channels on motd', function(done) {
          var expected = [['JOIN #test'], ['JOIN #test2'], ['JOIN #test3 password']];
          var self = this;
          sendMotd(self.mock, 'testbot');
          self.client.on('motd', function() {
            self.client.send('PING', 'endtest');
          });
          self.mock.on('line', function(line) {
            if (line !== 'PING endtest') return;
            expect(self.joinSpy.args).to.deep.equal(expected);
            done();
          });
        });
      });

      context('without opt.channels', function() {
        testHelpers.hookMockSetup(beforeEach, afterEach);

        sharedTests();

        beforeEach(function() {
          this.joinSpy = this.lineSpy.withArgs(sinon.match(/^JOIN/i));
        });

        it('does not join any channels on motd', function(done) {
          var expected = [];
          var self = this;
          sendMotd(self.mock, 'testbot');
          self.client.on('motd', function() {
            self.client.send('PING', 'endtest');
          });
          self.mock.on('line', function(line) {
            if (line !== 'PING endtest') return;
            expect(self.joinSpy.args).to.deep.equal(expected);
            done();
          });
        });
      });
    });

    context('with myinfo', function() {
      testHelpers.hookMockSetup(beforeEach, afterEach);

      it('parses usermodes', function(done) {
        var self = this;
        var expectedModes = 'DQRSZagiloswz';
        self.mock.send(':127.0.0.1 004 testbot 127.0.0.1 test-server-0.0.1 ' + expectedModes + ' CFILPQTbcefgijklmnopqrstvz bkloveqjfI\r\n');
        self.client.on('raw', function(message) {
          if (message.rawCommand !== '004') return;
          expect(message.command).to.equal('rpl_myinfo');
          expect(message.args).to.deep.equal([
            'testbot',
            '127.0.0.1',
            'test-server-0.0.1',
            expectedModes,
            'CFILPQTbcefgijklmnopqrstvz',
            'bkloveqjfI'
          ]);
          setTimeout(end, 10);
        });
        function end() {
          expect(self.client.supported.usermodes).to.equal(expectedModes);
          done();
        }
      });
    });

    context('with isupport', function() {
      testHelpers.hookMockSetup(beforeEach, afterEach);

      context('when parsing individual supports', function() {
        function iSupportIndividual(local, supportString, callback) {
          local.mock.send(':127.0.0.1 005 testbot ' + supportString + ' :are supported by this server\r\n');
          local.client.on('raw', function(message) {
            if (message.rawCommand !== '005') return;
            expect(message.command).to.equal('rpl_isupport');
            expect(message.args).to.deep.equal([
              'testbot', supportString, 'are supported by this server'
            ]);
            setTimeout(function() { callback(local); }, 10);
          });
        }

        it('parses chanlimit', function(done) {
          expect(this.client.supported.channel.limit['#']).not.to.equal(50);
          iSupportIndividual(this, 'CHANLIMIT=#:50', check);
          function check(local) {
            expect(local.client.supported.channel.limit['#']).to.equal(50);
            done();
          }
        });

        it('parses chanmodes', function(done) {
          var expectedChannelModes = {
            a: 'eIbq',
            b: 'k',
            c: 'flj',
            d: 'CFLPQTcgimnprstz'
          };
          expect(this.client.supported.channel.modes).not.to.deep.equal(expectedChannelModes);
          iSupportIndividual(this, 'CHANMODES=eIbq,k,flj,CFLPQTcgimnprstz', check);
          function check(local) {
            expect(local.client.supported.channel.modes).to.deep.equal(expectedChannelModes);
            done();
          }
        });

        it('parses chantypes', function(done) {
          expect(this.client.supported.channel.types).not.to.equal('#');
          iSupportIndividual(this, 'CHANTYPES=#', check);
          function check(local) {
            expect(local.client.supported.channel.types).to.equal('#');
            done();
          }
        });

        it('parses channellen', function(done) {
          expect(this.client.supported.channel.length).not.to.equal(50);
          iSupportIndividual(this, 'CHANNELLEN=50', check);
          function check(local) {
            expect(local.client.supported.channel.length).to.equal(50);
            done();
          }
        });

        it('parses maxlist', function(done) {
          expect(this.client.supported.maxlist.bqeI).not.to.equal(100);
          iSupportIndividual(this, 'MAXLIST=bqeI:100', check);
          function check(local) {
            expect(local.client.supported.maxlist.bqeI).to.equal(100);
            done();
          }
        });

        it('parses nicklen', function(done) {
          expect(this.client.supported.nicklength).not.to.equal(24);
          iSupportIndividual(this, 'NICKLEN=24', check);
          function check(local) {
            expect(local.client.supported.nicklength).to.equal(24);
            done();
          }
        });

        it('parses prefix', function(done) {
          var expectedModeForPrefix = {
            '@': 'o',
            '+': 'v'
          };
          var expectedPrefixForMode = {
            o: '@',
            v: '+'
          };
          var expectedB = 'ov';
          expect(this.client.modeForPrefix).not.to.deep.equal(expectedModeForPrefix);
          expect(this.client.prefixForMode).not.to.deep.equal(expectedPrefixForMode);
          expect(this.client.supported.channel.modes.b).not.to.equal(expectedB);
          iSupportIndividual(this, 'PREFIX=(ov)@+', check);
          function check(local) {
            expect(local.client.modeForPrefix).to.deep.equal(expectedModeForPrefix);
            expect(local.client.prefixForMode).to.deep.equal(expectedPrefixForMode);
            expect(local.client.supported.channel.modes.b).to.equal(expectedB);
            done();
          }
        });

        it('parses targmax', function(done) {
          var expectedTargets = {
            NAMES: 1,
            LIST: 1,
            KICK: 1,
            WHOIS: 1,
            PRIVMSG: 4,
            NOTICE: 4,
            ACCEPT: 0,
            MONITOR: 0
          };
          expect(this.client.supported.maxtargets).not.to.deep.equal(expectedTargets);
          iSupportIndividual(this, 'TARGMAX=NAMES:1,LIST:1,KICK:1,WHOIS:1,PRIVMSG:4,NOTICE:4,ACCEPT:,MONITOR:', check);
          function check(local) {
            expect(local.client.supported.maxtargets).to.deep.equal(expectedTargets);
            done();
          }
        });

        it('parses topiclen', function(done) {
          expect(this.client.supported.topiclength).not.to.equal(390);
          iSupportIndividual(this, 'TOPICLEN=390', check);
          function check(local) {
            expect(local.client.supported.topiclength).to.equal(390);
            done();
          }
        });

        // sample data has not been found for the isupports below
        // TODO: add real-life sample data for following tests

        it('parses idchan', function(done) {
          var expectedIdLength = {
            '!': 5
          };
          expect(this.client.supported.channel.idlength).not.to.deep.equal(expectedIdLength);
          iSupportIndividual(this, 'IDCHAN=!:5', check);
          function check(local) {
            expect(local.client.supported.channel.idlength).to.deep.equal(expectedIdLength);
            done();
          }
        });

        it('parses kicklen', function(done) {
          expect(this.client.supported.kicklength).not.to.equal(160);
          iSupportIndividual(this, 'KICKLEN=160', check);
          function check(local) {
            expect(local.client.supported.kicklength).to.equal(160);
            done();
          }
        });
      });

      it('parses multiple isupport args at once', function (done) {
        var self = this;
        // make sure args are not equal to values before:
        expect(self.client.supported.channel.limit['#']).not.to.equal(50);
        expect(self.client.supported.topiclength).not.to.equal(390);
        expect(self.client.supported.nicklength).not.to.equal(24);
        expect(self.client.supported.channel.length).not.to.equal(50);

        self.mock.send(':127.0.0.1 005 testbot CHANLIMIT=#:50 TOPICLEN=390 NICKLEN=24 CHANNELLEN=50 :are supported by this server\r\n');
        self.client.on('raw', function(message) {
          if (message.rawCommand !== '005') return;
          expect(message.command).to.equal('rpl_isupport');
          expect(message.args).to.deep.equal([
            'testbot', 'CHANLIMIT=#:50', 'TOPICLEN=390', 'NICKLEN=24', 'CHANNELLEN=50', 'are supported by this server'
          ]);
          setTimeout(check, 10);
        });

        function check() {
          expect(self.client.supported.channel.limit['#']).to.equal(50);
          expect(self.client.supported.topiclength).to.equal(390);
          expect(self.client.supported.nicklength).to.equal(24);
          expect(self.client.supported.channel.length).to.equal(50);
          done();
        }
      });
    });

    describe('whois', function() {
      testHelpers.hookMockSetup(beforeEach, afterEach);

      it('requests and processes own whois data', function(done) {
        var self = this;
        self.mock.on('line', function(line) {
          if (line !== 'WHOIS testbot') return;
          // first arg is nick of target
          self.mock.send(':127.0.0.1 311 testbot testbot ~testbot EXAMPLE.HOST * :test name\r\n'); // whoisuser (user, host, ?, realname)
          self.mock.send(':127.0.0.1 312 testbot testbot 127.0.0.1 :Test server\r\n'); // whoisserver (server, serverinfo)
          self.mock.send(':127.0.0.1 317 testbot testbot 0 1000000000 :seconds idle, signon time\r\n'); // whoisidle (idle)
          self.mock.send(':127.0.0.1 318 testbot testbot :End of /WHOIS list.\r\n');
        });
        self.client.on('whois', function(data) {
          expect(data).to.deep.equal({
            user: '~testbot',
            host: 'EXAMPLE.HOST',
            realname: 'test name',
            server: '127.0.0.1',
            serverinfo: 'Test server',
            idle: '0',
            nick: 'testbot'
          });

          setImmediate(function() {
            expect(self.client.nick).to.equal('testbot');
            expect(self.client.hostMask).to.equal('~testbot@EXAMPLE.HOST');
            expect(self.client.maxLineLength).to.equal(497 - 7 - 21);

            done();
          });
        });
      });
    });

    describe('with sasl', function() {
      var clientConfig = {sasl: true, nick: 'testbot', userName: 'nodebot', realName: 'node', password: 'test'};
      var metaConfig = {autoGreet: false, callbackEarly: true};

      function mockSaslAccepts(local, authMessage, end) {
        local.mock.on('line', function(line) {
          if (line === 'CAP REQ sasl') {
            local.mock.send(':127.0.0.1 CAP * ACK :sasl\r\n');
          } else if (line === 'AUTHENTICATE PLAIN') {
            local.mock.send('AUTHENTICATE +\r\n');
          } else if (line === 'AUTHENTICATE ' + authMessage) {
            local.mock.send(':127.0.0.1 900 testbot testbot!testbot@EXAMPLE.HOST testbot :You are now logged in as testbot\r\n');
            local.mock.send(':127.0.0.1 903 testbot :SASL authentication successful\r\n');
            local.mock.send(':127.0.0.1 378 testbot testbot :is connecting from EXAMPLE.HOST\r\n');
            local.client.on('raw', function(message) {
              if (message.rawCommand === '378') {
                expect(message.command).to.equal('rpl_whoishost');
                setTimeout(end, 10);
              }
            });
          }
        });
      }

      context('with default password', function() {
        testHelpers.hookMockSetup(beforeEach, afterEach, {client: clientConfig, meta: metaConfig});

        beforeEach(function() {
          this.sendStub = sinon.stub(this.client, 'send');
          this.sendStub.callThrough();
        });

        it('sends sasl on attempted connection', function(done) {
          var self = this;
          self.client.on('connect', function() {
            expect(self.sendStub.args).to.deep.equal([
              ['CAP', 'REQ', 'sasl'],
              ['NICK', 'testbot'],
              ['USER', 'nodebot', 8, '*', 'node']
            ]);
            done();
          });
        });

        it('responds to SASL capability acknowledgement', function(done) {
          var self = this;
          self.mock.on('line', function(line) {
            if (line === 'CAP REQ sasl') {
              self.mock.send(':127.0.0.1 CAP * ACK :sasl\r\n');
            } else if (line === 'AUTHENTICATE PLAIN') {
              end();
            }
          });
          function end() {
            expect(self.sendStub.args).to.deep.equal([
              ['CAP', 'REQ', 'sasl'],
              ['NICK', 'testbot'],
              ['USER', 'nodebot', 8, '*', 'node'],
              ['AUTHENTICATE', 'PLAIN']
            ]);
            done();
          }
        });

        it('errors if server NAKs SASL', function(done) {
          var self = this;
          self.errorSpy = sinon.spy();
          self.client.on('error', self.errorSpy);
          self.mock.on('line', function(line) {
            if (line !== 'CAP REQ sasl') return;
            self.mock.send(':127.0.0.1 CAP * NAK :sasl\r\n');
          });
          self.client.on('raw', function(message) {
            if (message.rawCommand === 'CAP') end();
          });
          function end() {
            self.client.removeListener('error', self.errorSpy);
            expect(self.sendStub.args).to.deep.equal([
              ['CAP', 'REQ', 'sasl'],
              ['NICK', 'testbot'],
              ['USER', 'nodebot', 8, '*', 'node']
            ]);
            expect(self.errorSpy.args).to.deep.equal([
              [{
                prefix: '127.0.0.1',
                server: '127.0.0.1',
                command: 'CAP',
                rawCommand: 'CAP',
                commandType: 'normal',
                args: ['*', 'NAK', 'sasl']
              }]
            ]);
            done();
          }
        });

        it('authenticates', function(done) {
          var self = this;
          mockSaslAccepts(self, 'dGVzdGJvdABub2RlYm90AHRlc3Q=', end);
          function end() {
            expect(self.sendStub.args).to.deep.equal([
              ['CAP', 'REQ', 'sasl'],
              ['NICK', 'testbot'],
              ['USER', 'nodebot', 8, '*', 'node'],
              ['AUTHENTICATE', 'PLAIN'],
              ['AUTHENTICATE', 'dGVzdGJvdABub2RlYm90AHRlc3Q='],
              ['CAP', 'END']
            ]);
            expect(self.unhandledSpy.args).to.deep.equal([]);
            done();
          }
        });
      });

      context('with too-long password', function() {
        testHelpers.hookMockSetup(beforeEach, afterEach, {client: Object.assign({}, clientConfig, {password: 'long'.repeat(75)}), meta: metaConfig});

        it('splits authenticate response', function(done) {
          this.sendStub = sinon.stub(this.client, 'send');
          this.sendStub.callThrough();
          var self = this;
          mockSaslAccepts(self, 'bG9uZ2xvbmdsb25nbG9uZw==', end);
          function end() {
            expect(self.sendStub.args).to.deep.equal([
              ['CAP', 'REQ', 'sasl'],
              ['NICK', 'testbot'],
              ['USER', 'nodebot', 8, '*', 'node'],
              ['AUTHENTICATE', 'PLAIN'],
              // fixture of base64 encoded userName, nick, password
              ['AUTHENTICATE', 'dGVzdGJvdABub2RlYm90AG' + 'xvbmdsb25nbG9uZ2'.repeat(23) + 'xvbmdsb25n'],
              ['AUTHENTICATE', 'bG9uZ2xvbmdsb25nbG9uZw=='],
              ['CAP', 'END']
            ]);
            done();
          }
        });
      });

      context('with just-long password', function() {
        testHelpers.hookMockSetup(beforeEach, afterEach, {client: Object.assign({}, clientConfig, {password: 'long'.repeat(70) + 'test'}), meta: metaConfig});
        it('handles a 400-byte response', function(done) {
          this.sendStub = sinon.stub(this.client, 'send');
          this.sendStub.callThrough();
          var self = this;
          mockSaslAccepts(self, '+', end);
          function end() {
            expect(self.sendStub.args).to.deep.equal([
              ['CAP', 'REQ', 'sasl'],
              ['NICK', 'testbot'],
              ['USER', 'nodebot', 8, '*', 'node'],
              ['AUTHENTICATE', 'PLAIN'],
              // fixture of base64 encoded userName, nick, password
              ['AUTHENTICATE', 'dGVzdGJvdABub2RlYm90AG' + 'xvbmdsb25nbG9uZ2'.repeat(23) + 'xvbmd0ZXN0'],
              ['AUTHENTICATE', '+'],
              ['CAP', 'END']
            ]);
            done();
          }
        });
      });

      context('without calling back early', function() {
        testHelpers.hookMockSetup(beforeEach, afterEach, {client: clientConfig});
        it('outputs sasl errors properly', function(done) {
          var self = this;
          self.errorSpy = sinon.spy();
          self.client.on('error', self.errorSpy);
          self.mock.send(':127.0.0.1 CAP * ACK :sasl\r\n');
          self.mock.send(':127.0.0.1 902 testbot :You must use a nick assigned to you\r\n'); // err_nicklocked
          self.mock.send(':127.0.0.1 904 testbot :SASL authentication failed\r\n'); // err_saslfail
          self.mock.send(':127.0.0.1 905 testbot :SASL message too long\r\n'); // err_sasltoolong
          self.mock.send(':127.0.0.1 906 testbot :SASL authentication aborted\r\n'); // err_saslaborted
          self.mock.send(':127.0.0.1 907 testbot :You have already authenticated using SASL\r\n'); // err_saslalready
          self.mock.send(':127.0.0.1 PING :endtest\r\n');
          self.client.on('ping', endTest);
          function endTest() {
            var messageBasis = {
              prefix: '127.0.0.1',
              server: '127.0.0.1',
              commandType: 'error'
            };
            self.client.removeListener('error', self.errorSpy);
            expect(self.errorSpy.args).to.deep.equal([
              [Object.assign({
                rawCommand: '902',
                command: 'err_nicklocked',
                args: ['testbot', 'You must use a nick assigned to you']
              }, messageBasis)],[Object.assign({
                rawCommand: '904',
                command: 'err_saslfail',
                args: ['testbot', 'SASL authentication failed']
              }, messageBasis)],[Object.assign({
                rawCommand: '905',
                command: 'err_sasltoolong',
                args: ['testbot', 'SASL message too long']
              }, messageBasis)],[Object.assign({
                rawCommand: '906',
                command: 'err_saslaborted',
                args: ['testbot', 'SASL authentication aborted']
              }, messageBasis)],[Object.assign({
                rawCommand: '907',
                command: 'err_saslalready',
                args: ['testbot', 'You have already authenticated using SASL']
              }, messageBasis)]
            ]);
            done();
          }
        });
      });
    });

    describe('with password', function() {
      testHelpers.hookMockSetup(beforeEach, afterEach, {client: {password: 'test'}, meta: {callbackEarly: true, autoGreet: false}});

      it('sends password', function(done) {
        var self = this;
        self.client.on('connect', function() {
          setTimeout(function() {
            expect(self.lineSpy.args).to.deep.include([
              'PASS test'
            ]);
            done();
          }, 10);
        });
      });
    });

    describe('with WEBIRC', function() {
      testHelpers.hookMockSetup(beforeEach, afterEach, {client: {webirc: {pass: 'test', userName: 'name', host: 'example.host', ip: '192.168.0.1'}}, meta: {callbackEarly: true, autoGreet: false}});

      it('sends details', function(done) {
        var self = this;
        self.client.on('connect', function() {
          setTimeout(function() {
            expect(self.lineSpy.args).to.deep.include([
              'WEBIRC test nodebot example.host 192.168.0.1'
            ]);
            done();
          }, 10);
        });
      });
    });
  });

  describe('_splitLongLines', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach, {meta: {withoutServer: true}});

    it('splits per fixtures', function() {
      var client = this.client;
      var group = testHelpers.getFixtures('_splitLongLines');
      group.forEach(function(item) {
        expect(client._splitLongLines(item.input, item.maxLength, [])).to.deep.equal(item.result);
      });
    });

    it('splits with no maxLength defined', function() {
      var client = this.client;
      var group = testHelpers.getFixtures('_splitLongLines_no_max');
      group.forEach(function(item) {
        expect(client._splitLongLines(item.input, null, [])).to.deep.equal(item.result);
      });
    });

    it('splits by byte with Unicode characters', function() {
      var client = this.client;
      var group = testHelpers.getFixtures('_splitLongLines_bytes');
      group.forEach(function(item) {
        expect(client._splitLongLines(item.input, null, [])).to.deep.equal(item.result);
      });
    });
  });

  describe('_speak', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach, {client: {messageSplit: 10}, meta: {withoutServer: true}});

    beforeEach(function() {
      this.sendStub = sinon.stub(this.client, 'send');
      this.selfMsgSpy = sinon.spy();
      this.client.on('selfMessage', this.selfMsgSpy);
    });

    it('skips if no text given', function() {
      this.client._speak('PRIVMSG', 'example');
      expect(this.sendStub.callCount).to.equal(0);
    });

    it('sends to channel', function() {
      this.client._speak('PRIVMSG', '#channel', 'text');
      expect(this.sendStub.args).to.deep.equal([
        ['PRIVMSG', '#channel', 'text']
      ]);
    });

    it('sends to user', function() {
      this.client._speak('PRIVMSG', 'testbot2', 'test message');
      expect(this.sendStub.args).to.deep.equal([
        ['PRIVMSG', 'testbot2', 'test message']
      ]);
    });

    it('emits when PRIVMSG', function() {
      this.client._speak('PRIVMSG', '#channel', 'test message 3');
      expect(this.sendStub.callCount).to.equal(1);
      expect(this.selfMsgSpy.args).to.deep.equal([
        ['#channel', 'test message 3']
      ]);
    });

    it('does not emit when not PRIVMSG', function() {
      this.client._speak('NOTICE', '#channel', 'test message 3');
      expect(this.sendStub.callCount).to.equal(1);
      expect(this.selfMsgSpy.callCount).to.equal(0);
    });

    it('sends on multiple lines if linebreaks given', function() {
      this.client._speak('PRIVMSG', '#channel', 'test\r\nnewline');
      expect(this.sendStub.args).to.deep.equal([
        ['PRIVMSG', '#channel', 'test'],
        ['PRIVMSG', '#channel', 'newline']
      ]);
      expect(this.selfMsgSpy.args).to.deep.equal([
        ['#channel', 'test'],
        ['#channel', 'newline']
      ]);
    });

    it('skips blank lines', function() {
      this.client._speak('PRIVMSG', '#channel', 'test\r\n\r\ntest2');
      expect(this.sendStub.args).to.deep.equal([
        ['PRIVMSG', '#channel', 'test'],
        ['PRIVMSG', '#channel', 'test2']
      ]);
      expect(this.selfMsgSpy.args).to.deep.equal([
        ['#channel', 'test'],
        ['#channel', 'test2']
      ]);
    });

    it('calculates maxLength correctly', function() {
      var client = this.client;
      var tests = [
        {maxLineLength: 30, expected: 10},
        {maxLineLength: 7, expected: 1}
      ];
      tests.forEach(function(item) {
        var splitStub = sinon.stub().callsFake(function(words) { return [words]; });
        client._splitLongLines = splitStub;
        client.maxLineLength = item.maxLineLength;
        client._speak('kind', 'target', 'test message'); // sample data
        expect(splitStub.args).to.deep.equal([
          ['test message', item.expected, []]
        ]);
      });
    });

    it('sends for each line split', function() {
      var splitStub = sinon.stub();
      splitStub.callsFake(function(str) {
        return str.split(' ');
      });
      this.client._splitLongLines = splitStub;
      this.client._speak('PRIVMSG', '#channel', 'test message split');
      expect(this.sendStub.args).to.deep.equal([
        ['PRIVMSG', '#channel', 'test'],
        ['PRIVMSG', '#channel', 'message'],
        ['PRIVMSG', '#channel', 'split']
      ]);
      expect(this.selfMsgSpy.args).to.deep.equal([
        ['#channel', 'test'],
        ['#channel', 'message'],
        ['#channel', 'split']
      ]);
    });
  });

  describe('_findChannelFromStrings', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach);

    it('detects channels in opt.channels', function() {
      this.client.opt.channels = ['#chan2', '#chan3'];
      expect(this.client._findChannelFromStrings('#chan')).to.equal(-1);
      expect(this.client._findChannelFromStrings('#chan2')).to.equal(0);
      expect(this.client._findChannelFromStrings('#chan3')).to.equal(1);
    });

    it('detects case-insensitively', function() {
      this.client.opt.channels = ['#Chan2', '#Chan3'];
      expect(this.client._findChannelFromStrings('#chan')).to.equal(-1);
      expect(this.client._findChannelFromStrings('#chan2')).to.equal(0);
      expect(this.client._findChannelFromStrings('#chan3')).to.equal(1);

      this.client.opt.channels = ['#chan2', '#chan3'];
      expect(this.client._findChannelFromStrings('#Chan')).to.equal(-1);
      expect(this.client._findChannelFromStrings('#Chan2')).to.equal(0);
      expect(this.client._findChannelFromStrings('#Chan3')).to.equal(1);
    });

    it('ignores keys', function() {
      this.client.opt.channels = ['#chan2 key2', '#Chan3 key3'];
      expect(this.client._findChannelFromStrings('#chan')).to.equal(-1);
      expect(this.client._findChannelFromStrings('#chan2')).to.equal(0);
      expect(this.client._findChannelFromStrings('#chan3')).to.equal(1);

      expect(this.client._findChannelFromStrings('#Chan')).to.equal(-1);
      expect(this.client._findChannelFromStrings('#Chan2')).to.equal(0);
      expect(this.client._findChannelFromStrings('#Chan3')).to.equal(1);
    });
  });

  describe('unhandled messages', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach, {client: {server: '127.0.0.1'}});
    specify('are emitted appropriately', function(done) {
      var self = this;
      self.client.on('unhandled', end);
      self.mock.send(':127.0.0.1 150 :test\r\n');
      function end() {
        var expected = {
          prefix: '127.0.0.1',
          server: '127.0.0.1',
          rawCommand: '150',
          command: '150',
          commandType: 'normal',
          args: ['test']
        };
        expect(self.unhandledSpy.args).to.deep.equal([[expected]]);
        done();
      }
    });
  });

  describe('errors', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach, {client: {server: '127.0.0.1'}});
    specify('are emitted appropriately', function(done) {
      var mock = this.mock;
      var client = this.client;

      client.on('error', function(msg) {
        var expected = {
          prefix: '127.0.0.1',
          server: '127.0.0.1',
          rawCommand: '421',
          command: 'err_unknowncommand',
          commandType: 'error',
          args: ['testbot', 'test', 'Unknown command']
        };
        expect(msg).to.deep.equal(expected);
        done();
      });

      client.send('test');
      mock.send(':127.0.0.1 421 testbot test :Unknown command\r\n');
    });
  });

  describe('without server', function() {
    testHelpers.hookMockSetup(beforeEach, afterEach, {meta: {withoutServer: true}});
    it('does not crash when disconnected and sending messages', function() {
      var client = this.client;
      function wrap() {
        client.say('#channel', 'message2');
        client.end();
        client.say('#channel', 'message3');
      }
      expect(wrap).not.to.throw();
    });
  });
});
