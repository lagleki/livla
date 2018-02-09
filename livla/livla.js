/*jshint bitwise: false*/
const lg = console.log.bind(console);
// const p = object => JSON.stringify(object);

//livla bot
const fs = require("fs"),
  path = require("path-extra"),
  ospath = require("ospath"),
  libxmljs = require("libxmljs"),
  lojban = require("lojban");
const fastXmlParser = require('fast-xml-parser');

const tato = require('./tatoeba.js');
const interv = 300000;
const interm = 2900;
const nodasezvafahi = 'no da se zvafa\'i';
const tersepli = " + ";
const fram = "../../../files/fndata-1.5/frame";
const langs = [
  "jbo",
  "en",
  "ru",
  "es",
  "fr",
  "ja",
  "de",
  "eo",
  "zh",
  "en-simple",
  "fr-facile",
  "hu",
  "sv"
];
const robangu = 'fr-facile|en|ru|de|ja|jbo|guaspi|loglan|eo|fr|jb|2002|es|zh|sv|en-simple|krasi|dukti|laadan|toki';
// Default configuration, may be modified by “loadConfig”, with the content of
// “~/.livla/config.json.
let tcan = '#lojban,#ckule,#tokipona,#jbosnu,#jboguhe,#spero,#pepper&carrot,##jboselbau,##esperanto';
// let tcan = '#lojbanme';
let nuzbytcan = '#lojban';
let livlytcan = '#lojbanme'; //where la livla talks to la mensi
let asker = 'livla';
let replier = 'mensi';
let server = 'irc.freenode.net';
let twitter_id = "good_opinions,opinions_good,cunsku";
let consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret;
let arr_twitter_id;

// const stodipilno=['gleki','xalbo'];
// End default configuration

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
    channels: [
      livlytcan, tcan
    ],
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

const defaultLanguage = "en"; // Maybe someday should be replaced with "jbo" when Lojban definitions almost equal that of English
const preasker = `${asker}: `;
const prereplier = `${replier}: `;
let said;

