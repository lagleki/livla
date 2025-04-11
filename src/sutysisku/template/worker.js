import initSqlJs from './sqljs/sql-wasm.js'
import { SQLiteFS } from './asql/index.js'
import IndexedDBBackend from './asql/indexeddb-backend.js'
import { parse } from './cmaxes.js'
import { loadModel } from './w2v/embeddings.js'
import jsonTeJufra from './tejufra.json'

const decompress = require('brotli/decompress')
self.production = `{{production}}`
self.sql_buffer_mode = `{{sql_buffer_mode}}`
self.sql_pragma_mode = `{{sql_pragma_mode}}`

self.postMessage({ kind: 'loading' })

class Queue {
  constructor() {
    this._items = []
  }
  enqueue(item) {
    this._items.push(item)
  }
  dequeue() {
    const withVlaste = this._items.filter((i) => i.name === 'vlaste').slice(-1)
    const notWithVlaste = this._items.filter((i) => i.name !== 'vlaste')
    this._items = withVlaste.concat(notWithVlaste)
    return this._items.shift()
  }
  get size() {
    return this._items.length
  }
}

class AutoQueue extends Queue {
  constructor() {
    super()
    this._pendingPromise = false
  }

  enqueue(action, name) {
    return new Promise((resolve, reject) => {
      super.enqueue({ name, action, resolve, reject })
      this.dequeue()
    })
  }

  async dequeue() {
    if (this._pendingPromise) return false

    const item = super.dequeue()

    if (!item) return false

    try {
      this._pendingPromise = true

      const payload = await item.action(this)

      this._pendingPromise = false
      item.resolve(payload)
    } catch (e) {
      this._pendingPromise = false
      item.reject(e)
    } finally {
      this.dequeue()
    }

    return true
  }
}

const aQueue = new AutoQueue()

self.onmessage = function (ev) {
  if (ev.data.kind == 'newSearch') {
    aQueue.enqueue(() => {
      sisku(ev.data, function (res) {
        self.postMessage({
          kind: 'searchResults',
          ...res,
          req: {
            bangu: ev.data.bangu,
            seskari: ev.data.seskari,
            versio: ev.data.versio,
            query: ev.data.query,
          },
        })
      })
    }, 'vlaste')
  } else if (ev.data.kind == 'parse') {
    aQueue.enqueue(() => {
      cmaxesParse({ ...ev.data }, function (res) {
        self.postMessage({
          kind: 'parse',
          results: res,
          req: ev.data,
        })
      })
    })
  } else if (ev.data.kind == 'fancu' && ev.data.cmene) {
    aQueue.enqueue(() => {
      fancu[ev.data.cmene](ev.data, function (results) {
        self.postMessage({
          kind: 'fancu',
          cmene: ev.data.cmene,
          datni: ev.data,
          results: results,
        })
      })
    })
  }
}

let db, wordEmbeddings
async function initSQLDB() {
  let SQL = await initSqlJs({ locateFile: (file) => file })
  let sqlFS = new SQLiteFS(SQL.FS, new IndexedDBBackend())
  SQL.register_for_idb(sqlFS)

  SQL.FS.mkdir('/sql')
  SQL.FS.mount(sqlFS, {}, '/sql')

  const path = '/sql/db.sqlite'
  if (
    typeof SharedArrayBuffer === 'undefined' ||
    self.sql_buffer_mode === 'memory'
  ) {
    let stream = SQL.FS.open(path, 'a+')
    await stream.node.contents.readIfFallback()
    SQL.FS.close(stream)
  }

  db = new SQL.Database('/sql/db.sqlite', { filename: true })
  db.run(`
	pragma page_size = 8192;
	${self.sql_pragma_mode === 'memory' ? 'pragma cache_size = 6000;' : ''}
    PRAGMA journal_mode=MEMORY;
	`)
  db.run(
    'CREATE TABLE IF NOT EXISTS valsi (d text,n text,w text,r text,bangu text,s text,t text,g text,cache text,b text,z text)'
  )
  runMigrations()
  db.create_function('regexp', (regex, str) => RegExp(regex).test(str))
  db.run('CREATE TABLE IF NOT EXISTS langs_ready (bangu TEXT, timestamp TEXT)')
  db.run('CREATE TABLE IF NOT EXISTS tejufra (bangu TEXT, jufra TEXT)')
  if (self.sql_buffer_mode === 'memory') {
    self.postMessage({
      kind: 'loader',
      cmene: 'booting',
    })

    runQuery(`select w from valsi where bangu='en'`)

    self.postMessage({
      kind: 'loader',
      cmene: 'loaded',
    })
  }

  //embeddings
  const response = await fetch('/sutysisku/data/embeddings-en.json.bin')
  const blob = await response.arrayBuffer()

  const decompressedData = Buffer.from(decompress(Buffer.from(blob)))
  wordEmbeddings = await loadModel(JSON.parse(decompressedData))
}

const log = (output, level) => console[level ?? 'log'](output)

function runMigrations() {
  try {
    db.run(`alter table valsi add column b text`)
  } catch (error) {}
  try {
    db.run(`alter table valsi add column z text`)
  } catch (error) {}
  try {
    db.run(`alter table valsi add column v text`)
  } catch (error) {}
}

function prettifySqlQuery(query){
  return query.replace(/[\n\t]/g,' ')
}
function runQuery(sqlQuery, params = {}) {
  const start = new Date()
  let stmt = db.prepare(sqlQuery)
  stmt.bind(params)
  let rows = []
  while (stmt.step()) rows.push(stmt.getAsObject())
  stmt.free()
  if (self.production !== 'production')
    log({ duration: new Date() - start, sqlQuery: prettifySqlQuery(sqlQuery), params, rows })

  return rows.map((row) => {
    if (self.production === 'production') {
      delete row.cache
      delete row.no
    }
    if (row.r) row.r = JSON.parse(row.r)
    if ((row.t || '').indexOf('{') === 0) row.t = JSON.parse(row.t)
    for (let i of ['s', 'b', 'z', 'cache', 'v']) {
      if ((row[i] || '').indexOf('[') === 0) row[i] = JSON.parse(row[i])
    }
    if (row.d) {
      try {
        const json = JSON.parse(row.d)
        if (Object.keys(json).length > 0) row.d = json
      } catch (error) {}
    }
    return row
  })
}

const supportedLangs = {
  en: { p: 'selsku_lanci_eng' },
  muplis: {},
  sutysisku: { bangu: 'en', priority: 11 },
  'en-pixra': {
    p: 'cukta',
    noRafsi: true,
    searchPriority: 10,
    priority: 10,
    simpleCache: true,
  },
  'en-ll': {
    p: 'cukta',
    noRafsi: true,
    searchPriority: 9,
    priority: 9,
  },
  'en-cll': { p: 'cukta', noRafsi: true, searchPriority: 8, priority: 8 },
  jbo: { p: 'lanci_jbo', searchPriority: 7 },
  ru: { p: 'selsku_lanci_rus' },
  eo: { p: 'lanci_epo' },
  es: { p: 'selsku_lanci_spa' },
  'fr-facile': { p: 'selsku_lanci_fra' },
  ja: { p: 'selsku_lanci_jpn' },
  zh: { p: 'selsku_lanci_zho' },
  loglan: { p: 'loglan' },
}

