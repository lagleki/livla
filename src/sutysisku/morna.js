// JavaScript Document
// This script generates .html files for la sutysisku of every localization
// the template is taken from cipra/template.html file

// import
const fs = require('fs')
const path = require('path-extra')
const axios = require('axios')
const { minify } = require('terser')
const browserify = require("browserify");

const babel = require('@babel/core')
const env = require('@babel/preset-env')

const now = new Date().getTime()
// config
const args = process.argv.slice(2)
const langs =
  args.length > 0
    ? args
    : [
      'lojban',
      'ile',
      'ina',
      'ithkuil',
      'laadan',
      'ldp',
      'zamenhofo',
      'epo-tha',
      'simplingua-zho',
      'toki',
      'ktv-eng',
      'en-pt-BR',
      'muplis-eng-pol',
    ]

CLLAppendix2Json()

// functions
// generic
function addZero(i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16)
  if (hex.length < 2) {
    hex = '0' + hex
  }
  return hex
}

async function CLLAppendix2Json(source) {
  source = source || 'https://la-lojban.github.io/uncll/uncll-1.2.13/xhtml_section_chunks/'
  const json = {}

  for (let file of [{ name: 'ix01.html', type: 'lojbo' }, { name: 'ix02.html', type: 'English' }]) {
    const appendix = source + file.name
      ; (await axios(appendix)).data
        .match(/<dt>(.*?)<\/dt>[ \t\n\r]*((?=<dt>)|(?=<\/)|<dd>(.*?)<\/dd>)/gs)
        .forEach((el) => {
          el = el.replace(/[ \t]*\n[ \t]*/g, '').replace(/>[ \t]+/g, '>').replace(/^<dt>(.*?)(?=<a )(.*)$/s, '$1\t$2').split(/\t/)
          if (el.length === 2) {
            let selmaho = el[0]
              .replace(/ *<.*?>.*/g, '')
              .trim()
              .replace(/ (selma'o|construct)/g, '')
              .replace(/ *:/g, '')
              .replace(/^\./, '')
              .replace(/\.$/, '')
            const jsonLinks = {}
            el[1].match(/<a (.*?)<\/a>/gs).forEach((i) => {
              i = i
                .replace(/<a .*?href="(.*?)(?:#.*?)?".*?>(.*?)<\/a>/s, '$1\t$2')
                .split(/\t/)
              jsonLinks[i[0]] = i[1]
                .replace(/[\n\r]/g, ' ')
                .replace(/ {2,}/g, ' ')
                .trim()
            })
            json[selmaho] = { d: jsonLinks }
            if (file.type === 'English')
              json[selmaho].t = { type: "English term" }
          } else {
            console.log(el)
          }
        })
  }

  //save
  let text = JSON.stringify(json)
  fs.writeFileSync(
    path.join('/livla/build/sutysisku/data', 'parsed-en-cll.json'),
    text
  )
  const arr = Object.keys(json).map(i => {
    return { w: i, bangu: 'en-cll', cache: [i, i.replace(/h/g, "'")], ...json[i] }
  })
  const outp = {
    "formatName": "dexie",
    "formatVersion": 1,
    "data": {
      "databaseName": "sorcu1",
      "databaseVersion": 1,
      "tables": [
        {
          "name": "valsi",
          "schema": "++id, bangu, w, d, n, t, g, *r, *cache",
          "rowCount": arr.length
        }
      ],
      "data": [{
        "tableName": "valsi",
        "inbound": true,
        "rows": arr
      }]
    }
  }

  fs.writeFileSync(
    path.join('/livla/build/sutysisku/data', 'parsed-en-cll.blob.json'),
    JSON.stringify(outp)
  )
}

function fullColorHex(r, g, b) {
  const red = rgbToHex(r)
  const green = rgbToHex(g)
  const blue = rgbToHex(b)
  return '#' + red + green + blue
}

// templating - remove parts not relevant to the current sutysisku
String.prototype.stripout = function (config, tag) {
  const tags = tag
    .split('\\|')
    .map((j) => !!(config[j] && config[j] !== 'false'))
  const m = tags.includes(true)
  const ku = m ? '$1' : ''
  const antiku = !m ? '$1' : ''
  return (
    this
      // OR operator
      .replace(
        new RegExp(
          '\\/\\/<' + tag + '>([\\s\\S]*?)\\/\\/<\\/' + tag + '>',
          'gm'
        ),
        ku
      )
      .replace(
        new RegExp(
          '\\/\\* *<' + tag + '>([\\s\\S]*?)\\/\\/<\\/' + tag + '> \\*\\/',
          'gm'
        ),
        ku
      )
      .replace(new RegExp('<' + tag + '>([\\s\\S]*?)</' + tag + '>', 'gm'), ku)
      // NOT operator
      .replace(
        new RegExp(
          '\\/\\/<' + tag + ' false>([\\s\\S]*?)\\/\\/<\\/' + tag + '>',
          'gm'
        ),
        antiku
      )
      .replace(
        new RegExp(
          '\\/\\* *<' +
          tag +
          ' false>([\\s\\S]*?)\\/\\/<\\/' +
          tag +
          '> *\\*\\/',
          'gm'
        ),
        antiku
      )
      .replace(
        new RegExp('<' + tag + ' false>([\\s\\S]*?)</' + tag + '>', 'gm'),
        antiku
      )
  )
}

String.prototype.replaceMergefield = function (config) {
  return Object.keys(config).reduce((acc, i) => {
    return acc.replace(new RegExp('[\'"]%' + i + '%[\'"]', 'g'), config[i])
  }, this)
}

function processTemplate({ config, fallback, now, file }) {
  const output = file
    .replace(/{now}/g, now)
    .replaceMergefield(config)
    .replaceMergefield(fallback)
    /// /strip out according to Lojbanicity of the sutysisku
    .stripout(config, 'xuzganalojudri\\|lojbo')
    .stripout(config, 'xuzganalojudri')
    .stripout(config, 'lojbo')
    .stripout(config, 'muplis')
    // delete comments, compress code
    // .replace(/^[ \t]+/gm, '')
    .replace(/^\/\/.*$/gm, '')
    .replace(/\/\*((?!\/\*)[\s\S]*?)\*\//gm, '')
    .replace(/<!--[\s\S]*?-->/gm, '')
  // .replace(/\n\s*\n/g, '\n')
  return output
}
let nameCache = {};

const reserved = ['fancu', 'sisku', 'parse', 'cmaxes', 'cnino_sorcu', 'EmptyState', 'runSearch'];

(async () => {
  // generate files
  for (let lang of langs) {
    // generate index.html
    const config = JSON.parse(
      fs.readFileSync(
        path.join('/livla/build/sutysisku/', lang, 'config.json'),
        {
          encoding: 'utf8',
        }
      )
    )
    const config_fallback = {
      lang: lang,
      title: "la sutysisku zo'u: ze'i mitysisku lo valsi",
      favicon: '../pixra/snime.svg',
      icon16: '../pixra/16.png',
      icon32: '../pixra/32.png',
      ogurl: 'https://la-lojban.github.io/sutysisku/' + lang + '/index.html',
      ogtitle: 'Sutysisku',
      searchurl: '/sutysisku/' + lang + '/sisku.xml',
      searchtitle: lang + '-sutysisku',
      titlelogo:
        "<a id='title' onclick='EmptyState()' href='javascript:;' aria-label='la sutysisku'><span id='site-title'  class='desktop-mode-title-color'><img id=\"logo\" src=\"../pixra/snime.svg\" height='16' width='16' alt='logo'><font color='#fff' data-jufra='titlelogo'>la sutysisku</font></span></a>",
      arxivoskari1: '233, 195, 58',
      arxivoskari2: '211, 172, 34',
      arxivoskari3: '224, 183, 36',
      arxivoskari4: '164, 134, 25',

      mupliskari1: '56,136,233',
      mupliskari2: '34,87,213',
      mupliskari3: '38,99,224',
      mupliskari4: '25,65,165',

      catniskari1: '58,116,233',
      catniskari2: '34,87,210',
      catniskari3: '36,68,224',
      catniskari4: '25,48,164',

      fanvaskari1: '210,58,233',
      fanvaskari2: '208,34,211',
      fanvaskari3: '224,36,224',
      fanvaskari4: '164,25,164',

      velcusku_skari1: '214, 58, 233',
      velcusku_skari2: '193, 34, 211',
      velcusku_skari3: '205, 36, 224',
      velcusku_skari4: '150, 25, 164',

      rimniskari1: '230,47,0',
      rimniskari2: '119,29,29',
      rimniskari3: '220,4,4',
      rimniskari4: '95,29,0',

      gradpos1: '0%',
      gradpos2: '13%',
      gradpos3: '88%',
      gradpos4: '100%',
      rimnigradpos1: '0%',
      rimnigradpos2: '10%',
      rimnigradpos3: '91%',
      rimnigradpos4: '100%',
      kunti: 'clear',
      rimni: 'rhymes',
      cnano: '+',
      catni: 'search',
      arxivo: 'archive',
      velcusku: 'read chat',
      parse: 'parse',
    }
    const arr = (config.mupliskari4 || config_fallback.mupliskari4)
      .split(',')
      .map((i) => i.trim())
    config.mupliskariralju = fullColorHex(arr[0], arr[1], arr[2])
    // read template.html into var
    for (const el of [
      {
        file: 'index.html',
        out: 'index.html',
      },
      {
        file: 'index.css',
        out: 'index.css',
      },
      {
        file: 'index.js',
        out: 'index.js',
        uglify: true,
      },
    ]) {
      let output = processTemplate({
        config,
        fallback: config_fallback,
        now,
        file: fs.readFileSync(path.join(__dirname, './template', el.file), {
          encoding: 'utf8',
        }),
      })
      if (el.uglify && process.env.COMPRESS !== 'false') {
        const store_file = path.join(`/livla/build/sutysisku/${lang}/${el.file}`)
        const store_file_tmp = path.join(`/livla/build/sutysisku/${lang}/${el.file}.tmp`)
        fs.writeFileSync(store_file, output)
        const w = fs.createWriteStream(store_file_tmp)
        await new Promise(resolve => {
          browserify(store_file)
            .transform("babelify", { presets: ["@babel/preset-env"], plugins: ['@babel/plugin-transform-runtime'] })
            .bundle()
            .pipe(w);
          w.on('finish', function () {
            resolve()
          });
        })

        output = fs.readFileSync(store_file_tmp, {
          encoding: 'utf8',
        })
        output = (await minify(output, {
          ecma: 5,
          nameCache,
          compress: {
            keep_fnames: true,
            unused: false
          },
          mangle: {
            keep_classnames: true,
            keep_fnames: true,
            reserved,
          },
        })).code
        fs.unlinkSync(store_file_tmp)
        console.log(`minified ${store_file}`)
      }
      fs.writeFileSync(
        path.join('/livla/build/sutysisku/', lang, el.out),
        output
      )
    }

    // current datetime
    const d = new Date()

    fs.copyFileSync(
      path.join(__dirname, `./src/${lang}/bangu.js`),
      path.join('/livla/build/sutysisku/', lang, 'bangu.js')
    )

    // read sisku.xml template into var
    const b = fs
      .readFileSync(path.join(__dirname, './template', 'sisku.xml'), {
        encoding: 'utf8',
      })
      .replace(
        '%template%',
        `https://la-lojban.github.io/sutysisku/${lang}/index.html#seskari=cnano&amp;sisku={searchTerms}`
      )
      .replace('%shortname%', lang + '-sutysisku')
      .replaceMergefield(config)
    fs.writeFileSync(
      path.join('/livla/build/sutysisku/', lang, 'sisku.xml'),
      b
    )
    // copy sw.js
    try {
      fs.writeFileSync(
        path.join('/livla/build/sutysisku/', lang, 'sw.js'),
        fs
          .readFileSync(path.join(__dirname, 'template', 'sw.js'), {
            encoding: 'utf8',
          })
          .replace(/{now}/g, now)
          .replace(/{lang}/g, lang)
      )
    } catch (error) { }
    // generate appcache
    const dummyAppcache = `CACHE MANIFEST
# 2020-03-21T23:40:38
NETWORK:
*
`
    try {
      fs.writeFileSync(
        path.join('/livla/build/sutysisku/', lang, 'webapp.appcache'),
        dummyAppcache
      )
    } catch (error) { }
    // generate worker.js

    const workerjsfile = `
    postMessage({kind: 'loading'});
    ${fs.readFileSync(path.join(__dirname, `./template/cmaxes.js`), {
      encoding: 'utf8',
    })}
    importScripts(
      'https://cdnjs.cloudflare.com/ajax/libs/dexie/2.0.4/dexie.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js'
    );
    ${fs.readFileSync(path.join(__dirname, `./template/sisku.js`), {
      encoding: 'utf8',
    })}
    postMessage({kind: 'ready'});
    self.onmessage = function(ev) {
      if (ev.data.kind == 'newSearch') {
        sisku(ev.data, function(res) {
          postMessage({
            kind: 'searchResults',
            results: res.results,
            req: {
              bangu: ev.data.bangu,
              seskari: ev.data.seskari,
              versio: ev.data.versio,
              query: ev.data.query              
            }
          })
        })
      }
    }`
    fs.writeFileSync(
      path.join('/livla/build/sutysisku', lang, 'worker.js'),
      workerjsfile
    )

    // generate sorcuWorker.js
    const sorcuWorkerjsfile = `
    importScripts(
      'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/dexie/2.0.4/dexie.min.js'
    );
    ${fs.readFileSync(path.join(__dirname, `./template/sorcu.js`), {
      encoding: 'utf8',
    })}
    postMessage({kind: 'ready'});
    self.onmessage = function(ev) {
      if (ev.data.kind == 'loader') {
        postMessage(ev.data)    
      } else if (ev.data.kind == 'fancu' && ev.data.cmene) {
        fancu[ev.data.cmene](ev.data, function(results) {
          postMessage({
            kind: 'fancu',
            cmene: ev.data.cmene,
            datni: ev.data,
            results: results
          })
        })
      }
    }`
    fs.writeFileSync(
      path.join('/livla/build/sutysisku', lang, 'sorcuWorker.js'),
      sorcuWorkerjsfile
    )
    for (let fileName of ['sorcuWorker.js', 'worker.js']) {
      const filename = path.join('/livla/build/sutysisku', lang, fileName)
      const filename_tmp = path.join(`/livla/build/sutysisku/${fileName}`) + ".tmp"
      let content = fs.readFileSync(filename, {
        encoding: 'utf8',
      })
      if (process.env.COMPRESS !== 'false') {
        const w = fs.createWriteStream(filename_tmp)
        await new Promise(resolve => {
          browserify(filename)
            .transform("babelify", { presets: ["@babel/preset-env"], plugins: [['@babel/plugin-transform-runtime']] })
            .bundle()
            .pipe(w);
          w.on('finish', function () {
            resolve()
          });
        })

        content = fs.readFileSync(filename_tmp, {
          encoding: 'utf8',
        })
        content = (await minify(content, {
          ecma: 5,
          nameCache,
          compress: {
            keep_fnames: true,
          },
          mangle: {
            toplevel: false,
            keep_classnames: true,
            keep_fnames: true,
            reserved,
          },
        })).code
        fs.unlinkSync(filename_tmp)
        console.log(`minified ${path.join(`/livla/build/sutysisku/${lang}/${fileName}`)}`)
      }
      fs.writeFileSync(path.join(`/livla/build/sutysisku/${lang}/${fileName}`), content)
    }
  }

  fs.copyFileSync(
    path.join(__dirname, `./template/tejufra.json`),
    path.join(`/livla/build/sutysisku/lojban/tejufra.json`)
  )
})()