const externalConfig = {
  cll_source:
    'https://la-lojban.github.io/uncll/uncll-1.2.14/xhtml_section_chunks/',
  feedback_backend_url: 'https://sutysisku-report.herokuapp.com/',
  issues_repo:
    'https://github.com/La-Lojban/pinka/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc',
  sql_buffer_mode: 'shared-memory',
  sql_pragma_mode: 'memory',
  GA_MEASUREMENT_ID: 'UA-45171210-6',
  SUTYSISKU_URL: 'la-lojban.github.io/sutysisku',
}

const filesToWorkWith = [
  {
    file: 'index.html',
    out: 'index.html',
  },
  {
    file: 'index.css',
    out: 'index.css',
  },
  {
    file: 'sqljs/sql-wasm.wasm',
    out: 'sql-wasm.wasm',
    simpleCopy: true,
  },
  {
    file: 'socket.io.js',
    out: 'socket.io.js',
    simpleCopy: true,
  },
  {
    file: 'cmaxes.js',
    out: 'cmaxes.js',
    simpleCopy: true,
  },
  {
    file: 'tejufra.json',
    out: 'tejufra.json',
    simpleCopy: true,
  },
  {
    file: 'sisku.xml',
    out: 'sisku.xml',
  },
  {
    file: 'coi.js',
    out: 'coi.js',
  },
  {
    file: 'worker.js',
    out: 'worker.js',
  },
  {
    file: 'index.js',
    out: 'index.js',
    uglify: true,
  },
];

declare global {
  interface String {
    stripout(config: { [x: string]: string }, tag: string): string
    replaceMergefield(config: { [x: string]: any }): string
  }
}

import axios from 'axios'
import * as brotli from 'brotli-wasm'
import * as cheerio from 'cheerio'
import * as fs from 'fs-extra'
import * as webpack from 'webpack'

const path = require('path-extra')

// const babel = require('@babel/core')
// const env = require('@babel/preset-env')

const now = new Date().getTime().toString()
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
;[
  { name: 'sutysisku' },
  {
    name: 'en-pixra',
    url: 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/%d&width=200&height=200',
  },
].forEach((i) => generatePremadeDicts(i))

// functions
// generic
function rgbToHex(rgb: string) {
  let hex = Number(rgb).toString(16)
  if (hex.length < 2) {
    hex = `0${hex}`
  }
  return hex
}

async function generatePremadeDicts({
  name,
  url,
}: {
  name: string
  url?: string
}) {
  const content = JSON.parse(
    fs.readFileSync(
      `/livla/src/sutysisku/src/data/parsed-${name}-0.blob.json`,
      { encoding: 'utf8' }
    )
  )

  if (url) {
    const responseObjs: any = await Promise.all(
      content.data.data[0].rows.map((def) =>
        axios
          .get(url.replace(/%d/g, encodeURIComponent(def.d)), {
            responseType: 'arraybuffer',
          })
          .catch((_) => undefined)
      )
    )
    let arr = []
    let i = 0
    const xrastePath = `/livla/build/sutysisku/pixra/xraste/`
    if (!fs.existsSync(xrastePath)) {
      fs.mkdirSync(xrastePath)
    }
    for (let def of content.data.data[0].rows) {
      if (responseObjs[i]) {
        // console.log(responseObjs[i].data);
        fs.writeFileSync(
          `/livla/build/sutysisku/pixra/xraste/${def.d}`,
          responseObjs[i].data,
          { encoding: 'binary' }
        )
        // def = { ...def, d: responseObjs[i].request.res.responseUrl }
        arr.push(def)
      }
      i++
    }
    content.data.data[0].rows = arr
    await generateNinxrasteDictionary(content)
  }

  fs.writeFileSync(
    path.join(`/livla/build/sutysisku/data`, `parsed-${name}-0.bin`),
    brotli.compress(Buffer.from(JSON.stringify(content)))
  )
  const hash = require('object-hash')(content)
  const versio = '/livla/build/sutysisku/data/versio.json'
  let jsonTimes: { [x: string]: string } = {}
  try {
    jsonTimes = JSON.parse(fs.readFileSync(versio, { encoding: 'utf8' }))
  } catch (error) {}
  jsonTimes[name] = hash
  if (!url) fs.writeFileSync(versio, JSON.stringify(jsonTimes))
}

