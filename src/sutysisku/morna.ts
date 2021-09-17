
const cll_source = 'https://la-lojban.github.io/uncll/uncll-1.2.14/xhtml_section_chunks/'

declare global {
  interface String {
    stripout(config: { [x: string]: string; }, tag: string): string;
    replaceMergefield(config: { [x: string]: any; }): string;
  }
}

import webpack from 'webpack';
import fs from 'fs-extra';

const path = require('path-extra');
import axios from 'axios';
import * as brotli from 'brotli-wasm';
import { minify } from 'terser';
import browserify from "browserify";
import * as cheerio from 'cheerio';

// const babel = require('@babel/core')
// const env = require('@babel/preset-env')

const now = new Date().getTime()
// config
const args = process.argv.slice(2)
const langs =
  args.length > 0
    ? args
    : [
      'lojban',
      // 'ile',
      // 'ina',
      // 'ithkuil',
      // 'laadan',
      // 'ldp',
      // 'zamenhofo',
      // 'epo-tha',
      // 'simplingua-zho',
      // 'toki',
      // 'ktv-eng',
      // 'en-pt-BR',
      // 'muplis-eng-pol',
    ]

generateCLLDictionary()
generateLLDictionary()
generatePremadeDicts()

// functions
// generic
function rgbToHex(rgb: string) {
  let hex = Number(rgb).toString(16)
  if (hex.length < 2) {
    hex = `0${hex}`
  }
  return hex
}

async function generatePremadeDicts() {
  const content = JSON.parse(fs.readFileSync('/livla/src/sutysisku/src/data/parsed-sutysisku-0.blob.json', { encoding: 'utf8' }))

  fs.writeFileSync(
    path.join('/livla/build/sutysisku/data', 'parsed-sutysisku-0.bin'),
    brotli.compress(Buffer.from(JSON.stringify(content)))
  )
  const hash = require('object-hash')(content)
  const versio = '/livla/build/sutysisku/data/versio.json'
  let jsonTimes: { [x: string]: string; } = {}
  try {
    jsonTimes = JSON.parse(fs.readFileSync(versio, { encoding: 'utf8' }))
  } catch (error) { }
  jsonTimes['sutysisku'] = hash
  fs.writeFileSync(versio, JSON.stringify(jsonTimes))
}

