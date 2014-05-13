var tato= require('./tatoeba.js');
var interv=900000;
var interm=2900;
var chan='#lojban';
var asker='livla';
var replier='mensi';
var preasker=asker + ': ';
var prereplier=replier + ': ';
var said;
var config = {
  server: 'irc.freenode.net',
  nick: asker,
  options: {
    channels: ['#gleki', chan,'##jboselbau'],
    debug: false
  }
};

var configmensi = {
  server: 'irc.freenode.net',
  nick: replier,
  options: {
    channels: ['#gleki', chan,'##jboselbau'],
    debug: false
  }
};

var irc = require('irc');
var client = new irc.Client(config.server, config.nick, config.options);
var clientmensi = new irc.Client(configmensi.server, configmensi.nick, configmensi.options);

client.addListener('message', function(from, to, text, message) {
    processor(client, from, to, text, message);
});

clientmensi.addListener('message', function(from, to, text, message) {
    processormensi(clientmensi, from, to, text, message);
});

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
var reply = ["mi nelci i ie mi nelci", "ausai le'o mi catra do", "oicai do mabla", "lo nu go'i cu plixau"];
var nagendra = ["na drani", "li'a na drani i do pu nitcu ma", "do na junri xu","ju'o do na\'e junri", "doi xendo mi tatpi","mi sruma lo nu do zmiku sa'u"];
var spuda = ["do puzabi\'oca mutce lo ka jai fanza", "do djica ma", "a'enai je'enai i mi djica lo ka sipna", "e'u do klama lo bartu","ke'o i ta'onai aunairu'e mi tavla do"];
var coi = ["coi", "co\'oi", "ju\'i", "be\'e"];
var mablagleki = ["la gleki cu tai mabla prenu", "xu la gleki cu fenki i .ies", "la gleki cu cmorguka i ie cmorguka", "lo'e me la gleki cu finti lo cizra zmiku","xu ro lo jbopre cu tai si'a fenki","lo'e arxokuna cu nelci lo ka zukte lo fanza"];
var user = ["gleki", replier];
var grute = ["pelxu badna", "ranti kokso", "fanza plise", "grute", "xunre ka\'orta","zirpu betka","clazme","cirla","tricu","bunre narge","crino spati","dembi","figre","tamca","patlu","djacyzme"];
var mamta = ["mamta", "patfu", "plise", "gerku", "ractu", "ratcu", "se dunda", "mensi", "mlatu","panzi","tixnu","zdani","zmiku"];
var gletu = ["gletu", "cinba", "prami", "prami cinba", "carmi cinba", "viska", "pencu", "sumne","darxi","smaka","jelcygau","cikre"];
var jukpa = ["mi ca jukpa lo ckafi", "mi co'i te vecnu lo pitsa", "mi citka lo mavystasu", "mi pinxe lo xalka i mi cinmo lo ka me la xalk i y mi crino xu", "doi cevni ko sidji mi lo ka bregau lo nanba i y ei mi jukpa lo nanba","ei pinxe si citka lo stasu","au smaka lo titnanba",vricyjukpa];
var natirna = ["na tirna mi'o", "cu xebni mi'o", "ca gletu gi'enai tavla djica", "ca cipra zukte tu'a la cipra", "ca finti lo lojbo cukta gi'enai tirna do", "cu mutce tolcando .i ko na jai fanza", "ca naljundi i ko retsku fi lo jbocre","ca pincivi gi'enai jundi i do e'o na jai fanza","ca vikmi i ko smaji","ca citka", "ca sipna","ca jai bandu la lojbanistan i ko na jai daspo ri"," ca naljundi i e'u do tavla lo drata"," ca zukte lo se jibri i e'usai do jikca lo proga saske certu"];
///dict

var vricyjukpa = function(){return "ua ba\'a lo " + ext(grute) + "je lo " + ext(grute) + " cu zabna";};

var vric = function ()
{
var vricar = [ext(user) + ': ' + ext(coi) + ' ' + ext(pendo),ext(user) + ': ' + ext(jukpa),ext(user) + ': do ' + ext(grute), ext(user) + ': mi pu ' + ext(gletu) + ' lo ' + ext(mamta) + ' pe do',prereplier + 'mi retsku i do spusku',prereplier + 'u\'i ' + ext(gaga),ext(mablagleki),ext(emails),prereplier + 'sei mi kucli ' + ext(alis),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),prereplier + ext(dozmiku)];
return vricar[Math.floor(vricar.length*Math.random())];
};


var ext = function (arr)
{
return arr[Math.floor(arr.length*Math.random())];
};

var processor = function(client, from, to, text, message) {
  if (!text) return;
	said=Date.now();
  //if (text.indexOf(prereplier) < 0 & text.indexOf(preasker) < 0 ) {
	//emit random text at given intervals
	// continue execution
	if (text.indexOf("doi " + asker) >-1 && from!==replier) {
      	setTimeout(function() {client.say(sendTo, tato.tatoebaprocessing(from));}, interm );
  }

	setInterval(function() {if (Date.now()-said>interv){said=Date.now();client.say(chan, vric());}}, interv);
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
  if (sendTo == to) {  // Public
    if (text.indexOf(prereplier + 'mi retsku') == '0' && from==asker) {
      clientmensi.say(sendTo, preasker+ext(jee)+' ' + ext(pendo));
    }
    if (text.indexOf(prereplier + 'mi retsku') < 0 && from==asker && text.indexOf(prereplier + 'mi') == '0') {
      clientmensi.say(sendTo, preasker + ext(reply));
    }
    if (text.indexOf("gleki: ") == '0' && from==asker) {
      	setTimeout(function() {clientmensi.say(sendTo, preasker + 'la gleki ' + ext(natirna));}, interm );
    }
    if (text.indexOf(prereplier + 'do') == '0' && from==asker) {
      	setTimeout(function() {clientmensi.say(sendTo, preasker + ext(spuda));}, interm );
    }
    if (text.indexOf(prereplier + 'sei mi kucli') == '0' && from==asker) {
      	setTimeout(function() {clientmensi.say(sendTo, preasker + ext(nadjuno));}, interm );
    }
    if (text.indexOf(prereplier + 'zmiku') >= 0 && from==asker) {
      	setTimeout(function() {clientmensi.say(sendTo, preasker + ext(nazmiku));}, interm );
    }
    if (text.indexOf(prereplier + 'u\'i') == '0' && from==asker) {
      	setTimeout(function() {clientmensi.say(sendTo, preasker + ext(nagendra));}, interm );
    }
    if (text.indexOf(prereplier + 'xu') == '0' && from!==asker) {
      	setTimeout(function() {clientmensi.say(sendTo, from + ': ' + ext(mizmiku));}, interm );
    }
    if (text.indexOf(prereplier) == '0' && text.indexOf(prereplier + 'xu') !== '0' && from!==asker) {
      	setTimeout(function() {clientmensi.say(sendTo, tato.tatoebaprocessing(from));}, interm );
    }
	if (text.indexOf("doi " + replier) >-1 && from!==asker) {
      	setTimeout(function() {clientmensi.say(sendTo, tato.tatoebaprocessing(from));}, interm );
  }

  }
};