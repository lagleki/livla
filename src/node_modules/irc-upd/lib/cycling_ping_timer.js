'use strict';

var util = require('util');
var EventEmitter = require('events');

/**
 * This class encapsulates the ping timeout functionality.
 * When enough silence (lack of server-sent activity) passes, an object of this type will emit a 'wantPing' event, indicating you should send a PING message to the server in order to get some signs of life from it.
 * If enough time passes after that (i.e. server does not respond to PING), then an object of this type will emit a 'pingTimeout' event.
 *
 * To start the gears turning, call start() on an instance of this class to put it in the 'started' state.
 *
 * When server-side activity occurs, call notifyOfActivity() on the object.
 *
 * When a pingTimeout occurs, the object will go into the 'stopped' state.
 */
var ctr = 0;

function CyclingPingTimer(client) {
    var self = this;
    self.timerNumber = ctr++;
    self.started = false;

    // Only one of these two should be non-null at any given time.
    self.loopingTimeout = null;
    self.pingWaitTimeout = null;

    // conditionally log debug messages
    function debug(msg) {
        client.out.debug('CyclingPingTimer ' + self.timerNumber + ':', msg);
    }

    // set up EventEmitter functionality
    EventEmitter.call(self);

    self.on('wantPing', function() {
        debug('server silent for too long, let\'s send a PING');
        self.pingWaitTimeout = setTimeout(function() {
            self.stop();
            debug('ping timeout!');
            self.emit('pingTimeout');
        }, client.opt.millisecondsBeforePingTimeout);
    });

    self.notifyOfActivity = function() {
        if (self.started) {
            _stop();
            _start();
        }
    };

    self.stop = function() {
        if (!self.started) {
            return;
        }
        debug('ping timer stopped');
        _stop();
    };
    function _stop() {
        self.started = false;

        clearTimeout(self.loopingTimeout);
        clearTimeout(self.pingWaitTimeout);

        self.loopingTimeout = null;
        self.pingWaitTimeout = null;
    }

    self.start = function() {
        if (self.started) {
            debug('can\'t start, not stopped!');
            return;
        }
        debug('ping timer started');
        _start();
    };
    function _start() {
        self.started = true;

        self.loopingTimeout = setTimeout(function() {
            self.loopingTimeout = null;
            self.emit('wantPing');
        }, client.opt.millisecondsOfSilenceBeforePingSent);
    }
}

util.inherits(CyclingPingTimer, EventEmitter);

module.exports = CyclingPingTimer;
