//imports:
import io from 'socket.io-client';
import { initBackend } from './asql/indexeddb-main-thread.js'
import patchDOM from 'morphdom'
import arrowCreate, { HEAD } from 'arrows-svg'

//DOM element vars:
const content = document.getElementById('content')
const ciska = document.getElementById('ciska')
const clear = document.getElementById('clear')
const rectu = document.getElementById('rectu')
const descr = document.getElementById('descr')
const drata = document.getElementById('drata')
const citri = document.getElementById('citri')
const sidju = document.getElementById('sidju')
const pb = document.getElementById('kernelo_lo_cpacu')
const dasri = document.getElementById('galtu-dasri')
const catni = document.getElementById('catni')
const cnano = document.getElementById('cnano')
const rimni = document.getElementById('rimni')
// var arxivo = document.getElementById("arxivo");
const btnScrollToTop = document.getElementById('scrollToTop')
const audio = document.querySelector('#audio')
const loading = document.getElementById('loading')
const modalWindow = document.getElementById('jsModal')

// generic vars:
window.leijufra = { custom_links: [] }
const modes = ['velcusku', 'arxivo', 'cnano', 'rimni', 'catni', 'fanva']
const supportedLangs = {
  en: { n: 'English', zbalermorna_defined: true, semanticSearchPossible: true },
  muplis: { n: 'la muplis' },
  'en-cll': { n: 'The Book' },
  'en-pixra': { n: '🎨🖼️📸', pictureDictionary: true },
  'en-ll': { n: 'Learn Lojban' },
  jbo: { n: 'lojbo' },
  ru: { n: 'русский' },
  eo: { n: 'esperanto' },
  es: { n: 'español' },
  'fr-facile': { n: 'français' },
  ja: { n: '日本語' },
  zh: { n: '中文' },
  loglan: { n: 'Loglan' },
}

const listFamymaho = {
  GA: 'gi',
  GUhA: 'gi',
  BE: "bei be'o",
  BEI: "be'o",
  BY: 'boi',
  COI: "do'u",
  DOI: "do'u",
  FIhO: "fe'u",
  FUhE: "fu'o",
  GIhA: 'vau',
  GOI: "ge'u",
  JOhI: "te'u",
  KE: "ke'e",
  LAhE: "lu'u",
  LA: 'ku',
  LE: 'ku',
  LI: "lo'o",
  LOhU: "le'u",
  LU: "li'u",
  ME: "me'u",
  'NAhE+BO': "lu'u",
  NOI: "ku'o",
  NUhI: "nu'u",
  NU: 'kei',
  PA: 'boi',
  PEhO: "ku'e",
  SEI: "se'u",
  SOI: "se'u",
  TO: 'toi',
  TUhE: "tu'u",
  VEI: "ve'o",
  LOhAI: "sa'ai",
  SAhAI: "le'ai",
  LOhOI: "ku'au",
  NAhU: "te'u",
  NIhE: "te'u",
  MOhE: "te'u",
}
let resultCount

//search after timeout
let typingTimer
//prepare:
let cacheObj
let state = {
  searching: {
    seskari: 'cnano',
    versio: 'masno',
    query: '',
    bangu: 'en',
  },
  displaying: {
    seskari: 'cnano',
    versio: 'masno',
    query: '',
    bangu: 'en',
  },
  citri: [],
  jvoPlumbsOn: true,
  results: [],
  embeddings: [],
  memoizedValues: {},
}
const loadingState = {
  loading: true,
  firstRun: true,
  mathRendered: false,
  localesLoaded: false,
}

try {
  const jvoPlumbsOn = localStorage.getItem('jvoPlumbsOn')
  if (jvoPlumbsOn === 'false') state.jvoPlumbsOn = false
} catch (error) {}

try {
  const tcini = JSON.parse(localStorage.getItem('tcini'))
  if (tcini && tcini.seskari)
    setState({ searching: { seskari: tcini.seskari } })
  if (tcini && tcini.versio) setState({ searching: { versio: tcini.versio } })
  // if (tcini.query) state.searching.query = tcini.query
  if (tcini && tcini.bangu) setState({ searching: { bangu: tcini.bangu } })
} catch (error) {}

setState({ citri: macitri() })

const timers = {
  vh: null,
  typing: null,
}

let scrollTimer = null
let scrollJvoTimer = null

const UNICODE_START = 0xed80
const lerfu_index = "ptkflscmx.' 1234bdgvrzjn`-,~    aeiouy    qw    AEIOUY"

//<xuzganalojudri|lojbo>
//pronunciation guide
const rows = [
  [
    'a<b>p</b>a',
    'a<b>t</b>a',
    'a<b>k</b>a',
    'a<b>f</b>a',
    'a<b>s</b>a',
    'a<b>c</b>a',
  ],
  [
    'a<b>b</b>a',
    'a<b>d</b>a',
    'a<b>g</b>a',
    'a<b>v</b>a',
    'a<b>z</b>a',
    'a<b>j</b>a',
  ],
  [
    'a<b>m</b>a',
    'a<b>l</b>a',
    'a<b>n</b>a',
    'a<b>r</b>a',
    ,
    'a<b>x</b>a',
    "a<b>'</b>a",
  ],
  ['a', 'e', 'i', 'o', 'u', 'y'],
  [],
  ['aia', 'aua'],
  ['au', 'ai', 'ei', 'oi'],
]
//</xuzganalojudri|lojbo>
let socket, socket1Chat, socket1Chat_connected
ciska.focus()

const pollyParams = {
  IdentityPoolId: 'us-east-1:35da84f8-d67e-4977-b07d-37650808ea00',
  region: 'us-east-1',
  VoiceId: 'Vicki',
  LanguageCode: 'de-DE',
  Engine: 'neural',
  lojban2IPAMapping: {
    '«': '',
    '-': '.',
    '»': '',
    '\\?': '',
    ',': '',
    '\\.': 'ʔ',
    ' ': ' ',
    ˈ: 'ˈ',
    a: 'aː',
    "a\\b(?!')": 'aː',
    e: 'ɛ:',
    "e\\b(?!')": 'ɛ:ʔ',
    i: 'i:',
    o: 'ɔ:',
    u: 'u:',
    y: 'ə',
    ą: 'aj',
    ę: 'ɛj',
    "ę\\b(?!')": 'ɛjʔ',
    ǫ: 'ɔj',
    ḁ: 'aʊ',
    ɩa: 'jaː',
    ɩe: 'jɛ:',
    ɩi: 'ji:',
    ɩo: 'jɔ:',
    ɩu: 'ju:',
    ɩy: 'jə',
    ɩ: 'j',
    wa: 'waː',
    we: 'wɛ:',
    wi: 'wi:',
    wo: 'wɔ:',
    wu: 'wu:',
    wy: 'wə',
    w: 'w',
    c: 'ʃ',
    j: 'ʒ',
    s: 's',
    z: 'z',
    f: 'f',
    ev: 'ɛ:ʔv',
    v: 'v',
    x: 'x',
    "'": 'h',
    dj: 'dʒ',
    tc: 'tʃ',
    dz: 'ʣ',
    ts: 'ʦ',
    'r(?=[^aeiouyḁąęǫ])': 'rr.',
    'r(?=[aeiouyḁąęǫ])': 'ɹ',
    n: 'n',
    m: 'm',
    l: 'l',
    b: 'b',
    d: 'd',
    g: 'g',
    k: 'k',
    p: 'p',
    t: 't',
    h: 'h',
  },
}
window.pollyParams = pollyParams

let audioParams
try {
  audioParams = JSON.parse(localStorage.getItem(`audioParams`))
} catch (error) {}

if (audioParams && audioParams.IdentityPoolId) {
  window.pollyParams = audioParams
} else {
  localStorage.setItem(`audioParams`, JSON.stringify(window.pollyParams))
}

window.delay = (() => (callback, ms, timer) => {
  clearTimeout(timers[timer])
  timers[timer] = setTimeout(callback, ms)
})()

async function getCacheObject() {
  if (!cacheObj) cacheObj = await caches.open('sutysisku')
  return cacheObj
}

//commands:

const worker = new Worker('worker.js?sisku={{now}}')
initBackend(worker)

try {
  setStateFromUrl({
    replace: true,
  })
} catch (error) {}

patchDOMCitri()
calcVH()
let polly = PollyPlayer(window.pollyParams)
//listeners:
citri.addEventListener('click', clicked) //clicked link > push it
window.addEventListener('popstate', setStateFromUrl) //typed, stopped typing > push
ciska.addEventListener('paste', typing(0))
ciska.addEventListener('keyup', () => {
  typing()
})
ciska.addEventListener('keydown', () => {
  clearTimeout(typingTimer)
})
ciska.addEventListener('input', typing())
ciska.addEventListener('textInput', typing())
ciska.addEventListener('focus', focusSearch) //focus > push
clear.addEventListener('click', window.EmptyState)

cnano.addEventListener('click', () => {
  setState({
    searching: {
      ...state.displaying,
      seskari: 'cnano',
      versio: 'masno',
      query: plukaquery(ciska.value),
    },
  })

  DispatchState({
    replace: false,
  })
})

catni.addEventListener('click', () => {
  setState({
    searching: {
      ...state.displaying,
      seskari: 'catni',
      versio: 'masno',
      query: plukaquery(ciska.value),
    },
  })

  DispatchState({
    replace: false,
  })
})

rimni.addEventListener('click', () => {
  //change seskari
  setState({
    searching: {
      ...state.displaying,
      seskari: 'rimni',
      versio: 'masno',
      query: plukaquery(ciska.value),
    },
  })

  DispatchState({
    replace: false,
  })
})

window.addEventListener('resize', calcVH, true)
content.addEventListener('scroll', checkScrolledNearBottom)

if (document.attachEvent) {
  document.attachEvent('onkeyup', handler)
} else {
  document.addEventListener('keyup', handler)
}

window.applyNewPollyParams = function (input) {
  try {
    const json = {
      ...pollyParams,
      ...window.pollyParams,
      ...JSON.parse(input.value),
    }
    localStorage.setItem('audioParams', JSON.stringify(json))
    polly = PollyPlayer(json)
    localStorage.setItem('cachedAudio', null)
  } catch (error) {}
}

document.addEventListener(
  'keyup',
  function (event) {
    if (event.ctrlKey && event.key === 'ArrowDown') {
      openModal({
        children: [
          h('textarea', {
            id: 'modal__textarea',
            class: 'modal__textarea',
            name: 'textarea',
            rows: '10',
            onkeyup: window.applyNewPollyParams(this),
            innerText: JSON.stringify(window.pollyParams, null, 2),
          }),
          h('button', {
            onclick: resetAudioParams(
              document.getElementById('modal__textarea')
            ),
            innterText: 'Reset',
          }),
        ],
      })
    }
  },
  false
)

window.addEventListener('load', async () => {
  await fetchAndSaveCachedListValues({ mode: "co'a" })
  // if (!cacheIsFine) return

  // if (window.crossOriginIsolated) {
  console.log({ crossOriginIsolated: window.crossOriginIsolated })
  //check if our db is filled
  worker.postMessage({
    kind: 'fancu',
    cmene: 'ningau_lesorcu',
    ...state.searching,
  })
  updateLocales()
  // }

  // jimpe fi le jei su'o cnino sorcu ka'e se pilno ca lo nu jai gau akti fai le cnino papri
  if ('serviceWorker' in navigator) {
    // navigator.serviceWorker.addEventListener('controllerchange',
    //   function () {
    //     if (window.refreshing) return;
    //     window.refreshing = true;
    //     setTimeout(() => {
    //       window.location.reload();
    //     }, 2000)
    //   }
    // );
    // navigator.serviceWorker.addEventListener('message', event => {
    //   if (event.data.event === 'loading cache') {
    //     console.log(event.data);
    //   }
    // });
    // navigator.serviceWorker.onmessage = function ({ data }) {
    //   console.log(data);
    // if (data && data.teminde && data.teminde === "co'a jmina le vreji") {
    //   console.log('updating cache started')
    // } else if (data && data.teminde && data.teminde === "mo'u jmina le vreji") {
    //   console.log('updating cache done')
    //   window.location.reload()
    //   // worker.postMessage({
    //   //   kind: 'fancu',
    //   //   cmene: 'ningau_lerosorcu',
    //   //   ...state.searching,
    //   // })
    // }
    // }
    //   navigator.serviceWorker.register('./sw.js', {
    //     scope: './'
    //   }).then(
    //     function (registration) {
    //       // console.log("COOP/COEP Service Worker registered", registration.scope);
    //       // // If the registration is active, but it's not controlling the page
    //       // if (registration.active && !navigator.serviceWorker.controller) {
    //       //   window.location.reload();
    //       // }
    //     },
    //     (err) => {
    //       console.log('ServiceWorker registration failed: ', err)
    //     }
    //   )
  } else if (location.protocol === 'https:') {
    alert(
      "Your browser is not supported. Please, upgrade to the latest Chrome / Firefox / Safari and don't use the app in incognito / private browsing mode (it needs to save dictionary data to disk to work successfully)."
    )
  } else {
    alert("HTTP protocol, la sutysisku won't work.")
    console.log("http protocol, service worker won't work")
  }
})

