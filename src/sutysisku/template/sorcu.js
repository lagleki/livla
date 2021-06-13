const db = new Dexie('sorcu1')

const supportedLangs = {
  'en': { n: 'English', "p": "selsku_lanci_eng" },
  'muplis': { n: 'la muplis' },
  'en-cll': { n: '<img src="../pixra/cukta.svg" class="cukta"/>The Book', "p": "cukta" },
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
      valsi: '++id, bangu, w, d, n, t, *s, g, *r, *cache',
      langs_ready: '++id, bangu',
      tejufra: '++id, &bangu, jufra',
    })
  } catch (error) {
  }
}
initDb()

const fancu = {
  tejufra: async ({ bangu }, cb) => {
    const tef1 = (await db.tejufra.where({ bangu: bangu.toString() }).toArray())[0] || {}
    const tef2 = (await db.tejufra.where({ bangu: 'en' }).toArray())[0] || {}
    cb({ ...tef1, jufra: { ...tef2.jufra, ...tef1.jufra } })
  },
  cnino_bangu: ({ bangu }) => {
    sesisku_bangu = bangu
  },
  ningau_lesorcu: async (searching, cb) => {
    initDb()
    let langsToUpdate = []
    for (let lang of Object.keys(supportedLangs)) {
      const count = await db.langs_ready.where('bangu').equals(lang).count()
      if (count === 0) langsToUpdate.push(lang)
    }
    if (langsToUpdate.length > 0) {
      await cnino_sorcu(cb, langsToUpdate, searching)
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
function chunkArray(myArray, chunk_size) {
  let index = 0;
  const arrayLength = myArray.length;
  let tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    const myChunk = myArray.slice(index, index + chunk_size);
    tempArray.push(myChunk);
  }

  return tempArray;
}

async function cnino_sorcu(cb, langsToUpdate, searching, erase) {
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
      await db.langs_ready.where('bangu').equals(lang).toArray()
    )[0]
    cb(`downloading ${lang}.blob.json dump`)
    postMessage({
      kind: 'loader',
      cmene: 'loading',
      completedRows: 12 + (Math.random() - 0.5) * 3,
      totalRows: 100,
      bangu: supportedLangs[lang].n
    })
    const response = await fetch(
      `/sutysisku/data/parsed-${lang}.blob.json?sisku=${new Date().getTime()}`
    )
    let json
    if (response.ok) {
      json = await response.json()
      await db.valsi.where({ bangu: lang }).delete()
      await db.langs_ready.where({ bangu: lang }).delete()
      // const idbDatabase = db.backendDB();
      let rows = json.data.data[0].rows
      const totalRows = json.data.tables[0].rowCount

      let completedRows = 0;
      const chunkSize = 250
      rows = chunkArray(rows, chunkSize)
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

      // for (toAdd of rows) {
      //   // this method is fast but database gets ready for too long
      //   // const transaction =
      //   //   idbDatabase.transaction(
      //   //   'valsi',
      //   //   'readwrite'
      //   // )
      //   // transaction.objectStore('valsi').add(toAdd);
      //   // transaction.commit()
      //   await db.valsi.add(toAdd)
      //   completedRows++;
      //   if (completedRows % 1000 === 0 || completedRows === totalRows) {
      //     postMessage({
      //       kind: 'loader',
      //       cmene: 'loading',
      //       completedRows,
      //       totalRows,
      //       bangu: supportedLangs[lang].n,
      //       banguRaw: lang
      //     })
      //   }
      // if (completedRows === totalRows) {
      if (!savedLang) db.langs_ready.put({ bangu: lang })
      cb(`imported ${lang}.blob.json at ${new Date().toISOString()}`)
      postMessage({
        kind: 'loader',
        cmene: 'loading',
        completedRows,
        totalRows,
        bangu: supportedLangs[lang].n,
        banguRaw: lang
      })
      // postMessage({
      //   kind: 'loader',
      //   cmene: 'loadedLang',
      //   completedRows,
      //   totalRows,
      //   bangu: supportedLangs[lang].n,
      //   banguRaw: lang
      // })
      //   } else if (completedRows % 1000 === 0) {
      //     console.log(
      //       `imported ${completedRows} keys out of ${totalRows} from ${lang}.blob.json`,
      //       new Date().toISOString()
      //     )
      //   }
      // }
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
    }
    else console.log('HTTP-Error: ' + response.status)
  }
}