async function generateNinxrasteDictionary(content) {
  const arr = fs
    .readdirSync('/livla/src/sutysisku/src/pixra/ninxraste')
    .map((fileName) => ({
      w: fileName.replace(/\..*?$/, ''),
      d: `../pixra/ninxraste/${fileName}`,
    }))

  const outp = {
    formatName: 'dexie',
    formatVersion: 1,
    data: {
      databaseName: 'sorcu1',
      databaseVersion: 1,
      tables: [
        {
          name: 'valsi',
          schema: '++id, bangu, w, d, n, t, g, *r, *cache',
          rowCount: arr.length,
        },
      ],
      data: [
        {
          tableName: 'valsi',
          inbound: true,
          rows: arr,
        },
      ],
    },
  }

  fs.writeFileSync(
    path.join('/livla/build/sutysisku/data', 'parsed-en-pixra-1.bin'),
    brotli.compress(Buffer.from(JSON.stringify(outp)))
  )
  fs.writeFileSync(
    path.join('/livla/build/sutysisku/data', 'parsed-en-pixra-1.json'),
    JSON.stringify(outp)
  )
  const hash = require('object-hash')({ ninxra: outp, pixra: content })
  const versio = '/livla/build/sutysisku/data/versio.json'
  let jsonTimes: { [x: string]: string } = {}
  try {
    jsonTimes = JSON.parse(fs.readFileSync(versio, { encoding: 'utf8' }))
  } catch (error) {}
  jsonTimes['en-pixra'] = hash
  fs.writeFileSync(versio, JSON.stringify(jsonTimes))
}

