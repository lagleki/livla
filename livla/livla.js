/*jshint bitwise: false*/

const lg = console.log.bind(console);
// const p = object => JSON.stringify(object);


//livla bot
const fs = require("fs"),path = require("path-extra"),ospath = require("ospath"),libxmljs = require("libxmljs");
require('v8-profiler');
const tato= require('./tatoeba.js');
// const gram= require('./gram.js');
let notci,notcijudri,ljv='';
const interv=300000;
const interm=2900;
const nodasezvafahi = 'no da se zvafa\'i';
const tersepli = " + ";
const fram="../../../files/fndata-1.5/frame";
// Default configuration, may be modified by “loadConfig”, with the content of
// “~/.livla/config.json.
let tcan='#lojban,#ckule,#tokipona,#jbosnu,#jboguhe,#spero,#pepper&carrot,##jboselbau,##esperanto';
let livlytcan='#lojbanme';//where la livla talks to la mensi
let asker='livla';
let replier='mensi';
let server='irc.freenode.net';
// const stodipilno=['gleki','xalbo'];
// End default configuration

loadConfig();
const configlivla = {
  server,
  nick: asker,
  options: {
    channels: [livlytcan],
    debug: false,
    messageSplit: 1900,
    realName: 'http://lojban.org/papri/IRC_Bots',
    floodProtection: true,
    floodProtectionDelay: 400
  }
};
const configmensi = {
  server,
  nick: replier,
  options: {
    channels: [livlytcan, tcan],
    debug: false,
    messageSplit: 1900,
    realName: 'http://lojban.org/papri/IRC_Bots',
    userName: replier,
    floodProtection: true,
    floodProtectionDelay: 400
  }
};
let userSettings = {}; // Saving user preferences
userSettings[asker] = {
  "language": "jbo" // Not used, but someone might like to have bots speak to each other in another language
};
userSettings[replier] = {
  "language": "jbo"
};

const defaultLanguage="en"; // Maybe someday should be replaced with "jbo" when Lojban definitions almost equal that of English
const preasker=`${asker}: `;
const prereplier=`${replier}: `;
let said;

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
      throw new Error(`“${path}” is not a directory.`);
    }
  }
}

// Used to read the content of any file that is located in “~/.livla/”.
// Return an empty string if the file does not exist.
function readConfig(filename) {
  const configDirectory = path.join(ospath.home(),".livla");
  ensureDirExistence(configDirectory);
  const file = path.join(configDirectory, filename);
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
  notcijudri = path.join(ospath.home(),".livla","notci.txt");
}

// Load the configuration from “~/.livla/config.json”, and modify the default
// config accordingly.
function loadConfig() {
  function either(a, b) {
    if (typeof(a) === "undefined") return b;
    return a;
  }
  let localConfig = readConfig("config.json");
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
  const localConfig = readConfig("user-settings.json");
  if (localConfig.trim() === "")
    return;
  userSettings = JSON.parse(localConfig);
}

loadUserSettings();
loadNotci();

//store en dump in memory
let enxml = path.join(__dirname,"../dumps","en" + ".xml");
if(!fs.existsSync(enxml)){enxml = path.join(__dirname,"../dumps","toki" + ".xml");}
let xmlDocEn = libxmljs.parseXml(fs.readFileSync(enxml,{encoding: 'utf8'}).replace(/(&lt;|<)script.*?(&gt;|>).*?(&lt;|<)/g,"&lt;").replace(/(&lt;|<)\/script(&gt;|>)/g,""));

