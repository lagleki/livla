/* jshint bitwise: false */
const lg = console.log.bind(console);
const p = object => JSON.stringify(object);

// livla bot
const fs = require("fs");
const path = require("path-extra");
const ospath = require("ospath");
const R = require("ramda");
const lojban = require("lojban");
const he = require("he");
const { to } = require("await-to-js");
const rp = require("request-promise-native");

const db = require("better-sqlite3")(
  path.join(__dirname, "../lojbo.arxivo", "messages.sql")
);
db.function("regexp", (text, pattern) => {
  const p = new RegExp(pattern, "i");
  return p.test(text) ? 1 : 0;
});
db.pragma("journal_mode = WAL");

const sanitizeHtml = require("sanitize-html");

const tato = require("./tatoeba.js");
const interv = 300000;
const interm = 2900;
const nodasezvafahi = "no da se zvafa'i";
const tersepli = " + ";
const commandPrefix = ".";
const langs = [
  "jbo",
  "en",
  "ru",
  "es",
  "fr",
  "pl",
  "ja",
  "de",
  "eo",
  "zh",
  "en-simple",
  "fr-facile",
  "hu",
  "sv"
];
const robangu = [
  "fr-facile",
  "en",
  "ru",
  "pl",
  "de",
  "ja",
  "jbo",
  "guaspi",
  "loglan",
  "eo",
  "fr",
  "2002",
  "es",
  "zh",
  "sv",
  "en-simple",
  "krasi",
  "dukti",
  "laadan",
  "toki"
];
// Default configuration, may be modified by “loadConfig”, with the content of
// “~/.livla/config.json.
let tcan =
  "#lojban,#ckule,#tokipona,#jbosnu,#jboguhe,#spero,#pepper&carrot,##jboselbau,##esperanto,#polsk,#tokpona,#ponjbo,#rusko";
let localConfig;
let nuzbytcan = "#lojban";
let replier = "mensi";
let password = "";
let server = "irc.freenode.net";
let twitter_id = "good_opinions,opinions_good,cunsku";
let consumer_key, consumer_secret, access_token_key, access_token_secret;
let arr_twitter_id;

// End default configuration
const commonConfig = require("../config/config.js");
const config = require(path.join(
  require("os").homedir(),
  ".livla/config.json"
));

let userSettings = {}; // Saving user preferences
userSettings[replier] = {
  language: "jbo"
};

const defaultLanguage = "en"; // Maybe someday should be replaced with "jbo" when Lojban definitions almost equal that of English
let said;

