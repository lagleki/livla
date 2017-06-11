const nodasezvafahi = 'no da se zvafa\'i';
const tersepli = " + ";
const fs = require("fs"),
  path = require("path-extra"),
  ospath = require("ospath"),
  libxmljs = require("libxmljs"),
  lojban = require("lojban");
require('v8-profiler');

let xmlDocEn;

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
  let tmp = xmlDoc.find("/dictionary/direction[1]/valsi[translate(@word,\"" + lin.toUpperCase() + "\",\"" + lin + "\")=\"" + lin + "\"]/selmaho[1]");
  if (tmp.length > 0) acc += `[${tmp[0].text()}] `;
  tmp = xmlDoc.find(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/definition[1]`);
  if (tmp.length > 0) acc += `${tmp[0].text()}`;
  if (!tordu) {
    tmp = xmlDoc.find("/dictionary/direction[1]/valsi[translate(@word,\"" + lin.toUpperCase() + "\",\"" + lin + "\")=\"" + lin + "\"]/notes[1]");
    if (tmp.length > 0) acc += ` | ${tmp[0].text()}`;
    tmp = xmlDoc.find("/dictionary/direction[1]/valsi[translate(@word,\"" + lin.toUpperCase() + "\",\"" + lin + "\")=\"" + lin + "\"]/user[1]/username[1]");
    if (tmp.length > 0) acc += ` | ${tmp[0].text()}`;
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
    acc=acc.replace(/&quot;/g, "'").replace(/&gt;/g, '>')
    return `${lin} = ${acc}`;
  }
  return;
}

const GetXmldoc = (lng) => {
  if (lng !== "en" || !xmlDocEn) {
    const xmlPath = path.join(__dirname, "../dumps", `${lng}.xml`);
    if (!fs.existsSync(xmlPath)) {
      const errorMessage = `.i no da liste lo valsi be fi lo se sinxa be zoi zoi.${lng}.zoi`;
      if (flag === 'passive') {
        lg(errorMessage);
        return '';
      }
      return errorMessage;
    }
    return libxmljs.parseXml(fs.readFileSync(xmlPath, {
      encoding: 'utf8'
    }));
  }
  return xmlDocEn;
};

const MultipleDefs = (valsi, lng, tordu) => {
  let lin = valsi.replace(/\"/g, '').replace(/\)$/, '').replace(/^[\(\.]/, '');
  xmlDoc = GetXmldoc(lng);
  //if lujvo then really do it
  if (lojban.xulujvo(valsi)) {
    console.log(valsi);
    const l = lojban.jvokaha_gui(valsi);
    console.log(l);
    const f = lojban.jvozba(l).filter(x => /[aeiou]/.test(x.lujvo.slice(-1)));
    const fslice = f.slice(0, Math.min(f.length, 3));
    const arr = fslice.map(x => {
        return GetWordDef(x.lujvo, lng, tordu, xmlDoc);
      })
      .filter(Boolean);
    const fslicepretty = fslice.map(x => x.lujvo + ": " + x.score).join(", ");
    const l_joined = l.join(" ");
    const glossed = (lng !== 'jbo')? lojban.gloss(l_joined,lng,xmlDoc).join(tersepli) : l_joined;
    if (arr.length > 0) return `${fslicepretty}\n≈ ${glossed}\n${arr.join("\n")}`;
  }
  //otherwise just
  const mo = GetWordDef(valsi, lng, tordu, xmlDoc);
  if (mo) return mo;
  //if nothing found try full-text search
  const mulno = mulno_sisku(lin, lng, xmlDoc);
  if (mulno) return mulno;
  return nodasezvafahi;
};

const mulno_sisku = (lin, lng, xmlDoc) => {
  if (!xmlDoc) xmlDoc = GetXmldoc(lng);
  let stra = [];
  let coun = xmlDoc.find(`/dictionary/direction[1]/valsi[(translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}")]`);
  if (coun) stra = stra.concat(coun.map(i => i.attr("word").value()));
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[(translate(./glossword/@word,"${lin.toUpperCase()}","${lin}")="${lin}") or (translate(./Engl,"${lin.toUpperCase()}","${lin}")="${lin}")]`);
  if (coun) stra = stra.concat(coun.map(i => i.attr("word").value()));
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(@word,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  if (coun) stra = stra.concat(coun.map(i => i.attr("word").value()));
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(./glossword/@word,"${lin.toUpperCase()}","${lin}"),"${lin}") or contains(translate(./Engl,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  if (coun) stra = stra.concat(coun.map(i => i.attr("word").value()));
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(./definition,"${lin.toUpperCase()}","${lin}"),"${lin}") or contains(translate(./notes,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  if (coun) stra = stra.concat(coun.map(i => i.attr("word").value()));
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(./definition,"${lin.toUpperCase()}","${lin}"),"${lin}") or contains(translate(./related,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  if (coun) stra = stra.concat(coun.map(i => i.attr("word").value()));

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

console.log(MultipleDefs("klagau", "en", false));
//console.log(lojban.xulujvo('klagau'));
