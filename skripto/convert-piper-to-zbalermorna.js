// a script to convert the comic about la .Piper. into la zbalermorna
// use the lakmir's font
var fs = require("fs");
var path = require("path-extra");

var ncp = require("ncp").ncp;

const C = "ptkflscmxbdgvrzjnɩw";
const V = "aeiouyąęǫḁ";
ncp.limit = 16;

function formatUnicode(point) {
  return "&#x" + point.toString(16) + ";";
}

const krulermorna = function(t) {
  return t
    .replace(/h/g, "'")
    .toLowerCase()
    .replace(/([aeiouy\.])u([aeiou])/g, "$1w$2")
    .replace(/([aeiouy\.])i([aeiouy])/g, "$1ɩ$2")
    .replace(/au/g, "ḁ")
    .replace(/ai/g, "ą")
    .replace(/ei/g, "ę")
    .replace(/oi/g, "ǫ");
};

function translate(text) {
  text = krulermorna(text.trim());
  text = text.replace(/0/g, "no");
  text = text.replace(/1/g, "pa");
  text = text.replace(/2/g, "re");
  text = text.replace(/3/g, "ci");
  text = text.replace(/4/g, "vo");
  text = text.replace(/5/g, "mu");
  text = text.replace(/6/g, "xa");
  text = text.replace(/7/g, "ze");
  text = text.replace(/8/g, "bi");
  text = text.replace(/9/g, "so");
  text = text.replace(/[ \.]+/g, ".");
  text = text.replace(/^([ḁąęǫ])/g, ".$1");
  let out = "";
  console.log(text);
  while (text.length > 0) {
    let changed = false;
    text = text.replace(/^\.[aeiouyąęǫḁ]'[aeiouyąęǫḁ]/, function(match) {
      const fir = match.charAt(1);
      const sec = match.charAt(3);
      start = 0xe2450 + V.indexOf(fir) * 16 + V.indexOf(sec) + 1;
      out += formatUnicode(start);
      changed = true;
      return "";
    });
    if (changed) continue;
    text = text.replace(/^'[aeiouyąęǫḁ]/, function(match) {
      const fir = match.charAt(1);
      start = 0xe2311 + V.indexOf(fir);
      out += formatUnicode(start);
      changed = true;
      return "";
    });
    if (changed) continue;
    text = text.replace(/^\.[aeiouyąęǫḁ]/, function(match) {
      const fir = match.charAt(1);
      start = 0xe2450 + V.indexOf(fir) * 16;
      out += formatUnicode(start);
      changed = true;
      return "";
    });
    if (changed) continue;
    text = text.replace(/^[ptkflscmxbdgvrzjnɩw][aeiouyąęǫḁ]/, function(match) {
      const fir = match.charAt(0);
      const sec = match.charAt(1);
      start = 0xe2320 + C.indexOf(fir) * 16 + V.indexOf(sec) + 1;
      out += formatUnicode(start);
      changed = true;
      return "";
    });
    if (changed) continue;
    text = text.replace(/^[ptkflscmxbdgvrzjnɩw]/, function(match) {
      const fir = match;
      start = 0xe2320 + C.indexOf(fir) * 16;
      out += formatUnicode(start);
      changed = true;
      return "";
    });
    if (changed) continue;
    text = text.replace(/^[aeiouyąęǫḁ]/, function(match) {
      const sec = match;
      start = 0xe24f1 + V.indexOf(sec);
      out += formatUnicode(start);
      changed = true;
      return "";
    });
    if (changed) continue;
    text = text.replace(/^\./, function(match) {
      const sec = match;
      start = 0xe2300;
      out += formatUnicode(start);
      return "";
    });
  }
  return out;
}

//console.log(translate(".i mi noi"));
//process.exit();

fs.readdir("./", (err, files) => {
  console.log(files);
  files.forEach(fl => {
    let source = path.join(fl, "jb");
    let dest = path.join(fl, "zj");
    ncp(source, dest, function(err) {
      fs.readdir(dest, (err, files) => {
        (files || []).forEach(file => {
          let tetcidu = path.join(__dirname, dest, file);
          if (file.slice(-4) === ".svg") {
            let data = fs.readFileSync(tetcidu, "utf8");
            let str = data.split(">");
            for (let i = 0; i < str.length; i++) {
              let gun = str[i].split("<");
              let f = gun[0];
              if (/^[a-z \.0-9\']+$/.test(f)) {
                gun[0] = translate(f);
              }
              str[i] = gun.join("<");
            }
            str = str.join(">");

            fs.writeFileSync(tetcidu+".svg", str, "utf8", function(err) {
              if (err) return console.log(err);
            });
          }
        });
      });
    });
  });
});