const updateUserSettings = callback => {
  readConfig("user-settings.json"); // Ensure existance

  const body = JSON.stringify(userSettings);
  const configDirectory = path.join(ospath.home(),".livla");
  const filename = "user-settings.json";
  const file = path.join(configDirectory, filename);
  try
  {
    fs.writeFileSync(file, body);
    lg('User settings updated');
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

const camxes = require('../camxes-exp.js');
const camxes_pre = require('../camxes_preproc.js');
const camxes_post = require('../camxes_postproc.js');

function extract_mode(input) {
  if (input.indexOf("+s ") === 0) {
    return [input.substr(3), 3];
  } else if (input.indexOf("-f ") === 0) {
    return [input.substr(3), 5];
  } else if (input.indexOf("-f+s ") === 0) {
    return [input.substr(5), 6];
  } else if (input.indexOf("+j ") === 0) {
    return [input.substr(3), 1];
  } else return [input, 2];
}

const irc = require('irc');
const client = new irc.Client(configlivla.server, configlivla.nick, configlivla.options);
const clientmensi = new irc.Client(configmensi.server, configmensi.nick, configmensi.options);

function run_camxes(input, mode) {
  let result;
  let syntax_error = false;
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
  const camxesoff = require('../camxes.js');
  let result;
  let syntax_error = false;
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
    let camxesalta = require('../mahantufa/altatufa-stodi.js');
    let result;
    let syntax_error = false;
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
// const emails = ["Please email any questions to gleki.is.my.name@gmail.com","Пишите любые вопросы по ложбану на gleki.is.my.name@gmail.com","mw.lojban.org","http://reddit.com/r/lojban/","Страница на русском: http://mw.lojban.org/index.php?title=%D0%94%D0%BE%D0%B1%D1%80%D0%BE%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D0%BE%D0%B2%D0%B0%D1%82%D1%8C!%20(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9)&setlang=ru","http://mw.lojban.org/index.php?title=Bienvenue%20!%20(Fran%C3%A7ais)&setlang=fr"];
// const gaga = ["ga ga u la la", "mama", "do re mi fa so la ti", ".iam .iam i la pitsa cu kukte","ba du bi du","lo mlatu cu fasnu","lo'e mlatu ca ta'e fasnu","lo gerku cu dacti ije lo mlatu cu fasnu i xu lo dacti ka'e catra lo fasnu","i mi troci lo ka catra lo ditcu"];
// const pendo = ["pendo", "kamxada", "irci", "jikca djica","se jikca","zmiku","tavla","cusku"];
// const nadjuno = ["sei mi stace mi na djuno", "oi se'i mi na vedli", "oi oi la'a", "xu srana lo cukta pe la luis karol","ko zo'ei ko djuno","do dukse kucli","la alis cu misno nixli","la alis na zasti uinai"];
// const jee = ["je\'e", "mi jimpe doi", ".ua doi", "ki\'anai doi"];
const mizmiku = ["lo ro re mi zmiku ije mi'a tavla ca po'o lonu no drata cu tavla","uinai mi zmiku i ku'i mi mutce clite","uinai mi zmiku", "doi pendo mi du'eroi na jimpe lo smuni i mi zmiku", "sei mi stace mi zmiku", "la gleki cu patfu mi noi zmiku","mi na remna i e'u do retsku fi la gleki","mi na'e remna","doi pendo do e'o tolxanka","mi na djica lo ka tavla do"];
//const prije = ["lo je\'e", "mi jimpe doi", ".ua doi", "ok doi"];
// const dozmiku = ["do zmiku i do zmiku sai","fi'o djuno mi do zmiku","mu'i ma do na stace mi lo nu do zmiku"];
// const nazmiku=["mi na zmiku i mi tatpi lo nu spuda","mi remna i xu do na jimpe","do tavla fi lo zmiku xu i mi na me ri"];
// const alis = ["ma se zvati la alis", "la alis se slabu xu lo drata jbopre", "la alis cu misno xu ninmu"];
// const reply = ["xu doi lil do pendo mi i mi pu jinvi lodu'u do xamgu zmiku","do cusku lo kalci i do nitcu lo livla doi lil","lo zmiku cu ei na raktu lo prenu vau sei la aizek azimov pu xusra i je'epei","mi nelci i ie mi nelci", "ausai le'o mi catra do", "oisai do fenki", "lo nu go'i cu plixau","lu mi i mi i mi li'u a'enai i do jai fanza"];
// const nagendra = ["na drani", "li'a na drani i do pu nitcu ma", "do na junri xu","ju'o do na\'e junri", "doi xendo mi tatpi","mi sruma lo nu do zmiku sa'u"];
// const spuda = ["do puzabi\'oca mutce lo ka jai fanza", "do djica ma", "a'enai je'enai i mi djica lo ka sipna", "e'u do klama lo bartu","ke'o i ta'onai aunairu'e mi tavla do"];
// const coi = ["coi", "co\'oi", "ju\'i", "be\'e"];
// const mablagleki = ["la gleki cu tai mabla prenu", "xu la gleki cu fenki i .ies", "la gleki cu cmorguka i ie cmorguka", "lo'e me la gleki cu finti lo cizra zmiku","xu ro lo jbopre cu tai si'a fenki","lo'e arxokuna cu nelci lo ka zukte lo fanza"];
// const nelci = ["i mi i mi i mi mo i mi na nelci","lo nu nelci zo'u ba'e mi nelci i ie mi nelci","sei mi stace mi bi'u na mutce nelci",`i ji'a mi na nelci mi'e la ${replier}`,"mi xebni","e'u do vrude pajni gi'e nai ze'i co'a cinmo lo ka nelci","ji'a mi mutce nelci i ie"];
// const tugni = ["mi tugni i ie mi tugni","ba'e mi na tugni","ei mi tugni"];
// const user = ["gleki", replier];
// const grute = ["pelxu badna", "ranti kokso", "fanza plise", "grute", "xunre ka\'orta","zirpu betka","clazme","cirla","tricu","bunre narge","crino spati","dembi","figre","tamca","patlu","djacyzme"];

const ext = arr => arr[Math.floor(arr.length*Math.random())];
// const vricyjukpa = () => `ua ba'a lo ${ext(grute)}je lo ${ext(grute)} cu zabna`;

// const mamta = ["mamta", "patfu", "plise", "gerku", "ractu", "ratcu", "se dunda", "mensi", "mlatu","panzi","tixnu","zdani","zmiku"];
// const cinba = ["cinba", "prami", "prami cinba", "carmi cinba", "viska", "pencu", "sumne","darxi","smaka","jelcygau","cikre"];
// const jukpa = ["mi ca jukpa lo ckafi", "mi co'i te vecnu lo pitsa", "mi citka lo mavystasu", "mi pinxe lo xalka i mi cinmo lo ka me la xalk i y mi crino xu", "doi cevni ko sidji mi lo ka bregau lo nanba i y ei mi jukpa lo nanba","ei pinxe si citka lo stasu","au smaka lo titnanba",vricyjukpa];
// const natirna = ["na tirna mi'o", "cu xebni mi'o", "ca citka gi'enai tavla djica", "ca cipra zukte tu'a la cipra", "ca finti lo lojbo cukta gi'enai tirna do", "cu mutce tolcando .i ko na jai fanza", "ca naljundi i ko retsku fi lo jbocre","ca pincivi gi'enai jundi i do e'o na jai fanza","ca vikmi i ko smaji","ca citka", "ca sipna","ca jai bandu la lojbanistan i ko na jai daspo ri"," ca naljundi i e'u do tavla lo drata"," ca zukte lo se jibri i e'usai do jikca lo proga saske certu"];
///dict

const vric = () => {
const vricar = [tato.tatoebaprocessing(replier)];
//prereplier + ext(dozmiku),ext(user) + ': ' + ext(coi) + ' ' + ext(pendo),ext(user) + ': ' + ext(jukpa),ext(user) + ': do ' + ext(grute), ext(user) + ': mi pu ' + ext(cinba) + ' lo ' + ext(mamta) + ' pe do',prereplier + 'mi retsku i do spusku',prereplier + 'u\'i ' + ext(gaga),ext(mablagleki),ext(emails),prereplier + 'sei mi kucli ' + ext(alis),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),
return vricar[Math.floor(vricar.length*Math.random())];
};

let sisku = lin => {
  let s="";
  let i=0;
  while (s.indexOf(lin) <0 && i<20000){
  s=tato.tatoebaprocessing();
  i++;//in case we found nothing exit
  }
  if (s==="" && i<20000){s=": e'u do sisku tu'a lo nalkunti uenzi";}
  if (i>=20000){s=nodasezvafahi;}
  return s;
};

let processor = (client, from, to, text) => {
  let sendTo = from; // send privately
  if (~to.indexOf('#')) {
    sendTo = to; // send publicly
  }
  if (!text) return;
  said=Date.now();
    if (text.indexOf(`${preasker}darxi la `) === 0 && from!==asker && from!==replier) {
      setTimeout(() => {client.say(sendTo, `${text.substr(9+preasker.length)}: oidai mi darxi do lo trauta`);}, 0 );
    }else{
        if (text.indexOf(preasker) === 0 && from!==replier) {
        setTimeout(() => {client.say(sendTo, `${from}: ${ext(mizmiku)}`);}, interm );
    }}
  if (~text.indexOf(`doi ${asker}`) && from!==replier) {
          setTimeout(() => {client.say(sendTo, tato.tatoebaprocessing(from));}, interm );
  }
  setInterval(() => {if (Date.now()-said>interv){said=Date.now();client.say(livlytcan, prereplier + vric());}}, interv);
  //}
};

const benji = (source, socket, clientmensi, sendTo, what) => {
  if (source==="naxle"){
    socket.emit('returner', {message: what});
    return what;
  }
  else{clientmensi.say(sendTo, what);}
};

/*clientmensi.addListener('join', function(channel, nick, message) {
    fihido(channel,nick);
});
*/

/*if (text.indexOf(prereplier + 'mi retsku') < 0 && from==asker && text.indexOf(prereplier + 'mi') == '0') {
  benji(source,socket,clientmensi,sendTo, preasker + ext(reply));
}*/
/*if (text.indexOf("gleki: ") == '0' && from==asker) {
    setTimeout(function() {benji(source,socket,clientmensi,sendTo, preasker + 'la gleki ' + ext(natirna));}, interm );
}*/
/*
const mireturn = () => {
s="";
while (s.substr(0, 5) !== ": mi "){
s=tato.tatoebaprocessing("");
}
return s;
};

const doreturn = () => {
s="";
while (s.substr(0, 5) !== ": do "){
s=tato.tatoebaprocessing("");
}
return s;
};
*/

const jbopomofo = lin => {
 let jbopotext = "";
 for (let i=0;i<lin.length;i++) {
 const character = lin.charAt(i);

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

const kru = arg => {
  let t=run_camxes(arg,3).toString();
  if (t.indexOf("SyntaxError")<0){
    t=t.replace(/[a-z]+`/g,"").replace(/[a-z]+_[a-z]+/ig,"").replace(/h/g,"H").replace(/[^a-z \.\,'\n]/g,"").replace(/ +/g," ").replace(/ +\n/g,"\n");
    t=t.replace(/h/g,"'").toLowerCase();
    t=t.replace(/([ aeiou])u([aeiou])/g,'$1w$2');
    t=t.replace(/([ aeiou])i([aeiou])/g,'$1ɩ$2');
    t=t.replace(/au/g,'ǎ');
    t=t.replace(/ai/g,'ą');
    t=t.replace(/ei/g,'ę');
    t=t.replace(/oi/g,'ǫ');
    return t;
  }else{return "O_0";}
};

const rusko = lin => {
 const inputlength = lin.length;
 const input = lin.toLowerCase();
 let jbopotext = "";
 for (let i = 0; i < inputlength; i++) {
 const character = input.charAt(i);

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

const bangu = (lng, username) => {
  let ret = "";
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
      ret = `Es ar '${username}' turpmāk runāšu latviešu valodā.`;
      break;
    case "en":
      ret = `I will speak to '${username}' in English from now on.`;
      break;
    default:
      ret = `I will speak to '${username}' in '${lng.toUpperCase()}' from now on.`; // TODO: translate to lojban
      break;
  }
  updateUserSettings();
  return ret;
};

const RetrieveUsersLanguage = (username, lng) => {
  if(
    (
      typeof userSettings[username] === "undefined"||
      typeof userSettings[username].language === "undefined"
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

function lojTemplate(s) {
  s = s.replace(/\$.*?\$/g, c => {
    c = c.substring(1, c.length-1);
    return c.replace(/(\w+)_\{(\d+)\}/g, "$1$2").replace(/(\w+)_(.+)/g, "$1$2").replace(/\{/g,'[').replace(/\}/g,']');
  });
  //s = s.replace(/\[([^\[\]]*?)\]/g,"{$1}");
  s = s.replace(/\{(.*?)\}/g, c => c.substring(1, c.length-1));
  return s;
}

const tordu = (linf, lng, flag, xmlDoc, cmalu) => {
  let lin=linf.replace(/\"/g,'').replace(/\)$/, '').replace(/^[\(\.]/, '');
  if (flag!==1){
    if (lng==="en")
    {
      xmlDoc=xmlDocEn;
    }
    else
    {
      const xmlPath = path.join(__dirname,"../dumps",`${lng}.xml`);
      const errorMessage = `Dictionary for the desired "${lng}" language does not exist.`; //TODO: Translate to Lojban
      if(!fs.existsSync(xmlPath))
      {
        if(flag === 'passive')
        {
          lg(errorMessage);
          return '';
        }
        return errorMessage;
      }
      xmlDoc = libxmljs.parseXml(fs.readFileSync(xmlPath,{encoding: 'utf8'}));
    }
  }

  let gchild='';
    try{gchild +=`[${xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/selmaho[1]").text()}] `;}catch(err){}
    try{gchild += xmlDoc.get(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/definition[1]`).text();}catch(err){}
    if (cmalu===true){try{gchild +=` | ${xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/notes[1]").text()}`;}catch(err){}
    try{gchild +=` | ${xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/user[1]/username[1]").text()}`;}catch(err){}}
    let jk;
    try{jk = xmlDoc.get(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/gloss[1]`).text().replace(/("|&amp;quot;)/g,"'").replace(/\\/g,"\\\\");if(jk){gchild +=`\nAs a noun: ${jk}`;}}catch(err){}
    jk='';
    try{jk = xmlDoc.find(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/example`).toString().replace(/>,</g,">\n<").replace(/<example phrase=\"(.*?)\">(.*?)<\/example>/g,"$1 — $2").replace(/("|&amp;quot;)/g,"'").replace(/\\/g,"\\\\");if(jk){gchild +=`\nExamples:\n${jk}`;}}catch(err){}

  if (gchild===''){
    if (flag!==1){
      if (xulujvo(lin)===true){
        const f=triz(katna(lin,lng,1,xmlDoc),1,lng,xmlDoc);
        if (f!==''){
          lin= f;
        }else{
          lin= `[< ${katna(lin,lng,'',xmlDoc)}] ${mulno(lin,lng,xmlDoc)}`;
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
        gchild+=`...\n[mo'u se katna] http://jbovlaste.lojban.org/dict/${lin}`;
      }
      if (xulujvo(lin)===true){
        lin+=` [< ${katna(lin,lng,'',xmlDoc)}]`;
      }
      lin= `${lin} = ${gchild}`;
  }
  ljv='';
  lg(`<${linf}|`);
  if (lin!==''){
    const more = tordu(`${linf} `, lng,1,xmlDoc,cmalu);
    if (more!==''){
      lin+=`\n${more}`;
    }
  }
  return lin.replace(/&quot;/g,"'").replace(/&gt;/g,'>');
};

const mulno = (lin, lng, xmlDoc) => {
  lin=lin.replace(/\"/g,'');let xo;
  if (typeof xmlDoc==="undefined"){
    if (lng==="en"){xmlDoc=xmlDocEn;}else{xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"../dumps",`${lng}.xml`),{encoding: 'utf8'}));}
  }

  let stra=[];let i;
  let coun = xmlDoc.find(`/dictionary/direction[1]/valsi[(translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}")]`);
    if(typeof coun!=='undefined'){for (i=0;i<coun.length;i++){stra.push(coun[i].attr("word").value());}}
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[(translate(./glossword/@word,"${lin.toUpperCase()}","${lin}")="${lin}") or (translate(./Engl,"${lin.toUpperCase()}","${lin}")="${lin}")]`);
    if(typeof coun!=='undefined'){for (i=0;i<coun.length;i++){stra.push(coun[i].attr("word").value());}}
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(@word,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
    if(typeof coun!=='undefined'){for (i=0;i<coun.length;i++){stra.push(coun[i].attr("word").value());}}
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(./glossword/@word,"${lin.toUpperCase()}","${lin}"),"${lin}") or contains(translate(./Engl,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
    if(typeof coun!=='undefined'){for (i=0;i<coun.length;i++){stra.push(coun[i].attr("word").value());}}
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(./definition,"${lin.toUpperCase()}","${lin}"),"${lin}") or contains(translate(./notes,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
    if(typeof coun!=='undefined'){for (i=0;i<coun.length;i++){stra.push(coun[i].attr("word").value());}}
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(./definition,"${lin.toUpperCase()}","${lin}"),"${lin}") or contains(translate(./related,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
    if(typeof coun!=='undefined'){for (i=0;i<coun.length;i++){stra.push(coun[i].attr("word").value());}}

  stra=stra.reduce((a, b) => {if(a.indexOf(b)<0)a.push(b);return a;},[]);

  xo=stra.length;
  try{stra.splice(30);}catch(err){}
  if (stra.length>=30){stra.push("...");}
  let gag=stra.join(", ").trim();
  if (stra.length===1){gag = tordu(gag,lng);}
  if (stra.length>1){gag = `${xo} da se zvafa'i: ${gag}`;}
  if(gag===''){gag='lo nu mulno sisku zo\'u: no da se zvafa\'i';if (ljv!==''){gag+= `\n${ljv}`;}}
  return gag;
};

const selmaho = lin => {
let gag='';let ien='';
const coun = xmlDocEn.get(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/selmaho[1]`);
if (typeof coun!=='undefined'){
  ien=`.i lu ${lin} li'u cmavo lu ${coun.text()} li'u`;
  const cll= require('./cll.js');
  const cllarr = cll.cllk()[coun.text()];
  if (typeof cllarr !== 'undefined'){ien+= `\n${cllarr.replace(/ /g,"\n")}`;}
}
  try{const ali = xmlDocEn.find(`/dictionary/direction[1]/valsi[starts-with(translate(./selmaho,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  const stra=[];
  for (let i=0;i<ali.length;i++)
  {
    //te = xmlDocEn.get("/dictionary/direction[1]/valsi[translate(@word,\""+ali[i].attr("word").value()+"\",\""+ali[i].attr("word").value()+"\")=\""+ali[i].attr("word").value()+"\"]/selmaho[1]").text();
    //lg(te);
    //if (te.search("^"+lin.toUpperCase()+"h")===-1){
      stra.push(ali[i].attr("word").value());
    //}
  }  
  gag=stra.join(", ").trim();
  //if (stra.length==1){gag = gag + ' = ' + tordu(gag,lng);}
  }catch(err){}
switch(true){
case (ien!=='') && (gag !==''): gag=ien.concat("\ncmavo: ").concat(gag);break;
case (ien==='') && (gag !==''): gag=`cmavo: ${gag}`;break;
case (ien!=='') && (gag ===''): gag=ien;break;
case (ien==='') && (gag ===''): gag=nodasezvafahi;break;
}
return gag;
};

const rafsi = lin => {
let gag;
let coun = xmlDocEn.find(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/rafsi/text()[1]`);//official
try{
  const s=xmlDocEn.get(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/notes[1]`).text();
  const tmp=s.replace(/^.*? -([a-z']+)-.*/,'$1');
  if (tmp!==s){coun.push(tmp);}
  }catch(err){}//search in notes
if (lin.substr(0,4)!=='brod' & xugismu(lin)===true){coun.push(lin.substr(0,4));}//long rafsi
if (coun.length!==0){coun= coun.join (' .e ra\'oi ');}else{coun='';}
if (coun.length!==0){coun=`ra'oi ${coun} rafsi zo ${lin}`;}

let rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[rafsi="${lin}"]`);
//now try -raf- in notes
if (typeof rev==='undefined'){rev =  xmlDocEn.get(`/dictionary/direction[1]/valsi[contains(translate(./notes,"${lin.toUpperCase()}","${lin}")," -${lin}-")]`);}
//now try to add a vowel:
if (typeof rev==='undefined'){rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}a" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);}
if (typeof rev==='undefined'){rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}e" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);}
if (typeof rev==='undefined'){rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}i" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);}
if (typeof rev==='undefined'){rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}o" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);}
if (typeof rev==='undefined'){rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}u" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);}

if (typeof rev!=='undefined' && rev.attr("word").value()!==lin){rev=`zo ${rev.attr("word").value()} se rafsi ra'oi ${lin}`;}else{rev='';}
switch(true){
case (coun!=='') && (rev !==''): gag=coun.concat(" .i ").concat(rev);break;
case (coun==='') && (rev !==''): gag=rev;break;
case (coun!=='') && (rev ===''): gag=coun;break;
case (coun==='') && (rev ===''): gag=nodasezvafahi;break;
}
return gag;
};

const valsicmene = (lin, lng) => {
  lin=lin.replace(/\"/g,'');let xo;
  let xmlDoc;
  if (lng==="en"){xmlDoc=xmlDocEn;}else{xmlDoc= libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"../dumps",`${lng}.xml`),{encoding: 'utf8'}));}
  const coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(@word,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  const stra=[];
    for (let i=0;i<coun.length;i++)
    {
      stra.push(coun[i].attr("word").value());
    }
  xo=stra.length;
  try{stra.splice(30);}catch(err){}
  if (stra.length>=30){stra.push("...");}
  let gag=stra.join(", ").trim();
  if (stra.length===1){gag = tordu(gag,lng);}
  if (stra.length>1){gag = `${xo} da se zvafa'i: ${gag}`;}
  if(gag===''){gag=nodasezvafahi;}
  return gag;
};

const frame = lin => {
  let gag='';
  const arrf=fs.readdirSync(path.join(__dirname,fram)).filter(file => file.substr(-4) === '.xml');

  for (let i=0;i<arrf.length;i++)
  {
    const xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,fram,arrf[i]),{encoding: 'utf8'}).replace(/xmlns=\"/g,'mlns=\"'));
    let si = xmlDoc.get(`/frame[translate(@name,"${lin.toUpperCase()}","${lin}")="${lin}"]/definition[1]/text()`);
    if (typeof si !=='undefined'){gag= si.toString().replace(/&lt;.*?&gt;/g,'');
    si = xmlDoc.find(`/frame[translate(@name,"${lin.toUpperCase()}","${lin}")="${lin}"]/FE[@coreType="Core"]/definition/text()`);
    if (typeof si !=='undefined'){gag= `${gag}\n| te sumti: ${si.join("\n| te sumti: ").replace(/&lt;.*?&gt;/g,'')}`;}
    break;}
  }

  if (gag!==''){return gag;}else{return nodasezvafahi;}
};

const framemulno = lin => {
  let gag='';
  const arrf=fs.readdirSync(path.join(__dirname,fram)).filter(file => file.substr(-4) === '.xml');
  const stra=[];

  for (let i=0;i<arrf.length;i++)
  {
    const xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,fram,arrf[i]),{encoding: 'utf8'}).replace(/xmlns=\"/g,'mlns=\"'));
    const si = xmlDoc.get(`/frame[contains(translate(./definition,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
      if (typeof si !=='undefined'){
        stra.push(si.attr("name").value());
      }
  }
  try{stra.splice(40);}catch(err){}
  if (stra.length>=40){stra.push("...");}
  gag=stra.join(", ").trim();
  if (stra.length===1){gag = frame(stra[0]);}
  if (gag!==''){return gag;}else{return nodasezvafahi;}
};

const finti = lin => {
  lin=lin.replace(/\"/g,'');
  const coun = xmlDocEn.find(`/dictionary/direction[1]/valsi[contains(translate(./user/username,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  const stra=[];
    for (let i=0;i<coun.length;i++)
    {
      stra.push(coun[i].attr("word").value());
    }
  const cnt=stra.length;
  try{stra.splice(30);}catch(err){}
  if (stra.length>=30){stra.push("...");}
  let gag=stra.join(", ").trim();
  // if (stra.length===1){gag = tordu(gag,lng);}
  if (stra.length>1){gag = `${cnt} da se zvafa'i: ${gag}`;}
  if(gag===''){gag=nodasezvafahi;}
  return gag;
};

const vlaste = (lin, lng, raf) => {
  let cmalu;
  if (lin.indexOf(" ")===0){cmalu=true;}
  lin=lin.toLowerCase().trim();
  let ret;
    switch(true) {
      case lin.substr(0,5).trim()==="/full": ret=mulno(lin.substr(6).trim(),lng);break;
      case lin.substr(0,6).trim()==="/valsi": ret=valsicmene(lin.substr(7).trim(),lng);break;
      case raf==='raf': ret=rafsi(lin.replace(/[^a-z'\.]/g,''));break;
      case raf==='selmaho': ret=selmaho(lin.replace(/[^a-z'\.\*0-9]/g,''));break;
      case raf==='finti': ret=finti(lin.replace(/[^a-z'\.\*0-9]/g,''));break;
      case raf==='frame': ret=frame(lin.replace(/[^a-z_'\.]/g,''));break;
      case raf==='framemulno': ret=framemulno(lin.replace(/[^a-z_'\.]/g,''));break;
      default:
        if(raf==='passive'){
          ret=tordu(lin.replace(/\"/g,''), lng, raf,"",cmalu);break;
        }
        else{
          ret=tordu(lin.replace(/\"/g,''), lng,"","",cmalu);break;
        }
    }
  return ret.replace(/(.{190,250})(, |[ \.\"\/])/g,'$1$2\n');
};

const io = () => '.ii';

const kurtyvla = () => 'CommonSenseError: Expected normal word but Curtis found.';

const sidju=() => {
  const sidj = {
    en: `Parsers: type "exp:" (experimental), "off:" (camxes), "gerna:" (jbofi'e), or "yacc:" (official yacc) followed by the text to show the structure of sentences.\nLojban dictionary: type "language-code: word", where language code is one of jbo,en,ru,es,fr,f@,ja,de,eo,zh,hu,sv. This searches in both directions.\n    Type "language-code:word" (i.e. without a space after ":") to get a shorter definition.\n    "selmaho: ca'a" gives "CAhA", "selmaho: CAhA" gives "bi'ai, ca'a, ..."\n    "rafsi: kulnu" gives "klu", "rafsi: klu" gives "kulnu"\nOther conlang dictionaries: "toki:", "laadan:", "loglan:"\nLojban <-> Loglan conversion (incomplete): "coi:", "loi:"\n"Tatoeba: klama" gets a random example sentence using "klama"\nDelayed messaging: type "${replier}: doi user message" to send "message" to "user" when they return`,
  };
  return sidj.en;
};

const loglo=(lin, direction) => {
  lin=lin.toLowerCase();
  const logl= require('./loglan.js');
  const items = logl.loglandic();
    let i, myregexp, j;
    //now the function itself
    try{
      if(direction!=='coi'){
        //from lojban to loglan
        lin=run_camxes(lin.replace(/[^a-z'\. ]/g,''),5).replace(/[^a-z'\. ]/g,'').trim().split(" ");
        for (i=0;i<items.length;i++)
        {
        myregexp = new RegExp(`^${items[i][0]}$`, "gm");
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
        myregexp = new RegExp(`^${items[i][1]}$`, "gm");
        for (j=0;j<lin.length;j++){
          if (lin[j].match(myregexp)!==null){
            lin[j]=items[i][0].replace(/ /gm,"A ").replace(/$/gm,"A");
          }
        }
      }
      lin=lin.join(" ").replace(/ /gm,"* ").replace(/$/gm,"*").replace(/A\*/gm,"").replace(/A$/gm,"");
    }
  }catch(err){lin='O_0';}
  return lin.replace(/(.{190,250})(, |[ \.\"\/])/g,'$1$2\n').trim();
};

const gloso = (lin, lng, check, xmlDoc) => {
  lin=lin.replace(/\"/g,'');
  if (typeof xmlDoc==='undefined'){
    if (lng==="en"){xmlDoc=xmlDocEn;}else{xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"../dumps",`${lng}.xml`),{encoding: 'utf8'}));}
  }
  const items = [
    ["lo","those-which"],["le","the"],["la","@@@"],["nu","event-of"],["zo","the-word:"],["coi","hello"],["co'o","goodbye"],["ro","each-of"],["ma","what"],["mo","is-what"],
    ["na","not"],["na'e","not"],["nai","-not"],["nelci","fond-of"],["ka","being"],["tu'a","about"],
    ["ie","yeah"],["e'u","I-suggest"],["e'a","[permission-granted]"],["pei","?"],
    ["e","and"],["enai","and-not"],["a","and/or"],
    ["jenai","and-not"],["je","and"],["ja","and/or"],
    ["gi'e",",-and"],["gi'a",",-and/or"],
    ["bu'u","at"],["ca","at-present"],
    ["ku",","],
    ["zo'u",":"],
    ["pe","that-is-related-to"],
    ["za'a","as-I-can-see"],["za'adai","as-you-can-see"],["pu","in-past"],["ba","in-future"],["vau","]"],["doi","oh"],["uinai","unfortunately"],["u'u","sorry"],
    ["ko","do-it-so-that-you"],["poi","that"],["noi",",which"],["me","among"],["ra","recently-mentioned"],
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
  const itemsu = [//universal glosses
    ["lu","<"],["li'u",">"],["i","."],["bo","-|-"],["sai","!"],["cai","!!!"],["na'e","!"],["da","X"],["de","Y"],["di","Z"],["cu",":"],["jo","⇔"],
    ["fa","(1:)"],["fe","(2:)"],["fi","(3:)"],["fo","(4:)"],["fu","(5:)"],
    ["se","1⇔2"],["te","1⇔3"],["ve","1⇔4"],["xe","1⇔5"],
    ["ba'e", "(NB!=>)"],
    ["na","!"]];
  lin=lin.toLowerCase();
    let i, myregexp, j;
    try{
      //from lojban to gloso

      if (check!==1){lin=run_camxes(lin.replace(/[^a-z'\. ]/g,''),2).replace(/h/g,"H").replace(/NF/g,"@nf").replace(/\bKU\b/g,"@ku").replace(/[^a-z@'\. ]/g,'').replace(/ {2,}/g," ").replace(/ ([nd]ai)( |$)/img,"$1$2").replace(/ @nf @ku\b/g,"@n").replace(/ @nf\b/g,"").trim();}
      lg(lin);
      lin=lin.split(" ");
      for (i=0;i<lin.length;i++){
      //if (xucmavo(lin[i])===true & check===1){}else{
            if (lng==='en'){//items are only for English. Think of some universal items.
            for (j=0;j<items.length;j++){
              myregexp = new RegExp(`^${items[j][0]}$`, "gim");
              if (lin[i].match(myregexp)!==null){
                  lin[i]=items[j][1].replace(/$/gm,"%%%");
              }
              else if(lin[i].replace(/@n$/,"").match(myregexp)!==null){//if noun not found
                  lin[i]=items[j][1].replace(/$/gm,"%%%");
              }
            }
            }
            for (j=0;j<itemsu.length;j++){//universal items, actually should use them later
              myregexp = new RegExp(`^${itemsu[j][0]}$`, "gim");
              if (lin[i].match(myregexp)!==null){
                  lin[i]=itemsu[j][1].replace(/$/gm,"%%%");
              }
            }
            lin[i]=lin[i].replace(/@n$/,"");
        let cnt = xmlDoc.get(`/dictionary/direction[1]/valsi[translate(@word,"${lin[i].toUpperCase()}","${lin[i]}")="${lin[i]}"]/glossword[1]`);
        if (typeof cnt==='undefined'){cnt = xmlDoc.get(`/dictionary/direction[1]/valsi[translate(@word,"${lin[i].toUpperCase()}","${lin[i]}")="${lin[i]}"]/keyword[@place="1"]`);}//try keyword
        if (typeof cnt!=='undefined'){lin[i]=cnt.attr("word").value().replace(/ /gm,"-").replace(/$/gm,"%%%");}
      }
      //}
      if(check===2){lin=lin.join(tersepli);}else{lin=lin.join(" ");}
      lin=lin.replace(/ /gm,"* ").replace(/$/gm,"*").replace(/%%%\*/gm,"");
      lin=lin.replace(/(@@@ .)/ig,v => v.toUpperCase()).replace(/@@@/ig,'');//uppercase for {la}
      lin=lin.replace(/,+ *\./g,'.');
      lin=lin.replace(/(^.)/ig,v => v.toUpperCase()).replace(/ +/ig,' ').replace(/( \. *[^ ])/ig,v => v.toUpperCase()).replace(/ \./ig,'.');//punctuation prettification
      lin=lin.replace(/-/g,' ');
      lin=lin.replace(/ *(:|,)/g,'$1');
      lin=lin.replace(/\*\*/g,'*');
      lin=lin.replace(/\@?\b([a-z']+?)\b\*/g,'');
      lin=lin.replace(/( \+\*){1,}/g,' +');
      lin=lin.replace(/ {2,}/g,' ').trim();
    }catch(err){lin='O_0';}
  return lin;
};

const rotpaci = lin => lin.trim().replace(/[a-zA-Z]/g,c => String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26));

//Stanford NLP
//var StanfordSimpleNLP = require('stanford-simple-nlp');
//var stanfordSimpleNLP = new StanfordSimpleNLP.StanfordSimpleNLP();
//stanfordSimpleNLP.loadPipelineSync();
/*
var stnlp = (source,socket,clientmensi,sendTo, lin) => {
  stanfordSimpleNLP.process(lin, (err, result) => {
    benji(source,socket,clientmensi,sendTo, JSON.stringify(result));
    });
};
*/
// LUJVO CONSTRUCTOR PART
const C="("+"[bcdfgjklmnprstvxz]"+")";
const V="("+"[aeiou]"+")";
// const Vy="("+"[aeiouy]"+")";
const CC="("+"[bcfgkmpsvx][lr]|[td]r|[cs][pftkmn]|[jz][bvdgm]|t[cs]|d[jz]"+")";
const C_C="("+"[bdgjvzcfkpstx][lrmn]|[lrn][bdgjvzcfkpstx]|b[dgjvz]|d[bgjvz]|g[bdjvz]|j[bdgv]|v[bdgjz]|z[bdgv]|c[fkpt]|f[ckpstx]|k[cfpst]|p[cfkstx]|s[fkptx]|t[cfkpsx]|x[fpst]|l[rmn]|r[lmn]|m[lrnbdgjvcfkpstx]|n[lrm]"+")";
const CxC="("+"[lmnr][bcdfgjkpstvx]|l[mnrz]|mn|n[lmrz]|r[lmnz]|b[dgjmnvz]|d[bglmnv]|g[bdjmnvz]|[jz][lnr]|v[bdgjmnz]|f[ckmnpstx]|k[cfmnpst]|p[cfkmnstx]|sx|t[fklmnpx]|x[fmnpst]"+")";
const CyC=`((${C})\\2|[bdgjvz][cfkpstx]|[cfkpstx][bdgjvz]|[cjsz]{2,2}|[ck]x|x[ck]|mz)`;
const CCV=`(${CC}${V})`;
const CVV=`(${C}(?:ai|au|ei|oi|${V}'${V}))`;
const CVC=`(${C}${V}${C})`;
const gism=`(${CC}${V}${C}|${C}${V}${C_C})`;

const zmifanva = (source, socket, clientm, sendTo, src, dir) => {
  const request = require("request");
  const uri=`http://lojban.lilyx.net/zmifanva/?src=${src}&dir=${dir}`;
    request.get(uri, (error, {statusCode}, body) => {
      if (!error && statusCode === 200) {
        const myRegexp = /<textarea rows=\"8\" cols=\"40\">(.*?)<\/textarea>/;
        const match = myRegexp.exec(body.replace(/\n/g,""));
        try{
          clientmensi.say(sendTo, match[1]);
        }catch(err){
          clientmensi.say(sendTo, "O_0");
        }
      }
    });
};

const cmaxes=function(){"use strict";function t(t,r){function e(){this.constructor=t}e.prototype=r.prototype,t.prototype=new e}function r(t,e,n,u){this.message=t,this.expected=e,this.found=n,this.location=u,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,r)}function e(t,e){function n(t,r,e){return{type:"class",parts:t,inverted:r,ignoreCase:e}}function u(){return{type:"any"}}function o(){return{type:"end"}}function s(t){return{type:"other",description:t}}function i(r){var e,n=Rr[r];if(n)return n;for(e=r-1;!Rr[e];)e--;for(n=Rr[e],n={line:n.line,column:n.column};e<r;)10===t.charCodeAt(e)?(n.line++,n.column=1):n.column++,e++;return Rr[r]=n,n}function l(t,r){var e=i(t),n=i(r);return{start:{offset:t,line:e.line,column:e.column},end:{offset:r,line:n.line,column:n.column}}}function c(t){kr<Mr||(kr>Mr&&(Mr=kr,Or=[]),Or.push(t))}function a(t,e,n){return new r(r.buildMessage(t,e),t,e,n)}function f(){var t,r,e,n=64*kr+0,u=Zr[n];if(u)return kr=u.nextPos,u.result;for(t=kr,r=[],e=v();e!==Ft;)r.push(e),e=v();return r!==Ft&&(zr=t,r=bt(r)),t=r,Zr[n]={nextPos:kr,result:t},t}function v(){var t,r,e=64*kr+1,n=Zr[e];return n?(kr=n.nextPos,n.result):(t=kr,r=x(),r!==Ft&&(zr=t,r=Ct(r)),t=r,Zr[e]={nextPos:kr,result:t},t)}function x(){var t,r,e,n,u,o,s,i,l,c,a,f=64*kr+2,v=Zr[f];return v?(kr=v.nextPos,v.result):(t=gt(),t===Ft&&(t=P(),t===Ft&&(t=kr,r=A(),r!==Ft&&(zr=t,r=jt(r)),t=r,t===Ft&&(t=kr,r=d(),r!==Ft&&(zr=t,r=kt(r)),t=r,t===Ft&&(t=kr,r=kr,e=kr,Tr++,n=d(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=kr,Tr++,u=p(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(u=kr,Tr++,o=A(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(o=kr,Tr++,s=kr,i=O(),i!==Ft?(l=ht(),l!==Ft?(c=_(),c!==Ft?(a=L(),a!==Ft?(i=[i,l,c,a],s=i):(kr=s,s=Ft)):(kr=s,s=Ft)):(kr=s,s=Ft)):(kr=s,s=Ft),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(s=g(),s!==Ft?(e=[e,n,u,o,s],r=e):(kr=r,r=Ft)):(kr=r,r=Ft)):(kr=r,r=Ft)):(kr=r,r=Ft)):(kr=r,r=Ft),r!==Ft&&(zr=t,r=zt(r)),t=r,t===Ft&&(t=kr,r=p(),r!==Ft&&(zr=t,r=Rt(r)),t=r))))),Zr[f]={nextPos:kr,result:t},t)}function P(){var t,r,e,n,u,o,s=64*kr+3,i=Zr[s];if(i)return kr=i.nextPos,i.result;if(t=kr,r=kr,e=kr,Tr++,n=F(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft){if(n=[],u=G(),u!==Ft)for(;u!==Ft;)n.push(u),u=G();else n=Ft;n!==Ft?(u=kr,Tr++,o=At(),Tr--,o!==Ft?(kr=u,u=void 0):u=Ft,u!==Ft?(e=[e,n,u],r=e):(kr=r,r=Ft)):(kr=r,r=Ft)}else kr=r,r=Ft;return r===Ft&&(r=F()),r!==Ft&&(zr=t,r=Mt(r)),t=r,Zr[s]={nextPos:kr,result:t},t}function d(){var t,r,e,n,u,o,s,i=64*kr+4,l=Zr[i];return l?(kr=l.nextPos,l.result):(t=kr,r=U(),r!==Ft?(e=kr,Tr++,n=D(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft?(n=kr,Tr++,u=B(),Tr--,u!==Ft?(kr=n,n=void 0):n=Ft,n!==Ft?(u=X(),u!==Ft?(o=kr,Tr++,s=pt(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft?(r=[r,e,n,u,o],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[i]={nextPos:kr,result:t},t)}function h(){var t,r,e,n,u,o,s=64*kr+5,i=Zr[s];if(i)return kr=i.nextPos,i.result;if(t=kr,r=w(),r!==Ft)if(e=H(),e!==Ft)if(n=kr,Tr++,u=D(),Tr--,u!==Ft?(kr=n,n=void 0):n=Ft,n!==Ft){for(u=[],o=I();o!==Ft;)u.push(o),o=I();u!==Ft?(r=[r,e,n,u],t=r):(kr=t,t=Ft)}else kr=t,t=Ft;else kr=t,t=Ft;else kr=t,t=Ft;return Zr[s]={nextPos:kr,result:t},t}function p(){var t,r,e,n=64*kr+6,u=Zr[n];return u?(kr=u.nextPos,u.result):(t=kr,r=h(),r!==Ft?(e=B(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[n]={nextPos:kr,result:t},t)}function A(){var t,r,e,n,u,o,s,i,l,c,a,f=64*kr+7,v=Zr[f];if(v)return kr=v.nextPos,v.result;if(t=kr,r=kr,Tr++,e=P(),Tr--,e===Ft?r=void 0:(kr=r,r=Ft),r!==Ft)if(e=kr,Tr++,n=kr,u=R(),u!==Ft?(o=kr,Tr++,s=D(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(s=_(),s!==Ft?(i=ht(),i===Ft&&(i=null),i!==Ft?(l=g(),l!==Ft?(u=[u,o,s,i,l],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft),n===Ft&&(n=kr,u=R(),u!==Ft?(o=kr,Tr++,s=D(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft?(s=_(),s!==Ft?(i=J(),i!==Ft?(u=[u,o,s,i],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft)),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft){if(n=kr,u=kr,Tr++,o=ht(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft){if(o=kr,Tr++,s=kr,i=ut(),i!==Ft){if(l=[],c=ut(),c!==Ft)for(;c!==Ft;)l.push(c),c=ut();else l=Ft;l!==Ft?(i=[i,l],s=i):(kr=s,s=Ft)}else kr=s,s=Ft;if(Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft)if(s=L(),s!==Ft){for(i=[],l=kr,c=Q(),c!==Ft?(a=ht(),a!==Ft?(c=[c,a],l=c):(kr=l,l=Ft)):(kr=l,l=Ft);l!==Ft;)i.push(l),l=kr,c=Q(),c!==Ft?(a=ht(),a!==Ft?(c=[c,a],l=c):(kr=l,l=Ft)):(kr=l,l=Ft);i!==Ft?(l=Q(),l!==Ft?(u=[u,o,s,i,l],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)}else kr=n,n=Ft;else kr=n,n=Ft}else kr=n,n=Ft;if(n===Ft)if(n=[],u=_(),u!==Ft)for(;u!==Ft;)n.push(u),u=_();else n=Ft;n!==Ft?(u=kr,Tr++,o=pt(),Tr--,o!==Ft?(kr=u,u=void 0):u=Ft,u!==Ft?(r=[r,e,n,u],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)}else kr=t,t=Ft;else kr=t,t=Ft;return Zr[f]={nextPos:kr,result:t},t}function g(){var t,r,e,n,u,o,s,i,l=64*kr+8,c=Zr[l];if(c)return kr=c.nextPos,c.result;for(t=kr,r=[],e=kr,n=z(),n===Ft&&(n=S(),n===Ft&&(n=C(),n===Ft&&(n=kr,u=kr,Tr++,o=m(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(o=j(),o!==Ft?(s=kr,Tr++,i=m(),Tr--,i===Ft?s=void 0:(kr=s,s=Ft),s!==Ft?(u=[u,o,s],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft)))),n!==Ft&&(zr=e,n=Ot(n)),e=n;e!==Ft;)r.push(e),e=kr,n=z(),n===Ft&&(n=S(),n===Ft&&(n=C(),n===Ft&&(n=kr,u=kr,Tr++,o=m(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(o=j(),o!==Ft?(s=kr,Tr++,i=m(),Tr--,i===Ft?s=void 0:(kr=s,s=Ft),s!==Ft?(u=[u,o,s],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft)))),n!==Ft&&(zr=e,n=Ot(n)),e=n;return r!==Ft?(e=kr,n=p(),n===Ft&&(n=Z()),n!==Ft&&(zr=e,n=Tt(n)),e=n,e===Ft&&(e=kr,n=k(),n===Ft&&(n=E(),n===Ft&&(n=b(),n===Ft&&(n=kr,u=T(),u!==Ft?(o=kr,Tr++,s=D(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft?(u=[u,o],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)))),n!==Ft?(u=J(),u!==Ft?(zr=e,n=Zt(n,u),e=n):(kr=e,e=Ft)):(kr=e,e=Ft)),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[l]={nextPos:kr,result:t},t}function m(){var t,r=64*kr+9,e=Zr[r];return e?(kr=e.nextPos,e.result):(t=p(),t===Ft&&(t=S(),t===Ft&&(t=E())),Zr[r]={nextPos:kr,result:t},t)}function y(){var t,r,e,n,u,o,s,i,l=64*kr+10,c=Zr[l];if(c)return kr=c.nextPos,c.result;for(t=kr,r=[],e=j();e!==Ft;)r.push(e),e=j();return r!==Ft?(e=Z(),e===Ft&&(e=kr,n=T(),n!==Ft?(u=kr,Tr++,o=D(),Tr--,o!==Ft?(kr=u,u=void 0):u=Ft,u!==Ft?(o=kr,Tr++,s=_(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(s=J(),s!==Ft?(n=[n,u,o,s],e=n):(kr=e,e=Ft)):(kr=e,e=Ft)):(kr=e,e=Ft)):(kr=e,e=Ft),e===Ft&&(e=C(),e===Ft&&(e=b(),e===Ft&&(e=kr,n=kr,u=T(),u!==Ft?(o=kr,Tr++,s=D(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft?(s=kr,Tr++,i=_(),Tr--,i===Ft?s=void 0:(kr=s,s=Ft),s!==Ft?(u=[u,o,s],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)):(kr=n,n=Ft),n===Ft&&(n=null),n!==Ft?(u=et(),u!==Ft?(o=_(),o!==Ft?(n=[n,u,o],e=n):(kr=e,e=Ft)):(kr=e,e=Ft)):(kr=e,e=Ft),e===Ft&&(e=z(),e===Ft&&(e=k())))))),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[l]={nextPos:kr,result:t},t}function w(){var t,r,e,n,u,o,s,i,l=64*kr+11,c=Zr[l];if(c)return kr=c.nextPos,c.result;if(t=kr,r=kr,Tr++,e=y(),Tr--,e===Ft?r=void 0:(kr=r,r=Ft),r!==Ft)if(e=kr,Tr++,n=A(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft)if(n=kr,Tr++,u=kr,o=kr,Tr++,s=y(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(s=ut(),s!==Ft?(i=y(),i!==Ft?(o=[o,s,i],u=o):(kr=u,u=Ft)):(kr=u,u=Ft)):(kr=u,u=Ft),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft)if(u=kr,Tr++,o=ht(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft)if(o=kr,Tr++,s=L(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft){for(s=[],i=N();i!==Ft;)s.push(i),i=N();s!==Ft?(r=[r,e,n,u,o,s],t=r):(kr=t,t=Ft)}else kr=t,t=Ft;else kr=t,t=Ft;else kr=t,t=Ft;else kr=t,t=Ft;else kr=t,t=Ft;return Zr[l]={nextPos:kr,result:t},t}function F(){var t,r,e,n,u,o,s,i=64*kr+12,l=Zr[i];if(l)return kr=l.nextPos,l.result;if(t=kr,r=kr,Tr++,e=ht(),Tr--,e===Ft?r=void 0:(kr=r,r=Ft),r!==Ft){for(e=[],n=Q(),n===Ft&&(n=V(),n===Ft&&(n=ht(),n===Ft&&(n=kr,u=ut(),u!==Ft?(o=kr,Tr++,s=At(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(u=[u,o],n=u):(kr=n,n=Ft)):(kr=n,n=Ft))));n!==Ft;)e.push(n),n=Q(),n===Ft&&(n=V(),n===Ft&&(n=ht(),n===Ft&&(n=kr,u=ut(),u!==Ft?(o=kr,Tr++,s=At(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(u=[u,o],n=u):(kr=n,n=Ft)):(kr=n,n=Ft))));e!==Ft?(n=ut(),n!==Ft?(u=kr,Tr++,o=At(),Tr--,o!==Ft?(kr=u,u=void 0):u=Ft,u!==Ft?(r=[r,e,n,u],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)}else kr=t,t=Ft;return Zr[i]={nextPos:kr,result:t},t}function E(){var t,r,e,n,u=64*kr+13,o=Zr[u];return o?(kr=o.nextPos,o.result):(t=kr,r=h(),r!==Ft?(e=ht(),e!==Ft?(n=_(),n!==Ft?(zr=t,r=Jt(r),t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),t===Ft&&(t=kr,r=kr,e=h(),e!==Ft?(n=L(),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),r!==Ft?(e=_(),e!==Ft?(zr=t,r=Nt(r),t=r):(kr=t,t=Ft)):(kr=t,t=Ft)),Zr[u]={nextPos:kr,result:t},t)}function S(){var t,r,e,n,u,o=64*kr+14,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=kr,e=kr,Tr++,n=N(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft?(n=w(),n!==Ft?(u=L(),u!==Ft?(e=[e,n,u],r=e):(kr=r,r=Ft)):(kr=r,r=Ft)):(kr=r,r=Ft),r!==Ft?(e=_(),e!==Ft?(n=ht(),n===Ft&&(n=null),n!==Ft?(zr=t,r=Nt(r),t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[o]={nextPos:kr,result:t},t)}function b(){var t,r,e,n,u=64*kr+15,o=Zr[u];return o?(kr=o.nextPos,o.result):(t=kr,r=U(),r===Ft&&(r=R()),r!==Ft?(e=kr,Tr++,n=D(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft?(n=_(),n!==Ft?(zr=t,r=Nt(r),t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[u]={nextPos:kr,result:t},t)}function C(){var t,r,e,n,u,o=64*kr+16,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=U(),r===Ft&&(r=R()),r!==Ft?(e=kr,Tr++,n=D(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=_(),n!==Ft?(u=ht(),u===Ft&&(u=null),u!==Ft?(zr=t,r=Nt(r),t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[o]={nextPos:kr,result:t},t)}function j(){var t,r,e,n,u,o,s,i,l,c,a=64*kr+17,f=Zr[a];return f?(kr=f.nextPos,f.result):(t=kr,r=kr,Tr++,e=C(),Tr--,e===Ft?r=void 0:(kr=r,r=Ft),r!==Ft?(e=kr,Tr++,n=b(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=kr,Tr++,u=z(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(u=kr,Tr++,o=k(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(o=T(),o!==Ft?(s=kr,Tr++,i=D(),Tr--,i===Ft?s=void 0:(kr=s,s=Ft),s!==Ft?(i=kr,Tr++,l=_(),Tr--,l===Ft?i=void 0:(kr=i,i=Ft),i!==Ft?(l=kr,Tr++,c=ht(),Tr--,c===Ft?l=void 0:(kr=l,l=Ft),l!==Ft?(r=[r,e,n,u,o,s,i,l],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[a]={nextPos:kr,result:t},t)}function k(){var t,r,e,n,u,o=64*kr+18,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=kr,e=U(),e!==Ft?(n=X(),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),r===Ft&&(r=T()),r!==Ft?(e=kr,Tr++,n=D(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft?(n=ht(),n!==Ft?(u=_(),u!==Ft?(zr=t,r=Nt(r),t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[o]={nextPos:kr,result:t},t)}function z(){var t,r,e,n,u,o,s=64*kr+19,i=Zr[s];return i?(kr=i.nextPos,i.result):(t=kr,r=kr,e=U(),e!==Ft?(n=X(),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),r===Ft&&(r=T()),r!==Ft?(e=kr,Tr++,n=D(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=ht(),n!==Ft?(u=_(),u!==Ft?(o=ht(),o===Ft&&(o=null),o!==Ft?(zr=t,r=Nt(r),t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[s]={nextPos:kr,result:t},t)}function R(){var t,r,e,n=64*kr+20,u=Zr[n];return u?(kr=u.nextPos,u.result):(t=kr,r=q(),r!==Ft?(e=ut(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[n]={nextPos:kr,result:t},t)}function M(){var t,r=64*kr+21,e=Zr[r];return e?(kr=e.nextPos,e.result):(t=R(),t===Ft&&(t=O()),Zr[r]={nextPos:kr,result:t},t)}function O(){var t,r,e,n=64*kr+22,u=Zr[n];return u?(kr=u.nextPos,u.result):(t=kr,r=et(),r!==Ft?(e=X(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[n]={nextPos:kr,result:t},t)}function T(){var t,r,e,n,u,o,s,i=64*kr+23,l=Zr[i];return l?(kr=l.nextPos,l.result):(t=M(),t===Ft&&(t=kr,r=ut(),r!==Ft?(e=kr,n=X(),n!==Ft?(u=kr,Tr++,o=D(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(o=ht(),o!==Ft?(s=X(),s!==Ft?(n=[n,u,o,s],e=n):(kr=e,e=Ft)):(kr=e,e=Ft)):(kr=e,e=Ft)):(kr=e,e=Ft),e===Ft&&(e=W()),e!==Ft?(n=kr,u=ct(),u!==Ft?(o=kr,Tr++,s=ut(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft?(u=[u,o],n=u):(kr=n,n=Ft)):(kr=n,n=Ft),n===Ft&&(n=kr,u=lt(),u!==Ft?(o=kr,Tr++,s=ct(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft?(u=[u,o],n=u):(kr=n,n=Ft)):(kr=n,n=Ft)),n===Ft&&(n=null),n!==Ft?(r=[r,e,n],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)),Zr[i]={nextPos:kr,result:t},t)}function Z(){var t,r,e,n,u,o,s,i,l=64*kr+24,c=Zr[l];return c?(kr=c.nextPos,c.result):(t=d(),t===Ft&&(t=kr,r=q(),r!==Ft?(e=kr,Tr++,n=D(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft?(n=ht(),n!==Ft?(u=kr,Tr++,o=B(),Tr--,o!==Ft?(kr=u,u=void 0):u=Ft,u!==Ft?(o=X(),o!==Ft?(s=kr,Tr++,i=pt(),Tr--,i!==Ft?(kr=s,s=void 0):s=Ft,s!==Ft?(r=[r,e,n,u,o,s],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)),Zr[l]={nextPos:kr,result:t},t)}function J(){var t,r,e,n,u,o=64*kr+25,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=kr,Tr++,e=B(),Tr--,e!==Ft?(kr=r,r=void 0):r=Ft,r!==Ft?(e=kr,n=ut(),n!==Ft?(u=W(),u!==Ft?(n=[n,u],e=n):(kr=e,e=Ft)):(kr=e,e=Ft),e===Ft&&(e=O()),e!==Ft?(n=kr,Tr++,u=pt(),Tr--,u!==Ft?(kr=n,n=void 0):n=Ft,n!==Ft?(r=[r,e,n],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[o]={nextPos:kr,result:t},t)}function N(){var t,r,e,n,u=64*kr+26,o=Zr[u];return o?(kr=o.nextPos,o.result):(t=kr,r=H(),r!==Ft?(e=kr,Tr++,n=D(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),t===Ft&&(t=I()),Zr[u]={nextPos:kr,result:t},t)}function U(){var t,r,e,n=64*kr+27,u=Zr[n];return u?(kr=u.nextPos,u.result):(t=kr,r=M(),r!==Ft?(e=ut(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[n]={nextPos:kr,result:t},t)}function q(){var t,r,e,n=64*kr+28,u=Zr[n];return u?(kr=u.nextPos,u.result):(t=kr,r=ut(),r!==Ft?(e=X(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[n]={nextPos:kr,result:t},t)}function B(){var t,r,e,n,u,o,s,i=64*kr+29,l=Zr[i];return l?(kr=l.nextPos,l.result):(t=kr,r=L(),r!==Ft?(e=kr,Tr++,n=_(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=Q(),n!==Ft?(u=kr,Tr++,o=P(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(o=kr,Tr++,s=pt(),Tr--,s!==Ft?(kr=o,o=void 0):o=Ft,o!==Ft?(r=[r,e,n,u,o],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[i]={nextPos:kr,result:t},t)}function D(){var t,r,e,n,u,o,s=64*kr+30,i=Zr[s];if(i)return kr=i.nextPos,i.result;for(t=kr,r=[],e=ut(),e===Ft&&(e=V());e!==Ft;)r.push(e),e=ut(),e===Ft&&(e=V());return r!==Ft?(e=ht(),e===Ft&&(e=null),e!==Ft?(n=_(),n===Ft&&(n=null),n!==Ft?(u=H(),u!==Ft?(o=At(),o!==Ft?(r=[r,e,n,u,o],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[s]={nextPos:kr,result:t},t}function G(){var t,r,e,n,u,o=64*kr+31,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=kr,Tr++,e=kr,n=L(),n!==Ft?(u=_(),u!==Ft?(n=[n,u],e=n):(kr=e,e=Ft)):(kr=e,e=Ft),Tr--,e===Ft?r=void 0:(kr=r,r=Ft),r!==Ft?(e=H(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),t===Ft&&(t=I()),Zr[o]={nextPos:kr,result:t},t)}function H(){var t,r,e,n,u,o=64*kr+32,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=L(),r!==Ft?(e=kr,Tr++,n=_(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=Q(),n!==Ft?(u=K(),u===Ft&&(u=null),u!==Ft?(r=[r,e,n,u],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[o]={nextPos:kr,result:t},t)}function I(){var t,r,e,n,u=64*kr+33,o=Zr[u];return o?(kr=o.nextPos,o.result):(t=kr,r=ut(),r!==Ft?(e=kr,Tr++,n=ot(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft?(n=K(),n!==Ft?(r=[r,e,n],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[u]={nextPos:kr,result:t},t)}function K(){var t,r,e,n,u,o=64*kr+34,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=kr,Tr++,e=G(),Tr--,e===Ft?r=void 0:(kr=r,r=Ft),r!==Ft?(e=ut(),e!==Ft?(n=kr,Tr++,u=G(),Tr--,u!==Ft?(kr=n,n=void 0):n=Ft,n!==Ft?(r=[r,e,n],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),t===Ft&&(t=kr,r=ot(),r===Ft&&(r=null),r!==Ft?(e=ut(),e===Ft&&(e=null),e!==Ft?(n=kr,Tr++,u=At(),Tr--,u!==Ft?(kr=n,n=void 0):n=Ft,n!==Ft?(r=[r,e,n],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)),Zr[o]={nextPos:kr,result:t},t)}function L(){var t,r,e,n,u,o,s,i,l=64*kr+35,c=Zr[l];return c?(kr=c.nextPos,c.result):(t=ht(),t===Ft&&(t=V(),t===Ft&&(t=kr,r=nt(),r===Ft&&(r=kr,e=kr,n=xt(),n!==Ft?(u=kr,Tr++,o=Pt(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(n=[n,u],e=n):(kr=e,e=Ft)):(kr=e,e=Ft),e===Ft&&(e=kr,n=vt(),n!==Ft?(u=kr,Tr++,o=lt(),o===Ft&&(o=st(),o===Ft&&(o=ct())),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(n=[n,u],e=n):(kr=e,e=Ft)):(kr=e,e=Ft)),e===Ft&&(e=null),e!==Ft?(n=at(),n===Ft&&(n=kr,u=dt(),u===Ft&&(u=ft(),u===Ft&&(u=kr,o=lt(),o!==Ft?(s=kr,Tr++,i=ct(),Tr--,i===Ft?s=void 0:(kr=s,s=Ft),s!==Ft?(o=[o,s],u=o):(kr=u,u=Ft)):(kr=u,u=Ft))),u!==Ft?(o=kr,Tr++,s=st(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(u=[u,o],n=u):(kr=n,n=Ft)):(kr=n,n=Ft),n===Ft&&(n=it())),n===Ft&&(n=null),n!==Ft?(u=st(),u===Ft&&(u=ct()),u===Ft&&(u=null),u!==Ft?(e=[e,n,u],r=e):(kr=r,r=Ft)):(kr=r,r=Ft)):(kr=r,r=Ft)),r!==Ft?(e=kr,Tr++,n=ut(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(r=[r,e,n],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft))),Zr[l]={nextPos:kr,result:t},t)}function Q(){var t,r,e,n,u=64*kr+36,o=Zr[u];return o?(kr=o.nextPos,o.result):(t=X(),t===Ft&&(t=W(),t===Ft&&(t=kr,r=_(),r!==Ft?(e=kr,Tr++,n=Q(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft))),Zr[u]={nextPos:kr,result:t},t)}function V(){var t,r,e,n,u,o=64*kr+37,s=Zr[o];return s?(kr=s.nextPos,s.result):(t=kr,r=tt(),r===Ft&&(r=rt()),r!==Ft?(e=kr,Tr++,n=Q(),Tr--,n!==Ft?(kr=e,e=void 0):e=Ft,e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(r=[r,e,n],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[o]={nextPos:kr,result:t},t)}function W(){var r,e,n,u,o,s,i=64*kr+38,l=Zr[i];return l?(kr=l.nextPos,l.result):(r=kr,e=kr,Ut.test(t.charAt(kr))?(n=t.charAt(kr),kr++):(n=Ft,0===Tr&&c(qt)),n!==Ft?(u=rt(),u!==Ft?(o=kr,Tr++,s=$(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(n=[n,u,o],e=n):(kr=e,e=Ft)):(kr=e,e=Ft)):(kr=e,e=Ft),e===Ft&&(e=kr,Bt.test(t.charAt(kr))?(n=t.charAt(kr),kr++):(n=Ft,0===Tr&&c(Dt)),n!==Ft?(u=tt(),u!==Ft?(o=kr,Tr++,s=Y(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(n=[n,u,o],e=n):(kr=e,e=Ft)):(kr=e,e=Ft)):(kr=e,e=Ft)),e!==Ft?(n=kr,Tr++,u=Q(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[i]={nextPos:kr,result:r},r)}function X(){var r,e,n,u,o=64*kr+39,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,Gt.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(Ht)),e!==Ft?(n=kr,Tr++,u=Q(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function Y(){var r,e=64*kr+40,n=Zr[e];return n?(kr=n.nextPos,n.result):(It.test(t.charAt(kr))?(r=t.charAt(kr),kr++):(r=Ft,0===Tr&&c(Kt)),Zr[e]={nextPos:kr,result:r},r)}function $(){var r,e=64*kr+41,n=Zr[e];return n?(kr=n.nextPos,n.result):(Lt.test(t.charAt(kr))?(r=t.charAt(kr),kr++):(r=Ft,0===Tr&&c(Qt)),Zr[e]={nextPos:kr,result:r},r)}function _(){var r,e,n,u,o,s,i=64*kr+42,l=Zr[i];return l?(kr=l.nextPos,l.result):(r=kr,Vt.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(Wt)),e!==Ft?(n=kr,Tr++,u=kr,o=kr,Tr++,s=_(),Tr--,s===Ft?o=void 0:(kr=o,o=Ft),o!==Ft?(s=Q(),s!==Ft?(o=[o,s],u=o):(kr=u,u=Ft)):(kr=u,u=Ft),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[i]={nextPos:kr,result:r},r)}function tt(){var r,e=64*kr+43,n=Zr[e];return n?(kr=n.nextPos,n.result):(Xt.test(t.charAt(kr))?(r=t.charAt(kr),kr++):(r=Ft,0===Tr&&c(Yt)),Zr[e]={nextPos:kr,result:r},r)}function rt(){var r,e,n=64*kr+44,u=Zr[n];return u?(kr=u.nextPos,u.result):(r=kr,$t.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(_t)),e!==Ft&&(zr=r,e=tr()),r=e,Zr[n]={nextPos:kr,result:r},r)}function et(){var t,r,e,n,u,o,s=64*kr+45,i=Zr[s];return i?(kr=i.nextPos,i.result):(t=kr,r=kr,Tr++,e=L(),Tr--,e!==Ft?(kr=r,r=void 0):r=Ft,r!==Ft?(e=ut(),e!==Ft?(n=ut(),n!==Ft?(u=kr,Tr++,o=ut(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(r=[r,e,n,u],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft)):(kr=t,t=Ft),Zr[s]={nextPos:kr,result:t},t)}function nt(){var t,r,e,n=64*kr+46,u=Zr[n];return u?(kr=u.nextPos,u.result):(t=kr,r=dt(),r!==Ft?(e=xt(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft),t===Ft&&(t=kr,r=ft(),r!==Ft?(e=vt(),e!==Ft?(r=[r,e],t=r):(kr=t,t=Ft)):(kr=t,t=Ft)),Zr[n]={nextPos:kr,result:t},t)}function ut(){var t,r=64*kr+47,e=Zr[r];return e?(kr=e.nextPos,e.result):(t=at(),t===Ft&&(t=ft(),t===Ft&&(t=vt(),t===Ft&&(t=xt(),t===Ft&&(t=dt(),t===Ft&&(t=ot()))))),Zr[r]={nextPos:kr,result:t},t)}function ot(){var t,r=64*kr+48,e=Zr[r];return e?(kr=e.nextPos,e.result):(t=st(),t===Ft&&(t=it(),t===Ft&&(t=lt(),t===Ft&&(t=ct()))),Zr[r]={nextPos:kr,result:t},t)}function st(){var r,e,n,u,o=64*kr+49,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,rr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(er)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function it(){var r,e,n,u,o=64*kr+50,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,nr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(ur)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function lt(){var r,e,n,u,o,s=64*kr+51,i=Zr[s];return i?(kr=i.nextPos,i.result):(r=kr,or.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(sr)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(u=kr,Tr++,o=nt(),Tr--,o===Ft?u=void 0:(kr=u,u=Ft),u!==Ft?(e=[e,n,u],r=e):(kr=r,r=Ft)):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[s]={nextPos:kr,result:r},r)}function ct(){var r,e,n,u,o=64*kr+52,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,ir.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(lr)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function at(){var r,e,n,u,o=64*kr+53,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,cr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(ar)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function ft(){var r,e,n,u,o=64*kr+54,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,fr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(vr)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function vt(){var r,e,n,u,o=64*kr+55,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,xr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(Pr)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function xt(){var r,e,n,u,o=64*kr+56,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,dr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(hr)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function Pt(){var r,e,n,u,o=64*kr+57,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,pr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(Ar)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function dt(){var r,e,n,u,o=64*kr+58,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,gr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(mr)),e!==Ft?(n=kr,Tr++,u=V(),Tr--,u===Ft?n=void 0:(kr=n,n=Ft),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function ht(){var r,e,n,u,o=64*kr+59,s=Zr[o];return s?(kr=s.nextPos,s.result):(r=kr,yr.test(t.charAt(kr))?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(wr)),e!==Ft?(n=kr,Tr++,u=Q(),Tr--,u!==Ft?(kr=n,n=void 0):n=Ft,n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),Zr[o]={nextPos:kr,result:r},r)}function pt(){var r,e,n,u=64*kr+60,o=Zr[u];return o?(kr=o.nextPos,o.result):(r=At(),r===Ft&&(r=kr,e=kr,Tr++,n=Q(),Tr--,n===Ft?e=void 0:(kr=e,e=Ft),e!==Ft?(n=x(),n!==Ft?(e=[e,n],r=e):(kr=r,r=Ft)):(kr=r,r=Ft),r===Ft&&(Fr.test(t.charAt(kr))?(r=t.charAt(kr),kr++):(r=Ft,0===Tr&&c(Er)))),Zr[u]={nextPos:kr,result:r},r)}function At(){var r,e,n=64*kr+61,u=Zr[n];return u?(kr=u.nextPos,u.result):(r=gt(),r===Ft&&(r=kr,Tr++,t.length>kr?(e=t.charAt(kr),kr++):(e=Ft,0===Tr&&c(Sr)),Tr--,e===Ft?r=void 0:(kr=r,r=Ft)),Zr[n]={nextPos:kr,result:r},r)}function gt(){var r,e,n,u=64*kr+62,o=Zr[u];if(o)return kr=o.nextPos,o.result;if(r=kr,e=[],br.test(t.charAt(kr))?(n=t.charAt(kr),kr++):(n=Ft,0===Tr&&c(Cr)),n!==Ft)for(;n!==Ft;)e.push(n),br.test(t.charAt(kr))?(n=t.charAt(kr),kr++):(n=Ft,0===Tr&&c(Cr));else e=Ft;return e!==Ft&&(zr=r,e=jr(e)),r=e,Zr[u]={nextPos:kr,result:r},r}function mt(t){if("string"==typeof t)return t;var r="";for(var e in t)r+=mt(t[e]);return r}function yt(t){if("string"==typeof t)return t;var r=[];for(var e in t)r.push(yt(t[e]));return r}e=void 0!==e?e:{};var wt,Ft={},Et={text:f},St=f,bt=function(t){return yt(t)},Ct=function(t){return t},jt=function(t){return["cmavo",mt(t)]},kt=function(t){return["gismu",mt(t)]},zt=function(t){return["lujvo",mt(t)]},Rt=function(t){return["fu'ivla",mt(t)]},Mt=function(t){return["cmevla",mt(t)]},Ot=function(t){return[mt(t),"-"]},Tt=function(t){return[mt(t)]},Zt=function(t,r){return[mt(t),"-",mt(r)]},Jt=function(t){return[mt(t),""]},Nt=function(t){return[mt(t),""]},Ut=/^[a]/,qt=n(["a"],!1,!1),Bt=/^[aeo]/,Dt=n(["a","e","o"],!1,!1),Gt=/^[aeiou]/,Ht=n(["a","e","i","o","u"],!1,!1),It=/^[i]/,Kt=n(["i"],!1,!1),Lt=/^[u]/,Qt=n(["u"],!1,!1),Vt=/^[y]/,Wt=n(["y"],!1,!1),Xt=/^[i\u0269]/,Yt=n(["i","ɩ"],!1,!1),$t=/^[uw]/,_t=n(["u","w"],!1,!1),tr=function(){return["u",""]},rr=/^[l]/,er=n(["l"],!1,!1),nr=/^[m]/,ur=n(["m"],!1,!1),or=/^[n]/,sr=n(["n"],!1,!1),ir=/^[r]/,lr=n(["r"],!1,!1),cr=/^[pfbgvkx]/,ar=n(["p","f","b","g","v","k","x"],!1,!1),fr=/^[d]/,vr=n(["d"],!1,!1),xr=/^[jz]/,Pr=n(["j","z"],!1,!1),dr=/^[cs]/,hr=n(["c","s"],!1,!1),pr=/^[x]/,Ar=n(["x"],!1,!1),gr=/^[t]/,mr=n(["t"],!1,!1),yr=/^[,']/,wr=n([",","'"],!1,!1),Fr=/^[}]/,Er=n(["}"],!1,!1),Sr=u(),br=/^[^a-zA-Z,']/,Cr=n([["a","z"],["A","Z"],",","'"],!0,!1),jr=function(t){return["space",mt(t)]},kr=(n([" "],!0,!1),0),zr=0,Rr=[{line:1,column:1}],Mr=0,Or=[],Tr=0,Zr={};if("startRule"in e){if(!(e.startRule in Et))throw new Error("Can't start parsing from rule \""+e.startRule+'".');St=Et[e.startRule]}if(wt=St(),wt!==Ft&&kr===t.length)return wt;throw wt!==Ft&&kr<t.length&&c(o()),a(Or,Mr<t.length?t.charAt(Mr):null,Mr<t.length?l(Mr,Mr+1):l(Mr,Mr))}return t(r,Error),r.buildMessage=function(t,r){function e(t){return t.charCodeAt(0).toString(16).toUpperCase()}function n(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+e(t)})}function u(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+e(t)})}function o(t){return l[t.type](t)}function s(t){var r,e,n=new Array(t.length);for(r=0;r<t.length;r++)n[r]=o(t[r]);if(n.sort(),n.length>0){for(r=1,e=1;r<n.length;r++)n[r-1]!==n[r]&&(n[e]=n[r],e++);n.length=e}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function i(t){return t?'"'+n(t)+'"':"end of input"}var l={literal:function(t){return'"'+n(t.text)+'"'},"class":function(t){var r,e="";for(r=0;r<t.parts.length;r++)e+=t.parts[r]instanceof Array?u(t.parts[r][0])+"-"+u(t.parts[r][1]):u(t.parts[r]);return"["+(t.inverted?"^":"")+e+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};return"Expected "+s(t)+" but "+i(r)+" found."},{SyntaxError:r,parse:e}}();

const xuvalsi = (str, type) => {
  let j;let re;
  if (type!=='cmavo-compound'){
    re = new RegExp(`^${type},[^,]+$`);
    }
    else{
    re = new RegExp("^cmavo,([^,]+)([^,]+,[^,]+)+$");
    }
  try{j = cmaxes.parse(str.toLowerCase().replace(/,/g,'')).toString();
  }catch(e){j='';}
  return j.match(re)!==null ? true : false;
};
const xugismu = str => xuvalsi (str,"gismu");
const xulujvo = str => xuvalsi (str,"lujvo");
const xufuhivla = str => xuvalsi (str,"fu'ivla");
// const xucmavo = str => xuvalsi (str,"cmavo");
// const xucmavogunma = str => xuvalsi (str,"cmavo-compound");
// const xucmevla = str => xuvalsi (str,"cmevla");

//now split
const jvokatna = lujvoi => {
  let tmp;
  tmp=lujvoi.toLowerCase().replace(/[^a-z']/img,"");
  const myregexp = new RegExp(`^(${CVV})[rn]`, "gm");
  const myregexpi = new RegExp(`(${gism}${V}$|${gism}(?=y)|${CVV}|${CCV}|${CVC})`,"g");
  tmp=tmp.replace(myregexp,"$1 ");
  tmp=tmp.replace(myregexpi,"$1 ");
  tmp=tmp.replace(/y/g," ");
  tmp=tmp.replace(/ +/g," ");
  tmp=tmp.replace(/ '/g," "); 
return tmp.trim();
};
const rafyjongau = raf => {//join given rafsi into a lujvo
  let lujvo='';
  let lihenraf='';
  for (let i=0; i<raf.length;i++){
    let my = new RegExp(`^${gism}$`, "gm");
    if ((raf[i].match(my)||[]).length===1 && i!==raf.length-1){
      raf[i]=`${raf[i]}y`;
    }
    if (lihenraf!==''){
      const pa=lihenraf.substr(lihenraf.length-1);
      const re=raf[i].substr(0,1);
      const pare=pa+re;
      my = new RegExp(`^${CyC}$`, "gm");
      if (pare.match(my)){raf[i]=`y${raf[i]}`;}
      if (pa==="n" && (raf[i].match(/^(?:d[jz]|t[cs])/)!==null)){raf[i]=`y${raf[i]}`;}
    }else
    {
      my = new RegExp(`^${CVV}$`, "gm");
      const myt = new RegExp(`^${CCV}$`, "gm");
      if ((raf[i].match(my)||[]).length===1 && (raf.length>2 || ((raf[1].match(myt)||[]).length===0))){
        if (raf[1].substr(0,1)==='r'){raf[i]=`${raf[i]}n`;}else{raf[i]=`${raf[i]}r`;}
      }
    }
    lihenraf=raf[i];
    lujvo=lujvo+raf[i];
    
  }
  
  // tosmabru test
  let myg = new RegExp(`^(${CVC}+)(?:(${C})${V}${CC}${V}|(${C})${V}${C}y.+)$`,"m");
  if (lujvo.match(myg)!==null){
    //If there aren't at least two CVCs before a 'y', no hyphen is needed.
    const pre=lujvo.match(myg)[1];
    let next;if (typeof lujvo.match(myg)[7]!=='undefined'){next=lujvo.match(myg)[7];}else{next=lujvo.match(myg)[12];}
    next=pre.substr(pre.length-1) + next;
    myg = new RegExp(CxC,"gm");
    let myrg = new RegExp(CC,"");
    if (pre.match(myg)===null && next.match(myrg)!==null){myrg= new RegExp(`(${C})(${C})`,"m");lujvo=lujvo.replace(myrg,"$1y$3");}
  }
  return lujvo;
};

const jvomre = int => {
  //lujvo scorer
  // Remember, the goal is to get as low a score as possible.
  const lujvo = int;
  const l = lujvo.length;
  const a=(lujvo.match(/'/gm)||[]).length;
  let h=(lujvo.match(/[yY]/gm)||[]).length;
  let reg=new RegExp(`^${CVV}[rn]${C}`,"g");
  h=h+(lujvo.match(reg)||[]).length;
  let r = 0;
  const ar=jvokatna(lujvo).split(" ");
  for (let i=0;i<ar.length;i++)
  {
  reg = new RegExp (`^${C}${V}${C}${C}${V}$`,"g"); if (ar[i].match(reg)!==null){ r += 1;}
  reg = new RegExp (`^${C}${V}${C}${C}$`,"g"); if (ar[i].match(reg)!==null){ r += 2;}
  reg = new RegExp (`^${CC}${V}${C}${V}$`,"g"); if (ar[i].match(reg)!==null){ r += 3;}
  reg = new RegExp (`^${CC}${V}${C}$`,"g"); if (ar[i].match(reg)!==null){ r += 4;}
  reg = new RegExp (`^${CVC}$`,"g"); if (ar[i].match(reg)!==null){ r += 5;}
  reg = new RegExp (`^${C}${V}'${V}$`,"g"); if (ar[i].match(reg)!==null){ r += 6;}
  reg = new RegExp (`^${CCV}$`,"g"); if (ar[i].match(reg)!==null){ r += 7;}
  reg = new RegExp (`^${C}(?:[aeo]i|au)$`,"g"); if (ar[i].match(reg)!==null){ r += 8;}
  }
  const vowels=(lujvo.match(/[aeiouAEIOU]/gm)||[]).length;
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
    const result = [];
    const allCasesOfRest = cartProd(arr.slice(1));  // recur with the rest of array
    for (const c in allCasesOfRest) {
      for (let i = 0; i < arr[0].length; i++) {
        result.push(`${arr[0][i]} ${allCasesOfRest[c]}`);
      }
    }
    return result;
  }

}
/// LUJVO CONSTRUCTOR PART END

const rafsiselfu = (
  lin,
  //only from brivla to rafsi, returns a string of rafsi
  last
) => {
let coun = xmlDocEn.find(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/rafsi/text()[1]`);
if (coun.length===0)
{
try{coun=xmlDocEn.get(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/notes[1]`).text(); const tmp=coun.replace(/^.*?-([a-z']+)-.*/,'$1');if (tmp!==coun){coun=tmp;}else{coun='';}}catch(err){coun='';}
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
const triz=(inp, flag, lng, xmlDoc) => {
  if (typeof lng==='undefined'){lng='en';}
  if (typeof xmlDoc==='undefined'){
    if (lng==="en"){xmlDoc=xmlDocEn;}else{xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"../dumps",`${lng}.xml`),{encoding: 'utf8'}));}
  }
  let sep = " ";if(flag===1){sep = tersepli;}
  const ar=inp.trim().split(sep);
  for(let l=0;l<ar.length;l++){
    if (l===ar.length-1){
    ar[l]=rafsiselfu(ar[l],1).split(" ");}else{
    ar[l]=rafsiselfu(ar[l],0).split(" ");
    }
  }
  //we have ar, an array of arrays
  const cart=cartProd(ar);
  //
  const sey =[];
  for (let i = 0; i < cart.length; i++)
  {
    sey.push([cart[i]]);
    sey[i].push(rafyjongau(cart[i].split(" ")));
    sey[i].push(jvomre(sey[i][1]));
  }
  sey.sort(sortFunction);
  let si='';
  for (i=0;i<cart.length;i++)
  {
    if (xulujvo(sey[i][1])===true){
      si+=`${sey[i][1]}[${sey[i][2]}] `;
    }
  }
  let tor='';
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
  if (tor!==''){si+=`\n${tor}`;}
  if (flag===1){ljv=si;si=tor;}
  return si;
};

const selrafsi = lin => {
  let rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[rafsi="${lin}"]`);
  //now try -raf- in notes
  if (typeof rev==='undefined'){rev =  xmlDocEn.get(`/dictionary/direction[1]/valsi[contains(translate(./notes,"${lin.toUpperCase()}","${lin}")," -${lin}-")]`);}
  //now try to add a vowel
  if (typeof rev==='undefined'){rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}a" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);}
  if (typeof rev==='undefined'){rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}e" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);}
  if (typeof rev==='undefined'){rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}i" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);}
  if (typeof rev==='undefined'){rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}o" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);}
  if (typeof rev==='undefined'){rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}u" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);}
  //may be it's already a word? then just return it.
  if (typeof rev!=='undefined'){rev=rev.attr("word").value();}else{if (xugismu(lin)===true||xufuhivla(lin)===true){rev=lin;}else{rev=`${lin}*`;}}
  return rev;
};

const katna= (lin, lng, flag, xmlDoc) => {
  lin=jvokatna(lin).split(" ");
  for (let o=0;o<lin.length;o++){
    lin[o]=selrafsi(lin[o],xmlDoc);
  }
  lin = lin.join(tersepli);
  if (flag!==1 && (lng!=='jbo')){lin = `${lin} ≈ ${gloso(lin,lng,1,xmlDoc)}`;}
  return lin;
};

const sutysiskuningau = (lng, lojbo) => {//write a new file parsed.js that would be used by la sutysisku
  if (typeof lng==='undefined'){lng='en';}
  const xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"../dumps",`${lng}.xml`),{encoding: 'utf8'}).replace(/(&lt;|<)script.*?(&gt;|>).*?(&lt;|<)/g,"&lt;").replace(/(&lt;|<)\/script(&gt;|>)/g,""));
  let pars='var documentStore = [';
  const rev = xmlDoc.find("/dictionary/direction[1]/valsi");
  for (let i=0;i<rev.length;i++) {
    const hi=rev[i].attr("word").value().replace("\\","\\\\");
    //q=run_camxes(hi,3).toString().replace(/h/g,"H").replace(/[^a-z \.\,'\n]/g,"").replace(/ +/g," ").replace(/ +\n/g,"\n"); if(q.indexOf("SyntaxError">=0))
    pars+=`{"w":"${hi}"`;
    try{
      //if(rev[i].attr("type").value()!=='gismu' && xucmavogunma(hi)===false && xucmevla(hi)===false && xucmavo(hi)===false && xulujvo(hi)===false && xufuhivla(hi)===false){
        pars+=`,"t":"${rev[i].attr("type").value().replace(/\\/g,"\\\\")}"`;
      //}
    }catch(err){}
    try{pars+=`,"s":"${rev[i].find("selmaho[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")}"`;}catch(err){}
    try{pars+=`,"d":"${rev[i].find("definition[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")}"`;}catch(err){}
    try{pars+=`,"n":"${rev[i].find("notes[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")}"`;}catch(err){}
    try{pars+=`,"g":"${rev[i].find("glossword/@word").join(";").replace(/ word=\"(.*?)\"/g,"$1").replace(/"/g,"'").replace("\\","\\\\")}"`;}catch(err){}
    try{pars+=`,"k":"${rev[i].find("related[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")}"`;}catch(err){}
      try{
        const ex = rev[i].find("example").toString().replace(/>,</g,">%<").replace(/<example phrase=\"(.*?)\">(.*?)<\/example>/g,"$1 — $2").replace(/"/g,"'").replace(/\\/g,"\\\\");
        if (ex!==''){
        pars+=`,"e":"${ex}"`;
        }
      }catch(err){}
    let ra=rev[i].find("rafsi//text()[1]");
    if (lojbo!==0 && xugismu(hi)===true){
      ra.push(hi);
      if(hi.indexOf("brod")!==0){ra.push(hi.substr(0,4));}
      if(hi.indexOf("broda")===0){ra.push("brod");}
    }
    ra=ra.join("\",\"");
    
    if (ra.length!==0){pars+=`,"r":["${ra}"]`;}//else{pars+=",\"rafsi\":[]";}//not needed anymore due to gleki's fixes
    pars+="}";
    if (i<rev.length-1){pars+=",\n";}//\n
  }
  pars+="];\n";
  let t = path.join(__dirname,"../i/data",`parsed-${lng}.js`);
  fs.writeFileSync(`${t}.temp`,pars);
  fs.renameSync(`${t}.temp`,t);
  t = path.join(__dirname,`../i/${lng}/`,"webapp.appcache");
  const d = new Date();
  let n = d.getDate();
  if((n===1)||(n===11)||(n===21)){
    try{
      n = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      pars=fs.readFileSync(t,{encoding: 'utf8'});
      pars = pars.replace(/\n# .+\n/,`\n# ${n}\n`);
      pars = pars.replace(/\n\.\.\/lib.fullproof.+\n/g,"\n");
      fs.writeFileSync(t,pars);
      lg(`${t} updated`);
    }catch(err){}
  }
};

const tcepru = (lin, sendTo, source, socket) => {
  const exec = require('child_process').exec;
  exec(`${path.join(__dirname,"../tcepru/./parser")} <<<"${lin}" 2>/dev/null`, (error, stdout, stderr) => {
  lin=stdout;
  if (error !==null){lin='O_0' + stderr.toString();}
  benji(source,socket,clientmensi,sendTo, lin.replace(/\n/g,' ').replace(/ {2,}/g,' '));
  });
};

const jbofihe = (lin, sendTo, source, socket) => {
  const exec = require('child_process').exec;
  exec(`${path.join(__dirname,"../jbofihe/./jbofihe")} -ie -cr <<<"${lin}" 2>/dev/null`, (error, stdout, stderr) => {
  lin=stdout;
  if (error !==null){lin='O_0' + stderr.toString();}
  benji(source,socket,clientmensi,sendTo, lin.replace(/\n/g,' ').replace(/ {2,}/g,' '));
  });
};

const pseudogismu = () => {//a joke function. checks if an English word is  a valid gismu
  const words = fs.readFileSync(path.join(__dirname,"../","vale.txt"),'utf8').split("\n");
  const sj=[];
  let f;
  for (let j=0;j<words.length;j++){
      f=run_camxes(words[j].toLowerCase().replace(/sh/g,"c"),3).toString();
      if(f.indexOf("yntax")===-1){sj.push(`${words[j]} ${f}`);}
  }
  fs.writeFileSync(path.join(__dirname,"../","vale-result"),sj.join("\n"));
};
//pseudogismu();

const prettifylojbansentences = () => {//insert spaces to lojban sentences
  const words = fs.readFileSync(path.join(__dirname,"../","eikatna.txt"),'utf8').split("\n");
  const sj=[];
  for (let j=0;j<words.length;j++){
    sj.push(run_camxesoff(words[j],3));
  }
  fs.writeFileSync(path.join(__dirname,"../","sekatna.txt"),sj.join("\n").replace(/h/g,"H").replace(/[^a-z \.\,'\n]/g,"").replace(/ +/g," ").replace(/ +\n/g,"\n"));
  return 'mulno';
};

const zeizei = text => {//insert spaces to lojban sentences, split lujvo into zo zei zei lujvo
text=run_camxes(text,3).toString();
  try{if (text.indexOf("SyntaxError")<0){
    text=text.replace(/[a-z]+`/g,"").replace(/[a-z]+_[a-z]+/ig,"").replace(/h/g,"H").replace(/[^a-z \.\,'\n]/g,"").replace(/ +/g," ").replace(/ +\n/g,"\n");
    const sj=text.split(" ");
    for (let j=0;j<sj.length;j++){
      if (xulujvo(sj[j])===true){
      sj[j]=katna(sj[j],"en",1,xmlDocEn);
      if (sj[j].search(/^((se|te|ve|xe|na'e|je'a|to'e) )+[^ ]+$/)===0){
        sj[j]=sj[j].replace(/ /g," ");
      }
      else{sj[j]=sj[j].replace(/ /g," zei ");}
      }
    }
    text = sj.join(" ").trim();
  }else{text='O_0';}}catch(e){}
return text;
};

const anji = text => {
  const anj= require('./anji.js');
  const anjarr = anj.anjik();
  let myregexp;

  text=zeizei(text).replace(/'/g,"h");
  for (let j=0;j<anjarr.length;j++){
    myregexp = new RegExp(`\\b${anjarr[j][0]}\\b`, "gim");
    text=text.replace(myregexp,anjarr[j][1]);
  }
return text;
};

const tersmu = (lin, sendTo, source, socket) => {
  const anj= require('../tersmu/all.js');
  //module.exports.ma = h$main;
  benji(source,socket,clientmensi,sendTo, anj.h$main(lin));
};

const mensimikce = text => {//eliza bot analog
  let Mensibot = require('../mikce/mensimikce.js');
  //Mensibot.start(); // initializes Mensi and returns a greeting message
  const r = Mensibot.reply(text).toString();
  Mensibot = null;
  return r;
};

//mahantufa
const ningaumahantufa = (text, socket) => {
  const fs = require("fs");
  const PEG = require("pegjs");
  const UglifyJS = require("uglify-js");
  //write file
  const whichfile = text.substr(0,text.indexOf(' '));
  text = text.substr(text.indexOf(' ')+1);
  const t = path.join(__dirname,`.${whichfile}.peg`);
  lg(text);
  fs.writeFileSync(t,text);
  // // read peg and build a parser
  const camxes_peg = fs.readFileSync(`${whichfile}.peg`).toString();
  try{
    const camxes = PEG.generate(camxes_peg, {cache: true, trace: false, output: "source", allowedStartRules: ["text"]});
    // // write to a file
    const fd = fs.openSync(whichfile, 'w+');
    let buffer = new Buffer('var camxes = ');
    fs.writeSync(fd, buffer, 0, buffer.length);
    buffer = new Buffer(camxes);
    fs.writeSync(fd, buffer, 0, buffer.length);
    buffer = new Buffer("\n\nmodule.exports = camxes;\n\nterm = process.argv[2];\nif (term !== undefined && typeof term.valueOf() === 'string')\n  lg(JSON.stringify(camxes.parse(term)));\n\n");
    fs.writeSync(fd, buffer, 0, buffer.length);
    fs.close(fd);
    const ya = UglifyJS.minify(whichfile).code;
    fs.writeFileSync(whichfile, ya);
    socket.emit('returner', {message: "snada", data_js: ya});
  }
  catch(e){socket.emit('returner', {message: e.message});}
};

const getmahantufagrammar = (name, socket) => {
  const fs = require("fs");
  const grammar_file = fs.readFileSync(path.join(__dirname, `${name}.peg`)).toString();
  const grammar_file_js = fs.readFileSync(path.join(__dirname, name)).toString();
  try{
    socket.emit('returner_file', {message: "snada", data: grammar_file, data_js: grammar_file_js});
  }
  catch(e){
    socket.emit('returner_file', {message: "fliba", data: e.message});
  }
};

const updatexmldumps = callback => {
  const velruhe = { cfari: {}, mulno: {}, nalmulselfaho: {} };
  //try{
    const langs=["jbo","en","ru","es","fr","ja","de","eo","zh","en-simple","fr-facile","hu","sv"];
    let request = require("request");
    request = request.defaults({jar: true, strictSSL: false});
    const jar = request.jar();
    const cookie = request.cookie("jbovlastesessionid=U2FsdGVkX1%2FpiXtl1FSyMUZvFTudUq0N59YatQesEbsfdQ6owwMDeA%3D%3D");
    langs.forEach(thisa => {
      velruhe.cfari[thisa] = true;
      const uri=`http://jbovlaste.lojban.org/export/xml-export.html?lang=${thisa}`;
      jar.setCookie(cookie, uri);
      const t = path.join(__dirname,"../dumps",`${thisa}.xml`);
      request({
        uri, method: "GET", jar
        }).on("error", () => {
        velruhe.nalmulselfaho[thisa] = true;
        delete velruhe.cfari[thisa];
        if (callback && Object.keys(velruhe.cfari).length === 0) {
          callback(velruhe);
        }
      }).pipe(fs.createWriteStream(`${t}.temp`)).on("finish", () => {
        //let ij;
        try{//validate xml
          //ij = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"../dumps",`${thisa}.xml.temp`),{encoding: 'utf8'}));
          fs.renameSync(`${t}.temp`, t);lg(`${thisa} updated`);
          velruhe.mulno[thisa] = true;
          if (thisa === "en") {
            xmlDocEn = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"../dumps","en" + ".xml"),{encoding: 'utf8'}));
          }
          delete velruhe.cfari[thisa];
          sutysiskuningau(thisa);
          //global.gc();
        }catch(err){velruhe.nalmulselfaho[thisa] = true;delete velruhe.cfari[thisa];}
        //ij='';
        if (callback && Object.keys(velruhe.cfari).length === 0) {
        callback(velruhe);
        }
      }); 
    });
    // const http = require('http');
    /*
    langs.forEach(function(thisa) {//now update pdf
      var uri="http://jbovlaste.lojban.org/export/latex-export.html?lang="+thisa;
      jar.setCookie(cookie, uri);
      request({uri: uri,method: "GET",jar: jar}, function(err, response, body) {
        if(err) {lg(err);}
        else{
          lg(body.substring(0,100));
          var urli=body.replace(/\n/igm,'').match(/\"(\/jbovlaste_export\/.*?\/.*?\.pdf)\"/i)[1];
          //lg(urli);
          //gm,"http://jbovlaste.lojban.org$1");//now get the pdf itself
          var content = fs.createWriteStream(path.join(__dirname,"../dumps","lojban-" + thisa + ".pdf"));
          var request = http.get(urli, function(response) {
            response.pipe(content);
          }).on('error', function(err) {
            lg("when updating " + thisa + " pdf: " + err);
          });
        }
      });
    });*/
  //}catch(err){lg('Error when autoupdating: ' + err);}
  //sutysiskuningau("ithkuil");
  sutysiskuningau("2002",0);
  sutysiskuningau("en-pt-BR",0);
  sutysiskuningau("zamenhofo",0);
  sutysiskuningau("laadan",0);
  sutysiskuningau("ile",0);
  sutysiskuningau("toki",0);
  sutysiskuningau("ldp",0);
  //updategloss();# not yet ready function
};

setInterval(() => {updatexmldumps();}, 3*86400000); //update logs once a djedi

const processormensi = (clientmensi, from, to, text, message, source, socket) => {
  let ret;
  if (!text) return;
  let sendTo = from; // send privately
  if (~to.indexOf('#')) {
    sendTo = to; // send publicly
  }
  if (text.match(/^<(.*?)>: /,'')!==null){//dealing with Slack
    from = text.match(/^<(.*?)>: /,'')[1];
    text = text.replace(/^<.*?>: /,"");
  }
    //notci functions first:
  if (text.indexOf(`${replier}: tell `) === 0){
    text = text.substr(12).trim().replace("\\t"," ").replace(" ","\t");
    switch(true) {
    case from.match(text.substr(0, text.indexOf('\t')))!==null: benji(source,socket,clientmensi,sendTo,`${from}: e'u do cusku di'u lo nei si'unai`);break;
    case text.substr(0, text.indexOf('\t'))===replier: benji(source,socket,clientmensi,sendTo,`${from}: xu do je'a jinvi lodu'u mi bebna i oi`);break;
    default:
    const d = new Date();notci.push(`${from.replace(/^\.+/,"").replace(/\.+$/,"").trim()}\t${text} | ${d.toISOString()}`);benji(source,socket,clientmensi,sendTo,`${from}: mi ba benji di'u ba lo nu la'o gy. ${text.substr(0, text.indexOf('\t'))} .gy. di'a cusku da`);
    fs.writeFile(notcijudri, notci.join("\n"));break;
    }
  }
    //notci functions in lojban as an alternative:
  if (text.indexOf(`${replier}: doi `) === 0){
    text = text.substr(11).trim().replace(/^la /,'').replace("\\t"," ").replace(" ","\t");
    switch(true) {
    case from.match(text.substr(0, text.indexOf('\t')))!==null: benji(source,socket,clientmensi,sendTo,`${from}: e'u do cusku di'u lo nei si'unai`);break;
    case text.substr(0, text.indexOf('\t'))===replier: benji(source,socket,clientmensi,sendTo,`${from}: xu do je'a jinvi lodu'u mi bebna i oi`);break;
    default:
    const ds = new Date();notci.push(`${from.replace(/^\.+/,"").replace(/\.+$/,"").trim()}\t${text} | ${ds.toISOString()}`);benji(source,socket,clientmensi,sendTo,`${from}: mi ba benji di'u ba lo nu la'o gy.${text.substr(0, text.indexOf('\t'))}.gy. di'a cusku da`);
    fs.writeFile(notcijudri, notci.join("\n"));break;
    }
  }
  //now send back part
    for (let l=0;l<notci.length;l++){
      //sendTo
      if (notci[l].length === 0) continue; // prevent a crash if the line is empty
      let cmenepagbu=notci[l].split("\t");//.substr(0, notci[l].indexOf('\t'));
      let sem;
      try{sem = new RegExp(cmenepagbu[1].toLowerCase(), "gim");}catch(err){sem='';}
      if (from.match(sem)!==null)
      {
        cmenepagbu=notci[l].split("\t");
        benji(source,socket,clientmensi,sendTo,(`${from}: cu'u la'o gy.${cmenepagbu[0]}.gy.: ${cmenepagbu[2]}`).replace(/(.{190,250})(, |[ \.\"\/])/g,'$1$2\n'));
        notci.splice(l,1);l=l-1;
        fs.writeFile(notcijudri, notci.join("\n"));
      }
    }
    // 
    ///
    const txt = text.toLowerCase();
    switch(true) {
    //case txt.search(/ie( |)(nai( |)|)pei/) >= '0': benji(source,socket,clientmensi,sendTo, ext(tugni));break;
    //case txt.search(/\bna nelci/) >= '0': benji(source,socket,clientmensi,sendTo, ext(nelci));break;
    //case txt.indexOf("lmw:") === 0: lmw(text.substr(4),sendTo);break;
    case txt.trim() === '#ermenefti': benji(source,socket,clientmensi,sendTo, "https://mw.lojban.org/papri/Hermeneutics");break;
    case txt.trim() === '#slak': benji(source,socket,clientmensi,sendTo, "https://slaka.herokuapp.com");break;
    case txt.trim() === '#telegram': benji(source,socket,clientmensi,sendTo, "#lojban https://telegram.me/joinchat/BLVsYz3hCF-CtYw0-2IkqQ\n#ckule https://telegram.me/joinchat/BLVsYz4hC9ulWahupDLovA\n#jbosnu https://telegram.me/joinchat/BLVsYz20Boixl0xN-0TrPw\n#spero https://telegram.me/joinchat/BcR2JD4jiwpKsTiof9rDRA\n##jboselbau https://telegram.me/joinchat/CJYorT2ma6UVfhb9YThEqw");break;
    case txt.trim() === '#uilkinse': benji(source,socket,clientmensi,sendTo, "https://mw.lojban.org/papri/The_analytical_language_of_John_Wilkins");break;
    case txt.trim() === '#camxes': benji(source,socket,clientmensi,sendTo, "https://lojban.github.io/ilmentufa/camxes.html\nhttps://lojban.github.io/ilmentufa/glosser/glosser.htm");break;
    case txt.trim() === '#sepulka': benji(source,socket,clientmensi,sendTo, "https://mw.lojban.org/papri/sepulka/en");break;
    case txt.trim() === '#noiha': benji(source,socket,clientmensi,sendTo, "ko\'a broda poi\'a brodo = lo nu ko\'a broda cu fasnu gi\'e brodo\nko\'a broda noi\'a brodo = lo nu ko\'a broda cu fasnu .i lo go\'i cu brodo\nko\'a broda soi\'a brodo = lo nu ko\'a broda cu brodo\nko\'a broda soi ke\'a brodo = ko\'a broda .i lo nu go\'i cu brodo");break;
    case txt.trim() === '#n-paradigm': benji(source,socket,clientmensi,sendTo, "beu  B  Bekti  (object)  ‘-/in’  Patients, Parts, Properties\ncau  C  Canli  (quantity)  ‘by/for’  Quantities, Amounts, Values\ndio  D  Dirco  (direction)  ‘to/for’  Recipients, Beneficiaries, Destinations\nfoa  F  Folma  (full)  ‘in/of’  Wholes, Sets, Collectivities\njui  J  Junti  (young)  ‘than’  Lessers in greater/lesser than relations\nkao  K  Kakto  (act)  ‘-/by’  Actors, Agents, Doers\nneu  N  Nerbi  (necessary)  ‘under’  Conditions, Fields, Circumstances\npou  P  Proju  (produce)  ‘-’  Products, Outputs, Purposes\ngoa  G  Groda  (big)  ‘than’  Greaters in greater/lesser than relations\nsau  S  Satci  (start)  ‘from’  Sources, Origins, Reasons, Causes\nveu  V  Vetci  (event)  ‘by/via’  Events, States, Deeds, Means, Routes, Effects");break;
    case (txt.indexOf(`${prereplier}gadri`) === 0||txt.trim() === '#gadri'): benji(source,socket,clientmensi,sendTo, 'lo broda = su\'oi da poi ge ke\'a broda gi ro\'oi broda cu me ke\'a\nlo [PA] broda = zo\'e noi ke\'a broda [gi\'e zilkancu li PA lo broda]\nla [PA] broda = zo\'e noi lu [PA] broda li\'u cmene ke\'a mi\nlo PA sumti = lo PA me sumti\nla PA sumti = zo\'e noi lu PA sumti li\'u cmene ke\'a mi\nloi [PA] broda = lo gunma be lo [PA] broda\nlai [PA] broda = lo gunma be la [PA] broda\nloi PA sumti = lo gunma be lo PA sumti\nlai PA sumti = lo gunma be la PA sumti\nlo\'i [PA] broda = lo selcmi be lo [PA] broda\nla\'i [PA] broda = lo selcmi be la [PA] broda\nlo\'i PA sumti = lo selcmi be lo PA sumti\nla\'i PA sumti = lo selcmi be la PA sumti\nPA sumti = PA da poi ke\'a me sumti\nPA broda = PA da poi broda\npiPA sumti = lo piPA si\'e be pa me sumti');break;
    // case txt.indexOf("nlp:") === 0: stnlp(source,socket,clientmensi,sendTo,text.substr(4));break;
    case txt.indexOf("lujvo:") === 0: benji(source,socket,clientmensi,sendTo, triz(text.substr(6)));break;
    //case text.indexOf("cipra:") === 0: text = text.substr(6);ret = extract_mode(text);benji(source,socket,clientmensi,sendTo, run_camxes(ret[0], ret[1]));break;
    case txt.indexOf("exp:") === 0: text = text.substr(4).trim();ret = extract_mode(text);benji(source,socket,clientmensi,sendTo, run_camxes(ret[0], ret[1]));break;
    case txt.indexOf("f:") === 0: text = text.substr(2).trim();benji(source,socket,clientmensi,sendTo, xufuhivla(text));break;
    case txt.indexOf("k:") === 0: text = text.substr(2).trim();benji(source,socket,clientmensi,sendTo, run_camxes(text, 3));break;
    case txt.indexOf("raw:") === 0: text = text.substr(4).trim();benji(source,socket,clientmensi,sendTo, run_camxes(text, 0));break;
    case txt.indexOf("zei:") === 0: text = text.substr(4).trim();benji(source,socket,clientmensi,sendTo, zeizei(text));break;
    case txt.indexOf("anji:") === 0: text = text.substr(5).trim();benji(source,socket,clientmensi,sendTo, anji(text));break;
    case txt.indexOf("kru:") === 0: text = text.substr(5).trim();benji(source,socket,clientmensi,sendTo, kru(text));break;
    case txt.indexOf("off:") === 0: text = text.substr(4).trim();ret = extract_mode(text);benji(source,socket,clientmensi,sendTo, run_camxesoff(ret[0], ret[1]));break;
    case txt.indexOf("alta:") === 0: text = text.substr(5).trim();ret = extract_mode(text);benji(source,socket,clientmensi,sendTo, run_camxesalta(ret[0], ret[1]));break;
    case txt.indexOf("yacc:") === 0: tcepru(text.substr(5),sendTo,source,socket);break;
    case txt.indexOf("cowan:") === 0: tcepru(text.substr(6),sendTo,source,socket);break;
    case txt.indexOf("jbofi'e:") === 0: jbofihe(text.substr(8),sendTo,source,socket);break;
    case txt.indexOf("jbofihe:") === 0: jbofihe(text.substr(8),sendTo,source,socket);break;
    case txt.indexOf("gerna:") === 0: jbofihe(text.substr(6),sendTo,source,socket);break;
    case txt.indexOf("tersmu:") === 0: tersmu(text.substr(7),sendTo,source,socket);break;
    case (txt.indexOf(`${replier}: ko ningau`) === 0 ||text.indexOf(`${replier}: ko cnino`) === 0): setTimeout(() => {updatexmldumps(({nalmulselfaho}) => {benji(source,socket,clientmensi,sendTo, 'i ba\'o jai gau cnino'); const selsre = Object.keys(nalmulselfaho); if (selsre.length) benji(source,socket,clientmensi,sendTo, `i na kakne lo ka jai gau cnino fai la'e zoi zoi ${selsre.join(' ')} zoi`);});benji(source,socket,clientmensi,sendTo,'sei ca ca\'o jai gau cnino be fai lo pe mi sorcu');},1); break;
    case txt.indexOf('guaspi:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(7),'guaspi'));break;
    case txt.indexOf('frame: /full ') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(12),'en','framemulno'));break;
    case txt.indexOf('frame:/full ') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(11),'en','framemulno'));break;
    case txt.indexOf(`${prereplier}ktn`) === 0: benji(source,socket,clientmensi,sendTo, prettifylojbansentences());break;
    
    // Change default language
    case txt.indexOf('bangu:') === 0: benji(source,socket,clientmensi,sendTo, bangu(text.substr(6).trim(), from));break;

    // Give definition of valsi in specified language
    case txt.indexOf('?:') === 0: let inLanguage = defaultLanguage;inLanguage = RetrieveUsersLanguage(from, inLanguage);benji(source,socket,clientmensi,sendTo, vlaste(text.substr(2), inLanguage));break; // Gives definition of valsi in the default language set to user
    case txt.indexOf('jbo:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(4),'jbo'));break; // Gives definition of valsi in Lojban
    case txt.indexOf('2002:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(5),'2002'));break;
    case txt.indexOf('en:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'en'));break; // Gives definition of valsi in English
    case txt.indexOf('ru:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'ru'));break;
    case txt.indexOf('es:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'es'));break;
    case txt.indexOf('fr:')  === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'fr'));break;
    case txt.indexOf('fr-facile:')  === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(10),'fr-facile'));break;
    case txt.indexOf('f@:')  === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'fr-facile'));break;
    case txt.indexOf('ja:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'ja'));break;
    case txt.indexOf('de:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'de'));break;
    case txt.indexOf('eo:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'eo'));break;
    case txt.indexOf('zh:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'zh'));break;
    case txt.indexOf('sv:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'sv'));break;
    case txt.indexOf('en-simple:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(10),'en-simple'));break;
    case txt.indexOf('jb:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(3),'jb'));break;
    case txt.indexOf('krasi:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(6),'krasi'));break; // Gives Lojban words etymologies
    case txt.indexOf('dukti:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(6),'dukti'));break; // Gives Lojban words antonyms

    case txt.indexOf('selmaho:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(8),'en','selmaho'));break;
    case txt.indexOf('selma\'o:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(8),'en','selmaho'));break;
    case txt.indexOf('finti:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(6),'en','finti'));break;
    case txt.indexOf('rafsi:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(6),'en','raf'));break;
    case txt.search("ra'oi [a-z']+ rafsi ma") === 0: const reg = /ra'oi ([a-z']+) rafsi ma/;const mat=reg.exec(text);benji(source,socket,clientmensi,sendTo, vlaste(mat[1],'en','raf'));break;
    case txt.search("(\.i |i |)ma rafsi zo [a-z']+") === 0: const rg = /.*ma rafsi zo ([a-z']+).*/;const mt=rg.exec(text);benji(source,socket,clientmensi,sendTo, vlaste(mt[1],'en','raf'));break;
    case txt.indexOf('toki:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(5),'toki'));break;
    case txt.indexOf('laadan:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(7),'laadan'));break;
    case txt.indexOf('loglan:') === 0: benji(source,socket,clientmensi,sendTo, vlaste(text.substr(7),'loglan'));break;
    case txt.indexOf('gloss:') === 0: benji(source,socket,clientmensi,sendTo, gloso(text.substr(6),'en'));break;
    case txt.indexOf('loi:') === 0: benji(source,socket,clientmensi,sendTo, loglo(text.substr(4),''));break;
    case txt.indexOf('coi:') === 0: benji(source,socket,clientmensi,sendTo, loglo(text.substr(4),'coi'));break;
    case txt.indexOf(`${prereplier}mhnt `) === 0: ningaumahantufa(text.substr(12),socket);break;
    case txt.indexOf(`${prereplier}getgr `) === 0: getmahantufagrammar(text.substr(13),socket);break;
    case txt.indexOf('ze:') === 0: zmifanva(source,socket,clientmensi,sendTo,text.substr(3),'en2jb');break;
    case txt.indexOf('zj:') === 0: zmifanva(source,socket,clientmensi,sendTo,text.substr(3),'jb2en');break;
    case txt===`${replier}: pseudogismu`: benji(source,socket,clientmensi,sendTo, pseudogismu());break;
    case txt===`${replier}: ii`: benji(source,socket,clientmensi,sendTo, io());break;
    case txt===`${replier}: aigne`: benji(source,socket,clientmensi,sendTo, kurtyvla());break;
    case txt===`${replier}: help`: benji(source,socket,clientmensi,sendTo, sidju());break;
    case txt.indexOf("rot13:") === 0: benji(source,socket,clientmensi,sendTo, rotpaci(text.substr(6)));break;
    case txt.indexOf(`${prereplier}r `) === 0: benji(source,socket,clientmensi,sendTo, rusko(text.substr(prereplier.length+1).trim()));break;
    case txt.indexOf(`${prereplier}j `) === 0: benji(source,socket,clientmensi,sendTo, jbopomofo(text.substr(prereplier.length+1).trim()));break;
    case txt.indexOf('tatoeba:') === 0: benji(source,socket,clientmensi,sendTo, sisku(text.substr(8).trim()));break;
    case txt.indexOf(prereplier) === 0: text = text.substr(prereplier.length+1).trim();benji(source,socket,clientmensi,sendTo, mensimikce(text));break;
  /*   case text.indexOf(prereplier + 'mi retsku') == '0' && from==asker: benji(source,socket,clientmensi,sendTo, preasker+ext(jee)+' ' + ext(pendo));break;
    case text.indexOf(prereplier + 'xu do') === 0: 
    case text.indexOf(prereplier + 'do') === 0: setTimeout(function() {benji(source,socket,clientmensi,sendTo, from + mireturn());}, interm );break;
    case text.indexOf(prereplier + 'mi retsku') < 0 && text.indexOf(prereplier + 'mi') === 0: setTimeout(function() {benji(source,socket,clientmensi,sendTo, from + doreturn());}, interm );break;
    case text.indexOf(prereplier + 'sei mi kucli') == '0' && from==asker: setTimeout(function() {benji(source,socket,clientmensi,sendTo, preasker + ext(nadjuno));}, interm );break;
    case text.indexOf(prereplier + 'zmiku') >= 0 && from==asker: text.indexOf(prereplier + 'zmiku') >= 0 && from==asker;break;
   case text.indexOf(prereplier + 'u\'i') == '0' && from==asker: setTimeout(function() {benji(source,socket,clientmensi,sendTo, preasker + ext(nagendra));}, interm );break;
   case text.indexOf(prereplier + 'xu') == '0' && from!==asker: setTimeout(function() {benji(source,socket,clientmensi,sendTo, from + ': ' + ext(mizmiku));}, interm );break;
   case text.indexOf(prereplier) == '0' && text.indexOf(prereplier + 'xu') !== '0' && from!==asker: setTimeout(function() {benji(source,socket,clientmensi,sendTo, tato.tatoebaprocessing(from));}, interm );break;
   case text.indexOf("doi " + replier) >-1 && from!==asker: setTimeout(function() {benji(source,socket,clientmensi,sendTo, tato.tatoebaprocessing(from));}, interm );break;*/
    }
};

client.addListener('message', (from, to, text, message) => {
    processor(client, from, to, text, message);
});

clientmensi.addListener('message', (from, to, text, message) => {
    processormensi(clientmensi, from, to, text, message);
});

clientmensi.addListener('error', message => {
    throw new Error(message);
});

//NAXLE

const http = require('http');
// NEVER use a Sync function except at start-up!
let index = fs.readFileSync(`${__dirname}/naxle.html`);

// Send index.html to all requests
const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

// Socket.io server listens to our app
const ik = require('socket.io').listen(app);

ik.sockets.on('connection', socket => {
    //socket.emit('welcome', { message: 'Welcome!' +socket.id});
  //ik.to(socket.id).emit("returner", { message: message: vlaste(data.data,'en') });
    socket.on(
      'i am client', data => {
        //clientmensi, from, to, text, message,source
        if(data.data.indexOf(`${prereplier}doi`)===0 || data.data.indexOf(`${prereplier}tell`)===0){}else{
          processormensi(clientmensi, "mw.lojban.org", "", data.data, "","naxle",socket);
        }
      }
    );
});

app.listen(3002);