//functions:
function showLoaded() {
  loadingState.loading = false
  delete loadingState.resultsHash
  h(loading, { 'update!': true, style: { display: 'none' } })
  document.getElementById('contentWrapper').style.paddingBottom = '0'
}

function showLoading({ completedRows, totalRows, innerText, hideProgress }) {
  h(loading, { 'update!': true, style: { display: 'inline-flex' } })
  document.getElementById('contentWrapper').style.paddingBottom = '28px'
  const cpacu = document.getElementById('cpacu')
  if (hideProgress) {
    h(cpacu, { 'update!': true, style: { display: 'none' } })
  } else {
    const percent = Math.min(
      100,
      Math.max(10, (parseFloat(completedRows) * 100) / parseFloat(totalRows))
    )
    h(cpacu, { 'update!': true, style: { display: 'block' } })
    pb.style.width = `${percent}%`
  }
  const bangu_loading = document.getElementById('bangu_loading')
  h(bangu_loading, {
    'update!': true,
    innerText,
    addClass: hideProgress ? 'simple' : null,
    removeClass: !hideProgress ? 'simple' : null,
  })
}

async function getOrFetchResource({ url }) {
  const match = await (await getCacheObject()).match(url)
  if (match) return true
  const response = await fetch(url)
  if (!response.ok) return false
  cacheObj.put(url, response)
  return true
}

async function fetchAndSaveCachedListValues({ mode }) {
  const cachedList = await getCachedListKeys()
  const initialCacheListLength = cachedList.length

  const response = await fetch(
    `/sutysisku/data/tcini.json?sisku=${new Date().getTime()}`
  )
  if (!response.ok) {
    if (initialCacheListLength === 0)
      alert("Are you offline? We can't fetch the source.")
    return false
  }
  const vreji = (await response.json()).vreji.map(
    (v) => new URL(v, window.location.origin + window.location.pathname).href
  )
  let cacheUpdated = false
  const cacheObj = await getCacheObject()
  for (let i = 0; i < vreji.length; i++) {
    const url = vreji[i]
    if (mode === "co'a" && !/((\.(js|wasm|html|css))|\/)$/.test(url)) continue
    const isInCache = await cacheObj.match(url)
    if (!isInCache) {
      await cacheObj.add(url)
      cacheUpdated = true
      if (mode === "co'a")
        showLoading({
          completedRows: i,
          totalRows: vreji.length,
          innerText: `📦 💾 📁 🛠️`,
        })
    }
  }

  for (const key of cachedList) {
    if (!vreji.includes(key.url)) {
      await cacheObj.delete(key.url, { ignoreMethod: true, ignoreVary: true })
      console.log({ event: 'removing cache', url: key.url })
    }
  }
  if (cacheUpdated) {
    for (const url of [
      new URL('', window.location.origin + window.location.pathname).href,
      new URL('index.html', window.location.origin + window.location.pathname)
        .href,
    ]) {
      await cacheObj.delete(url, { ignoreMethod: true, ignoreVary: true })
      await cacheObj.add(url)
      console.log({ event: 'adding cache', url })
    }
  }
  showLoaded()
  if (mode === "co'a" && cacheUpdated) {
    window.location.reload()
  }
  //  else if (!window.crossOriginIsolated) {
  //   alert("la sutysisku will likely not work. Please, use Chrome/Chromium browser.")
  //   return false
  // }
  return true
}

async function getCachedListKeys() {
  return await (await getCacheObject()).keys()
}

content.onscroll = () => {
  if (content.scrollTop > 200) {
    h(btnScrollToTop, {
      'update!': true,
      style: { display: 'block' },
    })
    h(btnScrollToTop, { 'update!': true, removeClass: 'dizlo' })
  } else {
    h(btnScrollToTop, { 'update!': true, addClass: 'dizlo' })
  }
}

window.switchBorderScroll = () => {
  if (content.scrollTop > 200) {
    content.scrollTop = 0
  } else {
    content.scrollTop = content.scrollHeight
  }
}

function macitri() {
  let citri = []
  try {
    return JSON.parse(localStorage.getItem('citri')) || citri
  } catch (error) {}
  return citri
}

function patchDOMCitri() {
  h(citri, {
    id: 'citri',
    class: 'citri',
    children: [
      h('span', {
        class: 'romoi_lehiseciska',
        innerText: state.citri.length > 0 ? window.leijufra.purc || '' : null,
      }),
      ...state.citri.map(({ seskari, versio, query, bangu }) => {
        if (seskari === 'velcusku') return null
        return h('a', {
          class: [`citrycmi`, `a-${versio !== 'masno' ? versio : seskari}`],
          attributes: {
            href: buildURLParams({
              seskari,
              versio,
              sisku: encodeUrl(query),
              bangu,
            }),
          },
          innerText: query,
        })
      }),
    ],
  })
}

function patchDOMRectu(tempState) {
  const { query: lastQuery, seskari } = tempState?.displaying || {}
  const cisn_default = 100
  const links = getDesktopTiles().map((elem) => {
    if (typeof elem === 'string') return h('div')
    const name = Object.keys(elem)[0]
    if (!elem[name].url) {
      elem[name].url = buildURLParams({
        seskari:
          seskari !== 'fanva' && name.indexOf('muplis') !== 0
            ? seskari
            : 'catni',
        sisku: encodeUrl(lastQuery),
        bangu: name,
        versio: 'masno',
      })
    } else {
      elem[name].url = elem[name].url.replace(
        /{lastQuery}/g,
        encodeUrl(lastQuery)
      )
    }
    elem = { ...elem[name], name }

    return tile({
      ...elem,
      isUrl: (elem.url || '').indexOf('http') === 0,
      height: (elem.height || 1) * cisn_default + 'px',
      width: (elem.width ?? 1) * cisn_default + 'px',
    })
  })
  h(rectu, {
    children: [
      h('div', {
        id: 'drata',
        children: links,
        style: { display: 'block', 'text-align': 'center' },
      }),
      h('div', {
        id: 'descr',
        children: [
          h('div', {
            class: ['term', 'termouter'],
            innerHTML: window.leijufra.bangudesc,
          }),
          h('div', {
            class: ['term', 'termouter'],
            children: [
              h('h1', {
                id: 'pronunciation',
                style: { 'font-weight': 'bold' },
                children: h('span', { innerText: window.leijufra.pron_guide }),
              }),
              h('div', {
                innerText:
                  ". , a b c d e f g ' i j k l m n o p r s t u v x y z",
              }),
              h('div', {
                id: 'table',
                children: h('table', {
                  class: 'centero',
                  children: rows.map((row) =>
                    h('tr', {
                      children: row.map((col) =>
                        h('td', {
                          children: h('button', {
                            innerHTML: col,
                            class: 'bangu',
                            onclick: () => {
                              play(
                                `/sutysisku/sance/lerfu/${encodeURIComponent(
                                  col.replace(/.*<b>(.*?)<\/b>.*/g, '$1')
                                )}.ogg`
                              )
                            },
                          }),
                        })
                      ),
                    })
                  ),
                }),
              }),
              h('audio', { id: 'audio' }),
            ],
          }),
        ],
      }),
      h('div', { id: 'outp' }),
    ],
  })
}

function patchDOMDasri(customState) {
  if (!window.leijufra.bangu) return
  const seskari = customState?.displaying?.seskari ?? 'cnano'
  h(dasri, {
    id: 'galtu-dasri',
    class: ['kampu-dasri', `${seskari}-dasri`, 'noselect'],
    children: h('form', {
      id: 'se-vasru-lo-galtu-dasri',
      onsubmit: 'return false',
      attributes: { novalidate: true },
      children: [
        h('div', {
          innerHTML: window.leijufra.titlelogo,
        }),
        h('div', { id: 'kicne1' }),
        h('input', {
          attributes: {
            'aria-label': window.leijufra.cnano,
            required: true,
          },
          placeholder: window.leijufra.bangusisku,
          autocorrect: 'off',
          autocapitalize: 'off',
          autocomplete: 'false',
          id: 'ciska',
          type: 'text',
          name: 'focus',
          value: customState?.displaying?.query ?? '',
        }),
        h('button', {
          attributes: { 'aria-label': 'clear' },
          id: 'clear',
          type: 'reset',
        }),
      ],
    }),
  })
  h(dasri.querySelector('#site-title'), {
    'update!': true,
    class: `${
      customState.searching.query === '' ? `desktop` : `${seskari}-search`
    }-mode-title-color`,
  })
  if (['rimni'].includes(seskari))
    dasri
      .querySelectorAll('#title > img')
      .forEach((el) =>
        h(el, { 'update!': true, style: { filter: 'sepia(}1.0)' } })
      )
}

function patchDOMBody(miniState) {
  const displaying = miniState?.displaying ?? {}
  const isMuplis = displaying.bangu === 'muplis'
  h(document.getElementById('leitutci'), {
    style: { display: isMuplis ? 'none' : 'flex' },
    id: 'leitutci',
    class: 'xp-btn-list',
    children: ['catni', 'cnano', 'rimni'].map((el) =>
      h('button', {
        class: [
          'xp-btn',
          'ralju-tutci',
          ...(displaying.seskari === el
            ? [`${displaying.seskari}-tutci-hover`, 'tutci-hover']
            : []),
        ],
        id: el,
        innerText: window.leijufra[el],
      })
    ),
  })
  h(document.body, {
    'update!': true,
    class: isMuplis ? 'body-muplis' : 'body-sutysisku',
  })
}

function RenderOperatingWidgets(miniState = state) {
  patchDOMBody(miniState)
  patchDOMDasri(miniState)
  DispatchCitri()
  patchDOMCitri()
}

function SwitchRotation({ action, quick }) {
  if (document.readyState !== 'complete') return
  const els = ['logo']
  if (action === 'start') {
    els.forEach((el) =>
      h(document.getElementById(el), {
        'update!': true,
        addClass: 'rotate',
        removeClass: 'stopRotate',
      })
    )
    h(clear, { 'update!': true, addClass: 'pulsate-css' })
    setTimeout(
      () => {
        if (clear.classList.contains('pulsate-css'))
          h(ciska, { 'update!': true, addClass: 'granim-css' })
      },
      quick ? 100 : 500
    )
  } else {
    els.forEach((el) =>
      h(document.getElementById(el), {
        'update!': true,
        addClass: ['stopRotate'],
      })
    )
    h(clear, { 'update!': true, removeClass: 'pulsate-css' })
    h(ciska, { 'update!': true, removeClass: 'granim-css' })
  }
}

function EmitVelcusku() {
  // if (socket1Chat) socket1Chat.open()
}

async function RenderResults({ query, seskari, bangu, versio }) {
  if (loadingState.loading) {
    const currentHash = buildURLParams({
      query,
      seskari,
      bangu,
      len: state.results.length,
    })
    if (
      state.displaying.query !== '' &&
      loadingState.resultsHash === currentHash
    )
      return
    loadingState.resultsHash = currentHash
  }

  await skicu_roledovalsi({
    query,
    seskari,
    bangu,
    versio,
  })
  content.scrollTop = 0

  setState({
    displaying: {
      ...state.displaying,
      query,
      versio,
      seskari,
      bangu,
    },
  })

  RenderOperatingWidgets()

  gtag('event', 'page_view', {
    page_title: state.displaying.query,
    page_location: `#sisku/${state.displaying.query}`,
    page_path: `#sisku/${state.displaying.query}`,
    send_to: `{{GA_MEASUREMENT_ID}}`,
  })
  const pageViewData = {
    dl: window.location.href,
    dt: document.title,
    dr: document.referrer,
    dp: `#sisku/${state.displaying.query}`,
    dh: `${window.location.protocol}//${window.location.hostname}`,
    z: Math.round(Math.random() * 1e12),
  }
  if (socket) socket.emit('sisku', pageViewData)
}

function addArrow(arrow, { color, root = document.body }) {
  arrow.node.firstChild
    .querySelectorAll('.arrow__path')
    .forEach((el) => h(el, { 'update!': true, style: { stroke: color } }))
  arrow.node.firstChild
    .querySelectorAll('.arrow__head line')
    .forEach((el) => h(el, { 'update!': true, style: { stroke: color } }))
  h(root, { 'update!': true, appendChildren: arrow.node })
}

function removePlumbs(root = document.body) {
  root
    .querySelectorAll('.arrow')
    .forEach((element) => element.parentNode.removeChild(element))
}

function setNewState(key, value) {
  state[key] = value
  localStorage.setItem(key, value)
}