// Ensure that a path exists, and that it is a dir.
const ensureDirExistence = path => {
  // We first try to make a dir. If it was missing, now, it is not
  // anymore.
  try {
    fs.mkdirSync(path);
  } catch (e) {
    // If creation of the dir failed, there can be many reasons.
    // However, if the reason is not “there was already a file
    // there!”, we don't want to ignore the error, so we throw it
    // again.
    if (!e.code || e.code !== "EEXIST") {
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
};

// Used to read the content of any file that is located in “~/.livla/”.
// Return an empty string if the file does not exist.
const readConfig = filename => {
  const configDirectory = path.join(ospath.home(), ".livla");
  ensureDirExistence(configDirectory);
  const file = path.join(configDirectory, filename);
  try {
    return fs.readFileSync(file, {
      encoding: "utf8"
    });
  } catch (e) {
    // If we get an “ENOENT” error, we return an empty string.
    // Other errors are still thrown.
    if (!e.code || e.code !== "ENOENT") {
      throw e;
    }
    return "";
  }
};

// Load every line of “~/.livla/notci.txt” into “notci”, as an array.
// Define “notcijudri” as the file path that will be used later when we want to
// save the content of “notci”.
let notci, notcijudri;
const loadNotci = () => {
  notci = readConfig("notci.txt").split("\n");
  notcijudri = path.join(ospath.home(), ".livla", "notci.txt");
};

// Load the configuration from “~/.livla/config.json”, and modify the default
// config accordingly.
const loadConfig = () => {
  const either = (obj, a, b) => {
    a = R.path(a.split("."), obj);
    if (a) return a;
    return b;
  };
  localConfig = readConfig("config.json");
  if (localConfig.trim() === "") return; // Empty config, we do nothing.
  localConfig = JSON.parse(localConfig);

  replier = either(localConfig, "replier.name", replier);
  tcan = either(localConfig, "tcan", tcan);
  server = either(localConfig, "server", server);
  password = either(localConfig, "replier.password", "");
  consumer_key = either(localConfig, "consumer_key", "");
  consumer_secret = either(localConfig, "consumer_secret", "");
  access_token_key = either(localConfig, "access_token_key", "");
  access_token_secret = either(localConfig, "access_token_secret", "");
  twitter_id = either(localConfig, "twitter_id", twitter_id);
  arr_twitter_id = twitter_id.split(",");

  if (!commonConfig.disableIrcBots && !commonConfig.disableTwitter) {
    const Twitter = require("twitter-lite");

    const t = new Twitter({
      consumer_key,
      consumer_secret,
      access_token_key: access_token_key,
      access_token_secret: access_token_secret
    });

    const parameters = {
      track: "#lojban,#ithkuil,#loglan"
    };

    const stream = client
      .stream("statuses/filter", parameters)
      .on("start", response => console.log("start"))
      .on("data", { text, user, id_str } => {
        if (text) {
          const message = `@${user.screen_name}: ${text.replace(
            /[\n\r\t]/g,
            " "
          )} [https://twitter.com/${user.screen_name}/status/${id_str}]`;
          const screen_name = user.screen_name;
          if (!arr_twitter_id.includes(screen_name)) {
            benji({ sendTo: nuzbytcan, what: message, action: true });
          }
        }
      })
      .on("ping", () => console.log("ping"))
      .on("error", error => console.log("error", error))
      .on("end", response => console.log("end"));
  }
};

loadConfig();

const configmensi = {
  server,
  nick: replier,
  options: {
    autoConnect: true,
    autoRejoin: true,
    autoRenick: true,
    channels: [tcan],
    password,
    debug: false,
    messageSplit: 1900,
    realName: "http://lojban.org/papri/IRC_Bots",
    userName: replier,
    floodProtection: true,
    floodProtectionDelay: 400
  }
};

// Load the user configuration from “~/.livla/user-settings.json”
// These are settings
const loadUserSettings = () => {
  const localConfig = readConfig("user-settings.json");
  if (localConfig.trim() === "") return;
  userSettings = JSON.parse(localConfig);
};

loadUserSettings();
loadNotci();

// store en dump in memory
let jsonDocEn;
jsonDocEn = getJsonDoc("en");
if (jsonDocEn.error) {
  jsonDocEn = getJsonDoc("toki");
}

const updateUserSettings = callback => {
  readConfig("user-settings.json"); // Ensure existance

  const body = JSON.stringify(userSettings);
  const configDirectory = path.join(ospath.home(), ".livla");
  const filename = "user-settings.json";
  const file = path.join(configDirectory, filename);
  try {
    fs.writeFileSync(file, body);
    lg("User settings updated");
  } catch (e) {
    // If we get an “ENOENT” error, we return an empty string.
    // Other errors are still thrown.
    if (!e.code || e.code !== "ENOENT") {
      throw e;
    }
  }
};

// IRC bot
let clientmensi;
if (!commonConfig.disableIrcBots) {
  const Irc = require("irc-upd");
  lg("channels", configmensi.options.channels);
  clientmensi = new Irc.Client(
    configmensi.server,
    configmensi.nick,
    configmensi.options
  );
}

const vric = () => {
  const vricar = [tato.tatoebaprocessing(replier)];
  return vricar[Math.floor(vricar.length * Math.random())];
};

let sisku = lin => {
  let s = "";
  let i = 0;
  while (s.indexOf(lin) < 0 && i < 20000) {
    s = tato.tatoebaprocessing();
    i++; // in case we found nothing exit
  }
  if (s === "" && i < 20000) {
    s = ": e'u do sisku tu'a lo nalkunti uenzi";
  }
  if (i >= 20000) {
    s = nodasezvafahi;
  }
  return s;
};

function fastParse(file) {
  return require("fast-xml-parser").parse(
    fs
      .readFileSync(file, {
        encoding: "utf8"
      })
      .replace(/(&lt;|<)script.*?(&gt;|>).*?(&lt;|<)/g, "&lt;")
      .replace(/(&lt;|<)\/script(&gt;|>)/g, ""),
    {
      attributeNamePrefix: "",
      ignoreAttributes: false,
      allowBooleanAttributes: false,
      parseNodeValue: false,
      parseAttributeValue: false,
      attrValueProcessor: a => he.decode(a, { isAttributeValue: true }),
      tagValueProcessor: a => he.decode(a)
    }
  );
}

function benji({ socket, sendTo, what, action }) {
  if (socket) {
    socket.emit("la_livla_cu_cusku", {
      message: what
    });
    return what;
  } else if (clientmensi) {
    if (!action) {
      clientmensi.say(sendTo, what);
    } else {
      clientmensi.action(sendTo, what);
    }
  }
}

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
    case "ru":
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
    if (!lng) return defaultLanguage;
    return lng;
  }
  return userSettings[username].language;
};

