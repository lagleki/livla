
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
              json[selmaho].t = { bangu: "glico", type: "English term", k: 0 }
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

const settings_path = '/livla/build/sutysisku/data/tcini.json'
const settings = {
  vreji: [
    './',
    './index.html',
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js',
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff',
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff',
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff',
    'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js',
    './sql-wasm.wasm',
    '../assets/fonts/linux-libertine/LinLibertine_R.otf',
    '../assets/fonts/linux-libertine/LinLibertine_RI.otf',
    '../assets/fonts/linux-libertine/LinLibertine_RB.otf',
    '../assets/fonts/linux-libertine/LinLibertine_RBI.otf',
    '../assets/fonts/crisa-regular.otf',
    './bangu.js?sisku={now}',
    '../assets/scripts/aws-sdk.min.js',
    './index.js?detri={now}',
    './index.css?detri={now}',
    './worker.js?sisku={now}',
    '../assets/scripts/leader-line.min.js',
    '../pixra/144.png',
    '../pixra/32.png',
    '../pixra/cukta.svg',
    '../pixra/certu.svg',
    '../pixra/fanva.svg',
    '../pixra/cll.png',
    '../pixra/cmalu_snime.svg',
    '../pixra/snime.svg',
    '../pixra/menu.svg',
    '../pixra/x.svg',
    '../pixra/jbotcan.svg',
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
  ]
}
settings.vreji = settings.vreji.map(i => i.replace(/{now}/g, now.toString()))

fs.writeFileSync(settings_path, JSON.stringify(settings))

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
  return output
}

const reserved = ['fancu', 'sisku', 'parse', 'cmaxes', 'cnino_sorcu', 'EmptyState', 'runSearch'];

(async () => {
  // generate files
  for (let lang of langs) {
    fs.copySync(`/livla/src/sutysisku/template/sqljs`, `/livla/build/sutysisku/${lang}/sqljs`)
    fs.copySync(`/livla/src/sutysisku/template/asql`, `/livla/build/sutysisku/${lang}/asql`)
    fs.copyFileSync(`/livla/src/sutysisku/src/${lang}/bangu.js`, `/livla/build/sutysisku/${lang}/bangu.js`);
    fs.copyFileSync(`/livla/src/sutysisku/src/${lang}/config.json`, `/livla/build/sutysisku/${lang}/config.json`);
    // generate index.html
    const config = JSON.parse(fs.readFileSync(path.join('/livla/build/sutysisku/', lang, 'config.json'), { encoding: 'utf8', }))
    if (process.env.COMPRESS)
      config.production = false;
    else
      config.production = "production";
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
        file: 'worker.js',
        out: 'worker.js',
        // simpleCopy: true,
      },
      {
        file: 'index.js',
        out: 'index.js',
        uglify: true,
      },
    ]) {
      if (el.simpleCopy) {
        fs.copyFileSync(path.join(__dirname, './template', el.file), path.join('/livla/build/sutysisku/', lang, el.out));
        continue
      }      
      let output = processTemplate({
        config,
        fallback: config_fallback,
        now,
        file: fs.readFileSync(path.join(__dirname, './template', el.file), {
          encoding: 'utf8',
        }),
      })
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
    // copy coi.js
    try {
      fs.writeFileSync(
        path.join('/livla/build/sutysisku/', lang, 'coi.js'),
        fs
          .readFileSync(path.join(__dirname, 'template', 'coi.js'), {
            encoding: 'utf8',
          })
          .replace(/{now}/g, now.toString())
          .replace(/{lang}/g, lang)
      )
    } catch (error) { }
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
  if (!process.env.DEBUG) {
    const TerserPlugin = require("terser-webpack-plugin");

    await new Promise(resolve => {
      webpack({
        entry: {
          cmaxes: '/livla/build/sutysisku/lojban/cmaxes.js',
          index: '/livla/build/sutysisku/lojban/index.js',
          coi: '/livla/build/sutysisku/lojban/coi.js',
          worker: '/livla/build/sutysisku/lojban/worker.js',
        },
        output: {
          filename: '[name].js',
          path: '/livla/build/sutysisku/lojban',
        },
        resolve: {
          // extensions: ['.dev.js', '.js', '.json', '.wasm'],
          fallback: {
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer"),
            crypto: false,
            path: false,
            fs: false
          }
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
        ]
      }, (error, stats: any) => {
        if (error || stats?.hasErrors()) {
          console.log('webpack has errors');
          fs.writeFileSync('/livla/build/sutysisku/lojban/log.txt', (error || '').toString() + "\n" + stats.toString());
        } else
          console.log('webpacked');

        resolve(null)
      })
    })
  }
})()