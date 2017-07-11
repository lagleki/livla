// JavaScript Document
// This script generates .html files for la sutysisku of every localization
// the template is taken from cipra/template.html file

//import
const fs = require("fs"),
  path = require("path-extra");

//config
const langs = [
  "en",
  "cll",
  "ru",
  "eo",
  "es",
  "fr-facile",
  "ile",
  "ina",
  "ithkuil",
  "ja",
  "jbo",
  "laadan",
  "ldp",
  "ru",
  "zamenhofo",
  "toki",
  "jb",
  "en-pt-BR",
  "muplis",
  "muplis-eng-pol",
  "cipra"
];
//read template.html into var
const template = fs.readFileSync(path.join(__dirname, "../../i/cipra", "template.html"), {encoding: 'utf8'});
//read sisku.xml template into var
const sisku = fs.readFileSync(path.join(__dirname, "../../i/cipra", "sisku.xml"), {encoding: 'utf8'});

//functions
//generic
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//tempalting - remove parts not relevant to the current sutysisku
String.prototype.stripout = function(config, tag) {
  const tags = tag.split("\\|").map(j => (config[j] && config[j] !== 'false')
    ? true
    : false);
  const m = tags.includes(true);
  const ku = m
    ? "$1"
    : "";
  const antiku = !m
    ? "$1"
    : "";
  console.log(tag,m,"-"+ku+"-",antiku);
  return this
  //OR operator
    .replace(new RegExp("\\\/\\\/<" + tag + ">([\\s\\S]*?)\\\/\\\/<\\\/" + tag + ">", "gm"), ku)
    .replace(new RegExp("<" + tag + ">([\\s\\S]*?)<\/" + tag + ">", "gm"), ku)
  //NOT operator
    .replace(new RegExp("\\\/\\\/<" + tag + " false>([\\s\\S]*?)\\\/\\\/<\\\/" + tag + ">", "gm"), antiku)
    .replace(new RegExp("<" + tag + " false>([\\s\\S]*?)<\/" + tag + ">", "gm"), antiku);
}

String.prototype.replaceMergefield = function(config) {
  return Object.keys(config).reduce((acc, i) => {
    return acc.replace(new RegExp("%" + i + "%", "g"), config[i]);
  }, this);
}

//generate files
langs.forEach(lang => {
  //generate index.html
  const config = JSON.parse(fs.readFileSync(path.join(__dirname, "../../i", lang, "config.json"), {encoding: 'utf8'}));
  const config_fallback = {
    "title": "la sutysisku zo'u: ze'i mitysisku lo valsi",
    "favicon": '../pixra/sutysisku.png',
    "icon16": '../pixra/16.png',
    "icon32": '../pixra/32.png',
    "ogurl": "https://la-lojban.github.io/sutysisku/" + lang + "/index.html",
    "searchurl": "/i/" + lang + "/sisku.xml",
    "searchtitle": lang + "-sutysisku",
    "titlelogo": "<span id='site-title'><a id='title' href='#'><img src=\"../pixra/sutysisku.png\" height='16' width='16'><font color='#fff'>la sutysisku</font></a></span>",
    "mupliskari1": "56,136,233",
    "mupliskari2": "34,87,213",
    "mupliskari3": "38,99,224",
    "mupliskari4": "25,65,165",
    "gradpos1": "0%",
    "gradpos2": "13%",
    "gradpos3": "88%",
    "gradpos4": "100%"
  };
  const output = template.replaceMergefield(config).replaceMergefield(config_fallback)
  ////strip out according to Lojbanicity of the sutysisku
    .stripout(config, "xuzganalojudri\\|lojbo").stripout(config, "xuzganalojudri").stripout(config, "lojbo").stripout(config, "muplis")
  //delete comments, compress code
    .replace(/^[ \t]+/gm, "").replace(/^\/\/.*$/gm, "").replace(/\/\*((?!\/\*)[\s\S]*?)\*\//gm, "").replace(/<!--[\s\S]*?-->/gm, "").replace(/\n\s*\n/g, '\n');
  fs.writeFileSync(path.join(__dirname, "../../i", lang, "index.html"), output);

  //generate sisku.xml and update webapp.cache
  if (lang !== 'cipra') {
    const file = fs.readFileSync(path.join(__dirname, "../../i", lang, "bangu.js"), {encoding: 'utf8'});
    const b = sisku.replace("%template%", "https://la-lojban.github.io/sutysisku/en/index.html#sisku/{searchTerms}").replace("%shortname%", lang + "-sutysisku").replaceMergefield(config)
    fs.writeFileSync(path.join(__dirname, "../../i", lang, "sisku.xml"), b);
    //now update manifest
    const webappcachefile = path.join(__dirname, "../" + lang + "/", "webapp.appcache");
    //change date in manifest
    const d = new Date();
    const n = d.getFullYear() + "-" + (addZero(d.getMonth() + 1)) + "-" + addZero(d.getDate()) + "T" + addZero(d.getHours()) + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds());
    const pars = fs.readFileSync(webappcachefile, {encoding: 'utf8'}).replace(/\n# .+\n/, '\n# ' + n + "\n");
    fs.writeFileSync(webappcachefile, pars);
    console.log(webappcachefile + ' updated');
  }

  //generate sisku.js
  const siskujsfile = "window = this;var sorcu={};var bau = location.href.split('/').slice(-2)[0];if (bau==='cipra'){bau='en';}\nimportScripts('bangu.js','../data/parsed-" + lang.replace(/^cipra$/, 'en').replace(/^muplis/, "tatoeba") + ".js', '" + (['cipra','cll'].includes(lang)
    ? "./sisku.js"
    : "../sisku.js") + "');\npostMessage({kind: 'loading'});\npostMessage({kind: 'ready'});\nvar searchId;\nthis.onmessage = function(ev) {if (ev.data.kind == 'newSearch') {searchId = ev.data.searchId;sisku(ev.data.query, function(results) {postMessage({kind: 'searchResults', results: results,query:ev.data.query});});}};";
  fs.writeFileSync(path.join(__dirname, "../../i", lang, "worker.js"), siskujsfile);
});