function arrSupportedLangs() {
  return Object.keys(supportedLangs).sort(
    (a, b) => supportedLangs[b].priority - supportedLangs[a].priority
  )
}

const sufficientLangs = (searching) =>
  [
    searching ? searching.bangu : null,
    'en',
    'en-cll',
    'en-ll',
    'en-pixra',
    'muplis',
    'jbo',
    'sutysisku',
  ].filter(Boolean)

let sesisku_bangu = null

const fancu = {
  sanji_letejufra: async ({ bangu }, cb) => {
    aQueue.enqueue(() => {
      let tef1 = {},
        tef2 = {}
      if (bangu && bangu !== 'en') {
        const result = runQuery(
          `SELECT jufra FROM tejufra where bangu=$bangu`,
          {
            $bangu: bangu,
          }
        )
        try {
          tef1 = JSON.parse(result[0].jufra)
        } catch (error) {}
      }
      const result = runQuery(`SELECT jufra FROM tejufra where bangu='en'`)
      try {
        tef2 = JSON.parse(result[0].jufra)
      } catch (error) {}

      cb({ ...tef2, ...tef1 })
    })
  },
  cnino_bangu: ({ bangu }, cb) => {
    sesisku_bangu = bangu
  },
  runQuery: ({ query, params = {} }, cb) => {
    const rows = runQuery(query, params)
    cb(rows)
  },
  getNeighbors: ({ query }, cb) => {
    getNeighbors(query).then((rows) => cb(rows))
  },
  ningau_lerosorcu: async (searching, cb) => {
    fancu.ningau_lesorcu(searching, cb, true)
  },
  ningau_lesorcu: async (searching, cb, forceAll) => {
    await jufra({ bapli: true })
    let langsToUpdate = []
    let response
    try {
      response = await fetch(
        `/sutysisku/data/versio.json?sisku=${new Date().getTime()}`
      )
    } catch (error) {
      log({
        event: "can't fetch new version, skipping database updates",
      },'error')
      return
    }

    let json = {}
    if (response?.ok) {
      json = await response.json()

      const stmt = db.prepare(
        `SELECT count(*) as klani FROM langs_ready where bangu=? and timestamp=?`
      )
      for (const lang of sufficientLangs(searching)) {
        let count = 0
        if (!forceAll) {
          stmt.bind([lang, json[lang]])
          stmt.step()
          count = stmt.getAsObject().klani
        }
        if (count === 0) langsToUpdate.push(lang)
      }
      stmt.free()

      if (langsToUpdate.length > 0) {
        for (const lang of arrSupportedLangs())
          if (langsToUpdate.includes(supportedLangs[lang].bangu))
            langsToUpdate.push(lang)

        const langsUpdated = await cnino_sorcu(
          cb,
          langsToUpdate,
          searching,
          json
        )
        log({
          event: 'Database updated',
          'No. of languages updated': langsUpdated.length,
        })
      }
    }

    self.postMessage({
      kind: 'loader',
      cmene: 'loaded',
    })
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
    const stmt = db.prepare(
      `SELECT count(*) as klani FROM langs_ready where bangu=? and timestamp=?`
    )
    stmt.bind([lang, json[lang]])
    stmt.step()
    const count = stmt.getAsObject().klani
    stmt.free()

    if (count > 0) return
    await cnino_sorcu(cb, [lang], searching, json)
    self.postMessage({
      kind: 'loader',
      cmene: 'loaded',
    })
  },
}

async function jufra({ bapli }) {
  aQueue.enqueue(async () => {
    if (bapli) db.run(`delete from tejufra`)
    //tejufra
    const stmt = db.prepare(`SELECT count(jufra) as klani FROM tejufra`)
    stmt.step()
    const nitejufra = stmt.getAsObject().klani
    stmt.free()
    if (nitejufra === 0 || bapli) {
      const stmt = db.prepare(`insert into tejufra (bangu, jufra) values(?,?)`)
      Object.keys(jsonTeJufra).forEach((key) => {
        stmt.run([key, JSON.stringify(jsonTeJufra[key])])
      })
      log({ event: 'Locales fully updated' })
    }
  })
}
function chunkArray(myArray, chunk_size, lang) {
  let index = 0
  const arrayLength = myArray.length
  let tempArray = []

  for (index = 0; index < arrayLength; index += chunk_size) {
    const myChunk = myArray.slice(index, index + chunk_size)
    tempArray.push(myChunk.map((def) => addCache(def, lang)))
  }

  return tempArray
}

