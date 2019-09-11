const dict =
  "https://math.boisestate.edu/~holmes/loglan.org/holmes_stuff/Peter%20Hill%20dictionary%20project/L-to-E-RDC.html";

const lg = console.log.bind(console);
const p = function(object) {
  return JSON.stringify(object);
};

const rp = require("request-promise-native");
const path = require("path-extra");
const fs = require("fs");

(async () => {
  const html = await rp(dict);
  const cheerio = require("cheerio");
  const $ = cheerio.load(html);
  let arrJson = [];
  $("#content")
    .find("p")
    .each(function(ind, el) {
      if ($(this).html() !== "") {
        const word = {};
        word.word = $($(this).find("b a")[0])
          .text()
          .trim();
        const ht = $(this)
          .html()
          .split("<br>")
          .map(i => i.trim());
        word.type = cheerio
          .load(ht[1])
          .text()
          .trim();
        word.definition = cheerio
          .load(ht.slice(2).join("<br>"))
          .text()
          .trim();
        arrJson.push(word);
      }
    });
  const outp = {
    dictionary: { direction: { from: "Loglan", to: "English", valsi: arrJson } }
  };
  fs.writeFileSync("./dumps/loglan.json", JSON.stringify(outp), {
    encoding: "utf8"
  });
})();
