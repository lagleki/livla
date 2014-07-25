//livla bot
var s;
var t;
var tato= require('./tatoeba.js');
var interv=900000;
var interm=2900;
var chan='#lojban,#ckule';
var livlytcan='##jboselbau';
var asker='livla';
var replier='mensi';
var preasker=asker + ': ';
var prereplier=replier + ': ';
var said;
var config = {
  server: 'irc.freenode.net',
  nick: asker,
  options: {
    channels: ['#gleki',livlytcan, chan],
    debug: false,
    messageSplit: 256
  }
};

var configmensi = {
  server: 'irc.freenode.net',
  nick: replier,
  options: {
    channels: ['#gleki',livlytcan, chan],
    debug: false,
    messageSplit: 256
  }
};

var configcipra = {
  server: 'irc.freenode.net',
  nick: 'cipra',
  options: {
    channels: ['#gleki', chan, livlytcan],
    debug: false,
    messageSplit: 256
  }
};

var irc = require('irc');
var client = new irc.Client(config.server, config.nick, config.options);
var clientmensi = new irc.Client(configmensi.server, configmensi.nick, configmensi.options);
var clientcipra = new irc.Client(configcipra.server, configcipra.nick, configcipra.options);

client.addListener('message', function(from, to, text, message) {
    processor(client, from, to, text, message);
});

clientmensi.addListener('message', function(from, to, text, message) {
    processormensi(clientmensi, from, to, text, message);
});

clientcipra.addListener('message', function(from, to, text, message) {
    processorcipra(clientcipra, from, to, text, message);
});

setInterval(function() { //update logs once a djedi
	var langs=["jbo","en","ru","es","fr","ja","de","eo","en-simple"];
	var request = require("request"); var body;
	request = request.defaults({jar: true});
	var jar = request.jar();
	var cookie = request.cookie("jbovlastesessionid=MTg6MzIwOmdsZWtpOjE0MDQyODk5NDE%3D");
	langs.forEach(function(thisa) {
		var uri="http://jbovlaste.lojban.org/export/xml-export.html?lang="+thisa;
		jar.setCookie(cookie, uri);
			request({uri: uri,method: "GET",jar: jar}, function(err, response, body) {
				//write body to file
				if(err) {
					console.log(err);
				} else {
					fs = require("fs"),path = require("path");
					var content = fs.writeFile(path.join(__dirname,"dumps",thisa + ".xml"),body, function(err) {
					if(err) {console.log(err);} else {console.log(thisa + ' updated');}
					});
				}
			}); 
	});
	body="";
}, 43200000);

var camxes = require('../camxes-exp.js');
var camxes_pre = require('../camxes_preproc.js');
var camxes_post = require('../camxes_postproc.js');

