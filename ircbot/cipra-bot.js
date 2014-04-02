var config = {
  server: 'irc.freenode.net',
  nick: 'cipra',
  options: {
    channels: ['#ilmen', '#lojban', '#ckule'],
    debug: false
  }
};

var irc = require('irc');
var client = new irc.Client(config.server, config.nick, config.options);

client.addListener('message', function(from, to, text, message) {
    processor(client, from, to, text, message);
});

var camxes = require('../camxes-exp.js');
var camxes_pre = require('../camxes_preproc.js');
var camxes_post = require('../camxes_postproc.js');

var processor = function(client, from, to, text, message) {
  if (!text) return;
  var sendTo = from; // send privately
  if (to.indexOf('#') > -1) {
    sendTo = to; // send publicly
  }
  if (sendTo == to) {  // Public
    if (text.indexOf("cipra: ") == '0') {
      text = text.substr(7);
      var ret = extract_mode(text);
      client.say(sendTo, run_camxes(ret[0], ret[1]));
    } else if (text.search(/(^| )coi la cipra/) >= 0) {
      client.say(sendTo, "coi");
    } else if (text.search(/(^| )ju'i la cipra/) >= 0) {
      client.say(sendTo, "re'i");
    } else if (text.search(/(^| )ki'e la cipra/) >= 0) {
      client.say(sendTo, "je'e fi'i");
    }
  } else {  // Private
	var ret = extract_mode(text);
    client.say(sendTo, run_camxes(ret[0], ret[1]));
  }
};

function extract_mode(input) {
  if (input.indexOf("+s ") == '0') {
    return [input.substr(3), 3];
  } else if (input.indexOf("-f ") == '0') {
    return [input.substr(3), 5];
  } else if (input.indexOf("-f+s ") == '0') {
    return [input.substr(5), 6];
  } else return [input, 2];
}

function run_camxes(input, mode) {
	var result;
	var syntax_error = false;
	result = camxes_pre.preprocessing(input);
	try {
	  result = camxes.parse(result);
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
