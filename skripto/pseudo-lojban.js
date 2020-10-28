const fs = require("fs"),
  path = require("path-extra"),
  lojban = require("lojban"),
  axios = require("axios"),
  mkdirp = require("mkdirp"),
  dump = lojban.dump({})

const zahejbovla = async () => { //a joke function. checks if an English word is  a valid gismu
  const file = process.argv.slice(2)[0]
  await mkdirp(path.join(__dirname, '../zasni'))
  let words = file ? fs.readFileSync(file, 'utf8') : (await axios.get("https://raw.githubusercontent.com/dwyl/english-words/master/words.txt")).data
  words = words.split("\n")
  lenWords = words.length


  let sj = words.map((word, index) => {
    word = word.trim().toLowerCase().replace(/sh/g, "c").replace(/[^a-zA-Z-',\. ]/g, '')
    if (!word) return null;
    let selmaho = ""
    try {
      selmaho = lojban.word({ jsonDoc: dump, word })[0].selmaho || ''
    } catch (error) { }
    let wordExists = false
    try {
      wordExists = lojban.word({ jsonDoc: dump, word })[0]
    } catch (error) { }
    if (index % 1000 === 0) console.log(`processing word ${index}/${lenWords}`);
    const parsedRes = lojban.romoi_lahi_cmaxes(word);
    if (parsedRes.tcini === 'snada') {
      if (lojban.ilmentufa_off(word).tcini!=='snada') return null;
      if (!file && (parsedRes["te spuda"].length > 1 || parsedRes["te spuda"][0][0] === 'cmevla')) return null;
      return (`${word}\t${parsedRes["te spuda"].map(i => i[0]).join(" ")}\t${selmaho}\t${wordExists? 'in dictionary' : ''}`);
    }
  })
  if (!file) sj = sj.filter(Boolean);
  let name = "zahejbovla.tsv"
  if (file) name = file.split(/[\/\\]/).slice(-1)[0] + ".processed.txt"
  fs.writeFileSync(path.join(__dirname, "../zasni/", name), sj.join("\n"));
};

zahejbovla();
