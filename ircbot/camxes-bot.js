var config = {
  server: 'irc.freenode.net',
  nick: ['camxes', 'mikykibykarni'],
  options: {
    channels: ['#lojban', '#ckule', '#balningau'],
    debug: false
  }
};

var irc = require('irc');
var client = new Array(config.nick.length);
for (var i = 0; i < config.nick.length; i++) {
    client[i] = new irc.Client(config.server, config.nick[i], config.options);

    client[i].addListener('message', (function(i) { return function(from, to, text, message) {
            processor(i, client, from, to, text, message);
    };})(i));
}

var fs = require('fs');
var twitter = require('immortal-ntwitter');
var twit;
fs.readFile(__dirname + '/twitter.secret', 'utf8', function(err, data) {
    var keys = data.split('\n');
    twit = new twitter({
        consumer_key:        keys[0],
        consumer_secret:     keys[1],
        access_token_key:    keys[2],
        access_token_secret: keys[3]
    });

    twit.immortalStream('statuses/filter', {'track': 'lojban'}, function (stream) {
        stream.on('data', function (data) {
            client[1].action(config.options.channels[0], '@' + data['user']['screen_name']
                                                       + ': ' + data['text']);
            client[1].action(config.options.channels[0], '[' + 'https://twitter.com/' + data['user']['id_str'] + '/status/' + data['id_str'] + ']');
        });
    });
});

var camxes = require('../camxes.js');
var camxes_exp = require('../camxes-exp.js');
var camxes_pre = require('../camxes_preproc.js');
var camxes_post = require('../camxes_postproc.js');

function make_regexps(nick) {
    return {
        coi:  new RegExp("(^| )coi la \\.?"  + nick + "\\.?"),
        juhi: new RegExp("(^| )ju'i la \\.?" + nick + "\\.?"),
        kihe: new RegExp("(^| )ki'e la \\.?" + nick + "\\.?")
    };
}

var processor = function(i, client, from, to, text, message) {
  if (!text) return;
  var sendTo = from; // send privately
  if (to.indexOf('#') > -1) {
    sendTo = to; // send publicly
  }
  if (sendTo == to) {  // Public
    var regexps = make_regexps(config.nick[i]);
    if (i == 0 && text.indexOf(config.nick[i] + ": ") == '0') {
      text = text.substr(config.nick[i].length + 2);
      var ret = extract_mode(text);
      client[i].say(sendTo, run_camxes(ret[0], ret[1], ret[2]));
    } else if (text.search(regexps.coi) >= 0) {
      client[i].say(sendTo, "coi");
    } else if (text.search(regexps.juhi) >= 0) {
      client[i].say(sendTo, "re'i");
    } else if (text.search(regexps.kihe) >= 0) {
      client[i].say(sendTo, "je'e fi'i");
    }
  } else if (i == 0) {  // Private
	var ret = extract_mode(text);
    client[i].say(sendTo, run_camxes(ret[0], ret[1], ret[2]));
  }
};

function extract_mode(input) {
  ret = [input, 2, "std"];
  flag_pattern = "[+-]\\w+"
  match = input.match(new RegExp("^\\s*((?:" + flag_pattern + ")+)(.*)"))
  if (match != null) {
    ret[0] = match[2];
    flags = match[1].match(new RegExp(flag_pattern, "g"))
    for (var i = 0; i < flags.length; ++i) {
      switch (flags[i]) {
        case "+s":
          ret[1] = ret[1] == 5 ? 6 : 3;
          break;
        case "-f":
          ret[1] = ret[1] == 3 ? 6 : 5;
          break;
        case "+exp":
        case "-std":
          ret[2] = "exp";
          break;
        case "-exp":
        case "+std":
          ret[2] = "std";
          break;
      }
    }
  }
  return ret;
}

function run_camxes(input, mode, engine) {
	var result;
	var syntax_error = false;
	result = camxes_pre.preprocessing(input);
	try {
    switch (engine) {
      case "std":
        result = camxes.parse(result);
        break;
      case "exp":
        result = camxes_exp.parse(result);
        break;
      default:
        throw "Unrecognized parser";
    }
	} catch (e) {
		result = e;
		syntax_error = true;
	}
	if (!syntax_error) {
		result = JSON.stringify(result, undefined, 2);
		result = camxes_post.postprocessing(result, mode);
	}
	return result;
}