const lojTemplate = s => {
  s = s.replace(/\$.*?\$/g, c => {
    c = c.substring(1, c.length - 1);
    return c
      .replace(/(\w+)_\{(\d+)\}/g, "$1$2")
      .replace(/(\w+)_(.+)/g, "$1$2")
      .replace(/\{/g, "[")
      .replace(/\}/g, "]");
  });
  s = s
    .replace(/\{(.*?)\}/g, c => c.substring(1, c.length - 1))
    .replace(/`/g, "'")
    .replace(/ {2,}/g, " ");
  return s;
};

const getLocalizationString = ({
  language,
  param,
  json,
  string,
  defaultLanguage = "en"
}) => {
  if (!language || !json[language] || !json[language][string])
    language = defaultLanguage;
  return (json[language][string] || "").replace(/%s/g, param || "");
};

const locals = require("./locals.json");

const GetWordDef = ({ word, language, jsonDoc }) => {
  const words = jsonDocDirection(jsonDoc)
    .valsi.filter(valsi => valsi.word.toLowerCase() === word)
    .map(v => {
      let arr = [];
      if (v.type === "cmavo" && v.user && v.user.username !== "officialdata") {
        let enword;
        if (language === "en") {
          enword = valsi;
        } else {
          enword = jsonDocDirection(jsonDocEn).valsi.filter(
            valsi => valsi.word.toLowerCase() === word
          )[0];
        }
        if (R.path(["user", "username"], enword) !== "officialdata") {
          v.type = getLocalizationString({
            language,
            json: locals,
            string: "cmavo gi'e na se zanru lo catni"
          });
        }
      }
      if (v.type)
        arr.push(
          getLocalizationString({
            language,
            param: v.type,
            json: locals,
            string: "klesi"
          })
        );
      if (v.selmaho)
        arr.push(
          getLocalizationString({
            language,
            param: v.selmaho,
            json: locals,
            string: "selmaho"
          })
        );
      if (v.word)
        arr.push(
          getLocalizationString({
            language,
            param: v.word,
            json: locals,
            string: "valsi"
          })
        );
      if (v.definition)
        arr.push(
          getLocalizationString({
            language,
            param: lojTemplate(v.definition),
            json: locals,
            string: "smuvelcki"
          })
        );
      if (v.notes)
        arr.push(
          getLocalizationString({
            language,
            param: lojTemplate(v.notes),
            json: locals,
            string: "pinka"
          })
        );
      if (v.example)
        arr.push(
          getLocalizationString({
            language,
            param: v.example,
            json: locals,
            string: "mupli"
          })
        );
      if (v.user && v.user.username)
        arr.push(
          getLocalizationString({
            language,
            param: v.user.username,
            json: locals,
            string: "finti"
          })
        );
      arr = arr.join(" ").trim();
      return arr;
    })
    .join("\n");
  return words.length > 0 ? words : undefined;
};

function getJsonDoc(language) {
  if (language !== "en" || !jsonDocEn) {
    const jsonPath = path.join(__dirname, "../dumps", `${language}.json`);
    if (!fs.existsSync(jsonPath)) {
      const error = `.i no da liste lo valsi be fi lo se sinxa be zoi zoi.${language}.zoi`;
      return { error };
    }
    return getJsonDump(jsonPath);
  }
  return jsonDocEn;
}

function getJsonDump(filePath) {
  let dump;
  if (!fs.existsSync(filePath)) {
    dump = fastParse(filePath.replace(/\.json$/, ".xml"));
    fs.writeFileSync(filePath, JSON.stringify(dump));
  } else {
    try {
      dump = JSON.parse(fs.readFileSync(filePath));
    } catch (error) {
      dump = {};
    }
  }
  return dump;
}

const PrettyLujvoScore = a =>
  a
    .filter(({ lujvo, score }) => /[aeiou]/.test(lujvo.slice(-1)[0]))
    .map(({ lujvo, score }) => `${lujvo}: ${score}`)
    .join(", ");

const MultipleDefs = ({ word, language }) => {
  let lin = word
    .replace(/\"/g, "")
    .replace(/\)$/, "")
    .replace(/^[\(\.]/, "");
  jsonDoc = getJsonDoc(language);
  let pre = "";
  if (lojban.xulujvo(word)) {
    try {
      const l = lojban.jvokaha_gui(word);
      const f = lojban
        .jvozba(l)
        .filter(({ lujvo }) => /[aeiou]/.test(lujvo.slice(-1)));
      const fslice = f.slice(0, Math.min(f.length, 3));
      const arr_defs = fslice
        .map(({ lujvo }) => {
          return GetWordDef({ word: lujvo, language, jsonDoc });
        })
        .filter(Boolean);
      const l_joined = l.join(" ");
      const glossed =
        language !== "jbo"
          ? lojban.gloss(l_joined, language, jsonDoc, false).join(tersepli)
          : l_joined;
      pre = `${PrettyLujvoScore(fslice)}\n${l_joined} ≈ ${glossed}\n`;
      if (arr_defs.length > 0) {
        return pre + `${arr_defs.join("\n")}`;
      }
    } catch (e) {
      lg(e.toString());
      return e.toString();
    }
  }
  // otherwise just
  const mo = GetWordDef({ word, language, jsonDoc });
  if (mo) return mo;

  // if nothing found try full-text search
  const mulno = mulno_sisku({ word: lin, language, jsonDoc });
  if (mulno) return pre + mulno;
  if (pre !== "") return pre;
  return nodasezvafahi;
};

const mulno_sisku = ({ word, language, jsonDoc }) => {
  if (!jsonDoc) jsonDoc = getJsonDoc(language);
  let r = {
    word: [],
    gloss: [],
    partialWord: [],
    partialGloss: [],
    definition: [],
    notes: [],
    related: []
  };
  jsonDocDirection(jsonDoc).valsi.filter(v => {
    if (v.word === word) {
      r.word.push(v.word);
    } else if (v.word.search(new RegExp(word)) >= 0) r.partialWord.push(v.word);

    if (v.glossword) {
      if (
        (
          R.path(["glossword", "word"], v) ||
          R.pathOr("", ["glossword", 0, "word"], v)
        ).toLowerCase() === word
      ) {
        r.gloss.push(v.word);
      } else if (
        (
          R.path(["glossword", "word"], v) ||
          R.pathOr("", ["glossword", 0, "word"], v)
        )
          .toLowerCase()
          .indexOf(word) === 0
      ) {
        r.partialGloss.push(v.word);
      }
    }
    if (v.definition && v.definition.toLowerCase().indexOf(word) >= 0) {
      r.definition.push(v.word);
    }
    if (v.notes && v.notes.toLowerCase().indexOf(word) >= 0)
      r.notes.push(v.word);
    if (v.related && v.related.toLowerCase().indexOf(word) >= 0)
      r.related.push(v.word);
  });
  r = [].concat(
    ...[
      r.word,
      r.gloss,
      r.partialWord,
      r.partialGloss,
      r.definition,
      r.notes,
      r.related
    ]
  );
  r = uniques(r);

  const xo = r.length;
  if (xo > 30) {
    r.splice(30);
    r.push("...");
  }
  if (xo > 1) {
    return `${xo} da se zvafa'i: ${r.join(", ").trim()}`;
  }
  if (r.length === 1) {
    return GetWordDef({ word: r[0], language, jsonDoc });
  }
};