function addCache(def, tegerna) {
  const cacheSeparator = RegExp(
    /[ \u2000-\u206F\u2E00-\u2E7F\\!"#$%&()*+,\-.\/:<=>?@\[\]^`{|}~：？。，《》「」『』；_－／（）々仝ヽヾゝゞ〃〱〲〳〵〴〵「」『』（）〔〕［］｛｝｟｠〈〉《》【】〖〗〘〙〚〛ッー゛゜。、・゠＝〆〜…‥ヶ•◦﹅﹆※＊〽〓♪♫♬♩〇〒〶〠〄再⃝ⓍⓁⓎ]/,
    'g'
  )
  if (def.g) {
    if (!Array.isArray(def.g)) def.g = [def.g]
    def.g = def.g
      .map((i) => i.replace(cacheSeparator, ' ').trim().replace(/ {2,}/g, ' '))
      .join(';')
  }

  if (supportedLangs[tegerna].simpleCache)
    return { bangu: tegerna, ...def, cache: [def.w] }
  if (def.cache) {
    if (def.w) def.cache = [...new Set(def.cache)]
    return { bangu: tegerna, ...def }
  }
  let cache

  cache = [def.w, def.s, def.g, def.d, def.n]
    .concat(def.r || [])
    .filter(Boolean)
    .map((i) => i.replace(/\$[a-z]+_\{.*?\}\$/g, ''))
    .join(';')
    .toLowerCase()
  const cache2 = cache.replace(cacheSeparator, ';').split(';')
  cache = cache.replace(
    /[ \u2000-\u206F\u2E00-\u2E7F\\!"#$%&()*+,\-.\/:<=>?@\[\]^`{|}~：？。，《》「」『』；_－（）]/g,
    ';'
  )
  cache = `${cache};${cache.replace(/h/g, "'")}`.split(';')
  cache = [...new Set(cache.concat(cache2))].filter(Boolean)

  return { bangu: tegerna, ...def, cache }
}

const blobChunkLength = 5
async function cnino_sorcu(cb, langsToUpdate, searching, json) {
  langsToUpdate = [...new Set(langsToUpdate)]
  await jufra({ bapli: true })
  fancu.sanji_letejufra(searching, (results) => {
    self.postMessage({
      kind: 'fancu',
      cmene: 'sanji_letejufra',
      bangu: searching.bangu,
      results,
    })
  })

  //for each lang download dump
  let langs = langsToUpdate || sufficientLangs(searching)
  langs = langs
    .filter((lang) => lang == searching.bangu)
    .concat(langs.filter((lang) => lang != searching.bangu))
  log({
    event: 'Preparing imports into the database',
    languages: langsToUpdate,
  })

  while (langs.length > 0) {
    if (sesisku_bangu) {
      const stmt = db.prepare(
        `SELECT count(*) as klani FROM langs_ready where bangu=?`
      )
      stmt.bind([sesisku_bangu])
      stmt.step()
      const savedLang_next = stmt.getAsObject().klani
      stmt.free()
      if (!savedLang_next) langs = [...new Set([sesisku_bangu].concat(langs))]
      sesisku_bangu = null
    }
    const lang = langs[0]
    langs = langs.slice(1)

    let completedRows = 0
    log({ event: 'Updating the language', language: lang })

    self.postMessage({
      kind: 'loader',
      cmene: 'loading',
      completedRows: 12 + (Math.random() - 0.5) * 3,
      totalRows: 100,
      bangu: lang,
    })
    for (let i = 0; i < blobChunkLength; i++) {
      cb(`downloading ${lang}-${i}.bin dump`)
      const url = `/sutysisku/data/parsed-${lang}-${i}.bin?sisku=${new Date().getTime()}`
      const response = await fetch(url)
      let json
      if (response.ok) {
        const blob = await response.arrayBuffer()

        const decompressedData = Buffer.from(decompress(Buffer.from(blob)))
        json = JSON.parse(decompressedData)

        let rows = json.data.data[0].rows
        const totalRows = json.data.tables[0].rowCount * blobChunkLength

        const chunkSize = 1000
        const all_rows = rows.length

        rows = chunkArray(rows, chunkSize, lang)
        const time = new Date()
        if (i === 0) {
          db.run(`delete from valsi where bangu=$bangu`, { $bangu: lang })
          db.run(`delete from langs_ready where bangu=$bangu`, { $bangu: lang })
        }
        for (const toAdd of rows) {
          db.exec('BEGIN TRANSACTION')
          let stmt = db.prepare(
            `INSERT INTO valsi (d,n,w,r,bangu,s,t,g,cache,b,z,v) VALUES (?${',?'.repeat(
              12 - 1
            )})`
          )
          for (let rec of toAdd) {
            const { d, n, w, r, bangu, s, t, g, cache, b, z, v } = rec
            stmt.run(
              [d, n, w, r, bangu, s, t, g, cache, b, z, v].map((i) =>
                typeof i == 'object' ? JSON.stringify(i || '') : i || ''
              )
            )
          }
          stmt.free()
          db.exec('COMMIT')
          completedRows += chunkSize
          self.postMessage({
            kind: 'loader',
            cmene: 'loading',
            completedRows,
            totalRows,
            bangu: lang,
            banguRaw: lang,
          })
        }

        log({
          event: 'Records inserted',
          language: lang,
          'speed, records/sec': (
            (all_rows * 1000) /
            (new Date() - time)
          ).toFixed(2),
        })
      } else {
        log({ event: 'HTTP error', status: response.status, url },'error')
        break
      }
    }
    const stmt = db.prepare(
      `SELECT count(*) as klani FROM langs_ready where bangu=? and timestamp=?`
    )
    stmt.bind([lang, json[lang]])
    stmt.step()
    const savedLang = stmt.getAsObject().klani
    stmt.free()

    if (!savedLang) {
      const stmt = db.prepare(
        `insert into langs_ready (bangu,timestamp) values(?,?)`
      )
      stmt.run([lang, json[lang]])
      stmt.free()
    }
    cb(`imported ${lang}-*.bin files at ${new Date().toISOString()}`)
    self.postMessage({
      kind: 'loader',
      cmene: 'loading',
      completedRows,
      totalRows: completedRows,
      bangu: lang,
      banguRaw: lang,
    })
  }
  db.run(`pragma optimize;`)
  return langsToUpdate
}

//sisku

let leijufra = {
  xuzganalojudri: '',
  bangudecomp: '',
}

function getCachedDefinitions({ query, bangu, mapti_vreji }) {
  let result = []
  if (mapti_vreji)
    result = mapti_vreji.filter(
      (i) =>
        i.bangu === bangu &&
        [i.w, i.d].map((_) => _.toLowerCase()).includes(query.toLowerCase())
    )
  if (result.length === 0)
    result = runQuery(
      `SELECT * FROM valsi where bangu=$bangu and (w=$query COLLATE NOCASE or d=$query COLLATE NOCASE)`,
      { $bangu: bangu, $query: query.toLowerCase() }
    )
  return result
}

const getMergedArray = (array) =>
  `(${array.map((i) => `'${i.replace(/'/g, "''")}'`).join(',')})`

async function getNeighbors(query) {
  let results = await wordEmbeddings.getNearestNeighbors(query, 100)
  results = [
    ...new Set(
      results
        .filter(
          (i) =>
            RegExp(/^[a-z- ]+$/).test(i.word) &&
            i.distance !== 1 &&
            i.distance >= 0.4
        )
        .concat([{ distance: 1, word: query }])
    ),
  ]
  return { words: results.map((i) => i.word), results }
}

