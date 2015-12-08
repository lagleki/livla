//livla bot
var fs = require("fs"),path = require("path-extra"),libxmljs = require("libxmljs");
require('v8-profiler');
var s,t,notci,notcijudri,ljv='';
var tato= require('./tatoeba.js');
var interv=300000;
var interm=2900;
fram="../../../files/fndata-1.5/frame";
// Default configuration, may be modified by “loadConfig”, with the content of
// “~/.livla/config.json.
var tcan='#lojban,#ckule,#tokipona,#jbosnu,#jboguhe,#fanva';
var livlytcan='##jboselbau';//where la livla talks to la mensi
var asker='livla';
var replier='mensi';
var server='irc.freenode.net';
var stodipilno=['gleki','xalbo'];
// End default configuration

loadConfig();
var config = {
  server: server,
  nick: asker,
  options: {
    channels: [livlytcan],
    debug: false,
    messageSplit: 190,
    realName: 'http://lojban.org/papri/IRC_Bots',
    floodProtection: true,
    floodProtectionDelay: 400
  }
};
var configmensi = {
  server: server,
  nick: replier,
  options: {
    channels: [livlytcan, tcan],
    debug: false,
    messageSplit: 190,
    realName: 'http://lojban.org/papri/IRC_Bots',
    floodProtection: true,
    floodProtectionDelay: 400
  }
};
var userSettings = {}; // Saving user preferences
userSettings[asker] = {
	"language": "jbo" // Not used, but someone might like to have bots speak to each other in another language
},
userSettings[replier] = {
	"language": "jbo"
};
var defaultLanguage="en"; // Maybe someday should be replaced with "jbo" when Lojban definitions almost equal that of English
var preasker=asker + ': ';
var prereplier=replier + ': ';
var said;

// Ensure that a path exists, and that it is a dir.
function ensureDirExistence(path) {
	// We first try to make a dir. If it was missing, now, it is not
	// anymore.
	try {
		fs.mkdirSync(path);
	} catch (e) {
		// If creation of the dir failed, there can be many reasons.
		// However, if the reason is not “there was already a file
		// there!”, we don't want to ignore the error, so we throw it
		// again.
		if (typeof(e.code) === "undefined" || e.code !== 'EEXIST') {
			throw e;
		}
		// In the case where the path was taken, we want to be sure it
		// is a directory. If the path existed *and* it is a directory,
		// all is good.  Otherwise, we would be asking for trouble by
		// trying to use a file, socket, or whatever as a directory.
		if (!fs.statSync(path).isDirectory()) {
			throw new Error("“" + path + "” is not a directory.");
		}
	}
}

// Used to read the content of any file that is located in “~/.livla/”.
// Return an empty string if the file does not exist.
function readConfig(filename) {
	var configDirectory = path.join(path.homedir(),".livla");
	ensureDirExistence(configDirectory);
	file = path.join(configDirectory, filename);
	try {
		return fs.readFileSync(file,{encoding: 'utf8'});
	} catch (e) {
		// If we get an “ENOENT” error, we return an empty string.
		// Other errors are still thrown.
		if (typeof(e.code) === "undefined" || e.code !== 'ENOENT') {
			throw e;
		}
		return "";
	}
}

// Load every line of “~/.livla/notci.txt” into “notci”, as an array. 
// Define “notcijudri” as the file path that will be used later when we want to
// save the content of “notci”.
function loadNotci() {
	notci = readConfig("notci.txt").split("\n");
	notcijudri = path.join(path.homedir(),".livla","notci.txt");
}

// Load the configuration from “~/.livla/config.json”, and modify the default
// config accordingly.
function loadConfig() {
	function either(a, b) {
		if (typeof(a) === "undefined") return b;
		return a;
	}
	var localConfig = readConfig("config.json");
	if (localConfig.trim() === "") return; // Empty config, we do nothing.
	localConfig = JSON.parse(localConfig);

	asker     = either( localConfig.asker,     asker     );
	replier   = either( localConfig.replier,   replier   );
	tcan      = either( localConfig.tcan,      tcan      );
	livlytcan = either( localConfig.livlytcan, livlytcan );
	server    = either( localConfig.server,    server    );
}

// Load the user configuration from “~/.livla/user-settings.json”
// These are settings
function loadUserSettings() {
	var localConfig = readConfig("user-settings.json");
	if (localConfig.trim() === "")
		return;
	userSettings = JSON.parse(localConfig);
}

var irc = require('irc');
var client = new irc.Client(config.server, config.nick, config.options);
var clientmensi = new irc.Client(configmensi.server, configmensi.nick, configmensi.options);

client.addListener('message', function(from, to, text, message) {
    processor(client, from, to, text, message);
});

clientmensi.addListener('message', function(from, to, text, message) {
    processormensi(clientmensi, from, to, text, message);
});

/*clientmensi.addListener('join', function(channel, nick, message) {
    fihido(channel,nick);
});
*/

var fihido = function(channel, nick, message){
	var fihinotciglic = "Welcome!";
	var fihinotcilojb = "fi'i do";
	switch(true){
		case channel=='#lojban': clientmensi.say(channel, nick + fihinotciglic);break;
		case channel=='#ckule': clientmensi.say(channel, nick + fihinotciglic);break;
		case channel=='#jbosnu': clientmensi.say(channel, nick + fihinotcilojb);break;
	}
};

loadUserSettings();
loadNotci();

var updatexmldumps = function (callback) {
	var err;
	var velruhe = { cfari: {}, mulno: {}, nalmulselfaho: {} };
	//try{
		var langs=["jbo","en","ru","es","fr","ja","de","eo","zh","en-simple","fr-facile","hu","sv"];
		var request = require("request");
		request = request.defaults({jar: true, strictSSL: false});
		var jar = request.jar();
		var cookie = request.cookie("jbovlastesessionid=U2FsdGVkX1%2FpiXtl1FSyMUZvFTudUq0N59YatQesEbsfdQ6owwMDeA%3D%3D");
		langs.forEach(function(thisa) {
			velruhe.cfari[thisa] = true;
			var uri="http://jbovlaste.lojban.org/export/xml-export.html?lang="+thisa;
			jar.setCookie(cookie, uri);
			var t = path.join(__dirname,"dumps",thisa + ".xml");
			request({
				uri: uri, method: "GET", jar: jar
			}).on("error", function (err) {
				velruhe.nalmulselfaho[thisa] = true;
				delete velruhe.cfari[thisa];
				if (callback && Object.keys(velruhe.cfari).length === 0) {
					callback(velruhe);
				}
			}).pipe(fs.createWriteStream(t + ".temp")).on("finish", function () {
				var ij;
				try{//validate xml
					ij = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"dumps",thisa + ".xml.temp"),{encoding: 'utf8'}));
					fs.renameSync(t+".temp", t);console.log(thisa + ' updated');
					velruhe.mulno[thisa] = true;
					if (thisa == "en") {
						xmlDocEn = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"dumps","en" + ".xml"),{encoding: 'utf8'}));
					}
					delete velruhe.cfari[thisa];
					sutysiskuningau(thisa);
					//global.gc();
				}catch(err){velruhe.nalmulselfaho[thisa] = true;delete velruhe.cfari[thisa];}
				ij='';
				if (callback && Object.keys(velruhe.cfari).length === 0) {
				callback(velruhe);
				}
			}); 
		});
		langs.forEach(function(thisa) {//now update pdf
			var uri="http://jbovlaste.lojban.org/export/latex-export.html?lang="+thisa;
			jar.setCookie(cookie, uri);
			request({uri: uri,method: "GET",jar: jar}, function(err, response, body) {
				if(err) {console.log(err);}
				else{
					var content=body.replace(/\n/igm,'').replace(/.*<a href=\"(\/jbovlaste_export\/.*?\/.*?\.pdf)\">.*/igm,"http://jbovlaste.lojban.org$1");//now get the pdf itself
					uri=content;
						var http = require('http');
						content = fs.createWriteStream(path.join(__dirname,"dumps","lojban-" + thisa + ".pdf"));
						var request = http.get(uri, function(response) {
							response.pipe(content);
						}).on('error', function(err) {
							console.log("when updating " + thisa + " pdf: " + err);
						});
				}
			});
		});
	//}catch(err){console.log('Error when autoupdating: ' + err);}
	//sutysiskuningau("ithkuil");
	sutysiskuningau("en-pt-BR");
	sutysiskuningau("zamenhofo");
	sutysiskuningau("laadan");
	sutysiskuningau("ile");
	sutysiskuningau("toki");
	sutysiskuningau("ldp");
	//labangu();
	//updategloss();# not yet ready function
};
var xmlDocEn = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"dumps","en" + ".xml"),{encoding: 'utf8'}).replace(/(&lt;|<)script.*?(&gt;|>).*?(&lt;|<)/g,"&lt;").replace(/(&lt;|<)\/script(&gt;|>)/g,""));//store en dump in memory

setInterval(function(){updatexmldumps()}, 3*86400000); //update logs once a djedi

var updateUserSettings = function (callback) {
	readConfig("user-settings.json"); // Ensure existance

	var body = JSON.stringify(userSettings);
	var configDirectory = path.join(path.homedir(),".livla");
	var filename = "user-settings.json";
	file = path.join(configDirectory, filename);
	try
	{
		fs.writeFileSync(file, body);
		console.log('User settings updated');
	}
	catch (e)
	{
		// If we get an “ENOENT” error, we return an empty string.
		// Other errors are still thrown.
		if (typeof(e.code) === "undefined" || e.code !== 'ENOENT') {
			throw e;
		}
		return;
	}
};

var camxes = require('../camxes-exp.js');
var camxes_pre = require('../camxes_preproc.js');
var camxes_post = require('../camxes_postproc.js');

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

