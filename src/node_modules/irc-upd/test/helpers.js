/* Mock irc server */

var path = require('path');
var fs = require('fs');
var net = require('net');
var tls = require('tls');
var util = require('util');
var EventEmitter = require('events');
var sinon = require('sinon');
var proxyquire = require('proxyquire');
var stubbedUtil = {log: util.log};
var irc = proxyquire('../lib/irc', {util: stubbedUtil});

module.exports.ircWithStubbedOutput = function(server, clientNick, opt) {
  stubbedUtil.log = sinon.stub();
  return new irc.Client(server, clientNick, opt);
};

var MockIrcd = function(port, encoding, isSecure, quiet) {
    var self = this;
    var connectionClass;
    var options = {};

    if (isSecure) {
        connectionClass = tls;
        options = {
            key: fs.readFileSync(path.resolve(__dirname, 'data/ircd.key')),
            cert: fs.readFileSync(path.resolve(__dirname, 'data/ircd.pem'))
        };
    } else {
        connectionClass = net;
    }

    this.port = port || (isSecure ? 6697 : 6667);
    this.encoding = encoding || 'utf-8';
    this.incoming = [];
    this.outgoing = [];
    if (!quiet) console.log('Mock server initializing.');

    this.server = connectionClass.createServer(options, function(c) {
        var active = true;
        c.on('data', function(data) {
            var msg = data.toString(self.encoding).split('\r\n').filter(function(m) { return m; });
            self.incoming = self.incoming.concat(msg);
            msg.forEach(function(line) { self.emit('line', line); });
        });

        self.on('send', function(data) {
            if (!active || c.destroyed) return;
            self.outgoing.push(data);
            c.write(data);
        });

        c.on('end', function() {
            active = false;
            self.emit('end');
        });
    });

    this.server.listen(this.port);

    this.server.on('close', function(){
        if (!quiet) console.log('Mock server closed.');
    });
};
util.inherits(MockIrcd, EventEmitter);

MockIrcd.prototype.send = function(data) {
  if (data.slice(-2) !== '\r\n') {
    console.log("WARNING: mock.send called without trailing \\r\\n");
    console.log("data:", data);
  }
  this.emit('send', data);
};

MockIrcd.prototype.close = function() {
    this.server.close.apply(this.server, arguments);
};

MockIrcd.prototype.getIncomingMsgs = function() {
    return this.incoming;
};

MockIrcd.prototype.greet = function(username) {
    username = username || 'testbot';
    this.send(':localhost 001 ' + username + ' :Welcome to the Internet Relay Chat Network testbot\r\n');
};

var fixtures = require('./data/fixtures');
module.exports.getFixtures = function(testSuite) {
    return fixtures[testSuite];
};

module.exports.MockIrcd = function(port, encoding, isSecure, quiet) {
  return new MockIrcd(port, encoding, isSecure, quiet);
};

var pingTimerStubs = {
  notifyOfActivity: sinon.stub(),
  stop: sinon.stub(),
  start: sinon.stub()
};

var MockPingTimer = function() {
  for (var key in pingTimerStubs) {
    pingTimerStubs[key].reset();
  }
  Object.assign(this, pingTimerStubs);
};
util.inherits(MockPingTimer, EventEmitter);

module.exports.MockPingTimer = function() {
  return new MockPingTimer();
};

var ircWithPingStub = proxyquire('../lib/irc', {util: stubbedUtil, './cycling_ping_timer.js': MockPingTimer});

