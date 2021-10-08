const decompress = require('brotli/decompress');

const db = new Dexie('sorcu1')

const supportedLangs = {
  sutysisku: { n: "la sutysisku", bangu: 'en' },
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

const sufficientLangs = (searching) => [
  searching ? searching.bangu : null,
  "sutysisku",
  "en-cll",
  "en-ll",
  "en",
  "muplis",
  "jbo"
].filter(Boolean)

let sesisku_bangu = null

function initDb() {
  try {
    db.version(1).stores({
      valsi: '++id, bangu, w, d, n, t, *s, g, *r, *cache',
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
    const response = await fetch(
      `/sutysisku/data/versio.json?sisku=${new Date().getTime()}`
    )
    let json = {}
    if (response.ok) {
      json = await response.json()

      for (const lang of sufficientLangs(searching)) {
        const count = forceAll ? 0 :
          await db.langs_ready.where('bangu').equals(lang).filter((rec) => rec.timestamp === json[lang]).count()
        if (count === 0) langsToUpdate.push(lang)
      }

      if (langsToUpdate.includes("en")) langsToUpdate = langsToUpdate.concat(sufficientLangs(searching))

      if (langsToUpdate.length > 0) {
        for (const lang of Object.keys(supportedLangs))
          if (langsToUpdate.includes(supportedLangs[lang].bangu)) langsToUpdate.push(lang)

        const langsUpdated = await cnino_sorcu(cb, langsToUpdate, searching, json)
        console.log(`Database checked. ${langsUpdated.length} languages have been updated`)
      }
    }

    postMessage({
      kind: 'loader',
      cmene: 'loaded'
    })
    jufra({})
  },
  ningau_lepasorcu: async (searching, cb) => {
    const lang = searching.bangu || 'en'
    let json = {}
    const response = await fetch(
      `/sutysisku/data/versio.json?sisku=${new Date().getTime()}`
    )
    if (response.ok) {
      json = await response.json()
    }
    const count = await db.langs_ready.where('bangu').equals(lang).filter((rec) => rec.timestamp === json[lang]).count()
    if (count > 0) return
    await cnino_sorcu(cb, [lang], searching, json)
    postMessage({
      kind: 'loader',
      cmene: 'loaded'
    })
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
  cache = [def.w, def.s, def.g, def.d, def.n, def.w.split("").reverse().join("")].concat(def.r || []).filter(Boolean).join(";").toLowerCase()
  const cache2 = cache.replace(
    /[ \u2000-\u206F\u2E00-\u2E7F\\!"#$%&()*+,\-.\/:<=>?@\[\]^`{|}~：？。，《》「」『』；_－／（）々仝ヽヾゝゞ〃〱〲〳〵〴〵「」『』（）〔〕［］｛｝｟｠〈〉《》【】〖〗〘〙〚〛ッー゛゜。、・゠＝〆〜…‥ヶ•◦﹅﹆※＊〽〓♪♫♬♩〇〒〶〠〄再⃝ⓍⓁⓎ]/g,
    ';'
  ).split(";")
  cache = cache.replace(
    /[ \u2000-\u206F\u2E00-\u2E7F\\!"#$%&()*+,\-.\/:<=>?@\[\]^`{|}~：？。，《》「」『』；_－（）]/g,
    ';'
  )
  cache = `${cache};${cache.replace(/h/g, "'")}`.split(";")
  cache = [...new Set(cache.concat(cache2))].filter(Boolean)

  return { bangu: tegerna, ...def, cache }
}

const blobChunkLength = 5
async function cnino_sorcu(cb, langsToUpdate, searching, json) {
  langsToUpdate = [...new Set(langsToUpdate)]
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
  let langs = langsToUpdate || sufficientLangs(searching)
  langs = langs
    .filter((lang) => lang == searching.bangu)
    .concat(langs.filter((lang) => lang != searching.bangu))
  console.log({ langsToUpdate });
  const fullResetUpgradeInstance = langs.includes("en")
  if (fullResetUpgradeInstance) {
    console.log('clearing', new Date());
    await db.delete()
    await db.open()
    console.log('clearing', new Date());
  }

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
    console.log(lang);
    
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
        let rows = json.data.data[0].rows
        const totalRows = json.data.tables[0].rowCount * blobChunkLength

        const chunkSize = 250
        const all_rows = rows.length
        rows = chunkArray(rows, chunkSize, lang)
        const time = new Date()

        await db.transaction('rw', [db.valsi, db.langs_ready], async () => {
          if (!fullResetUpgradeInstance && i === 0) {
            await db.valsi.where({ bangu: lang }).delete()
            await db.langs_ready.where({ bangu: lang }).delete()
          }

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
        console.log(lang, all_rows * 1000 / (new Date() - time), 'rows/sec');

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
      else {
        console.log('HTTP-Error: ' + response.status)
        break;
      }
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
  return langsToUpdate
}