async function generateCLLDictionary(
) {
  const json: any = {}

  for (let file of [{ name: 'ix01.html', type: 'lojbo' }, { name: 'ix02.html', type: 'English' }]) {
    const appendix = cll_source + file.name
      ; (await axios(appendix)).data
        .match(/<dt>(.*?)<\/dt>[ \t\n\r]*((?=<dt>)|(?=<\/)|<dd>(.*?)<\/dd>)/gs)
        .forEach((el: string) => {
          const arrEl = el.replace(/[ \t]*\n[ \t]*/g, '').replace(/>[ \t]+/g, '>').replace(/^<dt>(.*?)(?=<a )(.*)$/s, '$1\t$2').split(/\t/)
          if (arrEl.length === 2) {
            let selmaho = arrEl[0]
              .replace(/ *<.*?>.*/g, '')
              .trim()
              .replace(/ (selma'o|construct)/g, '')
              .replace(/ *:/g, '')
              .replace(/^\./, '')
              .replace(/\.$/, '')
            const jsonLinks: { [x: string]: string; } = {};
            ((arrEl[1] || '').match(/<a (.*?)<\/a>/gs) || []).forEach((i: string) => {
              const arrI = i
                .replace(/<a .*?href="(.*?)(?:#.*?)?".*?>(.*?)<\/a>/s, '$1\t$2')
                .split(/\t/)
              jsonLinks[arrI[0]] = arrI[1]
                .replace(/[\n\r]/g, ' ')
                .replace(/ {2,}/g, ' ')
                .trim()
            })
            json[selmaho] = { d: jsonLinks }
            if (file.type === 'English')
              json[selmaho].t = { type: "English term", k: 0 }
          } else {
            console.log(el)
          }
        })
  }


  const arr = Object.keys(json).map(i => ({
    w: i,
    cache: [...new Set([i, i.replace(/h/g, "'")])],
    ...json[i]
  }))
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
    path.join('/livla/build/sutysisku/data', 'parsed-en-cll-0.bin'),
    brotli.compress(Buffer.from(JSON.stringify(outp)))
  )
  const hash = require('object-hash')(outp)
  const versio = '/livla/build/sutysisku/data/versio.json'
  let jsonTimes: { [x: string]: string; } = {}
  try {
    jsonTimes = JSON.parse(fs.readFileSync(versio, { encoding: 'utf8' }))
  } catch (error) { }
  jsonTimes['en-cll'] = hash
  fs.writeFileSync(versio, JSON.stringify(jsonTimes))
}

async function generateLLDictionary() {
  const html = (await axios('https://lojban.pw/books/learn-lojban/')).data
  const $ = cheerio.load(html);
  let mapping: any = {}
  $('h1, h2, h3, h4, h5').each((i, ele) => {
    const href = $(ele).children('a').attr('href')
    if (!href || href.indexOf("#") !== 0) return
    mapping[href.substr(1)] = $(ele).text().trim().replace(/#/g, '')
  });

  const json = JSON.parse(fs.readFileSync('/livla/src/sutysisku/template/ll.json', { encoding: 'utf8' }))
  const arr = Object.keys(json).map(i => {
    const d = json[i].d.split(",")
    delete json[i].d
    const newdef: { [x: string]: string; } = {}
    for (const link of d)
      newdef[link] = mapping[link] || i

    return { w: i, cache: [i], ...json[i], d: newdef }
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
    path.join('/livla/build/sutysisku/data', 'parsed-en-ll-0.json'),
    JSON.stringify(outp)
  )
  fs.writeFileSync(
    path.join('/livla/build/sutysisku/data', 'parsed-en-ll-0.bin'),
    brotli.compress(Buffer.from(JSON.stringify(outp)))
  )
  const hash = require('object-hash')(outp)
  const versio = '/livla/build/sutysisku/data/versio.json'
  let jsonTimes: { [x: string]: string; } = {}
  try {
    jsonTimes = JSON.parse(fs.readFileSync(versio, { encoding: 'utf8' }))
  } catch (error) { }
  jsonTimes['en-ll'] = hash
  fs.writeFileSync(versio, JSON.stringify(jsonTimes))
}

function fullColorHex(r: string, g: string, b: string) {
  const red = rgbToHex(r)
  const green = rgbToHex(g)
  const blue = rgbToHex(b)
  return `#${red}${green}${blue}`;
}

// templating - remove parts not relevant to the current sutysisku
String.prototype.stripout = function (config: { [x: string]: string; }, tag: string) {
  const tags = tag
    .split('\\|')
    .map((j) => !!(config[j] && config[j] !== 'false'))
  const m = tags.includes(true)
  const ku = m ? '$1' : ''
  const antiku = !m ? '$1' : ''
  return this
    // OR operator
    .replace(
      new RegExp(
        `\\/\\/<${tag}>([\\s\\S]*?)\\/\\/<\\/${tag}>`,
        'gm'
      ),
      ku
    )
    .replace(
      new RegExp(
        `\\/\\* *<${tag}>([\\s\\S]*?)\\/\\/<\\/${tag}> \\*\\/`,
        'gm'
      ),
      ku
    )
    .replace(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, 'gm'), ku)
    // NOT operator
    .replace(
      new RegExp(
        `\\/\\/<${tag} false>([\\s\\S]*?)\\/\\/<\\/${tag}>`,
        'gm'
      ),
      antiku
    )
    .replace(
      new RegExp(
        `\\/\\* *<${tag} false>([\\s\\S]*?)\\/\\/<\\/${tag}> *\\*\\/`,
        'gm'
      ),
      antiku
    )
    .replace(
      new RegExp(`<${tag} false>([\\s\\S]*?)</${tag}>`, 'gm'),
      antiku
    );
}

String.prototype.replaceMergefield = function (config: { [x: string]: any; }): string {
  return Object.keys(config).reduce((acc, i) => acc.replace(new RegExp(`['"]%${i}%['"]`, 'g'), config[i]), this) as string;
}

function processTemplate({ config, fallback, now, file }: { config: { [x: string]: any; }, fallback: { [x: string]: any; }, now: number, file: string }) {
  let output = file
    .replace(/{now}/g, now.toString())
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
      lang,
      cll_source,
      title: "la sutysisku zo'u: ze'i mitysisku lo valsi",
      favicon: '../pixra/snime.svg',
      icon16: '../pixra/16.png',
      icon32: '../pixra/32.png',
      ogurl: `https://la-lojban.github.io/sutysisku/${lang}/index.html`,
      ogtitle: 'Sutysisku',
      searchurl: `/sutysisku/${lang}/sisku.xml`,
      searchtitle: `${lang}-sutysisku`,
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
      gradpos2: '8%',
      gradpos3: '92%',
      gradpos4: '100%',
      rimnigradpos1: '0%',
      rimnigradpos2: '8%',
      rimnigradpos3: '92%',
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
      .map((i: string) => i.trim())
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

      if (el.uglify && process.env.COMPRESS !== 'false' && !process.env.DEBUG) {
        const store_file = path.join(`/livla/build/sutysisku/${lang}/${el.file}`)
        const store_file_tmp = path.join(`/livla/build/sutysisku/${lang}/${el.file}.tmp`)
        fs.writeFileSync(store_file, output)
        const w = fs.createWriteStream(store_file_tmp)
        await new Promise(resolve => {
          browserify(store_file)
            .transform("babelify", { presets: ["@babel/preset-env"], plugins: ['@babel/plugin-transform-runtime'] })
            .bundle()
            .pipe(w);
          w.on('finish', () => {
            resolve(null)
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
        })).code || ''
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

    // read sisku.xml template into var
    const b = fs
      .readFileSync(path.join(__dirname, './template', 'sisku.xml'), {
        encoding: 'utf8',
      })
      .replace(
        '%template%',
        `https://la-lojban.github.io/sutysisku/${lang}/index.html#seskari=cnano&amp;sisku={searchTerms}`
      )
      .replace('%shortname%', `${lang}-sutysisku`)
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
          .replace(/{now}/g, now.toString())
          .replace(/{lang}/g, lang)
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
      const filename_tmp = `${path.join(`/livla/build/sutysisku/${fileName}`)}.tmp`
      let content = fs.readFileSync(filename, {
        encoding: 'utf8',
      })
      if (process.env.COMPRESS !== 'false' && !(process.env.DEBUG && fileName == 'worker.js')) {

        const w = fs.createWriteStream(filename_tmp)
        await new Promise(resolve => {
          browserify(filename)
            .transform("babelify", { presets: ["@babel/preset-env"], plugins: [['@babel/plugin-transform-runtime']] })
            .bundle()
            .pipe(w);
          w.on('finish', () => {
            resolve(null)
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
        })).code || ''
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

  const langs_jbo = [
    'jbo',
    'en',
    'ru',
    'es',
    'fr',
    'pl',
    'ja',
    'de',
    'eo',
    'zh',
    'en-simple',
    'fr-facile',
    'hu',
    'sv',
  ]
  //create redirects
  for (const lang of langs_jbo) {
    const content = `<!DOCTYPE HTML>
    <html lang="en-US">
        <head>
            <meta charset="UTF-8">
            <script type="text/javascript">
                var hash = window.location.hash.replace(/#sisku\\//,'#seskari=cnano&sisku=') || '#'
                window.location.href = "/sutysisku/lojban/index.html"+hash+"&bangu=${lang}";
            </script>
            <title>Page Redirection</title>
        </head>
        <body>
            If you are not redirected automatically, follow the <a href='/sutysisku/lojban/index.html#'>La Sutysisku</a>
        </body>
    </html>`
    await fs.outputFile(`/livla/build/sutysisku/${lang}/index.html`, content)
    // generate appcache
    const dummyAppcache = `CACHE MANIFEST
# ${new Date().toISOString()}
NETWORK:
*
`
    try {
      fs.writeFileSync(
        path.join('/livla/build/sutysisku/', lang, 'webapp.appcache'),
        dummyAppcache
      )
    } catch (error) { }

  }
  // await new Promise(resolve => {
  //   webpack({
  //     entry: {
  //       index: '/livla/build/sutysisku/lojban/index.js',
  //       sw: '/livla/build/sutysisku/lojban/sw.js',
  //       worker: '/livla/build/sutysisku/lojban/worker.js',
  //       sorcuWorker: '/livla/build/sutysisku/lojban/sorcuWorker.js'
  //     },
  //     output: {
  //       filename: '[name].bundle.js',
  //       path: '/livla/build/sutysisku/lojban',
  //     },
  //   }, (error, stats: any) => {
  //     if (error || stats?.hasErrors()) {
  //       fs.writeFileSync('./log.txt', (error||'').toString() + " " + stats.toString());
  //     }
  //     resolve(null)
  //   })
  // })
})()