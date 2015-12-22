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
	//updategloss();# not yet ready function
};

//store en dump in memory
var enxml = path.join(__dirname,"dumps","en" + ".xml");
if(!fs.existsSync(enxml)){enxml = path.join(__dirname,"dumps","toki" + ".xml");}
var xmlDocEn = libxmljs.parseXml(fs.readFileSync(enxml,{encoding: 'utf8'}).replace(/(&lt;|<)script.*?(&gt;|>).*?(&lt;|<)/g,"&lt;").replace(/(&lt;|<)\/script(&gt;|>)/g,""));

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
	if (~text.indexOf("doi " + asker) && from!==replier) {
      		setTimeout(function() {client.say(sendTo, tato.tatoebaprocessing(from));}, interm );
	}
	setInterval(function() {if (Date.now()-said>interv){said=Date.now();client.say(livlytcan, prereplier + vric());}}, interv);
  //}
  var sendTo = from; // send privately
  if (~to.indexOf('#')) {
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
  if (~to.indexOf('#')) {
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
		var l=notci.length;
		while (l--){
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
 var jbopotext = "";
 for (var i=0;i<lin.length;i++) {
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

function lojTemplate(s) {
	s = s.replace(/\$.*?\$/g, function(c) {
		c = c.substring(1, c.length-1);
		return c.replace(/(\w+)_\{(\d+)\}/g, "$1$2").replace(/(\w+)_(.+)/g, "$1$2").replace(/\{/g,'[').replace(/\}/g,']');
	});
	s = s.replace(/\[([^\[\]]*?)\]/g,"{$1}");
	s = s.replace(/\{(.*?)\}/g, function(c) {
		return c.substring(1, c.length-1);
	});
	return s;
}

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
	gchild=lojTemplate(gchild).replace(/`/g,"'");
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
	var stra=[];var te;
	for (var i=0;i<ali.length;i++)
	{
		//te = xmlDocEn.get("/dictionary/direction[1]/valsi[translate(@word,\""+ali[i].attr("word").value()+"\",\""+ali[i].attr("word").value()+"\")=\""+ali[i].attr("word").value()+"\"]/selmaho[1]").text();
		//console.log(te);
		//if (te.search("^"+lin.toUpperCase()+"h")===-1){
			stra.push(ali[i].attr("word").value());
		//}
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

var cmaxes=function(){function l(l){return'"'+l.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"'}var n={parse:function(n,u){function r(l){jl>Vl||(Vl>jl&&(jl=Vl,El=[]),El.push(l))}function t(){var l="text@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,s,a;if(s=Vl,a=Vl,u=pl(),u=null!==u?u:"",null!==u){for(r=[],t=e();null!==t;)r.push(t),t=e();null!==r?u=[u,r]:(u=null,Vl=a)}else u=null,Vl=a;return null!==u&&(u=function(l,n){return Cl(n)}(s,u[1])),null===u&&(Vl=s),zl[l]={nextPos:Vl,result:u},u}function e(){var l="any_word@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e;return t=Vl,e=Vl,u=s(),null!==u?(r=pl(),r=null!==r?r:"",null!==r?u=[u,r]:(u=null,Vl=e)):(u=null,Vl=e),null!==u&&(u=function(l,n){return n}(t,u[0])),null===u&&(Vl=t),zl[l]={nextPos:Vl,result:u},u}function s(){var l="lojban_word@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r;return u=o(),null===u&&(r=Vl,u=c(),null!==u&&(u=function(l,n){return["cmavo",ml(n)]}(r,u)),null===u&&(Vl=r),null===u&&(r=Vl,u=i(),null!==u&&(u=function(l,n){return["gismu",ml(n)]}(r,u)),null===u&&(Vl=r),null===u&&(u=a(),null===u&&(r=Vl,u=f(),null!==u&&(u=function(l,n){return["fu'ivla",ml(n)]}(r,u)),null===u&&(Vl=r))))),zl[l]={nextPos:Vl,result:u},u}function a(){var l="lujvo@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,o,x,P,h,_;return x=Vl,P=Vl,h=Vl,wl++,u=i(),wl--,null===u?u="":(u=null,Vl=h),null!==u?(h=Vl,wl++,r=f(),wl--,null===r?r="":(r=null,Vl=h),null!==r?(h=Vl,wl++,t=c(),wl--,null===t?t="":(t=null,Vl=h),null!==t?(h=Vl,wl++,_=Vl,e=w(),null!==e?(s=hl(),null!==s?(a=R(),null!==a?(o=q(),null!==o?e=[e,s,a,o]:(e=null,Vl=_)):(e=null,Vl=_)):(e=null,Vl=_)):(e=null,Vl=_),wl--,null===e?e="":(e=null,Vl=h),null!==e?(s=v(),null!==s?u=[u,r,t,e,s]:(u=null,Vl=P)):(u=null,Vl=P)):(u=null,Vl=P)):(u=null,Vl=P)):(u=null,Vl=P),null!==u&&(u=function(l,n){return["lujvo",ml(n)]}(x,u)),null===u&&(Vl=x),zl[l]={nextPos:Vl,result:u},u}function o(){var l="cmevla@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a;if(e=Vl,s=Vl,a=Vl,wl++,u=_(),wl--,null!==u?(u="",Vl=a):u=null,null!==u){for(r=[],t=B();null!==t;)r.push(t),t=B();null!==r?(a=Vl,wl++,t=pl(),wl--,null!==t?(t="",Vl=a):t=null,null!==t?u=[u,r,t]:(u=null,Vl=s)):(u=null,Vl=s)}else u=null,Vl=s;return null===u&&(u=_()),null!==u&&(u=function(l,n){return["cmevla",ml(n)]}(e,u)),null===u&&(Vl=e),zl[l]={nextPos:Vl,result:u},u}function i(){var l="gismu@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,o;return a=Vl,u=k(),null!==u?(o=Vl,wl++,r=M(),wl--,null!==r?(r="",Vl=o):r=null,null!==r?(o=Vl,wl++,t=O(),wl--,null!==t?(t="",Vl=o):t=null,null!==t?(e=K(),null!==e?(o=Vl,wl++,s=_l(),wl--,null!==s?(s="",Vl=o):s=null,null!==s?u=[u,r,t,e,s]:(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a),zl[l]={nextPos:Vl,result:u},u}function f(){var l="fuhivla@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,o;if(a=Vl,u=h(),null!==u)if(r=I(),null!==r)if(o=Vl,wl++,t=M(),wl--,null!==t?(t="",Vl=o):t=null,null!==t){for(e=[],s=J();null!==s;)e.push(s),s=J();null!==e?(s=O(),null!==s?u=[u,r,t,e,s]:(u=null,Vl=a)):(u=null,Vl=a)}else u=null,Vl=a;else u=null,Vl=a;else u=null,Vl=a;return zl[l]={nextPos:Vl,result:u},u}function c(){var l="cmavo@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,i,f,c,x,P,h;if(c=Vl,x=Vl,wl++,u=o(),wl--,null===u?u="":(u=null,Vl=x),null!==u)if(x=Vl,wl++,P=Vl,r=b(),null!==r?(h=Vl,wl++,t=M(),wl--,null===t?t="":(t=null,Vl=h),null!==t?(e=R(),null!==e?(s=hl(),s=null!==s?s:"",null!==s?(a=v(),null!==a?r=[r,t,e,s,a]:(r=null,Vl=P)):(r=null,Vl=P)):(r=null,Vl=P)):(r=null,Vl=P)):(r=null,Vl=P),null===r&&(P=Vl,r=b(),null!==r?(h=Vl,wl++,t=M(),wl--,null!==t?(t="",Vl=h):t=null,null!==t?(e=R(),null!==e?(s=z(),null!==s?r=[r,t,e,s]:(r=null,Vl=P)):(r=null,Vl=P)):(r=null,Vl=P)):(r=null,Vl=P)),wl--,null===r?r="":(r=null,Vl=x),null!==r){if(x=Vl,P=Vl,wl++,t=hl(),wl--,null===t?t="":(t=null,Vl=P),null!==t){if(P=Vl,wl++,h=Vl,e=X(),null!==e){if(a=X(),null!==a)for(s=[];null!==a;)s.push(a),a=X();else s=null;null!==s?e=[e,s]:(e=null,Vl=h)}else e=null,Vl=h;if(wl--,null===e?e="":(e=null,Vl=P),null!==e)if(s=q(),null!==s){for(a=[],P=Vl,i=D(),null!==i?(f=hl(),null!==f?i=[i,f]:(i=null,Vl=P)):(i=null,Vl=P);null!==i;)a.push(i),P=Vl,i=D(),null!==i?(f=hl(),null!==f?i=[i,f]:(i=null,Vl=P)):(i=null,Vl=P);null!==a?(i=D(),null!==i?t=[t,e,s,a,i]:(t=null,Vl=x)):(t=null,Vl=x)}else t=null,Vl=x;else t=null,Vl=x}else t=null,Vl=x;if(null===t)if(e=R(),null!==e)for(t=[];null!==e;)t.push(e),e=R();else t=null;null!==t?(x=Vl,wl++,e=_l(),wl--,null!==e?(e="",Vl=x):e=null,null!==e?u=[u,r,t,e]:(u=null,Vl=c)):(u=null,Vl=c)}else u=null,Vl=c;else u=null,Vl=c;return zl[l]={nextPos:Vl,result:u},u}function v(){var l="brivla_core@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,o,c;for(s=Vl,u=[],r=C(),null===r&&(r=A(),null===r&&(r=y(),null===r&&(a=Vl,o=Vl,wl++,r=x(),wl--,null===r?r="":(r=null,Vl=o),null!==r?(t=d(),null!==t?(o=Vl,wl++,e=x(),wl--,null===e?e="":(e=null,Vl=o),null!==e?r=[r,t,e]:(r=null,Vl=a)):(r=null,Vl=a)):(r=null,Vl=a))));null!==r;)u.push(r),r=C(),null===r&&(r=A(),null===r&&(r=y(),null===r&&(a=Vl,o=Vl,wl++,r=x(),wl--,null===r?r="":(r=null,Vl=o),null!==r?(t=d(),null!==t?(o=Vl,wl++,e=x(),wl--,null===e?e="":(e=null,Vl=o),null!==e?r=[r,t,e]:(r=null,Vl=a)):(r=null,Vl=a)):(r=null,Vl=a))));return null!==u?(r=f(),null===r&&(r=i(),null===r&&(r=E(),null===r&&(a=Vl,r=m(),null===r&&(r=p(),null===r&&(r=g(),null===r&&(o=Vl,r=j(),null!==r?(c=Vl,wl++,t=M(),wl--,null!==t?(t="",Vl=c):t=null,null!==t?r=[r,t]:(r=null,Vl=o)):(r=null,Vl=o)))),null!==r?(t=z(),null!==t?r=[r,t]:(r=null,Vl=a)):(r=null,Vl=a)))),null!==r?u=[u,r]:(u=null,Vl=s)):(u=null,Vl=s),zl[l]={nextPos:Vl,result:u},u}function x(){var l="any_fuhivla_rafsi@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u;return u=f(),null===u&&(u=A(),null===u&&(u=p())),zl[l]={nextPos:Vl,result:u},u}function P(){var l="rafsi_string@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,o,f,c;for(a=Vl,u=[],r=d();null!==r;)u.push(r),r=d();return null!==u?(r=i(),null===r&&(r=E(),null===r&&(o=Vl,r=j(),null!==r?(f=Vl,wl++,t=M(),wl--,null!==t?(t="",Vl=f):t=null,null!==t?(f=Vl,wl++,e=R(),wl--,null===e?e="":(e=null,Vl=f),null!==e?(s=z(),null!==s?r=[r,t,e,s]:(r=null,Vl=o)):(r=null,Vl=o)):(r=null,Vl=o)):(r=null,Vl=o),null===r&&(r=y(),null===r&&(r=g(),null===r&&(o=Vl,f=Vl,r=j(),null!==r?(c=Vl,wl++,t=M(),wl--,null!==t?(t="",Vl=c):t=null,null!==t?(c=Vl,wl++,e=R(),wl--,null===e?e="":(e=null,Vl=c),null!==e?r=[r,t,e]:(r=null,Vl=f)):(r=null,Vl=f)):(r=null,Vl=f),r=null!==r?r:"",null!==r?(t=T(),null!==t?(e=R(),null!==e?r=[r,t,e]:(r=null,Vl=o)):(r=null,Vl=o)):(r=null,Vl=o),null===r&&(r=C(),null===r&&(r=m()))))))),null!==r?u=[u,r]:(u=null,Vl=a)):(u=null,Vl=a),zl[l]={nextPos:Vl,result:u},u}function h(){var l="fuhivla_head@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,o,i,f,v,x;if(i=Vl,f=Vl,wl++,u=P(),wl--,null===u?u="":(u=null,Vl=f),null!==u)if(f=Vl,wl++,r=c(),wl--,null===r?r="":(r=null,Vl=f),null!==r)if(f=Vl,wl++,v=Vl,x=Vl,wl++,t=P(),wl--,null===t?t="":(t=null,Vl=x),null!==t?(e=X(),null!==e?(s=P(),null!==s?t=[t,e,s]:(t=null,Vl=v)):(t=null,Vl=v)):(t=null,Vl=v),wl--,null===t?t="":(t=null,Vl=f),null!==t)if(f=Vl,wl++,e=hl(),wl--,null===e?e="":(e=null,Vl=f),null!==e)if(f=Vl,wl++,s=q(),wl--,null!==s?(s="",Vl=f):s=null,null!==s){for(a=[],o=F();null!==o;)a.push(o),o=F();null!==a?u=[u,r,t,e,s,a]:(u=null,Vl=i)}else u=null,Vl=i;else u=null,Vl=i;else u=null,Vl=i;else u=null,Vl=i;else u=null,Vl=i;return zl[l]={nextPos:Vl,result:u},u}function _(){var l="zifcme@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,o;if(s=Vl,a=Vl,wl++,u=hl(),wl--,null===u?u="":(u=null,Vl=a),null!==u){for(r=[],t=D(),null===t&&(t=G(),null===t&&(t=hl(),null===t&&(a=Vl,t=X(),null!==t?(o=Vl,wl++,e=pl(),wl--,null===e?e="":(e=null,Vl=o),null!==e?t=[t,e]:(t=null,Vl=a)):(t=null,Vl=a))));null!==t;)r.push(t),t=D(),null===t&&(t=G(),null===t&&(t=hl(),null===t&&(a=Vl,t=X(),null!==t?(o=Vl,wl++,e=pl(),wl--,null===e?e="":(e=null,Vl=o),null!==e?t=[t,e]:(t=null,Vl=a)):(t=null,Vl=a))));null!==r?(t=X(),null!==t?(a=Vl,wl++,e=pl(),wl--,null!==e?(e="",Vl=a):e=null,null!==e?u=[u,r,t,e]:(u=null,Vl=s)):(u=null,Vl=s)):(u=null,Vl=s)}else u=null,Vl=s;return zl[l]={nextPos:Vl,result:u},u}function p(){var l="stressed_fuhivla_rafsi@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;if(o=Vl,u=h(),null!==u)if(r=I(),null!==r)if(i=Vl,wl++,t=M(),wl--,null!==t?(t="",Vl=i):t=null,null!==t){for(e=[],s=J();null!==s;)e.push(s),s=J();null!==e?(s=q(),null!==s?(a=R(),null!==a?u=[u,r,t,e,s,a]:(u=null,Vl=o)):(u=null,Vl=o)):(u=null,Vl=o)}else u=null,Vl=o;else u=null,Vl=o;else u=null,Vl=o;return zl[l]={nextPos:Vl,result:u},u}function A(){var l="fuhivla_rafsi@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,o;return a=Vl,o=Vl,wl++,u=F(),wl--,null!==u?(u="",Vl=o):u=null,null!==u?(r=h(),null!==r?(t=q(),null!==t?(e=R(),null!==e?(s=hl(),s=null!==s?s:"",null!==s?u=[u,r,t,e,s]:(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a),zl[l]={nextPos:Vl,result:u},u}function g(){var l="stressed_y_rafsi@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s;return e=Vl,u=k(),null===u&&(u=b()),null!==u?(s=Vl,wl++,r=M(),wl--,null!==r?(r="",Vl=s):r=null,null!==r?(t=R(),null!==t?u=[u,r,t]:(u=null,Vl=e)):(u=null,Vl=e)):(u=null,Vl=e),zl[l]={nextPos:Vl,result:u},u}function y(){var l="y_rafsi@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Vl,u=k(),null===u&&(u=b()),null!==u?(a=Vl,wl++,r=M(),wl--,null===r?r="":(r=null,Vl=a),null!==r?(t=R(),null!==t?(e=hl(),e=null!==e?e:"",null!==e?u=[u,r,t,e]:(u=null,Vl=s)):(u=null,Vl=s)):(u=null,Vl=s)):(u=null,Vl=s),zl[l]={nextPos:Vl,result:u},u}function d(){var l="y_less_rafsi@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,o,i,f,c;return f=Vl,c=Vl,wl++,u=y(),wl--,null===u?u="":(u=null,Vl=c),null!==u?(c=Vl,wl++,r=g(),wl--,null===r?r="":(r=null,Vl=c),null!==r?(c=Vl,wl++,t=C(),wl--,null===t?t="":(t=null,Vl=c),null!==t?(c=Vl,wl++,e=m(),wl--,null===e?e="":(e=null,Vl=c),null!==e?(s=j(),null!==s?(c=Vl,wl++,a=M(),wl--,null===a?a="":(a=null,Vl=c),null!==a?(c=Vl,wl++,o=R(),wl--,null===o?o="":(o=null,Vl=c),null!==o?(c=Vl,wl++,i=hl(),wl--,null===i?i="":(i=null,Vl=c),null!==i?u=[u,r,t,e,s,a,o,i]:(u=null,Vl=f)):(u=null,Vl=f)):(u=null,Vl=f)):(u=null,Vl=f)):(u=null,Vl=f)):(u=null,Vl=f)):(u=null,Vl=f)):(u=null,Vl=f),zl[l]={nextPos:Vl,result:u},u}function m(){var l="stressed_hy_rafsi@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Vl,a=Vl,u=k(),null!==u?(r=K(),null!==r?u=[u,r]:(u=null,Vl=a)):(u=null,Vl=a),null===u&&(u=j()),null!==u?(a=Vl,wl++,r=M(),wl--,null!==r?(r="",Vl=a):r=null,null!==r?(t=hl(),null!==t?(e=R(),null!==e?u=[u,r,t,e]:(u=null,Vl=s)):(u=null,Vl=s)):(u=null,Vl=s)):(u=null,Vl=s),zl[l]={nextPos:Vl,result:u},u}function C(){var l="hy_rafsi@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,o;return a=Vl,o=Vl,u=k(),null!==u?(r=K(),null!==r?u=[u,r]:(u=null,Vl=o)):(u=null,Vl=o),null===u&&(u=j()),null!==u?(o=Vl,wl++,r=M(),wl--,null===r?r="":(r=null,Vl=o),null!==r?(t=hl(),null!==t?(e=R(),null!==e?(s=hl(),s=null!==s?s:"",null!==s?u=[u,r,t,e,s]:(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a),zl[l]={nextPos:Vl,result:u},u}function b(){var l="CVC@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t;return t=Vl,u=S(),null!==u?(r=X(),null!==r?u=[u,r]:(u=null,Vl=t)):(u=null,Vl=t),zl[l]={nextPos:Vl,result:u},u}function V(){var l="CVC_CCV@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u;return u=b(),null===u&&(u=w()),zl[l]={nextPos:Vl,result:u},u}function w(){var l="ini_vwl@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t;return t=Vl,u=T(),null!==u?(r=K(),null!==r?u=[u,r]:(u=null,Vl=t)):(u=null,Vl=t),zl[l]={nextPos:Vl,result:u},u}function j(){var l="CVC_CCV_CVV@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;return u=V(),null===u&&(a=Vl,u=X(),null!==u?(o=Vl,r=K(),null!==r?(i=Vl,wl++,t=M(),wl--,null===t?t="":(t=null,Vl=i),null!==t?(e=hl(),null!==e?(s=K(),null!==s?r=[r,t,e,s]:(r=null,Vl=o)):(r=null,Vl=o)):(r=null,Vl=o)):(r=null,Vl=o),null===r&&(r=H()),null!==r?(o=Vl,t=sl(),null!==t?(i=Vl,wl++,e=X(),wl--,null!==e?(e="",Vl=i):e=null,null!==e?t=[t,e]:(t=null,Vl=o)):(t=null,Vl=o),null===t&&(o=Vl,t=el(),null!==t?(i=Vl,wl++,e=sl(),wl--,null!==e?(e="",Vl=i):e=null,null!==e?t=[t,e]:(t=null,Vl=o)):(t=null,Vl=o)),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a)),zl[l]={nextPos:Vl,result:u},u}function E(){var l="CVV_final_rafsi@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;return o=Vl,u=S(),null!==u?(i=Vl,wl++,r=M(),wl--,null!==r?(r="",Vl=i):r=null,null!==r?(t=hl(),null!==t?(i=Vl,wl++,e=O(),wl--,null!==e?(e="",Vl=i):e=null,null!==e?(s=K(),null!==s?(i=Vl,wl++,a=_l(),wl--,null!==a?(a="",Vl=i):a=null,null!==a?u=[u,r,t,e,s,a]:(u=null,Vl=o)):(u=null,Vl=o)):(u=null,Vl=o)):(u=null,Vl=o)):(u=null,Vl=o)):(u=null,Vl=o),zl[l]={nextPos:Vl,result:u},u}function z(){var l="short_final_rafsi@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s;return e=Vl,s=Vl,wl++,u=O(),wl--,null!==u?(u="",Vl=s):u=null,null!==u?(s=Vl,r=X(),null!==r?(t=H(),null!==t?r=[r,t]:(r=null,Vl=s)):(r=null,Vl=s),null===r&&(r=w()),null!==r?(s=Vl,wl++,t=_l(),wl--,null!==t?(t="",Vl=s):t=null,null!==t?u=[u,r,t]:(u=null,Vl=e)):(u=null,Vl=e)):(u=null,Vl=e),zl[l]={nextPos:Vl,result:u},u}function F(){var l="unstressed_syllable@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e;return t=Vl,u=I(),null!==u?(e=Vl,wl++,r=M(),wl--,null===r?r="":(r=null,Vl=e),null!==r?u=[u,r]:(u=null,Vl=t)):(u=null,Vl=t),null===u&&(u=J()),zl[l]={nextPos:Vl,result:u},u}function k(){var l="long_rafsi@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t;return t=Vl,u=V(),null!==u?(r=X(),null!==r?u=[u,r]:(u=null,Vl=t)):(u=null,Vl=t),zl[l]={nextPos:Vl,result:u},u}function S(){var l="CV@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t;return t=Vl,u=X(),null!==u?(r=K(),null!==r?u=[u,r]:(u=null,Vl=t)):(u=null,Vl=t),zl[l]={nextPos:Vl,result:u},u}function O(){var l="final_syllable@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,i;return a=Vl,u=q(),null!==u?(i=Vl,wl++,r=R(),wl--,null===r?r="":(r=null,Vl=i),null!==r?(t=D(),null!==t?(i=Vl,wl++,e=o(),wl--,null===e?e="":(e=null,Vl=i),null!==e?(i=Vl,wl++,s=_l(),wl--,null!==s?(s="",Vl=i):s=null,null!==s?u=[u,r,t,e,s]:(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a),zl[l]={nextPos:Vl,result:u},u}function M(){var l="stress@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a;for(a=Vl,u=[],r=X(),null===r&&(r=G());null!==r;)u.push(r),r=X(),null===r&&(r=G());return null!==u?(r=hl(),r=null!==r?r:"",null!==r?(t=R(),t=null!==t?t:"",null!==t?(e=I(),null!==e?(s=pl(),null!==s?u=[u,r,t,e,s]:(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a)):(u=null,Vl=a),zl[l]={nextPos:Vl,result:u},u}function B(){var l="any_syllable@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e;return e=Vl,u=q(),null!==u?(r=D(),null!==r?(t=N(),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,Vl=e)):(u=null,Vl=e)):(u=null,Vl=e),null===u&&(u=J()),zl[l]={nextPos:Vl,result:u},u}function I(){var l="syllable@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Vl,u=q(),null!==u?(a=Vl,wl++,r=R(),wl--,null===r?r="":(r=null,Vl=a),null!==r?(t=D(),null!==t?(e=N(),e=null!==e?e:"",null!==e?u=[u,r,t,e]:(u=null,Vl=s)):(u=null,Vl=s)):(u=null,Vl=s)):(u=null,Vl=s),zl[l]={nextPos:Vl,result:u},u}function J(){var l="consonantal_syllable@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s;return e=Vl,u=X(),null!==u?(s=Vl,wl++,r=Y(),wl--,null!==r?(r="",Vl=s):r=null,null!==r?(t=N(),null!==t?u=[u,r,t]:(u=null,Vl=e)):(u=null,Vl=e)):(u=null,Vl=e),zl[l]={nextPos:Vl,result:u},u}function N(){var l="coda@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s;return e=Vl,s=Vl,wl++,u=B(),wl--,null===u?u="":(u=null,Vl=s),null!==u?(r=X(),null!==r?(s=Vl,wl++,t=B(),wl--,null!==t?(t="",Vl=s):t=null,null!==t?u=[u,r,t]:(u=null,Vl=e)):(u=null,Vl=e)):(u=null,Vl=e),null===u&&(e=Vl,u=Y(),u=null!==u?u:"",null!==u?(r=X(),r=null!==r?r:"",null!==r?(s=Vl,wl++,t=pl(),wl--,null!==t?(t="",Vl=s):t=null,null!==t?u=[u,r,t]:(u=null,Vl=e)):(u=null,Vl=e)):(u=null,Vl=e)),zl[l]={nextPos:Vl,result:u},u}function q(){var l="onset@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u;return u=hl(),null===u&&(u=G(),null===u&&(u=U())),zl[l]={nextPos:Vl,result:u},u}function D(){var l="nucleus@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e;return u=K(),null===u&&(u=H(),null===u&&(t=Vl,u=R(),null!==u?(e=Vl,wl++,r=D(),wl--,null===r?r="":(r=null,Vl=e),null!==r?u=[u,r]:(u=null,Vl=t)):(u=null,Vl=t))),zl[l]={nextPos:Vl,result:u},u}function G(){var l="glide@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s;return e=Vl,u=L(),null===u&&(u=Q()),null!==u?(s=Vl,wl++,r=D(),wl--,null!==r?(r="",Vl=s):r=null,null!==r?(s=Vl,wl++,t=G(),wl--,null===t?t="":(t=null,Vl=s),null!==t?u=[u,r,t]:(u=null,Vl=e)):(u=null,Vl=e)):(u=null,Vl=e),zl[l]={nextPos:Vl,result:u},u}function H(){var l="diphthong@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s,a,o,i;return a=Vl,o=Vl,/^[a]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[a]")),null!==t?(e=Q(),null!==e?(i=Vl,wl++,s=Q(),wl--,null===s?s="":(s=null,Vl=i),null!==s?t=[t,e,s]:(t=null,Vl=o)):(t=null,Vl=o)):(t=null,Vl=o),null===t&&(o=Vl,/^[aeo]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[aeo]")),null!==t?(e=L(),null!==e?(i=Vl,wl++,s=L(),wl--,null===s?s="":(s=null,Vl=i),null!==s?t=[t,e,s]:(t=null,Vl=o)):(t=null,Vl=o)):(t=null,Vl=o)),null!==t?(o=Vl,wl++,e=D(),wl--,null===e?e="":(e=null,Vl=o),null!==e?t=[t,e]:(t=null,Vl=a)):(t=null,Vl=a),zl[l]={nextPos:Vl,result:t},t}function K(){var l="vowel@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s,a;return s=Vl,/^[aeiou]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[aeiou]")),null!==t?(a=Vl,wl++,e=D(),wl--,null===e?e="":(e=null,Vl=a),null!==e?t=[t,e]:(t=null,Vl=s)):(t=null,Vl=s),zl[l]={nextPos:Vl,result:t},t}function L(){var l="i@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t;return/^[i]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[i]")),zl[l]={nextPos:Vl,result:t},t}function Q(){var l="u@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t;return/^[u]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[u]")),zl[l]={nextPos:Vl,result:t},t}function R(){var l="y@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s,a,o,i,f;return a=Vl,/^[y]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[y]")),null!==t?(o=Vl,wl++,i=Vl,f=Vl,wl++,e=R(),wl--,null===e?e="":(e=null,Vl=f),null!==e?(s=D(),null!==s?e=[e,s]:(e=null,Vl=i)):(e=null,Vl=i),wl--,null===e?e="":(e=null,Vl=o),null!==e?t=[t,e]:(t=null,Vl=a)):(t=null,Vl=a),zl[l]={nextPos:Vl,result:t},t}function T(){var l="initial_pair@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Vl,a=Vl,wl++,u=U(),wl--,null!==u?(u="",Vl=a):u=null,null!==u?(r=X(),null!==r?(t=X(),null!==t?(a=Vl,wl++,e=X(),wl--,null===e?e="":(e=null,Vl=a),null!==e?u=[u,r,t,e]:(u=null,Vl=s)):(u=null,Vl=s)):(u=null,Vl=s)):(u=null,Vl=s),zl[l]={nextPos:Vl,result:u},u}function U(){var l="initial@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;return e=Vl,u=W(),null===u&&(s=Vl,a=Vl,u=fl(),null!==u?(o=Vl,wl++,r=cl(),wl--,null===r?r="":(r=null,Vl=o),null!==r?u=[u,r]:(u=null,Vl=a)):(u=null,Vl=a),null===u&&(a=Vl,u=il(),null!==u?(o=Vl,wl++,r=el(),null===r&&(r=rl(),null===r&&(r=sl())),wl--,null===r?r="":(r=null,Vl=o),null!==r?u=[u,r]:(u=null,Vl=a)):(u=null,Vl=a)),u=null!==u?u:"",null!==u?(r=xl(),null===r&&(a=Vl,r=Pl(),null===r&&(r=ol(),null===r&&(o=Vl,r=el(),null!==r?(i=Vl,wl++,t=sl(),wl--,null===t?t="":(t=null,Vl=i),null!==t?r=[r,t]:(r=null,Vl=o)):(r=null,Vl=o))),null!==r?(o=Vl,wl++,t=rl(),wl--,null===t?t="":(t=null,Vl=o),null!==t?r=[r,t]:(r=null,Vl=a)):(r=null,Vl=a),null===r&&(r=vl(),null===r&&(r=cl(),null===r&&(r=al(),null===r&&(r=tl()))))),r=null!==r?r:"",null!==r?(t=rl(),null===t&&(t=sl()),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,Vl=s)):(u=null,Vl=s)):(u=null,Vl=s)),null!==u?(s=Vl,wl++,r=X(),wl--,null===r?r="":(r=null,Vl=s),null!==r?(s=Vl,wl++,t=G(),wl--,null===t?t="":(t=null,Vl=s),null!==t?u=[u,r,t]:(u=null,Vl=e)):(u=null,Vl=e)):(u=null,Vl=e),zl[l]={nextPos:Vl,result:u},u}function W(){var l="affricate@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t;return t=Vl,u=Pl(),null!==u?(r=fl(),null!==r?u=[u,r]:(u=null,Vl=t)):(u=null,Vl=t),null===u&&(t=Vl,u=ol(),null!==u?(r=il(),null!==r?u=[u,r]:(u=null,Vl=t)):(u=null,Vl=t)),zl[l]={nextPos:Vl,result:u},u}function X(){var l="consonant@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u;return u=Z(),null===u&&(u=$(),null===u&&(u=Y())),zl[l]={nextPos:Vl,result:u},u}function Y(){var l="syllabic@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u;return u=rl(),null===u&&(u=tl(),null===u&&(u=el(),null===u&&(u=sl()))),zl[l]={nextPos:Vl,result:u},u}function Z(){var l="voiced@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u;return u=al(),null===u&&(u=ol(),null===u&&(u=il())),zl[l]={nextPos:Vl,result:u},u}function $(){var l="unvoiced@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u;return u=fl(),null===u&&(u=vl(),null===u&&(u=xl(),null===u&&(u=Pl(),null===u&&(u=cl())))),zl[l]={nextPos:Vl,result:u},u}function ll(){var l="hg@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e;return t=Vl,e=Vl,wl++,u=hl(),wl--,null===u?u="":(u=null,Vl=e),null!==u?(e=Vl,wl++,r=G(),wl--,null===r?r="":(r=null,Vl=e),null!==r?u=[u,r]:(u=null,Vl=t)):(u=null,Vl=t),zl[l]={nextPos:Vl,result:u},u}function nl(){var l="hgu@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e;return t=Vl,u=ll(),null!==u?(e=Vl,wl++,r=$(),wl--,null===r?r="":(r=null,Vl=e),null!==r?u=[u,r]:(u=null,Vl=t)):(u=null,Vl=t),zl[l]={nextPos:Vl,result:u},u}function ul(){var l="hgv@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e;return t=Vl,u=ll(),null!==u?(e=Vl,wl++,r=Z(),wl--,null===r?r="":(r=null,Vl=e),null!==r?u=[u,r]:(u=null,Vl=t)):(u=null,Vl=t),zl[l]={nextPos:Vl,result:u},u}function rl(){var l="l@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s;return s=Vl,/^[l]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[l]")),null!==t?(e=ll(),null!==e?t=[t,e]:(t=null,Vl=s)):(t=null,Vl=s),zl[l]={nextPos:Vl,result:t},t}function tl(){var l="m@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s,a,o;return a=Vl,/^[m]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[m]")),null!==t?(e=ll(),null!==e?(o=Vl,wl++,/^[z]/.test(n.charAt(Vl))?(s=n.charAt(Vl),Vl++):(s=null,0===wl&&r("[z]")),wl--,null===s?s="":(s=null,Vl=o),null!==s?t=[t,e,s]:(t=null,Vl=a)):(t=null,Vl=a)):(t=null,Vl=a),zl[l]={nextPos:Vl,result:t},t}function el(){var l="n@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s,a,o;return a=Vl,/^[n]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[n]")),null!==t?(e=ll(),null!==e?(o=Vl,wl++,s=W(),wl--,null===s?s="":(s=null,Vl=o),null!==s?t=[t,e,s]:(t=null,Vl=a)):(t=null,Vl=a)):(t=null,Vl=a),zl[l]={nextPos:Vl,result:t},t}function sl(){var l="r@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s;return s=Vl,/^[r]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[r]")),null!==t?(e=ll(),null!==e?t=[t,e]:(t=null,Vl=s)):(t=null,Vl=s),zl[l]={nextPos:Vl,result:t},t}function al(){var l="bgv@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s;return s=Vl,/^[bgv]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[bgv]")),null!==t?(e=nl(),null!==e?t=[t,e]:(t=null,Vl=s)):(t=null,Vl=s),zl[l]={nextPos:Vl,result:t},t}function ol(){var l="d@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s;return s=Vl,/^[d]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[d]")),null!==t?(e=nl(),null!==e?t=[t,e]:(t=null,Vl=s)):(t=null,Vl=s),zl[l]={nextPos:Vl,result:t},t}function il(){var l="jz@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s;return s=Vl,/^[jz]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[jz]")),null!==t?(e=nl(),null!==e?t=[t,e]:(t=null,Vl=s)):(t=null,Vl=s),zl[l]={nextPos:Vl,result:t},t}function fl(){var l="cs@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s,a,o,i;return o=Vl,/^[cs]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[cs]")),null!==t?(e=ul(),null!==e?(i=Vl,wl++,s=fl(),wl--,null===s?s="":(s=null,Vl=i),null!==s?(i=Vl,wl++,a=cl(),wl--,null===a?a="":(a=null,Vl=i),null!==a?t=[t,e,s,a]:(t=null,Vl=o)):(t=null,Vl=o)):(t=null,Vl=o)):(t=null,Vl=o),zl[l]={nextPos:Vl,result:t},t}function cl(){var l="x@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s,a,o,i;return o=Vl,/^[x]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[x]")),null!==t?(e=ul(),null!==e?(i=Vl,wl++,/^[c]/.test(n.charAt(Vl))?(s=n.charAt(Vl),Vl++):(s=null,0===wl&&r("[c]")),wl--,null===s?s="":(s=null,Vl=i),null!==s?(i=Vl,wl++,a=vl(),wl--,null===a?a="":(a=null,Vl=i),null!==a?t=[t,e,s,a]:(t=null,Vl=o)):(t=null,Vl=o)):(t=null,Vl=o)):(t=null,Vl=o),zl[l]={nextPos:Vl,result:t},t}function vl(){var l="k@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s,a,o;return a=Vl,/^[k]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[k]")),null!==t?(e=ul(),null!==e?(o=Vl,wl++,s=cl(),wl--,null===s?s="":(s=null,Vl=o),null!==s?t=[t,e,s]:(t=null,Vl=a)):(t=null,Vl=a)):(t=null,Vl=a),zl[l]={nextPos:Vl,result:t},t}function xl(){var l="pf@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s;return s=Vl,/^[pf]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[pf]")),null!==t?(e=ul(),null!==e?t=[t,e]:(t=null,Vl=s)):(t=null,Vl=s),zl[l]={nextPos:Vl,result:t},t}function Pl(){var l="t@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s;return s=Vl,/^[t]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[t]")),null!==t?(e=ul(),null!==e?t=[t,e]:(t=null,Vl=s)):(t=null,Vl=s),zl[l]={nextPos:Vl,result:t},t}function hl(){var l="h@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e,s,a;return s=Vl,/^[']/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[']")),null!==t?(a=Vl,wl++,e=D(),wl--,null!==e?(e="",Vl=a):e=null,null!==e?t=[t,e]:(t=null,Vl=s)):(t=null,Vl=s),zl[l]={nextPos:Vl,result:t},t}function _l(){var l="post_word@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r,t,e;return u=pl(),null===u&&(t=Vl,e=Vl,wl++,u=D(),wl--,null===u?u="":(u=null,Vl=e),null!==u?(r=s(),null!==r?u=[u,r]:(u=null,Vl=t)):(u=null,Vl=t)),zl[l]={nextPos:Vl,result:u},u}function pl(){var l="pause@"+Vl,n=zl[l];if(n)return Vl=n.nextPos,n.result;var u,r;if(r=gl(),null!==r)for(u=[];null!==r;)u.push(r),r=gl();else u=null;return null===u&&(u=Al()),zl[l]={nextPos:Vl,result:u},u}function Al(){var l="EOF@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t,e;return e=Vl,wl++,n.length>Vl?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("any character")),wl--,null===t?t="":(t=null,Vl=e),zl[l]={nextPos:Vl,result:t},t}function gl(){var l="space_char@"+Vl,u=zl[l];if(u)return Vl=u.nextPos,u.result;var t;return/^[.\t\n\r?! ]/.test(n.charAt(Vl))?(t=n.charAt(Vl),Vl++):(t=null,0===wl&&r("[.\\t\\n\\r?! ]")),zl[l]={nextPos:Vl,result:t},t}function yl(l){l.sort();for(var n=null,u=[],r=0;r<l.length;r++)l[r]!==n&&(u.push(l[r]),n=l[r]);return u}function dl(){for(var l=1,u=1,r=!1,t=0;t<Math.max(Vl,jl);t++){var e=n.charAt(t);"\n"===e?(r||l++,u=1,r=!1):"\r"===e||"\u2028"===e||"\u2029"===e?(l++,u=1,r=!0):(u++,r=!1)}return{line:l,column:u}}function ml(l){if("string"==typeof l)return l;var n="";for(var u in l)n+=ml(l[u]);return n}function Cl(l){if("string"==typeof l)return l;var n=[];for(var u in l)n.push(Cl(l[u]));return n}var bl={text:t,any_word:e,lojban_word:s,lujvo:a,cmevla:o,gismu:i,fuhivla:f,cmavo:c,brivla_core:v,any_fuhivla_rafsi:x,rafsi_string:P,fuhivla_head:h,zifcme:_,stressed_fuhivla_rafsi:p,fuhivla_rafsi:A,stressed_y_rafsi:g,y_rafsi:y,y_less_rafsi:d,stressed_hy_rafsi:m,hy_rafsi:C,CVC:b,CVC_CCV:V,ini_vwl:w,CVC_CCV_CVV:j,CVV_final_rafsi:E,short_final_rafsi:z,unstressed_syllable:F,long_rafsi:k,CV:S,final_syllable:O,stress:M,any_syllable:B,syllable:I,consonantal_syllable:J,coda:N,onset:q,nucleus:D,glide:G,diphthong:H,vowel:K,i:L,u:Q,y:R,initial_pair:T,initial:U,affricate:W,consonant:X,syllabic:Y,voiced:Z,unvoiced:$,hg:ll,hgu:nl,hgv:ul,l:rl,m:tl,n:el,r:sl,bgv:al,d:ol,jz:il,cs:fl,x:cl,k:vl,pf:xl,t:Pl,h:hl,post_word:_l,pause:pl,EOF:Al,space_char:gl};if(void 0!==u){if(void 0===bl[u])throw new Error("Invalid rule name: "+l(u)+".")}else u="text";var Vl=0,wl=0,jl=0,El=[],zl={},Fl=bl[u]();if(null===Fl||Vl!==n.length){var kl=Math.max(Vl,jl),Sl=kl<n.length?n.charAt(kl):null,Ol=dl();throw new this.SyntaxError(yl(El),Sl,kl,Ol.line,Ol.column)}return Fl},toSource:function(){return this._source}};return n.SyntaxError=function(n,u,r,t,e){function s(n,u){var r,t;switch(n.length){case 0:r="end of input";break;case 1:r=n[0];break;default:r=n.slice(0,n.length-1).join(", ")+" or "+n[n.length-1]}return t=u?l(u):"end of input","Expected "+r+" but "+t+" found."}this.name="SyntaxError",this.expected=n,this.found=u,this.message=s(n,u),this.offset=r,this.line=t,this.column=e},n.SyntaxError.prototype=Error.prototype,n}();module.exports=cmaxes,term=process.argv[2],void 0!==term&&"string"==typeof term.valueOf()&&console.log(JSON.stringify(cmaxes.parse(term)));

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
    	return (a[2] === b[2]) ? 0 : ((a[2] < b[2]) ? -1 : 1);
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
		take="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<?xml-stylesheet type=\"text/xsl\" href=\"jbovlaste.xsl\"?>\n<dictionary>\n<direction from=\"lojban\" to=\"English (The Crash Course)\">\n"+take+"</definition></valsi>\n</direction>\n</dictionary>";
		take = fs.writeFileSync(t+".temp",take);
		fs.renameSync(t+".temp",path.join(__dirname,"dumps","jb.xml"));console.log("The Crash Course dictionary updated");
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