function setupMocks(config, callback) {
  // both args optional
  // config.client gets merged into irc.Client config, except client.server and client.nick (used in irc.Client params)
  // config.server is used for MockIrcd (port, encoding, isSecure, disableOutput)
  // config.meta:
  // - autoGreet (default true): automatically greets client on connection
  // - callbackEarly (default false): calls callback when initialization finished instead ofon  client registered event
  // - disableOutput (default true): stubs client's util.log to reduce output clutter
  // - withoutServer (default false): skips server, makes client not autoConnect by default and enables callbackEarly
  // - stubTimer (default false): stubs the cyclingPingTimer

  if (typeof callback === 'undefined' && typeof config === 'function') { callback = config; config = undefined; }
  config = config || {};
  config.meta = config.meta || {};
  config.client = config.client || {};
  config.server = config.server || {};

  var defaultMeta = {autoGreet: true, callbackEarly: false, disableOutput: true, withoutServer: false, stubTimer: false};
  var defaultClient = {debug: true};
  var defaultServer = {};

  var metaConfig = Object.assign(defaultMeta, config.meta);
  if (metaConfig.withoutServer) defaultClient.autoConnect = false;

  var clientConfig = Object.assign(defaultClient, config.client);
  var serverConfig = Object.assign(defaultServer, config.server);

  if (clientConfig.autoConnect === false) metaConfig.callbackEarly = true;

  var quiet = metaConfig.disableOutput;
  var stubTimer = metaConfig.stubTimer;

  var mockObj = {};

  if (!metaConfig.withoutServer) {
    var lineSpy = sinon.spy();
    var mock = module.exports.MockIrcd(serverConfig.port, serverConfig.encoding, serverConfig.isSecure, quiet);
    mock.on('line', lineSpy);
    mock.server.on('connection', function() {
      if (metaConfig.autoGreet) mock.greet();
    });
    mockObj.mock = mock;
    mockObj.lineSpy = lineSpy;
  }

  var clientServer = 'localhost';
  if (clientConfig.server) {
    clientServer = clientConfig.server;
    delete clientConfig.server;
  }
  var clientNick = 'testbot';
  if (clientConfig.nick) {
    clientNick = clientConfig.nick;
    delete clientConfig.nick;
  }

  if (quiet) {
    stubbedUtil.log = sinon.stub();
  } else {
    stubbedUtil.log = util.log.bind(util);
  }
  var lib = irc;
  if (stubTimer) {
    lib = ircWithPingStub;
    mockObj.pingTimerStubs = pingTimerStubs;
  }
  var client = new lib.Client(clientServer, clientNick, clientConfig);
  mockObj.client = client;

  var unhandledSpy = sinon.spy();
  client.on('unhandled', unhandledSpy);
  mockObj.unhandledSpy = unhandledSpy;

  client.once('registered', function() {
    if (!metaConfig.callbackEarly) callback(mockObj);
  });
  if (metaConfig.callbackEarly) callback(mockObj);
}
module.exports.setupMocks = setupMocks;

function teardownMocks(mockObj, callback) {
  teardownClient();
  function teardownClient() {
    if (mockObj.client) {
      if (mockObj.client.floodProtectionEnabled) mockObj.client.deactivateFloodProtection();
      if (mockObj.client.conn && !mockObj.client.conn.requestedDisconnect) {
        mockObj.client.disconnect(teardownMock);
        return;
      }
      mockObj.client.disconnect();
    }
    teardownMock();
  }
  function teardownMock() {
    if (mockObj.mock) {
      mockObj.mock.close(function() { callback(); });
    } else {
      callback();
    }
  }
}
module.exports.teardownMocks = teardownMocks;

module.exports.hookMockSetup = function hookMockSetup(beforeEach, afterEach, config) {
  config = config || {};
  beforeEach(function(done) {
    var self = this;
    setupMocks(config, function(mocks) {
      for (var key in mocks) {
        self[key] = mocks[key];
      }
      done();
    });
  });

  afterEach(function(done) {
    teardownMocks({client: this.client, mock: this.mock}, done);
  });
};

function joinChannels(local, localChannels, remoteChannels, done) {
  var i = 0;
  local.client.on('join', function() {
    i++;
    if (i === localChannels.length) {
      setTimeout(function() {
        if (local.debugSpy) local.debugSpy.resetHistory();
        if (local.sendSpy) local.sendSpy.resetHistory();
        done();
      }, 10);
    }
  });
  localChannels.forEach(function(chan) {
    local.client.join(chan);
  });
  remoteChannels.forEach(function(remoteChan) {
    local.mock.send(':testbot!~testbot@EXAMPLE.HOST JOIN :' + remoteChan + '\r\n');
  });
}
module.exports.joinChannels = joinChannels;

module.exports.joinChannelsBefore = function (beforeEach, localChannels, remoteChannels) {
  beforeEach(function(done) {
    joinChannels(this, localChannels, remoteChannels, done);
  });
};

module.exports.emitNames = function (local, channelName, names) {
  local.mock.send(':localhost 353 testbot = ' + channelName + ' :' + names + '\r\n');
  local.mock.send(':localhost 366 testbot ' + channelName + ' :End of /NAMES list.\r\n');
};