async function generateCLLDictionary() {
  const json: any = {}

  for (let file of [
    { name: 'ix01.html', type: 'lojbo' },
    { name: 'ix02.html', type: 'English' },
  ]) {
    const appendix = externalConfig.cll_source + file.name
    ;(await axios(appendix)).data
      .match(/<dt>(.*?)<\/dt>[ \t\n\r]*((?=<dt>)|(?=<\/)|<dd>(.*?)<\/dd>)/gs)
      .forEach((el: string) => {
        const arrEl = el
          .replace(/[ \t]*\n[ \t]*/g, '')
          .replace(/>[ \t]+/g, '>')
          .replace(/^<dt>(.*?)(?=<a )(.*)$/s, '$1\t$2')
          .split(/\t/)
        if (arrEl.length === 2) {
          let selmaho = arrEl[0]
            .replace(/ *<.*?>.*/g, '')
            .trim()
            .replace(/ (selma'o|construct)/g, '')
            .replace(/ *:/g, '')
            .replace(/^\./, '')
            .replace(/\.$/, '')
          const jsonLinks: { [x: string]: string } = {}
          ;((arrEl[1] || '').match(/<a (.*?)<\/a>/gs) || []).forEach(
            (i: string) => {
              const arrI = i
                .replace(/<a .*?href="(.*?)(?:#.*?)?".*?>(.*?)<\/a>/s, '$1\t$2')
                .split(/\t/)
              jsonLinks[arrI[0]] = arrI[1]
                .replace(/[\n\r]/g, ' ')
                .replace(/ {2,}/g, ' ')
                .trim()
            }
          )
          json[selmaho] = { d: jsonLinks }
          if (file.type === 'English')
            json[selmaho].t = { bangu: 'glico', type: 'English term', k: 0 }
        } else {
          console.log(el)
        }
      })
  }

  const arr = Object.keys(json).map((i) => ({
    w: i,
    cache: [...Array.from(new Set([i, i.replace(/h/g, "'")]))],
    ...json[i],
  }))
  const outp = {
    formatName: 'dexie',
    formatVersion: 1,
    data: {
      databaseName: 'sorcu1',
      databaseVersion: 1,
      tables: [
        {
          name: 'valsi',
          schema: '++id, bangu, w, d, n, t, g, *r, *cache',
          rowCount: arr.length,
        },
      ],
      data: [
        {
          tableName: 'valsi',
          inbound: true,
          rows: arr,
        },
      ],
    },
  }

  fs.writeFileSync(
    path.join('/livla/build/sutysisku/data', 'parsed-en-cll-0.bin'),
    brotli.compress(Buffer.from(JSON.stringify(outp)))
  )
  fs.writeFileSync(
    path.join('/livla/build/sutysisku/data', 'parsed-en-cll-0.json'),
    JSON.stringify(outp)
  )
  const hash = require('object-hash')(outp)
  const versio = '/livla/build/sutysisku/data/versio.json'
  let jsonTimes: { [x: string]: string } = {}
  try {
    jsonTimes = JSON.parse(fs.readFileSync(versio, { encoding: 'utf8' }))
  } catch (error) {}
  jsonTimes['en-cll'] = hash
  fs.writeFileSync(versio, JSON.stringify(jsonTimes))
}

const settings_path = '/livla/build/sutysisku/data/tcini.json'
const settings = {
  vreji: [
    './',
    './index.html',
    // 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js',
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff',
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff',
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff',
    'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js',
    'https://unpkg.com/microfeedback-button/dist/microfeedback-button.min.js',
    './sql-wasm.wasm',
    '../assets/fonts/linux-libertine/LinLibertine_R.otf',
    '../assets/fonts/linux-libertine/LinLibertine_RI.otf',
    '../assets/fonts/linux-libertine/LinLibertine_RB.otf',
    '../assets/fonts/linux-libertine/LinLibertine_RBI.otf',
    '../assets/fonts/crisa-regular.otf',
    './bangu.js?sisku={now}',
    '../assets/scripts/aws-sdk.min.js',
    './w2v/embeddings.js',
    // './w2v/tfjs-backend-wasm.wasm',
    // './w2v/tfjs-backend-wasm-simd.wasm',
    // './w2v/tfjs-backend-wasm-threaded-simd.wasm',
    '../data/embeddings-en.json.bin',
    './index.js?detri={now}',
    './index.css?detri={now}',
    './worker.js?sisku={now}',
    '../pixra/144.png',
    '../pixra/32.png',
    '../pixra/shuffle.svg',
    '../pixra/sance.svg',
    '../pixra/terdi.svg',
    '../pixra/fukpi.svg',
    '../pixra/valsr.png',
    '../pixra/cukta.svg',
    '../pixra/certu.svg',
    '../pixra/fanva.svg',
    '../pixra/cll.png',
    '../pixra/loglan-refgram.png',
    '../pixra/cmalu_snime.svg',
    '../pixra/snime.svg',
    '../pixra/menu.svg',
    '../pixra/x.svg',
    '../pixra/jbotcan.svg',
    '../pixra/murse.jpg',
    '../pixra/taplamuplis.svg',
    '../pixra/nunsku.svg',
    '../pixra/plise.svg',
    '../pixra/pelxuplise.svg',
    '../pixra/crinoplise.svg',
    '../pixra/blabiplise.svg',
    '../pixra/cicnaplise.svg',
    '../pixra/selsku_lanci_eng.svg',
    '../pixra/selsku_lanci_zho.svg',
    '../pixra/lanci_jbo.svg',
    '../pixra/selsku_lanci_jpn.svg',
    '../pixra/selsku_lanci_fra.svg',
    '../pixra/selsku_lanci_rus.svg',
    '../pixra/lanci_epo.svg',
    '../pixra/selsku_lanci_spa.svg',
    '../pixra/loglan.png',
    '../pixra/cogwheel-5.svg',
    '../sance/lerfu/a.ogg',
    '../sance/lerfu/ai.ogg',
    '../sance/lerfu/aia.ogg',
    '../sance/lerfu/au.ogg',
    '../sance/lerfu/aua.ogg',
    '../sance/lerfu/b.ogg',
    '../sance/lerfu/c.ogg',
    '../sance/lerfu/d.ogg',
    '../sance/lerfu/e.ogg',
    '../sance/lerfu/ei.ogg',
    '../sance/lerfu/f.ogg',
    '../sance/lerfu/g.ogg',
    "../sance/lerfu/'.ogg",
    '../sance/lerfu/i.ogg',
    '../sance/lerfu/j.ogg',
    '../sance/lerfu/k.ogg',
    '../sance/lerfu/l.ogg',
    '../sance/lerfu/m.ogg',
    '../sance/lerfu/n.ogg',
    '../sance/lerfu/o.ogg',
    '../sance/lerfu/oi.ogg',
    '../sance/lerfu/p.ogg',
    '../sance/lerfu/r.ogg',
    '../sance/lerfu/s.ogg',
    '../sance/lerfu/t.ogg',
    '../sance/lerfu/u.ogg',
    '../sance/lerfu/v.ogg',
    '../sance/lerfu/x.ogg',
    '../sance/lerfu/y.ogg',
    '../sance/lerfu/z.ogg',
  ],
}
settings.vreji = settings.vreji.map((i) => i.replace(/{now}/g, now))

fs.writeFileSync(settings_path, JSON.stringify(settings))

async function generateLLDictionary() {
  const html = (await axios('https://lojban.pw/books/learn-lojban/')).data
  const $ = cheerio.load(html)
  let mapping: any = {}
  $('h1, h2, h3, h4, h5').each((i, ele) => {
    const href = $(ele).children('a').attr('href')
    if (!href || href.indexOf('#') !== 0) return
    mapping[href.substr(1)] = $(ele).text().trim().replace(/#/g, '')
  })

  const json = JSON.parse(
    fs.readFileSync('/livla/src/sutysisku/template/ll.json', {
      encoding: 'utf8',
    })
  )
  const arr = Object.keys(json).map((i) => {
    const d = json[i].d.split(',')
    delete json[i].d
    const newdef: { [x: string]: string } = {}
    for (const link of d) newdef[link] = mapping[link] || i

    return { w: i, cache: [i], ...json[i], d: newdef }
  })
  const outp = {
    formatName: 'dexie',
    formatVersion: 1,
    data: {
      databaseName: 'sorcu1',
      databaseVersion: 1,
      tables: [
        {
          name: 'valsi',
          schema: '++id, bangu, w, d, n, t, g, *r, *cache',
          rowCount: arr.length,
        },
      ],
      data: [
        {
          tableName: 'valsi',
          inbound: true,
          rows: arr,
        },
      ],
    },
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
  let jsonTimes: { [x: string]: string } = {}
  try {
    jsonTimes = JSON.parse(fs.readFileSync(versio, { encoding: 'utf8' }))
  } catch (error) {}
  jsonTimes['en-ll'] = hash
  fs.writeFileSync(versio, JSON.stringify(jsonTimes))
}

function fullColorHex(r: string, g: string, b: string) {
  const red = rgbToHex(r)
  const green = rgbToHex(g)
  const blue = rgbToHex(b)
  return `#${red}${green}${blue}`
}

// templating - remove parts not relevant to the current sutysisku
String.prototype.stripout = function (
  config: { [x: string]: string },
  tag: string
) {
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
        new RegExp(`\\/\\/<${tag}>([\\s\\S]*?)\\/\\/<\\/${tag}>`, 'gm'),
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
        new RegExp(`\\/\\/<${tag} false>([\\s\\S]*?)\\/\\/<\\/${tag}>`, 'gm'),
        antiku
      )
      .replace(
        new RegExp(
          `\\/\\* *<${tag} false>([\\s\\S]*?)\\/\\/<\\/${tag}> *\\*\\/`,
          'gm'
        ),
        antiku
      )
      .replace(new RegExp(`<${tag} false>([\\s\\S]*?)</${tag}>`, 'gm'), antiku)
  )
}

String.prototype.replaceMergefield = function (config: {
  [x: string]: any
}): string {
  const Mustache = require('mustache')
  let passed = this
  passed = Mustache.render(passed, config, {}, ["'{{", "}}'"])
  passed = Mustache.render(passed, config, {}, ['{{', '}}'])

  return passed
}

function processTemplate({
  config,
  file,
}: {
  config: { [x: string]: any }
  file: string
}) {
  let output = file
    .replaceMergefield(config)
    /// /strip out according to Lojbanicity of the sutysisku
    .stripout(config, 'xuzganalojudri\\|lojbo')
    .stripout(config, 'xuzganalojudri')
    .stripout(config, 'lojbo')
    .stripout(config, 'muplis')
  return output
}

;(async () => {
  // generate files
  for (let lang of langs) {
    fs.copySync(
      `/livla/src/sutysisku/src/pixra/ninxraste`,
      `/livla/build/sutysisku/pixra/ninxraste`
    )
    fs.copySync(
      `/livla/src/sutysisku/template/sqljs`,
      `/livla/build/sutysisku/${lang}/sqljs`
    )
    fs.copySync(
      `/livla/src/sutysisku/template/asql`,
      `/livla/build/sutysisku/${lang}/asql`
    )
    fs.copySync(
      `/livla/src/sutysisku/template/w2v`,
      `/livla/build/sutysisku/${lang}/w2v`
    )
    fs.copyFileSync(
      `/livla/src/sutysisku/src/${lang}/bangu.js`,
      `/livla/build/sutysisku/${lang}/bangu.js`
    )
    fs.copyFileSync(
      `/livla/src/sutysisku/src/${lang}/config.json`,
      `/livla/build/sutysisku/${lang}/config.json`
    )
    // generate index.html
    const config = JSON.parse(
      fs.readFileSync(
        path.join('/livla/build/sutysisku/', lang, 'config.json'),
        { encoding: 'utf8' }
      )
    )
    if (process.env.COMPRESS === 'false') config.production = false
    else config.production = 'production'
    const config_fallback = {
      lang,
      now,
      ...externalConfig,
      title: "la sutysisku zo'u: ze'i mitysisku lo valsi",
      favicon: '../pixra/snime.svg',
      icon16: '../pixra/16.png',
      icon32: '../pixra/32.png',
      ogurl: `https://${externalConfig.SUTYSISKU_URL}/${lang}/index.html`,
      ogtitle: 'Sutysisku',
      searchurl: `/sutysisku/${lang}/sisku.xml`,
      searchtitle: `${lang}-sutysisku`,
      titlelogo:
        "<a id='title' onclick='EmptyState()' href='javascript:;' aria-label='la sutysisku'><span id='site-title'  class='desktop-mode-title-color'><img id=\"logo\" src=\"../pixra/snime.svg\" height='16' width='16' alt='logo'><font color='#fff' data-jufra='titlelogo-inner'>la sutysisku</font></span></a>",
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
      'template': `https://${externalConfig.SUTYSISKU_URL}/${lang}/index.html#seskari=cnano&amp;sisku={searchTerms}`,
      'shortname': `${lang}-sutysisku`,
    }
    const arr = (config.mupliskari4 || config_fallback.mupliskari4)
      .split(',')
      .map((i: string) => i.trim())
    config.mupliskariralju = fullColorHex(arr[0], arr[1], arr[2])

    // read template.html into var
    for (const el of filesToWorkWith) {
      if (el.simpleCopy) {
        fs.copyFileSync(
          path.join(__dirname, './template', el.file),
          path.join('/livla/build/sutysisku/', lang, el.out)
        )
        continue
      }
      const output = processTemplate({
        config: { ...config_fallback, ...config },
        file: fs.readFileSync(path.join(__dirname, './template', el.file), {
          encoding: 'utf8',
        }),
      })
      fs.writeFileSync(
        path.join('/livla/build/sutysisku/', lang, el.out),
        output
      )
    }
  }

  fs.writeFileSync(
    path.join(`/livla/build/sutysisku/data/embeddings-en.json.bin`),
    brotli.compress(
      Buffer.from(
        fs.readFileSync(
          path.join(__dirname, `./template/w2v/word-embeddings.json`),
          { encoding: 'utf8' }
        )
      )
    )
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
    'loglan',
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
    } catch (error) {}
  }
  if (process.env.MUPLIS == 'true') {
    const childProcess = require('child_process')
    childProcess.execFileSync(
      'node',
      ['/livla/src/skripto/phrases/skripto.js'],
      { cwd: __dirname }
    )
    console.log('muplis task finished')
  } else {
    console.log('muplis task skipped')
  }

  if (!process.env.DEBUG) {
    const TerserPlugin = require('terser-webpack-plugin')

    await new Promise((resolve) => {
      webpack(
        {
          module: {
            rules: [
              {
                test: /\.html$/i,
                loader: 'html-loader',
              },
              {
                test: /\.js$/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env"], // ensure compatibility with older browsers
                    plugins: ["@babel/plugin-transform-object-assign"], // ensure compatibility with IE 11
                  },
                },
                type: 'javascript/auto',
              },
              // {
              //   test: /\.js$/,
              //   loader: "webpack-remove-debug", // remove "debug" package
              // },
            ],
          },
          entry: {
            cmaxes: '/livla/build/sutysisku/lojban/cmaxes.js',
            index: '/livla/build/sutysisku/lojban/index.js',
            coi: '/livla/build/sutysisku/lojban/coi.js',
            // "index.html": '/livla/build/sutysisku/lojban/index.html',
            worker: '/livla/build/sutysisku/lojban/worker.js',
            './w2v/embeddings':
              '/livla/build/sutysisku/lojban/w2v/embeddings.js',
          },
          output: {
            filename: '[name].js',
            path: '/livla/build/sutysisku/lojban',
          },
          resolve: {
            // extensions: ['.dev.js', '.js', '.json', '.wasm'],
            fallback: {
              stream: require.resolve('stream-browserify'),
              buffer: require.resolve('buffer'),
              'process/browser': require.resolve('process/browser'),
              crypto: false,
              path: false,
              fs: false,
            },
          },
          mode: 'production',
          node: false,
          // module: {
          //   rules: [
          //     {
          //       test: /\.m?js$/,
          //       use: {
          //         loader: "babel-loader",
          //         options: {
          //           presets: ["@babel/preset-env"], // ensure compatibility with older browsers
          //           plugins: ["@babel/plugin-transform-object-assign"], // ensure compatibility with IE 11
          //         },
          //       },
          //     },
          //     {
          //       test: /\.js$/,
          //       loader: "webpack-remove-debug", // remove "debug" package
          //     },
          //   ],
          // },
          optimization: {
            minimize: true,
            minimizer: !process.env.COMPRESS ? [new TerserPlugin()] : [],
          },
          plugins: [
            // new webpack.DefinePlugin({
            //   'process.env.PERF_BUILD': false
            // }),
            new webpack.ProvidePlugin({
              Buffer: ['buffer', 'Buffer'],
            }),
            new webpack.ProvidePlugin({
              process: 'process/browser',
            }),
          ],
        },
        (error, stats: any) => {
          if (error || stats?.hasErrors()) {
            console.log('webpack has errors')
            fs.writeFileSync(
              '/livla/build/sutysisku/lojban/log.txt',
              (error || '').toString() + '\n' + stats.toString()
            )
          } else console.log('webpacked')

          resolve(null)
        }
      )
    })
  }
})()
