const fs = require("fs"),
  path = require("path-extra"),
  lojban = require("lojban");

const pseudogismu = () => { //a joke function. checks if an English word is  a valid gismu
  const words = fs.readFileSync(path.join(__dirname, "../zasni/", "words.csv"), 'utf8').split("\n");
  const sj = words.map(j => {
    const f = lojban.ilmentufa_off(j.toLowerCase().replace(/sh/g, "c"), "JC")["kampu"];
    if (f.indexOf("yntax") === -1)
      return (`${j} ${f}`);
    return;
  }).filter(Boolean);
  fs.writeFileSync(path.join(__dirname, "../zasni/", "zahejbovla.csv"), sj.join("\n"));
};

pseudogismu();