async function cnanosisku({
  query_apos,
  query,
  bangu,
  versio,
  mapti_vreji,
  multi,
  seskari,
  secupra_vreji,
  queryDecomposition,
}) {
  const splitQuery_apos = query_apos.split(' ').filter((_) => _ !== '')
  const arrayQuery = [
    ...new Set([...queryDecomposition, query_apos, ...splitQuery_apos]),
  ]

  let embeddings = {}
  const embeddingsMode = bangu === 'en' && seskari === 'cnano' // semantic search
  if (embeddingsMode) {
    embeddings = await getNeighbors(query)
  }

  let rows
  if (embeddingsMode) {
    const merged = getMergedArray(embeddings.words)
    rows = runQuery(
      `
		select distinct
			d,n,w,r,bangu,s,t,g,b,z,v
		from valsi,json_each(valsi.cache)
		where 
		${
      queryDecomposition.length > 1
        ? `(json_each.value in ${getMergedArray(arrayQuery)} and bangu=$bangu)
		or `
        : ``
    }
		(
				(w like $query or json_each.value like $query)
			and (bangu = $bangu or bangu like $likebangu or bangu='en-pixra')
		)
		union
		select distinct
			d,n,w,r,bangu,s,t,g,b,z,v
		from valsi,json_each(replace(iif(z<>'',z,'[""]'), ']','') || ',"' || replace(g, ';', '","') || '"]')
		where
				(json_each.value in ${merged})
			and (bangu = $bangu)
			and json_valid('["' || replace(valsi.g, ';', '","') || '"]')=1
		`,
      {
        $query: '%' + query_apos + '%',
        $bangu: bangu,
        $likebangu: `${bangu}-%`,
      }
    )
  } else if (versio === 'selmaho') {
    if (bangu === 'muplis') {
      rows = runQuery(`SELECT * FROM valsi where s = $query and bangu=$bangu`, {
        $query: query,
        $bangu: bangu,
      })
    } else {
      rows = runQuery(
        `SELECT * FROM valsi where s like $query and bangu=$bangu`,
        {
          $query: query + '%',
          $bangu: bangu,
        }
      ).filter(
        (valsi) =>
          typeof valsi.s === 'string' &&
          new RegExp(`^${query}[0-9]*[a-z]*$`).test(valsi.s)
      )
    }
  } else if (seskari === 'fanva') {
    rows = runQuery(`SELECT * FROM valsi where w= $valsi`, {
      $valsi: query_apos,
    }).sort((a, b) => {
      if (a.bangu === bangu) return -1
      return (
        supportedLangs?.[b.bangu]?.searchPriority -
        supportedLangs?.[a.bangu]?.searchPriority
      )
    })
  } else if (queryDecomposition.length > 1) {
    const sqlQuery = `select d,n,w,r,bangu,s,t,g,count(ex) as no,b from (select distinct valsi.d as d,valsi.n as n,valsi.w as w,valsi.r as r,valsi.bangu as bangu,valsi.s as s,valsi.t as t,valsi.g as g,json_each.value as ex,valsi.b as b from valsi,json_each(valsi.cache) where 
		(json_each.value in ${getMergedArray(arrayQuery)} and bangu=$bangu)
		or
		((w like $query or json_each.value like $query) and (bangu = $bangu or bangu like $likebangu or bangu='en-pixra'))
		) as k
		group by d,n,w,r,bangu,s,t,g,b
		${
      bangu === 'muplis'
        ? `having 2 * no >= ${arrayQuery.length}`
        : `having no>=${splitQuery_apos.length}`
    }
		order by no desc
		;`

    rows = runQuery(sqlQuery, {
      $query: '%' + query_apos + '%',
      $bangu: bangu,
      $likebangu: `${bangu}-%`,
    })
  } else if (self.production !== 'production') {
    //normal search:debug
    rows = runQuery(
      `select 
			distinct d,n,w,r,bangu,s,t,g,cache,b,v
			from valsi,json_each(valsi.cache)
			where 
				(w like $query or json_each.value like $query)
			and (
				   bangu = $bangu 
				or bangu like $likebangu
				or bangu='en-pixra'
			)`,
      {
        $query: '%' + query_apos + '%',
        $bangu: bangu,
        $likebangu: `${bangu}-%`,
      }
    )
  } else {
    //normal search:prod
    rows = runQuery(
      `select
			distinct d,n,w,r,bangu,s,t,g,b,v
			from valsi,json_each(valsi.cache)
			where 
				(w like $query or json_each.value like $query)
			and (
					bangu = $bangu
				or bangu like $likebangu
				or bangu='en-pixra')`,
      {
        $query: '%' + query_apos + '%',
        $bangu: bangu,
        $likebangu: `${bangu}-%`,
      }
    )
  }

  rows = rows
    .map((el) => {
      const { cache, ...rest } = el
      return rest
    })
    .sort(
      (a, b) =>
        supportedLangs?.[b.bangu]?.searchPriority -
        supportedLangs?.[a.bangu]?.searchPriority
    )
  mapti_vreji = mapti_vreji.slice().concat(rows)
  if (seskari === 'fanva' || bangu === 'muplis') {
    return { result: mapti_vreji, decomposed: false }
  }
  const { result, decomposed } = await sortthem({
    query_apos,
    query,
    bangu,
    mapti_vreji,
    seskari,
    secupra_vreji,
    embeddings: embeddings.results,
  })

  const allMatches = result
  if (multi)
    return { result: allMatches[0], decomposed, embeddings: embeddings.words }
  if (allMatches[0].length === 0) {
    allMatches[0] = (await jmina_ro_cmima_be_lehivalsi({ query, bangu })) || []
  }
  if (allMatches[0].length === 0 || allMatches[0][0].w !== query_apos) {
    let vlazahumei = /^[A-Zh]+[0-9\*]+$/.test(query)
      ? []
      : julne_setca_lotcila(
          await shortget({
            valsi: query_apos,
            secupra: [],
            bangu,
            cachedDefinitions: getCachedDefinitions({
              query: query_apos,
              bangu,
              mapti_vreji,
            }),
          })
        )
    if (bangu === 'muplis' || !leijufra.xuzganalojudri) {
      vlazahumei = vlazahumei.filter(({ d }) => !d || !d.nasezvafahi)
    }
    if (vlazahumei.length <= 1)
      return {
        result: vlazahumei.concat(allMatches[0]),
        decomposed,
        embeddings: embeddings.words,
      }
    return {
      result: allMatches[1].concat(
        [
          {
            t: leijufra.bangudecomp,
            ot: "vlaza'umei",
            w: query,
            rfs: vlazahumei,
          },
        ],
        allMatches[2]
      ),
      decomposed,
      embeddings: embeddings.words,
    }
  }
  if (allMatches[0][0].w === query_apos) {
    //full match
    const [type, parsedWord] = maklesi_levalsi(allMatches[0][0].w)
    if (type.indexOf("fu'ivla") >= 0 && parsedWord.indexOf('-') >= 0) {
      const rafsi = parsedWord.split('-')[0]
      const selrafsi = runQuery(
        `SELECT * FROM valsi, json_each(valsi.r) where json_valid(valsi.r) and json_each.value=$rafsi and valsi.bangu=$bangu limit 1`,
        { $rafsi: rafsi, $bangu: bangu }
      )
      allMatches[0][0].rfs = selrafsi
    }
  }

  return { result: allMatches[0], decomposed, embeddings: embeddings.words }
}

function sortMultiDimensional(a, b) {
  if (!a.d) a.d = ''
  if (!b.d) b.d = ''
  return a.d.length < b.d.length ? -1 : a.d.length > b.d.length ? 1 : 0
}

function cmaxesParse({ tegerna, queryLanguage }, callback) {
  if (queryLanguage === 'loglan')
    return callback(tegerna.split(' ').map((i) => ['', i]))
  try {
    let parsed = parse(tegerna.toLowerCase())
    parsed = parsed.filter((el) => el[0] !== 'drata')
    return callback(parsed)
  } catch (error) {}
  return callback([])
}

function reconcatenate(selsku) {
  try {
    let parsed = parse(selsku.toLowerCase())
    parsed = parsed.filter((el) => el[0] !== 'drata')
    const reconcatenated = parsed.map((el) => el[1]).join(' ')
    return { parsed, reconcatenated }
  } catch (error) {}
  return { parsed: [], reconcatenated: selsku }
}

