// a script to convert the comic about la .Piper. in to la zbalermorna
var fs = require("fs-extra");
var path = require("path-extra");

const C = "ptkflscmxbdgvrzjnɩw";
const V = "aeiouyąęǫḁ";

function formatUnicode(point) {
  return "&#x" + point.toString(16) + ";";
}

const krulermorna = function(t) {
  return t
    .replace(/h/g, "'")
    .toLowerCase()
    .replace(/([aeiouy\. ])u([aeiouy])/g, "$1w$2")
    .replace(/([aeiouy\. ])i([aeiouy])/g, "$1ɩ$2")
    .replace(/^u([aeiouy])/g, "w$1")
    .replace(/^i([aeiouy])/g, "ɩ$1")
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
  if (debug) console.log(text);
  while (text.length > 0) {
    let i = 0;
    let changed = false;
    text = text.replace(
      /^([wɩ\.])([aeiouy])([ \.]+)(?=[ptkflscmxbdgvrzjnɩw])/g,
      "$1$2"
    );
    text = text.replace(/^\.[aeiouyąęǫḁ]'[aeiouyąęǫḁ]/, function(match) {
      const fir = match.charAt(1);
      const sec = match.charAt(3);
      start = 0xe2450 + V.indexOf(fir) * 16 + V.indexOf(sec) + 1;
      out += formatUnicode(start);
      changed = true;
      return "";
    });
    if (debug) {
      i++;
      console.log(i, text, out);
    }
    if (changed) continue;
    text = text.replace(/^'[aeiouyąęǫḁ]/, function(match) {
      const fir = match.charAt(1);
      start = 0xe2310 + V.indexOf(fir) + 1;
      out += formatUnicode(start);
      changed = true;
      return "";
    });
    if (debug) {
      i++;
      console.log(i, text, out);
    }
    if (changed) continue;
    text = text.replace(/^\.[aeiouyąęǫḁ]/, function(match) {
      const fir = match.charAt(1);
      start = 0xe2300 + V.indexOf(fir) + 1;
      out += formatUnicode(start);
      changed = true;
      return "";
    });
    if (debug) {
      i++;
      console.log(i, text, out);
    }
    if (changed) continue;
    text = text.replace(/^[ptkflscmxbdgvrzjnɩw][aeiouyąęǫḁ]/, function(match) {
      const fir = match.charAt(0);
      const sec = match.charAt(1);
      start = 0xe2320 + C.indexOf(fir) * 16 + V.indexOf(sec) + 1;
      out += formatUnicode(start);
      changed = true;
      return "";
    });
    if (debug) {
      i++;
      console.log(i, text, out);
    }
    if (changed) continue;
    text = text.replace(/^[ptkflscmxbdgvrzjnɩw]/, function(match) {
      const fir = match;
      start = 0xe2320 + C.indexOf(fir) * 16;
      out += formatUnicode(start);
      changed = true;
      return "";
    });
    if (debug) {
      i++;
      console.log(i, text, out);
    }
    if (changed) continue;
    text = text.replace(/^[aeiouyąęǫḁ]/, function(match) {
      const sec = match;
      start = 0xe24f0 + V.indexOf(sec) + 1;
      out += formatUnicode(start);
      changed = true;
      return "";
    });
    if (debug) {
      i++;
      console.log(i, text, out);
    }
    if (changed) continue;

    text = text.replace(/^\./, function(match) {
      const sec = match;
      start = 0xe2300;
      out += formatUnicode(start);
      return "";
    });
    if (debug) {
      i++;
      console.log(i, text, out);
    }

    text = text.replace(/^ /, function(match) {
      const sec = match;
      start = 0xe2300;
      out += formatUnicode(start);
      return "";
    });
    if (debug) {
      i++;
      console.log(i, text, out);
    }
  }
  return out;
}

let debug = 0;
//console.log(translate(".i .oi .i pu"));
//process.exit();

async function loop() {
  const files = await new Promise(resolve => {
    fs.readdir("../webcomics", (err, files) => {
      resolve(files);
    });
  });
  for (let fl of files) {
    let src = path.join("../webcomics", fl, "lang/jb");
    let dest = path.join("../webcomics", fl, "lang/jz");
    try {
      fs.copySync(src, dest, { overwrite: true });
      const files = await new Promise(resolve => {
        fs.readdir(dest, (err, files) => {
          resolve(files);
        });
      });
      for (let file of files) {
        let tetcidu = path.join(__dirname, dest, file);
        if (file.slice(-4) === ".svg" && file.slice(-8) !== ".svg.svg") {
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
          str = str.replace(/\bLavi\b/g, "zbalermorna");
          str = str.replace(/font-size: *(.+?) *px/gm, function(ma, p1) {
            const size = parseFloat(p1) * 1.1;
            return `font-size:${size}px`;
          });
          try {
            fs.unlinkSync(tetcidu + ".svg");
          } catch (err) {}
          fs.writeFileSync(tetcidu + ".svg", str, "utf8", function(err) {
            if (err) return console.log(err);
          });
        }
      }
    } catch (e) {}
  }
}

(async () => {
  loop();
})();
