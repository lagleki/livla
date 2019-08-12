const fs = require("fs");
const path = require("path-extra");
const lojban = require("lojban");
const GoogleSpreadsheet = require("google-spreadsheet");

const doc = new GoogleSpreadsheet(
  "1Md0pojdcO3EVf3LQPHXFB7uOThNvTWszkWd5T4YhvKs"
);
let sheet;
doc.getInfo((err, info) => {
  sheet = info.worksheets[0];
  let output = {
    en2jb: [],
    jb2en: []
  };
  (async () => {
    const limit = 10000;
    for (let offset = 0; offset < 190000; offset += limit) {
      await new Promise(resolve => {
        sheet.getRows(
          {
            offset,
            limit
          },
          (err, rows) => {
            console.log(
              `Reading ${
              rows.length
              } rows from the corpus, offset ${offset}. Begin processing ...`
            );
            const { jb2en, en2jb } = processRows(rows);
            output.jb2en = output.jb2en.concat(jb2en);
            output.en2jb = output.en2jb.concat(en2jb);
            resolve();
          }
        );
      });
    }
    console.log(`writing to output...`);
    output.jb2en = output.jb2en
      .map(i => `${i.source}\t${i.target}`)
      .join("\n")
      .replace(/[\r\n]{2,}/g, "\n");
    output.en2jb = output.en2jb
      .map(i => `${i.source}\t${i.target}`)
      .join("\n")
      .replace(/[\r\n]{2,}/g, "\n");
    fs.writeFileSync("./jb2en.tsv", output.jb2en);
    fs.writeFileSync("./en2jb.tsv", output.en2jb);
  })();
});

function processRows(rows) {
  let n = [];
  for (const r of rows) {
    let j;
    const tags = r.ilmenstags + r.glekistags + r.uakcisoptionalnewtags;
    j = {
      source: r.tatoebaenglish || "",
      target:
        r.glekisalternativeproposal ||
        r.ilmensalternativeproposal ||
        r.uakcisrevision ||
        r.jelcaproposal ||
        r.tatoebalojban ||
        ""
    };

    if (tags.indexOf("B") >= 0 && j.target === r.tatoebalojban) continue;

    try {
      j.target = lojban.ilmentufa_off(lojban.zeizei(j.target.replace(/ĭ/g, "i")
        .replace(/ŭ/g, "u")), 'T').kampu;
    } catch (error) {
      console.log(error);
    }

    j.target = (j.target || "")
      .toLowerCase().replace(/[^a-z ,'\.]/g, '')
      .replace(/'/g, "h")
      .replace(/\./g, "")
      .replace(/^i\b/g, "")
      .replace(/ {2,}/g, " ")
      .replace(/[\r\n]/g, "")
      .trim();
    j.source = j.source
      .replace(/ {2,}/g, " ")
      .replace(/[\r\n]/g, "")
      .replace(/’/g, "'")
      .trim();
    if (
      j.source !== "" &&
      j.target !== "" &&
      j.target.search(/\bzoi\b/) === -1
    ) {
      n = duplicator({ n, j });
    }
  }

  const en2jb = n.map(r => {
    return { source: r.source, target: r.target };
  });
  const jb2en = n.map(r => {
    return { source: r.target, target: r.source };
  });
  return { jb2en, en2jb };
}

function duplicator({ n, j }) {
  j.target = j.target
    .replace(/\bmeris\b/g, "maris")
    .replace(/\btokion\b/g, "tokios")
    .replace(/\ble\b/g, "lo")
    .replace(/\blei\b/g, "loi");
  n.push(j);
  if (j.source.search(/\bTom\b/) >= 0) {
    j2 = JSON.parse(JSON.stringify(j));
    j2.source = j2.source.replace(/\bTom\b/g, "Alice");
    j2.target = j2.target.replace(/\btom\b/g, "alis");
    j2.target = j2.target.replace(/\btam\b/g, "alis");
    n = n.concat(j2);

    j2 = JSON.parse(JSON.stringify(j));
    j2.source = j2.source.replace(/\bTom\b/g, "Mary");
    j2.target = j2.target.replace(/\btom\b/g, "maris");
    j2.target = j2.target.replace(/\btam\b/g, "maris");
    n = n.concat(j2);
  }
  if (j.source.search(/\bapples?\b/) >= 0) {
    j2 = JSON.parse(JSON.stringify(j));
    j2.source = j2.source.replace(/\bapple\b/g, "pear");
    j2.source = j2.source.replace(/\bapples\b/g, "pears");
    j2.target = j2.target.replace(/\bplise\b/g, "perli");
    n = n.concat(j2);
  }
  if (j.source.search(/\bOsaka\b/) >= 0) {
    j2 = JSON.parse(JSON.stringify(j));
    j2.source = j2.source.replace(/\bOsaka\b/g, "New York");
    j2.target = j2.target.replace(/\bosakan\b/g, "nuiork");
    n = n.concat(j2);
  }
  if (j.source.search(/\bTokio\b/) >= 0) {
    j2 = JSON.parse(JSON.stringify(j));
    j2.source = j2.source.replace(/\bTokio\b/g, "New York");
    j2.target = j2.target.replace(/\btokios\b/g, "nuiork");
    n = n.concat(j2);
  }
  return n;
}