function maklesi_levalsi(selsku) {
  let reconcatenated = selsku
  if (!leijufra.xuzganalojudri || selsku.search(/[^aeiouyAEIOY]'/) > -1)
    return ['', selsku]
  try {
    const { parsed: parsedString, reconcatenated } = reconcatenate(selsku)
    const oddEls = parsedString.filter((_, index) => index % 2 == 1)
    if (oddEls.length > 0 && oddEls.every((el) => el[0] == 'zei'))
      return ['zei-lujvo', reconcatenated]
    if (parsedString.length == 1) return parsedString[0]
    if (
      parsedString.length > 0 &&
      parsedString.every((el) => el[0] === 'cmavo')
    )
      return ['cmavo-compound', reconcatenated]
    if (parsedString.length > 1) return ['phrase', reconcatenated]
  } catch (e) {}
  return ['', reconcatenated]
}

function maveljvo(tegerna) {
  if (!leijufra.xuzganalojudri) return
  if (tegerna.includes(' zei '))
    return tegerna
      .split(' ')
      .map((veljvocmi) => maveljvo(veljvocmi))
      .flat()
      .filter(Boolean)
  let text
  try {
    text = parse(tegerna).toString().split(',')
  } catch (err) {
    return
  }
  if (!['lujvo'].includes(text[0]) || text.length !== 2) return
  return text[1].split('-').filter(Boolean)
}

function setca_lotcila(seskicu_be_le_valsi) {
  if ([undefined, ''].includes(seskicu_be_le_valsi.t))
    seskicu_be_le_valsi.t =
      seskicu_be_le_valsi.bangu !== 'muplis' && leijufra.xuzganalojudri
        ? maklesi_levalsi(seskicu_be_le_valsi.w)[0]
        : ''
  return seskicu_be_le_valsi
}

function decompose(selsku) {
  return leijufra.xuzganalojudri
    ? reconcatenate(selsku)
        .reconcatenated.replace(/ zei /g, '_zei_')
        .split(' ')
        .map((b) => b.replace(/_zei_/g, ' zei ').replace(/-/g, ''))
    : selsku.split(' ')
}

function julne_setca_lotcila(porsi_fi_le_seskicu_be_le_valsi) {
  return porsi_fi_le_seskicu_be_le_valsi.reduce(
    (cnino_porsi, seskicu_be_le_valsi) => {
      if (seskicu_be_le_valsi)
        cnino_porsi.push(setca_lotcila(seskicu_be_le_valsi))
      return cnino_porsi
    },
    []
  )
}

async function sohivalsi({ decomposed, bangu, mapti_vreji }) {
  let secupra = []
  for (let valsi_index = 0; valsi_index < decomposed.length; valsi_index++) {
    for (
      let valsi2_index = decomposed.length - 1;
      valsi2_index >= valsi_index;
      valsi2_index--
    ) {
      const o = decomposed.slice(valsi_index, valsi2_index + 1).join(' ')
      const cachedDefinitions = getCachedDefinitions({
        bangu,
        mapti_vreji,
        query: o,
      })
      secupra = await shortget({ valsi: o, secupra, bangu, cachedDefinitions })
    }
  }
  return secupra
}

async function jmina_ro_cmima_be_lehivalsi({ query, def, bangu }) {
  let porsi_fi_le_seskicu_be_le_veljvocmi = []
  if (def?.v?.length > 1) {
    for (const veljvocmi of def.v) {
      const se_skicu_le_veljvocmi = runQuery(
        `SELECT * FROM valsi where bangu=$bangu and w=$veljvocmi limit 1`,
        { $bangu: bangu, $veljvocmi: veljvocmi }
      )[0]

      if (se_skicu_le_veljvocmi) {
        porsi_fi_le_seskicu_be_le_veljvocmi.push(se_skicu_le_veljvocmi)
      }
    }
  } else {
    let porsi_le_veljvocmi = maveljvo(query)
    if (!porsi_le_veljvocmi) return def ? [def] : []
    porsi_fi_le_seskicu_be_le_veljvocmi = porsi_le_veljvocmi
      .map((veljvocmi) => {
        const se_skicu_le_veljvocmi = runQuery(
          `SELECT * FROM valsi, json_each(valsi.r) where json_valid(valsi.r) and json_each.value=? and valsi.bangu=? limit 1`,
          [veljvocmi, bangu]
        )[0]
        return se_skicu_le_veljvocmi
      })
      .filter(Boolean)
  }
  porsi_fi_le_seskicu_be_le_veljvocmi = julne_setca_lotcila(
    porsi_fi_le_seskicu_be_le_veljvocmi
  ) // .filter(function(i){return !i.d.nasezvafahi});
  return [
    {
      t:
        porsi_fi_le_seskicu_be_le_veljvocmi.length > 0
          ? 'lujvo'
          : maklesi_levalsi(query)[0],
      w: query,
      d: { nasezvafahi: true },
      rfs: porsi_fi_le_seskicu_be_le_veljvocmi,
    },
  ]
}

async function shortget({
  valsi,
  secupra,
  nasisku_filohipagbu,
  bangu,
  cachedDefinitions,
}) {
  const definitions = cachedDefinitions
  if (definitions.length > 0) return secupra.concat(definitions)
  if (!nasisku_filohipagbu) {
    if (valsi.replace(/ zei /g, '-zei-').split(' ').length === 1) {
      const valsi_giheklesi = maklesi_levalsi(valsi)
      if (
        valsi_giheklesi[0] === 'cmavo-compound' ||
        valsi_giheklesi[0] === 'zei-lujvo'
      ) {
        const words = valsi_giheklesi[1].split(' ')
        for (const word of words) {
          secupra = await shortget({
            valsi: word,
            secupra,
            nasisku_filohipagbu: true,
            bangu,
            cachedDefinitions,
          })
        }
      } else if (valsi_giheklesi[0] !== '') {
        for (const word of valsi_giheklesi.filter(
          (_, index) => index % 2 !== 0
        )) {
          secupra = await shortget({
            valsi: word.replace(/-/g, ''),
            secupra,
            nasisku_filohipagbu: true,
            bangu,
            cachedDefinitions,
          })
        }
      }
    } else {
      //several words
      let vuhilevelujvo = maveljvo(valsi)
      if ((vuhilevelujvo || [])[0] === '@') {
        vuhilevelujvo = vuhilevelujvo.slice(1)

        for (let j = 0; j < vuhilevelujvo.length; j++) {
          const valsi = vuhilevelujvo[j]
          const le_se_skicu_valsi = runQuery(
            `SELECT * FROM valsi where w =$valsi and bangu=$bangu limit 1`,
            { $valsi: valsi, $bangu: bangu }
          )[0]

          if (le_se_skicu_valsi) {
            vuhilevelujvo[j] = le_se_skicu_valsi
            vuhilevelujvo[j]['w'] = valsi
          }
        }
        secupra.concat(vuhilevelujvo)
      } else if (vuhilevelujvo) {
        for (const r of vuhilevelujvo) {
          const foundRafsi = runQuery(
            `SELECT value FROM valsi, json_each(valsi.r) where json_valid(valsi.r) and json_each.value=$r and valsi.bangu=bangu limit 1`,
            { $r: r, $bangu: bangu }
          )[0]
          if (foundRafsi) secupra.push(foundRafsi)
        }
      }
    }
  } else {
    let ff = await jmina_ro_cmima_be_lehivalsi({ query: valsi, bangu })
    ff = ff[0] && ff[0].rfs ? ff[0].rfs : undefined
    secupra = secupra.concat([
      { t: '', d: { nasezvafahi: true }, w: valsi, rfs: ff },
    ])
  }
  return secupra
}

function isCoreWord(def) {
  return ['gismu', 'cmavo'].includes(def.t)
}

function defaultPriorityGroups() {
  return {
    wordFullMatch: [],
    wordFullMatchAdditional: [],
    zMatch: [],
    zSemMatch: [],
    glossMatch: [],
    glossSemMatch: [],
    rafsiMatch: [],
    wordSemiMatch: [],
    selmahoFullMatch: [],
    selmahoSemiMatch: [],
    oneOfSelmahosFullMatch: [],
    oneOfSelmahosSemiMatch: [],
    querySemiMatch: [],
    defGoodMatch: [],
    defInsideMatch: [],
    notesInsideMatch: [],
    otherMatch: [],
  }
}

function includes(arrOuter, inner, fn) {
  arrOuter = [arrOuter].flat()
  if (fn) return arrOuter.some((elemOuter) => fn(elemOuter, inner))
  inner = [inner].flat()
  return arrOuter.some((i) => inner.includes(i))
}

function semFilter(arrEmbeddingsObject, arrGloss) {
  return arrEmbeddingsObject.filter((i) => arrGloss.includes(i.word))
}

const nonLetter =
  '[ \u2000-\u206F\u2E00-\u2E7F\\!"#$%&()*+,\\-.\\/:<=>?@\\[\\]^`{|}~：？。，《》「」『』；_－／（）々仝ヽヾゝゞ〃〱〲〳〵〴〵「」『』（）〔〕［］｛｝｟｠〈〉《》【】〖〗〘〙〚〛。、・゠＝〜…‥•◦﹅﹆※＊〽〓♪♫♬♩〇〒〶〠〄再⃝ⓍⓁⓎ]'

async function sortthem({
  mapti_vreji,
  query,
  bangu,
  query_apos,
  seskari,
  secupra_vreji,
  embeddings,
}) {
  let decomposed = false
  let searchPriorityGroups = defaultPriorityGroups()
  const arrCombinedQuery = [...new Set([query, query_apos])]
  for (let el of mapti_vreji) {
    const def = setca_lotcila(el) // TODO: optimize for phrases
    if (!def) continue
    const semMatch = !def.z || !embeddings ? [] : semFilter(embeddings, def.z)
    const semMatchGlosses =
      !def.g || !embeddings ? [] : semFilter(embeddings, def.g.split(';'))
    if (arrCombinedQuery.flat().includes(def.w)) {
      if (!supportedLangs[def.bangu].noRafsi) {
        def.rfs = JSON.parse(
          JSON.stringify(
            julne_setca_lotcila(
              await sohivalsi({
                decomposed: decompose(def.w),
                bangu,
                mapti_vreji,
              })
            )
          )
        ).filter(({ w }) => w !== def.w)
        decomposed = true
        if (def.rfs.length === 0) {
          def.rfs = (
            await jmina_ro_cmima_be_lehivalsi({
              query: def.w,
              def: def,
              bangu,
            })
          )[0].rfs
        }
      }
      if (def.bangu == bangu) searchPriorityGroups.wordFullMatch.push(def)
      else searchPriorityGroups.wordFullMatchAdditional.push(def)
    } else if (semMatch.length > 0) {
      const match = {
        ...def,
        // sem: semMatch.map((i) => i.word),
        semMaxDistance: semMatch.sort(
          (left, right) => right.distance - left.distance
        )[0].distance,
      }
      searchPriorityGroups[
        match.semMaxDistance === 1 ? 'zMatch' : 'zSemMatch'
      ].push(match)
    } else if (semMatchGlosses.length > 0) {
      const match = {
        ...def,
        // sem: semMatchGlosses.map((i) => i.word),
        semMaxDistance: semMatchGlosses.sort(
          (left, right) => right.distance - left.distance
        )[0].distance,
      }
      searchPriorityGroups[
        match.semMaxDistance === 1 ? 'glossMatch' : 'glossSemMatch'
      ].push(match)
    } else if (def.g && includes(def.g.split(';'), query)) {
      searchPriorityGroups.glossMatch.push(def)
    } else if (def.r && includes(def.r, query)) {
      searchPriorityGroups.rafsiMatch.push(def)
    } else if (
      includes(
        arrCombinedQuery,
        def.w,
        (q_word, def_w) => def_w.search(`(^| )(${q_word})( |$)`) >= 0
      )
    ) {
      searchPriorityGroups.wordSemiMatch.push(def)
    } else if (typeof def.s === 'string' && includes(def.s, query)) {
      searchPriorityGroups.selmahoFullMatch.push(def)
    } else if (
      typeof def.s === 'string' &&
      includes(query, def.s, (q_el, def_s) => def_s.indexOf(q_el) === 0)
    ) {
      searchPriorityGroups.selmahoSemiMatch.push(def)
    } else if (Array.isArray(def.s) && includes(def.s, query)) {
      searchPriorityGroups.oneOfSelmahosFullMatch.push(def)
    } else if (
      Array.isArray(def.s) &&
      includes(query, def.s, (q_el, defs_s) =>
        defs_s.some((i) => i.indexOf(q_el) === 0)
      )
    ) {
      searchPriorityGroups.oneOfSelmahosSemiMatch.push(def)
    } else if (
      includes(arrCombinedQuery, [def.g, def.w].flat(), (q_el, defs) =>
        defs.some(
          (i) => i.search(RegExp(`(${nonLetter}(${q_el})${nonLetter})`)) >= 0
        )
      )
    ) {
      searchPriorityGroups.querySemiMatch.push(def)
      //TODO: add semantic search glosses
    } else if (
      typeof def.d === 'string' &&
      includes(
        query,
        def.d,
        (q_el, def_d) =>
          def_d.toLowerCase().search(RegExp(`^${q_el}${nonLetter}`)) >= 0
      )
    ) {
      searchPriorityGroups.defGoodMatch.push(def)
    } else if (
      typeof def.d === 'string' &&
      includes(
        query,
        def.d,
        (q_el, def_d) =>
          def_d
            .toLowerCase()
            .search(RegExp(`${nonLetter}${q_el}${nonLetter}`)) >= 0
      )
    ) {
      searchPriorityGroups.defInsideMatch.push(def)
    } else if (
      typeof def.n !== 'undefined' &&
      includes(
        query,
        def.n,
        (q_el, def_n) =>
          def_n
            .toLowerCase()
            .search(RegExp(`${nonLetter}${q_el}${nonLetter}`)) >= 0
      )
    ) {
      searchPriorityGroups.notesInsideMatch.push(def)
    } else {
      searchPriorityGroups.otherMatch.push(def)
    }
  }
  /*
	  now sort by semantic props distance
	  */
  searchPriorityGroups.zSemMatch.sort(
    (left, right) => right.semMaxDistance - left.semMaxDistance
  )
  searchPriorityGroups.glossSemMatch.sort(
    (left, right) => right.semMaxDistance - left.semMaxDistance
  )

  let firstMatches
  let secondMatches
  if (seskari === 'catni') {
    const searchPriorityGroups_unofficial_words = defaultPriorityGroups()
    const searchPriorityGroups_official_words = defaultPriorityGroups()
    Object.keys(searchPriorityGroups).forEach((group) => {
      searchPriorityGroups[group].forEach((def) => {
        if (isCoreWord(def))
          searchPriorityGroups_official_words[group].push(def)
        else searchPriorityGroups_unofficial_words[group].push(def)
      })
    })
    firstMatches = secupra_vreji.concat(
      searchPriorityGroups.wordFullMatch,
      searchPriorityGroups.wordFullMatchAdditional
    )
    secondMatches = [].concat(
      searchPriorityGroups_official_words.zMatch,
      searchPriorityGroups_official_words.glossMatch,
      searchPriorityGroups_official_words.selmahoFullMatch,
      searchPriorityGroups.oneOfSelmahosFullMatch,
      searchPriorityGroups.rafsiMatch,
      searchPriorityGroups_official_words.querySemiMatch,
      searchPriorityGroups_official_words.wordSemiMatch,
      searchPriorityGroups_official_words.zSemMatch,
      searchPriorityGroups_official_words.glossSemMatch,
      searchPriorityGroups_official_words.defGoodMatch,
      searchPriorityGroups_official_words.defInsideMatch,
      searchPriorityGroups_official_words.notesInsideMatch,
      searchPriorityGroups_unofficial_words.zMatch,
      searchPriorityGroups_unofficial_words.glossMatch,
      searchPriorityGroups_unofficial_words.selmahoFullMatch,
      searchPriorityGroups_unofficial_words.querySemiMatch,
      searchPriorityGroups_unofficial_words.wordSemiMatch,
      searchPriorityGroups_unofficial_words.zSemMatch,
      searchPriorityGroups_unofficial_words.glossSemMatch,
      searchPriorityGroups_unofficial_words.defGoodMatch,
      searchPriorityGroups_unofficial_words.defInsideMatch,
      searchPriorityGroups_unofficial_words.notesInsideMatch,
      searchPriorityGroups_official_words.otherMatch,
      searchPriorityGroups_unofficial_words.otherMatch
    )
  } else if (seskari === 'cnano') {
    firstMatches = secupra_vreji.concat(
      searchPriorityGroups.wordFullMatch,
      searchPriorityGroups.zMatch,
      searchPriorityGroups.glossMatch,
      searchPriorityGroups.wordFullMatchAdditional
    )
    secondMatches = [].concat(
      searchPriorityGroups.selmahoFullMatch,
      searchPriorityGroups.oneOfSelmahosFullMatch,
      searchPriorityGroups.rafsiMatch,
      searchPriorityGroups.querySemiMatch,
      searchPriorityGroups.wordSemiMatch,
      searchPriorityGroups.zSemMatch,
      searchPriorityGroups.glossSemMatch,
      searchPriorityGroups.defGoodMatch,
      searchPriorityGroups.defInsideMatch,
      searchPriorityGroups.notesInsideMatch,
      searchPriorityGroups.otherMatch
    )
  } else {
    firstMatches = secupra_vreji.concat(
      searchPriorityGroups.wordFullMatch,
      searchPriorityGroups.zMatch,
      searchPriorityGroups.glossMatch,
      searchPriorityGroups.wordFullMatchAdditional
    )
    secondMatches = [].concat(
      searchPriorityGroups.selmahoFullMatch,
      searchPriorityGroups.oneOfSelmahosFullMatch,
      searchPriorityGroups.rafsiMatch,
      searchPriorityGroups.defGoodMatch,
      searchPriorityGroups.defInsideMatch,
      searchPriorityGroups.notesInsideMatch,
      searchPriorityGroups.wordSemiMatch,
      searchPriorityGroups.querySemiMatch,
      searchPriorityGroups.otherMatch
    )
  }
  return {
    result: [firstMatches.concat(secondMatches), firstMatches, secondMatches],
    decomposed,
  }
}

async function sisku(searching, callback) {
  let {
    query,
    seskari,
    bangu,
    versio,
    leijufra: leijufra_incoming,
    loadingState,
  } = searching
  query = query.trim()
  //connect and do selects
  let lei_jufra_absent = false
  if (!leijufra_incoming.bangu || !leijufra.bangu) {
    lei_jufra_absent = true
    const stmt = db.prepare(`SELECT jufra FROM tejufra where bangu=?`)
    let tef1 = {}
    if (bangu) {
      stmt.bind([bangu.toString()])
      stmt.step()
      try {
        tef1 = JSON.parse(stmt.getAsObject().jufra)
      } catch (error) {}
    }
    stmt.bind(['en'])
    stmt.step()
    stmt.free()

    if (tef1) {
      Object.keys(tef1 || {}).forEach((key) => {
        leijufra[key] = tef1[key]
      })
    }
  }

  if (query.length === 0) return
  let secupra_vreji = { results: [], embeddings: [] }
  const query_apos =
    bangu === 'loglan'
      ? query.replace(/[‘]/g, "'").toLowerCase()
      : query.replace(/[h‘]/g, "'").toLowerCase()
  const queryDecomposition = decompose(query_apos)

  if (query.indexOf('^') === 0 || query.slice(-1) === '$') {
    const regexpedQuery = query.toLowerCase().replace(/'/g, "''")
    // const regexpedQueryPrecise = regexpedQuery.replace(/\^/g, '').replace(/\$/g, '').replace(/^(.*)$/g, '\\b$1\\b')
    let first1000 = runQuery(
      `SELECT * FROM valsi where bangu =$bangu and regexp('${regexpedQuery}',w) limit 1000`,
      { $bangu: bangu }
    )

    secupra_vreji.results = julne_setca_lotcila(
      (
        await sortthem({
          query_apos,
          query,
          bangu,
          mapti_vreji: first1000,
          seskari,
          secupra_vreji: [],
        })
      ).result[0]
    )
  } else if (seskari === 'rimni') {
    secupra_vreji.results = await siskurimni({ query, bangu })
  } else if (bangu !== 'muplis' && queryDecomposition.length > 1) {
    const { result, decomposed, embeddings } = await cnanosisku({
      mapti_vreji: [],
      multi: true,
      query,
      bangu,
      query_apos,
      seskari,
      secupra_vreji: secupra_vreji.results,
      queryDecomposition,
    })
    secupra_vreji = { results: result, embeddings }
    if (!decomposed) {
      secupra_vreji.results.unshift({
        t: 'bangudecomp',
        ot: "vlaza'umei",
        w: query,
        rfs: julne_setca_lotcila(
          await sohivalsi({ decomposed: queryDecomposition, bangu })
        ),
      })
    }
  } else {
    const { result, embeddings } = await cnanosisku({
      mapti_vreji: [],
      multi: false,
      query,
      bangu,
      versio,
      query_apos,
      seskari,
      secupra_vreji: secupra_vreji.results,
      queryDecomposition,
    })
    secupra_vreji = { results: result, embeddings }
  }
  callback({ ...secupra_vreji, lei_jufra_absent, leijufra })
}

function krulermorna(t) {
  return `.${t
    .replace(/\./g, '')
    .replace(/^/, '.')
    .replace(/h/g, "'")
    .toLowerCase()
    .replace(/([aeiouy\.])u([aeiouy])/g, '$1w$2')
    .replace(/([aeiouy\.])i([aeiouy])/g, '$1ɩ$2')
    .replace(/au/g, 'ḁ')
    .replace(/ai/g, 'ą')
    .replace(/ei/g, 'ę')
    .replace(/oi/g, 'ǫ')
    .replace(/\./g, '')}`
}

async function siskurimni({ query, bangu }) {
  if (query.length === 0) return
  const rimni = [[], [], [], [], [], [], [], [], []]
  let query_apos
  let queryF
  let queryR
  function cupra_lo_porsi(a) {
    for (let i = 0; i < a.length; i++) {
      const def = setca_lotcila(a[i]) // TODO: optimize for phrases
      if (!def) continue
      const docw = krulermorna(def.w)
        .replace(/([aeiouḁąęǫy])/g, '$1-')
        .split('-')
        .slice(-3)
      if (queryR && docw[0].slice(-1) !== queryR[0].slice(-1)) continue
      const right = docw[1].slice(-1)
      const reversal =
        docw[1].slice(-3, -1) ===
        queryF[1].slice(-3, -1).split('').reverse().join('')
      const left = queryF[1].slice(-1)
      let sli = false
      if (
        (left === 'a' && right.search('[eao]') >= 0) ||
        (left === 'e' && right.search('[iea]') >= 0) ||
        (left === 'i' && right.search('[ie]') >= 0) ||
        (left === 'o' && right.search('[aou]') >= 0) ||
        (left === 'u' && right.search('[aou]') >= 0)
      ) {
        sli = true
      }
      if (krulermorna(def.w) === query) {
        rimni[0].push(def)
        continue
      } else if (docw[2] || '' === queryR[2] || '') {
        // if (queryR[2])
        if (
          (docw[0].match(queryR[0]) || []).length > 0 &&
          (docw[1].match(queryR[1]) || []).length > 0 &&
          left === right
        ) {
          rimni[1].push(def)
        } else if (
          (docw[0].match(queryR[0]) || []).length > 0 &&
          (docw[1].match(queryR[1]) || []).length > 0 &&
          sli
        ) {
          rimni[2].push(def)
        } else if (
          (docw[1].match(regexify(queryR[2] || '')) || []).length > 0 &&
          left === right
        ) {
          rimni[3].push(def)
        } else if (
          (docw[1].match(regexify(queryR[2] || '')) || []).length > 0 &&
          sli
        ) {
          rimni[4].push(def)
        } else if (
          (docw[0].match(queryR[0]) || []).length > 0 &&
          sli &&
          reversal
        ) {
          rimni[5].push(def)
        } else if (
          (docw[0].match(queryR[0]) || []).length > 0 &&
          (docw[1].match(queryR[1]) || []).length > 0
        ) {
          rimni[6].push(def)
        }
      } else if (
        queryR[1] &&
        (docw[0].match(queryR[0]) || []).length > 0 &&
        (docw[1].match(queryR[1]) || []).length > 0
      ) {
        rimni[7].push(def)
      } else {
        rimni[8].push(def)
      }
    }
    const sortArray = ({ ar }) => {
      if (ar.length === 0) return []
      const gism = []
      const expgism = []
      const cmav = []
      const expcmav = []
      const drata = []
      for (let c = 0; c < ar.length; c++) {
        if (ar[c].t === 'gismu') {
          gism.push(ar[c])
        } else if (ar[c].t === 'experimental gismu') {
          expgism.push(ar[c])
        } else if (ar[c].t === 'cmavo') {
          cmav.push(ar[c])
        } else if (ar[c].t === 'experimental cmavo') {
          expcmav.push(ar[c])
        } else {
          drata.push(ar[c])
        }
      }
      return gism
        .sort(sortMultiDimensional)
        .concat(
          expgism.sort(sortMultiDimensional),
          cmav.sort(sortMultiDimensional),
          expcmav.sort(sortMultiDimensional),
          drata.sort(sortMultiDimensional)
        )
    }

    return rimni.reduce((list, x) => list.concat(sortArray({ ar: x })), [])
  }

  function regexify(t) {
    return t
      .replace(/[lmnr]/g, '[lmnr]')
      .replace(/[ɩw]/g, '[ɩw]')
      .replace(/[pb]/g, '[pb]')
      .replace(/[fv]/g, '[fv]')
      .replace(/[td]/g, '[td]')
      .replace(/[sz]/g, '[sz]')
      .replace(/[cj]/g, '[cj]')
      .replace(/[kg]/g, '[kg]')
      .replace(/x/g, '[xk]')
  }

  queryR = krulermorna(query)
    .replace(/([aeiouḁąęǫy])/g, '$1-')
    .split('-')
    .slice(-3)
  queryF = queryR.slice()
  if (queryR.length >= 2) {
    queryR[1] = queryR[1].replace(/[aeiouḁąęǫy]/, '[aeiouḁąęǫy]')
  }
  let r = /.*([aeiouḁąęǫy])/.exec(queryR[0])
  if (r === null) return []
  queryR[0] = r[1]
  if (queryR.length === 2) {
    r = runQuery(`SELECT * FROM valsi where bangu=$bangu`, {
      $bangu: bangu,
    }).filter((valsi) => {
      const queryRn = krulermorna(valsi.w)
        .replace(/([aeiouḁąęǫy])/g, '$1-')
        .split('-')
        .slice(-3)
      if (
        queryRn.length === 2 &&
        queryRn[0].split('').slice(-1)[0] ===
          queryR[0].split('').slice(-1)[0] &&
        setca_lotcila(valsi)
      )
        return true
      return false
    })
  } else {
    query_apos = regexify((queryR || []).join(''))
    r = runQuery(`SELECT * FROM valsi where bangu = $bangu`, {
      $bangu: bangu,
    }).filter(({ w }) => {
      if (krulermorna(w).match(`${query_apos.toLowerCase()}$`)) return true
      return false
    })
  }
  return cupra_lo_porsi(r)
}
aQueue.enqueue(initSQLDB)

self.postMessage({ kind: 'ready' })
