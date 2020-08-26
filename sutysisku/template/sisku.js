const db = new Dexie('sorcu1')

const supportedLangs = {
  // 'en': { n: 'English', "p": "selsku_lanci_eng" },
  'muplis': { n: 'la muplis' },
  'en-cll': { n: 'The CLL', "p": "cukta" },
  jbo: { n: 'lojbo', "p": "lanci_jbo" },
  ru: { n: 'русский', "p": "selsku_lanci_rus" },
  eo: { n: 'esperanto', "p": "lanci_epo" },
  es: { n: 'español', "p": "selsku_lanci_spa" },
  'fr-facile': { n: 'français', "p": "selsku_lanci_fra" },
  ja: { n: '日本語', "p": "selsku_lanci_jpn" },
  zh: { n: '中文', "p": "selsku_lanci_zho" },
}

function initDb() {
  try {
    db.version(1).stores({
      valsi: '++id, bangu, w, d, n, t, g, *r, *cache',
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
  for (let i = 0; i < langs.length; i++) {
    const lang = langs[i]
    const savedLang = (
      await db.langs_ready.where('bangu').equals(lang).toArray()
    )[0]
    cb(`downloading ${lang}.blob.json dump`)
    postMessage({
      kind: 'loader',
      cmene: 'loading',
      completedRows: 10,
      totalRows: 100,
      bangu: supportedLangs[lang].n
    })
    const response = await fetch(
      `/sutysisku/data/parsed-${lang}.blob.json?sisku=${new Date().getTime()}`
    )
    let blob
    if (response.ok) {
      blob = await response.blob()
      await db.valsi.where({ bangu: lang }).delete()
      await db.langs_ready.where({ bangu: lang }).delete()
      await db.import(blob, {
        acceptMissingTables: true,
        acceptVersionDiff: true,
        acceptNameDiff: true,
        acceptChangedPrimaryKey: true,
        overwriteValues: true,
        // clearTablesBeforeImport: true,
        noTransaction: true,
        progressCallback: ({ totalRows, completedRows, done }) => {
          if (searching.bangu === lang)
            sisku(searching, (results) => {
              postMessage({
                kind: 'searchResults',
                results,
                force: true,
                req: searching,
              })
            })
          if (!done) {
            cb(
              `imported ${completedRows} keys out of ${totalRows} from ${lang}.blob.json`,
              new Date().toISOString()
            )
            postMessage({
              kind: 'loader',
              cmene: 'loading',
              completedRows,
              totalRows,
              bangu: supportedLangs[lang].n
            })
          } else {
            if (!savedLang) db.langs_ready.put({ bangu: lang })
            cb(`imported ${lang}.blob.json at ${new Date().toISOString()}`)
          }
        }
      });
    }
    else console.log('HTTP-Error: ' + response.status)
    // if (!savedLang && lang == searching.bangu) {
    //   cb(
    //     `starting aggressive inserting/updating keys from ${lang}.blob at ${new Date().toISOString()}`
    //   )
    //   sisku(searching, (results) => {
    //     postMessage({
    //       kind: 'searchResults',
    //       results,
    //       force: true,
    //       req: searching,
    //     })
    //   })
    // } else {
    //   cb(
    //     `starting slow background inserting/updating ${
    //     keys.length
    //     } keys all from ${lang}.json at ${new Date().toISOString()}`
    //   )
    //   for (const i in keys) {
    //     const key = keys[i]
    //     const core = { w: key, bangu: lang }
    //     const no = await db.valsi.where(core).modify({ ...core, ...json[key] })
    //     if (no === 0) await db.valsi.put({ core, ...json[key] })
    //     if (i > 0 && i % 1000 === 0)

    //   }
    // }
  }
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
  queryDecomposition
}) {
  console.log(new Date().toISOString(), 'started query', query, bangu, versio)
  let rows
  if (seskari === 'fanva') {
    rows = (await db.valsi
      .where('w')
      .equals(query_apos)
      // .and((valsi) => valsi.bangu.indexOf(bangu) === 0)
      .distinct()
      .toArray()).sort((a, b) => {
        if (a.bangu === bangu) { return -1 }
        if (a.bangu === 'jbo' || b.bangu.indexOf("-cll") >= 0) { return 0 }
        return 1
      });
  } else if (bangu === 'muplis' && queryDecomposition.length > 1) {
    rows = (await db.valsi
      .where('cache')
      .equals(queryDecomposition[0])
      .and(jufra => {
        if (jufra.bangu === bangu && queryDecomposition.every(v => jufra.cache.includes(v))) return true;
        return false
      })
      .distinct()
      .toArray())
  } else {
    rows = (await db.valsi
      .where('cache')
      .startsWith(query_apos)
      .and((valsi) => valsi.bangu.indexOf(bangu) === 0)
      .distinct()
      .toArray())
  }
  rows = rows.sort((a, b) => {
    if (a.bangu.indexOf("-cll") >= 0) { return -1 }
    if (b.bangu.indexOf("-cll") >= 0) { return 1 }
    return 0
  });
  mapti_vreji = mapti_vreji.slice().concat(
    rows.map((valsi) => {
      delete valsi.cache
      return valsi
    })
  )
  console.log(new Date().toISOString(), 'end of query', query, bangu, versio)
  if (seskari === 'fanva' || bangu === 'muplis') {
    return { result: mapti_vreji, decomposed: false }
  }
  const { result, decomposed } = await sortthem({
    query_apos,
    query,
    bangu,
    mapti_vreji,
    multi,
    seskari,
    secupra_vreji,
  })
  const allMatches = result
  if (multi) return { result: allMatches[0], decomposed }
  if (allMatches[0].length === 0) {
    allMatches[0] = (await jmina_ro_cmima_be_lehivalsi({ query, bangu })) || []
  }
  if (allMatches[0].length === 0 || allMatches[0][0].w !== query_apos) {
    let ty = /^[A-Zh]+[0-9\*]+$/.test(query)
      ? []
      : julne_setca_lotcila(
        await shortget({ valsi: query_apos, secupra: [], bangu })
      )
    if (bangu === 'muplis' || !window.xuzganalojudri) {
      ty = ty.filter(({ d }) => !d || !d.nasezvafahi)
    }
    if (ty.length <= 1) return { result: ty.concat(allMatches[0]), decomposed }
    const e = {
      result: allMatches[1].concat(
        [
          {
            t: window.bangudecomp,
            ot: "vlaza'umei",
            w: query,
            rfs: ty,
          },
        ],
        allMatches[2]
      ),
      decomposed,
    }
    return e
  }
  return { result: allMatches[0], decomposed }
}

const sortMultiDimensional = (a, b) => {
  if (!a.d) a.d = ''
  if (!b.d) b.d = ''
  return a.d.length < b.d.length ? -1 : a.d.length > b.d.length ? 1 : 0
}

const ma_klesi_lo_valsi = (str) => {
  let j = ['', '']
  if (!window.xuzganalojudri || str.search(/[^aeiouyAEIOY]'/) > -1) return j
  try {
    j = cmaxes.parse(str.toLowerCase())
    j = JSON.stringify(j)
    j = j.split(/","|\],\[/).map((i) => i.replace(/[^,a-zA-Z']/g, ''))
    if (str.includes(' zei ')) return ['zei-lujvo', str]
  } catch (e) { }
  if (
    j.length > 2 &&
    j
      .filter((el, index) => index % 2 === 0)
      .toString()
      .match(/^cmavo(,cmavo)+$/)
  ) {
    return [
      'cmavo compound',
      j.filter((el, index) => index % 2 === 1).join(' '),
    ]
  }
  return j
}

function me_vuhi_le_ve_lujvo(tegerna) {
  if (!window.xuzganalojudri) return
  if (tegerna.includes(' zei ')) return ['@'].concat(tegerna.split(' '))
  let t
  try {
    t = cmaxes.parse(tegerna).toString().split(',')
  } catch (err) {
    return
  }
  if (t[0] !== 'lujvo' || t.length !== 2) return
  return t[1].split('-')
}

function setca_lotcila(doc) {
  if (!doc.t || doc.t === '') {
    if (doc.bangu !== 'muplis' && window.xuzganalojudri) {
      doc.t = ma_klesi_lo_valsi(doc.w)[0]
    } else {
      doc.t = ''
    }
  }
  return doc
}

function decompose(a) {
  return window.xuzganalojudri
    ? a
      .replace(/ zei /g, '_zei_')
      .split(' ')
      .map((b) => b.replace(/_zei_/g, ' zei '))
    : a.split(' ')
}

function julne_setca_lotcila(a) {
  return a.reduce((b, n) => {
    if (n) b.push(setca_lotcila(n))
    return b
  }, [])
}

async function sohivalsi(queryDecomposition, bangu) {
  let secupra = []
  for (let s = 0; s < queryDecomposition.length; s++) {
    for (let c = queryDecomposition.length - 1; c >= s; c--) {
      const o = queryDecomposition.slice(s, c + 1).join(' ')
      secupra = await shortget({ valsi: o, secupra, bangu })
    }
  }
  return secupra
}

async function jmina_ro_cmima_be_lehivalsi({ query, def, bangu }) {
  let vuhi_le_ve_lujvo = me_vuhi_le_ve_lujvo(query)
  if (!vuhi_le_ve_lujvo) return def ? [def] : []
  let vuhi_le_valsi = []
  if (vuhi_le_ve_lujvo[0] === '@') {
    vuhi_le_valsi = vuhi_le_ve_lujvo.slice(1).map((i) => ({
      w: i,
      d: { nasezvafahi: true },
    }))
    for (let j = 0; j < vuhi_le_valsi.length; j++) {
      const le_valsi = vuhi_le_valsi[j].w
      const le_se_skicu_veljvo = (
        await db.valsi.where({ w: le_valsi, bangu }).toArray()
      )[0]
      if (le_se_skicu_veljvo) {
        vuhi_le_valsi[j] = le_se_skicu_veljvo
        vuhi_le_valsi[j]['w'] = le_valsi
      }
    }
  } else {
    for (const ji in vuhi_le_ve_lujvo) {
      const rf = (
        await db.valsi.where({ r: vuhi_le_ve_lujvo[ji], bangu }).toArray()
      )[0]
      if (rf) {
        vuhi_le_valsi.push(rf)
      } else if (vuhi_le_ve_lujvo[ji].length > 2) {
        vuhi_le_valsi = vuhi_le_valsi.concat([
          {
            t: '',
            d: { nasezvafahi: true },
            w: vuhi_le_ve_lujvo[ji],
            r: [vuhi_le_ve_lujvo[ji]],
          },
        ])
      }
    }
  }
  const aw = julne_setca_lotcila(vuhi_le_valsi) // .filter(function(i){return !i.d.nasezvafahi});
  return [
    {
      t: aw.length > 0 ? 'lujvo' : ma_klesi_lo_valsi(query)[0],
      w: query,
      d: { nasezvafahi: true },
      rfs: aw,
    },
  ]
}

const sortArray = ({ ar, seskari }) => {
  if (ar.length === 0) return ar
  let gismu = []
  let cmavo = []
  let drata = []
  for (let c = 0; c < ar.length; c++) {
    if (ar[c].t === 'gismu') {
      gismu.push(ar[c])
    } else if (ar[c].t === 'cmavo') {
      cmavo.push(ar[c])
    } else {
      drata.push(ar[c])
    }
  }
  gismu = gismu.sort(sortMultiDimensional)
  cmavo = cmavo.sort(sortMultiDimensional)
  drata = drata.sort(sortMultiDimensional)
  return seskari === 'catni'
    ? [gismu.concat(cmavo), drata]
    : gismu.concat(cmavo).concat(drata)
}

async function shortget({ valsi, secupra, nasisku_filohipagbu, bangu }) {
  const hasDefinitions = await db.valsi
    .where('w')
    .equalsIgnoreCase(valsi.toLowerCase())
    .or('d')
    .equalsIgnoreCase(valsi.toLowerCase())
    .and((valsi) => valsi.bangu === bangu)
    .toArray()

  if (hasDefinitions && hasDefinitions.length > 0)
    return secupra.concat(hasDefinitions)
  if (!nasisku_filohipagbu) {
    if (valsi.replace(/ zei /g, '-zei-').split(' ').length === 1) {
      //zei lujvo
      let ye = ma_klesi_lo_valsi(valsi)
      if (ye[0] === 'cmavo compound' || ye[0] === 'zei-lujvo') {
        ye = ye[1].split(' ')
        for (const jj in ye) {
          secupra = await shortget({
            valsi: ye[jj],
            secupra,
            nasisku_filohipagbu: true,
            bangu,
          })
        }
      } else if (ye[0] !== '') {
        ye = ye.filter((_, index, __) => index % 2 !== 0)
        for (const _ in ye) {
          secupra = await shortget({
            valsi: ye[_].replace(/-/g, ''),
            secupra,
            nasisku_filohipagbu: true,
            bangu,
          })
        }
      }
    } else {
      //not a zei-lujvo
      let vuhi_le_ve_lujvo = me_vuhi_le_ve_lujvo(valsi)
      if ((vuhi_le_ve_lujvo || [])[0] === '@') {
        vuhi_le_ve_lujvo = vuhi_le_ve_lujvo.slice(1)

        for (let j = 0; j < vuhi_le_ve_lujvo.length; j++) {
          const le_valsi = vuhi_le_ve_lujvo[j]
          const le_se_skicu_valsi = (
            await db.valsi.where({ w: le_valsi, bangu }).toArray()
          )[0]
          if (le_se_skicu_valsi) {
            vuhi_le_ve_lujvo[j] = le_se_skicu_valsi
            vuhi_le_ve_lujvo[j]['w'] = le_valsi
          }
        }
        secupra.concat(vuhi_le_valsi)
      } else if (vuhi_le_ve_lujvo) {
        for (const r of vuhi_le_ve_lujvo) {
          const foundRafsi = (await db.valsi({ r, bangu }).toArray())[0]
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

async function sortthem({
  mapti_vreji,
  multi,
  query,
  bangu,
  query_apos,
  seskari,
  secupra_vreji,
}) {
  let decomposed = false
  let ui = [[], [], [], [], [], [], [], [], [], []]
  for (let i = 0; i < mapti_vreji.length; i++) {
    const doc = setca_lotcila(mapti_vreji[i]) // todo: optimize for phrases
    if (doc) {
      if (doc.w === query || doc.w === query_apos) {
        doc.rfs = JSON.parse(
          JSON.stringify(
            julne_setca_lotcila(await sohivalsi(decompose(doc.w), bangu))
          )
        ).filter(({ w }) => w !== doc.w)
        decomposed = true
        if (doc.rfs.length === 0) {
          doc.rfs = (
            await jmina_ro_cmima_be_lehivalsi({ query: doc.w, def: doc, bangu })
          )[0].rfs
        }
        ui[0].push(doc)
      } else if (doc.g && doc.g.search(`^${query}(;|$)`) === 0) {
        ui[1].push(doc)
      } else if (doc.r && doc.r.join(' ').search(`\\b${query}\\b`) >= 0) {
        ui[5].push(doc)
      } else if (doc.w.search(`(^| )(${query_apos}|${query})( |$)`) >= 0) {
        ui[2].push(doc)
      } else if (doc.s && doc.s === query) {
        ui[3].push(doc)
      } else if (doc.s && doc.s.indexOf(query) === 0) {
        ui[9].push(doc)
      } else if (
        (doc.g && doc.g.search(`\\b${query}\\b`) >= 0) ||
        doc.w.search(`\\b(${query_apos}|${query})`) >= 0 ||
        doc.w.search(`(${query_apos}|${query})\\b`) >= 0
      ) {
        ui[4].push(doc)
      } else if (doc.d && doc.d.toLowerCase().search(`^${query}\\b`) >= 0) {
        ui[8].push(doc)
      } else if (doc.d && doc.d.toLowerCase().search(`\\b${query}\\b`) >= 0) {
        ui[6].push(doc)
      } else {
        ui[7].push(doc)
      }
    }
  }
  // if (ui[0].length === 0 && !multi) {
  // secupra_vreji = jmina_ro_cmima_be_lehivalsi(query) || [];
  // }

  ui = ui.map((i) => sortArray({ ar: i, seskari }))
  let firstMatches
  let secondMatches
  if (seskari === 'catni') {
    ui = ui.map((i) => {
      if (i.length !== 2) i = [[], []]
      return i
    })
    firstMatches = secupra_vreji.concat(ui[0][0], ui[1][0])
    secondMatches = ui[3][0].concat(
      ui[9][0],
      ui[5][0],
      ui[2][0],
      ui[4][0],
      ui[8][0],
      ui[6][0],
      ui[7][0],
      ui[0][1],
      ui[1][1],
      ui[3][1],
      ui[9][1],
      ui[5][1],
      ui[2][1],
      ui[4][1],
      ui[8][1],
      ui[6][1],
      ui[7][1]
    )
  } else {
    firstMatches = secupra_vreji.concat(ui[0], ui[1])
    secondMatches = ui[3].concat(
      ui[9],
      ui[5],
      ui[2],
      ui[4],
      ui[8],
      ui[6],
      ui[7]
    )
  }
  if (firstMatches && firstMatches.w === query_apos) {
    for (let a = 1; a < firstMatches.length; a++) {
      if (firstMatches[a].l && firstMatches[a].d === `{${query_apos}}`) {
        firstMatches.splice(a, 1)
        --a
      }
    }
  }
  return {
    result: [firstMatches.concat(secondMatches), firstMatches, secondMatches],
    decomposed,
  }
}

async function sisku(searching, callback) {
  const { query, seskari, bangu, versio } = searching
  if (query.length === 0) return
  let secupra_vreji = []
  const query_apos = query.replace(/[h‘]/g, "'").toLowerCase()
  const queryDecomposition = decompose(query_apos)

  if (query.indexOf('^') === 0 || query.slice(-1) === '$') {
    const first200 = (
      await db.valsi
        .filter((valsi) => valsi.w.match(query.toLowerCase()))
        .toArray()
    ).slice(0, 200)
    secupra_vreji = julne_setca_lotcila(
      (
        await sortthem({
          query_apos,
          query,
          bangu,
          mapti_vreji: first200,
          multi: false,
          seskari,
          secupra_vreji: [],
        })
      ).result[0]
    )
  } else if (seskari === 'rimni') {
    secupra_vreji = await siskurimni(query)
  } else if (bangu !== 'muplis' && queryDecomposition.length > 1) {
    const { result, decomposed } = await cnanosisku({
      mapti_vreji: [],
      multi: true,
      query,
      bangu,
      query_apos,
      seskari,
      secupra_vreji,
    })
    secupra_vreji = result
    if (!decomposed) {
      secupra_vreji.push({
        t: window.bangudecomp,
        ot: "vlaza'umei",
        w: query,
        rfs: julne_setca_lotcila(await sohivalsi(queryDecomposition, bangu)),
      })
    }
  } else {
    const { result } = await cnanosisku({
      mapti_vreji: [],
      multi: false,
      query,
      bangu,
      versio,
      query_apos,
      seskari,
      secupra_vreji,
      queryDecomposition
    })
    secupra_vreji = result
  }
  callback({ results: secupra_vreji, supportedLangs })
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

async function siskurimni(query) {
  if (query.length === 0) return
  const rimni = [[], [], [], [], [], [], [], [], []]
  let query_apos
  let queryF
  let queryR
  function cupra_lo_porsi(a) {
    for (let i = 0; i < a.length; i++) {
      const doc = setca_lotcila(a[i]) // todo: optimize for phrases
      if (!doc) continue
      const docw = krulermorna(doc.w)
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
      if (krulermorna(doc.w) === query) {
        rimni[0].push(doc)
        continue
      } else if (docw[2] || '' === queryR[2] || '') {
        // if (queryR[2])
        if (
          (docw[0].match(queryR[0]) || []).length > 0 &&
          (docw[1].match(queryR[1]) || []).length > 0 &&
          left === right
        ) {
          rimni[1].push(doc)
        } else if (
          (docw[0].match(queryR[0]) || []).length > 0 &&
          (docw[1].match(queryR[1]) || []).length > 0 &&
          sli
        ) {
          rimni[2].push(doc)
        } else if (
          (docw[1].match(regexify(queryR[2] || '')) || []).length > 0 &&
          left === right
        ) {
          rimni[3].push(doc)
        } else if (
          (docw[1].match(regexify(queryR[2] || '')) || []).length > 0 &&
          sli
        ) {
          rimni[4].push(doc)
        } else if (
          (docw[0].match(queryR[0]) || []).length > 0 &&
          sli &&
          reversal
        ) {
          rimni[5].push(doc)
        } else if (
          (docw[0].match(queryR[0]) || []).length > 0 &&
          (docw[1].match(queryR[1]) || []).length > 0
        ) {
          rimni[6].push(doc)
        }
      } else if (
        queryR[1] &&
        (docw[0].match(queryR[0]) || []).length > 0 &&
        (docw[1].match(queryR[1]) || []).length > 0
      ) {
        rimni[7].push(doc)
      } else {
        rimni[8].push(doc)
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
    r =
      (await db.valsi
        .filter((valsi) => {
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
        .toArray()) || []
  } else {
    query_apos = regexify((queryR || []).join(''))
    r = await db.valsi
      .filter((valsi) => {
        if (krulermorna(valsi.w).match(`${query_apos.toLowerCase()}$`))
          return true
        return false
      })
      .toArray()
  }
  return cupra_lo_porsi(r)
}
