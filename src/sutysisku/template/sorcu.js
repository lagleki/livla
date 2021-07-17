// import "dexie-export-import";
const decompress = require('brotli/decompress');

const db = new Dexie('sorcu1')

const supportedLangs = {
  sutysisku: { n: "la sutysisku" },
  'en-cll': { n: 'The Book', "p": "cukta" },
  'en-ll': { n: 'Learn Lojban', "p": "cukta" },
  'en': { n: 'English', "p": "selsku_lanci_eng" },
  'muplis': { n: 'la muplis' },
  jbo: { n: 'lojbo', "p": "lanci_jbo" },
  ru: { n: 'русский', "p": "selsku_lanci_rus" },
  eo: { n: 'esperanto', "p": "lanci_epo" },
  es: { n: 'español', "p": "selsku_lanci_spa" },
  'fr-facile': { n: 'français', "p": "selsku_lanci_fra" },
  ja: { n: '日本語', "p": "selsku_lanci_jpn" },
  zh: { n: '中文', "p": "selsku_lanci_zho" },
}

let sesisku_bangu = null

function initDb() {
  try {
    db.version(1).stores({
      valsi: '++id, bangu, w, y, d, n, t, *s, g, *r, *cache',
      langs_ready: '++id, bangu, timestamp',
      tejufra: '++id, &bangu, jufra',
    })
  } catch (error) {
  }
}
initDb()

const fancu = {
  tejufra: async ({ bangu }, cb) => {
    const tef1 = !bangu ? {} : (await db.tejufra.where({ bangu }).toArray())[0] || {}
    const tef2 = (await db.tejufra.where({ bangu: 'en' }).toArray())[0] || {}
    cb({ ...tef1, jufra: { ...tef2.jufra, ...tef1.jufra } })
  },
  cnino_bangu: ({ bangu }) => {
    sesisku_bangu = bangu
  },
  ningau_lerosorcu: async (searching, cb) => {
    fancu.ningau_lesorcu(searching, cb, true)
  },
  ningau_lesorcu: async (searching, cb, forceAll) => {
    initDb()
    let langsToUpdate = []
    //добавляес versio.json читание
    const response = await fetch(
      `/sutysisku/data/versio.json?sisku=${new Date().getTime()}`
    )
    let json = {}
    if (response.ok) {
      json = await response.json()
    }
    for (let lang of Object.keys(supportedLangs)) {
      const count = forceAll ? 0 :
        await db.langs_ready.where('bangu').equals(lang).filter((rec) => rec.timestamp === json[lang]).count()
      if (count === 0) langsToUpdate.push(lang)
    }
    if (langsToUpdate.length > 0) {
      await cnino_sorcu(cb, langsToUpdate, searching, json)
      console.log(
        `Database checked. ${langsToUpdate.length} languages have been updated`
      )
    }
    postMessage({
      kind: 'loader',
      cmene: 'loaded'
    })
    jufra({})
  },
}

async function jufra({ bapli }) {
  if (bapli)
    try {
      await db.tejufra.clear()
    } catch (error) {
    }
  //tejufra
  const nitejufra = await db.tejufra.count()
  if (nitejufra === 0 || bapli) {
    let json = {}
    const response = await fetch(
      `/sutysisku/lojban/tejufra.json?sisku=${new Date().getTime()}`
    )
    if (response.ok) json = await response.json()
    else console.log('HTTP-Error: ' + response.status)

    const keys = Object.keys(json)
    const vuhilejufra = keys.map((key) => {
      return { bangu: key, jufra: json[key] }
    })
    try {
      await db.tejufra.bulkPut(vuhilejufra)
    } catch (error) { }
    console.log('locales updated')
  }
}
function chunkArray(myArray, chunk_size, lang) {
  let index = 0;
  const arrayLength = myArray.length;
  let tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    const myChunk = myArray.slice(index, index + chunk_size);
    tempArray.push(myChunk.map(def => addCache(def, lang)));
  }

  return tempArray;
}

