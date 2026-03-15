/**
 * Builds valsr (Lojban dictionary) hint and definition files from jbovlaste dumps.
 * Writes to /livla/build/valsr/ (hints.txt, common-words.txt, definitions.txt).
 */

const fs = require('fs')
const path = require('path')

const BUILD_DIR = '/livla/build'
const DUMPS_DIR = path.join(BUILD_DIR, 'dumps')
const VALSR_DIR = path.join(BUILD_DIR, 'valsr')

function getJboDefs() {
  const arr = []
  const jboPath = path.join(DUMPS_DIR, 'jbo.json')
  const data = JSON.parse(fs.readFileSync(jboPath, 'utf8'))
  const valsi = data.dictionary.direction[0].valsi

  for (const e of valsi) {
    const ds = e.definition
      .trim()
      .replace(/\$.*?\$/g, "zo'e")
      .replace(/ +/g, ' ')
      .split(/\.i(?! *je)/g)
      .filter(Boolean)
      .filter((i) => i.trim() !== 'je')

    for (let d of ds) {
      let mutated = true
      while (mutated) {
        const d_new = d
                    .trim()
                    .replace(/\bzo'e boi\b/g, "zo'e")
                    .replace(/^zo'e noi\b */g, 'ti noi ')
                    .replace(/^zo'e (?!\b(joi|\.?e|je)\b)/g, '')
                    .replace(/ [pn]o'u zo'e$/g, '')
                    .replace(/ be zo'e e zo'e$/g, '')
                    .replace(/ be zo'e$/g, '')
                    .replace(/ tu'a$/g, '')
                    .replace(/ be$/g, '')
                    .replace(/ bei$/g, '')
                    .replace(/ zo'e gi'e\b/g, " gi'e")
                    .replace(/lo *nu zo'e noi\b/g, 'lo nu ti noi')
                    .replace(/lo *nu zo'e\b/g, 'lo nu')
                    .replace(/ zo'e kei\b/g, ' kei')
                    .replace(/ zo'e cu\b/g, ' cu')
                    .replace(/ zo'e \.ije\b/g, ' .i je')
                    .replace(/ zo'e \.i\b/g, ' .i')
                    .replace(/\.i *je zo'e noi\b/g, '.i je ti noi')
                    .replace(/\.i *je zo'e\b/g, '.i je')
                    .replace(/ zo'e noi jutsi$/g, '')
                    .replace(/ zo'e$/g, '')
                    .replace(/ kei$/g, '')
                    .replace(/ ku'o$/g, '')
                    .replace(/ (fa|fe|fi|fo|fu|fai)$/g, '')
                    .replace(/ be la'oi?[ \.]*(.*?)[ \.]*.*?[ \.]*\1[ \.]*$/g, '')
                    .replace(/ la'oi?[ \.]*(.*?)[ \.]*.*?[ \.]*\1[ \.]*$/g, '')
          .replace(/ +/g, ' ')
        if (d_new === d) {
          mutated = false
        } else {
          d = d_new
        }
      }
      if (
        !/\b(to'e)\b/.test(d) &&
        ['gismu', 'experimental gismu', "fu'ivla", 'lujvo'].includes(e.type) &&
        [5, 6].includes(e.word.length)
      ) {
        arr.push([e.word, d])
      }
    }
  }

  const jbo = arr.map((i) => i[0])
  const hintsText = arr.map((i) => `${i[0].toUpperCase()}\t${i[1]}`).join('\n')
  fs.mkdirSync(VALSR_DIR, { recursive: true })
  fs.writeFileSync(path.join(VALSR_DIR, 'hints.txt'), hintsText, 'utf8')
  return jbo
}

function getEnglishDefs(jbo) {
  const arr = []
  const arrCommon = []
  const enPath = path.join(DUMPS_DIR, 'en.json')
  const data = JSON.parse(fs.readFileSync(enPath, 'utf8'))
  const valsi = data.dictionary.direction[0].valsi

  for (const e of valsi) {
    const ds = e.definition
      .trim()
      .replace(/[\$_{}]/g, '')
      .replace(/ +/g, ' ')
      .replace(/\//g, ' / ')
      .trim()
    if (jbo.includes(e.word) || e.type === 'gismu') {
      arr.push([e.word.toUpperCase(), ds])
      arrCommon.push([e.word.toUpperCase()])
    }
  }

  fs.writeFileSync(
    path.join(VALSR_DIR, 'common-words.txt'),
    arrCommon.map((i) => i[0]).join('\n'),
    'utf8'
  )
  fs.writeFileSync(
    path.join(VALSR_DIR, 'definitions.txt'),
    arr.map((i) => `${i[0]}\t${i[1]}`).join('\n'),
    'utf8'
  )
}

const jboWords = getJboDefs()
getEnglishDefs(jboWords)