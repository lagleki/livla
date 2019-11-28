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

function fastParse(xmlString) {
  return require("fast-xml-parser").parse(
    xmlString
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

async function downloadCLLXMLDump() {
  const uri = `https://github.com/lojban/cll/blob/docbook-prince/dictionary/dictionary.xml?raw=true`;
  const [err, xmlString] = await to(rp(uri));
  const jsonDoc = fastParse(xmlString);

  `INSERT INTO definitions (langId, valsiId, definitionNum,
    definition, userId, time)
VALUES (0, 0, 0, '', 0, 0);`
}