function addJvoPlumbs(force, root = document.body) {
  scrollJvoTimer = setTimeout(
    () => {
      removePlumbs(root)
      addPlumbs(root)
      if (force !== true) {
        setNewState('jvoPlumbsOn', !state.jvoPlumbsOn)
        const plumbers = root.getElementsByClassName('jvo_plumber')
        for (const plumber of plumbers) {
          state.jvoPlumbsOn
            ? h(plumber, { 'update!': true, addClass: 'tutci-hover' })
            : h(plumber, { 'update!': true, removeClass: 'tutci-hover' })
        }
      }
      if (!state.jvoPlumbsOn) return
      const targetedEls = Array.from(root.querySelectorAll('[data-arr]'))
      for (
        let targetedElIndex = 0;
        targetedElIndex < targetedEls.length;
        targetedElIndex++
      ) {
        const target = targetedEls[targetedElIndex]
        const targetVeljvoElements =
          target.attributes['data-arr'].nodeValue.split(',')
        const targetIdComponents = target.id.split('_')
        const targetFinalIndex = targetIdComponents.slice(0, -1)
        const WeCanSeeThisElement = kahe_sezgana(target)
        targetedEls.filter((startElement) => {
          const startElIdComponents = startElement.id.split('_')
          const startElFinalIndexes = startElIdComponents.slice(0, -2)
          const startElVeljvoElements =
            startElement.attributes['data-arr'].nodeValue.split(',')
          const startVeljvoElementComponents =
            startElVeljvoElements[0].split(/(?=[0-9]+)/)
          if (
            startElVeljvoElements.length === 1 &&
            startElFinalIndexes.length === targetFinalIndex.length &&
            startElFinalIndexes.join('_') === targetFinalIndex.join('_') &&
            targetVeljvoElements.filter((targetVeljvoElement) => {
              const targetVeljvoElementComponents =
                targetVeljvoElement.split(/(?=[0-9])/)
              return (
                startVeljvoElementComponents[0].indexOf(
                  targetVeljvoElementComponents[0]
                ) === 0 &&
                startVeljvoElementComponents[1] ===
                  targetVeljvoElementComponents[1]
              )
            }).length > 0 &&
            (WeCanSeeThisElement || kahe_sezgana(startElement))
          ) {
            let color = startElement.attributes['data-color'].nodeValue
            color = `hsla(${color},100%,70%,0.62)`

            const arrow = arrowCreate({
              from: startElement,
              to: target,
              head: { func: HEAD.THIN, size: 5 },
            })

            addArrow(arrow, { color })
          }
        })
      }
    },
    force === true ? 450 : 0
  )
}

function addPlumbs(root = document.body) {
  //plumbs for in-terbri interactions
  root.querySelectorAll('[data-target]').forEach((target) => {
    if (kahe_sezgana(target)) {
      const start = target.attributes['data-target'].nodeValue
      const color =
        root.getElementById(start).attributes['data-color'].nodeValue
      color = `hsla(${color},100%,70%,0.62)`
      const arrow = arrowCreate({
        from: start,
        to: target,
        head: { func: HEAD.THIN, size: 5 },
      })

      addArrow(arrow, { color, root })
    }
  })
}

