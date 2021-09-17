const supportedLangs = {
  'en': { n: 'English', "p": "selsku_lanci_eng" },
  'muplis': { n: 'la muplis' },
  'en-cll': { n: 'The Book', "p": "cukta", noRafsi: true, searchPriority: true },
  'en-ll': { n: 'Learn Lojban', "p": "cukta", noRafsi: true, searchPriority: true },
  jbo: { n: 'lojbo', "p": "lanci_jbo", searchPriority: true },
  ru: { n: 'русский', "p": "selsku_lanci_rus" },
  eo: { n: 'esperanto', "p": "lanci_epo" },
  es: { n: 'español', "p": "selsku_lanci_spa" },
  'fr-facile': { n: 'français', "p": "selsku_lanci_fra" },
  ja: { n: '日本語', "p": "selsku_lanci_jpn" },
  zh: { n: '中文', "p": "selsku_lanci_zho" },
}


const db = new Dexie('sorcu1')
let leijufra = {
  xuzganalojudri: '', bangudecomp: ''
}


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
  let rows
  if (versio === 'selmaho') {
    if (bangu === 'muplis') {
      rows = await db.valsi
        .where('s')
        .equals(query)
        .and((valsi) =>
          valsi.bangu === bangu
        )
        .distinct()
        .toArray();
    } else {
      rows = await db.valsi
        .where('s')
        .startsWith(query)
        .and((valsi) =>
          valsi.bangu === bangu &&
          typeof valsi.s === 'string' && new RegExp(`^${query}[0-9]*[a-z]*$`).test(valsi.s)
        )
        .distinct()
        .toArray();
    }
  } else if (seskari === 'fanva') {
    rows = (await db.valsi
      .where({ w: query_apos })
      .distinct()
      .toArray()).sort((a, b) => {
        if (a.bangu === bangu) { return -1 }
        if (supportedLangs[a.bangu].searchPriority) { return 0 }
        return 1
      });
  } else if (bangu === 'muplis' && queryDecomposition.length > 1) {
    const words = queryDecomposition.sort((a, b) => {
      if (a.lenth > b.length) return -1
      return 0
    })
    rows = (await db.valsi
      .where('cache')
      .equals(words[0])
      .and(jufra => {
        if (jufra.bangu === bangu && queryDecomposition.every(v => jufra.cache.includes(v))) return true;
        return false
      })
      .distinct()
      .toArray())
  } else {
    if (query_apos.length >= 2) {
      const reversed_query_apos = [...query_apos].reverse().join("")
      // const query_apos_length = query_apos.length
      await db.transaction('rw', db.valsi, async () => {
        const bothRows = await Promise.all([
          db.valsi
            .where('cache')
            .startsWith(query_apos)
            .and((valsi) => valsi.bangu.indexOf(bangu) === 0)
            .distinct()
            .toArray(),
          db.valsi
            .where('cache')
            .startsWith(reversed_query_apos)
            .and((valsi) => valsi.bangu.indexOf(bangu) === 0 && valsi.cache.filter(i => i.indexOf(query_apos) === 0).length === 0)
            .distinct()
            .toArray()
        ])
        rows = bothRows[0].concat(bothRows[1])
      })
    } else {
      rows = (await db.valsi
        .where('cache')
        .startsWith(query_apos)
        .and((valsi) => valsi.bangu.indexOf(bangu) === 0)
        .distinct()
        .toArray())
    }
  }
  rows = rows.map(el => {
    const { cache, ...rest } = el
    return rest;
  }).sort((a, b) => {
    if (supportedLangs[a.bangu].searchPriority) { return -1 }
    if (supportedLangs[b.bangu].searchPriority) { return 1 }
    return 0
  });
  mapti_vreji = mapti_vreji.slice().concat(
    rows.map((valsi) => {
      delete valsi.cache
      return valsi
    })
  )
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
    if (bangu === 'muplis' || !leijufra.xuzganalojudri) {
      ty = ty.filter(({ d }) => !d || !d.nasezvafahi)
    }
    if (ty.length <= 1) return { result: ty.concat(allMatches[0]), decomposed }
    const e = {
      result: allMatches[1].concat(
        [
          {
            t: leijufra.bangudecomp,
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

function sortMultiDimensional(a, b) {
  if (!a.d) a.d = ''
  if (!b.d) b.d = ''
  return a.d.length < b.d.length ? -1 : a.d.length > b.d.length ? 1 : 0
}

function reconcatenate(selsku) {
  try {
    let parsed = cmaxes.parse(selsku.toLowerCase())
    parsed = parsed.filter(el => el[0] !== 'drata')
    const reconcatenated = parsed.map(el => el[1]).join(' ')
    return { parsed, reconcatenated }
  } catch (error) { }
  return { parsed: [], reconcatenated: selsku }
}

function maklesi_levalsi(selsku) {
  let reconcatenated = selsku
  if (!leijufra.xuzganalojudri || selsku.search(/[^aeiouyAEIOY]'/) > -1) return ['', selsku]
  try {
    const { parsed: parsedString, reconcatenated } = reconcatenate(selsku)
    const oddEls = parsedString.filter((_, index) => index % 2 == 1)
    if (oddEls.length > 0 && oddEls.every(el => el[0] == 'zei')) return ['zei-lujvo', reconcatenated]
    if (parsedString.length == 1) return parsedString[0]
    if (parsedString.every(el => el[0] === 'cmavo')) return ['cmavo-compound', reconcatenated]
    if (parsedString.length > 1) return ['phrase', reconcatenated]
  } catch (e) { }
  return ['', reconcatenated]
}

function mevuhilevelujvo(tegerna) {
  if (!leijufra.xuzganalojudri) return
  if (tegerna.includes(' zei ')) return ['@'].concat(tegerna.split(' '))
  let text
  try {
    text = cmaxes.parse(tegerna).toString().split(',')
  } catch (err) {
    return
  }
  if (!['lujvo'].includes(text[0]) || text.length !== 2) return
  return text[1].split('-')
}

function setca_lotcila(doc) {
  if ([undefined, ''].includes(doc.t))
    doc.t = (doc.bangu !== 'muplis' && leijufra.xuzganalojudri) ? maklesi_levalsi(doc.w)[0] : ''
  return doc
}

function decompose(selsku) {
  return leijufra.xuzganalojudri
    ? reconcatenate(selsku).reconcatenated
      .replace(/ zei /g, '_zei_')
      .split(' ')
      .map((b) => b.replace(/_zei_/g, ' zei ').replace(/-/g, ''))
    : selsku.split(' ')
}

function julne_setca_lotcila(a) {
  return a.reduce((b, n) => {
    if (n) b.push(setca_lotcila(n))
    return b
  }, [])
}

async function sohivalsi(queryDecomposition, bangu) {
  let secupra = []
  for (let valsi_index = 0; valsi_index < queryDecomposition.length; valsi_index++) {
    for (let valsi2_index = queryDecomposition.length - 1; valsi2_index >= valsi_index; valsi2_index--) {
      const o = queryDecomposition.slice(valsi_index, valsi2_index + 1).join(' ')
      secupra = await shortget({ valsi: o, secupra, bangu })
    }
  }
  return secupra
}

async function jmina_ro_cmima_be_lehivalsi({ query, def, bangu }) {
  let vuhi_le_ve_lujvo = mevuhilevelujvo(query)
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
      t: aw.length > 0 ? 'lujvo' : maklesi_levalsi(query)[0],
      w: query,
      d: { nasezvafahi: true },
      rfs: aw,
    },
  ]
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
      let ye = maklesi_levalsi(valsi)
      if (ye[0] === 'cmavo-compound' || ye[0] === 'zei-lujvo') {
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
      let vuhilevelujvo = mevuhilevelujvo(valsi)
      if ((vuhilevelujvo || [])[0] === '@') {
        vuhilevelujvo = vuhilevelujvo.slice(1)

        for (let j = 0; j < vuhilevelujvo.length; j++) {
          const le_valsi = vuhilevelujvo[j]
          const le_se_skicu_valsi = (
            await db.valsi.where({ w: le_valsi, bangu }).toArray()
          )[0]
          if (le_se_skicu_valsi) {
            vuhilevelujvo[j] = le_se_skicu_valsi
            vuhilevelujvo[j]['w'] = le_valsi
          }
        }
        secupra.concat(vuhi_le_valsi)
      } else if (vuhilevelujvo) {
        for (const r of vuhilevelujvo) {
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

function isCoreWord(def) {
  return ['gismu', 'cmavo'].includes(def.t)
}

function defaultPriorityGroups() {
  return {
    wordFullMatch: [],
    wordFullMatchAdditional: [],
    glossMatch: [],
    rafsiMatch: [],
    wordSemiMatch: [],
    selmahoFullMatch: [],
    selmahoSemiMatch: [],
    oneOfSelmahosFullMatch: [],
    oneOfSelmahosSemiMatch: [],
    glossSemiMatch: [],
    defGoodMatch: [],
    defInsideMatch: [],
    otherMatch: []
  }
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
  let searchPriorityGroups = defaultPriorityGroups()
  for (let i = 0; i < mapti_vreji.length; i++) {
    const def = setca_lotcila(mapti_vreji[i]) // todo: optimize for phrases
    if (def) {
      if (def.w === query || def.w === query_apos) {
        if (!supportedLangs[def.bangu].noRafsi) {
          def.rfs = JSON.parse(
            JSON.stringify(
              julne_setca_lotcila(await sohivalsi(decompose(def.w), bangu))
            )
          ).filter(({ w }) => w !== def.w)
          decomposed = true
          if (def.rfs.length === 0) {
            def.rfs = (
              await jmina_ro_cmima_be_lehivalsi({ query: def.w, def: def, bangu })
            )[0].rfs
          }
        }
        if (def.bangu == bangu) searchPriorityGroups.wordFullMatch.push(def)
        else searchPriorityGroups.wordFullMatchAdditional.push(def)
      } else if (def.g && def.g.search(`^${query}(;|$)`) === 0) {
        searchPriorityGroups.glossMatch.push(def)
      } else if (def.r && def.r.join(' ').search(`\\b${query}\\b`) >= 0) {
        searchPriorityGroups.rafsiMatch.push(def)
      } else if (def.w.search(`(^| )(${query_apos}|${query})( |$)`) >= 0) {
        searchPriorityGroups.wordSemiMatch.push(def)
      } else if (def.s && typeof def.s === 'string' && def.s === query) {
        searchPriorityGroups.selmahoFullMatch.push(def)
      } else if (def.s && typeof def.s === 'string' && def.s.indexOf(query) === 0) {
        searchPriorityGroups.selmahoSemiMatch.push(def)
      } else if (def.s && Array.isArray(def.s) && def.s.includes(query)) {
        searchPriorityGroups.oneOfSelmahosFullMatch.push(def)
      } else if (def.s && Array.isArray(def.s) && def.s.filter(i => i.indexOf(query) === 0).length > 0) {
        searchPriorityGroups.oneOfSelmahosSemiMatch.push(def)
      } else if (
        (def.g && def.g.search(`\\b${query}\\b`) >= 0) ||
        def.w.search(`\\b(${query_apos}|${query})`) >= 0 ||
        def.w.search(`(${query_apos}|${query})\\b`) >= 0
      ) {
        searchPriorityGroups.glossSemiMatch.push(def)
      } else if (def.d && typeof def.d === 'string') {
        if (def.d.toLowerCase().search(`^${query}\\b`) >= 0) {
          searchPriorityGroups.defGoodMatch.push(def)
        } else if (def.d.toLowerCase().search(`\\b${query}\\b`) >= 0) {
          searchPriorityGroups.defInsideMatch.push(def)
        }
        else {
          searchPriorityGroups.otherMatch.push(def)
        }
      } else {
        searchPriorityGroups.otherMatch.push(def)
      }
    }
  }
  // if (ui[0].length === 0 && !multi) {
  // secupra_vreji = jmina_ro_cmima_be_lehivalsi(query) || [];
  // }

  let firstMatches
  let secondMatches
  if (seskari === 'catni') {
    const searchPriorityGroups_unofficial_words = defaultPriorityGroups()
    const searchPriorityGroups_official_words = defaultPriorityGroups()
    Object.keys(searchPriorityGroups).forEach(group => {
      searchPriorityGroups[group].forEach(def => {
        if (isCoreWord(def)) searchPriorityGroups_official_words[group].push(def)
        else searchPriorityGroups_unofficial_words[group].push(def)
      })
    })
    firstMatches = secupra_vreji.concat(searchPriorityGroups.wordFullMatch, searchPriorityGroups.wordFullMatchAdditional)
    secondMatches = [].concat(
      searchPriorityGroups_official_words.glossMatch,
      searchPriorityGroups_unofficial_words.glossMatch,
      searchPriorityGroups_official_words.selmahoFullMatch,
      searchPriorityGroups_unofficial_words.selmahoFullMatch,
      searchPriorityGroups.oneOfSelmahosFullMatch,
      searchPriorityGroups.rafsiMatch,
      searchPriorityGroups_official_words.wordSemiMatch,
      searchPriorityGroups_unofficial_words.wordSemiMatch,
      searchPriorityGroups_official_words.glossSemiMatch,
      searchPriorityGroups_unofficial_words.glossSemiMatch,
      searchPriorityGroups_official_words.defGoodMatch,
      searchPriorityGroups_unofficial_words.defGoodMatch,
      searchPriorityGroups_official_words.defInsideMatch,
      searchPriorityGroups_unofficial_words.defInsideMatch,
      searchPriorityGroups_official_words.otherMatch,
      searchPriorityGroups_unofficial_words.otherMatch,
    )
  } else if (seskari === 'cnano') {
    firstMatches = secupra_vreji.concat(searchPriorityGroups.wordFullMatch, searchPriorityGroups.wordFullMatchAdditional, searchPriorityGroups.glossMatch)
    secondMatches = [].concat(
      searchPriorityGroups.selmahoFullMatch,
      searchPriorityGroups.oneOfSelmahosFullMatch,
      searchPriorityGroups.rafsiMatch,
      searchPriorityGroups.wordSemiMatch,
      searchPriorityGroups.glossSemiMatch,
      searchPriorityGroups.defGoodMatch,
      searchPriorityGroups.defInsideMatch,
      searchPriorityGroups.otherMatch,
    )
  } else {
    firstMatches = secupra_vreji.concat(searchPriorityGroups.wordFullMatch, searchPriorityGroups.wordFullMatchAdditional, searchPriorityGroups.glossMatch)
    secondMatches = [].concat(
      searchPriorityGroups.selmahoFullMatch,
      searchPriorityGroups.oneOfSelmahosFullMatch,
      searchPriorityGroups.rafsiMatch,
      searchPriorityGroups.wordSemiMatch,
      searchPriorityGroups.glossSemiMatch,
      searchPriorityGroups.defGoodMatch,
      searchPriorityGroups.defInsideMatch,
      searchPriorityGroups.otherMatch,
    )
  }
  // if (firstMatches && firstMatches.w === query_apos) {
  //   for (let a = 1; a < firstMatches.length; a++) {
  //     if (firstMatches[a].l && firstMatches[a].d === `{${query_apos}}`) {
  //       firstMatches.splice(a, 1)
  //       --a
  //     }
  //   }
  // }
  return {
    result: [firstMatches.concat(secondMatches), firstMatches, secondMatches],
    decomposed,
  }
}

async function sisku(searching, callback) {
  const { query, seskari, bangu, versio, leijufra: leijufra_incoming, loadingState } = searching
  if (loadingState.loading) await db.open()

  if (!leijufra.bangu) {
    const tef1 = (await db.tejufra.where({ bangu: bangu.toString() }).toArray())[0] || {}
    if (tef1 && tef1.jufra) Object.keys(tef1.jufra.window || {}).forEach((key) => {
      const subKey = key.replace('window.', '')
      leijufra[subKey] = tef1.jufra.window[key]
    })
  }
  leijufra = { ...leijufra, ...leijufra_incoming }
  if (query.length === 0) return
  let secupra_vreji = []
  const query_apos = query.replace(/[h‘]/g, "'").toLowerCase()
  const queryDecomposition = decompose(query_apos)

  if (query.indexOf('^') === 0 || query.slice(-1) === '$') {
    const first1000 = (
      await db.valsi
        .where('bangu')
        .equals(bangu)
        .filter((valsi) => valsi.w.match(query.toLowerCase()))
        .distinct()
        .toArray()
    ).slice(0, 1000)
    secupra_vreji = julne_setca_lotcila(
      (
        await sortthem({
          query_apos,
          query,
          bangu,
          mapti_vreji: first1000,
          multi: false,
          seskari,
          secupra_vreji: [],
        })
      ).result[0]
    )
  } else if (seskari === 'rimni') {
    secupra_vreji = await siskurimni({ query, bangu })
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
        t: 'bangudecomp',
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
  callback({ results: secupra_vreji })
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
        .where({ bangu })
        .and((valsi) => {
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
      .where({ bangu })
      .and((valsi) => {
        if (krulermorna(valsi.w).match(`${query_apos.toLowerCase()}$`))
          return true
        return false
      })
      .toArray()
  }
  return cupra_lo_porsi(r)
}
