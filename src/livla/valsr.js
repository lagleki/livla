// 

const fs = require("fs");

function getJboDefs() {
    let arr = [];
    JSON.parse(fs.readFileSync("/livla/build/dumps/jbo.json")).dictionary.direction[0].valsi.forEach(e => {
        let ds = e.definition.trim().replace(/\$.*?\$/g, 'zo\'e').replace(/ +/g, ' ').split(/\.i(?! *je)/g).filter(Boolean).filter(i=>i.trim()!=="je")
        for (let d of ds) {

            let mutated = true
            while (mutated === true) {
                const d_new = d
                    .trim()
                    .replace(/\bzo'e boi\b/g, "zo'e")
                    .replace(/^zo'e noi\b */g, 'ti noi ')
                    .replace(/^zo'e /g, '')
                    .replace(/ [pn]o'u zo'e$/g, '')
                    .replace(/ be zo'e e zo'e$/g, '')
                    .replace(/ be zo'e$/g, '')
                    .replace(/lo *nu zo'e noi\b/g, 'lo nu ti noi')
                    .replace(/lo *nu zo'e\b/g, 'lo nu')
                    .replace(/ zo'e kei\b/g, ' kei')
                    .replace(/ zo'e cu\b/g, ' cu')
                    .replace(/ zo'e .i\b/g, ' .i')
                    .replace(/.i *je zo'e noi\b/g, '.i je ti noi')
                    .replace(/.i *je zo'e\b/g, '.i je')
                    .replace(/ zo'e noi jutsi$/g, '')
                    .replace(/ zo'e$/g, '')
                    .replace(/ kei$/g, '')
                    .replace(/ ku'o$/g, '')
                    .replace(/ (fa|fe|fi|fo|fu|fai)$/g, '')
                    .replace(/ be la'oi?[ \.]*(.*?)[ \.]*.*?[ \.]*\1[ \.]*$/g, '')
                    .replace(/ la'oi?[ \.]*(.*?)[ \.]*.*?[ \.]*\1[ \.]*$/g, '')
                    .replace(/ +/g, ' ')
                if (d_new === d) { mutated = false } else { d = d_new }
            }
            if (!/\b(to'e)\b/.test(d) && ["gismu","experimental gismu","fu'ivla","lujvo"].includes(e.type))
                arr.push([e.word, d]);
        }
    });
    const jbo = arr.map(i=>i[0])
    arr = arr.map(i => `${i[0].toUpperCase()}\t${i[1]}`).join("\n")
    fs.writeFileSync("/livla/build/valsr/hints.txt", arr);
    return jbo
}
function getEnglishDefs(jbo) {
    let arr = [];
    let arr_common = [];
    JSON.parse(fs.readFileSync("/livla/build/dumps/en.json")).dictionary.direction[0].valsi.forEach(e => {
        let ds = e.definition.trim().replace(/[\$_\{\}]/g, '').replace(/ +/g, ' ').replace(/\//g, ' / ').trim()
        if (jbo.includes(e.word) || e.type==="gismu") {
            arr.push([e.word.toUpperCase(), ds]);
            arr_common.push([e.word.toUpperCase()]);
        }
    });
    fs.writeFileSync("/livla/build/valsr/common-words.txt", arr_common.map(i => `${i[0]}`).join("\n"));
    fs.writeFileSync("/livla/build/valsr/definitions.txt", arr.map(i => `${i[0]}\t${i[1]}`).join("\n"));
}
const arr = getJboDefs();
getEnglishDefs(arr);