// Ensure that a path exists, and that it is a dir.
const ensureDirExistence = (path) => {
  // We first try to make a dir. If it was missing, now, it is not
  // anymore.
  try {
    fs.mkdirSync(path);
  } catch (e) {
    // If creation of the dir failed, there can be many reasons.
    // However, if the reason is not “there was already a file
    // there!”, we don't want to ignore the error, so we throw it
    // again.
    if (!e.code || e.code !== 'EEXIST') {
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
const readConfig = filename => {
  const configDirectory = path.join(ospath.home(), ".livla");
  ensureDirExistence(configDirectory);
  const file = path.join(configDirectory, filename);
  try {
    return fs.readFileSync(file, {
      encoding: 'utf8'
    });
  } catch (e) {
    // If we get an “ENOENT” error, we return an empty string.
    // Other errors are still thrown.
    if (!e.code || e.code !== 'ENOENT') {
      throw e;
    }
    return "";
  }
}

// Load every line of “~/.livla/notci.txt” into “notci”, as an array.
// Define “notcijudri” as the file path that will be used later when we want to
// save the content of “notci”.
let notci,
  notcijudri;
const loadNotci = () => {
  notci = readConfig("notci.txt").split("\n");
  notcijudri = path.join(ospath.home(), ".livla", "notci.txt");
}

// Load the configuration from “~/.livla/config.json”, and modify the default
// config accordingly.
const loadConfig = () => {
  const either = (a, b) => {
    if (!a)
      return b;
    return a;
  }
  let localConfig = readConfig("config.json");
  if (localConfig.trim() === "")
    return; // Empty config, we do nothing.
  localConfig = JSON.parse(localConfig);

  asker = either(localConfig.asker, asker);
  replier = either(localConfig.replier, replier);
  tcan = either(localConfig.tcan, tcan);
  livlytcan = either(localConfig.livlytcan, livlytcan);
  server = either(localConfig.server, server);
  consumer_key = either(localConfig.consumer_key, "");
  consumer_secret = either(localConfig.consumer_secret, "");
  access_token_key = either(localConfig.access_token_key, "");
  access_token_secret = either(localConfig.access_token_secret, "");
  twitter_id = either(localConfig.twitter_id, twitter_id);
  arr_twitter_id = twitter_id.split(",");

  const Twitter = require('node-tweet-stream'),
    t = new Twitter({
      consumer_key,
      consumer_secret,
      token: access_token_key,
      token_secret: access_token_secret
    })

  t.on('tweet', ({
    text,
    user,
    id_str
  }) => {
    if (text) {
      const message = `@${user.screen_name}: ${text.replace(/[\n\r\t]/g, ' ')} [https://twitter.com/${user.screen_name}/status/${id_str}]`;
      const screen_name = user.screen_name;
      if (!arr_twitter_id.includes(screen_name)) {
        benji(0, 0, clientmensi, nuzbytcan, message, true);
      }
    }
  })

  t.on('error', err => {
    console.log(err.toString())
  })

  t.track('#lojban');
  //t.track('#miToaq');
  //t.track('#ToaqLanguage');
  t.track('#ithkuil');
  // t.track('#loglan');
}
loadConfig();

// Load the user configuration from “~/.livla/user-settings.json”
// These are settings
const loadUserSettings = () => {
  const localConfig = readConfig("user-settings.json");
  if (localConfig.trim() === "")
    return;
  userSettings = JSON.parse(localConfig);
}

loadUserSettings();
loadNotci();

//store en dump in memory
let enxml = path.join(__dirname, "../dumps", "en" + ".xml");
if (!fs.existsSync(enxml)) {
  enxml = path.join(__dirname, "../dumps", "toki" + ".xml");
}

// let xmlData = fs.readFileSync(enxml, {
//   encoding: 'utf8'
// });

let xmlDocEn = libxmljs.parseXml(fs.readFileSync(enxml, {
  encoding: 'utf8'
}).replace(/(&lt;|<)script.*?(&gt;|>).*?(&lt;|<)/g, "&lt;").replace(/(&lt;|<)\/script(&gt;|>)/g, ""));

// let xmlDocEn = fastXmlParser.parse(xmlData);
//
// // when a tag has attributes
// var options = {
//     attrPrefix : "@_",
//     attrNodeName: false,
//     textNodeName : "#text",
//     ignoreNonTextNodeAttr : true,
//     ignoreTextNodeAttr : true,
//     ignoreNameSpace : true,
//     ignoreRootElement : false,
//     textNodeConversion : true,
//     textAttrConversion : false,
//     arrayMode : false
// };

// if(fastXmlParser.validate(xmlData)=== true){//optional
// 	var jsonObj = fastXmlParser.parse(xmlData,options);
// }

//Intermediate obj
// let tObj = fastXmlParser.getTraversalObj(xmlData,options);
// let jsonObj = fastXmlParser.convertToJson(tObj);

///
const updateUserSettings = callback => {
  readConfig("user-settings.json"); // Ensure existance

  const body = JSON.stringify(userSettings);
  const configDirectory = path.join(ospath.home(), ".livla");
  const filename = "user-settings.json";
  const file = path.join(configDirectory, filename);
  try {
    fs.writeFileSync(file, body);
    lg('User settings updated');
  } catch (e) {
    // If we get an “ENOENT” error, we return an empty string.
    // Other errors are still thrown.
    if (!e.code || e.code !== 'ENOENT') {
      throw e;
    }
    return;
  }
};
//Mediawiki monitor
const CronJob = require('cron').CronJob;
new CronJob('0 * * * * *', () => {
  // CheckRecentChanges();
}, null, true);

function CheckRecentChanges() {
  const Twitter = require('twitter');
  const client = new Twitter({
    consumer_key,
    consumer_secret,
    access_token_key,
    access_token_secret
  });
  client.post('statuses/update', {
    status: 'I am a tweet'
  }, (error, tweet, response) => {
    if (!error) {
      console.log(tweet);
    }
  });
  // https://mw.lojban.org/api.php?action=query&list=recentchanges&rcprop=title|ids|sizes|flags|user&rclimit=3&rcnamespace=0&format=json
}

//IRC bot

const irc = require('irc');
//const client = new irc.Client(configlivla.server, configlivla.nick, configlivla.options);
const clientmensi = new irc.Client(configmensi.server, configmensi.nick, configmensi.options);

//    camxes = {};
//    delete require.cache[require.resolve('../mahantufa/camxes.js')];

const vric = () => {
  const vricar = [tato.tatoebaprocessing(replier)];
  return vricar[Math.floor(vricar.length * Math.random())];
};

let sisku = lin => {
  let s = "";
  let i = 0;
  while (s.indexOf(lin) < 0 && i < 20000) {
    s = tato.tatoebaprocessing();
    i++; //in case we found nothing exit
  }
  if (s === "" && i < 20000) {
    s = ": e'u do sisku tu'a lo nalkunti uenzi";
  }
  if (i >= 20000) {
    s = nodasezvafahi;
  }
  return s;
};
/*
const processorlivla = (client, from, to, text) => {
  let sendTo = to.indexOf('#') ? from : to; // send in private : publicly
  if (!text) return;
  said = Date.now();
  if (text.indexOf(`${preasker}darxi la `) === 0 && from !== asker && from !== replier) {
    setTimeout(() => {
      client.say(sendTo, `${text.substr(9+preasker.length)}: oidai mi darxi do lo trauta`);
    }, 0);
  }
  if (~text.indexOf(`doi ${asker}`) && from !== replier) {
    setTimeout(() => {
      client.say(sendTo, tato.tatoebaprocessing(from));
    }, interm);
  }
  setInterval(() => {
    if (Date.now() - said > interv) {
      said = Date.now();
      client.say(livlytcan, prereplier + vric());
    }
  }, interv);
};
*/
const benji = (source, socket, clientmensi, sendTo, what, action) => {
  if (source === "naxle") {
    socket.emit('la_livla_cu_cusku', {
      message: what
    });
    return what;
  } else {
    if (!action) {
      clientmensi.say(sendTo, what);
    } else {
      clientmensi.action(sendTo, what);
    }
  }
};

const bangu = (lng, username) => {
  let ret = "";
  lng = lng.trim().toLowerCase();
  if (lng.length > 100) {
    // small data overflow protection
    return ret;
  }
  if (!userSettings[username]) {
    userSettings[username] = {};
  }
  userSettings[username].language = lng;
  switch (lng) {
    // ME(speaking in third person) isn't implemented in irc.js
    case "lv":
      ret = `Es ar '${username}' turpmāk runāšu latviešu valodā.`;
      break;
    case "jbo":
      ret = `.i ca\'e mi co\'a tavla fi la\'o zoi.'${username}.zoi. fo lo lojbo`;
      break;
    case "en":
      ret = `I will speak to '${username}' in English from now on.`;
      break;
    case "en":
      ret = `Теперь я буду говорить с '${username}' по-русски.`;
      break;
    default:
      ret = `.i ca\'e mi co\'a tavla fi la\'o zoi.'${username}.zoi. fo lo lojbo`;
      break;
  }
  updateUserSettings();
  return ret;
};

const RetrieveUsersLanguage = (username, lng) => {
  if (!userSettings[username] || !userSettings[username].language) {
    if (!lng)
      return defaultLanguage;
    return lng;
  }
  return userSettings[username].language;
};

const lojTemplate = s => {
  s = s.replace(/\$.*?\$/g, c => {
    c = c.substring(1, c.length - 1);
    return c.replace(/(\w+)_\{(\d+)\}/g, "$1$2").replace(/(\w+)_(.+)/g, "$1$2").replace(/\{/g, '[').replace(/\}/g, ']');
  });
  s = s.replace(/\{(.*?)\}/g, c => c.substring(1, c.length - 1));
  return s;
}

const GetWordDef = (lin, lng, tordu, xmlDoc) => {
  let acc = '';
  let tmp = xmlDoc.find(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/selmaho[1]`);
  if (tmp.length > 0)
    acc += `[${tmp[0].text()}] `;
  tmp = xmlDoc.find(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/definition[1]`);
  if (tmp.length > 0)
    acc += `${tmp[0].text()}`;
  if (!tordu) {
    tmp = xmlDoc.find(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/notes[1]`);
    if (tmp.length > 0)
      acc += ` | ${tmp[0].text()}`;
    tmp = xmlDoc.find(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/user[1]/username[1]`);
    if (tmp.length > 0)
      acc += ` | ${tmp[0].text()}`;
  }

  //Dictionary with Examples
  tmp = xmlDoc.find(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/gloss[1]`);
  if (tmp.length > 0) {
    tmp = tmp[0].text().replace(/("|&amp;quot;)/g, "'").replace(/\\/g, "\\\\");
    acc += `\nAs a noun: ${tmp}`;
  }
  tmp = xmlDoc.find(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/example`);
  if (tmp.length > 0) {
    tmp = tmp[0].toString().replace(/>,</g, ">\n<").replace(/<example phrase=\"(.*?)\">(.*?)<\/example>/g, "$1 — $2").replace(/("|&amp;quot;)/g, "'").replace(/\\/g, "\\\\");
    acc += `\nExamples:\n${tmp}`;
  }
  acc = lojTemplate(acc).replace(/`/g, "'").replace(/ {2,}/g, ' ');
  if (acc.length >= 700 && lng !== "jb") {
    acc = acc.substring(0, 700);
    acc += `...\n[mo'u se katna] http://jbovlaste.lojban.org/dict/${lin}`;
  }
  if (acc.length > 0) {
    acc = acc.replace(/&quot;/g, "'").replace(/&gt;/g, '>')
    return `${lin} = ${acc}`;
  }
  return;
}

const GetXmldoc = (lng) => {
  if (lng !== "en" || !xmlDocEn) {
    const xmlPath = path.join(__dirname, "../dumps", `${lng}.xml`);
    if (!fs.existsSync(xmlPath)) {
      const errorMessage = `.i no da liste lo valsi be fi lo se sinxa be zoi zoi.${lng}.zoi`;
      // if (flag === 'passive') {
      //   lg(errorMessage);
      //   return '';
      // }
      return errorMessage;
    }
    return libxmljs.parseXml(fs.readFileSync(xmlPath, {
      encoding: 'utf8'
    }));
  }
  return xmlDocEn;
};

const PrettyLujvoScore = (a) => a.map(({
  lujvo,
  score
}) => `${lujvo}: ${score}`).join(", ");

const MultipleDefs = (valsi, lng, tordu) => {
  let lin = valsi.replace(/\"/g, '').replace(/\)$/, '').replace(/^[\(\.]/, '');
  xmlDoc = GetXmldoc(lng);
  let pre = '';
  lg(lojban.xulujvo(valsi));
  if (lojban.xulujvo(valsi)) {
    try {
      lg(111);
      const l = lojban.jvokaha_gui(valsi);
      lg(l);
      const f = lojban.jvozba(l).filter(({
        lujvo
      }) => /[aeiou]/.test(lujvo.slice(-1)));
      lg(f);
      const fslice = f.slice(0, Math.min(f.length, 3));
      const arr_defs = fslice.map(({
        lujvo
      }) => {
        return GetWordDef(lujvo, lng, tordu, xmlDoc);
      }).filter(Boolean);
      const l_joined = l.join(" ");
      const glossed = (lng !== 'jbo') ?
        lojban.gloss(l_joined, lng, xmlDoc, false).join(tersepli) :
        l_joined;
      pre = `${PrettyLujvoScore(fslice)}\n${l_joined} ≈ ${glossed}\n`;
      if (arr_defs.length > 0) {
        return pre + `${arr_defs.join("\n")}`;
      }
    } catch (e) {
      lg(e);
      return e.toString();
    }
  }
  //otherwise just
  const mo = GetWordDef(valsi, lng, tordu, xmlDoc);
  if (mo)
    return mo;

  //if nothing found try full-text search
  const mulno = mulno_sisku(lin, lng, xmlDoc);
  if (mulno)
    return pre + mulno;
  if (pre !== '')
    return pre;
  return nodasezvafahi;
};

const mulno_sisku = (lin, lng, xmlDoc) => {
  if (!xmlDoc)
    xmlDoc = GetXmldoc(lng);
  let stra = [];
  let coun = xmlDoc.find(`/dictionary/direction[1]/valsi[(translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}")]`);
  if (coun)
    stra = stra.concat(coun.map(i => i.attr("word").value()));
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[(translate(./glossword/@word,"${lin.toUpperCase()}","${lin}")="${lin}") or (translate(./Engl,"${lin.toUpperCase()}","${lin}")="${lin}")]`);
  if (coun)
    stra = stra.concat(coun.map(i => i.attr("word").value()));
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(@word,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  if (coun)
    stra = stra.concat(coun.map(i => i.attr("word").value()));
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(./glossword/@word,"${lin.toUpperCase()}","${lin}"),"${lin}") or contains(translate(./Engl,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  if (coun)
    stra = stra.concat(coun.map(i => i.attr("word").value()));
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(./definition,"${lin.toUpperCase()}","${lin}"),"${lin}") or contains(translate(./notes,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  if (coun)
    stra = stra.concat(coun.map(i => i.attr("word").value()));
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(./definition,"${lin.toUpperCase()}","${lin}"),"${lin}") or contains(translate(./related,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  if (coun)
    stra = stra.concat(coun.map(i => i.attr("word").value()));

  stra = [...new Set(stra)]; //deduplicate
  const xo = stra.length;
  if (xo > 30) {
    stra.splice(30);
    stra.push("...");
  }
  if (stra.length > 1) {
    return `${xo} da se zvafa'i: ${stra.join(", ").trim()}`;
  }
  if (stra.length === 1) {
    return GetWordDef(stra[0], lng, false, xmlDoc)
  }
  return;
}

const katna = (lin, lng, xmlDoc) => {
  const l = lojban.jvokaha_gui(lin);
  if (!l)
    return '';
  const a = l.join(" ");
  const b = (lng !== 'jbo') ?
    lojban.gloss(a, lng, xmlDoc, false).join(tersepli) :
    a;
  lg(b, a);
  return `${lin} ≈ ${b}`;
};

const selmaho = lin => {
  const lin_ = lin.toLowerCase().replace(/[^a-z'\.\*0-9]/g, '');
  let gag = '';
  let ien = '';
  const coun = xmlDocEn.get(`/dictionary/direction[1]/valsi[translate(@word,"${lin_.toUpperCase()}","${lin_}")="${lin_}"]/selmaho[1]`);
  if (coun) {
    ien = `.i lu ${lin_} li'u cmavo lu ${coun.text()} li'u`;
    const cll = require('./cll.js');
    const cllarr = cll.cllk()[coun.text()];
    if (cllarr) {
      ien += `\n${cllarr.replace(/ /g, "\n")}`;
    }
  }
  try {
    gag = xmlDocEn.find(`/dictionary/direction[1]/valsi[starts-with(translate(./selmaho,"${lin_.toUpperCase()}","${lin_}"),"${lin_}")]`).map(i => {
      return i.attr("word").value();
    }).join(", ").trim();
  } catch (err) {}
  if (ien === '' && gag !== '')
    return `cmavo: ${gag}`;
  if (ien !== '' && gag !== '')
    return ien.concat("\ncmavo: ").concat(gag);
  if (ien !== '' && gag === '')
    return ien;
  return nodasezvafahi;
};

const frame = lin => {
  let gag = '';
  const arrf = fs.readdirSync(path.join(__dirname, fram)).filter(file => file.substr(-4) === '.xml');

  for (let i = 0; i < arrf.length; i++) {
    const xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname, fram, arrf[i]), {
      encoding: 'utf8'
    }).replace(/xmlns=\"/g, 'mlns=\"'));
    let si = xmlDoc.get(`/frame[translate(@name,"${lin.toUpperCase()}","${lin}")="${lin}"]/definition[1]/text()`);
    if (si) {
      gag = si.toString().replace(/&lt;.*?&gt;/g, '');
      si = xmlDoc.find(`/frame[translate(@name,"${lin.toUpperCase()}","${lin}")="${lin}"]/FE[@coreType="Core"]/definition/text()`);
      if (si) {
        gag = `${gag}\n| te sumti: ${si.join("\n| te sumti: ").replace(/&lt;.*?&gt;/g, '')}`;
      }
      break;
    }
  }

  if (gag !== '')
    return gag;
  return nodasezvafahi;
};

const framemulno = lin => {
  let gag = '';
  const arrf = fs.readdirSync(path.join(__dirname, fram)).filter(file => file.substr(-4) === '.xml');
  const stra = [];

  for (let i = 0; i < arrf.length; i++) {
    const xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname, fram, arrf[i]), {
      encoding: 'utf8'
    }).replace(/xmlns=\"/g, 'mlns=\"'));
    const si = xmlDoc.get(`/frame[contains(translate(./definition,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
    if (si) {
      stra.push(si.attr("name").value());
    }
  }
  try {
    stra.splice(40);
  } catch (err) {}
  if (stra.length >= 40) {
    stra.push("...");
  }
  gag = stra.join(", ").trim();
  if (stra.length === 1) {
    gag = frame(stra[0]);
  }
  if (gag !== '')
    return gag;
  return nodasezvafahi;
};

const finti = lin => {
  lin = lin.replace(/\"/g, '');
  const coun = xmlDocEn.find(`/dictionary/direction[1]/valsi[contains(translate(./user/username,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  let stra = [];
  if (coun)
    stra = stra.concat(coun.map(i => i.attr("word").value()));
  const cnt = stra.length;
  try {
    stra.splice(30);
  } catch (err) {}
  if (stra.length >= 30) {
    stra.push("...");
  }
  let gag = stra.join(", ").trim();
  if (stra.length > 1) {
    gag = `${cnt} da se zvafa'i: ${gag}`;
  }
  if (gag !== '')
    return gag;
  return nodasezvafahi;
};

const vlaste = (lin, lng, raf) => {
  const tordu = (lin.indexOf(" ") !== 0);
  lin = lin.toLowerCase().trim();
  let ret;
  if (!raf) {
    if (lin.substr(0, 5).trim() === "/full") {
      ret = mulno_sisku(lin.substr(6).trim(), lng);
    } else {
      ret = MultipleDefs(lin, lng, tordu);
    }
  } else {
    lin = lin.replace(/[^a-z_'\.]/g, '');
    if (raf === 'frame') {
      ret = frame(lin);
    } else {
      ret = framemulno(lin);
    }
  }
  return ret.replace(/(.{190,250})(, |[ \.\"\/])/g, '$1$2\n');
};

const sidju = () => {
  const sidj = {
    en: `Parsers: type ".ilm " (stable BPFK grammar), ".beta " (experimental), ".gerna " (jbofi'e), or ".yacc " (official yacc) followed by the text to show the structure of sentences.\nLojban dictionary: type ".language-code word", where language code is one of jbo,en,ru,es,fr,fr-facile,ja,de,eo,zh,hu,sv. This searches in both directions.\n    ".selmaho ca'a" gives "CAhA", ".selmaho CAhA" gives "bi'ai, ca'a, ..."\n    ".rafsi kulnu" gives "klu", ".rafsi klu" gives "kulnu"\nOther conlang dictionaries: ".toki ", ".laadan ", ".loglan "\nLojban <-> Loglan conversion (incomplete): ".coi ", ".loi "\n"Tatoeba: klama" gets a random example sentence using "klama"\nDelayed messaging: type "${replier}: doi user message" to send "message" to "user" when they return`
  };
  return sidj.en;
};

//Stanford NLP
//const  StanfordSimpleNLP = require('stanford-simple-nlp');
//const stanfordSimpleNLP = new StanfordSimpleNLP.StanfordSimpleNLP();
//stanfordSimpleNLP.loadPipelineSync();
/*
const stnlp = (source,socket,clientmensi,sendTo, lin) => {
  stanfordSimpleNLP.process(lin, (err, result) => {
    benji(source,socket,clientmensi,sendTo, JSON.stringify(result));
    });
};
*/

const sutysiskuningau = (lng, lojbo) => { //write a new file parsed.js that would be used by la sutysisku
  if (!lng)
    lng = 'en';
  const xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname, "../dumps", `${lng}.xml`), {
    encoding: 'utf8'
  }).replace(/(&lt;|<)script.*?(&gt;|>).*?(&lt;|<)/g, "&lt;").replace(/(&lt;|<)\/script(&gt;|>)/g, ""));
  let pars = `sorcu["${lng}"] = {`;
  const rev = xmlDoc.find("/dictionary/direction[1]/valsi");
  for (let i = 0; i < rev.length; i++) {
    const hi = rev[i].attr("word").value().replace("\\", "\\\\");
    pars += `"${hi}":{`;
    let wascomma = '';
    try {
      pars += `"d":"${rev[i].find("definition[1]")[0].text().replace(/"/g, "'").replace(/\\/g, "\\\\")}"`;
      wascomma = ',';
    } catch (err) {}
    try {
      pars += `${wascomma}"t":"${rev[i].attr("type").value().replace(/\\/g, "\\\\")}"`;
      wascomma = ',';
    } catch (err) {}
    try {
      pars += `${wascomma}"s":"${rev[i].find("selmaho[1]")[0].text().replace(/"/g, "'").replace(/\\/g, "\\\\")}"`;
      wascomma = ',';
    } catch (err) {}
    try {
      pars += `${wascomma}"n":"${rev[i].find("notes[1]")[0].text().replace(/"/g, "'").replace(/\\/g, "\\\\")}"`;
      wascomma = ',';
    } catch (err) {}
    try {
      pars += `${wascomma}"g":"${rev[i].find("glossword/@word").join(";").replace(/ word=\"(.*?)\"/g, "$1").replace(/"/g, "'").replace("\\", "\\\\")}"`;
      wascomma = ',';
    } catch (err) {}
    try {
      pars += `${wascomma}"k":"${rev[i].find("related[1]")[0].text().replace(/"/g, "'").replace(/\\/g, "\\\\")}"`;
      wascomma = ',';
    } catch (err) {}
    try {
      const ex = rev[i].find("example").toString().replace(/>,</g, ">%<").replace(/<example phrase=\"(.*?)\">(.*?)<\/example>/g, "$1 — $2").replace(/"/g, "'").replace(/\\/g, "\\\\");
      if (ex !== '') {
        pars += `${wascomma}"e":"${ex}"`;
        wascomma = ',';
      }
    } catch (err) {}
    let ra = rev[i].find("rafsi//text()[1]");
    if (lojbo !== 0 && lojban.xugismu(hi) === true) {
      ra.push(hi);
      if (hi.indexOf("brod") !== 0) {
        ra.push(hi.substr(0, 4));
      }
      if (hi.indexOf("broda") === 0) {
        ra.push("brod");
      }
    }
    ra = ra.join("\",\"");

    if (ra.length !== 0) {
      pars += `${wascomma}"r":["${ra}"]`;
    }
    pars += "}";
    if (i < rev.length - 1) {
      pars += ",\n";
    } //\n
  }
  pars += "};\n";
  let t = path.join(__dirname, "../i/data", `parsed-${lng}.js`);
  fs.writeFileSync(`${t}.temp`, pars);
  fs.renameSync(`${t}.temp`, t);
  t = path.join(__dirname, `../i/${lng}/`, "webapp.appcache");
  const d = new Date();
  let n = d.getDate();
  if ((n === 1) || (n === 11) || (n === 21)) {
    try {
      n = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      pars = fs.readFileSync(t, {
        encoding: 'utf8'
      });
      pars = pars.replace(/\n# .+\n/, `\n# ${n}\n`);
      pars = pars.replace(/\n\.\.\/lib.fullproof.+\n/g, "\n");
      fs.writeFileSync(t, pars);
      lg(`${t} updated`);
    } catch (err) {}
  }
};

const tcepru = (lin, sendTo, source, socket) => {
  const exec = require('child_process').exec;
  exec(`${path.join(__dirname, "../tcepru/./parser")} <<<"${lin}" 2>/dev/null`, (error, stdout, stderr) => {
    lin = stdout;
    if (error !== null) {
      lin = `O_0${stderr.toString()}`;
    }
    benji(source, socket, clientmensi, sendTo, lin.replace(/\n/g, ' ').replace(/ {2,}/g, ' '));
  });
};

const jbofihe = (lin, sendTo, source, socket) => {
  const exec = require('child_process').exec;
  exec(`${path.join(__dirname, "../jbofihe/./jbofihe")} -ie -cr <<<"${lin}" 2>/dev/null`, (error, stdout, stderr) => {
    lin = stdout;
    if (error !== null) {
      lin = `O_0${stderr.toString()}`;
    }
    if (lin === '')
      lin = 'O_0';
    benji(source, socket, clientmensi, sendTo, lin.replace(/\n/g, ' ').replace(/ {2,}/g, ' '));
  });
};

/**
 * Filter-map. Like map, but skips undefined values.
 *
 * @param callback
 */
function fmap(callback) {
  return this.reduce((accum, ...args) => {
    let x = callback(...args);
    if (x) {
      accum.push(x);
    }
    return accum;
  }, []);
}

const tersmu = (lin, sendTo, source, socket) => {
  const anj = require('../tersmu/all.js');
  benji(source, socket, clientmensi, sendTo, anj.h$main(lin));
};

const mensimikce = text => { //eliza bot analog
  let Mensibot = require('../mikce/mensimikce.js');
  //Mensibot.start(); // initializes Mensi and returns a greeting message
  const r = Mensibot.reply(text).toString();
  Mensibot = null;
  return r;
};

//mahantufa
const ningaumahantufa = (text, socket) => {
  //write file
  const whichfile = text.substr(0, text.indexOf(' '));
  text = text.substr(text.indexOf(' ') + 1);
  const t = path.join(__dirname, `.${whichfile}.peg`);
  lg(text);
  fs.writeFileSync(t, text);
  // // read peg and build a parser
  const camxes_peg = fs.readFileSync(`${whichfile}.peg`).toString();
  try {
    const camxes = require("pegjs").generate(camxes_peg, {
      cache: true,
      trace: false,
      output: "source",
      allowedStartRules: ["text"],
      optimize: "size"
    });
    // // write to a file
    const fd = fs.openSync(whichfile, 'w+');
    let buffer = new Buffer('var camxes = ');
    fs.writeSync(fd, buffer, 0, buffer.length);
    buffer = new Buffer(camxes);
    fs.writeSync(fd, buffer, 0, buffer.length);
    buffer = new Buffer("\n\nmodule.exports = camxes;\n\nterm = process.argv[2];\nif (term !== undefined && typeof term.valueOf() === 'string')\n  lg(JSON.stringify(camxes.parse(term)));\n\n");
    fs.writeSync(fd, buffer, 0, buffer.length);
    fs.close(fd);
    const ya = require("uglify-js").minify(whichfile).code;
    fs.writeFileSync(whichfile, ya);
    socket.emit('la_livla_cu_cusku', {
      message: "snada",
      data_js: ya
    });
  } catch (e) {
    socket.emit('la_livla_cu_cusku', {
      message: e.message
    });
  }
};

const getmahantufagrammar = (name, socket) => {
  try {
    socket.emit('le_te_cusku_be_fi_la_livla_cu_cpacu_pa_vreji', {
      message: "snada",
      data: fs.readFileSync(path.join(__dirname, `${name}.peg`)).toString(),
      data_js: fs.readFileSync(path.join(__dirname, name)).toString()
    });
  } catch (e) {
    socket.emit('le_te_cusku_be_fi_la_livla_cu_cpacu_pa_vreji', {
      message: "fliba",
      data: e.message
    });
  }
};

const updatexmldumps = callback => {
  const velruhe = {
    cfari: {},
    mulno: {},
    nalmulselfaho: {}
  };
  //try{
  const request = require("request").defaults({
    jar: true,
    strictSSL: false
  });
  const jar = request.jar();
  const cookie = request.cookie("jbovlastesessionid=U2FsdGVkX1%2FpiXtl1FSyMUZvFTudUq0N59YatQesEbsfdQ6owwMDeA%3D%3D");
  langs.forEach(thisa => {
    velruhe.cfari[thisa] = true;
    const uri = `http://jbovlaste.lojban.org/export/xml-export.html?lang=${thisa}`;
    jar.setCookie(cookie, uri);
    const t = path.join(__dirname, "../dumps", `${thisa}.xml`);
    request({
      uri,
      method: "GET",
      jar
    }).on("error", () => {
      velruhe.nalmulselfaho[thisa] = true;
      delete velruhe.cfari[thisa];
      if (callback && Object.keys(velruhe.cfari).length === 0) {
        callback(velruhe);
      }
    }).pipe(fs.createWriteStream(`${t}.temp`)).on("finish", () => {
      try { //validate xml
        //ij = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"../dumps",`${thisa}.xml.temp`),{encoding: 'utf8'}));
        fs.renameSync(`${t}.temp`, t);
        lg(`${thisa} updated`);
        velruhe.mulno[thisa] = true;
        if (thisa === "en") {
          xmlDocEn = libxmljs.parseXml(fs.readFileSync(path.join(__dirname, "../dumps", "en" + ".xml"), {
            encoding: 'utf8'
          }));
        }
        delete velruhe.cfari[thisa];
        sutysiskuningau(thisa);
        //global.gc();
      } catch (err) {
        lg(thisa, err);
        velruhe.nalmulselfaho[thisa] = true;
        delete velruhe.cfari[thisa];
      }
      //ij='';
      if (callback && Object.keys(velruhe.cfari).length === 0) {
        callback(velruhe);
      }
    });
  });
  // const http = require('http');
  /*
  langs.forEach(function(thisa) {//now update pdf
    let uri="http://jbovlaste.lojban.org/export/latex-export.html?lang="+thisa;
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
  sutysiskuningau("2002", 0);
  sutysiskuningau("en-pt-BR", 0);
  sutysiskuningau("zamenhofo", 0);
  // sutysiskuningau("laadan", 0);
  sutysiskuningau("ile", 0);
  sutysiskuningau("ina", 0);
  sutysiskuningau("toki", 0);
  sutysiskuningau("ldp", 0);
  //updategloss();# not yet ready function
};

setInterval(() => {
  updatexmldumps();
}, 3 * 86400000); //update logs once a djedi
const GimkaConflicts = (valsi) => {
  if (!valsi || valsi === "") return 'no input'
  const gimka = require('../skripto/gimka.js');
  const r = gimka.WhichIsInConflictAll(valsi)
  return `[${r[0]}] - official gismu that conflict with {${valsi}}\n[${r[1]}] - experimental gismu that conflict with {${valsi}}`
}
const wordnet = (source, socket, clientmensi, sendTo, te_gerna) => {
  const natural = require('natural');
  const wn = new natural.WordNet();
  wn.lookup(te_gerna, defs => {
    if (!defs || defs.length === 0)
      benji(source, socket, clientmensi, sendTo, "[not found]");
    defs.forEach((w) => {
      const num = w.synsetOffset ?
        `[${w.synsetOffset}] ` :
        '';
      const lemma = w.lemma ?
        `"${w.lemma}" ` :
        '';
      const pos = w.pos ?
        `/${w.pos}/ ` :
        '';
      // const wCnt = w.wCnt ? `frequency: ${w.wCnt}` : '';
      const firstline = (lemma + pos + num).trim();
      const prettyfirstline = (firstline !== '') ?
        `${firstline} -\n` :
        '';
      const def = w.def ?
        `..... ${w.def}\n` :
        '';
      const exp = (w.exp && w.exp.length > 0) ?
        `..... examples: ${w.exp}\n` :
        '';
      const syns = w.synonyms ?
        `..... synonyms: ${w.synonyms.toString().split(",").map(i => i.replace(/_/g, ' ')).join(", ")}\n` :
        '';
      const whole = prettyfirstline + def + exp + syns;
      benji(source, socket, clientmensi, sendTo, whole);
    });
  });
}
const wiktionary = (source, socket, clientmensi, sendTo, te_gerna, bangu) => {
  let wor = te_gerna;
  if (!bangu) {
    wor = te_gerna.split("/");
    if (wor.length > 1) {
      bangu = wor[0];
      switch (bangu) {
        case "en":
          bangu = "English";
          break;
        case "es":
          bangu = "Spanish";
          break;
        case "jbo":
          bangu = "Lojban";
          break;
        case "ja":
          bangu = "Japanese";
          break;
        case "zh":
          bangu = "Chinese";
          break;
        case "ru":
          bangu = "Russian";
          break;
      }
      wor.splice(0, 1);
    } else {
      bangu = "English";
    }
    wor = wor.join("");
  }
  lojban.wiktionary(wor, bangu, (a => benji(source, socket, clientmensi, sendTo, a)));
}

const rafsi_giho_nai_se_rafsi_gui = (te_gerna) => {
  const a = lojban.rafsi_giho_nai_se_rafsi_gui(te_gerna, xmlDocEn);
  if (a.rafsi.length === 0) {
    return a.serafsi ?
      `.i ra'oi ${te_gerna} rafsi zo ${a.serafsi}` :
      '.i no da se zvafa\'i';
  } else {
    const coun = `.i ra'oi ${a.rafsi.join(' .e ra\'oi ')} rafsi zo ${te_gerna}`;
    return a.serafsi ?
      coun.concat(" ").concat(`.i ra'oi ${te_gerna} rafsi zo ${a.serafsi}`) :
      coun;
  }
}

const processormensi = (clientmensi, from, to, text, message, source, socket) => {
  if (!text)
    return;
  let sendTo = to.indexOf('#') ?
    from :
    to;
  if (text.match(/^<(.*?)>: /, '') !== null) { //dealing with Slack
    from = text.match(/^<(.*?)>: /, '')[1];
    text = text.replace(/^<.*?>: /, "");
  }
  //notci functions first:
  if (text.indexOf(`${replier}: tell `) === 0) {
    text = text.substr(12).trim().replace("\\t", " ").replace(" ", "\t");
    switch (true) {
      case from.match(text.substr(0, text.indexOf('\t'))) !== null:
        benji(source, socket, clientmensi, sendTo, `${from}: tell it to yourself, Komonian`);
        break;
      case text.substr(0, text.indexOf('\t')) === replier:
        benji(source, socket, clientmensi, sendTo, `${from}: hey, Carrot, really think I'm that stupid? `);
        break;
      default:
        const d = new Date();
        notci.push(`${from.replace(/^\.+/, "").replace(/\.+$/, "").trim()}\t${text} | ${d.toISOString()}`);
        benji(source, socket, clientmensi, sendTo, `${from}: via Pepper's magic this will be sent to ${text.substr(0, text.indexOf('\t'))} after they return to the chat`);
        fs.writeFile(notcijudri, notci.join("\n"));
        //loadNotci();
        break;
    }
  }
  //notci functions in lojban as an alternative:
  if (text.indexOf(`${replier}: doi `) === 0) {
    text = text.substr(11).trim().replace(/^la /, '').replace("\\t", " ").replace(" ", "\t");
    switch (true) {
      case from.match(text.substr(0, text.indexOf('\t'))) !== null:
        benji(source, socket, clientmensi, sendTo, `${from}: e'u do cusku di'u lo nei si'unai`);
        break;
      case text.substr(0, text.indexOf('\t')) === replier:
        benji(source, socket, clientmensi, sendTo, `${from}: xu do je'a jinvi lodu'u mi bebna i oi`);
        break;
      default:
        const ds = new Date();
        notci.push(`${from.replace(/^\.+/, "").replace(/\.+$/, "").trim()}\t${text} | ${ds.toISOString()}`);
        benji(source, socket, clientmensi, sendTo, `${from}: mi ba benji di'u ba lo nu la'o gy.${text.substr(0, text.indexOf('\t'))}.gy. di'a cusku da`);
        fs.writeFile(notcijudri, notci.join("\n"));
        //loadNotci();
    }
  }
  //now send back part
  for (let l = 0; l < notci.length; l++) {
    //sendTo
    if (notci[l].length === 0)
      continue; // prevent a crash if the line is empty
    let cmenepagbu = notci[l].split("\t"); //.substr(0, notci[l].indexOf('\t'));
    let sem;
    try {
      sem = new RegExp(cmenepagbu[1].toLowerCase(), "gim");
    } catch (err) {
      sem = '';
    }
    if (from.match(sem) !== null) {
      cmenepagbu = notci[l].split("\t");
      benji(source, socket, clientmensi, sendTo, (`${from}: cu'u la'o gy.${cmenepagbu[0]}.gy.: ${cmenepagbu[2]}`).replace(/(.{190,250})(, |[ \.\"\/])/g, '$1$2\n'));
      notci.splice(l, 1);
      l = l - 1;
      fs.writeFile(notcijudri, notci.join("\n"));
      //loadNotci();
    }
  }
  //
  const txt = text.toLowerCase();
  let inLanguage = defaultLanguage;
  const pp = (/:(.+)/.exec(text) || ['', ''])[1];
  const po = (/ (.+)/.exec(text) || ['', ''])[1].trim();
  console.log(txt);
  switch (txt.trim().charAt(0)) {
    case "#":
      switch (true) {
        case txt.trim() === '#ermenefti':
          benji(source, socket, clientmensi, sendTo, "https://mw.lojban.org/papri/Hermeneutics");
          break;
        case txt.trim() === '#voksa':
          benji(source, socket, clientmensi, sendTo, "https://mw.lojban.org/papri/Recordings_of_live_Lojban_discussions");
          break;
        case txt.trim() === '#bankle':
          benji(source, socket, clientmensi, sendTo, "https://jbotcan.org/lojban/en/dialects");
          break;
        case txt.trim() === '#slak':
          benji(source, socket, clientmensi, sendTo, "https://slaka.herokuapp.com");
          break;
        case txt.trim() === '#telegram':
          benji(source, socket, clientmensi, sendTo, "#lojban https://t.me/joinchat/BLVsYz3hCF8mCAb6fzW1Rw\n#ckule https://telegram.me/joinchat/BLVsYz4hC9ulWahupDLovA\n#jbosnu https://telegram.me/joinchat/BLVsYz20Boixl0xN-0TrPw\n#spero https://telegram.me/joinchat/BcR2JD4jiwpKsTiof9rDRA\n##jboselbau https://telegram.me/joinchat/CJYorT2ma6UVfhb9YThEqw");
          break;
        case txt.trim() === '#uilkinse':
          benji(source, socket, clientmensi, sendTo, "https://mw.lojban.org/papri/The_analytical_language_of_John_Wilkins");
          break;
        case txt.trim() === '#smuvanbi':
          benji(source, socket, clientmensi, sendTo, "To answer this question it's necessary to provide a full usage example or context where you would use this word/construct.");
          break;
        case txt.trim() === '#jufra':
          benji(source, socket, clientmensi, sendTo, "Just say an English sentence and we will translate it for you.");
          break;
        case txt.trim() === '#purdi' || txt.trim() === '#gardenpath':
          benji(source, socket, clientmensi, sendTo, ".i le nu tu purdi mi melbi");
          break;
        case txt.trim() === '#gaha':
          benji(source, socket, clientmensi, sendTo, ".i .itku'ile ga'a mi");
          break;
        case txt.trim() === '#mohu':
          benji(source, socket, clientmensi, sendTo, "http://www.let.uu.nl/~Iris.Mulders/personal/foundations/borik-reinhart.pdf");
          break;
        case txt.trim() === '#erneta':
          benji(source, socket, clientmensi, sendTo, "http://jbotcan.org/lojban/en/SWH_confirmed.html");
          break;
        case txt.trim() === '#selkunti':
          benji(source, socket, clientmensi, sendTo, "Whorf described a workplace in which full gasoline drums were stored in one room and empty ones in another; he said that because of flammable vapor the \"empty\" drums were more dangerous than those that were full, although workers handled them less carefully to the point that they smoked in the room with \"empty\" drums, but not in the room with full ones. Whorf argued that by habitually speaking of the vapor-filled drums as empty and by extension as inert, the workers were oblivious to the risk posed by smoking near the 'empty drums'.");
          break;
        case txt.trim() === '#camxes':
          benji(source, socket, clientmensi, sendTo, "https://lojban.github.io/ilmentufa/camxes.html\nhttps://lojban.github.io/ilmentufa/glosser/glosser.htm");
          break;
        case txt.trim() === '#sepulka':
          benji(source, socket, clientmensi, sendTo, "https://mw.lojban.org/papri/sepulka/en");
          break;
        case txt.trim() === '#cilre':
          benji(source, socket, clientmensi, sendTo, "An extensive description of Lojban language: http://lojban.org/publications/cll/cll_v1.1_xhtml-section-chunks/\nSlicker methods of learning Lojban: https://mw.lojban.org/papri/Learn_Lojban:_new_methods\nYou might also want to bookmark a Lojban dictionary; the two most popular ones are http://la-lojban.github.io/sutysisku/en/ and https://vlasisku.alexburka.com\nAlso use this channel to ask any questions.");
          break;
        case txt.trim() === '#noiha':
          benji(source, socket, clientmensi, sendTo, "ko\'a broda poi\'a brodo = lo nu ko\'a broda cu fasnu gi\'e brodo\nko\'a broda noi\'a brodo = lo nu ko\'a broda cu fasnu .i lo go\'i cu brodo\nko\'a broda soi\'a brodo = lo nu ko\'a broda cu brodo\nko\'a broda soi ke\'a brodo = ko\'a broda .i lo nu go\'i cu brodo");
          break;
        case txt.trim() === '#n-paradigm':
          benji(source, socket, clientmensi, sendTo, "beu  B  Bekti  (object)  ‘-/in’  Patients, Parts, Properties\ncau  C  Canli  (quantity)  ‘by/for’  Quantities, Amounts, Values\ndio  D  Dirco  (direction)  ‘to/for’  Recipients, Beneficiaries, Destinations\nfoa  F  Folma  (full)  ‘in/of’  Wholes, Sets, Collectivities\njui  J  Junti  (young)  ‘than’  Lessers in greater/lesser than relations\nkao  K  Kakto  (act)  ‘-/by’  Actors, Agents, Doers\nneu  N  Nerbi  (necessary)  ‘under’  Conditions, Fields, Circumstances\npou  P  Proju  (produce)  ‘-’  Products, Outputs, Purposes\ngoa  G  Groda  (big)  ‘than’  Greaters in greater/lesser than relations\nsau  S  Satci  (start)  ‘from’  Sources, Origins, Reasons, Causes\nveu  V  Vetci  (event)  ‘by/via’  Events, States, Deeds, Means, Routes, Effects");
          break;
        case (txt.trim() === '#gadri'):
          benji(source, socket, clientmensi, sendTo, 'lo broda = su\'oi da poi ge ke\'a broda gi ro\'oi broda cu me ke\'a\nlo [PA] broda = zo\'e noi ke\'a broda [gi\'e zilkancu li PA lo broda]\nla [PA] broda = zo\'e noi lu [PA] broda li\'u cmene ke\'a mi\nlo PA sumti = lo PA me sumti\nla PA sumti = zo\'e noi lu PA sumti li\'u cmene ke\'a mi\nloi [PA] broda = lo gunma be lo [PA] broda\nlai [PA] broda = lo gunma be la [PA] broda\nloi PA sumti = lo gunma be lo PA sumti\nlai PA sumti = lo gunma be la PA sumti\nlo\'i [PA] broda = lo selcmi be lo [PA] broda\nla\'i [PA] broda = lo selcmi be la [PA] broda\nlo\'i PA sumti = lo selcmi be lo PA sumti\nla\'i PA sumti = lo selcmi be la PA sumti\nPA sumti = PA da poi ke\'a me sumti\nPA broda = PA da poi broda\npiPA sumti = lo piPA si\'e be pa me sumti\nle broda poi brode = le broda je ckaji lo ka ce\'u brode\nle broda ku poi brode = lo me le broda ku je brode');
          break;
      }
      break;
    case ".":
      switch (true) {
        case txt.indexOf(".lujvo ") === 0:
          let ma_lujvo;
          try {
            ma_lujvo = lojban.jvozba(po.split(" "));
            ma_lujvo = PrettyLujvoScore(ma_lujvo);
          } catch (e) {
            ma_lujvo = e.toString();
          }
          benji(source, socket, clientmensi, sendTo, ma_lujvo);
          break;
        case txt.indexOf(".k ") === 0:
          benji(source, socket, clientmensi, sendTo, lojban.ilmentufa_off(po, "C")["kampu"]);
          break;
        case (txt.indexOf(".yacc ") === 0 || txt.indexOf(".cowan ") === 0):
          tcepru(po, sendTo, source, socket);
          break;
        case (txt.indexOf(".gerna ") === 0 || txt.indexOf(".jbofi'e ") === 0):
          jbofihe(po, sendTo, source, socket);
          break;
        case txt.indexOf(".ilm ") === 0:
          benji(source, socket, clientmensi, sendTo, lojban.ilmentufa_off(po, "T")["kampu"]);
          break;
        case txt.indexOf(".ilm+") === 0:
          const params = `${txt} `.split(" ")[0].split("+")[1].toUpperCase();
          benji(source, socket, clientmensi, sendTo, lojban.ilmentufa_off(po, params)["kampu"]);
          break;
        case txt.indexOf(".beta ") === 0:
          benji(source, socket, clientmensi, sendTo, lojban.ilmentufa_exp(po, "T")["kampu"]);
          break;
        case txt.indexOf(".beta+") === 0:
          const params2 = `${txt} `.split(" ")[0].split("+")[1].toUpperCase();
          benji(source, socket, clientmensi, sendTo, lojban.ilmentufa_exp(po, params2)["kampu"]);
          break;
        case txt.indexOf(".raw ") === 0:
          benji(source, socket, clientmensi, sendTo, lojban.ilmentufa_off(po, "J")["kampu"]);
          break;
        case txt.indexOf(".zei ") === 0:
          benji(source, socket, clientmensi, sendTo, lojban.zeizei(po));
          break;
        case txt.indexOf(".anji ") === 0:
          benji(source, socket, clientmensi, sendTo, lojban.anji(po));
          break;
        case txt.indexOf(".kru ") === 0:
          benji(source, socket, clientmensi, sendTo, lojban.krulermorna(po));
          break;
        case txt.indexOf(".wn ") === 0:
          wordnet(source, socket, clientmensi, sendTo, po);
          break;
        case txt.indexOf(".wikt ") === 0:
          wiktionary(source, socket, clientmensi, sendTo, po);
          break;
        case txt.indexOf(".djbo ") === 0:
          wiktionary(source, socket, clientmensi, sendTo, po, "Lojban");
          break;
        case txt.indexOf(".den ") === 0:
          wiktionary(source, socket, clientmensi, sendTo, po, "English");
          break;
        case txt.indexOf(".dzh ") === 0:
          wiktionary(source, socket, clientmensi, sendTo, po, "Chinese");
          break;
        case txt.indexOf(".deo ") === 0:
          wiktionary(source, socket, clientmensi, sendTo, po, "Esperanto");
          break;
        case txt.search(`\\.(${robangu}) `) === 0:
          benji(source, socket, clientmensi, sendTo, vlaste(` ${po}`, ln = txt.split(" ")[0].substr(1)));
          break;
        case txt.indexOf('.bangu ') === 0:
          benji(source, socket, clientmensi, sendTo, bangu(po, from));
          break;
          // Give definition of valsi in specified language
        case (txt.indexOf('.selmaho ') === 0 || txt.indexOf('.selma\'o ') === 0):
          benji(source, socket, clientmensi, sendTo, selmaho(po));
          break;
        case txt.indexOf('.finti ') === 0:
          benji(source, socket, clientmensi, sendTo, finti(po.replace(/[^a-z'\.\*0-9]/g, '')));
          break;
        case txt.indexOf('.rafsi ') === 0:
          benji(source, socket, clientmensi, sendTo, rafsi_giho_nai_se_rafsi_gui(po.replace(/[^a-z'\.]/g, '')));
          break;
        case txt.indexOf('.gloss ') === 0:
          benji(source, socket, clientmensi, sendTo, lojban.gloss(po, 'en', false, false).join(" "));
          break;
        case txt.indexOf('.gimka ') === 0:
          benji(source, socket, clientmensi, sendTo, GimkaConflicts(po.replace(/[^a-z'\.\*0-9]/g, '')));
          break;
        case txt.indexOf('.loi ') === 0:
          benji(source, socket, clientmensi, sendTo, lojban.lojban2loglan(po));
          break;
        case txt.indexOf('.coi ') === 0:
          benji(source, socket, clientmensi, sendTo, lojban.loglan2lojban(po));
          break;
        case txt.indexOf('.ze ') === 0:
          lojban.zmifanva(po, 'en2jb', (a) => benji(source, socket, clientmensi, sendTo, a));
          break;
        case txt.indexOf('.zj ') === 0:
          lojban.zmifanva(po, 'jb2en', (a) => benji(source, socket, clientmensi, sendTo, a));
          break;
        case txt.indexOf(".rot13 ") === 0:
          benji(source, socket, clientmensi, sendTo, lojban.rotpaci(po));
          break;
        case txt.indexOf(".off ") === 0 || txt.indexOf(".exp ") === 0:
          benji(source, socket, clientmensi, sendTo, "Use '.ilm ' for la ilmentufa (PEG parser, BPFK proposals, stable implementation) or use '.beta ' for la ilmentufa (beta version)");
          break;
        case txt.search("(\.i |i |)ma rafsi zo [a-z']+") === 0:
          const rg = /.*ma rafsi zo ([a-z']+).*/;
          benji(source, socket, clientmensi, sendTo, rafsi_giho_nai_se_rafsi_gui(rg.exec(text)[1].replace(/[^a-z'\.]/g, '')));
          break;
        case txt.indexOf('.tatoeba ') === 0:
          benji(source, socket, clientmensi, sendTo, sisku(po));
          break;
      }
      break;
    default:
      switch (true) {
        case (txt.indexOf(`${prereplier}gadri`) === 0):
          benji(source, socket, clientmensi, sendTo, 'use #gadri instead');
          break;
          // case txt.indexOf("nlp:") === 0: stnlp(source,socket,clientmensi,sendTo,text.substr(4));break;
        case (txt.indexOf("yacc:") === 0 || txt.indexOf("cowan:") === 0):
          tcepru(pp, sendTo, source, socket);
          break;
          //case txt.indexOf(".tersmu ") === 0:
          //  tersmu(po, sendTo, source, socket);
          //  break;
        case (txt.indexOf(`${replier}: loadconfig`) === 0):
          loadConfig();
          benji(source, socket, clientmensi, sendTo, 'config reloaded from ~/.livla/config.json');
          break;
        case (txt.indexOf(`${replier}: ko ningau`) === 0 || txt.indexOf(`${replier}: ko cnino`) === 0):
          setTimeout(() => {
            updatexmldumps(({
              nalmulselfaho
            }) => {
              benji(source, socket, clientmensi, sendTo, 'i ba\'o jai gau cnino');
              const selsre = Object.keys(nalmulselfaho);
              if (selsre.length)
                benji(source, socket, clientmensi, sendTo, `i na kakne lo ka jai gau cnino fai la'e zoi zoi ${selsre.join(' ')} zoi`);
            });
            benji(source, socket, clientmensi, sendTo, 'sei ca ca\'o jai gau cnino be fai lo pe mi sorcu');
          }, 1);
          break;
        case txt.search(`(${robangu}):`) === 0:
          benji(source, socket, clientmensi, sendTo, vlaste(pp, txt.split(":")[0]));
          break;
        case txt.indexOf('frame: /full ') === 0:
          benji(source, socket, clientmensi, sendTo, vlaste(text.substr(12), 'en', 'framemulno'));
          break;
        case txt.indexOf('frame:/full ') === 0:
          benji(source, socket, clientmensi, sendTo, vlaste(text.substr(11), 'en', 'framemulno'));
          break;
          // Change default language
        case txt.indexOf('?:') === 0:
          inLanguage = RetrieveUsersLanguage(from, inLanguage);
          benji(source, socket, clientmensi, sendTo, vlaste(pp, inLanguage));
          break; // Gives definition of valsi in the default language set to user
        case txt.search("ra'oi [a-z']+ rafsi ma") === 0:
          const reg = /ra'oi ([a-z']+) rafsi ma/;
          benji(source, socket, clientmensi, sendTo, rafsi_giho_nai_se_rafsi_gui(reg.exec(text)[1].replace(/[^a-z'\.]/g, '')));
          break;
        case txt.search("(\.i |i |)ma rafsi zo [a-z']+") === 0:
          const rg = /.*ma rafsi zo ([a-z']+).*/;
          benji(source, socket, clientmensi, sendTo, rafsi_giho_nai_se_rafsi_gui(rg.exec(text)[1].replace(/[^a-z'\.]/g, '')));
          break;
        case txt.indexOf(`${prereplier}mhnt `) === 0:
          ningaumahantufa(text.substr(12), socket);
          break;
        case txt.indexOf(`${prereplier}getgr `) === 0:
          getmahantufagrammar(text.substr(13), socket);
          break;
        case txt === `${replier}: ju'i`:
          benji(source, socket, clientmensi, sendTo, `re'i`);
          break;
        case txt === `${replier}: aigne`:
          benji(source, socket, clientmensi, sendTo, 'CommonSenseError: Expected normal word but Curtis found.');
          break;
        case txt === `${replier}: help`:
          benji(source, socket, clientmensi, sendTo, sidju());
          break;
        case txt.indexOf(`${prereplier}r `) === 0:
          benji(source, socket, clientmensi, sendTo, lojban.rukylermorna(text.substr(prereplier.length + 1).trim()));
          break;
        case txt.indexOf(`${prereplier}j `) === 0:
          benji(source, socket, clientmensi, sendTo, lojban.jbopomofo(text.substr(prereplier.length + 1).trim()));
          break;
        case txt.indexOf('tatoeba:') === 0:
          benji(source, socket, clientmensi, sendTo, sisku(pp));
          break;
        case (txt.indexOf("jbofi'e:") === 0 || txt.indexOf("jbofihe:") === 0 || txt.indexOf("gerna:") === 0):
          benji(source, socket, clientmensi, sendTo, "Use '.jbofihe ' instead");
          break;
        case txt.indexOf("lujvo:") === 0:
          benji(source, socket, clientmensi, sendTo, "Use '.lujvo ' instead.");
          break;
        case txt.indexOf("exp:") === 0:
          benji(source, socket, clientmensi, sendTo, "Use '.exp ' instead");
          break;
        case txt.indexOf("anji:") === 0:
          benji(source, socket, clientmensi, sendTo, "Use '.anji ' instead.");
          break;
        case txt.indexOf("off:") === 0:
          benji(source, socket, clientmensi, sendTo, "Use '.off ' instead.");
          break;
        case txt.indexOf('gloss:') === 0:
          benji(source, socket, clientmensi, sendTo, "Use '.gloss ' instead.");
          break;
        case sendTo === from:
          inLanguage = RetrieveUsersLanguage(from, inLanguage);
          benji(source, socket, clientmensi, sendTo, vlaste(` ${text.trim()}`, inLanguage)); // Gives definition of valsi in the default language set to user
          break;
      }
      break;
  }
};
/*
client.addListener('message', (from, to, text, message) => {
  processorlivla(client, from, to, text, message);
});
*/

clientmensi.addListener('message', (from, to, text, message) => {
  processormensi(clientmensi, from, to, text, message);
});

clientmensi.addListener('error', message => {
  console.log(message.toString());
});

//NAXLE

const app = require('express')();
const https = require('https');
const serverSocket = https.createServer({
  key: fs.readFileSync(path.join(__dirname, '/../file.pem')),
  cert: fs.readFileSync(path.join(__dirname, '/../file.crt')),
  ca: fs.readFileSync(path.join(__dirname, '/../intermediate.key')),
  requestCert: true,
  rejectUnauthorized: false
}, app);
serverSocket.listen(3002);

const io = require('socket.io').listen(serverSocket);

io.sockets.on('connection', (socket) => {
  socket.on('le_te_cusku_be_fi_la_livla', data => {
    //clientmensi, from, to, text, message,source
    // if (!(data.data.indexOf(`${prereplier}doi`) === 0) && !(data.data.indexOf(`${prereplier}tell`) === 0)) {
    processormensi(clientmensi, "mw.lojban.org", "", data.data, "", "naxle", socket);
    // }
  });
});