function addCache(def, tegerna) {
  if (def.cache) {
    if (def.w) def.cache = [...new Set(def.cache.concat([[...def.w].reverse().join("")]))]
    return { bangu: tegerna, ...def }
  }
  let cache
  if (Array.isArray(def.g)) def.g = def.g.join(";")
  cache = [def.w, def.s, def.g, def.d, def.n, [...def.w].reverse().join("")].concat(def.r || []).filter(Boolean).join(";").toLowerCase().replace(
    /[ \u2000-\u206F\u2E00-\u2E7F\\!"#$%&()*+,\-.\/:<=>?@\[\]^`{|}~：？。，《》「」『』－（）]/g,
    ';'
  )
  cache = `${cache};${cache.replace(/h/g, "'")}`.split(";")
  cache = [...new Set(cache)].filter((i) => i !== '')

  return { bangu: tegerna, ...def, cache }
}

const blobChunkLength = 5
async function cnino_sorcu(cb, langsToUpdate, searching, json) {
  initDb()
  await jufra({ bapli: true })
  fancu.tejufra(searching, (results) => {
    postMessage({
      kind: 'fancu',
      cmene: 'tejufra',
      bangu: searching.bangu,
      results,
    })
  })

  //for each lang download dump
  let langs = langsToUpdate || Object.keys(supportedLangs)
  langs = langs
    .filter((lang) => lang == searching.bangu)
    .concat(langs.filter((lang) => lang != searching.bangu))
  while (langs.length > 0) {
    if (sesisku_bangu) {
      const savedLang_next = (
        await db.langs_ready.where('bangu').equals(sesisku_bangu).toArray()
      )[0]
      if (!savedLang_next) langs = [...new Set([sesisku_bangu].concat(langs))]
      sesisku_bangu = null
    }
    const lang = langs[0]
    langs = langs.slice(1)
    const savedLang = (
      await db.langs_ready.where('bangu').equals(lang).filter((rec) => rec.timestamp === json[lang]).toArray()
    )[0]
    let completedRows = 0;
    postMessage({
      kind: 'loader',
      cmene: 'loading',
      completedRows: 12 + (Math.random() - 0.5) * 3,
      totalRows: 100,
      bangu: supportedLangs[lang].n
    })
    for (let i = 0; i < blobChunkLength; i++) {
      cb(`downloading ${lang}-${i}.bin dump`)
      const response = await fetch(
        `/sutysisku/data/parsed-${lang}-${i}.bin?sisku=${new Date().getTime()}`
      )
      let json
      if (response.ok) {
        const blob = await response.arrayBuffer()

        const decompressedData = Buffer.from(decompress(Buffer.from(blob)));
        json = JSON.parse(decompressedData);
        // const idbDatabase = db.backendDB();
        let rows = json.data.data[0].rows
        const totalRows = json.data.tables[0].rowCount * blobChunkLength

        const chunkSize = 150
        const allrows = rows.length
        rows = chunkArray(rows, chunkSize, lang)
        const time = new Date()

        await db.transaction('rw', [db.valsi, db.langs_ready], async () => {
          if (i === 0)
            await Promise.all([
              db.valsi.where({ bangu: lang, y: undefined }).or("y").equals(lang).delete(),
              db.langs_ready.where({ bangu: lang }).delete()
            ])

          for (const toAdd of rows) {
            await db.valsi.bulkAdd(toAdd)
            completedRows += chunkSize
            postMessage({
              kind: 'loader',
              cmene: 'loading',
              completedRows,
              totalRows,
              bangu: supportedLangs[lang].n,
              banguRaw: lang
            })
          }
        })
        console.log(lang, allrows * 1000 / (new Date() - time), 'rows/sec');

        // const idb = db.backendDB();
        // for (const toAdd of rows) {
        //   // this method is fast but database gets ready for too long
        //   const transaction =
        //     idbDatabase.transaction(
        //     'valsi',
        //     'readwrite'
        //   )
        //   transaction.objectStore('valsi').add(toAdd);
        //   transaction.commit()
        // }
      }
      // await db.import(blob, {
      //   acceptMissingTables: true,
      //   acceptVersionDiff: true,
      //   acceptNameDiff: true,
      //   acceptChangedPrimaryKey: true,
      //   overwriteValues: true,
      //   // clearTablesBeforeImport: true,
      //   noTransaction: true,
      //   progressCallback: ({ totalRows, completedRows, done }) => {
      //     if (!done) {
      //       cb(
      //         `imported ${completedRows} keys out of ${totalRows} from ${lang}.blob.json`,
      //         new Date().toISOString()
      //       )
      //       postMessage({
      //         kind: 'loader',
      //         cmene: 'loading',
      //         completedRows,
      //         totalRows,
      //         bangu: supportedLangs[lang].n,
      //         banguRaw: bangu
      //       })
      //     } else {
      //       if (!savedLang) db.langs_ready.put({ bangu: lang })
      //       cb(`imported ${lang}.blob.json at ${new Date().toISOString()}`)
      //     }
      //   }
      // });
      else console.log('HTTP-Error: ' + response.status)
    }
    if (!savedLang) db.langs_ready.put({ bangu: lang, timestamp: json[lang] || '' })
    cb(`imported ${lang}-*.bin files at ${new Date().toISOString()}`)
    postMessage({
      kind: 'loader',
      cmene: 'loading',
      completedRows,
      totalRows: completedRows,
      bangu: supportedLangs[lang].n,
      banguRaw: lang
    })
  }
}