function kahe_sezgana(el) {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 42 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function twoJsonsAreEqual(obj1 = {}, obj2 = {}) {
  let flag = true

  if (Object.keys(obj1).length == Object.keys(obj2).length) {
    for (const key in obj1) {
      if (obj1[key] == obj2[key]) {
        continue
      } else {
        flag = false
        break
      }
    }
  } else {
    flag = false
  }
  return flag
}
//listeners
worker.onmessage = (ev) => {
  const { data } = ev
  const { kind, cmene } = data
  if (kind == 'searchResults') {
    delete loadingState.searching
    if (!data.force && !twoJsonsAreEqual(data.req, state.searching)) return
    setState({
      results: data.results || [],
      embeddings: data.embeddings || [],
      memoizedValues: {},
    })
    if (data.lei_jufra_absent) {
      updateDOMWithLocales(
        data.leijufra,
        mergeJSONs(state, { searching: data.datni })
      )
    }
    RenderResults({
      ...data.req,
    })
  } else if (kind == 'parse' && data.req && data.req.operation == 'audioLink') {
    let word = (data.req.tegerna || '').replace(/"/g, '')
    if (!word) return
    const encodedWord = encodeValsiForWeb(word)
    data.results = data.results.map((i) => [i[0], i[1].replace(/-/g, '')])
    const isReliableText = allAreSafeWords(data.results, {
      queryLanguage: data.req.queryLanguage,
      allowCmavo: true,
      allowCmevla: true,
    })

    if (!isReliableText) return
    word = data.results.map((i) => i[1]).join(' ')

    const hd = Array.from(
      document.querySelectorAll(`[data-valsi="${encodedWord}"]`)
    )[0]
    const hd2 = Array.from(
      document.querySelectorAll(`[data-valsi-play="${encodedWord}"]`)
    )[0]
    // if (hd && !hd2) {
    //   try {
    //     const gotAudio = window.runSpeakableAudio(
    //       word,
    //       true,
    //       data.req.queryLanguage
    //     )
    //     if (gotAudio)
    //       hd.appendChild(
    //         h('button', {
    //           class: ['tutci-blanu'],
    //           attributes: { 'data-valsi-play': encodedWord },
    //           onclick: () => window.runSpeakableAudio(word),
    //           children: h('img', { src: '../pixra/sance.svg' }),
    //         })
    //       )
    //   } catch (error) {}
    // }
  } else if (kind == 'loader') {
    if (cmene === 'loading') {
      if (
        data.banguRaw === state.searching.bangu ||
        data.completedRows === 0 ||
        data.completedRows === data.totalRows
      ) {
        if (
          data.completedRows === data.totalRows ||
          !twoJsonsAreEqual(loadingState.searching, state.searching)
        ) {
          loadingState.searching = state.searching
          loadingState.loading = true
          worker.postMessage({
            kind: 'newSearch',
            versio: 'masno',
            ...state.searching,
            leijufra: window.leijufra,
            loadingState,
          })
        }
      }
      showLoading({
        completedRows: data.completedRows,
        totalRows: data.totalRows,
        innerText: '🗃️ ' + (supportedLangs[data.bangu]?.n ?? data.bangu),
      })
    } else if (cmene === 'loaded') {
      fetchAndSaveCachedListValues({ mode: "ca'o" })
    } else if (cmene === 'booting') {
      showLoading({
        completedRows: 1,
        totalRows: 3,
        innerText: '🗃️ ' + (window.leijufra.booting || ''),
      })
    }
    calcVH()
  } else if (kind == 'fancu') {
    switch (cmene) {
      case 'sanji_letejufra':
        updateDOMWithLocales(
          data.results,
          mergeJSONs(state, { searching: data.datni })
        )
        break
      default:
        console.log({ event: 'from the worker', message: data.results })
    }
  }
}

if (socket)
  socket.on('la_arxivo_cu_cusku', ({ seskari, query, message }) => {
    if (
      state.searching.seskari === seskari &&
      state.searching.query === query
    ) {
      setState({ results: message || [] })
      RenderResults({
        query: query,
        seskari: seskari,
      })
    }
  })

//loaded doc > from url > push new seskari/query, update url
//get events:
function parseQuery(queryString) {
  if (queryString === '') return
  const query = {}
  let pairs = ''
  //legacy support:
  if (queryString.search(/^#sisku\//) === 0) {
    pairs = [queryString.replace(/#sisku\/(.*)/, 'sisku=$1')]
  } else {
    pairs = (
      queryString[0] === '#' ? queryString.substr(1) : queryString
    ).split('&')
  }
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=')
    if (pair[1])
      query[decodeURIComponent(pair[0])] = decodeURIComponent(
        pair[1].replace(/[\+]/g, ' ') || ''
      )
  }
  return query
}

function setStateFromUrl({ href, replace }) {
  if (href) {
    href = href.substring(href.indexOf('#') + 1)
    localStorage.setItem('url', `#${href}`)
  }
  let params = parseQuery(href || window.location.hash) || {}
  let newSearch
  if (params && params['sisku']) {
    newSearch = decodeUrl(params['sisku'])
  } else {
    href = href || window.location.search
    href = href.substring(href.indexOf('?') + 1)
    const search = new URLSearchParams(href)
    newSearch = decodeUrl(search.get('focus') || '')
    if (newSearch) {
      params = { sisku: newSearch, seskari: 'cnano' }
    }
  }
  const stateToUpdate = { ...state.searching }
  if (
    params['seskari'] &&
    ['velcusku', 'cnano', 'catni', 'rimni', 'arxivo', 'fanva'].includes(
      params['seskari']
    )
  ) {
    stateToUpdate.seskari = params['seskari']
  }
  stateToUpdate.versio = 'masno'
  if (params['versio'] && ['selmaho'].includes(params['versio'])) {
    stateToUpdate.versio = params['versio']
  }
  if (
    params['bangu'] &&
    Object.keys(supportedLangs).includes(params['bangu'])
  ) {
    stateToUpdate.bangu = params['bangu']
  }
  if (params['sisku']) {
    stateToUpdate.query = newSearch
  }
  if (!twoJsonsAreEqual(stateToUpdate, state.searching)) {
    setState({ searching: { ...state.searching, ...stateToUpdate } })
    DispatchState({
      replace,
    })
  }
}

function clicked({ target }) {
  if (target.nodeName === 'A') {
    const el = target
    if (el.ctrlKey || el.metaKey) return
    setStateFromUrl({
      replace: false,
      href: el.getAttribute('href'),
    })
  }
  return
}

function setUrlFromState({ replace }) {
  let versio = ''
  if (state.searching.versio) {
    versio = `&versio=${state.searching.versio}`
  }
  let url =
    `${window.location.href.split('?')[0].split('#')[0]}` +
    buildURLParams({
      seskari: state.searching.seskari,
      sisku: encodeUrl(state.searching.query),
      bangu: state.searching.bangu,
      versio,
    })
  if (state.searching.query === '') {
    url = ''
    document.title = 'la sutysisku'
  } else {
    document.title = `${state.searching.query} - la sutysisku`
  }
  const lastUrl = localStorage.getItem('url') || ''
  if (replace === true) {
    window.history.replaceState({}, null, url)
  } else if (window.location.hash !== url && lastUrl !== url) {
    window.history.pushState({}, null, url)
  }
  localStorage.setItem('url', url)
}

function GetCiskaAndDispatch() {
  setState({ searching: { query: plukaquery(ciska.value) } })
  DispatchState({
    caller: 'GetCiskaAndDispatch',
  })
}

function typing(timeout) {
  clearTimeout(typingTimer)
  const defaultTimeout = 250
  if (state.searching.bangu === 'muplis') timeout = 500
  if (state.searching.versio === 'selmaho')
    setState({
      searching: { ...state.searching, seskari: 'catni', versio: 'masno' },
    })
  typingTimer = setTimeout(
    GetCiskaAndDispatch,
    timeout ? timeout : defaultTimeout
  )
}

function focusSearch() {
  // if (loadingState.firstRun) {
  //   loadingState.firstRun = false
  //   return
  // }
  setState({ searching: { query: plukaquery(ciska.value) } })
  DispatchState({ quickRotation: true })
}

window.EmptyState = (bangu) => {
  ciska.blur()
  if (typeof bangu === 'string') {
    setState({ searching: { bangu } })
    updateLocales()
  }
  DispatchState({
    empty: true,
  })
  if (state.ninynaha) {
    try {
      document.getElementById('pyro').remove()
    } catch (error) {}
    if (Math.random() > 0.618) {
      document
        .getElementById('site-title')
        .insertAdjacentHTML('afterend', '<div id="pyro" class="pyro"></div>')
      setTimeout(() => {
        try {
          document.getElementById('pyro').remove()
        } catch (error) {}
      }, 3000)
    }
  }
}

document
  .getElementById('report_feedback_main')
  .addEventListener('click', function () {
    window.tmp_value = state.displaying
    openModal({
      children: [
        h('h2', { innerText: window.leijufra.report_feedback }),
        h('h3', {
          class: 'valsi',
          innerText: supportedLangs[state.displaying.bangu].n,
        }),
        h('h4', { class: 'valsi', innerText: state.displaying.query }),
        h('textarea', {
          id: 'modal__textarea',
          class: 'modal__textarea',
          rows: '10',
          placeholder: window.leijufra.report_feedback_description,
        }),
        h('button', {
          class: 'xp-btn',
          onclick: `
              document
                .getElementById('feedback-spinner')
                .classList.remove('d-none')
            window.send_feedback({
              state: window.tmp_value,
              comment: document.getElementById('modal__textarea').value,
            })`,
          children: [
            h('div', { id: 'feedback-spinner', class: 'spinner d-none' }),
          ],
          innerText: window.leijufra.report_feedback,
        }),
      ],
    })
  })
// document.getElementById("arxivo").addEventListener("click", function () {
//   state.searching = {
//     seskari: "arxivo",
//     query: plukaquery(ciska.value)
//   };
//   DispatchState({
//     replace: false
//   });
// });

// document.getElementById("velcusku").addEventListener("click", function () {
//   state.searching = {
//     seskari: "velcusku",
//     query: plukaquery(ciska.value)
//   };
//   DispatchState({
//     replace: false
//   });
// });

function DispatchCitri() {
  if (
    ['fanva', 'velcusku'].includes(state.displaying.seskari) ||
    state.displaying.query === ''
  )
    return
  let i = 0
  for (i = 0; i < state.citri.length; i++) {
    if (
      state.citri[i].query === state.displaying.query &&
      state.citri[i].seskari === state.displaying.seskari
    ) {
      state.citri.splice(i, 1)
      break
    }
  }
  state.citri.unshift({ ...state.displaying })
  if (state.citri.length > 10) setState({ citri: state.citri.slice(0, 10) })
  localStorage.setItem('citri', JSON.stringify(state.citri))
}
//Dispatch State
function mergeJSONs(from, b) {
  return Object.entries(b).reduce((being_baked, [k, v]) => {
    if (typeof v !== 'undefined')
      being_baked[k] = Array.isArray(v)
        ? v
        : typeof v === 'object'
        ? mergeJSONs(
            (being_baked[k] = being_baked[k] || (Array.isArray(v) ? [] : {})),
            v
          )
        : v
    return being_baked
  }, JSON.parse(JSON.stringify(from)))
}

function setState(newState) {
  state = mergeJSONs(state, newState)
  if (!modes.includes(state.searching.seskari))
    state.searching.seskari = 'cnano'
  if (!modes.includes(state.displaying.seskari))
    state.displaying.seskari = 'cnano'
}

function DispatchState({ replace, caller, empty, quickRotation }) {
  updateLocales()
  // if (socket1Chat) socket1Chat.close()
  setUrlFromState({
    replace,
  })
  localStorage.setItem('tcini', JSON.stringify(state.searching))
  if (empty == true) {
    setState({ searching: { query: '' } })
    return RenderDesktop(state)
  } else if (state.searching.seskari !== 'velcusku') {
    if (state.searching.query === '') return RenderDesktop(state)
    if (twoJsonsAreEqual(state.searching, state.displaying)) return
  }
  //emit search
  ciska.value = state.searching.query

  SwitchRotation({
    action: 'start',
    quick: quickRotation,
  })
  if (
    caller === 'GetCiskaAndDispatch' &&
    state.searching.seskari === 'velcusku'
  )
    setState({ searching: { seskari: 'cnano' } })
  switch (state.searching.seskari) {
    case 'arxivo':
      const json = { ...state.searching }
      if (
        state.searching.query.charAt(0) !== '^' &&
        state.searching.query.slice(-1)[0] !== '$'
      )
        json.query = `\\b${state.searching.query}\\b`
      json.max = 20
      if (socket) socket.emit('cpedu_fi_la_arxivo', json)
      break
    case 'velcusku':
      EmitVelcusku()
      break
    default:
      if (loadingState.loading)
        worker.postMessage({
          kind: 'fancu',
          cmene: 'cnino_bangu',
          ...state.searching,
        })
      worker.postMessage({
        kind: 'newSearch',
        versio: 'masno',
        ...state.searching,
        leijufra: window.leijufra,
        loadingState,
      })
  }
}

function updateDOMWithLocales(jufra, customState) {
  if (!jufra) return
  loadingState.localesLoaded = true
  window.leijufra = { ...window.leijufra, ...jufra }

  Array.from(document.querySelectorAll('[data-jufra]')).forEach((node) => {
    const key = node.attributes['data-jufra'].nodeValue
    const val = jufra[key]
    if (val)
      switch (node.nodeName) {
        case 'INPUT':
          node.placeholder = val
          break
        default:
          node.innerHTML = val
      }
  })
  RenderOperatingWidgets(customState)
  if (state.displaying.query === '') RenderDesktop(customState)
  const velsku = document.getElementById('velsku_sebenji')
  if (velsku)
    velsku.href = buildURLParams({
      seskari: 'cnano',
      sisku: 'lai jbosnu',
      bangu: getStateBangu(),
      versio: 'masno',
    })
}

function updateLocales(force) {
  if (
    (state.searching.bangu &&
      state.searching.bangu !== state.displaying.bangu) ||
    !loadingState.localesLoaded ||
    force
  )
    worker.postMessage({
      kind: 'fancu',
      cmene: 'sanji_letejufra',
      ...state.searching,
    })
}

function getDesktopTiles() {
  return JSON.parse(JSON.stringify(window.leijufra.custom_links)).concat([
    'hr',
    {
      en: {
        title: 'English-Lojban',
        picture: '../pixra/selsku_lanci_eng.svg',
      },
    },
    {
      jbo: {
        title: "fanva fi le'e lojbo ri",
        picture: '../pixra/lanci_jbo.svg',
      },
    },
    {
      ja: {
        title: '日本 - <span style="white-space:pre;">ロジバン</span>',
        picture: '../pixra/selsku_lanci_jpn.svg',
      },
    },
    {
      'fr-facile': {
        title: 'français facile - lojban',
        picture: '../pixra/selsku_lanci_fra.svg',
      },
    },
    {
      ru: {
        title: 'русский - ложбан',
        picture: '../pixra/selsku_lanci_rus.svg',
      },
    },
    {
      eo: { title: 'Esperanto - Loĵbano', picture: '../pixra/lanci_epo.svg' },
    },
    {
      es: {
        title: 'español - lojban',
        picture: '../pixra/selsku_lanci_spa.svg',
      },
    },
    {
      zh: {
        title: '中文 - 逻辑语',
        picture: '../pixra/selsku_lanci_zho.svg',
      },
    },
    { loglan: { title: 'Loglan', picture: '../pixra/loglan.png' } },
  ])
}

//rendering
function RenderDesktop(tempState = {}) {
  setState({ displaying: { query: '' } })
  if (!tempState)
    SwitchRotation({
      action: 'stop',
    })
  tempState = tempState || state
  removePlumbs()
  content.scrollTop = 0

  patchDOMBody(tempState)
  patchDOMDasri(tempState)
  patchDOMRectu(tempState)
}

function tile({ title, name, url, picture, isUrl, height, width }) {
  return h('div', {
    class: 'DIV_1',
    style: { height, width },
    children: h('div', {
      class: 'DIV_2',
      style: {
        height,
        width,
      },
      children: [
        h('span', {
          class: 'SPAN_3',
          style: { width: 'auto' },
          children: h('b', { class: 'B_4', innerText: title }),
        }),
        h('a', {
          rel: isUrl ? 'noreferrer' : '',
          target: isUrl ? '_blank' : '',
          'aria-label': title.replace(/<[^>]+?>/g, ''),
          attributes: {
            onclick: `window.ningau_lepasorcu('${url}','${name}')`,
          },
          href: url,
          class: 'A_7',
          children: h('div', {
            class: 'DIV_8',
            style: { 'background-image': `url(${picture})` },
          }),
        }),
      ],
    }),
  })
}

function handler({ keyCode }) {
  if (keyCode && keyCode === 191) ciska.focus()
}
if (document.readyState === 'loading') {
  pb.style.width = '37%'
  document.title = 'la sutysisku'
}

function calcVH() {
  const { clientHeight: dasriHeight } = document.getElementById('galtu-dasri')
  const { clientHeight: loadingHeight } = document.getElementById('loading')
  const { clientHeight: velskuHeight } = document.getElementById('velsku')
  h(content, {
    'update!': true,
    attributes: {
      style: `height:${Math.max(
        document.documentElement.clientHeight -
          dasriHeight -
          loadingHeight -
          velskuHeight,
        window.innerHeight - dasriHeight - loadingHeight - velskuHeight,
        50
      )}px;`,
    },
  })
}

async function checkScrolledNearBottom({ target }) {
  if (state.searching.query === '') return
  removePlumbs()
  if (scrollTimer !== null) {
    clearTimeout(scrollTimer)
  }
  if (scrollJvoTimer !== null) {
    clearTimeout(scrollJvoTimer)
  }
  if (
    state.displaying.seskari !== 'velcusku' &&
    target.scrollTop + window.innerHeight >=
      document.getElementById('outp').clientHeight - 700
  ) {
    skicu_roledovalsi({ ...state.displaying, appendToSearch: true })
  } else {
    window.requestAnimationFrame(() => {
      addJvoPlumbs(true)
    })
    addAudioLinks()
  }
}

const number2ColorHue = (number) => Math.floor(((number * 360) / 7.618) % 360)

const bgString2Int = (number, { s = '90%', l = '80%' }) =>
  `hsl(${number2ColorHue(number)},${s},${l})`

function placeTagHasExpansion(v) {
  v = v.substr(1, v.length - 2).split('=')
  const jalge = v.map((i) => i.replace(/[^A-Za-z']/g, ''))
  return v.length > 1 || (jalge[0] && jalge[0] !== 'x')
}

function renderAsMathJax(string) {
  return MathJax.tex2chtml(string.replace(/^\$/, '').replace(/\$$/, ''), {
    display: false,
  })
}

function getVeljvoString({
  placeTag,
  fullDef,
  isHead,
  dataArrAdded,
  clearedPlaceTag,
}) {
  if (isHead && fullDef.t !== 'lujvo')
    return {
      dataArr: false,
      replacement: placeTag,
      stringifiedPlaceTag: placeTag,
    }
  const rfsWords = (fullDef.rfs || []).map((i) => i.w)
  const arrayPlaceTags = placeTag
    .substr(1, placeTag.length - 2)
    .split('=')
    .map((i) => {
      const arrayTag = i.split(/(?=[_0-9].*)/)
      const candidateWord = rfsWords.filter(
        (word) => word.indexOf(arrayTag[0]) === 0
      )[0]
      return {
        full: isHead ? candidateWord || arrayTag[0] : fullDef.w,
        number: arrayTag
          .slice(1)
          .join('')
          .replace(/^_([0-9]+)$/, '_{$1}'),
        short: isHead ? arrayTag[0] : fullDef.w,
        hasMatchInRFS: !!candidateWord,
      }
    })
  const stringifiedPlaceTag =
    arrayPlaceTags
      .filter((i) => i.hasMatchInRFS || !isHead)
      .map((i) => i.full + i.number.replace(/[_\{\}]/g, ''))
      .join(',') || clearedPlaceTag
  const replacingPlaceTag = arrayPlaceTags
    .map((i) => i.full + i.number)
    .join('=')
  return {
    stringifiedPlaceTag,
    dataArr: !dataArrAdded.includes(clearedPlaceTag),
    replacement: `$${replacingPlaceTag}$`,
  }
}

function melbi_uenzi({
  def,
  fullDef,
  query,
  seskari,
  versio,
  bangu,
  type,
  index,
  stringifiedPlaceTags,
}) {
  let hasExpansion = false
  if (fullDef) {
    let ul
    if (fullDef.bangu.indexOf('-cll') >= 0) {
      const url =
        window.leijufra.custom_links?.filter((i) => !!i.uncll)?.[0]?.uncll
          ?.url || '/'
      ul = h('ul', {
        class: 'uoldeliste',
        style: {
          'list-style-image': 'url(../pixra/cukta.svg)',
        },
        children: Object.keys(def).map((address) =>
          h('li', {
            children: h('a', {
              rel: 'noreferrer',
              target: '_blank',
              href: `${url}${address}`,
              innerText: def[address],
            }),
          })
        ),
      })
    } else if (fullDef.bangu.indexOf('-ll') >= 0) {
      const url =
        window.leijufra.custom_links?.filter((i) => !!i.introbook)?.[0]
          ?.introbook?.url || '/'
      ul = h('ul', {
        class: 'uoldeliste',
        style: {
          'list-style-image': 'url(../pixra/certu.svg)',
        },
        children: Object.keys(def).map((address) =>
          h('li', {
            children: h('a', {
              rel: 'noreferrer',
              target: '_blank',
              href: `${url}${address}`,
              innerText: def[address],
            }),
          })
        ),
      })
    }
    if (ul)
      return {
        tergeha: ul.outerHTML,
        hasExpansion: false,
      }
  }

  let iterTerbricmiId = 0
  const jsonIds = []
  const dataArrAdded = []
  seskari = ['cnano', 'catni', 'rimni'].includes(seskari) ? seskari : 'cnano'

  const placeTags = def.match(/\$.*?\$/g) || []
  for (const placeTag of placeTags) {
    if (
      type === 'd' &&
      typeof index !== 'undefined' &&
      placeTagHasExpansion(placeTag)
    ) {
      hasExpansion = true
      break
    }
  }

  const jalge = h('span')
  jalge.innerHTML = def
    //add span to linages of lujvo's complex places
    .replace(/\$=\$/g, `$<span class="veljvocmiterjonmaho">=</span>$`)
    //add span to borders of latex
    .replace(/\$.*?\$/g, (placeTag) => {
      iterTerbricmiId++
      const combInd = `${index}_${iterTerbricmiId}`

      if (type === 'd') jsonIds.push({ [placeTag]: combInd })
      const clearedPlaceTag = placeTag.replace(/[^a-zA-Z0-9]/g, '')
      const isHead = fullDef && (fullDef.rfs || []).length > 0 ? true : false

      const objectVeljvoReplacement = getVeljvoString({
        isHead,
        placeTag,
        fullDef,
        dataArrAdded,
        clearedPlaceTag,
      })
      const stringifiedPlaceTag = objectVeljvoReplacement.stringifiedPlaceTag
      if (!stringifiedPlaceTags.includes(stringifiedPlaceTag))
        stringifiedPlaceTags.push(stringifiedPlaceTag)
      const number = stringifiedPlaceTags.indexOf(stringifiedPlaceTag)
      const replacementTag = isHead
        ? objectVeljvoReplacement.replacement
        : placeTag
      const gradient = bgString2Int(number, { s: '90%', l: '100%' })
      const gradientBorder = bgString2Int(number, { s: '100%', l: '40%' })
      // dataArrAdded.push(clearedPlaceTag)
      const background = `repeating-linear-gradient(to right,${gradient},${gradient} 100%) content-box content-box, linear-gradient(90deg, ${gradientBorder},${gradientBorder} 100%) padding-box padding-box`
      const span = h('span', {
        class: 'terbricmi',
        id: type === 'd' ? combInd : null,
        style: {
          background,
        },
        attributes: {
          'data-arr':
            objectVeljvoReplacement.dataArr && type === 'd'
              ? stringifiedPlaceTag
              : null,
          'data-color': !isHead ? number2ColorHue(number, 256, 32) : null,
        },
        children: renderAsMathJax(replacementTag),
      })
      return span.outerHTML
    })
    //add spans to intralinks
    .replace(/\{.*?\}/g, (intralink) => {
      intralink = intralink.substring(1, intralink.length - 1)
      return h('a', {
        class: `a-${seskari}`,
        href: `#seskari=${seskari}&sisku=${encodeUrl(
          intralink
        )}&bangu=${bangu}&versio=masno`,
        innerHTML: basna({
          def: escHtml(intralink, true),
          query,
        }),
      }).outerHTML
    })
    //add hyperlinks
    .replace(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
      (url) => {
        url = url.replace(/^http:/, 'https:')
        return h('a', {
          href: url,
          rel: 'noreferrer',
          target: '_blank',
          innerHTML: !/^https?:\/\/.*\.(jpg|png)$/.test(url)
            ? basna({
                def: url,
                query,
              })
            : `<img class='se-tcidu-pixra' alt='secusku' src="${url}"/>\n`,
        }).outerHTML
      }
    )

  //add hiliting where still absent
  Array.from(jalge.childNodes)
    .filter((node) => node.nodeType === 3 && node.textContent.trim().length > 1)
    .forEach((node) => {
      const newText = basna({
        def: node.textContent,
        query,
      })
      const span = document.createElement('span')
      span.innerHTML = newText
      node.replaceWith(span)
    })

  //@todo:
  // .replace(
  //   /(<span [^<>]+?>[^\(\)<>]+?<\/span>) \([^\(\)<>]*?\bproperty of <span .*?id="([^\(\)<>]+?)"[^<>]+?>([^\(\)<>]+?)<\/span>\)/g,
  //   (c, _, id, t) => {
  //     if (type === 'd') {
  //       const a = jsonIds.filter((e) => e[t] !== id && e[t])
  //       if (a[0] && a[0][t])
  //         c = c.replace(/^<span /, `<span data-target="${a[0][t]}" `)
  //     }
  //     return c
  //   }
  // )

  jalge.innerHTML = jalge.innerHTML.replace(/\n+/g, '<br/>')
  //todo: list of placetags
  return { tergeha: jalge.outerHTML, hasExpansion, stringifiedPlaceTags }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

String.prototype.interpolate = function (params) {
  const names = Object.keys(params)
  const vals = Object.values(params)
  return new Function(...names, `return \`${this}\`;`)(...vals)
}

function getMemoizedBasna(query) {
  const string = query.join(' ')
  const cached = state.memoizedValues[string]
  if (cached) return cached
  let arrQuery = query
    .concat(query.map((i) => i.replace(/'/g, 'h')))
    .map((i) => escapeRegExp(i.trim().replace(/[\|\(\)\{\}<>]/g, '.')))
    .filter((i) => i.length > 2)
  const regex = `(${arrQuery.join('|')})`
  return (state.memoizedValues[string] = { arrQuery, regex })
}

function basna({ def, query }) {
  if (query.length === 0 || (query.lengh === 1 && query[0].length <= 2))
    return def
  const { arrQuery, regex } = getMemoizedBasna(query)

  if (arrQuery.length === 0) return def

  return def.replace(new RegExp(regex, 'igm'), "<span class='basna'>$1</span>")
}

//<xuzganalojudri|lojbo>
function krulermorna(text) {
  return text
    .replace(/\./g, '')
    .replace(/^/, '.')
    .toLowerCase()
    .replace(/([aeiou\.])u([aeiou])/g, '$1w$2')
    .replace(/([aeiou\.])i([aeiou])/g, '$1ɩ$2')
    .replace(/au/g, 'ḁ')
    .replace(/ai/g, 'ą')
    .replace(/ei/g, 'ę')
    .replace(/oi/g, 'ǫ')
    .replace(/\./g, '')
}
function cohukrulermorna(text) {
  return text
    .replace(/w/g, 'u')
    .replace(/ɩ/g, 'i')
    .replace(/ḁ/g, 'au')
    .replace(/ą/g, 'ai')
    .replace(/ę/g, 'ei')
    .replace(/ǫ/g, 'oi')
}

function zbalermornaize({ w, ot, rfs }) {
  let word = krulermorna(w)
  word = word
    .split(/(?=[ɩw])/)
    .map((spisa) =>
      cohukrulermorna(spisa)
        .split('')
        .map((lerfu) => latinToZbalermorna(lerfu))
        .join('')
    )
    .join('')
  return word.replace(/,/g, '')
}

function latinToZbalermorna(c) {
  if (c.codePointAt(0) >= 0xed80) {
    return c
  }
  if (c == ' ') return ' '
  if (c == 'h' || c == 'H') c = "'"
  if (lerfu_index.includes(c))
    return String.fromCodePoint(UNICODE_START + lerfu_index.indexOf(c))
  else if (lerfu_index.includes(c.toLowerCase()))
    return String.fromCodePoint(
      UNICODE_START + lerfu_index.indexOf(c.toLowerCase())
    )
  if (c == '\n') return '\n'
  if (c == '\t') return '\t'
  return c
}
//</xuzganalojudri|lojbo>

function getMatchIndices(query, d) {
  const regex = new RegExp(query, 'g')
  const result = []
  let match
  while ((match = regex.exec(d))) result.push(match.index)
  return result
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

function ConstructArxivoValsiExtract(d, query, range) {
  let locs = getMatchIndices(query, d)
  locs = locs.map((i) => {
    i = [i - range, i + range]
    if (i[0] < 0) i[0] = 0
    if (i[0] >= d.length) i[0] = d.length - 1
    return i
  })
  for (let i = 0; i < locs.length - 1; i++) {
    if (locs[i][1] > locs[i + 1][0]) {
      locs[i][1] = locs[i + 1][1]
      locs[i + 1][0] = locs[i][0]
    }
  }
  locs = locs.map((i) => JSON.stringify(i))
  if (locs.length > 0) {
    locs = locs.filter(onlyUnique).map((i) => {
      i = JSON.parse(i)
      let n = d.substr(i[0], i[1] - i[0])
      n = basna({
        def: n,
        query: [query],
      })
      if (i[0] > 3) n = `...${n}`
      if (i[1] < d.length - 4) n = `${n}...`
      return n
    })
    locs = locs.join('<br/>')
  } else {
    let n = d.substr(0, Math.min(100, d.length))
    if (n.length < d.length) n = `${n}...`
    n = basna({
      def: n,
      query: [query],
    })
    locs = n
  }
  return locs
}

window.runQuery = (query, params) => {
  worker.postMessage({
    kind: 'fancu',
    cmene: 'runQuery',
    query,
    params,
  })
}

window.getNeighbors = (query) => {
  worker.postMessage({
    kind: 'fancu',
    cmene: 'getNeighbors',
    query,
  })
}

window.ningau_lepasorcu = (url, bangu) => {
  if (url.indexOf('http') === 0) return
  setState({
    searching: {
      bangu,
    },
    displaying: {
      bangu,
    },
  })
  updateLocales(true)

  worker.postMessage({
    kind: 'fancu',
    cmene: 'ningau_lepasorcu',
    ...state.searching,
    bangu,
  })
}

window.runSearch = (seskari, selmaho, bangu) => {
  setState({
    searching: {
      seskari,
      versio: 'selmaho',
      query: selmaho,
      bangu,
    },
  })
  DispatchState({
    replace: false,
  })
}

function buildURLParams(params = {}) {
  return '#' + new URLSearchParams(params).toString()
}

async function skicu_paledovalsi({
  def,
  inner,
  query,
  seskari,
  versio,
  bangu,
  index,
  stringifiedPlaceTags = [],
}) {
  if (
    def.bangu === 'en-pixra' &&
    !(await getOrFetchResource({
      url:
        def.d.indexOf('../') === 0
          ? def.d
          : `../pixra/xraste/${encodeURIComponent(def.d)}`,
    }))
  )
    return
  if (!query) query = state.searching.query
  if (!seskari) seskari = state.searching.seskari
  bangu = def.bangu || bangu || state.searching.bangu
  bangu = bangu.replace(/-cll/, '')
  if (!def) def = []
  const out = h('div', {
    class: [
      !inner && def.d && def.d.nasezvafahi && (def.rfs || []).length === 0
        ? 'sidju sidju-normal cll noselect'
        : 'term',
      inner ? 'terminner' : 'termouter',
    ],
  })

  let selms
  if (def.s) {
    const selmahos = typeof def.s === 'string' ? def.s.split(' ') : def.s
    if (selmahos.length > 0) {
      selms = h('div')
      for (const selmaho of selmahos) {
        const inDefSelmahoElement = h('button', {
          class: 'xp-btn tutci tutci-sampu',
          innerHTML: basna({
            def: escHtml(selmaho),
            query: [query],
          }),
          attributes: {
            onclick: `window.runSearch("${seskari}","${selmaho}","${bangu}")`,
          },
        })
        selms.appendChild(inDefSelmahoElement)
      }
    }
  }
  let hasTranslateButton = false
  const word = h('h4', { class: 'valsi' })
  if (def.d && !def.d.nasezvafahi)
    h(word, {
      'update!': true,
      attributes: { 'data-valsi': encodeValsiForWeb(def.w) },
    })
  if (def.l) h(word, { 'update!': true, addClass: 'nalojbo' })
  if (
    window.leijufra.lojbo &&
    def.t !== window.leijufra.bangudecomp &&
    seskari !== 'fanva' &&
    (plukaquery(def.w) == query || seskari == 'velcusku')
  ) {
    hasTranslateButton = true
    word.innerHTML = `${basna({
      def: def.q || def.w,
      query: [query],
    })} `
  } else {
    const aTag = h('a', {
      innerHTML: basna({
        def: escHtml(def.w, true),
        query: [query],
      }),
      class: !def.l ? 'valsi' : ['valsi', 'nalojbo'],
      attributes: {
        href: buildURLParams({
          seskari: seskari === 'fanva' ? 'catni' : seskari,
          sisku: encodeUrl(def.w),
          bangu,
          versio: 'masno',
        }),
      },
    })
    word.appendChild(aTag)
  }

  let jvs
  if (def.t && !def.t.type) {
    def.t = def.t === 'bangudecomp' ? window.leijufra.bangudecomp : def.t
    jvs = h('a', { class: 'klesi link' })
    const txt = encodeUrl(def.w).replace(/_/g, '%20')
    jvs.href = window.leijufra.judri
      ? window.leijufra.judri + txt
      : buildURLParams({
          seskari: seskari === 'catni' ? 'catni' : 'cnano',
          sisku: txt,
          bangu,
          versio: 'masno',
        })
    if (window.leijufra.judri) {
      h(jvs, {
        'update!': true,
        attributes: {
          target: '_blank',
          rel: 'noreferrer',
        },
      })
    }
    let text = def.t
    if (window.leijufra.xuzganalojudri && !def.l) {
      text = `${def.t}# `
      if (def.d && def.d.nasezvafahi) text = `➕ ${text}`
    }
    h(jvs, { 'update!': true, innerText: text })
  }
  if (def?.t?.type) {
    jvs = h('a', {
      href: 'javascript:;',
      class: 'klesi',
      innerText: def.t.type,
      class: def?.t?.bangu !== 'lojbo' ? 'na_eisesance' : null,
    })
  }
  if (def.date) {
    jvs = h('div', {
      class: 'klesi',
      innerText: def.date,
    })
    jvs.style.whiteSpace = 'nowrap'
  }

  let prettifiedDefinition = {}
  if (def.d && !def.d.nasezvafahi)
    if (!supportedLangs[def.bangu].pictureDictionary)
      prettifiedDefinition = melbi_uenzi({
        def: def.d,
        fullDef: def,
        query: state.embeddings.length > 0 ? state.embeddings : [query],
        seskari,
        versio,
        bangu,
        type: 'd',
        index,
        stringifiedPlaceTags,
      })
    else
      prettifiedDefinition = {
        tergeha:
          def.d.indexOf('../') === 0
            ? `<img src="${def.d}"/>`
            : `<img src="../pixra/xraste/${encodeURIComponent(def.d)}"/>`,
        hasExpansion: false,
        stringifiedPlaceTags,
      }
  stringifiedPlaceTags = prettifiedDefinition.stringifiedPlaceTags

  //<xuzganalojudri|lojbo>
  let zbalermorna
  if (
    window.leijufra.lojbo &&
    !(def.t && def.t.k === 0) &&
    (seskari !== 'fanva' || index === 0)
  ) {
    zbalermorna = h('h4')
    const textContent = zbalermornaize(def)
    if (supportedLangs[bangu].zbalermorna_defined) {
      const aTag = h('a', {
        attributes: {
          href: buildURLParams({
            seskari,
            sisku: 'zbalermorna',
            bangu,
            versio,
          }),
        },
        innerText: textContent,
        class: ['valsi', 'zbalermorna', 'segerna', 'sampu'],
      })
      zbalermorna.appendChild(aTag)
    } else {
      h(zbalermorna, {
        class: ['valsi', 'zbalermorna', 'segerna', 'sampu'],
        textContent,
      })
    }
  }
  //</xuzganalojudri|lojbo>

  const heading = h('heading', { class: 'heading' })

  if (window.leijufra.lojbo) {
    let arrRenderedFamymaho = []
    for (const key in listFamymaho) {
      if (listFamymaho[key].split(' ').includes(def.w))
        arrRenderedFamymaho.push(
          `<a href="#seskari=${seskari}&versio=selmaho&sisku=${encodeUrl(
            key
          )}&bangu=${bangu}">${escHtml(key)}</a>`
        )
    }
    if (arrRenderedFamymaho.length !== 0) {
      const inDefElement = h('div', {
        class: ['valsi', def.l ? 'nalojbo' : null],
        innerHTML: `<i><sup>[${arrRenderedFamymaho.join(
          ', '
        )}&nbsp;&nbsp;&nbsp;...&nbsp;]</sup></i>&nbsp;&nbsp;`,
      })
      if (inDefElement) heading.appendChild(inDefElement)
    }
  }

  heading.appendChild(word)

  let translateButton
  if (hasTranslateButton) {
    translateButton = h('button', {
      class: ['xp-btn', 'tutci', 'tutci-pixra'],
      onclick: function () {
        setState({
          searching: {
            ...state.searching,
            seskari: 'fanva',
            query: plukaquery(def.w),
          },
        })
        DispatchState({
          replace: false,
        })
      },
      style: { 'background-image': 'url(../pixra/terdi.svg)' },
    })
  }

  const banguEl = h('div', {
    class: 'segerna sampu noselect',
    innerText:
      def.bangu && supportedLangs[def.bangu].n
        ? supportedLangs[def.bangu].n
        : def.bangu || '',
  })

  const famymahos =
    typeof def.s === 'string' && listFamymaho[def.s]
      ? listFamymaho[def.s].split(' ')
      : undefined
  if (typeof famymahos !== 'undefined') {
    let innerHTML = ''
    for (const famymaho of famymahos) {
      innerHTML += `&nbsp;&nbsp;<i><sup>[&nbsp;...&nbsp;&nbsp;&nbsp;<a href="#seskari=${seskari}&sisku=${encodeUrl(
        famymaho
      )}&bangu=${bangu}&versio=masno">${escHtml(famymaho)}</a>]</sup></i>`
    }
    const inDefElement = h('h4', { class: 'tfm', innerHTML })
    heading.appendChild(inDefElement)
  }

  if (jvs) {
    const inDefElement = h('div', { class: 'sampu noselect' })
    inDefElement.appendChild(jvs)
    jvs = inDefElement
  }

  //<xuzganalojudri|lojbo>
  let jvo
  if (
    def.t === 'lujvo' &&
    (def.rfs || []).length > 0 &&
    prettifiedDefinition.hasExpansion
  ) {
    jvo = h('button', {
      style: { 'background-image': 'url(../pixra/shuffle.svg)' },
      class: [
        'tutci',
        'tutci-pixra',
        'xp-btn',
        'jvo_plumber',
        state.jvoPlumbsOn ? 'tutci-hover' : null,
      ],
      onclick: addJvoPlumbs,
    })
  }

  //</xuzganalojudri|lojbo>

  let whoIsFirstLine = []

  if (zbalermorna && !selms && def.w.length < 10 && !jvo) {
    whoIsFirstLine.push('zbalermorna')
    heading.appendChild(zbalermorna)
  }

  heading.appendChild(h('heading', { style: { flex: 1 } }))

  if (!selms) {
    heading.appendChild(banguEl)
    whoIsFirstLine.push('banguEl')
    if (jvs) {
      heading.appendChild(jvs)
      whoIsFirstLine.push('jvs')
    }
  }

  if (hasTranslateButton && def.w.length < 20) {
    heading.appendChild(translateButton)
    whoIsFirstLine.push('translateButton')
  }

  //<xuzganalojudri|lojbo>
  if (jvo) heading.appendChild(jvo)
  //</xuzganalojudri|lojbo>

  if (selms) heading.appendChild(selms)

  const copy = h('input', {
    type: 'button',
    class: ['tutci', 'tutci-pixra', 'xp-btn'],
    style: { 'background-image': 'url(../pixra/fukpi.svg)' },
  })
  copy.addEventListener('click', function () {
    copyToClipboard([def.w, def.d, def.n].filter(Boolean).join('\r\n'))
  })
  heading.appendChild(copy)

  if (def.semMaxDistance <= 1) {
    const distance = h('div', {
      innerText: `${Math.round(def.semMaxDistance.toPrecision(2) * 100)}%`,
      class: ['tutci', 'tutci-sampu', 'xp-btn', 'klesi', 'noselect'],
    })
    distance.addEventListener('click', function () {
      showLoading({
        innerText: (window.leijufra.distance || '').interpolate({
          distance: distance.innerText,
        }),
        hideProgress: true,
      })
      setTimeout(() => {
        showLoaded()
      }, 4000)
    })
    heading.appendChild(distance)
  }

  out.appendChild(heading)
  //new line buttons
  const heading2 = h('heading', { class: 'heading heading2' })
  //<xuzganalojudri|lojbo>
  if (zbalermorna && !whoIsFirstLine.includes('zbalermorna'))
    heading2.appendChild(zbalermorna)
  //</xuzganalojudri|lojbo>
  heading2.appendChild(h('heading', { style: { flex: 1 } }))
  if (!whoIsFirstLine.includes('banguEl')) heading2.appendChild(banguEl)
  if (jvs && !whoIsFirstLine.includes('jvs')) heading2.appendChild(jvs)
  if (translateButton && !whoIsFirstLine.includes('translateButton'))
    heading2.appendChild(translateButton)
  out.appendChild(heading2)

  if (bangu.indexOf('muplis') === 0) {
    const row = h('button', {
      class: 'xp-btn tutci tutci-sampu klesi align-right',
      onclick: () => window.send_muplis_feedback(def),
      innerText: window.leijufra.report_feedback,
    })
    out.appendChild(row)
  }

  if (seskari !== 'arxivo' && def.d) {
    const inDefElement = h('div', { class: 'definition valsi' })
    if (def?.d?.nasezvafahi) {
      if (!def.t && (def.rfs || []).length === 0) return
      h(inDefElement, {
        'update!': true,
        innerText: window.leijufra.nasezvafahi,
        addClass: 'nasezvafahi noselect',
      })
    } else {
      // if (seskari !== 'velcusku') prettifiedDefinition.tergeha = `${prettifiedDefinition.tergeha.replace(/\n/g, '<br/>')} `
      inDefElement.innerHTML = prettifiedDefinition.tergeha
    }
    out.appendChild(inDefElement)
  }
  if (seskari === 'arxivo') {
    const inDefElement1 = h('div', {
      class: 'definition valsi pointer',
      innerHTML: ConstructArxivoValsiExtract(def.d, query, 50),
    })
    inDefElement1.addEventListener('click', () => {
      h(inDefElement1, {
        'update!': true,
        style: { display: 'none' },
      })
      h(inDefElement1.nextElementSibling, {
        'update!': true,
        style: { display: 'block' },
      })
    })
    out.appendChild(inDefElement1)

    const inDefElement = h('div', {
      class: 'definition valsi',
      style: { display: 'none' },
    })
    if (def?.d?.nasezvafahi) {
      h(inDefElement, {
        'update!': true,
        addClass: 'nasezvafahi noselect',
        innerText: window.leijufra.nasezvafahi,
      })
    } else {
      inDefElement.innerHTML = `${basna({
        def: def.d.replace(/([a-z0-9])\/([a-z0-9])/gi, '$1 / $2'),
        query: [query],
      })} `
      inDefElement.addEventListener('click', () => {
        h(inDefElement, {
          'update!': true,
          style: { display: 'none' },
        })
        h(inDefElement.previousElementSibling, {
          'update!': true,
          style: { display: 'block' },
        })
        inDefElement.parentElement.scrollIntoView()
      })
    }
    out.appendChild(inDefElement)
    //add two divs. first is hidden. on click hide and display the other
  }
  if (def.n) {
    const inDefElement = h('div', {
      class: 'notes valsi',
      innerHTML: melbi_uenzi({
        def: def.n,
        fullDef: def,
        query: state.embeddings.length > 0 ? state.embeddings : [query],
        seskari,
        versio,
        type: 'n',
        index,
        bangu,
        stringifiedPlaceTags,
      }).tergeha,
    })
    out.appendChild(inDefElement)
  }
  if ((def.r || []).length > 0 && !def.l) {
    const tanxe_leirafsi = h('div', { class: 'rafsi noselect' })

    const rafcme = h('div', {
      class: 'tanxe zunle_tanxe',
      innerText: window.leijufra.rafsi || 'rafsi',
    })
    tanxe_leirafsi.appendChild(rafcme)

    const rafsi = h('div', { class: 'tanxe pritu_tanxe' })
    for (const el of def.r) {
      const rafElem = h('span', {
        class: 'pamei',
        innerHTML: basna({
          def: el,
          query: [query],
        }),
      })
      rafsi.appendChild(rafElem)
    }
    tanxe_leirafsi.appendChild(rafsi)
    out.appendChild(tanxe_leirafsi)
  }
  if ((def.b || []).length > 0 && !def.l && window.leijufra.xuzganalojudri) {
    const tanxe_leirafsi = h('div', { class: 'rafsi noselect hue_rotate' })

    const rafcme = h('div', {
      class: 'tanxe zunle_tanxe kurfa_tanxe',
      innerText: 'BAI',
    })
    tanxe_leirafsi.appendChild(rafcme)

    const rafsi = h('div', { class: 'tanxe pritu_tanxe kurfa_tanxe' })
    for (const el of def.b) {
      const rafElem = h('span', {
        class: 'pamei',
        innerHTML: `</span><a class="hue_rotate_back a-${seskari}" href="#seskari=${seskari}&sisku=${encodeUrl(
          el
        )}&bangu=${bangu}&versio=masno">${basna({
          def: escHtml(el, true),
          query: [query],
        })}</a><span>`,
      })
      rafsi.appendChild(rafElem)
    }
    tanxe_leirafsi.appendChild(rafsi)
    out.appendChild(tanxe_leirafsi)
  }

  const subDefs = h('div', {
    class: ['definition', 'subdefinitions'],
  })
  for (const [i, subdef] of (def.rfs || []).entries()) {
    const html = await skicu_paledovalsi({
      def: subdef,
      inner: true,
      index: `${index}_${i}`,
      query,
      seskari,
      versio,
      bangu,
      stringifiedPlaceTags,
    })
    if (html) subDefs.appendChild(html)
  }
  out.appendChild(subDefs)

  out.addEventListener('click', clicked)
  return out
}

function encodeValsiForWeb(v) {
  return encodeURIComponent(v).replace(/'/g, 'h')
}
function plukaquery(a) {
  if (a.charAt(0) !== '^' && a.slice(-1) !== '$')
    return a.replace(/\./g, ' ').replace(/ {2,}/g, ' ').replace(/’/g, "'")
  return a
}

function encodeUrl(uenzi) {
  //for bookmarkable urls
  return encodeURIComponent((uenzi || '').replace(/ /g, '_')).replace(
    /'/g,
    '%27'
  )
}

function decodeUrl(urli) {
  return decodeURIComponent(
    urli.replace(/&amp;/g, '&').replace(/%27/g, "'")
  ).replace(/[_]/g, ' ')
}

function escHtml(a, apos) {
  //for displaying text
  a = (a || '')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\(/g, '&#40;')
    .replace(/\)/g, '&#41;')
  if (!apos) a = a.replace(/'/g, '&#039;')
  return a
}

async function skicu_roledovalsi({
  query,
  seskari,
  bangu,
  versio,
  appendToSearch,
}) {
  let newResultsDiv
  if (!appendToSearch) {
    newResultsDiv = h('div', { id: 'outp' })
    removePlumbs()
    window.leijufra.jimte = seskari === 'velcusku' ? 201 : 30
    resultCount = 0
    if (seskari === 'cnano' && supportedLangs[bangu].semanticSearchPossible) {
      const preamble = h('div', {
        class: 'term noselect nasezvafahi',
        innerText: window.leijufra.alerts.semanticSearchAlert,
      })
      newResultsDiv.appendChild(preamble)
    } else if (
      seskari === 'rimni' &&
      window.leijufra.alerts?.rhymesSearchAlert
    ) {
      const preamble = h('div', {
        class: 'term noselect nasezvafahi',
        innerText: window.leijufra.alerts.rhymesSearchAlert,
      })
      newResultsDiv.appendChild(preamble)
    }
  } else {
    newResultsDiv = document.getElementById('outp').cloneNode(true)
    window.leijufra.jimte += 10
  }

  const displayUpTo = Math.min(window.leijufra.jimte, state.results.length)
  for (; resultCount < displayUpTo; resultCount++) {
    const htmlTermBlock = await skicu_paledovalsi({
      def: state.results[resultCount],
      query,
      seskari,
      versio,
      bangu,
      length: state.results.length,
      index: resultCount,
    })
    if (htmlTermBlock) newResultsDiv.appendChild(htmlTermBlock)
  }

  window.requestAnimationFrame(() => {
    MathJax.typesetPromise()

    h(descr, { 'update!': true, style: { display: 'none' } })
    h(drata, { 'update!': true, style: { display: 'none' } })
    h(sidju, { 'update!': true, style: { display: 'flex' } })

    SwitchRotation({
      action: 'stop',
    })

    h(rectu, { id: 'rectu', children: newResultsDiv })

    setTimeout(function () {
      addJvoPlumbs(true)
      if (loadingState.loading !== true) addAudioLinks()
    }, 0)
  })
}

async function addAudioLinkForExternalSpeaker(word) {
  worker.postMessage({
    kind: 'parse',
    operation: 'audioLink',
    tegerna: word.replace(/"/g, ''),
    queryLanguage: window.leijufra.queryLanguage,
  })
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function addAudioLinks(fast = true) {
  if (!fast) await sleep(500)
  const els = Array.from(
    document.querySelectorAll(':not(.na_eisesance)[data-valsi]')
  )
  for (let el of els) {
    if (!kahe_sezgana(el)) continue
    el = el.textContent.trim()
    addAudioLinkForExternalSpeaker(el)
    await sleep(500)

    // await new Promise(resolve => {
    //   try {
    //     const urli = `/sutysisku/sance/vreji/${encodeValsiForWeb(el)}.mp3`
    //     var http = new XMLHttpRequest()
    //     http.open('HEAD', urli, true)
    //     http.send()
    //     http.onload = function () {
    //       if (this.status == 200) {
    //         const sance = new Audio(urli)
    //         sance.id = `sance_${encodeValsiForWeb(el)}`
    //         sance.addEventListener('canplaythrough', (event) => {
    //           const hd = Array.from(
    //             document.querySelectorAll(
    //               `[data-valsi="${encodeValsiForWeb(el)}"]`
    //             )
    //           )[0]
    //           if (
    //             hd &&
    //             !document.getElementById(`sance_${encodeValsiForWeb(el)}`)
    //           ) {
    //             hd.insertAdjacentHTML('afterend', `<button class="tutci sance" onclick="document.getElementById('sance_${encodeValsiForWeb(
    //               el
    //             )}').play()">▶</button>`)
    //             hd.appendChild(sance)
    //           }
    //         })
    //       } else {
    //         addAudioLinkForExternalSpeaker(el)
    //       }
    //       resolve()
    //     }
    //     http.onerror = () => {
    //       addAudioLinkForExternalSpeaker(el)
    //       resolve()
    //     }
    //   } catch (error) {
    //     addAudioLinkForExternalSpeaker(el)
    //     resolve()
    //   }
    // })
  }
}

function h(oldEl, json = {}) {
  let el
  let autoPatchable = typeof oldEl === 'object'
  if (autoPatchable) {
    el = json['update!'] ? oldEl : oldEl.cloneNode()
  } else {
    el = document.createElement(oldEl ?? 'div')
  }

  try {
    for (const key of Object.keys(json)) {
      const value = json[key]
      if (value === null) continue
      switch (key) {
        case 'id':
          if (autoPatchable) continue
          else el[key] = value

          break
        case 'class':
        case 'className':
          el.className = Array.isArray(value)
            ? value.filter(Boolean).join(' ')
            : value
          break
        case 'addClass':
          el.classList.add(
            ...(!Array.isArray(value) ? value.split(' ') : value).filter(
              Boolean
            )
          )
          break
        case 'removeClass':
          el.classList.remove(
            ...(!Array.isArray(value) ? value.split(' ') : value).filter(
              Boolean
            )
          )
          break
        case 'attributes':
          for (const key of Object.keys(value))
            if (value[key] !== null) el.setAttribute(key, value[key])
          break
        case 'style':
          for (const key of Object.keys(value))
            if (value[key] !== null) el.style[key] = value[key]
          break
        case 'appendChildren':
          if (Array.isArray(value))
            el.forEach((sub) => {
              if (sub !== null) el.appendChild(sub)
            })
          else if (value !== null) el.appendChild(value)
          break
        case 'children':
          if (Array.isArray(value)) el.replaceChildren(...value.filter(Boolean))
          else if (value !== null) el.replaceChildren(value)
          break
        case 'update!':
          continue
        default:
          if (typeof el[key] === 'function') {
            el[key](value)
          } else el[key] = value
      }
    }
  } catch (error) {
    return el
  }

  if (autoPatchable) patchDOM(oldEl, el)

  return el
}

function play(url) {
  audio.src = url
  audio.play()
}

function getStateBangu() {
  const citri = macitri()[0]
  if (citri?.bangu) return state.searching.bangu
  return 'en'
}

//sockets
// socket = io ? io.connect("https://jbotcan.org:3020"):undefined;
// if (socket) socket.on("connect", function () {
//   $$(document.getElementById("arxivo"), {style: {display: "inline-block"}})
// });
// if (socket) socket.on("connect_error", function () {
//   $$(document.getElementById("arxivo", {style: {display: 'none'}}))
// });
// if (socket) socket.on("disconnect", function () {
//   $$(document.getElementById("arxivo", {style: {display: 'none'}}))
// });
socket1Chat = io('wss://jbotcan.org:9091', {
  transports: ['polling', 'websocket'],
})
if (socket1Chat) {
  socket1Chat.on('connect', function () {
    socket1Chat_connected = true
  })
  socket1Chat.on('connect_error', function () {
    console.log('1chat connection error')
    // $$(document.getElementById("velcusku", {style: {display: 'none'}}))
  })
  // socket1Chat.on("disconnect", function() {
  //   $$(document.getElementById("velcusku", {style: {display: 'none'}}))
  // });
  function trimSocketChunk(text) {
    return text.replace(/[\n\r]+$/gims, ' ').replace(/<br *\/?>/gims, ' ')
    // .split('<')[0]
  }
  socket1Chat.on('sentFrom', function (data) {
    if (loadingState.loading || !socket1Chat_connected) return
    const i = data.data
    const msg = {
      d: trimSocketChunk(i.chunk),
      s: i.channelId,
      w: i.author,
    }

    const velsku = document.getElementById('velsku_sebenji')
    h(velsku, {
      innerHTML: `<img src='../pixra/nunsku.svg' class="velsku_pixra"/> <span class="velsku_pamei">[${msg.s}] ${msg.w}: ${msg.d}</span>`,
      style: {
        display: 'flex',
      },
      href: buildURLParams({
        seskari: 'cnano',
        sisku: 'lai jbosnu',
        bangu: getStateBangu(),
        versio: 'masno',
      }),
    })

    // if (msg.s === channel)
    // resultsDiv.appendChild(
    //   skicu_palodovalsi({
    //     def: msg,
    //     query: state.searching.query,
    //     seskari: "velcusku"
    //   })
    // );
    // resultsDiv.childNodes.length = Math.min(resultsDiv.childNodes.length, 201);
    // content.scrollTop = content.scrollHeight;
  })
  socket1Chat.on('history', function (data) {
    if (loadingState.loading || !socket1Chat_connected) return
    const velsku = document.getElementById('velsku_sebenji')
    const i = data.slice(-1)[0]
    if (!i) return
    const msg = {
      d: trimSocketChunk(i.chunk),
      s: i.channelId,
      w: i.author,
    }
    h(velsku, {
      innerHTML: `<img src='../pixra/nunsku.svg' class="velsku_pixra"/> <span class="velsku_pamei">[${msg.s}] ${msg.w}: ${msg.d}</span>`,
      style: {
        display: 'flex',
      },
      href: buildURLParams({
        seskari: 'cnano',
        sisku: 'lai jbosnu',
        bangu: getStateBangu(),
        versio: 'masno',
      }),
    })
  })
}

function getPhonemeClasses() {
  const C = '[bdgjvzcfkpstxlmnr]'
  const V = '(a|e|i|o|u)'
  const I = '(ai|ei|oi|au|ḁ|ą|ę|ǫ)'
  const D =
    '(pl|pr|fl|fr|bl|br|vl|vr|cp|cf|ct|ck|cm|cn|cl|cr|jb|jv|jd|jg|jm|sp|sf|st|sk|sm|sn|sl|sr|zb|zv|zd|zg|zm|tc|tr|ts|kl|kr|dj|dr|dz|gl|gr|ml|mr|xl|xr)'
  const T =
    '(cfr|cfl|sfr|sfl|jvr|jvl|zvr|zvl|cpr|cpl|spr|spl|jbr|jbl|zbr|zbl|ckr|ckl|skr|skl|jgr|jgl|zgr|zgl|ctr|str|jdr|zdr|cmr|cml|smr|sml|jmr|jml|zmr|zml)'
  const R = `((?!${D})${C}${C})`
  const J = '(i|u)(?=[aeiouyḁąęǫ])'
  const h = "[h']"
  return { C, V, I, D, T, R, J, h }
}
function allAreSafeWords(
  array,
  { allowCmevla = false, allowCmavo = false, queryLanguage = 'lojban' }
) {
  if (queryLanguage === 'loglan') return true
  const { C, V, I, D, T, R, J, h } = getPhonemeClasses()
  //this is the complete regular expression matching any possible gismu and only them
  const gismu = RegExp(`^(${D}${V}${C}${V}|${C}${V}${C}${C}${V})$`)
  const nornau = RegExp(`^${C}${V}${C}${C}${I}$`)
  const ismu = RegExp(`^${V}${C}${C}${V}$`)
  const iismu = RegExp(`^${J}${V}${C}${C}${V}$`)
  const strelka = RegExp(`^${T}${V}${R}${V}$`)
  const flokati = RegExp(`^${D}${V}${C}${V}${C}${V}$`)
  const prulamdei = RegExp(`^${D}${V}${C}${V}${C}${C}${V}$`)
  const cinjikca = RegExp(`^${C}${V}${R}${V}${C}${C}${V}$`)
  const sorpeka = RegExp(`^${C}${V}${R}${V}${C}${V}$`)
  const snazga = RegExp(`^${D}${V}${C}${C}${V}$`)
  const kaltahu = RegExp(`^${C}${V}${C}${C}${V}${h}${V}$`)
  const cmalahu = RegExp(`^${C}${C}${V}${C}${V}${h}${V}$`)
  const posyduha = RegExp(`^${C}${V}${C}y${C}${V}${h}${V}$`)
  return array.every(
    (el) =>
      el[0] === 'gismu' ||
      gismu.test(el[1]) ||
      ismu.test(el[1]) ||
      iismu.test(el[1]) ||
      strelka.test(el[1]) ||
      flokati.test(el[1]) ||
      sorpeka.test(el[1]) ||
      nornau.test(el[1]) ||
      kaltahu.test(el[1]) ||
      cmalahu.test(el[1]) ||
      snazga.test(el[1]) ||
      prulamdei.test(el[1]) ||
      cinjikca.test(el[1]) ||
      posyduha.test(el[1]) ||
      (allowCmevla && el[0] === 'cmevla') ||
      (allowCmavo && el[0] === 'cmavo')
  )
}

function PollyPlayer(params) {
  function matchForm(word, form) {
    let regex = '^'
    const working = word.replace(/[\.\?»«]/g, '')
    for (let f = 0; f < form.length; f++) {
      if (form[f] == '?') regex += '.'
      else if (form[f] == '*') regex += '.*'
      else if (form[f] == 'y') regex += 'y'
      else if (form[f] == 'h') regex += 'h'
      else if (form[f] == 'I') regex += '[iu]'
      else if (form[f] == 'C') regex += '[^aeiouyḁąęǫ]'
      else if (form[f] == 'V') regex += '[aeiouyḁąęǫ]'
    }
    regex += '$'
    const re = new RegExp(regex)
    return re.test(working)
  }

  // function isBrivla(word) {
  //   return allAreSafeWords([["", word]], { allowCmavo: false })
  // }

  function getValByKeyRegex(json, testedString) {
    const match =
      Object.keys(json)
        .filter((key) => RegExp(`^${key}`).test(testedString))
        .sort((a, b) => b.length - a.length)[0] ?? '-'
    return { match, value: json[match] }
  }

  function text2SSML(textToSpeak, queryLanguage) {
    let famymaho = []
    switch (queryLanguage) {
      case 'loglan':
        famymaho = ['gu', 'guu', 'guo']
        break
      default:
        famymaho = ['kei', 'vau', "ku'o", "li'u", "le'u", "ge'u", "zo'u"]
    }
    // const stresslessWords = ["lo","le","lei","loi","ku"]
    const words = textToSpeak.replace(/(?:\r\n|\r|\n)/g, ' ').split(' ')
    let output = [`<speak><prosody rate="slow">`, '<s>']
    for (let w = 0; w < words.length; w++) {
      const currentWord = krulermorna(words[w])
      // const nextWord = words[w + 1]
      if (['i', '.i', "ni'o"].includes(currentWord)) {
        output.push('</s>\n<s>')
      } else if (currentWord[0] == '.') {
        output.push('<break time="20ms" strength="x-weak" />')
      }

      let ph = []
      for (let i = 0; i < [...currentWord].length; i++) {
        // if (matchForm(currentWord, "CV") && (i == 0) && nextWord && !isBrivla(nextWord) && !stresslessWords.includes(currentWord))
        //   ph.push('ˈ');
        if (matchForm(currentWord, 'VCV') && i == 0) ph.push('ˈ')
        else if (matchForm(currentWord, 'CVCV') && i == 0) ph.push('ˈ')
        else if (matchForm(currentWord, 'VCCV') && i == 0) ph.push('ˈ')
        else if (
          matchForm(currentWord, 'CVCCI') ||
          matchForm(currentWord, 'CVCCV') ||
          matchForm(currentWord, 'IVCCV') ||
          matchForm(currentWord, 'CCVCV')
        ) {
          if (i == 0) ph.push('ˈ')
          if (i == 3) ph.push('.')
        } else if (matchForm(currentWord, 'CCVCCV')) {
          if (i == 0) ph.push('ˈ')
          if (i == 4) ph.push('.')
        } else if (matchForm(currentWord, 'CCCVCCV')) {
          if (i == 0) ph.push('ˈ')
          if (i == 5) ph.push('.')
        } else if (matchForm(currentWord, 'CCVCVCV')) {
          if (i == 3) ph.push('.ˈ')
          if (i == 5) ph.push('.')
        } else if (matchForm(currentWord, 'CVCCVCV')) {
          if (i == 3) ph.push('.ˈ')
          if (i == 5) ph.push('.')
        } else if (matchForm(currentWord, 'CVCyCVhV')) {
          if (i == 4) ph.push('.ˈ')
          if (i == 6) ph.push('.')
        } else if (matchForm(currentWord, 'CCVCVCCV')) {
          if (i == 3) ph.push('.ˈ')
          if (i == 6) ph.push('.')
        } else if (matchForm(currentWord, 'CVCCVCCV')) {
          if (i == 3) ph.push('.ˈ')
          if (i == 6) ph.push('.')
        }
        const { match, value } = getValByKeyRegex(
          params.lojban2IPAMapping,
          currentWord.slice(i) +
            ' ' +
            words
              .concat('')
              .slice(w + 1)
              .join(' ')
        )
        ph.push(value)
        i = i - 1 + match.replace(/\\/g, '').replace(/\(\?.*\)/g, '').length
      }

      const { C, V, I } = getPhonemeClasses()
      if (RegExp(`(${C})$`).test(currentWord)) {
        ph.unshift('ʔ')
      }
      if (RegExp(`^(${V}|${I})`).test(currentWord)) {
        ph.unshift('ʔ')
      }
      // if (["mo", "ma", "xu", "xo"].includes(currentWord)) {
      //   output.push(`<prosody volume="loud">`);
      //   output.push(`<phoneme alphabet="ipa" ph="${ph.join("")}">${currentWord}</phoneme>`);
      //   output.push(`</prosody>`);
      // }else{
      const compiledWord = ph.join('').replace(/ʔ+/g, 'ʔ').replace(/\.+/g, '.')
      output.push(
        `<phoneme alphabet="ipa" ph="${compiledWord}">${currentWord}</phoneme>`
      )
      // }
      if (
        currentWord[currentWord.length - 1] == '.' ||
        famymaho.includes(currentWord) ||
        RegExp(`(${C})$`).test(currentWord)
      ) {
        output.push(`<break time="1ms" strength="x-weak" />`)
      }
    }

    output.push('</s>', '</prosody></speak>')
    return output.join('\n')
  }

  async function getAndPlayAudio(textToSpeak, dontSpeak, queryLanguage) {
    const text = text2SSML(textToSpeak, queryLanguage)
    const sance_datni =
      getLocalAudio(text, queryLanguage) ||
      (await downloadAudio(text, dontSpeak, queryLanguage))
    if (dontSpeak) return true
    return new Promise((resolve) => {
      audio.src = URL.createObjectURL(
        new Blob([new Uint8Array(sance_datni).buffer])
      )
      audio.addEventListener('ended', () => resolve(true))
      audio.pause()
      audio.play()
    })
  }

  function downloadAudio(Text, dontSpeak, queryLanguage) {
    return new Promise(function (resolve, reject) {
      fetch(`https://github.com/La-Lojban/sutysisku/raw/asql/sance/vreji/${encodeURIComponent(Text)}.mp3`).then(res=>{
        cacheAudio(Text, res, dontSpeak)
        resolve(res)
      }).catch(reject);
    })
  }

  function cacheAudio(text, audio, dontSpeak) {
    let cache = JSON.parse(localStorage.getItem('cachedAudio')) || []
    cache = cache.slice(dontSpeak ? -20 : -10)
    cache.push({
      text,
      audio: JSON.stringify(audio),
    })
    localStorage.setItem('cachedAudio', JSON.stringify(cache))
  }

  function getLocalAudio(text, queryLanguage) {
    const audioStreamArray =
      JSON.parse(localStorage.getItem('cachedAudio')) || []
    const sance_datni = audioStreamArray.filter(
      (record) => record.text === text
    )[0]
    if (!sance_datni) return
    return JSON.parse(sance_datni.audio).data
  }

  return function (text, dontSpeak, queryLanguage) {
    return getAndPlayAudio(text, dontSpeak, queryLanguage)
  }
}

window.runSpeakableAudio = function (
  textToSpeak,
  dontSpeak = false,
  queryLanguage
) {
  return polly(textToSpeak, dontSpeak, queryLanguage)
}

function zgana_sihesle() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now - start
  const oneDay = 1000 * 60 * 60 * 24
  const day = Math.floor(diff / oneDay)
  if (day >= 340 || day < 10) {
    state.ninynaha = true
    const rnd = (max, min = 1) => ((Math.random() * max) / min).toFixed(2)
    const elemDiv = h('div', {
      innerHTML: `<div class="leisihesle" aria-hidden="true">${Array(3)
        .fill(['❅', '❆'])
        .flat()
        .map((_) => {
          const rnd40 = rnd(30)
          const rnd3 = rnd(3)
          return `<div class="sihesle" style="left: ${rnd(
            100
          )}%;-webkit-animation-delay: ${rnd40}s, ${rnd3}s;animation-delay: ${rnd40}s, ${rnd3}s;">${_}</div>`
        })
        .join('')}</div>`,
    })
    document.body.appendChild(elemDiv)
  }
}

;(function () {
  function closeModal() {
    zgana_sihesle()
    /* Get close button */
    const closeButton = document.getElementsByClassName('jsModalClose')
    const closeOverlay = document.getElementsByClassName('jsOverlay')

    /* Set onclick event handler for close buttons */
    for (let i = 0; i < closeButton.length; i++) {
      closeButton[i].onclick = function () {
        h(this.parentNode.parentNode, {
          'update!': true,
          removeClass: 'open',
        })
      }
    }

    /* Set onclick event handler for modal overlay */
    for (let i = 0; i < closeOverlay.length; i++) {
      closeOverlay[i].onclick = function () {
        h(this.parentNode, { 'update!': true, removeClass: 'open' })
      }
    }
  }

  /* Handling domready event IE9+ */
  function ready(fn) {
    if (document.readyState != 'loading') {
      fn()
    } else {
      document.addEventListener('DOMContentLoaded', fn)
    }
  }

  /* Triggering modal window function after dom ready */
  ready(closeModal)
})()

window.resetAudioParams = (input) => {
  const json = pollyParams
  localStorage.setItem('audioParams', JSON.stringify(json))
  input.value = JSON.stringify(json, null, 2)
  polly = PollyPlayer(json)
  localStorage.setItem('cachedAudio', null)
}

window.send_feedback = async function ({ def = {}, state = {}, comment }) {
  let defCompiled = '',
    queryCompiled = ''
  if (def.w) {
    defCompiled = `**${def.w}**\n*${def.d}*`
  }
  if (state.query) {
    queryCompiled = `**${state.query}**\n*${supportedLangs[state.bangu].n}*`
  }
  const url = `{{feedback_backend_url}}`
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      body: `${[defCompiled, queryCompiled].join(
        '\n\n'
      )}\n\n----\n\n${comment}`,
      title: def.w || state.query,
    }), // body data type must match "Content-Type" header
  })

  if (response.status < 400) {
    h(modalWindow, { 'update!': true, removeClass: 'open' })
    openModal({
      children: [
        h('h2', { innerText: window.leijufra.report_feedback_thankyou }),
        h('button', {
          class: 'xp-btn',
          onclick: document.getElementById('jsModal').classList.remove('open'),
        }),
        h('a', {
          href: `{{issues_repo}}`,
          innerText: window.leijufra.report_feedback_issues_repo,
        }),
      ],
    })
  } else {
    h(modalWindow, { 'update!': true, removeClass: 'open' })
    openModal({
      children: [
        h('div', { innerText: window.leijufra.report_feedback_problem }),
        h('button', {
          class: 'xp-btn',
          onclick: document.getElementById('jsModal').classList.remove('open'),
          innerText: '✔️',
        }),
        h('a', {
          href: `{{issues_repo}}`,
          target: '_blank',
          innerText: window.leijufra.report_feedback_issues_repo,
        }),
      ],
    })
  }
}

window.send_muplis_feedback = function (def) {
  window.tmp_value = def
  openModal({
    children: [
      h('h2', { innerText: window.leijufra.report_feedback }),
      h('h3', { class: 'valsi', innerText: def.w }),
      h('div', { class: 'definition valsi', innerText: def.d }),
      h('textarea', {
        id: 'modal__textarea',
        class: 'modal__textarea',
        rows: '10',
        placeholder: window.leijufra.report_feedback_description,
      }),
      h('button', {
        class: 'xp-btn',
        onclick: `
            document
              .getElementById('feedback-spinner')
              .classList.remove('d-none')
          window.send_feedback({
            def: window.tmp_value,
            comment: document.getElementById('modal__textarea').value,
          })`,
        children: [
          h('div', { id: 'feedback-spinner', class: 'spinner d-none' }),
        ],
        innerText: window.leijufra.report_feedback,
      }),
    ],
  })
}

function openModal({ children }) {
  h(document.getElementById('modal__container'), {
    'update!': true,
    children,
    addClass: 'open',
  })
}

function copyToClipboard(value) {
  const myTemporaryInputElement = h('textarea', { value })
  document.body.appendChild(myTemporaryInputElement)

  myTemporaryInputElement.select()
  document.execCommand('Copy')

  document.body.removeChild(myTemporaryInputElement)
  showLoading({ innerText: window.leijufra.copied || '📋', hideProgress: true })
  setTimeout(() => {
    showLoaded()
  }, 2000)
}