function run_camxesoff(input, mode) {
	var camxesoff = require('../camxes.js');
	var result;
	var syntax_error = false;
	result = camxes_pre.preprocessing(input);
	try {
	  result = camxesoff.parse(result);
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

function run_camxesalta(input, mode) {
	try{
		var camxesalta = require('../mahantufa/altatufa-stodi.js');
		var result;
		var syntax_error = false;
		result = camxes_pre.preprocessing(input);
		try {
		  result = camxesalta.parse(result);
		} catch (e) {
			result = e;
			syntax_error = true;
		}
		if (!syntax_error) {
			result = JSON.stringify(result, undefined, 2);
			result = camxes_post.postprocessing(result, mode);
		}
		camxesalta={};
		delete require.cache[require.resolve('../mahantufa/altatufa-stodi.js')];
		return result;
	}catch(e){return '';}
}
//dict:
var emails = ["Please email any questions to gleki.is.my.name@gmail.com","Пишите любые вопросы по ложбану на gleki.is.my.name@gmail.com","mw.lojban.org","http://reddit.com/r/lojban/","Страница на русском: http://mw.lojban.org/index.php?title=%D0%94%D0%BE%D0%B1%D1%80%D0%BE%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D0%BE%D0%B2%D0%B0%D1%82%D1%8C!%20(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9)&setlang=ru","http://mw.lojban.org/index.php?title=Bienvenue%20!%20(Fran%C3%A7ais)&setlang=fr"];
var gaga = ["ga ga u la la", "mama", "do re mi fa so la ti", ".iam .iam i la pitsa cu kukte","ba du bi du","lo mlatu cu fasnu","lo'e mlatu ca ta'e fasnu","lo gerku cu dacti ije lo mlatu cu fasnu i xu lo dacti ka'e catra lo fasnu","i mi troci lo ka catra lo ditcu"];
var pendo = ["pendo", "kamxada", "irci", "jikca djica","se jikca","zmiku","tavla","cusku"];
var nadjuno = ["sei mi stace mi na djuno", "oi se'i mi na vedli", "oi oi la'a", "xu srana lo cukta pe la luis karol","ko zo'ei ko djuno","do dukse kucli","la alis cu misno nixli","la alis na zasti uinai"];
var jee = ["je\'e", "mi jimpe doi", ".ua doi", "ki\'anai doi"];
var mizmiku = ["lo ro re mi zmiku ije mi'a tavla ca po'o lonu no drata cu tavla","uinai mi zmiku i ku'i mi mutce clite","uinai mi zmiku", "doi pendo mi du'eroi na jimpe lo smuni i mi zmiku", "sei mi stace mi zmiku", "la gleki cu patfu mi noi zmiku","mi na remna i e'u do retsku fi la gleki","mi na'e remna","doi pendo do e'o tolxanka","mi na djica lo ka tavla do"];
//var prije = ["lo je\'e", "mi jimpe doi", ".ua doi", "ok doi"];
var dozmiku = ["do zmiku i do zmiku sai","fi'o djuno mi do zmiku","mu'i ma do na stace mi lo nu do zmiku"];
var nazmiku=["mi na zmiku i mi tatpi lo nu spuda","mi remna i xu do na jimpe","do tavla fi lo zmiku xu i mi na me ri"];
var alis = ["ma se zvati la alis", "la alis se slabu xu lo drata jbopre", "la alis cu misno xu ninmu"];
var reply = ["xu doi lil do pendo mi i mi pu jinvi lodu'u do xamgu zmiku","do cusku lo kalci i do nitcu lo livla doi lil","lo zmiku cu ei na raktu lo prenu vau sei la aizek azimov pu xusra i je'epei","mi nelci i ie mi nelci", "ausai le'o mi catra do", "oisai do fenki", "lo nu go'i cu plixau","lu mi i mi i mi li'u a'enai i do jai fanza"];
var nagendra = ["na drani", "li'a na drani i do pu nitcu ma", "do na junri xu","ju'o do na\'e junri", "doi xendo mi tatpi","mi sruma lo nu do zmiku sa'u"];
var spuda = ["do puzabi\'oca mutce lo ka jai fanza", "do djica ma", "a'enai je'enai i mi djica lo ka sipna", "e'u do klama lo bartu","ke'o i ta'onai aunairu'e mi tavla do"];
var coi = ["coi", "co\'oi", "ju\'i", "be\'e"];
var mablagleki = ["la gleki cu tai mabla prenu", "xu la gleki cu fenki i .ies", "la gleki cu cmorguka i ie cmorguka", "lo'e me la gleki cu finti lo cizra zmiku","xu ro lo jbopre cu tai si'a fenki","lo'e arxokuna cu nelci lo ka zukte lo fanza"];
var nelci = ["i mi i mi i mi mo i mi na nelci","lo nu nelci zo'u ba'e mi nelci i ie mi nelci","sei mi stace mi bi'u na mutce nelci","i ji'a mi na nelci mi'e la "+replier,"mi xebni","e'u do vrude pajni gi'e nai ze'i co'a cinmo lo ka nelci","ji'a mi mutce nelci i ie"];
var tugni = ["mi tugni i ie mi tugni","ba'e mi na tugni","ei mi tugni"];
var user = ["gleki", replier];
var grute = ["pelxu badna", "ranti kokso", "fanza plise", "grute", "xunre ka\'orta","zirpu betka","clazme","cirla","tricu","bunre narge","crino spati","dembi","figre","tamca","patlu","djacyzme"];
var mamta = ["mamta", "patfu", "plise", "gerku", "ractu", "ratcu", "se dunda", "mensi", "mlatu","panzi","tixnu","zdani","zmiku"];
var cinba = ["cinba", "prami", "prami cinba", "carmi cinba", "viska", "pencu", "sumne","darxi","smaka","jelcygau","cikre"];
var jukpa = ["mi ca jukpa lo ckafi", "mi co'i te vecnu lo pitsa", "mi citka lo mavystasu", "mi pinxe lo xalka i mi cinmo lo ka me la xalk i y mi crino xu", "doi cevni ko sidji mi lo ka bregau lo nanba i y ei mi jukpa lo nanba","ei pinxe si citka lo stasu","au smaka lo titnanba",vricyjukpa];
var natirna = ["na tirna mi'o", "cu xebni mi'o", "ca citka gi'enai tavla djica", "ca cipra zukte tu'a la cipra", "ca finti lo lojbo cukta gi'enai tirna do", "cu mutce tolcando .i ko na jai fanza", "ca naljundi i ko retsku fi lo jbocre","ca pincivi gi'enai jundi i do e'o na jai fanza","ca vikmi i ko smaji","ca citka", "ca sipna","ca jai bandu la lojbanistan i ko na jai daspo ri"," ca naljundi i e'u do tavla lo drata"," ca zukte lo se jibri i e'usai do jikca lo proga saske certu"];
///dict

var vricyjukpa = function(){return "ua ba\'a lo " + ext(grute) + "je lo " + ext(grute) + " cu zabna";};

var vric = function ()
{
var vricar = [tato.tatoebaprocessing(replier)];
//prereplier + ext(dozmiku),ext(user) + ': ' + ext(coi) + ' ' + ext(pendo),ext(user) + ': ' + ext(jukpa),ext(user) + ': do ' + ext(grute), ext(user) + ': mi pu ' + ext(cinba) + ' lo ' + ext(mamta) + ' pe do',prereplier + 'mi retsku i do spusku',prereplier + 'u\'i ' + ext(gaga),ext(mablagleki),ext(emails),prereplier + 'sei mi kucli ' + ext(alis),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),
return vricar[Math.floor(vricar.length*Math.random())];
};


var ext = function (arr)
{
return arr[Math.floor(arr.length*Math.random())];
};

var processor = function(client, from, to, text, message) {
  if (!text) return;
	said=Date.now();
    if (text.indexOf(preasker + 'darxi la ') == '0' && from!==asker && from!==replier) {
    	setTimeout(function() {client.say(sendTo, text.substr(9+preasker.length) + ': oidai mi darxi do lo trauta');}, 0 );
    }else{
        if (text.indexOf(preasker) == '0' && from!==replier) {
        setTimeout(function() {client.say(sendTo, from + ': ' + ext(mizmiku));}, interm );
    }}
	if (text.indexOf("doi " + asker) >-1 && from!==replier) {
      		setTimeout(function() {client.say(sendTo, tato.tatoebaprocessing(from));}, interm );
	}
	setInterval(function() {if (Date.now()-said>interv){said=Date.now();client.say(livlytcan, prereplier + vric());}}, interv);
  //}
  var sendTo = from; // send privately
  if (to.indexOf('#') > -1) {
    sendTo = to; // send publicly
  }
};

var benji = function(source,socket,clientmensi, sendTo, what) {
	if (source==="naxle"){
		socket.emit('returner', {message: what});
		return what;
	}
	else{clientmensi.say(sendTo, what);}
};

var processormensi = function(clientmensi, from, to, text, message,source,socket) {
  var ret;
  if (!text) return;
  var sendTo = from; // send privately
  if (to.indexOf('#') > -1) {
    sendTo = to; // send publicly
  }
  if (1==1) {  //sendTo == to Public
	text = text.replace(/^<.*?>: /,"");//dealing with Slack 
  	//notci functions first:
	if (text.indexOf(replier+': tell ') == '0'){
		text = text.substr(12).trim().replace("\\t"," ").replace(" ","\t");
		switch(true) {
		case from.match(text.substr(0, text.indexOf('\t')))!==null: benji(source,socket,clientmensi,sendTo,from+": e'u do cusku di'u lo nei si'unai");break;
		case text.substr(0, text.indexOf('\t'))==replier: benji(source,socket,clientmensi,sendTo,from+": xu do je'a jinvi lodu'u mi bebna i oi");break;
		default:
		var d = new Date();notci.push(from.replace(/^\.+/,"").replace(/\.+$/,"").trim() + "\t" + text + ' | ' + d.toISOString());benji(source,socket,clientmensi,sendTo,from+": mi ba benji di'u ba lo nu la'o gy."+text.substr(0, text.indexOf('\t'))+".gy. di'a cusku da");
		fs.writeFile(notcijudri, notci.join("\n"),function(err) {});break;
		}
	}
  	//notci functions in lojban as an alternative:
	if (text.indexOf(replier+': doi ') == '0'){
		text = text.substr(11).trim().replace("\\t"," ").replace(" ","\t");
		switch(true) {
		case from.match(text.substr(0, text.indexOf('\t')))!==null: benji(source,socket,clientmensi,sendTo,from+": e'u do cusku di'u lo nei si'unai");break;
		case text.substr(0, text.indexOf('\t'))==replier: benji(source,socket,clientmensi,sendTo,from+": xu do je'a jinvi lodu'u mi bebna i oi");break;
		default:
		var ds = new Date();notci.push(from.replace(/^\.+/,"").replace(/\.+$/,"").trim() + "\t" + text + ' | ' + ds.toISOString());benji(source,socket,clientmensi,sendTo,from+": mi ba benji di'u ba lo nu la'o gy."+text.substr(0, text.indexOf('\t'))+".gy. di'a cusku da");
		fs.writeFile(notcijudri, notci.join("\n"),function(err) {});break;
		}
	}
	//now send back part
		for (var l=0;l<notci.length;l++){
			//sendTo
			if (notci[l].length === 0) continue; // prevent a crash if the line is empty
			var cmenepagbu=notci[l].split("\t");//.substr(0, notci[l].indexOf('\t'));
			var sem;
			try{sem = new RegExp(cmenepagbu[1].toLowerCase(), "gim");}catch(err){var sem='';}
			if (from.match(sem)!==null)
			{
				cmenepagbu=notci[l].split("\t");
				benji(source,socket,clientmensi,sendTo,(from + ": cu'u la'o gy." + cmenepagbu[0] + ".gy.: "+cmenepagbu[2]).replace(/(.{80,120})(, |[ \.\"\/])/g,'$1$2\n'));
				notci.splice(l,1);l=l-1;
				fs.writeFile(notcijudri, notci.join("\n"));
			}
		}
		// 
		///
		switch(true) {
		case text.search(/ie( |)(nai( |)|)pei/) >= '0': benji(source,socket,clientmensi,sendTo, ext(tugni));break;
		case text.search(/\bna nelci/) >= '0': benji(source,socket,clientmensi,sendTo, ext(nelci));break;
		case text.indexOf("lmw:") == '0': lmw(text.substr(4),sendTo);break;
		case text.indexOf("nlp:") == '0': stnlp(text.substr(4),sendTo);break;
		case text.indexOf("lujvo:") == '0': benji(source,socket,clientmensi,sendTo, triz(text.substr(6)));break;
		//case text.indexOf("cipra:") == '0': text = text.substr(6);ret = extract_mode(text);benji(source,socket,clientmensi,sendTo, run_camxes(ret[0], ret[1]));break;
		case text.indexOf("exp:") == '0': text = text.substr(4).trim();ret = extract_mode(text);benji(source,socket,clientmensi,sendTo, run_camxes(ret[0], ret[1]));break;
		case text.indexOf("f:") == '0': text = text.substr(2).trim();benji(source,socket,clientmensi,sendTo, xufuhivla(text));break;
		case text.indexOf("k:") == '0': text = text.substr(2).trim();benji(source,socket,clientmensi,sendTo, run_camxes(text, 3));break;
		case text.indexOf("raw:") == '0': text = text.substr(4).trim();benji(source,socket,clientmensi,sendTo, run_camxes(text, 0));break;
		case text.indexOf("zei:") == '0': text = text.substr(4).trim();benji(source,socket,clientmensi,sendTo, zeizei(text));break;
		case text.indexOf("anji:") == '0': text = text.substr(5).trim();benji(source,socket,clientmensi,sendTo, anji(text));break;
		case text.indexOf("off:") == '0': text = text.substr(4).trim();ret = extract_mode(text);benji(source,socket,clientmensi,sendTo, run_camxesoff(ret[0], ret[1]));break;
		case text.indexOf("alta:") == '0': text = text.substr(5).trim();ret = extract_mode(text);benji(source,socket,clientmensi,sendTo, run_camxesalta(ret[0], ret[1]));break;
		case text.indexOf("yacc:") == '0': tcepru(text.substr(5),sendTo,source,socket);break;
		case text.indexOf("cowan:") == '0': tcepru(text.substr(6),sendTo,source,socket);break;
		case text.indexOf("jbofi'e:") == '0': jbofihe(text.substr(8),sendTo,source,socket);break;
		case text.indexOf("jbofihe:") == '0': jbofihe(text.substr(8),sendTo,source,socket);break;
		case text.indexOf("gerna:") == '0': jbofihe(text.substr(6),sendTo,source,socket);break;
		case text.indexOf("tersmu:") == '0': tersmu(text.substr(7),sendTo,source,socket);break;
		case (text.indexOf(replier + ': ko ningau')=='0' ||text.indexOf(replier + ': ko cnino') == '0'): setTimeout(function() {updatexmldumps(function(velruhe) {benji(source,socket,clientmensi,sendTo, 'i ba\'o jai gau cnino'); var selsre = Object.keys(velruhe.nalmulselfaho); if (selsre.length) benji(source,socket,clientmensi,sendTo, 'i na kakne lo ka jai gau cnino fai la\'e zoi zoi ' + selsre.join(' ') + ' zoi');});benji(source,socket,clientmensi,sendTo,'sei ca ca\'o jai gau cnino be fai lo pe mi sorcu');},1); break;
		case text.indexOf('guaspi:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(7),'guaspi'));break;
		case text.indexOf('frame: /full ') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(12),'en','framemulno'));break;
		case text.indexOf('frame:/full ') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(11),'en','framemulno'));break;
		case text.indexOf(prereplier+'ktn') == '0': benji(source,socket,clientmensi,sendTo, prettifylojbansentences());break;
		
		// Change default language
		case text.indexOf('bangu:') == '0': benji(source,socket,clientmensi,sendTo, bangu(text.substr(6).trim(), from));break;

		// Give definition of valsi in specified language
		case text.indexOf('?:') == '0': var inLanguage = defaultLanguage;inLanguage = RetrieveUsersLanguage(from, inLanguage);benji(source,socket,clientmensi,sendTo, vlaste(text.substr(2), inLanguage));break; // Gives definition of valsi in the default language set to user
		case text.indexOf('jbo:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(4),'jbo'));break; // Gives definition of valsi in Lojban
		case text.indexOf('en:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'en'));break; // Gives definition of valsi in English
		case text.indexOf('ru:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'ru'));break;
		case text.indexOf('es:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'es'));break;
		case text.indexOf('fr:')	== '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'fr'));break;
		case text.indexOf('fr-facile:')	== '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(10),'fr-facile'));break;
		case text.indexOf('f@:')	== '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'fr-facile'));break;
		case text.indexOf('ja:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'ja'));break;
		case text.indexOf('de:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'de'));break;
		case text.indexOf('eo:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'eo'));break;
		case text.indexOf('zh:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'zh'));break;
		case text.indexOf('sv:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'sv'));break;
		case text.indexOf('en-simple:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(10),'en-simple'));break;
		case text.indexOf('jb:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'jb'));break;
		case text.indexOf('krasi:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(6),'krasi'));break; // Gives Lojban words etymologies
		case text.indexOf('dukti:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(6),'dukti'));break; // Gives Lojban words antonyms

		case text.indexOf('selmaho:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(8),'en','selmaho'));break;
		case text.indexOf('selma\'o:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(8),'en','selmaho'));break;
		case text.indexOf('finti:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(6),'en','finti'));break;
		case text.indexOf('rafsi:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(6),'en','raf'));break;
		case text.search("ra'oi [a-z']+ rafsi ma") == '0': var reg = /ra'oi ([a-z']+) rafsi ma/;var mat=reg.exec(text);benji(source,socket,clientmensi,sendTo, vlaste(mat[1],'en','raf'));break;
		case text.indexOf('toki:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(5),'toki'));break;
		case text.indexOf('laadan:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(7),'laadan'));break;
		case text.indexOf('loglan:') == '0': benji(source,socket,clientmensi,sendTo, vlaste(text.substr(7),'loglan'));break;
		case text.indexOf('gloss:') == '0': benji(source,socket,clientmensi,sendTo, gloso(text.substr(6),'en'));break;
		case text.indexOf('loi:') == '0': benji(source,socket,clientmensi,sendTo, loglo(text.substr(4),''));break;
		case text.indexOf('coi:') == '0': benji(source,socket,clientmensi,sendTo, loglo(text.substr(4),'coi'));break;
		case text.indexOf(prereplier + 'mhnt ') == '0': ningaumahantufa(text.substr(12),socket);break;
		case text.indexOf(prereplier + "tatoget") == '0': tatoget();break;
		case text==replier+': ii': benji(source,socket,clientmensi,sendTo, io());break;
		case text==replier+': aigne': benji(source,socket,clientmensi,sendTo, kurtyvla());break;
		case text==replier+': help': benji(source,socket,clientmensi,sendTo, sidju());break;
		case text==replier+': labangu': benji(source,socket,clientmensi,sendTo, labangu());break;
		case text.indexOf("rot13:") == '0': benji(source,socket,clientmensi,sendTo, rotpaci(text.substr(6)));break;
		case text.indexOf(prereplier + 'r ') == '0': benji(source,socket,clientmensi,sendTo, rusko(text.substr(prereplier.length+1).trim()));break;
		case text.indexOf(prereplier + 'gadri') == '0': benji(source,socket,clientmensi,sendTo, 'lo [PA] broda = zo\'e noi ke\'a broda [gi\'e zilkancu li PA lo broda]\nla [PA] broda = zo\'e noi lu [PA] broda li\'u cmene ke\'a mi\nlo PA sumti = lo PA me sumti\nla PA sumti = zo\'e noi lu PA sumti li\'u cmene ke\'a mi\nloi [PA] broda = lo gunma be lo [PA] broda\nlai [PA] broda = lo gunma be la [PA] broda\nloi PA sumti = lo gunma be lo PA sumti\nlai PA sumti = lo gunma be la PA sumti\nlo\'i [PA] broda = lo selcmi be lo [PA] broda\nla\'i [PA] broda = lo selcmi be la [PA] broda\nlo\'i PA sumti = lo selcmi be lo PA sumti\nla\'i PA sumti = lo selcmi be la PA sumti\nPA sumti = PA da poi ke\'a me sumti\nPA broda = PA da poi broda\npiPA sumti = lo piPA si\'e be pa me sumti');break;
		case text.indexOf(prereplier + 'j ') == '0': benji(source,socket,clientmensi,sendTo, jbopomofo(text.substr(prereplier.length+1).trim()));break;
		case text.indexOf('Tatoeba:') == '0': benji(source,socket,clientmensi,sendTo, sisku(text.substr(8).trim()));break;
		case text.indexOf(prereplier) == '0': text = text.substr(prereplier.length+1).trim();benji(source,socket,clientmensi,sendTo, mensimikce(text));break;
	/* 	case text.indexOf(prereplier + 'mi retsku') == '0' && from==asker: benji(source,socket,clientmensi,sendTo, preasker+ext(jee)+' ' + ext(pendo));break;
		case text.indexOf(prereplier + 'xu do') == '0': 
		case text.indexOf(prereplier + 'do') == '0': setTimeout(function() {benji(source,socket,clientmensi,sendTo, from + mireturn());}, interm );break;
		case text.indexOf(prereplier + 'mi retsku') < 0 && text.indexOf(prereplier + 'mi') == '0': setTimeout(function() {benji(source,socket,clientmensi,sendTo, from + doreturn());}, interm );break;
		case text.indexOf(prereplier + 'sei mi kucli') == '0' && from==asker: setTimeout(function() {benji(source,socket,clientmensi,sendTo, preasker + ext(nadjuno));}, interm );break;
		case text.indexOf(prereplier + 'zmiku') >= 0 && from==asker: text.indexOf(prereplier + 'zmiku') >= 0 && from==asker;break;
 	case text.indexOf(prereplier + 'u\'i') == '0' && from==asker: setTimeout(function() {benji(source,socket,clientmensi,sendTo, preasker + ext(nagendra));}, interm );break;
 	case text.indexOf(prereplier + 'xu') == '0' && from!==asker: setTimeout(function() {benji(source,socket,clientmensi,sendTo, from + ': ' + ext(mizmiku));}, interm );break;
 	case text.indexOf(prereplier) == '0' && text.indexOf(prereplier + 'xu') !== '0' && from!==asker: setTimeout(function() {benji(source,socket,clientmensi,sendTo, tato.tatoebaprocessing(from));}, interm );break;
 	case text.indexOf("doi " + replier) >-1 && from!==asker: setTimeout(function() {benji(source,socket,clientmensi,sendTo, tato.tatoebaprocessing(from));}, interm );break;*/
  	}



  }
};

    /*if (text.indexOf(prereplier + 'mi retsku') < 0 && from==asker && text.indexOf(prereplier + 'mi') == '0') {
      benji(source,socket,clientmensi,sendTo, preasker + ext(reply));
    }*/
    /*if (text.indexOf("gleki: ") == '0' && from==asker) {
      	setTimeout(function() {benji(source,socket,clientmensi,sendTo, preasker + 'la gleki ' + ext(natirna));}, interm );
    }*/
    
var mireturn = function ()
{
s="";
while (s.substr(0, 5) !== ": mi "){
s=tato.tatoebaprocessing("");
}
return s;
};

var doreturn = function ()
{
s="";
while (s.substr(0, 5) !== ": do "){
s=tato.tatoebaprocessing("");
}
return s;
};

var sisku = function (lin)
{
s="";
i=0;
while (s.indexOf(lin) <0 && i<20000){
s=tato.tatoebaprocessing();
i++;//in case we found nothing exit
}
if (s==="" && i<20000){s=": e'u do sisku tu'a lo nalkunti uenzi";}
if (i>=20000){s="no da se tolcri";}
return s;
};

var jbopomofo = function (lin)
{
 var inputlength = lin.length;
 input = lin.toLowerCase();
 var jbopotext = "";
 for (i = 0; i < inputlength; i++) {
 var character = lin.charAt(i);

 switch(character) {
 case 'a': jbopotext+="ㄚ";break;
 case 'e': jbopotext+="ㄜ";break;
 case 'i': jbopotext+="ㄧ";break;
 case 'o': jbopotext+="ㄛ";break;
 case 'u': jbopotext+="ㄨ";break;
 case 'y': jbopotext+="ㄩ";break;
 case 'f': jbopotext+="ㄈ";break;
 case 'v': jbopotext+="ㄑ";break;
 case 'x': jbopotext+="ㄏ";break;
 case 's': jbopotext+="ㄙ";break;
 case 'z': jbopotext+="ㄗ";break;
 case 'c': jbopotext+="ㄕ";break;
 case 'j': jbopotext+="ㄓ";break;
 case 'p': jbopotext+="ㄆ";break;
 case 'b': jbopotext+="ㄅ";break;
 case 't': jbopotext+="ㄊ";break;
 case 'd': jbopotext+="ㄉ";break;
 case 'k': jbopotext+="ㄎ";break;
 case 'g': jbopotext+="ㄍ";break;
 case 'l': jbopotext+="ㄌ";break;
 case 'r': jbopotext+="ㄖ";break;
 case 'm': jbopotext+="ㄇ";break;
 case 'n': jbopotext+="ㄋ";break;
 case '`': jbopotext+="¯";break;
 case '.': jbopotext+="·";break;
 case "'": jbopotext+="、";break;
 case ',': jbopotext+="〜";break;
 case ' ': jbopotext+=" ";break;
}
}
return jbopotext;
};

var rusko = function (lin)
{
 var inputlength = lin.length;
 input = lin.toLowerCase();
 var jbopotext = "";
 for (i = 0; i < inputlength; i++) {
 var character = input.charAt(i);

 switch(character) {
 case 'a': jbopotext+="а";break;
 case 'e': jbopotext+="э";break;
 case 'i': jbopotext+="и";break;
 case 'o': jbopotext+="о";break;
 case 'u': jbopotext+="у";break;
 case 'y': jbopotext+="ы";break;
 case 'f': jbopotext+="ф";break;
 case 'v': jbopotext+="в";break;
 case 'x': jbopotext+="х";break;
 case 's': jbopotext+="с";break;
 case 'z': jbopotext+="з";break;
 case 'c': jbopotext+="ш";break;
 case 'j': jbopotext+="ж";break;
 case 'p': jbopotext+="п";break;
 case 'b': jbopotext+="б";break;
 case 't': jbopotext+="т";break;
 case 'd': jbopotext+="д";break;
 case 'k': jbopotext+="к";break;
 case 'g': jbopotext+="г";break;
 case 'l': jbopotext+="л";break;
 case 'r': jbopotext+="р";break;
 case 'm': jbopotext+="м";break;
 case 'n': jbopotext+="н";break;
 case '`': jbopotext+="`";break;
 case '.': jbopotext+=".";break;
 case "'": jbopotext+="'";break;
 case ',': jbopotext+=",";break;
 case ' ': jbopotext+=" ";break;
}
}
return jbopotext;
};

var bangu = function (lng, username)
{
	var ret = "";
	lng=lng.trim().toLowerCase();
	if(lng.length > 100)
	{
		// small data overflow protection
		return ret;
	}
	if(typeof userSettings[username] === "undefined")
	{
		userSettings[username] = {};
	}
	userSettings[username].language = lng;
	switch (lng)
	{
		// ME(speaking in third person) isn't implemented in irc.js
		case "lv":
			ret = "Es ar '" + username + "' turpmāk runāšu latviešu valodā.";
			break;
		case "en":
			ret = "I will speak to '" + username + "' in English from now on.";
			break;
		default:
			ret = "I will speak to '" + username + "' in '" + lng.toUpperCase() + "' from now on."; // TODO: translate to lojban
			break;
	}
	updateUserSettings();
	return ret;
};

var RetrieveUsersLanguage = function (username, lng)
{
	if(
		(
			typeof userSettings[username] === "undefined"
			|| typeof userSettings[username].language === "undefined"
		)
	)
	{
		if(typeof lng === "undefined")
		{
			return defaultLanguage;
		}
		return lng;
	}

	return userSettings[username].language;
};

var vlaste = function (lin,lng,raf)
{
var cmalu;
if (lin.indexOf(" ")===0){cmalu=true;}
lin=lin.toLowerCase().trim();
var ret;
	switch(true) {
		case lin.substr(0,5).trim()=="/full": ret=mulno(lin.substr(6).trim(),lng);break;
		case lin.substr(0,6).trim()=="/valsi": ret=valsicmene(lin.substr(7).trim(),lng);break;
		case raf=='raf': ret=rafsi(lin.replace(/[^a-z'\.]/g,''));break;
		case raf=='selmaho': ret=selmaho(lin.replace(/[^a-z'\.\*0-9]/g,''));break;
		case raf=='finti': ret=finti(lin.replace(/[^a-z'\.\*0-9]/g,''));break;
		case raf=='frame': ret=frame(lin.replace(/[^a-z_'\.]/g,''));break;
		case raf=='framemulno': ret=framemulno(lin.replace(/[^a-z_'\.]/g,''));break;
		default:
			if(raf==='passive'){
				ret=tordu(lin.replace(/\"/g,''), lng, raf,"",cmalu);break;
			}
			else{
				ret=tordu(lin.replace(/\"/g,''), lng,"","",cmalu);break;
			}
	}
return ret.replace(/(.{80,120})(, |[ \.\"\/])/g,'$1$2\n');
};


var tordu = function (linf,lng,flag,xmlDoc,cmalu)
{
	var lin=linf.replace(/\"/g,'');
	if (flag!==1){
		if (lng==="en")
		{
			xmlDoc=xmlDocEn;
		}
		else
		{
			var xmlPath = path.join(__dirname,"dumps",lng + ".xml");
			var errorMessage = 'Dictionary for the desired "' + lng + '" language does not exist.'; //TODO: Translate to Lojban
			if(!fs.existsSync(xmlPath))
			{
				if(flag === 'passive')
				{
					console.log(errorMessage);
					return '';
				}
				return errorMessage;
			}
			xmlDoc = libxmljs.parseXml(fs.readFileSync(xmlPath,{encoding: 'utf8'}));
		}
	}

var gchild='';
	try{gchild +='[' + xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/selmaho[1]").text()+'] ';}catch(err){}
	try{gchild += xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/definition[1]").text();}catch(err){}
	if (cmalu===true){try{gchild +=' | ' + xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/notes[1]").text();}catch(err){}
try{gchild +=' | ' + xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/user[1]/username[1]").text();}catch(err){}}
	var jk;
	try{jk = xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/gloss[1]").text().replace(/("|&amp;quot;)/g,"'").replace(/\\/g,"\\\\");if(jk){gchild +='\nAs a noun: ' + jk;}}catch(err){}
	jk='';
	try{jk = xmlDoc.find("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/example").toString().replace(/>,</g,">\n<").replace(/<example phrase=\"(.*?)\">(.*?)<\/example>/g,"$1 — $2").replace(/("|&amp;quot;)/g,"'").replace(/\\/g,"\\\\");if(jk){gchild +='\nExamples:\n' + jk;}}catch(err){}

if (gchild===''){
	if (flag!==1){
		if (xulujvo(lin)===true){
			var f=triz(katna(lin,lng,1,xmlDoc),1,lng,xmlDoc);
			if (f!==''){
				lin= f;
			}else{
				//var start = new Date().getTime();
				lin= "[< "+katna(lin,lng,'',xmlDoc)+"] "+mulno(lin,lng,xmlDoc);
				//var end = new Date().getTime();var time = end - start;
			}
		}else{
			lin= mulno(lin,lng,xmlDoc);
		}
	}else{
		lin= '';
	}
}else{
	gchild=gchild.replace(/[_\$]/igm,"").replace(/`/g,"'");
		if (gchild.length>=700 && lng!=="jb"){
			gchild=gchild.substring(0,700);
			gchild+='...\n[mo\'u se katna] http://jbovlaste.lojban.org/dict/'+ lin;
		}
		if (xulujvo(lin)===true){
			lin+=" [< "+katna(lin,lng,'',xmlDoc)+"]";
		}
		lin= lin + " = " + gchild;
}
ljv='';
console.log("<"+linf+"|");
if (lin!==''){
	var more = tordu(linf+" ", lng,1,xmlDoc,cmalu);
	if (more!==''){
		lin+="\n"+more;
	}
}
return lin.replace(/&quot;/g,"'");
};

var mulno = function (lin,lng,xmlDoc)
{
lin=lin.replace(/\"/g,'');var xo;
if (typeof xmlDoc==="undefined"){
	if (lng==="en"){xmlDoc=xmlDocEn;}else{xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"dumps",lng + ".xml"),{encoding: 'utf8'}));}
}
	
var stra=[];var i;
var coun = xmlDoc.find("/dictionary/direction[1]/valsi[(translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\")]");
	if(typeof coun!=='undefined'){for (i=0;i<coun.length;i++){stra.push(coun[i].attr("word").value());}}
coun = xmlDoc.find("/dictionary/direction[1]/valsi[contains(translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\")]");
	if(typeof coun!=='undefined'){for (i=0;i<coun.length;i++){stra.push(coun[i].attr("word").value());}}
coun = xmlDoc.find("/dictionary/direction[1]/valsi[(translate(./glossword/@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\") or (translate(./Engl,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\")]");
	if(typeof coun!=='undefined'){for (i=0;i<coun.length;i++){stra.push(coun[i].attr("word").value());}}
coun = xmlDoc.find("/dictionary/direction[1]/valsi[contains(translate(./glossword/@word,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\") or contains(translate(./Engl,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\")]");
	if(typeof coun!=='undefined'){for (i=0;i<coun.length;i++){stra.push(coun[i].attr("word").value());}}
coun = xmlDoc.find("/dictionary/direction[1]/valsi[contains(translate(./definition,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\") or contains(translate(./notes,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\")]");
	if(typeof coun!=='undefined'){for (i=0;i<coun.length;i++){stra.push(coun[i].attr("word").value());}}
coun = xmlDoc.find("/dictionary/direction[1]/valsi[contains(translate(./definition,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\") or contains(translate(./related,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\")]");
	if(typeof coun!=='undefined'){for (i=0;i<coun.length;i++){stra.push(coun[i].attr("word").value());}}

stra=stra.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);

xo=stra.length;
try{stra.splice(80);}catch(err){}
if (stra.length>=80){stra.push("...");}
var gag=stra.join(", ").trim();
if (stra.length==1){gag = tordu(gag,lng);}
if (stra.length>1){gag = xo + " da se tolcri: " + gag;}
if(gag===''){gag='lo nu mulno sisku zo\'u: y no da se tolcri';if (ljv!==''){gag+= "\n" + ljv;}}
return gag;
};

var selmaho = function (lin)
{
var gag='';var ien='';
var coun = xmlDocEn.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/selmaho[1]");
if (typeof coun!=='undefined'){
	ien='.i lu ' + lin + ' li\'u cmavo zo\'oi ' + coun.text();
	var cll= require('./cll.js');
	var cllarr = cll.cllk()[coun.text()];
	if (typeof cllarr !== 'undefined'){ien+= "\n" + cllarr.replace(/ /g,"\n")}
}
	try{var ali = xmlDocEn.find("/dictionary/direction[1]/valsi[starts-with(translate(./selmaho,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\")]");
	var stra=[];
	for (var i=0;i<ali.length;i++)
	{
		stra.push(ali[i].attr("word").value());
	}	
	gag=stra.join(", ").trim();
	//if (stra.length==1){gag = gag + ' = ' + tordu(gag,lng);}
	}catch(err){}
switch(true){
case (ien!=='') && (gag !==''): gag=ien.concat("\ncmavo: ").concat(gag);break;
case (ien==='') && (gag !==''): gag="cmavo: " + gag;break;
case (ien!=='') && (gag ===''): gag=ien;break;
case (ien==='') && (gag ===''): gag='y no da se tolcri';break;
}
return gag;
};

var rafsi = function (lin)
{
var gag;
var coun = xmlDocEn.find("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/rafsi/text()[1]");//official
try{
	var s=xmlDocEn.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/notes[1]").text();
	var tmp=s.replace(/^.*?-([a-z']+)-.*/,'$1');
	if (tmp!==s){coun.push(tmp);}
	}catch(err){}//search in notes
if (lin.substr(0,4)!=='brod' & xugismu(lin)===true){coun.push(lin.substr(0,4));}//long rafsi
if (coun.length!==0){coun= coun.join (' .e zo\'oi ');}else{coun='';}
if (coun.length!==0){coun='zo\'oi ' + coun + ' rafsi zo ' + lin;}

var rev = xmlDocEn.get("/dictionary/direction[1]/valsi[rafsi=\""+lin+"\"]");
//now try -raf- in notes
if (typeof rev==='undefined'){rev =  xmlDocEn.get("/dictionary/direction[1]/valsi[contains(translate(./notes,\""+lin.toUpperCase()+"\",\""+lin+"\"),\" -"+lin+"-\")]");}
//now try to add a vowel:
if (typeof rev==='undefined'){rev = xmlDocEn.get("/dictionary/direction[1]/valsi[@word=\""+lin+"a\" and (@type=\"fu'ivla\" or @type=\"experimental gismu\" or @type=\"gismu\")]");}
if (typeof rev==='undefined'){rev = xmlDocEn.get("/dictionary/direction[1]/valsi[@word=\""+lin+"e\" and (@type=\"fu'ivla\" or @type=\"experimental gismu\" or @type=\"gismu\")]");}
if (typeof rev==='undefined'){rev = xmlDocEn.get("/dictionary/direction[1]/valsi[@word=\""+lin+"i\" and (@type=\"fu'ivla\" or @type=\"experimental gismu\" or @type=\"gismu\")]");}
if (typeof rev==='undefined'){rev = xmlDocEn.get("/dictionary/direction[1]/valsi[@word=\""+lin+"o\" and (@type=\"fu'ivla\" or @type=\"experimental gismu\" or @type=\"gismu\")]");}
if (typeof rev==='undefined'){rev = xmlDocEn.get("/dictionary/direction[1]/valsi[@word=\""+lin+"u\" and (@type=\"fu'ivla\" or @type=\"experimental gismu\" or @type=\"gismu\")]");}

if (typeof rev!=='undefined' && rev.attr("word").value()!==lin){rev='zo ' + rev.attr("word").value() + ' se rafsi zo\'oi '+lin;}else{rev='';}
switch(true){
case (coun!=='') && (rev !==''): gag=coun.concat(" .i ").concat(rev);break;
case (coun==='') && (rev !==''): gag=rev;break;
case (coun!=='') && (rev ===''): gag=coun;break;
case (coun==='') && (rev ===''): gag='y no da se tolcri';break;
}
return gag;
};

var io = function ()
{
return '.ii';
};

var kurtyvla = function ()
{
return 'CommonSenseError: Expected normal word but Curtis found.';
};

var sidju=function(){
var sidj = {
	en: 'Parsers: type "exp:" (experimental), "off:" (camxes), "gerna:" (jbofi\'e), or "yacc:" (official yacc) followed by the text to show the structure of sentences.\n' +
		'Lojban dictionary: type "language-code: word", where language code is one of jbo,en,ru,es,fr,f@,ja,de,eo,zh,hu,sv. This searches in both directions.\n' +
		'    Type "language-code:word" (i.e. without a space after ":") to get a shorter definition.\n' +
		'    "selmaho: ca\'a" gives "CAhA", "selmaho: CAhA" gives "bi\'ai, ca\'a, ..."\n' +
		'    "rafsi: kulnu" gives "klu", "rafsi: klu" gives "kulnu"\n' +
		'Other conlang dictionaries: "toki:", "laadan:", "loglan:"\n' +
		'Lojban <-> Loglan conversion (incomplete): "coi:", "loi:"\n' +
		'"Tatoeba: klama" gets a random example sentence using "klama"\n' +
		'Delayed messaging: type "' + replier + ': doi user message" to send "message" to "user" when they return',
};
	return sidj.en;
};

var frame = function (lin)
{
var lng="en",gag='';
var arrf=fs.readdirSync(path.join(__dirname,fram)).filter(function(file) { return file.substr(-4) === '.xml'; });

for (var i=0;i<arrf.length;i++)
{
	var xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,fram,arrf[i]),{encoding: 'utf8'}).replace(/xmlns=\"/g,'mlns=\"'));
	var si = xmlDoc.get("/frame[translate(@name,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/definition[1]/text()");
	if (typeof si !=='undefined'){gag= si.toString().replace(/&lt;.*?&gt;/g,'');
	si = xmlDoc.find("/frame[translate(@name,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/FE[@coreType=\"Core\"]/definition/text()");
	if (typeof si !=='undefined'){gag= gag + "\n| te sumti: " + si.join("\n| te sumti: ").replace(/&lt;.*?&gt;/g,'');}
	break;}
}

if (gag!==''){return gag;}else{return 'no da se tolcri'}
};

var framemulno = function (lin)
{
var lng="en",gag='';
var arrf=fs.readdirSync(path.join(__dirname,fram)).filter(function(file) { return file.substr(-4) === '.xml'; });
var stra=[];

for (var i=0;i<arrf.length;i++)
{
	var xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,fram,arrf[i]),{encoding: 'utf8'}).replace(/xmlns=\"/g,'mlns=\"'));
	var si = xmlDoc.get("/frame[contains(translate(./definition,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\")]");
		if (typeof si !=='undefined'){
			stra.push(si.attr("name").value());
		}
}
	try{stra.splice(40);}catch(err){}
	if (stra.length>=40){stra.push("...");}
	gag=stra.join(", ").trim();
	if (stra.length==1){gag = frame(stra[0]);}
	if (gag!==''){return gag;}else{return 'no da se tolcri'}
return gag;
};

var loglo=function(lin,direction)
{
lin=lin.toLowerCase();
var logl= require('./loglan.js');
var items = logl.loglandic();
	var i,myregexp,j;
	//now the function itself
	try{
		if(direction!=='coi'){
			//from lojban to loglan
			lin=run_camxes(lin.replace(/[^a-z'\. ]/g,''),5).replace(/[^a-z'\. ]/g,'').trim().split(" ");
			for (i=0;i<items.length;i++)
			{
			myregexp = new RegExp("^"+items[i][0]+"$", "gm");
			for (j=0;j<lin.length;j++){
				if (lin[j].match(myregexp)!==null){
					lin[j]=items[i][1].replace(/ /gm,"A ").replace(/$/gm,"A");
				}
			}
			}
			lin=lin.join(" ").replace(/ /gm,"* ").replace(/$/gm,"*").replace(/A\*/gm,"").replace(/A$/gm,"");
		}else
		{
			lin=lin.replace(/[^a-z', ]/g,'').replace(/\./g,' ').replace(/ +/g,' ').trim().split(" ");
			for (i=0;i<items.length;i++)
			{
			myregexp = new RegExp("^"+items[i][1]+"$", "gm");
			for (j=0;j<lin.length;j++){
				if (lin[j].match(myregexp)!==null){
					lin[j]=items[i][0].replace(/ /gm,"A ").replace(/$/gm,"A");
				}
			}
		}
		lin=lin.join(" ").replace(/ /gm,"* ").replace(/$/gm,"*").replace(/A\*/gm,"").replace(/A$/gm,"");
	}
}catch(err){lin='O_0';}
	return lin.replace(/(.{80,120})(, |[ \.\"\/])/g,'$1$2\n').trim();
};

var finti = function (lin)
{
lin=lin.replace(/\"/g,'');
var retur='y no da se tolcri';
var coun = xmlDocEn.find("/dictionary/direction[1]/valsi[contains(translate(./user/username,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\")]");
var stra=[];
	for (var i=0;i<coun.length;i++)
	{
		stra.push(coun[i].attr("word").value());
	}
var cnt=stra.length;
try{stra.splice(30);}catch(err){}
if (stra.length>=30){stra.push("...");}
var gag=stra.join(", ").trim();
if (stra.length==1){gag = tordu(gag,lng);}
if (stra.length>1){gag = cnt + " da se tolcri: " + gag;}
if(gag===''){gag='y no da se tolcri';}
return gag;
};


var gloso=function(lin,lng,check,xmlDoc)
{
//var lng="en";
lin=lin.replace(/\"/g,'');
if (typeof xmlDoc==='undefined'){
	if (lng==="en"){xmlDoc=xmlDocEn;}else{xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"dumps",lng + ".xml"),{encoding: 'utf8'}));}
}
var retur='y no da se tolcri';
var items = [
	["lo","a(n)"],["le","the"],["la","@@@"],["nu","event-of"],["zo","the-word:"],["coi","hello"],["co'o","goodbye"],["ro","each-of"],["ma","what"],["mo","is-what"],
	["na","not"],["na'e","not"],["nai","-not"],["nelci","fond-of"],["ka","being"],["tu'a","about"],
	["ie","yeah"],["e'u","I-suggest"],["e'a","[permission-granted]"],["pei","?"],
	["e","and"],["enai","and-not"],["a","and/or"],
	["jenai","and-not"],["je","and"],["ja","and/or"],
	["gi'e",",-and"],["gi'a",",-and/or"],
	["bu'u","at"],["ca","at-present"],
	["ku",","],
	["zo'u",":"],
	["pe","that-is-related-to"],
	["za'a","as-I-ca-see"],["za'adai","as-you-can-see"],["pu","in-past"],["ba","in-future"],["vau","]"],["doi","oh"],["uinai","unfortunately"],["u'u","sorry"],
	["ko","do-it-so-that-you"],["poi","that"],["noi",",which"],["me","among"],
	//["bakni","is-a-cow"],
	["mlatu@n","cat"],["dansu@n","dancer(s)"],["klama@n","comer"],
	["slabu","is-familiar-to"],["dansu","dance(s)"],["mlatu","is-a-cat"],["klama","come(s)"],
	["pe'i","in-my-opinion"],["ui","yay"],["uinai","unfortunately"],
	["ju","whether-or-not"],["gu","whether-or-not"],["gi'u","whether-or-not"],["u","whether-or-not"],
	["xu","is-it-true-that"],["xunai","isnt-it-so-that"],["ka'e","possibly-can"],
	["re'u","time"],["roi","times"],
	["pa'o","through"],["co'a","become"],
	["mi","me"]//dont copy
	];
var itemsu = [//universal glosses
	["lu","<"],["li'u",">"],["i","."],["bo","-|-"],["sai","!"],["cai","!!!"],["na'e","!"],["da","X"],["de","Y"],["di","Z"],["cu",":"],["jo","⇔"],
	["fa","(1:)"],["fe","(2:)"],["fi","(3:)"],["fo","(4:)"],["fu","(5:)"],
	["ba'e", "(NB!=>)"],
	["na","!"]];
lin=lin.toLowerCase();
	var i,myregexp,j;
	try{
		//from lojban to gloso
		
		if (check!==1){lin=run_camxes(lin.replace(/[^a-z'\. ]/g,''),2).replace(/h/g,"H").replace(/NF/g,"@nf").replace(/\bKU\b/g,"@ku").replace(/[^a-z@'\. ]/g,'').replace(/ {2,}/g," ").replace(/ ([nd]ai)( |$)/img,"$1$2").replace(/ @nf @ku\b/g,"@n").replace(/ @nf\b/g,"").trim();}
		console.log(lin);
		lin=lin.split(" ");
		for (i=0;i<lin.length;i++){
		//if (xucmavo(lin[i])===true & check===1){}else{
					if (lng==='en'){//items are only for English. Think of some universal items.
					for (j=0;j<items.length;j++){
						myregexp = new RegExp("^"+items[j][0]+"$", "gim");
						if (lin[i].match(myregexp)!==null){
								lin[i]=items[j][1].replace(/$/gm,"%%%");
						}
						else if(lin[i].replace(/@n$/,"").match(myregexp)!==null){//if noun not found
								lin[i]=items[j][1].replace(/$/gm,"%%%");
						}
					}
					}
					for (j=0;j<itemsu.length;j++){//universal items, actually should use them later
						myregexp = new RegExp("^"+itemsu[j][0]+"$", "gim");
						if (lin[i].match(myregexp)!==null){
								lin[i]=itemsu[j][1].replace(/$/gm,"%%%");
						}
					}
					lin[i]=lin[i].replace(/@n$/,"");
			var cnt = xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin[i].toUpperCase()+"\",\""+lin[i]+"\")=\""+lin[i]+"\"]/glossword[1]");
			if (typeof cnt==='undefined'){cnt = xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin[i].toUpperCase()+"\",\""+lin[i]+"\")=\""+lin[i]+"\"]/keyword[@place=\"1\"]");}//try keyword
			if (typeof cnt!=='undefined'){lin[i]=cnt.attr("word").value().replace(/ /gm,"-").replace(/$/gm,"%%%");}
		}
		//}
		lin=lin.join(" ").replace(/ /gm,"* ").replace(/$/gm,"*").replace(/%%%\*/gm,"");
		lin=lin.replace(/(@@@ .)/ig,function(v) { return v.toUpperCase(); }).replace(/@@@/ig,'');//uppercase for {la}
		lin=lin.replace(/,+ *\./g,'.');
		lin=lin.replace(/(^.)/ig,function(v) { return v.toUpperCase(); }).replace(/ +/ig,' ').replace(/( \. *[^ ])/ig,function(v) { return v.toUpperCase(); }).replace(/ \./ig,'.');//punctuation prettification
		lin=lin.replace(/-/g,' ');
		lin=lin.replace(/ *(:|,)/g,'$1');
		lin=lin.replace(/\*\*/g,'*');
	}catch(err){lin='O_0';}
	return lin;
};

var valsicmene = function (lin,lng)
{
lin=lin.replace(/\"/g,'');var xo;
var retur='y no da se tolcri';
var xmlDoc;
if (lng==="en"){xmlDoc=xmlDocEn;}else{xmlDoc= libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"dumps",lng + ".xml"),{encoding: 'utf8'}));}
var coun = xmlDoc.find("/dictionary/direction[1]/valsi[contains(translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\")]");
var stra=[];
	for (var i=0;i<coun.length;i++)
	{
		stra.push(coun[i].attr("word").value());
	}
xo=stra.length;
try{stra.splice(30);}catch(err){}
if (stra.length>=30){stra.push("...");}
var gag=stra.join(", ").trim();
if (stra.length==1){gag = tordu(gag,lng);}
if (stra.length>1){gag = xo + " da se tolcri: " + gag;}
if(gag===''){gag='y no da se tolcri';}
return gag;
};

var lujvosplit = function (lin,lng)
{
var gag='';
try{
lin = camxes_pre.preprocessing(lin);
gag=camxes.parse(lin,'lujvo')}catch(e){}
return gag;
};

var rotpaci = function (lin)
{
return lin.trim().replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
};

//Stanford NLP
//var StanfordSimpleNLP = require('stanford-simple-nlp');
//var stanfordSimpleNLP = new StanfordSimpleNLP.StanfordSimpleNLP();
//stanfordSimpleNLP.loadPipelineSync();

var stnlp = function(lin,sendTo)
{
	stanfordSimpleNLP.process(lin, function(err, result) {
		benji(source,socket,clientmensi,sendTo, JSON.stringify(result));
		});
};

// LUJVO CONSTRUCTOR PART
var C="("+"[bcdfgjklmnprstvxz]"+")";
var V="("+"[aeiou]"+")";
var Vy="("+"[aeiouy]"+")";
var CC="("+"[bcfgkmpsvx][lr]|[td]r|[cs][pftkmn]|[jz][bvdgm]|t[cs]|d[jz]"+")";
var C_C="("+"[bdgjvzcfkpstx][lrmn]|[lrn][bdgjvzcfkpstx]|b[dgjvz]|d[bgjvz]|g[bdjvz]|j[bdgv]|v[bdgjz]|z[bdgv]|c[fkpt]|f[ckpstx]|k[cfpst]|p[cfkstx]|s[fkptx]|t[cfkpsx]|x[fpst]|l[rmn]|r[lmn]|m[lrnbdgjvcfkpstx]|n[lrm]"+")";
var CxC="("+"[lmnr][bcdfgjkpstvx]|l[mnrz]|mn|n[lmrz]|r[lmnz]|b[dgjmnvz]|d[bglmnv]|g[bdjmnvz]|[jz][lnr]|v[bdgjmnz]|f[ckmnpstx]|k[cfmnpst]|p[cfkmnstx]|sx|t[fklmnpx]|x[fmnpst]"+")";
var CyC="("+"("+C+")\\2|[bdgjvz][cfkpstx]|[cfkpstx][bdgjvz]|[cjsz]{2,2}|[ck]x|x[ck]|mz"+")";
var CCV="("+CC+V+")";
var CVV="("+C+"(?:ai|au|ei|oi|"+V+"'"+V+")"+")";
var CVC="("+C+V+C+")";
var gism="("+CC+V+C+"|"+C+V+C_C+")";

var cmaxes=function(){function l(l){return'"'+l.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"'}var n={parse:function(n,u){function r(l){Ql>Kl||(Kl>Ql&&(Ql=Kl,Rl=[]),Rl.push(l))}function t(){var l="text@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,s,a;if(s=Kl,a=Kl,u=Il(),u=null!==u?u:"",null!==u){for(r=[],t=e();null!==t;)r.push(t),t=e();null!==r?u=[u,r]:(u=null,Kl=a)}else u=null,Kl=a;return null!==u&&(u=function(l,n){return Gl(n)}(s,u[1])),null===u&&(Kl=s),Tl[l]={nextPos:Kl,result:u},u}function e(){var l="any_word@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e;return t=Kl,e=Kl,u=s(),null!==u?(r=Il(),r=null!==r?r:"",null!==r?u=[u,r]:(u=null,Kl=e)):(u=null,Kl=e),null!==u&&(u=function(l,n){return n}(t,u[0])),null===u&&(Kl=t),Tl[l]={nextPos:Kl,result:u},u}function s(){var l="lojban_word@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u;return u=f(),null===u&&(u=v(),null===u&&(u=a(),null===u&&(u=o(),null===u&&(u=i())))),Tl[l]={nextPos:Kl,result:u},u}function a(){var l="gismu_2@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r;return r=Kl,u=c(),null!==u&&(u=function(l,n){return["gismu",Dl(n)]}(r,u)),null===u&&(Kl=r),Tl[l]={nextPos:Kl,result:u},u}function o(){var l="lujvo_2@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r;return r=Kl,u=P(),null!==u&&(u=function(l,n){return["lujvo",Dl(n)]}(r,u)),null===u&&(Kl=r),Tl[l]={nextPos:Kl,result:u},u}function i(){var l="fuhivla_2@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r;return r=Kl,u=h(),null!==u&&(u=function(l,n){return["fu'ivla",Dl(n)]}(r,u)),null===u&&(Kl=r),Tl[l]={nextPos:Kl,result:u},u}function f(){var l="cmevla_2@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r;return r=Kl,u=d(),null!==u&&(u=function(l,n){return["cmevla",Dl(n)]}(r,u)),null===u&&(Kl=r),Tl[l]={nextPos:Kl,result:u},u}function v(){var l="cmavo_2@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r;return r=Kl,u=A(),null!==u&&(u=function(l,n){return["cmavo",Dl(n)]}(r,u)),null===u&&(Kl=r),Tl[l]={nextPos:Kl,result:u},u}function c(){var l="gismu@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Kl,u=x(),null!==u?(a=Kl,Ll++,r=T(),Ll--,null!==r?(r="",Kl=a):r=null,null!==r?(t=rl(),null!==t?(a=Kl,Ll++,e=Sl(),Ll--,null!==e?(e="",Kl=a):e=null,null!==e?u=[u,r,t,e]:(u=null,Kl=s)):(u=null,Kl=s)):(u=null,Kl=s)):(u=null,Kl=s),Tl[l]={nextPos:Kl,result:u},u}function x(){var l="stressed_CCVC_CVCC@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t;return t=Kl,u=I(),null===u&&(u=q()),null!==u?(r=cl(),null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t),Tl[l]={nextPos:Kl,result:u},u}function P(){var l="lujvo@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s;return e=Kl,s=Kl,Ll++,u=c(),Ll--,null===u?u="":(u=null,Kl=s),null!==u?(s=Kl,Ll++,r=h(),Ll--,null===r?r="":(r=null,Kl=s),null!==r?(t=y(),null!==t?u=[u,r,t]:(u=null,Kl=e)):(u=null,Kl=e)):(u=null,Kl=e),Tl[l]={nextPos:Kl,result:u},u}function h(){var l="fuhivla@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s;if(s=Kl,u=_(),null!==u)if(r=G(),null!==r){for(t=[],e=Y();null!==e;)t.push(e),e=Y();null!==t?(e=T(),null!==e?u=[u,r,t,e]:(u=null,Kl=s)):(u=null,Kl=s)}else u=null,Kl=s;else u=null,Kl=s;return Tl[l]={nextPos:Kl,result:u},u}function _(){var l="fuhivla_head@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a,o,i,f,v,c;if(i=Kl,f=Kl,Ll++,u=m(),Ll--,null===u?u="":(u=null,Kl=f),null!==u)if(f=Kl,Ll++,r=A(),Ll--,null===r?r="":(r=null,Kl=f),null!==r)if(f=Kl,Ll++,v=Kl,c=Kl,Ll++,t=m(),Ll--,null===t?t="":(t=null,Kl=c),null!==t?(e=cl(),null!==e?(s=m(),null!==s?t=[t,e,s]:(t=null,Kl=v)):(t=null,Kl=v)):(t=null,Kl=v),Ll--,null===t?t="":(t=null,Kl=f),null!==t)if(f=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=f),null!==e)if(f=Kl,Ll++,s=$(),Ll--,null!==s?(s="",Kl=f):s=null,null!==s){for(a=[],o=H();null!==o;)a.push(o),o=H();null!==a?u=[u,r,t,e,s,a]:(u=null,Kl=i)}else u=null,Kl=i;else u=null,Kl=i;else u=null,Kl=i;else u=null,Kl=i;else u=null,Kl=i;return Tl[l]={nextPos:Kl,result:u},u}function d(){var l="cmevla@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s;if(e=Kl,s=Kl,Ll++,u=p(),Ll--,null!==u?(u="",Kl=s):u=null,null!==u){for(r=[],t=W();null!==t;)r.push(t),t=W();null!==r?(s=Kl,Ll++,t=Ol(),Ll--,null!==t?(t="",Kl=s):t=null,null!==t?u=[u,r,t]:(u=null,Kl=e)):(u=null,Kl=e)}else u=null,Kl=e;return null===u&&(u=p()),Tl[l]={nextPos:Kl,result:u},u}function p(){var l="zifcme@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a,o;if(s=Kl,a=Kl,Ll++,u=kl(),Ll--,null===u?u="":(u=null,Kl=a),null!==u){for(r=[],t=ll(),null===t&&(t=nl(),null===t&&(t=kl(),null===t&&(a=Kl,t=cl(),null!==t?(o=Kl,Ll++,e=Ol(),Ll--,null===e?e="":(e=null,Kl=o),null!==e?t=[t,e]:(t=null,Kl=a)):(t=null,Kl=a))));null!==t;)r.push(t),t=ll(),null===t&&(t=nl(),null===t&&(t=kl(),null===t&&(a=Kl,t=cl(),null!==t?(o=Kl,Ll++,e=Ol(),Ll--,null===e?e="":(e=null,Kl=o),null!==e?t=[t,e]:(t=null,Kl=a)):(t=null,Kl=a))));null!==r?(t=cl(),null!==t?(a=Kl,Ll++,e=Ol(),Ll--,null!==e?(e="",Kl=a):e=null,null!==e?u=[u,r,t,e]:(u=null,Kl=s)):(u=null,Kl=s)):(u=null,Kl=s)}else u=null,Kl=s;return Tl[l]={nextPos:Kl,result:u},u}function A(){var l="cmavo@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a,o,i,f,v,c,x;if(f=Kl,v=Kl,Ll++,u=d(),Ll--,null===u?u="":(u=null,Kl=v),null!==u){if(v=Kl,Ll++,c=Kl,r=M(),null!==r)if(t=al(),null!==t)if(e=kl(),e=null!==e?e:"",null!==e){for(s=[],a=w();null!==a;)s.push(a),a=w();null!==s?(a=C(),null!==a?r=[r,t,e,s,a]:(r=null,Kl=c)):(r=null,Kl=c)}else r=null,Kl=c;else r=null,Kl=c;else r=null,Kl=c;if(null===r&&(c=Kl,r=q(),null!==r?(t=al(),null!==t?(e=V(),null!==e?r=[r,t,e]:(r=null,Kl=c)):(r=null,Kl=c)):(r=null,Kl=c)),Ll--,null===r?r="":(r=null,Kl=v),null!==r){if(v=Kl,c=Kl,Ll++,t=kl(),Ll--,null===t?t="":(t=null,Kl=c),null!==t){if(c=Kl,Ll++,x=Kl,e=cl(),null!==e){if(a=cl(),null!==a)for(s=[];null!==a;)s.push(a),a=cl();else s=null;null!==s?e=[e,s]:(e=null,Kl=x)}else e=null,Kl=x;if(Ll--,null===e?e="":(e=null,Kl=c),null!==e)if(s=$(),null!==s){for(a=[],c=Kl,o=ll(),null!==o?(i=kl(),null!==i?o=[o,i]:(o=null,Kl=c)):(o=null,Kl=c);null!==o;)a.push(o),c=Kl,o=ll(),null!==o?(i=kl(),null!==i?o=[o,i]:(o=null,Kl=c)):(o=null,Kl=c);null!==a?(o=ll(),null!==o?t=[t,e,s,a,o]:(t=null,Kl=v)):(t=null,Kl=v)}else t=null,Kl=v;else t=null,Kl=v}else t=null,Kl=v;if(null===t)if(e=al(),null!==e)for(t=[];null!==e;)t.push(e),e=al();else t=null;null!==t?(v=Kl,Ll++,e=Sl(),Ll--,null!==e?(e="",Kl=v):e=null,null!==e?u=[u,r,t,e]:(u=null,Kl=f)):(u=null,Kl=f)}else u=null,Kl=f}else u=null,Kl=f;return Tl[l]={nextPos:Kl,result:u},u}function y(){var l="brivla@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;if(a=Kl,o=Kl,Ll++,u=A(),Ll--,null===u?u="":(u=null,Kl=o),null!==u)if(o=Kl,Ll++,i=Kl,r=J(),null===r&&(r=I()),null!==r?(t=kl(),null!==t?(e=al(),null!==e?(s=$(),null!==s?r=[r,t,e,s]:(r=null,Kl=i)):(r=null,Kl=i)):(r=null,Kl=i)):(r=null,Kl=i),Ll--,null===r?r="":(r=null,Kl=o),null!==r){for(t=[],e=w();null!==e;)t.push(e),e=w();null!==t?(e=C(),null!==e?u=[u,r,t,e]:(u=null,Kl=a)):(u=null,Kl=a)}else u=null,Kl=a;else u=null,Kl=a;return Tl[l]={nextPos:Kl,result:u},u}function C(){var l="brivla_core@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t;return u=h(),null===u&&(u=c(),null===u&&(u=b(),null===u&&(t=Kl,u=S(),null===u&&(u=j(),null===u&&(u=E(),null===u&&(u=N()))),null!==u?(r=V(),null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t)))),Tl[l]={nextPos:Kl,result:u},u}function g(){var l="any_fuhivla_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u;return u=h(),null===u&&(u=z(),null===u&&(u=j())),Tl[l]={nextPos:Kl,result:u},u}function m(){var l="rafsi_string@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a;for(s=Kl,u=[],r=k();null!==r;)u.push(r),r=k();return null!==u?(r=c(),null===r&&(r=b(),null===r&&(a=Kl,r=N(),null!==r?(t=V(),null!==t?r=[r,t]:(r=null,Kl=a)):(r=null,Kl=a),null===r&&(r=F(),null===r&&(r=E(),null===r&&(a=Kl,r=N(),r=null!==r?r:"",null!==r?(t=ol(),null!==t?(e=al(),null!==e?r=[r,t,e]:(r=null,Kl=a)):(r=null,Kl=a)):(r=null,Kl=a),null===r&&(r=O(),null===r&&(r=S()))))))),null!==r?u=[u,r]:(u=null,Kl=s)):(u=null,Kl=s),Tl[l]={nextPos:Kl,result:u},u}function b(){var l="CVV_final_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;return o=Kl,u=cl(),null!==u?(r=K(),null!==r?(t=kl(),null!==t?(i=Kl,Ll++,e=T(),Ll--,null!==e?(e="",Kl=i):e=null,null!==e?(s=rl(),null!==s?(i=Kl,Ll++,a=Sl(),Ll--,null!==a?(a="",Kl=i):a=null,null!==a?u=[u,r,t,e,s,a]:(u=null,Kl=o)):(u=null,Kl=o)):(u=null,Kl=o)):(u=null,Kl=o)):(u=null,Kl=o)):(u=null,Kl=o),Tl[l]={nextPos:Kl,result:u},u}function V(){var l="short_final_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s;return e=Kl,s=Kl,Ll++,u=T(),Ll--,null!==u?(u="",Kl=s):u=null,null!==u?(s=Kl,r=cl(),null!==r?(t=ul(),null!==t?r=[r,t]:(r=null,Kl=s)):(r=null,Kl=s),null===r&&(s=Kl,r=ol(),null!==r?(t=rl(),null!==t?r=[r,t]:(r=null,Kl=s)):(r=null,Kl=s)),null!==r?(s=Kl,Ll++,t=Sl(),Ll--,null!==t?(t="",Kl=s):t=null,null!==t?u=[u,r,t]:(u=null,Kl=e)):(u=null,Kl=e)):(u=null,Kl=e),Tl[l]={nextPos:Kl,result:u},u}function w(){var l="initial_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s;return u=O(),null===u&&(u=z(),null===u&&(u=F(),null===u&&(e=Kl,s=Kl,Ll++,u=g(),Ll--,null===u?u="":(u=null,Kl=s),null!==u?(r=k(),null!==r?(s=Kl,Ll++,t=g(),Ll--,null===t?t="":(t=null,Kl=s),null!==t?u=[u,r,t]:(u=null,Kl=e)):(u=null,Kl=e)):(u=null,Kl=e)))),Tl[l]={nextPos:Kl,result:u},u}function j(){var l="stressed_fuhivla_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a;if(a=Kl,u=_(),null!==u)if(r=G(),null!==r){for(t=[],e=Y();null!==e;)t.push(e),e=Y();null!==t?(e=$(),null!==e?(s=al(),null!==s?u=[u,r,t,e,s]:(u=null,Kl=a)):(u=null,Kl=a)):(u=null,Kl=a)}else u=null,Kl=a;else u=null,Kl=a;return Tl[l]={nextPos:Kl,result:u},u}function z(){var l="fuhivla_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a,o;return a=Kl,o=Kl,Ll++,u=H(),Ll--,null!==u?(u="",Kl=o):u=null,null!==u?(r=_(),null!==r?(t=$(),null!==t?(e=al(),null!==e?(s=kl(),s=null!==s?s:"",null!==s?u=[u,r,t,e,s]:(u=null,Kl=a)):(u=null,Kl=a)):(u=null,Kl=a)):(u=null,Kl=a)):(u=null,Kl=a),Tl[l]={nextPos:Kl,result:u},u}function E(){var l="stressed_y_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t;return t=Kl,u=x(),null===u&&(u=q()),null!==u?(r=al(),null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t),Tl[l]={nextPos:Kl,result:u},u}function F(){var l="y_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e;return e=Kl,u=Q(),null===u&&(u=M()),null!==u?(r=al(),null!==r?(t=kl(),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,Kl=e)):(u=null,Kl=e)):(u=null,Kl=e),Tl[l]={nextPos:Kl,result:u},u}function k(){var l="y_less_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;return o=Kl,i=Kl,Ll++,u=F(),Ll--,null===u?u="":(u=null,Kl=i),null!==u?(i=Kl,Ll++,r=E(),Ll--,null===r?r="":(r=null,Kl=i),null!==r?(i=Kl,Ll++,t=O(),Ll--,null===t?t="":(t=null,Kl=i),null!==t?(i=Kl,Ll++,e=S(),Ll--,null===e?e="":(e=null,Kl=i),null!==e?(s=M(),null===s&&(s=J(),null===s&&(s=D())),null!==s?(i=Kl,Ll++,a=kl(),Ll--,null===a?a="":(a=null,Kl=i),null!==a?u=[u,r,t,e,s,a]:(u=null,Kl=o)):(u=null,Kl=o)):(u=null,Kl=o)):(u=null,Kl=o)):(u=null,Kl=o)):(u=null,Kl=o),Tl[l]={nextPos:Kl,result:u},u}function S(){var l="stressed_hy_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s;return e=Kl,s=Kl,u=Q(),null!==u?(r=K(),null!==r?u=[u,r]:(u=null,Kl=s)):(u=null,Kl=s),null===u&&(u=N()),null!==u?(r=kl(),null!==r?(t=al(),null!==t?u=[u,r,t]:(u=null,Kl=e)):(u=null,Kl=e)):(u=null,Kl=e),Tl[l]={nextPos:Kl,result:u},u}function O(){var l="hy_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Kl,a=Kl,u=Q(),null!==u?(r=L(),null!==r?u=[u,r]:(u=null,Kl=a)):(u=null,Kl=a),null===u&&(u=J(),null===u&&(u=D())),null!==u?(r=kl(),null!==r?(t=al(),null!==t?(e=kl(),e=null!==e?e:"",null!==e?u=[u,r,t,e]:(u=null,Kl=s)):(u=null,Kl=s)):(u=null,Kl=s)):(u=null,Kl=s),Tl[l]={nextPos:Kl,result:u},u}function q(){var l="stressed_CVC_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e;return e=Kl,u=cl(),null!==u?(r=K(),null!==r?(t=cl(),null!==t?u=[u,r,t]:(u=null,Kl=e)):(u=null,Kl=e)):(u=null,Kl=e),Tl[l]={nextPos:Kl,result:u},u}function M(){var l="CVC_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t;return t=Kl,u=cl(),null!==u?(r=B(),null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t),Tl[l]={nextPos:Kl,result:u},u}function B(){var l="unstressed_VC@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t;return t=Kl,u=L(),null!==u?(r=cl(),null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t),Tl[l]={nextPos:Kl,result:u},u}function I(){var l="stressed_CCV_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t;return t=Kl,u=ol(),null!==u?(r=K(),null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t),Tl[l]={nextPos:Kl,result:u},u}function J(){var l="CCV_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t;return t=Kl,u=ol(),null!==u?(r=L(),null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t),Tl[l]={nextPos:Kl,result:u},u}function N(){var l="stressed_CVC_CCV_CVV@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;return s=Kl,u=q(),null===u&&(u=I(),null===u&&(a=Kl,u=cl(),null!==u?(o=Kl,r=L(),null!==r?(t=kl(),null!==t?(e=K(),null!==e?r=[r,t,e]:(r=null,Kl=o)):(r=null,Kl=o)):(r=null,Kl=o),null===r&&(o=Kl,r=ul(),null!==r?(i=Kl,Ll++,t=U(),Ll--,null!==t?(t="",Kl=i):t=null,null!==t?r=[r,t]:(r=null,Kl=o)):(r=null,Kl=o)),null!==r?(t=R(),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,Kl=a)):(u=null,Kl=a)):(u=null,Kl=a))),null!==u?(a=Kl,Ll++,r=al(),Ll--,null===r?r="":(r=null,Kl=a),null!==r?u=[u,r]:(u=null,Kl=s)):(u=null,Kl=s),Tl[l]={nextPos:Kl,result:u},u}function D(){var l="CVV_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a,o;return s=Kl,u=cl(),null!==u?(a=Kl,r=L(),null!==r?(t=kl(),null!==t?(e=L(),null!==e?r=[r,t,e]:(r=null,Kl=a)):(r=null,Kl=a)):(r=null,Kl=a),null===r&&(a=Kl,r=ul(),null!==r?(o=Kl,Ll++,t=U(),Ll--,null===t?t="":(t=null,Kl=o),null!==t?r=[r,t]:(r=null,Kl=a)):(r=null,Kl=a)),null!==r?(t=R(),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,Kl=s)):(u=null,Kl=s)):(u=null,Kl=s),Tl[l]={nextPos:Kl,result:u},u}function G(){var l="stressed_syllable@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e;return t=Kl,u=X(),null!==u?(e=Kl,Ll++,r=U(),Ll--,null!==r?(r="",Kl=e):r=null,null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t),Tl[l]={nextPos:Kl,result:u},u}function H(){var l="unstressed_syllable@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e;return t=Kl,u=X(),null!==u?(e=Kl,Ll++,r=U(),Ll--,null===r?r="":(r=null,Kl=e),null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t),null===u&&(u=Y()),Tl[l]={nextPos:Kl,result:u},u}function K(){var l="stressed_vowel@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e;return t=Kl,u=rl(),null!==u?(e=Kl,Ll++,r=U(),Ll--,null!==r?(r="",Kl=e):r=null,null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t),Tl[l]={nextPos:Kl,result:u},u}function L(){var l="unstressed_vowel@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e;return t=Kl,u=rl(),null!==u?(e=Kl,Ll++,r=U(),Ll--,null===r?r="":(r=null,Kl=e),null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t),Tl[l]={nextPos:Kl,result:u},u}function Q(){var l="long_rafsi@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e;return e=Kl,u=ol(),null!==u?(r=B(),null!==r?u=[u,r]:(u=null,Kl=e)):(u=null,Kl=e),null===u&&(e=Kl,u=cl(),null!==u?(r=B(),null!==r?(t=cl(),null!==t?u=[u,r,t]:(u=null,Kl=e)):(u=null,Kl=e)):(u=null,Kl=e)),Tl[l]={nextPos:Kl,result:u},u}function R(){var l="r_hyphen@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e;return t=Kl,u=Al(),null!==u?(e=Kl,Ll++,r=cl(),Ll--,null!==r?(r="",Kl=e):r=null,null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t),null===u&&(t=Kl,u=pl(),null!==u?(e=Kl,Ll++,r=Al(),Ll--,null!==r?(r="",Kl=e):r=null,null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t)),Tl[l]={nextPos:Kl,result:u},u}function T(){var l="final_syllable@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a,o;return a=Kl,u=$(),null!==u?(o=Kl,Ll++,r=al(),Ll--,null===r?r="":(r=null,Kl=o),null!==r?(t=ll(),null!==t?(o=Kl,Ll++,e=d(),Ll--,null===e?e="":(e=null,Kl=o),null!==e?(o=Kl,Ll++,s=Sl(),Ll--,null!==s?(s="",Kl=o):s=null,null!==s?u=[u,r,t,e,s]:(u=null,Kl=a)):(u=null,Kl=a)):(u=null,Kl=a)):(u=null,Kl=a)):(u=null,Kl=a),Tl[l]={nextPos:Kl,result:u},u}function U(){var l="stress@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a;for(a=Kl,u=[],r=cl(),null===r&&(r=nl());null!==r;)u.push(r),r=cl(),null===r&&(r=nl());return null!==u?(r=kl(),r=null!==r?r:"",null!==r?(t=al(),t=null!==t?t:"",null!==t?(e=X(),null!==e?(s=Ol(),null!==s?u=[u,r,t,e,s]:(u=null,Kl=a)):(u=null,Kl=a)):(u=null,Kl=a)):(u=null,Kl=a)):(u=null,Kl=a),Tl[l]={nextPos:Kl,result:u},u}function W(){var l="any_syllable@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e;return e=Kl,u=$(),null!==u?(r=ll(),null!==r?(t=Z(),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,Kl=e)):(u=null,Kl=e)):(u=null,Kl=e),null===u&&(u=Y()),Tl[l]={nextPos:Kl,result:u},u}function X(){var l="syllable@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Kl,u=$(),null!==u?(a=Kl,Ll++,r=al(),Ll--,null===r?r="":(r=null,Kl=a),null!==r?(t=ll(),null!==t?(e=Z(),e=null!==e?e:"",null!==e?u=[u,r,t,e]:(u=null,Kl=s)):(u=null,Kl=s)):(u=null,Kl=s)):(u=null,Kl=s),Tl[l]={nextPos:Kl,result:u},u}function Y(){var l="consonantal_syllable@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s;return e=Kl,u=cl(),null!==u?(s=Kl,Ll++,r=xl(),Ll--,null!==r?(r="",Kl=s):r=null,null!==r?(t=Z(),null!==t?u=[u,r,t]:(u=null,Kl=e)):(u=null,Kl=e)):(u=null,Kl=e),Tl[l]={nextPos:Kl,result:u},u}function Z(){var l="coda@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s;return e=Kl,s=Kl,Ll++,u=W(),Ll--,null===u?u="":(u=null,Kl=s),null!==u?(r=cl(),null!==r?(s=Kl,Ll++,t=W(),Ll--,null!==t?(t="",Kl=s):t=null,null!==t?u=[u,r,t]:(u=null,Kl=e)):(u=null,Kl=e)):(u=null,Kl=e),null===u&&(e=Kl,u=xl(),u=null!==u?u:"",null!==u?(r=cl(),r=null!==r?r:"",null!==r?(s=Kl,Ll++,t=Ol(),Ll--,null!==t?(t="",Kl=s):t=null,null!==t?u=[u,r,t]:(u=null,Kl=e)):(u=null,Kl=e)):(u=null,Kl=e)),Tl[l]={nextPos:Kl,result:u},u}function $(){var l="onset@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u;return u=kl(),null===u&&(u=nl(),null===u&&(u=il())),Tl[l]={nextPos:Kl,result:u},u}function ll(){var l="nucleus@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e;return u=rl(),null===u&&(u=ul(),null===u&&(t=Kl,u=al(),null!==u?(e=Kl,Ll++,r=ll(),Ll--,null===r?r="":(r=null,Kl=e),null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t))),Tl[l]={nextPos:Kl,result:u},u}function nl(){var l="glide@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s;return e=Kl,u=el(),null===u&&(u=sl()),null!==u?(s=Kl,Ll++,r=ll(),Ll--,null!==r?(r="",Kl=s):r=null,null!==r?(s=Kl,Ll++,t=nl(),Ll--,null===t?t="":(t=null,Kl=s),null!==t?u=[u,r,t]:(u=null,Kl=e)):(u=null,Kl=e)):(u=null,Kl=e),Tl[l]={nextPos:Kl,result:u},u}function ul(){var l="diphthong@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i;return a=Kl,o=Kl,t=tl(),null!==t?(e=sl(),null!==e?(i=Kl,Ll++,s=sl(),Ll--,null===s?s="":(s=null,Kl=i),null!==s?t=[t,e,s]:(t=null,Kl=o)):(t=null,Kl=o)):(t=null,Kl=o),null===t&&(o=Kl,/^[aeo]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[aeo]")),null!==t?(e=el(),null!==e?(i=Kl,Ll++,s=el(),Ll--,null===s?s="":(s=null,Kl=i),null!==s?t=[t,e,s]:(t=null,Kl=o)):(t=null,Kl=o)):(t=null,Kl=o)),null!==t?(o=Kl,Ll++,e=ll(),Ll--,null===e?e="":(e=null,Kl=o),null!==e?t=[t,e]:(t=null,Kl=a)):(t=null,Kl=a),Tl[l]={nextPos:Kl,result:t},t}function rl(){var l="vowel@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a;return s=Kl,/^[aeiou]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[aeiou]")),null!==t?(a=Kl,Ll++,e=ll(),Ll--,null===e?e="":(e=null,Kl=a),null!==e?t=[t,e]:(t=null,Kl=s)):(t=null,Kl=s),Tl[l]={nextPos:Kl,result:t},t}function tl(){var l="a@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t;return/^[a]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[a]")),Tl[l]={nextPos:Kl,result:t},t}function el(){var l="i@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t;return/^[i]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[i]")),Tl[l]={nextPos:Kl,result:t},t}function sl(){var l="u@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t;return/^[u]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[u]")),Tl[l]={nextPos:Kl,result:t},t}function al(){var l="y@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i,f;return a=Kl,/^[y]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[y]")),null!==t?(o=Kl,Ll++,i=Kl,f=Kl,Ll++,e=al(),Ll--,null===e?e="":(e=null,Kl=f),null!==e?(s=ll(),null!==s?e=[e,s]:(e=null,Kl=i)):(e=null,Kl=i),Ll--,null===e?e="":(e=null,Kl=o),null!==e?t=[t,e]:(t=null,Kl=a)):(t=null,Kl=a),Tl[l]={nextPos:Kl,result:t},t}function ol(){var l="initial_pair@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Kl,a=Kl,Ll++,u=il(),Ll--,null!==u?(u="",Kl=a):u=null,null!==u?(r=cl(),null!==r?(t=cl(),null!==t?(a=Kl,Ll++,e=cl(),Ll--,null===e?e="":(e=null,Kl=a),null!==e?u=[u,r,t,e]:(u=null,Kl=s)):(u=null,Kl=s)):(u=null,Kl=s)):(u=null,Kl=s),Tl[l]={nextPos:Kl,result:u},u}function il(){var l="initial@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e,s,a,o;return e=Kl,u=fl(),null===u&&(s=Kl,u=Vl(),null===u&&(a=Kl,u=bl(),null!==u?(o=Kl,Ll++,r=wl(),Ll--,null===r?r="":(r=null,Kl=o),null!==r?u=[u,r]:(u=null,Kl=a)):(u=null,Kl=a),null===u&&(a=Kl,u=gl(),null!==u?(o=Kl,Ll++,r=pl(),Ll--,null===r?r="":(r=null,Kl=o),null!==r?(o=Kl,Ll++,t=vl(),Ll--,null===t?t="":(t=null,Kl=o),null!==t?u=[u,r,t]:(u=null,Kl=a)):(u=null,Kl=a)):(u=null,Kl=a))),u=null!==u?u:"",null!==u?(r=El(),null===r&&(a=Kl,r=Fl(),null!==r?(o=Kl,Ll++,t=_l(),Ll--,null===t?t="":(t=null,Kl=o),null!==t?r=[r,t]:(r=null,Kl=a)):(r=null,Kl=a),null===r&&(r=jl(),null===r&&(r=zl(),null===r&&(r=wl(),null===r&&(r=yl(),null===r&&(a=Kl,r=Cl(),null!==r?(o=Kl,Ll++,t=_l(),Ll--,null===t?t="":(t=null,Kl=o),null!==t?r=[r,t]:(r=null,Kl=a)):(r=null,Kl=a),null===r&&(r=dl(),null===r&&(a=Kl,r=pl(),null!==r?(o=Kl,Ll++,t=vl(),Ll--,null===t?t="":(t=null,Kl=o),null!==t?r=[r,t]:(r=null,Kl=a)):(r=null,Kl=a))))))))),r=null!==r?r:"",null!==r?(t=vl(),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,Kl=s)):(u=null,Kl=s)):(u=null,Kl=s)),null!==u?(s=Kl,Ll++,r=cl(),Ll--,null===r?r="":(r=null,Kl=s),null!==r?(s=Kl,Ll++,t=nl(),Ll--,null===t?t="":(t=null,Kl=s),null!==t?u=[u,r,t]:(u=null,Kl=e)):(u=null,Kl=e)):(u=null,Kl=e),Tl[l]={nextPos:Kl,result:u},u}function fl(){var l="affricate@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t;return t=Kl,u=Fl(),null!==u?(r=Vl(),null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t),null===u&&(t=Kl,u=Fl(),null!==u?(r=bl(),null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t),null===u&&(t=Kl,u=Cl(),null!==u?(r=gl(),null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t))),Tl[l]={nextPos:Kl,result:u},u}function vl(){var l="liquid@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u;return u=_l(),null===u&&(u=Al()),Tl[l]={nextPos:Kl,result:u},u}function cl(){var l="consonant@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u;return u=Pl(),null===u&&(u=hl(),null===u&&(u=xl())),Tl[l]={nextPos:Kl,result:u},u}function xl(){var l="syllabic@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u;return u=_l(),null===u&&(u=dl(),null===u&&(u=pl(),null===u&&(u=Al()))),Tl[l]={nextPos:Kl,result:u},u}function Pl(){var l="voiced@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u;return u=yl(),null===u&&(u=Cl(),null===u&&(u=gl())),Tl[l]={nextPos:Kl,result:u},u}function hl(){var l="unvoiced@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u;return u=Vl(),null===u&&(u=zl(),null===u&&(u=jl(),null===u&&(u=El(),null===u&&(u=bl(),null===u&&(u=Fl(),null===u&&(u=wl())))))),Tl[l]={nextPos:Kl,result:u},u}function _l(){var l="l@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i;return o=Kl,/^[l]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[l]")),null!==t?(i=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=i),null!==e?(i=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=i),null!==s?(i=Kl,Ll++,a=_l(),Ll--,null===a?a="":(a=null,Kl=i),null!==a?t=[t,e,s,a]:(t=null,Kl=o)):(t=null,Kl=o)):(t=null,Kl=o)):(t=null,Kl=o),Tl[l]={nextPos:Kl,result:t},t}function dl(){var l="m@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i,f;return i=Kl,/^[m]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[m]")),null!==t?(f=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=f),null!==e?(f=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=f),null!==s?(f=Kl,Ll++,a=dl(),Ll--,null===a?a="":(a=null,Kl=f),null!==a?(f=Kl,Ll++,o=ml(),Ll--,null===o?o="":(o=null,Kl=f),null!==o?t=[t,e,s,a,o]:(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i),Tl[l]={nextPos:Kl,result:t},t}function pl(){var l="n@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i,f;return i=Kl,/^[n]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[n]")),null!==t?(f=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=f),null!==e?(f=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=f),null!==s?(f=Kl,Ll++,a=pl(),Ll--,null===a?a="":(a=null,Kl=f),null!==a?(f=Kl,Ll++,o=fl(),Ll--,null===o?o="":(o=null,Kl=f),null!==o?t=[t,e,s,a,o]:(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i),Tl[l]={nextPos:Kl,result:t},t}function Al(){var l="r@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i;return o=Kl,/^[r]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[r]")),null!==t?(i=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=i),null!==e?(i=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=i),null!==s?(i=Kl,Ll++,a=Al(),Ll--,null===a?a="":(a=null,Kl=i),null!==a?t=[t,e,s,a]:(t=null,Kl=o)):(t=null,Kl=o)):(t=null,Kl=o)):(t=null,Kl=o),Tl[l]={nextPos:Kl,result:t},t}function yl(){var l="bgv@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i;return o=Kl,/^[bgv]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[bgv]")),null!==t?(i=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=i),null!==e?(i=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=i),null!==s?(i=Kl,Ll++,a=hl(),Ll--,null===a?a="":(a=null,Kl=i),null!==a?t=[t,e,s,a]:(t=null,Kl=o)):(t=null,Kl=o)):(t=null,Kl=o)):(t=null,Kl=o),Tl[l]={nextPos:Kl,result:t},t}function Cl(){var l="d@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i,f;return i=Kl,/^[d]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[d]")),null!==t?(f=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=f),null!==e?(f=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=f),null!==s?(f=Kl,Ll++,a=Cl(),Ll--,null===a?a="":(a=null,Kl=f),null!==a?(f=Kl,Ll++,o=hl(),Ll--,null===o?o="":(o=null,Kl=f),null!==o?t=[t,e,s,a,o]:(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i),Tl[l]={nextPos:Kl,result:t},t}function gl(){var l="jz@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i;return o=Kl,/^[jz]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[jz]")),null!==t?(i=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=i),null!==e?(i=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=i),null!==s?(i=Kl,Ll++,a=hl(),Ll--,null===a?a="":(a=null,Kl=i),null!==a?t=[t,e,s,a]:(t=null,Kl=o)):(t=null,Kl=o)):(t=null,Kl=o)):(t=null,Kl=o),Tl[l]={nextPos:Kl,result:t},t}function ml(){var l="z@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i;return o=Kl,/^[z]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[z]")),null!==t?(i=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=i),null!==e?(i=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=i),null!==s?(i=Kl,Ll++,a=hl(),Ll--,null===a?a="":(a=null,Kl=i),null!==a?t=[t,e,s,a]:(t=null,Kl=o)):(t=null,Kl=o)):(t=null,Kl=o)):(t=null,Kl=o),Tl[l]={nextPos:Kl,result:t},t}function bl(){var l="s@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i,f,v;return f=Kl,/^[s]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[s]")),null!==t?(v=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=v),null!==e?(v=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=v),null!==s?(v=Kl,Ll++,a=bl(),Ll--,null===a?a="":(a=null,Kl=v),null!==a?(v=Kl,Ll++,o=Vl(),Ll--,null===o?o="":(o=null,Kl=v),null!==o?(v=Kl,Ll++,i=Pl(),Ll--,null===i?i="":(i=null,Kl=v),null!==i?t=[t,e,s,a,o,i]:(t=null,Kl=f)):(t=null,Kl=f)):(t=null,Kl=f)):(t=null,Kl=f)):(t=null,Kl=f)):(t=null,Kl=f),Tl[l]={nextPos:Kl,result:t},t}function Vl(){var l="c@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i,f,v,c;return v=Kl,/^[c]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[c]")),null!==t?(c=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=c),null!==e?(c=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=c),null!==s?(c=Kl,Ll++,a=Vl(),Ll--,null===a?a="":(a=null,Kl=c),null!==a?(c=Kl,Ll++,o=bl(),Ll--,null===o?o="":(o=null,Kl=c),null!==o?(c=Kl,Ll++,i=wl(),Ll--,null===i?i="":(i=null,Kl=c),null!==i?(c=Kl,Ll++,f=Pl(),Ll--,null===f?f="":(f=null,Kl=c),null!==f?t=[t,e,s,a,o,i,f]:(t=null,Kl=v)):(t=null,Kl=v)):(t=null,Kl=v)):(t=null,Kl=v)):(t=null,Kl=v)):(t=null,Kl=v)):(t=null,Kl=v),Tl[l]={nextPos:Kl,result:t},t}function wl(){var l="x@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i,f,v,c;return v=Kl,/^[x]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[x]")),null!==t?(c=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=c),null!==e?(c=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=c),null!==s?(c=Kl,Ll++,a=wl(),Ll--,null===a?a="":(a=null,Kl=c),null!==a?(c=Kl,Ll++,o=Vl(),Ll--,null===o?o="":(o=null,Kl=c),null!==o?(c=Kl,Ll++,i=jl(),Ll--,null===i?i="":(i=null,Kl=c),null!==i?(c=Kl,Ll++,f=Pl(),Ll--,null===f?f="":(f=null,Kl=c),null!==f?t=[t,e,s,a,o,i,f]:(t=null,Kl=v)):(t=null,Kl=v)):(t=null,Kl=v)):(t=null,Kl=v)):(t=null,Kl=v)):(t=null,Kl=v)):(t=null,Kl=v),Tl[l]={nextPos:Kl,result:t},t}function jl(){var l="k@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i,f,v;return f=Kl,/^[k]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[k]")),null!==t?(v=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=v),null!==e?(v=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=v),null!==s?(v=Kl,Ll++,a=jl(),Ll--,null===a?a="":(a=null,Kl=v),null!==a?(v=Kl,Ll++,o=wl(),Ll--,null===o?o="":(o=null,Kl=v),null!==o?(v=Kl,Ll++,i=Pl(),Ll--,null===i?i="":(i=null,Kl=v),null!==i?t=[t,e,s,a,o,i]:(t=null,Kl=f)):(t=null,Kl=f)):(t=null,Kl=f)):(t=null,Kl=f)):(t=null,Kl=f)):(t=null,Kl=f),Tl[l]={nextPos:Kl,result:t},t}function zl(){var l="f@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i,f;return i=Kl,/^[f]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[f]")),null!==t?(f=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=f),null!==e?(f=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=f),null!==s?(f=Kl,Ll++,a=zl(),Ll--,null===a?a="":(a=null,Kl=f),null!==a?(f=Kl,Ll++,o=Pl(),Ll--,null===o?o="":(o=null,Kl=f),null!==o?t=[t,e,s,a,o]:(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i),Tl[l]={nextPos:Kl,result:t},t}function El(){var l="p@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i,f;return i=Kl,/^[p]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[p]")),null!==t?(f=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=f),null!==e?(f=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=f),null!==s?(f=Kl,Ll++,a=El(),Ll--,null===a?a="":(a=null,Kl=f),null!==a?(f=Kl,Ll++,o=Pl(),Ll--,null===o?o="":(o=null,Kl=f),null!==o?t=[t,e,s,a,o]:(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i),Tl[l]={nextPos:Kl,result:t},t}function Fl(){var l="t@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a,o,i,f;return i=Kl,/^[t]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[t]")),null!==t?(f=Kl,Ll++,e=kl(),Ll--,null===e?e="":(e=null,Kl=f),null!==e?(f=Kl,Ll++,s=nl(),Ll--,null===s?s="":(s=null,Kl=f),null!==s?(f=Kl,Ll++,a=Fl(),Ll--,null===a?a="":(a=null,Kl=f),null!==a?(f=Kl,Ll++,o=Pl(),Ll--,null===o?o="":(o=null,Kl=f),null!==o?t=[t,e,s,a,o]:(t=null,Kl=i)):(t=null,
Kl=i)):(t=null,Kl=i)):(t=null,Kl=i)):(t=null,Kl=i),Tl[l]={nextPos:Kl,result:t},t}function kl(){var l="h@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,s,a;return s=Kl,/^[']/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[']")),null!==t?(a=Kl,Ll++,e=ll(),Ll--,null!==e?(e="",Kl=a):e=null,null!==e?t=[t,e]:(t=null,Kl=s)):(t=null,Kl=s),Tl[l]={nextPos:Kl,result:t},t}function Sl(){var l="post_word@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t,e;return u=Ol(),null===u&&(t=Kl,e=Kl,Ll++,u=ll(),Ll--,null===u?u="":(u=null,Kl=e),null!==u?(r=s(),null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t)),Tl[l]={nextPos:Kl,result:u},u}function Ol(){var l="pause@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r;if(r=Bl(),null!==r)for(u=[];null!==r;)u.push(r),r=Bl();else u=null;return null===u&&(u=ql()),Tl[l]={nextPos:Kl,result:u},u}function ql(){var l="EOF@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e;return e=Kl,Ll++,n.length>Kl?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("any character")),Ll--,null===t?t="":(t=null,Kl=e),Tl[l]={nextPos:Kl,result:t},t}function Ml(){var l="non_lojban_word@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t,e,a,o,i,f,v;if(i=Kl,f=Kl,Ll++,t=s(),Ll--,null===t?t="":(t=null,Kl=f),null!==t){if(f=Kl,v=Kl,Ll++,a=Bl(),Ll--,null===a?a="":(a=null,Kl=v),null!==a?(n.length>Kl?(o=n.charAt(Kl),Kl++):(o=null,0===Ll&&r("any character")),null!==o?a=[a,o]:(a=null,Kl=f)):(a=null,Kl=f),null!==a)for(e=[];null!==a;)e.push(a),f=Kl,v=Kl,Ll++,a=Bl(),Ll--,null===a?a="":(a=null,Kl=v),null!==a?(n.length>Kl?(o=n.charAt(Kl),Kl++):(o=null,0===Ll&&r("any character")),null!==o?a=[a,o]:(a=null,Kl=f)):(a=null,Kl=f);else e=null;null!==e?t=[t,e]:(t=null,Kl=i)}else t=null,Kl=i;return Tl[l]={nextPos:Kl,result:t},t}function Bl(){var l="space_char@"+Kl,u=Tl[l];if(u)return Kl=u.nextPos,u.result;var t;return/^[.\t\n\r?! ]/.test(n.charAt(Kl))?(t=n.charAt(Kl),Kl++):(t=null,0===Ll&&r("[.\\t\\n\\r?! ]")),Tl[l]={nextPos:Kl,result:t},t}function Il(){var l="spaces@"+Kl,n=Tl[l];if(n)return Kl=n.nextPos,n.result;var u,r,t;if(t=Kl,r=Bl(),null!==r)for(u=[];null!==r;)u.push(r),r=Bl();else u=null;return null!==u?(r=ql(),r=null!==r?r:"",null!==r?u=[u,r]:(u=null,Kl=t)):(u=null,Kl=t),null===u&&(u=ql()),Tl[l]={nextPos:Kl,result:u},u}function Jl(l){l.sort();for(var n=null,u=[],r=0;r<l.length;r++)l[r]!==n&&(u.push(l[r]),n=l[r]);return u}function Nl(){for(var l=1,u=1,r=!1,t=0;t<Math.max(Kl,Ql);t++){var e=n.charAt(t);"\n"===e?(r||l++,u=1,r=!1):"\r"===e||"\u2028"===e||"\u2029"===e?(l++,u=1,r=!0):(u++,r=!1)}return{line:l,column:u}}function Dl(l){if("string"==typeof l)return l;var n="";for(var u in l)n+=Dl(l[u]);return n}function Gl(l){if("string"==typeof l)return l;var n=[];for(var u in l)n.push(Gl(l[u]));return n}var Hl={text:t,any_word:e,lojban_word:s,gismu_2:a,lujvo_2:o,fuhivla_2:i,cmevla_2:f,cmavo_2:v,gismu:c,stressed_CCVC_CVCC:x,lujvo:P,fuhivla:h,fuhivla_head:_,cmevla:d,zifcme:p,cmavo:A,brivla:y,brivla_core:C,any_fuhivla_rafsi:g,rafsi_string:m,CVV_final_rafsi:b,short_final_rafsi:V,initial_rafsi:w,stressed_fuhivla_rafsi:j,fuhivla_rafsi:z,stressed_y_rafsi:E,y_rafsi:F,y_less_rafsi:k,stressed_hy_rafsi:S,hy_rafsi:O,stressed_CVC_rafsi:q,CVC_rafsi:M,unstressed_VC:B,stressed_CCV_rafsi:I,CCV_rafsi:J,stressed_CVC_CCV_CVV:N,CVV_rafsi:D,stressed_syllable:G,unstressed_syllable:H,stressed_vowel:K,unstressed_vowel:L,long_rafsi:Q,r_hyphen:R,final_syllable:T,stress:U,any_syllable:W,syllable:X,consonantal_syllable:Y,coda:Z,onset:$,nucleus:ll,glide:nl,diphthong:ul,vowel:rl,a:tl,i:el,u:sl,y:al,initial_pair:ol,initial:il,affricate:fl,liquid:vl,consonant:cl,syllabic:xl,voiced:Pl,unvoiced:hl,l:_l,m:dl,n:pl,r:Al,bgv:yl,d:Cl,jz:gl,z:ml,s:bl,c:Vl,x:wl,k:jl,f:zl,p:El,t:Fl,h:kl,post_word:Sl,pause:Ol,EOF:ql,non_lojban_word:Ml,space_char:Bl,spaces:Il};if(void 0!==u){if(void 0===Hl[u])throw new Error("Invalid rule name: "+l(u)+".")}else u="text";var Kl=0,Ll=0,Ql=0,Rl=[],Tl={},Ul=Hl[u]();if(null===Ul||Kl!==n.length){var Wl=Math.max(Kl,Ql),Xl=Wl<n.length?n.charAt(Wl):null,Yl=Nl();throw new this.SyntaxError(Jl(Rl),Xl,Wl,Yl.line,Yl.column)}return Ul},toSource:function(){return this._source}};return n.SyntaxError=function(n,u,r,t,e){function s(n,u){var r,t;switch(n.length){case 0:r="end of input";break;case 1:r=n[0];break;default:r=n.slice(0,n.length-1).join(", ")+" or "+n[n.length-1]}return t=u?l(u):"end of input","Expected "+r+" but "+t+" found."}this.name="SyntaxError",this.expected=n,this.found=u,this.message=s(n,u),this.offset=r,this.line=t,this.column=e},n.SyntaxError.prototype=Error.prototype,n}();module.exports=cmaxes,term=process.argv[2],void 0!==term&&"string"==typeof term.valueOf()&&console.log(JSON.stringify(cmaxes.parse(term)));

var xuvalsi = function(str,type){
	var j;var re;
	if (type!=='cmavo-compound'){
		re = new RegExp("^"+type+",[^,]+$");
		}
		else{
		re = new RegExp("^(cmavo,[^,]+){2,}$");
		}
	try{j = cmaxes.parse(str.toLowerCase().replace(/,/g,''));}catch(e){j='';}
	return j.toString().match(re)!==null ? true : false;
};
var xugismu = function(str){
	return xuvalsi (str,"gismu");
};
var xulujvo = function(str){
	return xuvalsi (str,"lujvo");
};
var xufuhivla = function(str){
	return xuvalsi (str,"fu'ivla");
};
var xucmavo = function(str){
	return xuvalsi (str,"cmavo");
};
var xucmavogunma = function(str){
	return xuvalsi (str,"cmavo-compound");
};
var xucmevla = function(str){
	return xuvalsi (str,"cmevla");
};

//now split
var jvokatna = function (lujvoi){
	var tmp;
	tmp=lujvoi.toLowerCase().replace(/[^a-z']/img,"");
	var myregexp = new RegExp("^("+CVV+")[rn]", "gm");
	var myregexpi = new RegExp("("+gism+V+"$|"+gism+"(?=y)|" + CVV + "|" +CCV + "|" + CVC + ")","g");
	tmp=tmp.replace(myregexp,"$1 ");
	tmp=tmp.replace(myregexpi,"$1 ");
	tmp=tmp.replace(/y/g," ");
	tmp=tmp.replace(/ +/g," ");
return tmp.trim();
};
var rafyjongau = function (raf){//join given rafsi into a lujvo
	var lujvo='';
	var out;
	if (raf.length<2){out='mo\'a rafsi cu sumti';}
	var lihenraf='';
	for (var i=0; i<raf.length;i++){
		var my = new RegExp("^"+gism+"$", "gm");
		if ((raf[i].match(my)||[]).length===1 && i!=raf.length-1){
			raf[i]=raf[i]+'y';
		}
		if (lihenraf!==''){
			var pa=lihenraf.substr(lihenraf.length-1);
			var re=raf[i].substr(0,1);
			var pare=pa+re;
			my = new RegExp("^"+CyC+"$", "gm");
			if (pare.match(my)){raf[i]='y'+raf[i];}
			if (pa=="n" && (raf[i].match(/^(?:d[jz]|t[cs])/)!==null)){raf[i]='y'+raf[i];}
		}else
		{
			my = new RegExp("^"+CVV+"$", "gm");
			var myt = new RegExp("^"+CCV+"$", "gm");
			if ((raf[i].match(my)||[]).length===1 && (raf.length>2 || ((raf[1].match(myt)||[]).length===0))){
				if (raf[1].substr(0,1)=='r'){raf[i]=raf[i]+'n';}else{raf[i]=raf[i]+'r';}
			}
		}
		lihenraf=raf[i];
		lujvo=lujvo+raf[i];
		
	}
	
	// tosmabru test
	var myg = new RegExp("^("+CVC+"+)(?:("+C+")"+V+CC+V+"|("+C+")"+V+C+"y.+)$","m");
	if (lujvo.match(myg)!==null){
		//If there aren't at least two CVCs before a 'y', no hyphen is needed.
		var pre=lujvo.match(myg)[1];
		var next;if (typeof lujvo.match(myg)[7]!=='undefined'){next=lujvo.match(myg)[7];}else{next=lujvo.match(myg)[12];}
		next=pre.substr(pre.length-1) + next;
		myg = new RegExp(CxC,"gm");
		var myrg = new RegExp(CC,"");
		if (pre.match(myg)===null && next.match(myrg)!==null){myrg= new RegExp("("+C+")("+C+")","m");lujvo=lujvo.replace(myrg,"$1y$3")}
	}
	return lujvo;
};

var jvomre = function (int){
//lujvo scorer
// Remember, the goal is to get as low a score as possible.
var lujvo = int;
var l = lujvo.length;
var a=(lujvo.match(/'/gm)||[]).length;
var h=(lujvo.match(/[yY]/gm)||[]).length;
var reg=new RegExp("^"+CVV+"[rn]"+C,"g");
h=h+(lujvo.match(reg)||[]).length;
var r = 0;
var ar=jvokatna(lujvo).split(" ");
for (var i=0;i<ar.length;i++)
{
reg = new RegExp ("^"+C+V+C+C+V+"$","g"); if (ar[i].match(reg)!==null){ r += 1;}
reg = new RegExp ("^"+C+V+C+C+"$","g"); if (ar[i].match(reg)!==null){ r += 2;}
reg = new RegExp ("^"+CC+V+C+V+"$","g"); if (ar[i].match(reg)!==null){ r += 3;}
reg = new RegExp ("^"+CC+V+C+"$","g"); if (ar[i].match(reg)!==null){ r += 4;}
reg = new RegExp ("^"+CVC+"$","g"); if (ar[i].match(reg)!==null){ r += 5;}
reg = new RegExp ("^"+C+V+"'"+V+"$","g"); if (ar[i].match(reg)!==null){ r += 6;}
reg = new RegExp ("^"+CCV+"$","g"); if (ar[i].match(reg)!==null){ r += 7;}
reg = new RegExp ("^"+C + "(?:[aeo]i|au)$","g"); if (ar[i].match(reg)!==null){ r += 8;}
}
vowels=(lujvo.match(/[aeiouAEIOU]/gm)||[]).length;
return (1000 * l) - (500 * a) + (100 * h) - (10 * r) - vowels;
};


 function cartProd(arr) {
  if (arr.length === 0) {
    return [];
  } 
else if (arr.length ===1){
return arr[0];
}
else {
    var result = [];
    var allCasesOfRest = cartProd(arr.slice(1));  // recur with the rest of array
    for (var c in allCasesOfRest) {
      for (var i = 0; i < arr[0].length; i++) {
        result.push(arr[0][i] +" "+ allCasesOfRest[c]);
      }
    }
    return result;
  }

}
/// LUJVO CONSTRUCTOR PART END

var rafsiselfu = function (lin,last)//only from brivla to rafsi, returns a string of rafsi
{
var coun = xmlDocEn.find("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/rafsi/text()[1]");
if (coun.length===0)
{
try{coun=xmlDocEn.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/notes[1]").text(); var tmp=coun.replace(/^.*?-([a-z']+)-.*/,'$1');if (tmp!==coun){coun=tmp;}else{coun='';}}catch(err){coun='';}
}
else{coun=coun.join (' ');}
if (xugismu(lin)===true){
	coun=coun.split(" ");
	if (last!==1){
		if(lin.substr(0,4)!=="brod"){
			coun.push(lin.substr(0,4));
		}
	}else{
		coun.push(lin.substr(0,5));
	}
	coun=coun.join(" ").trim();
}
return coun;
//if it's a gismu then add full 5-letter rafsi for it
};

//NOW TRY TO OUTPUT SCORE LUJVO FROM GIVEN GISMU (OR OTHER VALSI)
var triz=function(inp,flag,lng,xmlDoc){
if (typeof lng==='undefined'){lng='en';}
if (typeof xmlDoc==='undefined'){
	if (lng==="en"){xmlDoc=xmlDocEn;}else{xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"dumps",lng + ".xml"),{encoding: 'utf8'}));}
}
	var ar=inp.trim().split(" ");
	for(var l=0;l<ar.length;l++){
		if (l==ar.length-1){
		ar[l]=rafsiselfu(ar[l],1).split(" ");}else{
		ar[l]=rafsiselfu(ar[l],0).split(" ");
		}
	}
	//we have ar, an array of arrays
	var cart=cartProd(ar);
	var len=cart.length;
	//
	var sey =[];
	for (var i = 0; i < cart.length; i++)
	{
		sey.push([cart[i]]);
		sey[i].push(rafyjongau(cart[i].split(" ")));
		sey[i].push(jvomre(sey[i][1]));
	}
	sey.sort(sortFunction);
	var si='';
	for (i=0;i<cart.length;i++)
	{
		if (xulujvo(sey[i][1])===true){
			si+=sey[i][1] + "["+sey[i][2]+"] ";
		}
	}
	var tor='';
	for (i=0;i<cart.length;i++)
	{
		tor=tordu(sey[i][1],lng,1,xmlDoc);
		if (tor!=='' && (xulujvo(sey[i][1])===true)){break;}
	}
	//{throw new Error('============');}

	function sortFunction(a, b) {
    if (a[2] === b[2]) {
        return 0;
    }
    else {
        return (a[2] < b[2]) ? -1 : 1;
    }
	}
	si=si.trim().split(" ").splice(0,5);
	if (si.length>=5){si.push("...");}
	si=si.join(", ");
	if (tor!==''){si+="\n"+tor+"";}
	if (flag===1){ljv=si;si=tor;}
	return si;
};

var selrafsi = function (lin)
{
var gag;

var rev = xmlDocEn.get("/dictionary/direction[1]/valsi[rafsi=\""+lin+"\"]");
//now try -raf- in notes
if (typeof rev==='undefined'){rev =  xmlDocEn.get("/dictionary/direction[1]/valsi[contains(translate(./notes,\""+lin.toUpperCase()+"\",\""+lin+"\"),\" -"+lin+"-\")]");}
//now try to add a vowel
if (typeof rev==='undefined'){rev = xmlDocEn.get("/dictionary/direction[1]/valsi[@word=\""+lin+"a\" and (@type=\"fu'ivla\" or @type=\"experimental gismu\" or @type=\"gismu\")]");}
if (typeof rev==='undefined'){rev = xmlDocEn.get("/dictionary/direction[1]/valsi[@word=\""+lin+"e\" and (@type=\"fu'ivla\" or @type=\"experimental gismu\" or @type=\"gismu\")]");}
if (typeof rev==='undefined'){rev = xmlDocEn.get("/dictionary/direction[1]/valsi[@word=\""+lin+"i\" and (@type=\"fu'ivla\" or @type=\"experimental gismu\" or @type=\"gismu\")]");}
if (typeof rev==='undefined'){rev = xmlDocEn.get("/dictionary/direction[1]/valsi[@word=\""+lin+"o\" and (@type=\"fu'ivla\" or @type=\"experimental gismu\" or @type=\"gismu\")]");}
if (typeof rev==='undefined'){rev = xmlDocEn.get("/dictionary/direction[1]/valsi[@word=\""+lin+"u\" and (@type=\"fu'ivla\" or @type=\"experimental gismu\" or @type=\"gismu\")]");}
//may be it's already a word? then just return it.
if (typeof rev!=='undefined'){rev=rev.attr("word").value();}else{if (xugismu(lin)===true||xufuhivla(lin)===true){rev=lin;}else{rev=lin+"*";}}
return rev;
};

var katna= function(lin,lng,flag,xmlDoc){
	lin=jvokatna(lin).split(" ");
	for (var o=0;o<lin.length;o++){
		lin[o]=selrafsi(lin[o],xmlDoc);
	}
	lin = lin.join(" ");
	if (flag!==1){lin = lin + " ≈ " + gloso(lin,lng,1,xmlDoc);}
	return lin;
};


var sutysiskuningau = function(lng){//write a new file parsed.js that would be used by la sutysisku
if (typeof lng==='undefined'){lng='en';}
	xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"dumps",lng + ".xml"),{encoding: 'utf8'}).replace(/(&lt;|<)script.*?(&gt;|>).*?(&lt;|<)/g,"&lt;").replace(/(&lt;|<)\/script(&gt;|>)/g,""));

var pars='var documentStore = [';
var rev = xmlDoc.find("/dictionary/direction[1]/valsi");
	for (var i=0;i<rev.length;i++) {
		var hi=rev[i].attr("word").value().replace("\\","\\\\");
		pars+="{\"w\":\""+hi+"\"";
		try{
			if(rev[i].attr("type").value()!=='gismu' && xucmavogunma(hi)===false && xucmevla(hi)===false && xucmavo(hi)===false && xulujvo(hi)===false && xufuhivla(hi)===false){
				pars+=",\"t\":\""+rev[i].attr("type").value().replace(/\\/g,"\\\\")+"\"";
			}
		}catch(err){}
		try{pars+=",\"s\":\""+rev[i].find("selmaho[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")+"\"";}catch(err){}
		try{pars+=",\"d\":\""+rev[i].find("definition[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")+"\"";}catch(err){}
		try{pars+=",\"n\":\""+rev[i].find("notes[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")+"\"";}catch(err){}
		try{pars+=",\"g\":\""+rev[i].find("glossword/@word").join(";").replace(/ word=\"(.*?)\"/g,"$1").replace(/"/g,"'").replace("\\","\\\\")+"\"";}catch(err){}
		try{pars+=",\"k\":\""+rev[i].find("related[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")+"\"";}catch(err){}
			try{
				var ex = rev[i].find("example").toString().replace(/>,</g,">%<").replace(/<example phrase=\"(.*?)\">(.*?)<\/example>/g,"$1 — $2").replace(/"/g,"'").replace(/\\/g,"\\\\");
				if (ex!==''){
				pars+=",\"e\":\""+ex+"\"";
				}
			}catch(err){}
		var ra=rev[i].find("rafsi//text()[1]");
		if (xugismu(hi)===true){
			ra.push(hi);
			if(hi.indexOf("brod")!==0){ra.push(hi.substr(0,4));}
			if(hi.indexOf("broda")===0){ra.push("brod");}
		}
		ra=ra.join("\",\"");
		
		if (ra.length!==0){pars+=",\"r\":[\""+ra+"\"]";}//else{pars+=",\"rafsi\":[]";}//not needed anymore due to gleki's fixes
		pars+="}";
		if (i<rev.length-1){pars+=",\n";}//\n
	}
	pars+="];\n";
	var t = path.join(__dirname,"../i/data","parsed-"+lng + ".js");
	pars = fs.writeFileSync(t+".temp",pars);
	fs.renameSync(t+".temp",t);
	t = path.join(__dirname,"../i/"+lng+"/","webapp.appcache");
	var d = new Date();
	var n = d.getDate();
	if(n==1){
		try{pars=fs.readFileSync(t,{encoding: 'utf8'});pars = fs.writeFileSync(t,pars);console.log(t + ' updated');}catch(err){}
	}
};

var labangu = function(){
	var request = require("request");
	var fs = require("fs");
	var t = path.join(__dirname,"dumps","labangu.csv");
	requestd = request.defaults({jar: true});
	var uri="https://docs.google.com/spreadsheets/d/19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw/export?format=csv&id=19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw&gid=1855189494";
	requestd({
	    uri: uri, method: "GET"
	}).on("error", function (err) {
	}).pipe(fs.createWriteStream(t)).on("finish", function () {
		var take = fs.readFileSync(t,{encoding: 'utf8'});
		take=take.replace(/➜/igm,"=>");
		take=take.replace(/&/igm,"&amp;");
		take=take.replace(/<(|\/)(small|sub)>|&nbsp;/igm,"");
		take=take.replace(/^(.*?),\"\n/igm,"<valsi word=\"$1\"><definition>");
		take=take.replace(/\"(\n|\r)/igm,"</definition></valsi>\n");
		take=take.replace(/'''(.*?)'''/igm,"{$1}").replace(/''(.*?)''/igm,"{$1}");
		take="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<?xml-stylesheet type=\"text/xsl\" href=\"jbovlaste.xsl\"?>\n<dictionary>\n<direction from=\"lojban\" to=\"La Bangu English\">\n"+take+"</definition></valsi>\n</direction>\n</dictionary>";
		take = fs.writeFileSync(t+".temp",take);
		fs.renameSync(t+".temp",path.join(__dirname,"dumps","jb.xml"));console.log("La Bangu updated");
	});
};

var lmw = function (lin,sendTo){//to be done
var request = require("request"); var body;
var uri="http://mw.lojban.org/index.php?action=render&title="+lin;
//var uri="http://mw.lojban.org/index.php?search="+lin+"&button=&title=Special%3ASearch";
//https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&prop=extracts&format=json&exlimit=10&explaintext=&exsectionformat=plain&titles=India
//http://mw.lojban.org/api.php?action=opensearch&search=.o%27i&format=json
request({uri: uri,method: "GET"}, function(err, response, body) {
	var i;i = body.replace(/<[^>]+>/g,'');
	i=i.substring(0,200);
	if (i.length>=200){i+='...';}
	benji(source,socket,clientmensi,sendTo, i);
});
};

var tcepru = function(lins,sendTo,source,socket){
	var exec = require('child_process').exec;
	exec(path.join(__dirname,"../tcepru/./parser") + ' <<<"'+lins+'" 2>/dev/null', function (error, stdout, stderr) {
	lin=stdout;
	if (error !==null){lin='O_0';}
	benji(source,socket,clientmensi,sendTo, lin.replace(/\n/g,' ').replace(/ {2,}/g,' '));
	});
};

var jbofihe = function(lin,sendTo,source,socket){
	var exec = require('child_process').exec;
	exec(path.join(__dirname,"../jbofihe/./jbofihe") + ' -ie -cr <<<"'+lin+'" 2>/dev/null', function (error, stdout, stderr) {
	lin=stdout;
	if (error !==null){lin='O_0';}
	benji(source,socket,clientmensi,sendTo, lin.replace(/\n/g,' ').replace(/ {2,}/g,' '));
	});
};

var pseudogismu = function(){//a joke function. checks if an English word is  a valid gismu
	var words = fs.readFileSync(path.join(__dirname,"../","vale.txt"),'utf8').split("\n");
	var sj=[];
	for (var j=0;j<words.length;j++){
			sj.push(words[j]+" "+run_camxes(words[j].toLowerCase().replace(/sh/g,"c"),3));
	}
	var content = fs.writeFileSync(path.join(__dirname,"../","vale-result"),sj.join("\n"));
};
//pseudogismu();

var prettifylojbansentences = function(){//insert spaces to lojban sentences
        var words = fs.readFileSync(path.join(__dirname,"../","eikatna.txt"),'utf8').split("\n");
        var sj=[];
        for (var j=0;j<words.length;j++){
                        sj.push(run_camxes(words[j],3));
        }
        var content = fs.writeFileSync(path.join(__dirname,"../","sekatna.txt"),sj.join("\n").replace(/h/g,"H").replace(/[^a-z \.\,'\n]/g,"").replace(/ +/g," ").replace(/ +\n/g,"\n"));
        return 'mulno';
};

var zeizei = function(text){//insert spaces to lojban sentences, split lujvo into zo zei zei lujvo
text=run_camxes(text,3).toString();
	try{if (text.indexOf("SyntaxError")<0){
		text=text.replace(/[a-z]+`/g,"").replace(/[a-z]+_[a-z]+/ig,"").replace(/h/g,"H").replace(/[^a-z \.\,'\n]/g,"").replace(/ +/g," ").replace(/ +\n/g,"\n");
		var sj=text.split(" ");
		for (var j=0;j<sj.length;j++){
			if (xulujvo(sj[j])===true){
			sj[j]=katna(sj[j],"en",1,xmlDocEn);
			if (sj[j].search(/^((se|te|ve|xe|na'e|je'a|to'e) )+[^ ]+$/)===0){
				sj[j]=sj[j].replace(/ /g," ");
			}
			else{sj[j]=sj[j].replace(/ /g," zei ");}
			}
		}
		text = sj.join(" ").trim();
	}else{text='O_0'}}catch(e){}
return text;
};

var anji = function(text){
var anj= require('./anji.js');
var anjarr = anj.anjik();
	text=zeizei(text).replace(/'/g,"h");
		for (j=0;j<anjarr.length;j++){
			myregexp = new RegExp("\\b"+anjarr[j][0]+"\\b", "gim");
			text=text.replace(myregexp,anjarr[j][1]);
		}
return text;
};

var tersmu = function(lin,sendTo,source,socket){
	var anj= require('../tersmu/all.js');
	//module.exports.ma = h$main;
	benji(source,socket,clientmensi,sendTo, anj.h$main(lin));
};

var mensimikce = function(text){//eliza bot analog
var Mensibot = require('../mahantufa/mensimikce.js');
//Mensibot.start(); // initializes Mensi and returns a greeting message
var r = Mensibot.reply(text).toString();
Mensibot = null;
return r;
};
//NAXLE

var http = require('http'),
    fs = require('fs'),
    // NEVER use a Sync function except at start-up!
    index = fs.readFileSync(__dirname + '/naxle.html');

// Send index.html to all requests
var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

// Socket.io server listens to our app
var io = require('socket.io').listen(app);

io.sockets.on('connection', function(socket) {
    //socket.emit('welcome', { message: 'Welcome!' +socket.id});
	//io.to(socket.id).emit("returner", { message: message: vlaste(data.data,'en') });
    socket.on(
    	'i am client', function(data){
    		//clientmensi, from, to, text, message,source
    		if(data.data.indexOf(prereplier+"doi")===0 || data.data.indexOf(prereplier+"tell")===0){}else{
    			processormensi(clientmensi, "mw.lojban.org", "", data.data, "","naxle",socket);
    		}
    	}
    );
});

app.listen(3000);

//mahantufa
var ningaumahantufa = function(text,socket){
	var fs = require("fs");
	var PEG = require("pegjs");
	var UglifyJS = require("uglify-js");
	//write file
	var whichfile = text.substr(0,text.indexOf(' '));
	text = text.substr(text.indexOf(' ')+1);
	var t = path.join(__dirname,"."+whichfile+".peg");
	fs.writeFileSync(t,text);
	// // read peg and build a parser
	var camxes_peg = fs.readFileSync(whichfile+".peg").toString();
	try{var camxes = PEG.buildParser(camxes_peg, {cache: true, trace: true});
	// // write to a file
	var fd = fs.openSync(whichfile, 'w+');
	var buffer = new Buffer('var camxes = ');
	fs.writeSync(fd, buffer, 0, buffer.length);
	buffer = new Buffer(camxes.toSource());
	fs.writeSync(fd, buffer, 0, buffer.length);
	buffer = new Buffer("\n\nmodule.exports = camxes;\n\nterm = process.argv[2];\nif (term !== undefined && typeof term.valueOf() === 'string')\n  console.log(JSON.stringify(camxes.parse(term)));\n\n");
	fs.writeSync(fd, buffer, 0, buffer.length);
	fs.close(fd);
	fs.writeFileSync(whichfile, UglifyJS.minify(whichfile).code);
	socket.emit('returner', {message: "snada"});
	}
	catch(e){socket.emit('returner', {message: e.message});}
};

var cmaxes=function(){function l(l){return'"'+l.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"'}var n={parse:function(n,u){function r(l){Vl>El||(El>Vl&&(Vl=El,Fl=[]),Fl.push(l))}function t(){var l="text@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,s,a;if(s=El,a=El,u=ml(),u=null!==u?u:"",null!==u){for(r=[],t=e();null!==t;)r.push(t),t=e();null!==r?u=[u,r]:(u=null,El=a)}else u=null,El=a;return null!==u&&(u=function(l,n){return zl(n)}(s,u[1])),null===u&&(El=s),Sl[l]={nextPos:El,result:u},u}function e(){var l="any_word@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e;return t=El,e=El,u=s(),null!==u?(r=ml(),r=null!==r?r:"",null!==r?u=[u,r]:(u=null,El=e)):(u=null,El=e),null!==u&&(u=function(l,n){return n}(t,u[0])),null===u&&(El=t),Sl[l]={nextPos:El,result:u},u}function s(){var l="lojban_word@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u;return u=a(),null===u&&(u=i(),null===u&&(u=f(),null===u&&(u=v(),null===u&&(u=_())))),Sl[l]={nextPos:El,result:u},u}function a(){var l="cmevla@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a;if(e=El,s=El,a=El,ql++,u=o(),ql--,null!==u?(u="",El=a):u=null,null!==u){for(r=[],t=O();null!==t;)r.push(t),t=O();null!==r?(a=El,ql++,t=gl(),ql--,null!==t?(t="",El=a):t=null,null!==t?u=[u,r,t]:(u=null,El=s)):(u=null,El=s)}else u=null,El=s;return null===u&&(u=o()),null!==u&&(u=function(l,n){return["cmevla",kl(n)]}(e,u)),null===u&&(El=e),Sl[l]={nextPos:El,result:u},u}function o(){var l="zifcme@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a,o;if(s=El,a=El,ql++,u=Al(),ql--,null===u?u="":(u=null,El=a),null!==u){for(r=[],t=N(),null===t&&(t=D(),null===t&&(t=Al(),null===t&&(a=El,t=Y(),null!==t?(o=El,ql++,e=gl(),ql--,null===e?e="":(e=null,El=o),null!==e?t=[t,e]:(t=null,El=a)):(t=null,El=a))));null!==t;)r.push(t),t=N(),null===t&&(t=D(),null===t&&(t=Al(),null===t&&(a=El,t=Y(),null!==t?(o=El,ql++,e=gl(),ql--,null===e?e="":(e=null,El=o),null!==e?t=[t,e]:(t=null,El=a)):(t=null,El=a))));null!==r?(t=Y(),null!==t?(a=El,ql++,e=gl(),ql--,null!==e?(e="",El=a):e=null,null!==e?u=[u,r,t,e]:(u=null,El=s)):(u=null,El=s)):(u=null,El=s)}else u=null,El=s;return Sl[l]={nextPos:El,result:u},u}function i(){var l="cmavo@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,o,i,f,c,v,x,P,h,_,A;if(v=El,x=El,P=El,ql++,u=a(),ql--,null===u?u="":(u=null,El=P),null!==u)if(P=El,ql++,h=El,r=Y(),null!==r?(t=H(),null!==t?(e=Y(),null!==e?(_=El,A=El,ql++,s=S(),ql--,null===s?s="":(s=null,El=A),null!==s?(o=Q(),null!==o?(i=Al(),i=null!==i?i:"",null!==i?(f=p(),null!==f?s=[s,o,i,f]:(s=null,El=_)):(s=null,El=_)):(s=null,El=_)):(s=null,El=_),null===s&&(_=El,A=El,ql++,s=S(),ql--,null!==s?(s="",El=A):s=null,null!==s?(o=Q(),null!==o?(i=b(),null!==i?s=[s,o,i]:(s=null,El=_)):(s=null,El=_)):(s=null,El=_)),null!==s?r=[r,t,e,s]:(r=null,El=h)):(r=null,El=h)):(r=null,El=h)):(r=null,El=h),ql--,null===r?r="":(r=null,El=P),null!==r)if(P=El,ql++,t=Al(),ql--,null===t?t="":(t=null,El=P),null!==t)if(e=R(),null!==e)if(s=J(),null!==s){for(o=[],P=El,i=N(),null!==i?(f=Al(),null!==f?i=[i,f]:(i=null,El=P)):(i=null,El=P);null!==i;)o.push(i),P=El,i=N(),null!==i?(f=Al(),null!==f?i=[i,f]:(i=null,El=P)):(i=null,El=P);null!==o?(i=N(),null!==i?(f=R(),null!==f?(P=El,ql++,c=dl(),ql--,null!==c?(c="",El=P):c=null,null!==c?u=[u,r,t,e,s,o,i,f,c]:(u=null,El=x)):(u=null,El=x)):(u=null,El=x)):(u=null,El=x)}else u=null,El=x;else u=null,El=x;else u=null,El=x;else u=null,El=x;else u=null,El=x;return null!==u&&(u=function(l,n){return["cmavo",kl(n)]}(v,u)),null===u&&(El=v),Sl[l]={nextPos:El,result:u},u}function f(){var l="gismu@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r;return r=El,u=c(),null!==u&&(u=function(l,n){return["gismu",kl(n)]}(r,u)),null===u&&(El=r),Sl[l]={nextPos:El,result:u},u}function c(){var l="gismu_like@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a,o;return a=El,u=E(),null!==u?(o=El,ql++,r=S(),ql--,null!==r?(r="",El=o):r=null,null!==r?(o=El,ql++,t=V(),ql--,null!==t?(t="",El=o):t=null,null!==t?(e=Y(),null!==e?(s=H(),null!==s?u=[u,r,t,e,s]:(u=null,El=a)):(u=null,El=a)):(u=null,El=a)):(u=null,El=a)):(u=null,El=a),Sl[l]={nextPos:El,result:u},u}function v(){var l="fuhivla@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r;return r=El,u=x(),null!==u&&(u=function(l,n){return["fuhivla",kl(n)]}(r,u)),null===u&&(El=r),Sl[l]={nextPos:El,result:u},u}function x(){var l="fuhivla_like@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t;return t=El,u=P(),null!==u?(r=V(),null!==r?u=[u,r]:(u=null,El=t)):(u=null,El=t),Sl[l]={nextPos:El,result:u},u}function P(){var l="fuhivla_head_ext@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a,o;if(a=El,u=h(),null!==u)if(r=M(),null!==r)if(o=El,ql++,t=S(),ql--,null!==t?(t="",El=o):t=null,null!==t){for(e=[],s=B();null!==s;)e.push(s),s=B();null!==e?u=[u,r,t,e]:(u=null,El=a)}else u=null,El=a;else u=null,El=a;else u=null,El=a;return Sl[l]={nextPos:El,result:u},u}function h(){var l="fuhivla_head@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a,o,f,c,v,x;if(f=El,c=El,ql++,u=m(),ql--,null===u?u="":(u=null,El=c),null!==u)if(c=El,ql++,r=i(),ql--,null===r?r="":(r=null,El=c),null!==r)if(c=El,ql++,v=El,x=El,ql++,t=m(),ql--,null===t?t="":(t=null,El=x),null!==t?(e=Y(),null!==e?(s=m(),null!==s?t=[t,e,s]:(t=null,El=v)):(t=null,El=v)):(t=null,El=v),ql--,null===t?t="":(t=null,El=c),null!==t)if(c=El,ql++,e=Al(),ql--,null===e?e="":(e=null,El=c),null!==e)if(c=El,ql++,s=J(),ql--,null!==s?(s="",El=c):s=null,null!==s){for(a=[],o=F();null!==o;)a.push(o),o=F();null!==a?u=[u,r,t,e,s,a]:(u=null,El=f)}else u=null,El=f;else u=null,El=f;else u=null,El=f;else u=null,El=f;else u=null,El=f;return Sl[l]={nextPos:El,result:u},u}function _(){var l="lujvo@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a,o,c,x,P,h,_;return x=El,P=El,h=El,ql++,u=f(),ql--,null===u?u="":(u=null,El=h),null!==u?(h=El,ql++,r=v(),ql--,null===r?r="":(r=null,El=h),null!==r?(h=El,ql++,t=i(),ql--,null===t?t="":(t=null,El=h),null!==t?(h=El,ql++,_=El,e=T(),null!==e?(s=H(),null!==s?(a=Al(),null!==a?(o=Q(),null!==o?(c=J(),null!==c?e=[e,s,a,o,c]:(e=null,El=_)):(e=null,El=_)):(e=null,El=_)):(e=null,El=_)):(e=null,El=_),ql--,null===e?e="":(e=null,El=h),null!==e?(s=p(),null!==s?u=[u,r,t,e,s]:(u=null,El=P)):(u=null,El=P)):(u=null,El=P)):(u=null,El=P)):(u=null,El=P),null!==u&&(u=function(l,n){return["lujvo",kl(n)]}(x,u)),null===u&&(El=x),Sl[l]={nextPos:El,result:u},u}function p(){var l="brivla_core@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a,o,i;for(e=El,u=[],r=d();null!==r;)u.push(r),r=d();return null!==u?(r=x(),null===r&&(r=w(),null===r&&(s=El,a=El,r=q(),null===r&&(r=j(),null===r&&(o=El,r=k(),null!==r?(i=El,ql++,t=Q(),ql--,null===t?t="":(t=null,El=i),null!==t?r=[r,t]:(r=null,El=o)):(r=null,El=o))),null!==r?(o=El,ql++,t=S(),ql--,null!==t?(t="",El=o):t=null,null!==t?r=[r,t]:(r=null,El=a)):(r=null,El=a),null===r&&(r=g()),null!==r?(t=b(),null!==t?r=[r,t]:(r=null,El=s)):(r=null,El=s))),null!==r?u=[u,r]:(u=null,El=e)):(u=null,El=e),Sl[l]={nextPos:El,result:u},u}function A(){var l="any_fuhivla_rafsi@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u;return u=x(),null===u&&(u=y(),null===u&&(u=g())),Sl[l]={nextPos:El,result:u},u}function d(){var l="init_rafsi@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s;return e=El,u=q(),null===u&&(u=j()),null!==u?(s=El,ql++,r=S(),ql--,null===r?r="":(r=null,El=s),null!==r?(t=Al(),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,El=e)):(u=null,El=e)):(u=null,El=e),null===u&&(u=y(),null===u&&(e=El,s=El,ql++,u=A(),ql--,null===u?u="":(u=null,El=s),null!==u?(r=C(),null!==r?(s=El,ql++,t=A(),ql--,null===t?t="":(t=null,El=s),null!==t?u=[u,r,t]:(u=null,El=e)):(u=null,El=e)):(u=null,El=e))),Sl[l]={nextPos:El,result:u},u}function g(){var l="stressed_fuhivla_rafsi@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e;return e=El,u=P(),null!==u?(r=J(),null!==r?(t=Q(),null!==t?u=[u,r,t]:(u=null,El=e)):(u=null,El=e)):(u=null,El=e),Sl[l]={nextPos:El,result:u},u}function y(){var l="fuhivla_rafsi@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a,o;return a=El,o=El,ql++,u=F(),ql--,null!==u?(u="",El=o):u=null,null!==u?(r=h(),null!==r?(t=J(),null!==t?(e=Q(),null!==e?(s=Al(),s=null!==s?s:"",null!==s?u=[u,r,t,e,s]:(u=null,El=a)):(u=null,El=a)):(u=null,El=a)):(u=null,El=a)):(u=null,El=a),Sl[l]={nextPos:El,result:u},u}function m(){var l="rafsi_string@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a,o,i;for(s=El,u=[],r=C();null!==r;)u.push(r),r=C();return null!==u?(r=w(),null===r&&(a=El,r=z(),null!==r?(t=b(),null!==t?r=[r,t]:(r=null,El=a)):(r=null,El=a),null===r&&(a=El,r=j(),null!==r?(o=El,ql++,t=S(),ql--,null===t?t="":(t=null,El=o),null!==t?(e=Al(),e=null!==e?e:"",null!==e?r=[r,t,e]:(r=null,El=a)):(r=null,El=a)):(r=null,El=a),null===r&&(a=El,r=j(),null!==r?(o=El,ql++,t=S(),ql--,null!==t?(t="",El=o):t=null,null!==t?r=[r,t]:(r=null,El=a)):(r=null,El=a),null===r&&(a=El,r=z(),r=null!==r?r:"",null!==r?(t=T(),null!==t?(e=Q(),null!==e?r=[r,t,e]:(r=null,El=a)):(r=null,El=a)):(r=null,El=a),null===r&&(a=El,r=q(),null!==r?(o=El,i=El,ql++,t=S(),ql--,null===t?t="":(t=null,El=i),null!==t?(e=Al(),e=null!==e?e:"",null!==e?t=[t,e]:(t=null,El=o)):(t=null,El=o),null===t&&(o=El,ql++,t=S(),ql--,null!==t?(t="",El=o):t=null),null!==t?r=[r,t]:(r=null,El=a)):(r=null,El=a)))))),null!==r?u=[u,r]:(u=null,El=s)):(u=null,El=s),Sl[l]={nextPos:El,result:u},u}function w(){var l="gismu_CVV_final_rafsi@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a,o,i,f;return u=c(),null===u&&(i=El,u=Y(),null!==u?(r=H(),null!==r?(f=El,ql++,t=S(),ql--,null!==t?(t="",El=f):t=null,null!==t?(e=Al(),null!==e?(f=El,ql++,s=V(),ql--,null!==s?(s="",El=f):s=null,null!==s?(a=H(),null!==a?(f=El,ql++,o=dl(),ql--,null!==o?(o="",El=f):o=null,null!==o?u=[u,r,t,e,s,a,o]:(u=null,El=i)):(u=null,El=i)):(u=null,El=i)):(u=null,El=i)):(u=null,El=i)):(u=null,El=i)):(u=null,El=i)),Sl[l]={nextPos:El,result:u},u}function b(){var l="short_final_rafsi@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s;return e=El,s=El,ql++,u=V(),ql--,null!==u?(u="",El=s):u=null,null!==u?(s=El,r=Y(),null!==r?(t=G(),null!==t?r=[r,t]:(r=null,El=s)):(r=null,El=s),null===r&&(s=El,r=T(),null!==r?(t=H(),null!==t?r=[r,t]:(r=null,El=s)):(r=null,El=s)),null!==r?(s=El,ql++,t=dl(),ql--,null!==t?(t="",El=s):t=null,null!==t?u=[u,r,t]:(u=null,El=e)):(u=null,El=e)):(u=null,El=e),Sl[l]={nextPos:El,result:u},u}function j(){var l="y_rafsi@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a;return e=El,s=El,u=E(),null!==u?(a=El,ql++,r=S(),ql--,null===r?r="":(r=null,El=a),null!==r?(t=Y(),null!==t?u=[u,r,t]:(u=null,El=s)):(u=null,El=s)):(u=null,El=s),null===u&&(u=k()),null!==u?(r=Q(),null!==r?u=[u,r]:(u=null,El=e)):(u=null,El=e),Sl[l]={nextPos:El,result:u},u}function k(){var l="short_rafsi@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a,o,i;return u=E(),null===u&&(a=El,u=Y(),null!==u?(o=El,r=H(),null!==r?(i=El,ql++,t=S(),ql--,null!==t?(t="",El=i):t=null,null!==t?(e=Al(),null!==e?(s=H(),null!==s?r=[r,t,e,s]:(r=null,El=o)):(r=null,El=o)):(r=null,El=o)):(r=null,El=o),null===r&&(r=G()),null!==r?(o=El,t=al(),null!==t?(i=El,ql++,e=Y(),ql--,null!==e?(e="",El=i):e=null,null!==e?t=[t,e]:(t=null,El=o)):(t=null,El=o),null===t&&(o=El,t=sl(),null!==t?(i=El,ql++,e=al(),ql--,null!==e?(e="",El=i):e=null,null!==e?t=[t,e]:(t=null,El=o)):(t=null,El=o)),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,El=a)):(u=null,El=a)):(u=null,El=a)),Sl[l]={nextPos:El,result:u},u}function z(){var l="stressed_y_less_rafsi@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s;return e=El,u=k(),null!==u?(s=El,ql++,r=S(),ql--,null!==r?(r="",El=s):r=null,null!==r?(s=El,ql++,t=Q(),ql--,null===t?t="":(t=null,El=s),null!==t?u=[u,r,t]:(u=null,El=e)):(u=null,El=e)):(u=null,El=e),Sl[l]={nextPos:El,result:u},u}function C(){var l="y_less_rafsi@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a;return s=El,a=El,ql++,u=j(),ql--,null===u?u="":(u=null,El=a),null!==u?(r=k(),null!==r?(a=El,ql++,t=S(),ql--,null===t?t="":(t=null,El=a),null!==t?(a=El,ql++,e=Al(),ql--,null===e?e="":(e=null,El=a),null!==e?u=[u,r,t,e]:(u=null,El=s)):(u=null,El=s)):(u=null,El=s)):(u=null,El=s),Sl[l]={nextPos:El,result:u},u}function E(){var l="CVC_CCV_rafsi@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e;return e=El,u=Y(),null!==u?(r=H(),null!==r?(t=Y(),null!==t?u=[u,r,t]:(u=null,El=e)):(u=null,El=e)):(u=null,El=e),null===u&&(e=El,u=T(),null!==u?(r=H(),null!==r?u=[u,r]:(u=null,El=e)):(u=null,El=e)),Sl[l]={nextPos:El,result:u},u}function q(){var l="hy_rafsi@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e;return e=El,u=c(),null===u&&(u=k()),null!==u?(r=Al(),null!==r?(t=Q(),null!==t?u=[u,r,t]:(u=null,El=e)):(u=null,El=e)):(u=null,El=e),Sl[l]={nextPos:El,result:u},u}function V(){var l="final_syl@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,o,i;return o=El,u=J(),null!==u?(i=El,ql++,r=Q(),ql--,null===r?r="":(r=null,El=i),null!==r?(t=N(),null!==t?(i=El,ql++,e=a(),ql--,null===e?e="":(e=null,El=i),null!==e?(i=El,ql++,s=dl(),ql--,null!==s?(s="",El=i):s=null,null!==s?u=[u,r,t,e,s]:(u=null,El=o)):(u=null,El=o)):(u=null,El=o)):(u=null,El=o)):(u=null,El=o),Sl[l]={nextPos:El,result:u},u}function F(){var l="unstressed_syl@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e;return t=El,u=M(),null!==u?(e=El,ql++,r=S(),ql--,null===r?r="":(r=null,El=e),null!==r?u=[u,r]:(u=null,El=t)):(u=null,El=t),null===u&&(u=B()),Sl[l]={nextPos:El,result:u},u}function S(){var l="stress@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a;for(a=El,u=[],r=Y(),null===r&&(r=D());null!==r;)u.push(r),r=Y(),null===r&&(r=D());return null!==u?(r=Al(),r=null!==r?r:"",null!==r?(t=Q(),t=null!==t?t:"",null!==t?(e=M(),null!==e?(s=gl(),null!==s?u=[u,r,t,e,s]:(u=null,El=a)):(u=null,El=a)):(u=null,El=a)):(u=null,El=a)):(u=null,El=a),Sl[l]={nextPos:El,result:u},u}function O(){var l="any_syl@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e;return e=El,u=J(),null!==u?(r=N(),null!==r?(t=I(),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,El=e)):(u=null,El=e)):(u=null,El=e),null===u&&(u=B()),Sl[l]={nextPos:El,result:u},u}function M(){var l="syl@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a;return s=El,u=J(),null!==u?(a=El,ql++,r=Q(),ql--,null===r?r="":(r=null,El=a),null!==r?(t=N(),null!==t?(e=I(),e=null!==e?e:"",null!==e?u=[u,r,t,e]:(u=null,El=s)):(u=null,El=s)):(u=null,El=s)):(u=null,El=s),Sl[l]={nextPos:El,result:u},u}function B(){var l="cns_syl@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s;return e=El,u=Y(),null!==u?(s=El,ql++,r=ll(),ql--,null!==r?(r="",El=s):r=null,null!==r?(t=I(),null!==t?u=[u,r,t]:(u=null,El=e)):(u=null,El=e)):(u=null,El=e),Sl[l]={nextPos:El,result:u},u}function I(){var l="coda@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s;return e=El,s=El,ql++,u=O(),ql--,null===u?u="":(u=null,El=s),null!==u?(r=Y(),null!==r?(s=El,ql++,t=O(),ql--,null!==t?(t="",El=s):t=null,null!==t?u=[u,r,t]:(u=null,El=e)):(u=null,El=e)):(u=null,El=e),null===u&&(e=El,u=ll(),u=null!==u?u:"",null!==u?(r=Y(),r=null!==r?r:"",null!==r?(s=El,ql++,t=gl(),ql--,null!==t?(t="",El=s):t=null,null!==t?u=[u,r,t]:(u=null,El=e)):(u=null,El=e)):(u=null,El=e)),Sl[l]={nextPos:El,result:u},u}function J(){var l="onset@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u;return u=Al(),null===u&&(u=D(),null===u&&(u=U())),Sl[l]={nextPos:El,result:u},u}function N(){var l="nucleus@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e;return u=H(),null===u&&(u=G(),null===u&&(t=El,u=Q(),null!==u?(e=El,ql++,r=N(),ql--,null===r?r="":(r=null,El=e),null!==r?u=[u,r]:(u=null,El=t)):(u=null,El=t))),Sl[l]={nextPos:El,result:u},u}function D(){var l="glide@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s;return e=El,u=K(),null===u&&(u=L()),null!==u?(s=El,ql++,r=N(),ql--,null!==r?(r="",El=s):r=null,null!==r?(s=El,ql++,t=D(),ql--,null===t?t="":(t=null,El=s),null!==t?u=[u,r,t]:(u=null,El=e)):(u=null,El=e)):(u=null,El=e),Sl[l]={nextPos:El,result:u},u}function G(){var l="diphthong@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s,a,o,i;return a=El,o=El,/^[a]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[a]")),null!==t?(e=L(),null!==e?(i=El,ql++,s=L(),ql--,null===s?s="":(s=null,El=i),null!==s?t=[t,e,s]:(t=null,El=o)):(t=null,El=o)):(t=null,El=o),null===t&&(o=El,/^[aeo]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[aeo]")),null!==t?(e=K(),null!==e?(i=El,ql++,s=K(),ql--,null===s?s="":(s=null,El=i),null!==s?t=[t,e,s]:(t=null,El=o)):(t=null,El=o)):(t=null,El=o)),null!==t?(o=El,ql++,e=N(),ql--,null===e?e="":(e=null,El=o),null!==e?t=[t,e]:(t=null,El=a)):(t=null,El=a),Sl[l]={nextPos:El,result:t},t}function H(){var l="vwl@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s,a;return s=El,/^[aeoiu]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[aeoiu]")),null===t&&(t=K(),null===t&&(t=L())),null!==t?(a=El,ql++,e=N(),ql--,null===e?e="":(e=null,El=a),null!==e?t=[t,e]:(t=null,El=s)):(t=null,El=s),Sl[l]={nextPos:El,result:t},t}function K(){var l="i@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t;return/^[i]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[i]")),Sl[l]={nextPos:El,result:t},t}function L(){var l="u@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t;return/^[u]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[u]")),Sl[l]={nextPos:El,result:t},t}function Q(){var l="y@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s,a,o,i,f;return a=El,/^[y]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[y]")),null!==t?(o=El,ql++,i=El,f=El,ql++,e=Q(),ql--,null===e?e="":(e=null,El=f),null!==e?(s=N(),null!==s?e=[e,s]:(e=null,El=i)):(e=null,El=i),ql--,null===e?e="":(e=null,El=o),null!==e?t=[t,e]:(t=null,El=a)):(t=null,El=a),Sl[l]={nextPos:El,result:t},t}function R(){var l="cluster@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s;if(e=El,ql++,s=El,u=Y(),null!==u){if(t=Y(),null!==t)for(r=[];null!==t;)r.push(t),t=Y();else r=null;null!==r?u=[u,r]:(u=null,El=s)}else u=null,El=s;return ql--,null===u?u="":(u=null,El=e),Sl[l]={nextPos:El,result:u},u}function T(){var l="init_pair@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a;return s=El,a=El,ql++,u=U(),ql--,null!==u?(u="",El=a):u=null,null!==u?(r=Y(),null!==r?(t=Y(),null!==t?(a=El,ql++,e=Y(),ql--,null===e?e="":(e=null,El=a),null!==e?u=[u,r,t,e]:(u=null,El=s)):(u=null,El=s)):(u=null,El=s)):(u=null,El=s),Sl[l]={nextPos:El,result:u},u}function U(){var l="init@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e,s,a,o;return e=El,u=W(),null===u&&(s=El,a=El,u=vl(),null!==u?(o=El,ql++,r=Pl(),ql--,null===r?r="":(r=null,El=o),null!==r?u=[u,r]:(u=null,El=a)):(u=null,El=a),null===u&&(a=El,u=fl(),null!==u?(o=El,ql++,r=sl(),ql--,null===r?r="":(r=null,El=o),null!==r?(o=El,ql++,t=X(),ql--,null===t?t="":(t=null,El=o),null!==t?u=[u,r,t]:(u=null,El=a)):(u=null,El=a)):(u=null,El=a)),u=null!==u?u:"",null!==u?(r=_l(),null===r&&(a=El,r=pl(),null===r&&(r=il()),null!==r?(o=El,ql++,t=tl(),ql--,null===t?t="":(t=null,El=o),null!==t?r=[r,t]:(r=null,El=a)):(r=null,El=a),null===r&&(r=xl(),null===r&&(r=hl(),null===r&&(r=Pl(),null===r&&(r=ol(),null===r&&(r=el(),null===r&&(a=El,r=sl(),null!==r?(o=El,ql++,t=X(),ql--,null===t?t="":(t=null,El=o),null!==t?r=[r,t]:(r=null,El=a)):(r=null,El=a)))))))),r=null!==r?r:"",null!==r?(t=X(),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,El=s)):(u=null,El=s)):(u=null,El=s)),null!==u?(s=El,ql++,r=Y(),ql--,null===r?r="":(r=null,El=s),null!==r?(s=El,ql++,t=D(),ql--,null===t?t="":(t=null,El=s),null!==t?u=[u,r,t]:(u=null,El=e)):(u=null,El=e)):(u=null,El=e),Sl[l]={nextPos:El,result:u},u}function W(){var l="affricate@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t;return t=El,u=pl(),null!==u?(r=xl(),null!==r?u=[u,r]:(u=null,El=t)):(u=null,El=t),null===u&&(t=El,u=pl(),null!==u?(r=vl(),null!==r?u=[u,r]:(u=null,El=t)):(u=null,El=t),null===u&&(t=El,u=il(),null!==u?(r=fl(),null!==r?u=[u,r]:(u=null,El=t)):(u=null,El=t))),Sl[l]={nextPos:El,result:u},u}function X(){var l="liquid@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u;return u=tl(),null===u&&(u=al()),Sl[l]={nextPos:El,result:u},u}function Y(){var l="cns@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u;return u=Z(),null===u&&(u=$(),null===u&&(u=ll())),Sl[l]={nextPos:El,result:u},u}function Z(){var l="voiced@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u;return u=ol(),null===u&&(u=il(),null===u&&(u=fl())),Sl[l]={nextPos:El,result:u},u}function $(){var l="unvoiced@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u;return u=xl(),null===u&&(u=_l(),null===u&&(u=hl(),null===u&&(u=vl(),null===u&&(u=pl(),null===u&&(u=Pl()))))),Sl[l]={nextPos:El,result:u},u}function ll(){var l="syllabic@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u;return u=X(),null===u&&(u=el(),null===u&&(u=sl())),Sl[l]={nextPos:El,result:u},u}function nl(){var l="qq@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e;return t=El,u=rl(),null!==u?(e=El,ql++,r=$(),ql--,null===r?r="":(r=null,El=e),null!==r?u=[u,r]:(u=null,El=t)):(u=null,El=t),Sl[l]={nextPos:El,result:u},u}function ul(){var l="qw@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e;return t=El,u=rl(),null!==u?(e=El,ql++,r=Z(),ql--,null===r?r="":(r=null,El=e),null!==r?u=[u,r]:(u=null,El=t)):(u=null,El=t),Sl[l]={nextPos:El,result:u},u}function rl(){var l="hg@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e;return t=El,e=El,ql++,u=Al(),ql--,null===u?u="":(u=null,El=e),null!==u?(e=El,ql++,r=D(),ql--,null===r?r="":(r=null,El=e),null!==r?u=[u,r]:(u=null,El=t)):(u=null,El=t),Sl[l]={nextPos:El,result:u},u}function tl(){var l="l@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s;return s=El,/^[l]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[l]")),null!==t?(e=rl(),null!==e?t=[t,e]:(t=null,El=s)):(t=null,El=s),Sl[l]={nextPos:El,result:t},t}function el(){var l="m@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s,a,o;return a=El,/^[m]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[m]")),null!==t?(e=rl(),null!==e?(o=El,ql++,s=cl(),ql--,null===s?s="":(s=null,El=o),null!==s?t=[t,e,s]:(t=null,El=a)):(t=null,El=a)):(t=null,El=a),Sl[l]={nextPos:El,result:t},t}function sl(){var l="n@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s,a,o;return a=El,/^[n]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[n]")),null!==t?(e=rl(),null!==e?(o=El,ql++,s=W(),ql--,null===s?s="":(s=null,El=o),null!==s?t=[t,e,s]:(t=null,El=a)):(t=null,El=a)):(t=null,El=a),Sl[l]={nextPos:El,result:t},t}function al(){var l="r@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s;return s=El,/^[r]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[r]")),null!==t?(e=rl(),null!==e?t=[t,e]:(t=null,El=s)):(t=null,El=s),Sl[l]={nextPos:El,result:t},t}function ol(){var l="bgv@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s;return s=El,/^[bgv]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[bgv]")),null!==t?(e=nl(),null!==e?t=[t,e]:(t=null,El=s)):(t=null,El=s),Sl[l]={nextPos:El,result:t},t}function il(){var l="d@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s;return s=El,/^[d]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[d]")),null!==t?(e=nl(),null!==e?t=[t,e]:(t=null,El=s)):(t=null,El=s),Sl[l]={nextPos:El,result:t},t}function fl(){var l="jz@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s,a,o;return a=El,/^[jz]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[jz]")),null!==t?(o=El,ql++,e=fl(),ql--,null===e?e="":(e=null,El=o),null!==e?(s=nl(),null!==s?t=[t,e,s]:(t=null,El=a)):(t=null,El=a)):(t=null,El=a),Sl[l]={nextPos:El,result:t},t}function cl(){var l="z@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s,a,o;return a=El,/^[z]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[z]")),null!==t?(o=El,ql++,e=fl(),ql--,null===e?e="":(e=null,El=o),null!==e?(s=nl(),null!==s?t=[t,e,s]:(t=null,El=a)):(t=null,El=a)):(t=null,El=a),Sl[l]={nextPos:El,result:t},t}function vl(){var l="s@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s,a,o;return a=El,/^[s]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[s]")),null!==t?(o=El,ql++,e=xl(),ql--,null===e?e="":(e=null,El=o),null!==e?(s=ul(),null!==s?t=[t,e,s]:(t=null,El=a)):(t=null,El=a)):(t=null,El=a),Sl[l]={nextPos:El,result:t},t}function xl(){var l="c@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s,a,o,i;return o=El,/^[c]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[c]")),null!==t?(i=El,ql++,e=vl(),ql--,null===e?e="":(e=null,El=i),null!==e?(i=El,ql++,s=Pl(),ql--,null===s?s="":(s=null,El=i),null!==s?(a=ul(),null!==a?t=[t,e,s,a]:(t=null,El=o)):(t=null,El=o)):(t=null,El=o)):(t=null,El=o),Sl[l]={nextPos:El,result:t},t}function Pl(){var l="x@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s,a,o,i;return o=El,/^[x]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[x]")),null!==t?(i=El,ql++,e=xl(),ql--,null===e?e="":(e=null,El=i),null!==e?(i=El,ql++,s=hl(),ql--,null===s?s="":(s=null,El=i),null!==s?(a=ul(),null!==a?t=[t,e,s,a]:(t=null,El=o)):(t=null,El=o)):(t=null,El=o)):(t=null,El=o),Sl[l]={nextPos:El,result:t},t}function hl(){var l="k@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s,a,o;return a=El,/^[k]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[k]")),null!==t?(o=El,ql++,e=Pl(),ql--,null===e?e="":(e=null,El=o),null!==e?(s=ul(),null!==s?t=[t,e,s]:(t=null,El=a)):(t=null,El=a)):(t=null,El=a),Sl[l]={nextPos:El,result:t},t}function _l(){var l="pf@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s;return s=El,/^[pf]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[pf]")),null!==t?(e=ul(),null!==e?t=[t,e]:(t=null,El=s)):(t=null,El=s),Sl[l]={nextPos:El,result:t},t}function pl(){var l="t@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s;return s=El,/^[t]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[t]")),null!==t?(e=ul(),null!==e?t=[t,e]:(t=null,El=s)):(t=null,El=s),Sl[l]={nextPos:El,result:t},t}function Al(){var l="h@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e,s,a;return s=El,/^['h]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("['h]")),null!==t?(a=El,ql++,e=N(),ql--,null!==e?(e="",El=a):e=null,null!==e?t=[t,e]:(t=null,El=s)):(t=null,El=s),Sl[l]={nextPos:El,result:t},t}function dl(){var l="post_word@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t,e;return u=gl(),null===u&&(t=El,e=El,ql++,u=N(),ql--,null===u?u="":(u=null,El=e),null!==u?(r=s(),null!==r?u=[u,r]:(u=null,El=t)):(u=null,El=t)),Sl[l]={nextPos:El,result:u},u}function gl(){var l="pause@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r;if(r=yl(),null!==r)for(u=[];null!==r;)u.push(r),r=yl();else u=null;return null===u&&(u=wl()),Sl[l]={nextPos:El,result:u},u}function yl(){var l="space_char@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t;return/^[.\t\n\r?! ]/.test(n.charAt(El))?(t=n.charAt(El),El++):(t=null,0===ql&&r("[.\\t\\n\\r?! ]")),Sl[l]={nextPos:El,result:t},t}function ml(){var l="spaces@"+El,n=Sl[l];if(n)return El=n.nextPos,n.result;var u,r,t;if(t=El,r=yl(),null===r&&(r=Q()),null!==r)for(u=[];null!==r;)u.push(r),r=yl(),null===r&&(r=Q());else u=null;return null!==u?(r=wl(),r=null!==r?r:"",null!==r?u=[u,r]:(u=null,El=t)):(u=null,El=t),null===u&&(u=wl()),Sl[l]={nextPos:El,result:u},u}function wl(){var l="EOF@"+El,u=Sl[l];if(u)return El=u.nextPos,u.result;var t,e;return e=El,ql++,n.length>El?(t=n.charAt(El),El++):(t=null,0===ql&&r("any character")),ql--,null===t?t="":(t=null,El=e),Sl[l]={nextPos:El,result:t},t}function bl(l){l.sort();for(var n=null,u=[],r=0;r<l.length;r++)l[r]!==n&&(u.push(l[r]),n=l[r]);return u}function jl(){for(var l=1,u=1,r=!1,t=0;t<Math.max(El,Vl);t++){var e=n.charAt(t);"\n"===e?(r||l++,u=1,r=!1):"\r"===e||"\u2028"===e||"\u2029"===e?(l++,u=1,r=!0):(u++,r=!1)}return{line:l,column:u}}function kl(l){if("string"==typeof l)return l;var n="";for(var u in l)n+=kl(l[u]);return n}function zl(l){if("string"==typeof l)return l;var n=[];for(var u in l)n.push(zl(l[u]));return n}var Cl={text:t,any_word:e,lojban_word:s,cmevla:a,zifcme:o,cmavo:i,gismu:f,gismu_like:c,fuhivla:v,fuhivla_like:x,fuhivla_head_ext:P,fuhivla_head:h,lujvo:_,brivla_core:p,any_fuhivla_rafsi:A,init_rafsi:d,stressed_fuhivla_rafsi:g,fuhivla_rafsi:y,rafsi_string:m,gismu_CVV_final_rafsi:w,short_final_rafsi:b,y_rafsi:j,short_rafsi:k,stressed_y_less_rafsi:z,y_less_rafsi:C,CVC_CCV_rafsi:E,hy_rafsi:q,final_syl:V,unstressed_syl:F,stress:S,any_syl:O,syl:M,cns_syl:B,coda:I,onset:J,nucleus:N,glide:D,diphthong:G,vwl:H,i:K,u:L,y:Q,cluster:R,init_pair:T,init:U,affricate:W,liquid:X,cns:Y,voiced:Z,unvoiced:$,syllabic:ll,qq:nl,qw:ul,hg:rl,l:tl,m:el,n:sl,r:al,bgv:ol,d:il,jz:fl,z:cl,s:vl,c:xl,x:Pl,k:hl,pf:_l,t:pl,h:Al,post_word:dl,pause:gl,space_char:yl,spaces:ml,EOF:wl};if(void 0!==u){if(void 0===Cl[u])throw new Error("Invalid rule name: "+l(u)+".")}else u="text";var El=0,ql=0,Vl=0,Fl=[],Sl={},Ol=Cl[u]();if(null===Ol||El!==n.length){var Ml=Math.max(El,Vl),Bl=Ml<n.length?n.charAt(Ml):null,Il=jl();throw new this.SyntaxError(bl(Fl),Bl,Ml,Il.line,Il.column)}return Ol},toSource:function(){return this._source}};return n.SyntaxError=function(n,u,r,t,e){function s(n,u){var r,t;switch(n.length){case 0:r="end of input";break;case 1:r=n[0];break;default:r=n.slice(0,n.length-1).join(", ")+" or "+n[n.length-1]}return t=u?l(u):"end of input","Expected "+r+" but "+t+" found."}this.name="SyntaxError",this.expected=n,this.found=u,this.message=s(n,u),this.offset=r,this.line=t,this.column=e},n.SyntaxError.prototype=Error.prototype,n}();module.exports=camxes,term=process.argv[2],void 0!==term&&"string"==typeof term.valueOf()&&console.log(JSON.stringify(camxes.parse(term)));