const katna = (lin, language, jsonDoc) => {
  const l = lojban.jvokaha_gui(lin);
  if (!l) return "";
  const a = l.join(" ");
  const b =
    language !== "jbo"
      ? lojban.gloss(a, language, jsonDoc, false).join(tersepli)
      : a;
  return `${lin} ≈ ${b}`;
};

const selmaho = word => {
  word = word.toLowerCase();
  let r = lojban.selmaho({ word, jsonDoc: jsonDocEn });
  let res = [];
  if (r.full.length > 0) {
    res.push(
      `[${word.toUpperCase().replace(/H/g, "h")}] ${r.full
        .map(i => `${i}`)
        .join(",")}`
    );
  }
  if (r.CLL) {
    res.push(`${r.CLL.replace(/ /g, "\n")}`);
  }
  if (r.partial.length > 0) {
    res.push(
      `[${word.toUpperCase().replace(/H/g, "h")}...] ${r.partial
        .map(i => `${i}`)
        .join(",")}`
    );
  }
  return res.join("\n");
};

const vlaste = ({ word, language }) => {
  word = word.toLowerCase().trim();
  let ret;
  if (word.substr(0, 5).trim() === "/full") {
    ret = mulno_sisku({ word: word.substr(6).trim(), language });
  } else {
    ret = MultipleDefs({ word, language });
  }
  return ret.replace(/(.{190,250})(, |[ \.\"\/])/g, "$1$2\n");
};

const sidju = () => {
  const sidj = {
    en: `Parsers: type ".ilm " (stable BPFK grammar), ".beta " (experimental), ".jbofihe " (jbofi'e), or ".yacc " (official yacc) followed by the text to show the structure of sentences.\nLojban dictionary: type ".language-code word", where language code is one of jbo,en,ru,es,fr,fr-facile,ja,de,eo,zh,hu,sv. This searches in both directions.\n    ".selmaho ca'a" gives "CAhA", ".selmaho CAhA" gives "bi'ai, ca'a, ..."\n    ".rafsi kulnu" gives "klu", ".rafsi klu" gives "kulnu"\nOther conlang dictionaries: ".toki ", ".laadan ", ".loglan "\nLojban <-> Loglan conversion (incomplete): ".coi ", ".loi "\n"Tatoeba: klama" gets a random example sentence using "klama"\nDelayed messaging: type "${replier}: doi user message" to send "message" to "user" when they return`
  };
  return sidj.en;
};

function jsonDocDirection(jsonDoc) {
  return jsonDoc.dictionary.direction[0] || jsonDoc.dictionary.direction;
}
function prepareSutysiskuJsonDump(language) {
  const jsonDoc = getJsonDump(
    path.join(__dirname, "../dumps", `${language}.json`)
  );
  let json = {};
  const words = jsonDocDirection(jsonDoc).valsi.map(v => {
    json[v.word] = {
      d: v.definition,
      n: v.notes,
      t: v.type,
      s: v.selmaho,
      g: v.glossword
        ? R.path(["glossword", "word"], v) ||
          R.path(["glossword", 0, "word"], v)
        : undefined,
      e: v.example,
      k: v.related
    };
    if (v.rafsi) {
      if (Array.isArray(v.rafsi)) {
        json[v.word].r = v.rafsi;
      } else {
        json[v.word].r = [v.rafsi];
      }
    } else {
      json[v.word].r = [];
    }
    if (v.type === "gismu" && v.word.indexOf("brod") !== 0) {
      json[v.word].r.push(v.word.substr(0, 4));
    }
    if (v.word === "broda") {
      json[v.word].r.push("brod");
    }
    if (json[v.word].r.length === 0) delete json[v.word].r;
    Object.keys(json[v.word]).forEach(
      key =>
        (json[v.word][key] === undefined || json[v.word][key] === []) &&
        delete json[v.word][key]
    );
  });
  return `sorcu["${language}"] = ${JSON.stringify(json)}`;
}
const ningau_palasutysisku = (language, lojbo) => {
  // write a new file parsed.js that would be used by la sutysisku
  if (!language) language = "en";
  const pars = prepareSutysiskuJsonDump(language);
  let t = path.join(
    __dirname,
    "../build/sutysisku/data",
    `parsed-${language}.js`
  );
  fs.writeFileSync(`${t}.temp`, pars);
  fs.renameSync(`${t}.temp`, t);
  t = path.join(
    __dirname,
    `../build/sutysisku/${language}/`,
    "webapp.appcache"
  );
  const d = new Date();
  let n = d.getDate();
  if (n === 1 || n === 11 || n === 21) {
    try {
      n = `${d.getFullYear()}-${d.getMonth() +
        1}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      pars = fs
        .readFileSync(t, {
          encoding: "utf8"
        })
        .replace(/\n# .+\n/, `\n# ${n}\n`);
      fs.writeFileSync(t, pars);
      lg(`${t} updated`);
    } catch (err) {}
  }
};

const tcepru = (lin, sendTo, socket) => {
  const exec = require("child_process").exec;
  exec(
    `${path.join(__dirname, "../tcepru/./parser")} <<<"${lin}" 2>/dev/null`,
    (error, stdout, stderr) => {
      lin = stdout;
      if (error !== null) {
        lin = `O_0${stderr.toString()}`;
      }
      benji({
        socket,
        sendTo,
        what: lin.replace(/\n/g, " ").replace(/ {2,}/g, " ")
      });
    }
  );
};

const jbofihe = (lin, sendTo, socket) => {
  const exec = require("child_process").exec;
  exec(
    `${path.join(
      __dirname,
      "../jbofihe/./jbofihe"
    )} -ie -cr <<<"${lin}" 2>/dev/null`,
    (error, stdout, stderr) => {
      lin = stdout;
      if (error !== null) {
        lin = `O_0${stderr.toString()}`;
      }
      if (lin === "") lin = "O_0";
      benji({
        socket,
        sendTo,
        what: lin.replace(/\n/g, " ").replace(/ {2,}/g, " ")
      });
    }
  );
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

const tersmu = (lin, sendTo, socket) => {
  const anj = require("../tersmu/all.js");
  benji({ socket, sendTo, what: anj.h$main(lin) });
};

const mensimikce = text => {
  // eliza bot analog
  let Mensibot = require("../mikce/mensimikce.js");
  // Mensibot.start(); // initializes Mensi and returns a greeting message
  const r = Mensibot.reply(text).toString();
  Mensibot = null;
  return r;
};

// mahantufa
const ningaumahantufa = (text, socket) => {
  // write file
  const whichfile = text.substr(0, text.indexOf(" "));
  text = text.substr(text.indexOf(" ") + 1);
  const t = path.join(__dirname, `.${whichfile}.peg`);
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
    const fd = fs.openSync(whichfile, "w+");
    let buffer = new Buffer("var camxes = ");
    fs.writeSync(fd, buffer, 0, buffer.length);
    buffer = new Buffer(camxes);
    fs.writeSync(fd, buffer, 0, buffer.length);
    // buffer = new Buffer("\n\nmodule.exports = camxes;\n\nterm = process.argv[2];\nif (term !== undefined && typeof term.valueOf() === 'string')\n  lg(JSON.stringify(camxes.parse(term)));\n\n");
    buffer = new Buffer("");
    fs.writeSync(fd, buffer, 0, buffer.length);
    fs.close(fd);
    const ya = require("uglify-js").minify(whichfile).code;
    fs.writeFileSync(whichfile, ya);
    socket.emit("la_livla_cu_cusku", {
      message: "snada",
      data_js: ya
    });
  } catch (e) {
    socket.emit("la_livla_cu_cusku", {
      message: e.message
    });
  }
};

const getmahantufagrammar = (name, socket) => {
  try {
    socket.emit("le_te_cusku_be_fi_la_livla_cu_cpacu_pa_vreji", {
      message: "snada",
      data: fs.readFileSync(path.join(__dirname, `${name}.peg`)).toString(),
      data_js: fs.readFileSync(path.join(__dirname, name)).toString()
    });
  } catch (e) {
    socket.emit("le_te_cusku_be_fi_la_livla_cu_cpacu_pa_vreji", {
      message: "fliba",
      data: e.message
    });
  }
};

async function downloadSingleDump({ language, erroredLangs }) {
  const request = require("request").defaults({
    jar: true,
    strictSSL: false
  });
  const jar = request.jar();
  const cookie = request.cookie(
    "jbovlastesessionid=U2FsdGVkX1%2FpiXtl1FSyMUZvFTudUq0N59YatQesEbsfdQ6owwMDeA%3D%3D"
  );

  let t = path.join(__dirname, "../dumps", `${language}`);
  try {
    fs.unlinkSync(`${t}.xml.temp`);
  } catch (error) {}
  let file = fs.createWriteStream(`${t}.xml.temp`);

  await new Promise((resolve, reject) => {
    const uri = `http://jbovlaste.lojban.org/export/xml-export.html?lang=${language}`;
    jar.setCookie(cookie, uri);
    request({
      uri,
      method: "GET",
      jar
    })
      .pipe(file)
      .on("finish", () => {
        try {
          const jsonDoc = fastParse(`${t}.xml.temp`);
          fs.writeFileSync(`${t}.json`, JSON.stringify(jsonDoc));
          fs.unlinkSync(`${t}.xml.temp`);
          if (language === "en") {
            jsonDocEn = jsonDoc;
          }
        } catch (error) {
          lg(error);
          erroredLangs.push(language);
        }
        resolve();
      })
      .on("error", error => {
        lg(error);
        erroredLangs.push(language);
        resolve();
      });
  }).catch(error => {
    console.log(`Something happened: ${error}`);
    erroredLangs.push(language);
  });
  return erroredLangs;
}
async function updateXmlDumps() {
  let erroredLangs = [];
  for (const language of langs) {
    erroredLangs = await downloadSingleDump({ language, erroredLangs });
  }
  for (const language of [
    "2002",
    "en-pt-BR",
    "zamenhofo",
    "ile",
    "ina",
    "toki",
    "ktv-eng",
    "ldp"
  ].concat(langs)) {
    try {
      ningau_palasutysisku(language, langs.includes(language) ? 1 : 0);
    } catch (error) {
      lg(error);
      erroredLangs.push(language);
    }
  }
  return uniques(erroredLangs);
}

setInterval(() => {
  updateXmlDumps();
}, 3 * 24 * 60 * 60 * 1000); // update logs once 3 djedi

const GimkaConflicts = valsi => {
  const gimka = require("../skripto/gimka.js");
  const r = gimka.WhichIsInConflictAll(valsi, jsonDocEn);
  return `[${r.official}] - official gismu that conflict with {${valsi}}\n[${r.experimental}] - experimental gismu that conflict with {${valsi}}`;
};
const wordnet = ({ socket, sendTo, text }) => {
  const natural = require("natural");
  const wn = new natural.WordNet();
  wn.lookup(text, defs => {
    if (!defs || defs.length === 0) {
      benji({ socket, sendTo, what: "[not found]" });
    }
    defs.forEach(w => {
      const num = w.synsetOffset ? `[${w.synsetOffset}] ` : "";
      const lemma = w.lemma ? `"${w.lemma}" ` : "";
      const pos = w.pos ? `/${w.pos}/ ` : "";
      // const wCnt = w.wCnt ? `frequency: ${w.wCnt}` : '';
      const firstline = (lemma + pos + num).trim();
      const prettyfirstline = firstline !== "" ? `${firstline} -\n` : "";
      const def = w.def ? `..... ${w.def}\n` : "";
      const exp = w.exp && w.exp.length > 0 ? `..... examples: ${w.exp}\n` : "";
      const syns = w.synonyms
        ? `..... synonyms: ${w.synonyms
            .toString()
            .split(",")
            .map(i => i.replace(/_/g, " "))
            .join(", ")}\n`
        : "";
      const whole = prettyfirstline + def + exp + syns;
      benji({ socket, sendTo, what: whole });
    });
  });
};
const wiktionary = ({ socket, sendTo, text, bangu }) => {
  let wor = text;
  if (!bangu) {
    wor = text.split("/");
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
  lojban.wiktionary(wor, bangu, a => benji({ socket, sendTo, what: a }));
};

const rafsi_giho_nai_se_rafsi = te_gerna => {
  const a = lojban.rafsi_giho_nai_se_rafsi(te_gerna, jsonDocEn);
  let res = [];
  if (a.rafsi.filter(Boolean).length > 0) {
    res = res.concat(
      a.rafsi
        .filter(Boolean)
        .map(i => `ra'oi ${i}`)
        .join(" .e ") + ` rafsi zo ${te_gerna}`
    );
  }
  if (a.selrafsi.filter(Boolean).length > 0) {
    res = res.concat(
      a.selrafsi
        .filter(Boolean)
        .map(i => `zo ${i}`)
        .join(" .e ") + ` se rafsi ra'oi ${te_gerna}`
    );
  }
  res = uniques(res).join("\n");
  if (res.length === 0) return ".i no da se zvafa'i";
  return res;
};

function uniques(array) {
  return [...new Set(array)];
}

function cpedu_fi_la_arxivo(pattern, max) {
  const query = `SELECT m.subject as subject, m.text as text, m.behi as behi, m.date as date FROM messages m where (regexp(m.text,'${pattern.replace(
    /'/g,
    "''"
  )}')=1) or (regexp(m.subject,'${pattern
    .replace(/'/g, "''")
    .replace(
      /^Re: (\[.*?\] )*/g,
      ""
    )}')=1) group by m.subject,m.text order by m.date desc,m.subject limit ${max}`;
  const rows = db.prepare(query).all();
  // db.close();
  return rows.map(i => {
    let text = i.text;
    if (text.indexOf("<html") >= 0) {
      text = text.replace(/[\r\n]+</g, "<").replace(/>[\r\n]+/g, ">");
    }
    text = sanitizeHtml(text.replace(/<!--([\s\S]+?)-->/gim, ""))
      .replace(/( *[\r\n]){1,}/g, "\n")
      .replace(/^[\r\n]+/g, "")
      .replace(/ *[\r\n]+$/g, "");

    let date;
    try {
      date = new Date(parseInt(i.date))
        .toISOString()
        .replace(/^(.*?)T(.*):..\....Z$/, "$1 $2");
    } catch (error) {
      date = i.date;
    }
    return {
      d: text,
      w: i.subject,
      from: i.behi,
      date
    };
  });
}

function replyToHashed({ text, socket, sendTo }) {
  const hashed = require("./hashed.json");
  if (hashed[text]) {
    benji({ socket, sendTo, what: hashed[text] });
    return true;
  }
}

function replyToVocatives({ from, text, sendTo, socket }) {
  const vocatives = require("./vocatives.json");
  const format = require("string-format");

  text = text.replace(/ {2,}/g, " ").split(" ");
  if (text[0] !== `${replier}:`) return;
  let message = text.slice(2);
  const vocative = text[1];
  if (vocatives[vocative]) {
    const towhom = message[0]
      .replace(/[0-9.,\/#!$%\^&\*;:{}=\-_`~()]$/g, "")
      .replace(/[^a-zA-Z]/g, ".");
    message = message
      .slice(1)
      .join(" ")
      .trim()
      .replace(/^la /, "")
      .replace("\\t", " ");
    if (from.search(new RegExp(towhom)) >= 0) {
      benji({
        socket,
        sendTo,
        what: format(vocatives[vocative]["cusku fi le nei"], { from })
      });
    } else if (replier.search(new RegExp(towhom)) >= 0) {
      benji({
        socket,
        sendTo,
        what: format(vocatives[vocative]["mi na bebna"], { from })
      });
    } else {
      const ds = new Date();
      notci.push(
        `${from
          .replace(/^\.+/, "")
          .replace(/\.+$/, "")
          .trim()}\t${text} | ${ds.toISOString()}`
      );
      benji({
        socket,
        sendTo,
        what: format(vocatives[vocative]["ai ba benji"], {
          from,
          addressee: towhom,
          prefix: ".gy."
        })
      });
      fs.writeFileSync(notcijudri, notci.join("\n"));
      loadNotci();
    }
    return true;
  }
}

function sendDelayed({ from, sendTo, socket }) {
  for (let l = 0; l < notci.length; l++) {
    // sendTo
    if (notci[l].length === 0) continue; // prevent a crash if the line is empty
    let cmenepagbu = notci[l].split("\t"); // .substr(0, notci[l].indexOf('\t'));
    let sem;
    try {
      sem = new RegExp(cmenepagbu[1].toLowerCase(), "gim");
    } catch (err) {
      sem = "";
    }
    if (from.match(sem) !== null) {
      cmenepagbu = notci[l].split("\t");
      benji({
        socket,
        sendTo,
        what: `${from}: cu'u la'o gy.${cmenepagbu[0]}.gy.: ${cmenepagbu[2]}`.replace(
          /(.{190,250})(, |[ \.\"\/])/g,
          "$1$2\n"
        )
      });
      notci.splice(l, 1);
      l = l - 1;
      fs.writeFileSync(notcijudri, notci.join("\n"));
    }
  }
}
jsonCommand = {
  lujvo: text => {
    let ma_lujvo;
    try {
      ma_lujvo = lojban.jvozba(text.split(" "));
      ma_lujvo = PrettyLujvoScore(ma_lujvo);
    } catch (e) {
      ma_lujvo = e.toString();
    }
    return ma_lujvo;
  },
  k: text => lojban.ilmentufa_off(text, "C")["kampu"],
  ilm: text => lojban.ilmentufa_off(text, "T")["kampu"],
  "ilm+": text => {
    const params = `${text} `.split("+")[1].toUpperCase();
    return lojban.ilmentufa_off(text, params)["kampu"];
  },
  beta: text => lojban.ilmentufa_exp(text, "T")["kampu"],
  "beta+": text => {
    const params = `${text} `.split("+")[1].toUpperCase();
    return lojban.ilmentufa_exp(text, params)["kampu"];
  },
  raw: text => lojban.ilmentufa_off(text, "J")["kampu"],
  zei: text => lojban.zeizei(text),
  anji: text => lojban.anji(text),
  ruk: text => lojban.rukylermorna(text),
  kru: text => lojban.krulermorna(text),
  bangu: text => bangu(text, from),
  selmaho: text => selmaho(text),
  "selma'o": text => selmaho(text),
  rafsi: text => rafsi_giho_nai_se_rafsi(text.replace(/[^a-z'\.]/g, "")),
  gloss: text => lojban.gloss(text, "en", false, true).join(" "),
  gimka: text => GimkaConflicts(text.replace(/[^a-z'\.\*0-9]/g, "")),
  loi: text => lojban.lojban2loglan(text),
  coi: text => lojban.loglan2lojban(text),
  ze: async text => {
    await new Promise(resolve => {
      lojban.zmifanva(text, "en2jb", a => resolve(a));
    });
  },
  zj: async text => {
    await new Promise(resolve => {
      lojban.zmifanva(text, "jb2en", a => resolve(a));
    });
  },
  rot13: text => lojban.rotpaci(text),
  tatoeba: text => sisku(text),
  jb: text =>
    "Dictionary with Examples can be temporaily accessed via\n1. https://la-lojban.github.io/sutysisku/jb/\n2. https://mw.lojban.org/papri/L17-B"
};

async function processCommand({ socket, sendTo, text }) {
  let cmd;
  try {
    cmd = text
      .split(" ")[0]
      .split("")
      .slice(1)
      .join("");
  } catch (e) {
    return;
  }
  text = text
    .split(" ")
    .slice(1)
    .join(" ");
  if (jsonCommand[cmd]) {
    const what = await jsonCommand[cmd](text);
    benji({ socket, sendTo, what });
    return true;
  }
  const leftMatched = Object.keys(jsonCommand).filter(
    i => cmd.search(new RegExp("^" + i + "(?![a-z])", "igm")) === 0
  );
  if (leftMatched[0]) {
    const what = await jsonCommand[leftMatched[0]](text);
    benji({ socket, sendTo, what });
    return true;
  }
  if (jsonWiktionary[cmd]) {
    jsonWiktionary[cmd]({ socket, sendTo, text });
    return true;
  }
  if (robangu.includes(cmd)) {
    let what;
    if (sendTo === "#jbosnu" && cmd !== "jbo") {
      what = "ko lojbo .iu";
    } else {
      what = vlaste({ word: text, language: cmd });
    }
    benji({ socket, sendTo, what });
    return true;
  }
}

const jsonWiktionary = {
  wn: args => wordnet(args),
  wikt: args => wiktionary(args),
  den: args => wiktionary({ ...args, bangu: "English" }),
  dru: args => wiktionary({ ...args, bangu: "Russian" }),
  dzh: args => wiktionary({ ...args, bangu: "Chinese" }),
  deo: args => wiktionary({ ...args, bangu: "Esperanto" })
};

function removePrefix(text) {
  return text.replace(/^\.[^ ]+ /, "");
}

async function processor({ from, towhom, text, socket }) {
  let sendTo = towhom && towhom.indexOf("#") ? from : towhom;
  if (text.match(/^<(.*?)>: /, "") !== null) {
    // dealing with 1Chat bridge
    from = text.match(/^<(.*?)>: /, "")[1];
    text = text.replace(/^<.*?>: /, "");
  }
  if (replyToVocatives({ from, text, sendTo, socket })) return;
  sendDelayed({ from, sendTo, socket });

  text = text.toLowerCase().trim();
  let inLanguage = defaultLanguage;
  if (text.charAt(0) === "#" && replyToHashed({ text, socket, sendTo })) return;
  if (text.indexOf(commandPrefix) === 0) {
    const r = await processCommand({ text, socket, sendTo });
    if (r) return;
  }
  let what;
  switch (true) {
    case text.search("(.i |i |)ma rafsi zo [a-z']+") === 0:
      const rg = /.*ma rafsi zo ([a-z']+).*/;
      what = rafsi_giho_nai_se_rafsi(
        text.match(rg)[1].replace(/[^a-z'\.]/g, "")
      );
      benji({
        socket,
        sendTo,
        what
      });
      break;
    case text.search("ra'oi [a-z']+ rafsi ma") === 0:
      const reg = /ra'oi ([a-z']+) rafsi ma/;
      benji({
        socket,
        sendTo,
        what: rafsi_giho_nai_se_rafsi(
          reg.exec(text)[1].replace(/[^a-z'\.]/g, "")
        )
      });
      break;
    case text.indexOf(`${replier}: loadconfig`) === 0:
      loadConfig();
      what = "config reloaded from ~/.livla/config.json";
      break;
    case text.indexOf("?:") === 0:
      inLanguage = RetrieveUsersLanguage(from, inLanguage);
      what = vlaste({ word: text, inLanguage });
      break; // Gives definition of valsi in the default language set to user
    case text === `${replier}: ju'i`:
      what = "re'i";
      break;
    case text === `${replier}: io`:
      what = "io";
      break;
    case text === `${replier}: aigne`:
      what = "CommonSenseError: Expected normal word but Curtis found.";
      break;
    case text === `${replier}: help`:
      what = sidju();
      break;
    case sendTo === from:
      // Gives definition of valsi in the default language set to user
      inLanguage = RetrieveUsersLanguage(from, inLanguage);
      what = vlaste({ word: ` ${text.trim()}`, language: inLanguage });
      break;
  }
  if (what) {
    benji({ socket, sendTo, what });
    return;
  }

  switch (true) {
    case text.indexOf(`${commandPrefix}yacc `) === 0 ||
      text.indexOf(`${commandPrefix}cowan `) === 0:
      tcepru(removePrefix(text), sendTo, socket);
      break;
    case text.indexOf(`${commandPrefix}gerna `) === 0 ||
      text.indexOf(`${commandPrefix}jbofi'e `) === 0:
      jbofihe(removePrefix(text), sendTo, socket);
      break;
    case text.indexOf(`${replier}: ko ningau`) === 0 ||
      text.indexOf(`${replier}: ko cnino`) === 0:
      (async () => {
        benji({
          socket,
          sendTo,
          what: "sei ca ca'o jai gau cnino be fai le pe mi sorcu"
        });
        const [err, erroredLangs] = await to(updateXmlDumps());
        if (err) lg(err);
        benji({ socket, sendTo, what: "i ba'o jai gau cnino" });
        if (erroredLangs && erroredLangs.length > 0) {
          benji({
            socket,
            sendTo,
            what: `i na kakne le ka jai gau cnino fai la'e zoi zoi ${erroredLangs.join(
              " "
            )} zoi`
          });
        }
      })();
      break;
    // Change default language
    case text.indexOf(`${replier}: mhnt `) === 0:
      ningaumahantufa(text.substr(12), socket);
      break;
    case text.indexOf(`${replier}: getgr `) === 0:
      getmahantufagrammar(text.substr(13), socket);
      break;
  }
}

if (!commonConfig.disableIrcBots) {
  clientmensi.on("message", (from, towhom, text) => {
    processor({ from, towhom, text });
  });

  clientmensi.on("error", message => {
    lg(`error on ${replier}'s listening`, JSON.stringify(message));
  });
}

// NAXLE

// NEVER use a Sync function except at start-up!
const index = fs.readFileSync(`${__dirname}/naxle.html`);

// Send index.html to all requests
const app = require("http").createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end(index);
});

// Socket.io server listens to our app
const io = require("socket.io").listen(app);

const IPFromRequest = ({ headers, connection, params }) => {
  let ip;
  if (headers && headers["x-forwarded-for"]) {
    ip = headers["x-forwarded-for"].split(", ").shift();
  } else if (connection && connection.remoteAddress) {
    ip = connection.remoteAddress;
  } else if (params && params.ip) {
    ip = params.ip;
  } else {
    ip = "127.0.0.1";
  }
  return ip;
};

const ua = require("universal-analytics");

io.sockets.on("connection", socket => {
  socket.on("le_te_cusku_be_fi_la_livla", data => {
    if (
      data.data.indexOf(`${replier}: doi`) === -1 &&
      data.data.indexOf(`${replier}: tell`) === -1
    ) {
      processor({ from: "mw.lojban.org", text: data.data, socket });
    }
  });
  socket.on("cpedu_fi_la_arxivo", data => {
    if (data.seskari === "arxivo") {
      socket.emit("la_arxivo_cu_cusku", {
        ...data,
        message: cpedu_fi_la_arxivo(data.query, data.max || 20)
      });
    }
  });
  socket.on("pingServer", data => {
    socket.emit("pongServer", "ok");
  });
  socket.on("sisku", data => {
    const ip = IPFromRequest(socket.request);
    const visitor = ua(config.GoogleAnalytics, ip, {
      strictCidFormat: false
    });
    data.uip = ip;
    visitor.pageview(data).send();
  });
});

app.listen(3020);