var processorcipra = function(client, from, to, text, message) {
	var ret;
  if (!text) return;
  var sendTo = from; // send privately
  if (to.indexOf('#') > -1) {
    sendTo = to; // send publicly
  }
  if (sendTo == to) {  // Public
    if (text.indexOf("cipra: ") == '0') {
      text = text.substr(7);
      ret = extract_mode(text);
      client.say(sendTo, run_camxes(ret[0], ret[1]));
    } else if (text.search(/(^| )coi la cipra/) >= 0) {
      client.say(sendTo, "coi");
    } else if (text.search(/(^| )ju'i la cipra/) >= 0) {
      client.say(sendTo, "re'i");
    } else if (text.search(/(^| )ki'e la cipra/) >= 0) {
      client.say(sendTo, "je'e fi'i");
    }
  } else {  // Private
	ret = extract_mode(text);
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
///end cipra
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
    if (text.indexOf('darxi la ') == '0' && from!==asker && from!==replier) {
      	setTimeout(function() {client.say(sendTo, text.substr(9) + ': oidai mi darxi do lo trauta');}, 0 );
    }

	if (text.indexOf("doi " + asker) >-1 && from!==replier) {
      	setTimeout(function() {client.say(sendTo, tato.tatoebaprocessing(from));}, interm );
  }

	setInterval(function() {if (Date.now()-said>interv){said=Date.now();client.say(livlytcan, vric());}}, interv);
  //}
  var sendTo = from; // send privately
  if (to.indexOf('#') > -1) {
    sendTo = to; // send publicly
  }
	if (text.indexOf(preasker) == '0' && from!==replier) {
      	setTimeout(function() {client.say(sendTo, from + ': ' + ext(mizmiku));}, interm );
  }

};

var processormensi = function(clientmensi, from, to, text, message) {
  if (!text) return;
  var sendTo = from; // send privately
  if (to.indexOf('#') > -1) {
    sendTo = to; // send publicly
  }
  if (1==1) {  //sendTo == to Public
	switch(true) {
	case text.indexOf('jbo: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(4),'jbo'));break;
	case text.indexOf('en: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'en'));break;
	case text.indexOf('ru: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'ru'));break;
	case text.indexOf('es: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'es'));break;
	case text.indexOf('fr: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'fr'));break;
	case text.indexOf('ja: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'ja'));break;
	case text.indexOf('de: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'de'));break;
	case text.indexOf('eo: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'eo'));break;
	case text.indexOf('en-simple: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(10),'en-simple'));break;
	case text.indexOf('selmaho: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(8),'en','selmaho'));break;
	case text.indexOf('rafsi: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(6),'en','raf'));break;
	case text.indexOf('toki: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(5),'toki'));break;
 	case text=='mensi: io': clientmensi.say(sendTo, io());break;
 	case text=='mensi: help': clientmensi.say(sendTo, sidju());break;
 	case text.indexOf(prereplier + 'r ') == '0': clientmensi.say(sendTo, rusko(text.substr(prereplier.length+1).trim()));break;
 	case text.indexOf(prereplier + 'j ') == '0': clientmensi.say(sendTo, jbopomofo(text.substr(prereplier.length+1).trim()));break;
 	case text.indexOf(prereplier + 's ') == '0': clientmensi.say(sendTo, "Tatoeba" + sisku(text.substr(prereplier.length+1).trim()));break;
 	case text.indexOf(prereplier + 'mi retsku') == '0' && from==asker: clientmensi.say(sendTo, preasker+ext(jee)+' ' + ext(pendo));break;
 	case text.indexOf(prereplier + 'xu do') == '0': 
 	case text.indexOf(prereplier + 'do') == '0': setTimeout(function() {clientmensi.say(sendTo, from + mireturn());}, interm );break;
 	case text.indexOf(prereplier + 'mi retsku') < 0 && text.indexOf(prereplier + 'mi') == '0': setTimeout(function() {clientmensi.say(sendTo, from + doreturn());}, interm );break;
 	case text.indexOf(prereplier + 'sei mi kucli') == '0' && from==asker: setTimeout(function() {clientmensi.say(sendTo, preasker + ext(nadjuno));}, interm );break;
 	case text.indexOf(prereplier + 'zmiku') >= 0 && from==asker: text.indexOf(prereplier + 'zmiku') >= 0 && from==asker;break;
 	case text.indexOf(prereplier + 'u\'i') == '0' && from==asker: setTimeout(function() {clientmensi.say(sendTo, preasker + ext(nagendra));}, interm );break;
 	case text.indexOf(prereplier + 'xu') == '0' && from!==asker: setTimeout(function() {clientmensi.say(sendTo, from + ': ' + ext(mizmiku));}, interm );break;
 	case text.indexOf(prereplier) == '0' && text.indexOf(prereplier + 'xu') !== '0' && from!==asker: setTimeout(function() {clientmensi.say(sendTo, tato.tatoebaprocessing(from));}, interm );break;
 	case text.indexOf("doi " + replier) >-1 && from!==asker: setTimeout(function() {clientmensi.say(sendTo, tato.tatoebaprocessing(from));}, interm );break;
  	}



  }
};

    /*if (text.indexOf(prereplier + 'mi retsku') < 0 && from==asker && text.indexOf(prereplier + 'mi') == '0') {
      clientmensi.say(sendTo, preasker + ext(reply));
    }*/
    /*if (text.indexOf("gleki: ") == '0' && from==asker) {
      	setTimeout(function() {clientmensi.say(sendTo, preasker + 'la gleki ' + ext(natirna));}, interm );
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
s=tato.tatoebaprocessing("");
i++;//in case we found nothing exit
}
if (s==="" && i<20000){s=": e'u do sisku tu'a lo nalkunti uenzi";}
if (i>=20000){s=": no da jai se facki";}
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

var vlaste = function (lin,lng,raf)
{
lin=lin.toLowerCase().trim();
var ret;
	switch(true) {
		case lin.substr(0,5).trim()=="/full": ret=mulno(lin.substr(6).trim(),lng);break;
		case raf=='raf': ret=rafsi(lin.replace(/[^a-z'\.]/g,''));break;
		case raf=='selmaho': ret=selmaho(lin.replace(/[^a-z'\.\*0-9]/g,''));break;
		default: ret=tordu(lin,lng);break;
	}
return ret;
};


var tordu = function (lin,lng)
{
lin=lin.replace(/\"/g,'');
var libxmljs = require("libxmljs");
var fs = require("fs"),path = require("path");
var content = fs.readFileSync(path.join(__dirname,"dumps",lng + ".xml"),'utf8');//.toLowerCase();
var xmlDoc = libxmljs.parseXml(content);
var gchild='';
try{gchild = xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/definition[1]").text();}catch(err){}
try{gchild +=' |>>> ' + xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/notes[1]").text();}catch(err){}
try{gchild +=' |>>> ' + xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/user[1]/username[1]").text();}catch(err){}
if (gchild===''){return mulno(lin,lng);}else{return lin + " = " + gchild.replace(/[\$_`\{\}]/g,'');}
};

var mulno = function (lin,lng)
{
lin=lin.replace(/\"/g,'');
var libxmljs = require("libxmljs");
var fs = require("fs"),path = require("path");
var content = fs.readFileSync(path.join(__dirname,"dumps",lng + ".xml"),'utf8');//.toLowerCase();
var retur='y no da jai se facki';
var xmlDoc = libxmljs.parseXml(content);
var coun = xmlDoc.find("/dictionary/direction[1]/valsi[contains(translate(./definition,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\") or contains(translate(./notes,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\")]");
var stra=[];
	for (var i=0;i<coun.length;i++)
	{
		stra.push(coun[i].attr("word").value());
	}
try{stra.splice(30);}catch(err){}
if (stra.length>=30){stra.push("...");}
var gag=stra.join(", ").trim();
if (stra.length==1){gag = tordu(gag,lng);}
if(gag===''){gag='y no da jai se facki';}
return gag;
};

var selmaho = function (lin)
{
var lng="en";var gag='';var ien='';
var libxmljs = require("libxmljs");
var fs = require("fs"),path = require("path");
var content = fs.readFileSync(path.join(__dirname,"dumps",lng + ".xml"),'utf8');//.toLowerCase();
var xmlDoc = libxmljs.parseXml(content);
var coun = xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/selmaho[1]");
if (typeof coun!=='undefined'){ien='.i lu ' + lin + ' li\'u cmavo zo\'oi ' + coun.text();}
	//now try to output all cmavo of the given selmaho
	try{var ali = xmlDoc.find("/dictionary/direction[1]/valsi[contains(translate(./selmaho,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\")]");
	var stra=[];
	for (var i=0;i<ali.length;i++)
	{
		stra.push(ali[i].attr("word").value());
	}	
	gag=stra.join(", ").trim();
	//if (stra.length==1){gag = gag + ' = ' + tordu(gag,lng);}
	}catch(err){}
switch(true){
case (ien!=='') && (gag !==''): gag=ien.concat(" |||| cmavo: ").concat(gag);break;
case (ien==='') && (gag !==''): gag="cmavo: " + gag;break;
case (ien!=='') && (gag ===''): gag=ien;break;
case (ien==='') && (rev ===''): gag='y no da jai se facki';break;
}
return gag;
};

var rafsi = function (lin)
{
var lng="en",gag;
var libxmljs = require("libxmljs");
var fs = require("fs"),path = require("path");
var content = fs.readFileSync(path.join(__dirname,"dumps",lng + ".xml"),'utf8');//.toLowerCase();
var xmlDoc = libxmljs.parseXml(content);
var coun = xmlDoc.find("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/rafsi/text()[1]").join (' .e zo ');
var rev = xmlDoc.get("/dictionary/direction[1]/valsi[rafsi=\""+lin+"\"]");
if (coun!==''){coun='zo ' + coun + ' rafsi zo ' + lin;}
if (typeof rev!=='undefined'){rev='zo ' + rev.attr("word").value() + ' se rafsi ra\'oi '+lin;}else{rev='';}
switch(true){
case (coun!=='') && (rev !==''): gag=coun.concat(" .i ").concat(rev);break;
case (coun==='') && (rev !==''): gag=rev;break;
case (coun!=='') && (rev ===''): gag=coun;break;
case (coun==='') && (rev ===''): gag='y no da jai se facki';break;
}
return gag;
};

var io = function ()
{
return '.io';
};

var sidju = function ()
{
return "Typing in the chat \"rafsi: pof\" will return \"spofu\". \"rafsi: spofu\" will return \"pof po\'u\". Typing \"selmaho: ui\" will return \"UI\". Typing \"mensi: s klama\" will return a random sentence (with its number) from Tatoeba containing \"klama\" sequence.";
};
