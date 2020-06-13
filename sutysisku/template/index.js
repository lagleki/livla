const content = document.getElementById('content')
const ciska = document.getElementById('ciska')
const clear = document.getElementById('clear')
const outp = document.getElementById('outp')
const descr = document.getElementById('descr')
const drata = document.getElementById('drata')
const citri = document.getElementById('citri')
const sidju = document.getElementById('sidju')
const pb = document.getElementById('kernelo_lo_cpacu')
const worker = new Worker('worker.js?sisku={now}')
// const gunka = new Worker('worker.js?sisku={now}')
// gunka.onmessage = (ev) => {
//   console.log(ev.data)
// }
const SiteTitle = document.querySelector('#title > font')
const SiteTitleFull = document.querySelector('#site-title')
let jvoPlumbsOn = false
let plumbsTimeout = 3500
SiteTitleFull.classList.add('desktop-mode-title-color')
// var firstSiteTitleValue = SiteTitle.firstChild.nodeValue;
const dasri = document.getElementById('galtu-dasri')
const catni = document.getElementById('catni')
const cnano = document.getElementById('cnano')
const rimni = document.getElementById('rimni')
// var arxivo = document.getElementById("arxivo");
const SiteImage = document.querySelectorAll('#title > img')

const btnScrollToTop = document.getElementById('scrollToTop')
content.onscroll = () => {
  if (content.scrollTop > 200) {
    btnScrollToTop.style.display = 'block'
    btnScrollToTop.classList.remove('dizlo')
  } else {
    // btnScrollToTop.style.display = "none";
    btnScrollToTop.classList.add('dizlo')
  }
}

function switchBorderScroll() {
  if (content.scrollTop > 200) {
    content.scrollTop = 0
  } else {
    content.scrollTop = content.scrollHeight
  }
}

const fm = {
  BE: 'bei',
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
let results = []

//search after timeout
let typingTimer
let IdleTypingTimer
const delay = (() => (callback, ms) => {
  clearTimeout(IdleTypingTimer)
  IdleTypingTimer = setTimeout(callback, ms)
})()

//prepare:
const state = {
  searching: {
    seskari: 'cnano',
    query: '',
    bangu: 'en',
  },
  displaying: {
    seskari: 'cnano',
    query: '',
    bangu: 'en',
  },
  citri: [],
}
;(() => {
  try {
    const tcini = JSON.parse(localStorage.getItem('tcini'))
    if (tcini.seskari) state.searching.seskari = tcini.seskari
    if (tcini.query) state.searching.query = tcini.query
    if (tcini.bangu) state.searching.bangu = tcini.bangu
    //check if our db is filled
    worker.postMessage({
      kind: 'fancu',
      cmene: 'ningau_lesorcu',
      ...state.searching,
    })

    updateLocales()
  } catch (e) {}
  try {
    state.citri = JSON.parse(localStorage.getItem('citri')) || []
  } catch (e) {}
})()

RenderCitri()

function RenderCitri() {
  if (state.citri.length > 0)
    citri.innerHTML = ` <span class="tanxe" data-jufra="window.purc">${
      window.purc
    }</span>${state.citri
      .filter(({ seskari }) => seskari !== 'velcusku')
      .map(
        ({ seskari, query, bangu }) =>
          `<a class="a-${seskari}" href="#seskari=${seskari}&sisku=${encodeUrl(
            query
          )}&bangu=${bangu}">${escHtml(query)}</a>`
      )
      .join(', ')}`
}

function RenderDasri(seskari, sepia) {
  const colors = ['velcusku', 'arxivo', 'cnano', 'rimni', 'catni']
  if (!colors.includes(seskari)) seskari = 'cnano'
  dasri.className = `kampu-dasri ${seskari}-dasri noselect`
  SiteTitleFull.classList.add(`${seskari}-search-mode-title-color`)
  SiteTitleFull.classList.remove('desktop-mode-title-color')
  if (document.getElementById(seskari))
    document
      .getElementById(seskari)
      .classList.add(`${seskari}-tutci-hover`, 'tutci-hover')
  colors.map((c) => {
    if (c !== seskari) {
      SiteTitleFull.classList.remove(`${c}-search-mode-title-color`)
      if (document.getElementById(c))
        document
          .getElementById(c)
          .classList.remove(`${c}-tutci-hover`, 'tutci-hover')
    }
  })
  for (let i = 0; i < SiteImage.length; i++) {
    SiteImage[i].style.filter = sepia
  }
}

function SwitchRotation({ action }) {
  if (document.readyState !== 'complete') return
  const els = ['logo']
  if (action === 'start') {
    els.map((el) => {
      document.getElementById(el).classList.remove('stopRotate')
      document.getElementById(el).classList.add('rotate')
    })
    clear.classList.add('pulsate-css')
    setTimeout(() => {
      if (clear.classList.contains('pulsate-css'))
        ciska.classList.add('granim-css')
    }, 500)
  } else {
    els.map((el) => {
      document.getElementById(el).classList.add('stopRotate')
    })
    ciska.classList.remove('granim-css')
    clear.classList.remove('pulsate-css')
  }
}

function EmitVelcusku() {
  if (socket1Chat) socket1Chat.open()
}

function renderMathAndPlumbs() {
  MathJax.typesetPromise().then(() => {
    addJvoPlumbs(true)
  })
}

function RenderResults({ query, seskari, bangu }) {
  removePlumbs()
  window.jimte = seskari === 'velcusku' ? 201 : 30
  resultCount = 0
  SwitchRotation({
    action: 'stop',
  })
  outp.innerHTML = ''
  skicu_rolodovalsi({
    query,
    seskari,
    bangu,
  })
  state.displaying.query = query
  state.displaying.seskari = seskari
  state.displaying.bangu = bangu
  outp.style.display = 'block'
  descr.style.display = 'none'
  drata.style.display = 'none'
  sidju.style.display = 'flex'
  content.scrollTop = 0
  switch (state.displaying.seskari) {
    case 'rimni':
      renderMathAndPlumbs()
      RenderDasri('rimni', 'sepia(1.0)')
      break
    case 'arxivo':
      RenderDasri('arxivo', 'none')
      break
    case 'velcusku':
      RenderDasri('velcusku', 'none')
      break
    case 'catni':
      renderMathAndPlumbs()
      RenderDasri('catni', 'none')
      break
    case 'cnano':
    default:
      renderMathAndPlumbs()
      RenderDasri('cnano', 'none')
  }

  delay(() => {
    //todo: arrpurc or state.history
    DispatchCitri()

    ga('send', 'pageview', `#sisku/${state.displaying.query}`)
    const pageViewData = {
      dl: window.location.href,
      dt: document.title,
      dr: document.referrer,
      dp: `#sisku/${state.displaying.query}`,
      dh: `${window.location.protocol}//${window.location.hostname}`,
      z: Math.round(Math.random() * 1e12),
    }
    if (socket) socket.emit('sisku', pageViewData)
  }, 2000)
}

function removePlumbs() {
  ;[].forEach.call(document.querySelectorAll('.leader-line'), function (e) {
    e.parentNode.removeChild(e)
  })
}

function appendPlumbs() {
  ;[].forEach.call(document.querySelectorAll('.leader-line'), function (e) {
    document.querySelector('#content').appendChild(e)
  })
}

function addJvoPlumbs(force) {
  removePlumbs()
  addPlumbs(!force)
  scrollJvoTimer = setTimeout(
    () => {
      if (force !== true) {
        const plumbers = document.getElementsByClassName('jvo_plumber')
        jvoPlumbsOn = !jvoPlumbsOn
        for (var i = 0; i < plumbers.length; i++) {
          const plumber = plumbers[i]
          plumber.value = jvoValue()
          jvoPlumbsOn
            ? plumber.classList.add('tutci-hover')
            : plumber.classList.remove('tutci-hover')
        }
      }
      if (!jvoPlumbsOn) return
      const targetedEls = Array.from(document.querySelectorAll('[data-arr]'))
      for (var i = 0; i < targetedEls.length; i++) {
        const el = targetedEls[i]
        if (
          el.attributes['data-head'] &&
          el.attributes['data-head'].nodeValue !== '1'
        )
          continue
        const id = el.id
        const arr = el.attributes['data-arr'].nodeValue.split(',')
        const tld = el.id.split('_')
        const tld_0 = tld.slice(0, -1)
        const kahe_zgana_el = kahe_sezgana(el)
        targetedEls.filter((e) => {
          const tld_inner = e.id.split('_')
          const tld_inner_0 = tld_inner.slice(0, -2)
          const arr_ = e.attributes['data-arr'].nodeValue.split(',')
          const t_ = arr_[0].split(/(?=[0-9]+)/)
          if (
            arr_.length === 1 &&
            tld_inner_0.length === tld_0.length &&
            tld_inner_0.join('_') === tld_0.join('_') &&
            arr.filter((ei) => {
              const t = ei.split(/(?=[0-9])/)
              return t_[0].indexOf(t[0]) === 0 && t_[1] === t[1]
            }).length > 0 &&
            (kahe_zgana_el || kahe_sezgana(e))
          ) {
            let clr = e.attributes['data-color'].nodeValue
            clr = `hsla(${clr},100%,70%,0.62)`
            const t = new LeaderLine(
              document.getElementById(e.id),
              document.getElementById(id),
              {
                endPlugColor: clr,
                color: clr,
                dash: { animation: true },
                startSocketGravity: [50, -67],
                endSocketGravity: [0, 67],
                endPlug: 'arrow2',
                endSocket: 'bottom',
                size: 3,
              }
            )
          }
        })

        appendPlumbs()
      }
    },
    force === true ? 450 : 0
  )
}

function addPlumbs(force) {
  removePlumbs()
  scrollTimer = setTimeout(
    () => {
      const targetedEls = document.querySelectorAll('[data-target]')
      for (let i = 0; i < targetedEls.length; i++) {
        const el = targetedEls[i]
        if (kahe_sezgana(el)) {
          const id = el.id
          const target = el.attributes['data-target'].nodeValue
          const t = new LeaderLine(
            document.getElementById(target),
            document.getElementById(id),
            {
              // gradient: {
              //   startColor: 'rgba(135, 0, 0, 0.4)',
              //   endColor: 'rgba(255, 120, 0, 0.4)',
              // },
              endPlugColor: 'rgba(255, 120, 0, 0.33)',
              color: 'rgba(255, 120, 0, 0.33)',
              dash: { animation: true },
              // outlineColor: '#111',
              // outline: true,
              startSocketGravity: [50, -67],
              endSocketGravity: [0, 67],
              endPlug: 'arrow2',
              // startSocket: 'top',
              endSocket: 'bottom',
              size: 3,
            }
          )
        }
      }
      appendPlumbs()
      plumbsTimeout = 450
    },
    force ? 0 : plumbsTimeout
  )
}

function kahe_sezgana(el) {
  let rect = el.getBoundingClientRect()
  rect =
    rect.top >= 48 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  return rect
}

function twoJsonsAreEqual(obj1, obj2) {
  let flag = true

  if (Object.keys(obj1).length == Object.keys(obj2).length) {
    for (key in obj1) {
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
  const data = ev.data
  if (data.kind == 'ready') {
    document.title = 'la sutysisku'
    const loading = document.getElementById('loading')
    loading.parentNode.removeChild(loading)
    setStateFromUrl({
      replace: true,
    })
  } else if (data.kind == 'searchResults') {
    if (!data.force && !twoJsonsAreEqual(data.req, state.searching)) return
    results = data.results || []
    RenderResults({
      ...data.req,
    })
  } else if (data.kind == 'loading') {
    document.getElementById('caho_cpacu').textContent = window.bangubuild
    pb.style.width = '51%'
  } else if (data.kind == 'progress') {
    pb.style.width = `${data.percent * 100}%`
  } else if (data.kind == 'caho_sorcu') {
    console.log(data.results)
  } else if (data.kind == 'fancu') {
    const { cmene, results } = data
    switch (cmene) {
      case 'tejufra':
        updateDOMWithLocales(results)
        break
      case 'ningau_lesorcu':
        console.log(results)
    }
  }
}
if (socket)
  socket.on('la_arxivo_cu_cusku', ({ seskari, query, message }) => {
    if (
      state.searching.seskari === seskari &&
      state.searching.query === query
    ) {
      results = message || []
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
    pairs = (queryString[0] === '#'
      ? queryString.substr(1)
      : queryString
    ).split('&')
  }
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=')
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
    newSearch = decodeUrl(params['sisku']).trim()
  } else {
    href = href || window.location.search
    href = href.substring(href.indexOf('?') + 1)
    const search = new URLSearchParams(href)
    newSearch = decodeUrl(search.get('focus') || '').trim()
    if (newSearch) {
      params = { sisku: newSearch, seskari: 'cnano' }
    }
  }
  const stateToUpdate = JSON.parse(JSON.stringify(state.searching))
  if (
    params['seskari'] &&
    ['velcusku', 'cnano', 'catni', 'rimni', 'arxivo'].includes(
      params['seskari']
    )
  ) {
    stateToUpdate.seskari = params['seskari']
  }
  if (
    params['bangu'] &&
    [
      'jbo',
      'en',
      'en-cll',
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
    ].includes(params['bangu'])
  ) {
    stateToUpdate.bangu = params['bangu']
  }
  if (params['sisku']) {
    stateToUpdate.query = newSearch
  }
  if (!twoJsonsAreEqual(stateToUpdate, state.searching)) {
    state.searching = { ...state.searching, ...stateToUpdate }
    DispatchState({
      replace,
    })
  }
}
//clicked link > push it
citri.addEventListener('click', clicked)

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
  let url = `${window.location.href.split('?')[0].split('#')[0]}#seskari=${
    state.searching.seskari
  }&sisku=${encodeUrl(state.searching.query)}&bangu=${state.searching.bangu}`
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
//typed, stopped typing > push
window.addEventListener('popstate', setStateFromUrl)
ciska.addEventListener('paste', typing(0))
ciska.addEventListener('keyup', () => {
  typing()
})
ciska.addEventListener('keydown', () => {
  clearTimeout(typingTimer)
})
ciska.addEventListener('input', typing())
ciska.addEventListener('textInput', typing())

function GetCiskaAndDispatch() {
  state.searching.query = plukaquery(ciska.value)
  DispatchState({
    caller: 'GetCiskaAndDispatch',
  })
}

function typing(a) {
  clearTimeout(typingTimer)
  typingTimer = setTimeout(GetCiskaAndDispatch, a ? a : 250)
}

//focus > push
ciska.addEventListener('focus', focusSearch)

function focusSearch() {
  state.searching.query = plukaquery(ciska.value)
  DispatchState({})
}
//mainbutton > showDesc, state.searching ={}
clear.addEventListener('click', EmptyState)
document.getElementById('title').addEventListener('click', EmptyState)

function EmptyState() {
  DispatchState({
    empty: true,
  })
}
//change seskari
document.getElementById('rimni').addEventListener('click', () => {
  state.searching = {
    seskari: 'rimni',
    query: plukaquery(ciska.value),
  }
  DispatchState({
    replace: false,
  })
})

document.getElementById('cnano').addEventListener('click', () => {
  state.searching = {
    seskari: 'cnano',
    query: plukaquery(ciska.value),
  }
  DispatchState({
    replace: false,
  })
})
document.getElementById('catni').addEventListener('click', () => {
  state.searching = {
    seskari: 'catni',
    query: plukaquery(ciska.value),
  }
  DispatchState({
    replace: false,
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
  if (state.displaying.query === '' || state.displaying.seskari === 'velcusku')
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
  state.citri.unshift(JSON.parse(JSON.stringify(state.displaying)))
  if (state.citri.length > 10) state.citri.length = 10
  localStorage.setItem('citri', JSON.stringify(state.citri))
  RenderCitri()
}
//Dispatch State
function DispatchState({ replace, caller, empty }) {
  updateLocales()
  if (socket1Chat) socket1Chat.close()
  state.searching.query = state.searching.query.trim()
  setUrlFromState({
    replace,
  })
  localStorage.setItem('tcini', JSON.stringify(state.searching))
  if (empty == true) {
    state.searching.query = ''
    return RenderDesktop()
  } else if (state.searching.seskari !== 'velcusku') {
    if (state.searching.query === '') return RenderDesktop()
    if (JSON.stringify(state.searching) === JSON.stringify(state.displaying))
      return
  }
  //emit search
  ciska.value = state.searching.query

  SwitchRotation({
    action: 'start',
  })
  if (
    caller === 'GetCiskaAndDispatch' &&
    state.searching.seskari === 'velcusku'
  )
    state.searching.seskari = 'cnano'
  switch (state.searching.seskari) {
    case 'arxivo':
      const json = JSON.parse(JSON.stringify(state.searching))
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
      worker.postMessage({
        kind: 'newSearch',
        versio: 'sutra',
        ...state.searching,
      })
      worker.postMessage({
        kind: 'newSearch',
        versio: 'masno',
        ...state.searching,
      })
      updateLocales()
  }
}

function updateDOMWithLocales({ jufra = { window: {} } }) {
  if (!jufra.window) return
  Object.keys(jufra.window).forEach((key) => {
    const subKey = key.replace('window.', '')
    window[subKey] = jufra.window[key]
  })
  Array.from(document.querySelectorAll('[data-jufra]')).forEach((node) => {
    const key = node.attributes['data-jufra'].nodeValue
    let val = jufra[key]
    if (key.indexOf('window.') === 0) {
      val = jufra.window[key]
      const subKey = key.replace('window.', '')
      window[subKey] = jufra.window[key]
    }
    switch (node.nodeName) {
      case 'INPUT':
        node.placeholder = val || node.placeholder
        break
      default:
        node.innerHTML = val || node.innerHTML
    }
  })
}

function updateLocales() {
  worker.postMessage({ kind: 'fancu', cmene: 'tejufra', ...state.searching })
}

//rendering
function RenderDesktop() {
  removePlumbs()
  SwitchRotation({
    action: 'stop',
  })
  content.scrollTop = 0
  const lastQuery = state.displaying.query
  state.displaying.query = ''
  // ciska.value = "";
  SiteTitleFull.classList.add('desktop-mode-title-color')
  SiteTitleFull.classList.remove(
    'catni-search-mode-title-color',
    'cnano-search-mode-title-color',
    'velcusku-search-mode-title-color',
    'rimni-search-mode-title-color',
    'arxivo-search-mode-title-color'
  )
  catni.classList.remove('catni-tutci-hover', 'tutci-hover')
  try {
    cnano.classList.remove('cnano-tutci-hover', 'tutci-hover')
  } catch (error) {}
  // velcusku.classList.remove("velcusku-tutci-hover", "tutci-hover");
  rimni.classList.remove('rimni-tutci-hover', 'tutci-hover')
  // arxivo.classList.remove("arxivo-tutci-hover", "tutci-hover");
  dasri.className = 'kampu-dasri cnano-dasri'
  outp.style.display = 'none'
  descr.style.display = 'block'
  //<xuzganalojudri|lojbo>
  var obj = {
    '@CLL': [
      '.inglic.',
      'Reference Grammar',
      '../pixra/cll.png',
      1,
      'https://lojban.pw/cll/uncll-1.2.7/xhtml_section_chunks/',
    ],
    '@lojban.pw': [
      '.inglic.',
      'Lojban-Chan',
      '../pixra/jbotcan.svg',
      1,
      'https://lojban.pw',
    ],
    muplis: [0, 'la muplis', '../pixra/taplamuplis.svg', 2.1],
    jb: [0, 'English - Lojban examples', '../pixra/snime-1.svg', 1],
    en: [0, 'English-Lojban', '../pixra/selsku_lanci_eng.svg', 1],
    jbo: [0, "fanva fi le'e lojbo ri", '../pixra/lanci_jbo.svg', 1],
    ja: [
      0,
      '日本 - <span style="white-space:pre;">ロジバン</span>',
      '../pixra/selsku_lanci_jpn.svg',
      1,
    ],
    'fr-facile': [
      0,
      'français facile - lojban',
      '../pixra/selsku_lanci_fra.svg',
      1,
    ],
    ru: [0, 'русский - ложбан', '../pixra/selsku_lanci_rus.svg', 1],
    eo: [0, 'Esperanto - Loĵbano', '../pixra/lanci_epo.svg', 1],
    es: [0, 'español - lojban', '../pixra/selsku_lanci_spa.svg', 1],
    zh: [0, '中文 - 逻辑语', '../pixra/selsku_lanci_zho.svg', 1],
    '@CC': [
      '.inglic.',
      'The Crash Course',
      '../pixra/cogwheel-5.svg',
      1,
      'https://mw.lojban.org/papri/The_Crash_Course_in_Lojban',
    ],
  }
  //</xuzganalojudri|lojbo>
  //<lojbo false>
  var obj = {
    'muplis-eng-pol': [
      0,
      'English - polski',
      '../pixra/muplis-eng-pol.png',
      2.1,
    ],
    'en-pt-BR': [0, 'English - Portugueze', '../pixra/152.png', 1],
    zamenhofo: [0, 'Esperanto - English', '../pixra/lanci_epo.svg', 1],
    toki: [0, 'toki pona - English', '../pixra/Toki_pona.svg', 1],
    laadan: [0, 'English - Láadan', '../pixra/Double_girl_sign.svg', 1],
    'simplingua-zho': [0, 'Simplingua - 中文', '../pixra/simplingua.svg', 1],
    'ktv-eng': [0, 'Kotava - English', '../pixra/ktv-eng.svg', 1],
    ina: [0, 'English - Interlingua', '../pixra/Flag_of_Interlingua.svg', 1],
    ldp: [0, 'English - Lingwa de Planeta', '../pixra/ldp.svg', 1],
    ile: [
      0,
      'English - Occidental / Interlingue',
      '../pixra/Flag_of_Interlingue.svg',
      1,
    ],
    'epo-thai': [0, 'Esperanto - Thai', '../pixra/lanci_epo.svg', 1],
  }
  //</lojbo>
  let acc = ''
  const cisn = 100
  for (const key in obj) {
    if (obj[key][0] === 0 || obj[key][0] === window.bangu) {
      acc += `<div class='DIV_1' style='height:${cisn}px;width:${
        obj[key][3] * cisn
      }px;'><div class='DIV_2' style='height:${cisn}px;width:${
        obj[key][3] * cisn
      }px;'><span class='SPAN_3' style='width:auto;'><b class='B_4'>${
        obj[key][1]
      }</b></span><a${
        (obj[key][4] || '').indexOf('http') === 0
          ? " rel='noreferrer' target='_blank'"
          : ''
      } aria-label="${obj[key][1].replace(/<[^>]+?>/g, '')}" href="${
        key.indexOf('@') === 0
          ? obj[key][4]
          : `/lojban/#seskari=${state.displaying.seskari}&sisku=${encodeUrl(
              lastQuery
            )}&bangu=${key}`
      }" class='A_7'><div class='DIV_8' style='height:${cisn}px;width:${
        obj[key][3] * cisn
      }px;background-image:url("${obj[key][2]}")'></div></a></div></div>`
    }
  }
  drata.innerHTML = acc
  drata.style.display = 'block'
}

//on incoming messages:
//if state fully coincides do nothing
//get results and run skicu_rolodovalsi

//HTML structure
window.addEventListener('resize', calcVH, true)
content.addEventListener('scroll', checkScrolledNearBottom)
calcVH()

if (document.attachEvent) {
  document.attachEvent('onkeyup', handler)
} else {
  document.addEventListener('keyup', handler)
}

function handler({ keyCode }) {
  if (keyCode && keyCode === 191) ciska.focus()
}
if (document.readyState === 'loading') {
  pb.style.width = '37%'
  document.title = 'la sutysisku'
}

function calcVH() {
  content.setAttribute(
    'style',
    `height:${Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    )}px;`
  )
}

//<xuzganalojudri|lojbo>
// function getCLLSections(te_gerna) {
//   let a = window.arrcll[te_gerna]
//   if (!a) {
//     te_gerna = te_gerna.replace(/[^A-Z]+$/, '')
//     if (te_gerna === '') return
//     a = window.arrcll[te_gerna]
//   }
//   return a
// }

// function CLL({ pre, valsi }) {
//   if (!window.cll_url | ((window.arrcll || []).length === 0)) return {}
//   if (pre && !valsi.match(/^[A-Zh]+[\+A-Zh0-9]*$/)) return {}
//   const secs = getCLLSections(valsi)
//   if (!secs) return {}
//   const cllHtmlLinksString = `${
//     window.cllnotci
//   }<ul class='uoldeliste'>${Object.keys(secs)
//     .map(
//       (sec) =>
//         `<li><a rel='noreferrer' target='_blank' href="${
//           window.cll_url
//         }${sec}">${escHtml(secs[sec])}</a></li>`
//     )
//     .join('')}</ul>`
//   const div = document.createElement('div')
//   div.className = `${pre ? 'sidju' : 'definition'} cll noselect`
//   div.innerHTML = cllHtmlLinksString
//   return { secs, div }
// }
//</xuzganalojudri|lojbo>

var scrollTimer = null
var scrollJvoTimer = null

function checkScrolledNearBottom({ target }) {
  removePlumbs()
  if (scrollTimer !== null) {
    clearTimeout(scrollTimer)
  }
  if (scrollJvoTimer !== null) {
    clearTimeout(scrollJvoTimer)
  }
  if (
    state.displaying.seskari !== 'velcusku' &&
    target.scrollTop + window.innerHeight >= outp.clientHeight - 700
  ) {
    window.jimte += 10
    skicu_rolodovalsi(state.displaying)
    MathJax.typesetPromise().then(() => {
      addJvoPlumbs(true)
    })
  } else {
    addJvoPlumbs(true)
  }
}

function string2Int(s, base, q) {
  s = s.replace(/[\{\}_]/g, '')
  return Math.abs(
    Math.round(
      (s.split('').reduce((a, b) => {
        a = (a << 5) - a + b.charCodeAt(0)
        return a & a
      }, 0) %
        base) /
        q
    ) * q
  )
}
function veljvoLetters(v) {
  v = v.substr(1, v.length - 2).split('=')

  const jalge = v.map((i) => i.replace(/[^A-Za-z']/g, ''))
  return {
    jalge,
    hasExpansion: v.length > 1 || (jalge[0] && jalge[0] !== 'x'),
  }
}

function veljvoString({ v, fullDef, subtype, dataArrAdded, b, veljvoLs }) {
  if (dataArrAdded.includes(b)) return ''
  if (subtype !== 'r' && fullDef.t !== 'lujvo') return ''
  v = v
    .substr(1, v.length - 2)
    .split('=')
    .map((i) =>
      subtype === 'r'
        ? fullDef.w + i.replace(/[^0-9]/g, '')
        : i.replace(/[^0-9A-Za-z']/g, '')
    )
  v = v.filter((i) => {
    const sI = i.replace(/[0-9]/g, '')
    if (veljvoLs.filter((j) => j.indexOf(sI) === 0 && j !== sI).length > 0)
      return
    return true
  })
  v = v.join(',')
  return ` data-arr="${v}"`
}

function melbi_uenzi({ def, fullDef, query, seskari, bangu, type, index }) {
  if (fullDef && fullDef.bangu.indexOf('-cll') >= 0) {
    const d = Object.keys(def)
      .map((address) => {
        const velcki = def[address]
        return `<li><a rel='noreferrer' target='_blank' href="${address}">${velcki}</a></li>`
      })
      .join('')
    return { tergeha: `<ul class='uoldeliste'>${d}</ul>`, hasExpansion: false }
  }

  const hasHtml = /<\/?a [\s\S]*>/i.test(def)
  let iterTercricmiId = 0
  const jsonIds = []
  const types = []
  const dataArrAdded = []
  let veljvoLs = []
  let hasExpansion = false
  if (!['cnano', 'catni', 'rimni'].includes(seskari)) seskari = 'cnano'
  const res = def.replace(/\$.*?\$/g, (c, offset, string) => {
    if (type === 'd' && typeof index !== 'undefined') {
      const rt = veljvoLetters(c)
      if (rt.hasExpansion) hasExpansion = true
      veljvoLs = veljvoLs.concat(rt.jalge)
      const q = string.substr(offset)
      const r = new RegExp(
        `^(${c.replace(/[^a-zA-Z0-9\{\}_]/g, '')} \\([^\\(\\)<>]+?\\)).*`
      )
      let hc = c
      if (q.search(r) === 0) {
        hc = q.replace(r, '$1')
      }
      const k = {}
      k[c] = hc
      types.push(k)
    }
    return c
  })

  let jalge = res
    .replace(/\$.*?\$/g, (c, offset, string) => {
      if (type === 'd' && typeof index !== 'undefined') {
        const q = string.substr(offset)
        const r = new RegExp(
          `^(${c.replace(/[^a-zA-Z0-9\{\}_]/g, '')} \\([^()<>]+?\\)).*`
        )
        let hc = c
        if (q.search(r) === 0) {
          hc = q.replace(r, '$1')
        } else {
          const seklesi = types.filter((i) => i[c] && i[c] !== hc)[0]
          if (seklesi) {
            hc = seklesi[c]
          }
        }
        iterTercricmiId++
        const combInd = `${index}_${iterTercricmiId}`
        const a = {}
        a[c] = combInd
        jsonIds.push(a)
        const b = c.replace(/[^a-zA-Z0-9]/g, '')
        let head = ''
        if (!!((fullDef && fullDef.rfs) || []).length) head = ` data-head="1"`

        const vel = veljvoString({
          subtype: head !== '' ? 'd' : 'r',
          v: c,
          fullDef,
          dataArrAdded,
          b,
          veljvoLs,
        })
        c = `<span id="${combInd}" class="terbricmi" style="background-color: hsl(${string2Int(
          hc,
          256,
          16
        )}, 100%, 90%);border-radius:${
          string2Int(hc, 9, 1) + 3
        }px"${vel}${head} data-color="${string2Int(hc, 256, 16)}">${c}</span>`
        dataArrAdded.push(b)
      }
      return c
    })
    .replace(
      /(<span [^<>]+?>[^\(\)<>]+?<\/span>) \([^\(\)<>]*?\bproperty of <span id="([^\(\)<>]+?)"[^<>]+?>([^\(\)<>]+?)<\/span>\)/g,
      (c, _, id, t) => {
        if (type === 'd') {
          const a = jsonIds.filter((e) => e[t] !== id && e[t])
          if (a[0] && a[0][t])
            c = c.replace(/^<span /, `<span data-target="${a[0][t]}" `)
        }
        return c
      }
    )
    .replace(/\$.*?\$/g, (c) =>
      c.replace(/\{/g, '\\curlyleft').replace(/\}/g, '\\curlyright')
    )
  if (!hasHtml)
    jalge = jalge.replace(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
      (c) => {
        let res = `</span><a href="${c}" rel="noreferrer" target="_blank">${basna(
          {
            def: c,
            query,
          }
        )}</a><span>`
        if (c.match(/^https?:\/\/.*\.(jpg|png)$/))
          res += `<img class='se-tcidu-pixra' alt='secusku' src="${c}"/>\n`
        return res
      }
    )
  jalge = jalge
    .replace(/\{.*?\}/g, (c) => {
      var c = c.substring(1, c.length - 1)
      return `</span><a class="a-${seskari}" href="#seskari=${seskari}&sisku=${encodeUrl(
        c
      )}&bangu=${bangu}">${basna({
        def: escHtml(c, true),
        query,
      })}</a><span>`
    })
    .replace(/\$.*?\$/g, (c) =>
      c.replace(/\\curlyleft/g, '{').replace(/\\curlyright/g, '}')
    )
  jalge = `<span>${jalge}</span>`
  jalge = jalge
    .replace(/<span><\/span>/g, '')
    .replace(/(>[^<>$]+<|>[^<>$]+\$|\$[^<>$]+<)/g, (
      c // var c = c.substring(1, c.length - 1)
    ) =>
      basna({
        def: c,
        query,
      })
    )
  return { tergeha: jalge, hasExpansion }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function basna({ def, query }) {
  if (!query || query === '') return def
  const f = `(${escapeRegExp(query).replace(/ /g, '|')}|${escapeRegExp(query)
    .replace(/'/g, 'h')
    .replace(/ /g, '|')})`
  const rock = new RegExp(f, 'igm')
  return def.replace(rock, "<span class='basna'>$1</span>")
}

const UNICODE_START = 0xed80
const lerfu_index = "ptkflscmx.' 1234bdgvrzjn`-,~    aeiouy    qw    AEIOUY"

//<xuzganalojudri|lojbo>
function krulermorna(t) {
  return t
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
function cohukrulermorna(t) {
  return t
    .replace(/w/g, 'u')
    .replace(/ɩ/g, 'i')
    .replace(/ḁ/g, 'au')
    .replace(/ą/g, 'ai')
    .replace(/ę/g, 'ei')
    .replace(/ǫ/g, 'oi')
}

function zbalermornaize({ w, ot, rfs }) {
  let word = krulermorna(w)
  if (ot && ot === "vlaza'umei") {
    return rfs.map((def) => zbalermornaize(def)).join(' ')
  }
  // if ((def.t || '').search(/cmevla|cmene|fu['h]ivla|zi['h]evla/) >= 0) {
  //   word = krulermornaToForeignZbalermorna(word)
  // } else {
  word = word
    .split(/(?=[ɩw])/)
    .map((spisa) =>
      cohukrulermorna(spisa)
        .split('')
        .map((lerfu) => latinToZbalermorna(lerfu))
        .join('')
    )
    .join('')
  // }
  return word.replace(/,/g, '')
}

// var mapKru2Zbalermorna = {
//   a: '',
//   e: '',
//   i: '',
//   o: '',
//   u: '',
//   y: '',
//   ḁ: '',
//   ą: '',
//   ę: '',
//   ǫ: '',
//   ɩ: '',
//   w: '',
//   p: '',
//   t: '',
//   k: '',
//   f: '',
//   b: '',
//   d: '',
//   g: '',
//   v: '',
//   l: '',
//   s: '',
//   c: '',
//   m: '',
//   r: '',
//   z: '',
//   j: '',
//   n: '',
//   x: '',
//   '.': '',
//   "'": '',
// }

// function krulermornaToForeignZbalermorna(c) {
//   return c.split('').map(function (lerfu) {
//     return mapKru2Zbalermorna[lerfu] || lerfu
//   }).join("");
// }

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
        query,
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
      query,
    })
    locs = n
  }
  return locs
}

function jvoValue() {
  return jvoPlumbsOn ? '⇔' : '↔'
}

function skicu_palodovalsi({ def, inner, query, seskari, bangu, index }) {
  if (!query) query = state.searching.query
  if (!seskari) seskari = state.searching.seskari
  if (!bangu) bangu = state.searching.bangu
  if (!def) def = []
  const out = document.createElement('div')
  out.className = inner ? 'terminner' : 'termouter'
  out.classList.add('term')
  if (!inner && def.d && def.d.nasezvafahi && (def.rfs || []).length === 0) {
    out.className = 'sidju cll noselect'
  }
  if (typeof fm[def.s] !== 'undefined') {
    var fmm = document.createElement('h4')
    fmm.className = 'tfm'
    fmm.innerHTML = `&nbsp;&nbsp;<i><sup>[&nbsp;...&nbsp;&nbsp;&nbsp;<a href="#seskari=${seskari}&sisku=${encodeUrl(
      fm[def.s]
    )}&bangu=${bangu}">${escHtml(fm[def.s])}</a>]</sup></i>`
  }
  const sh = []
  for (const key in fm) {
    if (fm[key] === def.w)
      sh.push(
        `<a href="#seskari=${seskari}&sisku=${encodeUrl(
          key
        )}&bangu=${bangu}">${escHtml(key)}</a>`
      )
  }
  if (sh.length !== 0) {
    var tfm = document.createElement('div')
    tfm.classList.add('valsi')
    if (def.l) tfm.classList.add('nalojbo')
    tfm.innerHTML = `<i><sup>[${sh.join(
      ', '
    )}&nbsp;&nbsp;&nbsp;...&nbsp;]</sup></i>&nbsp;&nbsp;`
  }
  if (def.s) {
    var ss = document.createElement('a')
    ss.className = 'tutci klesi klesi-tutci'
    var text = basna({
      def: escHtml(def.s),
      query,
    })
    ss.innerHTML = text
    if (seskari !== 'velcusku')
      ss.href = `#seskari=${seskari}&sisku=${encodeUrl(def.s)}&bangu=${bangu}`
  }
  if (def.t) {
    var jvs = document.createElement('a')
    jvs.className = 'klesi sampu link noselect'
    var text = def.t
    const txt = encodeUrl(def.w).replace(/_/g, '%20')
    jvs.href = window.judri
      ? window.judri + txt
      : `#seskari=${
          seskari === 'catni' ? 'catni' : 'cnano'
        }&sisku=${txt}&bangu=${bangu}`
    if (window.judri) {
      jvs.setAttribute('target', '_blank')
      jvs.setAttribute('rel', 'noreferrer')
    }
    /*<muplis>*/
    let deft = ''
    if (def.t.search('sampu staile') >= 0)
      deft +=
        "<img src='../pixra/plise.png' height='16' width='16' alt='lo staile poi sampu'>"
    if (def.t.search('mansa staile') >= 0)
      deft +=
        "<img src='../pixra/pelxuplise.png' height='16' width='16' alt=\"lo staile poi na mutce cinri\">"
    if (def.t.search('plixau jufra') >= 0)
      deft +=
        "<img src='../pixra/crinoplise.png' height='16' width='16' alt=\"lo jufra poi ka'e xamgu lo di'i fanva\">"
    if (def.t.search('cnano staile') >= 0)
      deft +=
        "<img src='../pixra/blabiplise.png' height='16' width='16' alt=\"lo staile poi ka'e pluja\">"
    if (def.t.search('non-standard') >= 0)
      deft +=
        "<img src='../pixra/cicnaplise.png' height='16' width='16' alt=\"na'e catni se ciska staile\">"
    if (deft !== '') text = deft
    /*</muplis>*/
    if (window.xuzganalojudri && !def.l) {
      text = `${escHtml(def.t)}# `
      if (def.d && def.d.nasezvafahi) text = `➕ ${text}`
    }
    jvs.innerHTML = text
  }
  if (def.date) {
    var jvs = document.createElement('div')
    jvs.className = 'tutci klesi klesi-tutci'
    jvs.style.whiteSpace = 'nowrap'
    jvs.innerHTML = def.date
  }
  if (def.from) {
    var ss = document.createElement('div')
    ss.className = 'tutci klesi klesi-tutci'
    ss.innerHTML = def.from
  }
  const word = document.createElement('h4')
  word.classList.add('valsi')
  word.setAttribute('data-valsi', encodeURIComponent(def.w))
  if (def.l) word.classList.add('nalojbo')
  if (plukaquery(def.w) == query || seskari == 'velcusku') {
    word.innerHTML = `${basna({
      def: def.w,
      query,
    })} `
  } else {
    word.innerHTML = `<a class="valsi${
      def.l ? '' : ' nalojbo'
    }" href="#seskari=${seskari}&sisku=${encodeUrl(
      def.w
    )}&bangu=${bangu}">${basna({
      def: escHtml(def.w, true),
      query,
    })}</a> `
  }
  let mu = {}
  if (def.d && !def.d.nasezvafahi)
    mu = melbi_uenzi({
      def: def.d,
      fullDef: def,
      query,
      seskari,
      bangu,
      type: 'd',
      index,
    })

  //<xuzganalojudri|lojbo>
  const zbalermorna = document.createElement('h4')
  zbalermorna.classList.add('valsi', 'zbalermorna')
  zbalermorna.textContent = zbalermornaize(def)
  //</xuzganalojudri|lojbo>

  const heading = document.createElement('heading')
  heading.classList.add('heading')

  if (tfm) heading.appendChild(tfm)

  heading.appendChild(word)

  if (zbalermorna && def.w.length <= 20 && !window.muplis)
    heading.appendChild(zbalermorna)

  if (fmm) heading.appendChild(fmm)

  //<xuzganalojudri|lojbo>
  if (def.t === 'lujvo' && (def.rfs || []).length > 0 && mu.hasExpansion) {
    const jvo = document.createElement('input')
    jvo.type = 'button'
    jvo.classList.add('tutci', 'sance', 'jvo_plumber')
    jvo.value = jvoValue()
    jvoPlumbsOn
      ? jvo.classList.add('tutci-hover')
      : jvo.classList.remove('tutci-hover')
    jvo.onclick = addJvoPlumbs

    heading.appendChild(jvo)
  }
  //</xuzganalojudri|lojbo>

  const flex = document.createElement('heading')
  flex.style.flex = 1
  heading.appendChild(flex)

  const banguEl = document.createElement('span')
  banguEl.classList.add('sampu', 'noselect')
  banguEl.innerHTML = def.bangu || ''
  heading.appendChild(banguEl)
  if (jvs) heading.appendChild(jvs)
  if (ss) heading.appendChild(ss)

  //<xuzganalojudri|lojbo>
  //audio
  try {
    const urli = `/sutysisku/sance/vreji/${encodeValsiForWeb(def.w)}.mp3`
    var http = new XMLHttpRequest()
    http.open('HEAD', url, false)
    http.send()
    if (http.status == 200) {
      const sance = new Audio(urli)
      sance.id = `sance_${encodeValsiForWeb(def.w)}`
      sance.addEventListener('canplaythrough', (event) => {
        const hd = Array.from(
          document.querySelectorAll(
            `[data-valsi="${encodeValsiForWeb(def.w)}"]`
          )
        )[0]
        if (
          hd &&
          !document.getElementById(`sance_${encodeValsiForWeb(def.w)}`)
        ) {
          hd.innerHTML += `<button class="tutci sance" onclick="document.getElementById('sance_${encodeValsiForWeb(
            def.w
          )}').play()">▶</button>`
          hd.appendChild(sance)
        }
      })
    }
  } catch (error) {}
  //</xuzganalojudri|lojbo>

  out.appendChild(heading)
  if (zbalermorna && (window.muplis || def.w.length > 20))
    out.appendChild(zbalermorna)

  if (seskari !== 'arxivo' && def.d) {
    var n = document.createElement('div')
    n.classList.add('definition', 'valsi')
    if (def.d && def.d.nasezvafahi) {
      if (!def.t && (def.rfs || []).length === 0) return
      n.classList.add('nasezvafahi', 'noselect')
      n.innerHTML = window.nasezvafahi
    } else {
      let melbi = mu.tergeha
      if (seskari !== 'velcusku') melbi = `${melbi.replace(/\n/g, '<br/>')} `
      n.innerHTML = melbi
    }
    out.appendChild(n)
  }
  if (seskari === 'arxivo') {
    const k = document.createElement('div')
    k.classList.add('definition', 'valsi', 'pointer')
    k.innerHTML = ConstructArxivoValsiExtract(def.d, query, 50)
    k.addEventListener('click', () => {
      k.style.display = 'none'
      k.nextElementSibling.style.display = 'block'
    })
    out.appendChild(k)

    var n = document.createElement('div')
    n.classList.add('definition', 'valsi')
    n.style.display = 'none'
    if (def.d && def.d.nasezvafahi) {
      n.classList.add('nasezvafahi', 'noselect')
      n.innerHTML = window.nasezvafahi
    } else {
      n.innerHTML = `${basna({
        def: def.d,
        query,
      }).replace(/\n/g, '<br/>')} `
      n.addEventListener('click', () => {
        n.style.display = 'none'
        n.previousElementSibling.style.display = 'block'
        n.parentElement.scrollIntoView()
      })
    }
    out.appendChild(n)
    //add two divs. first is hidden. on click hide and display the other
  }
  if (def.n) {
    var n = document.createElement('div')
    n.classList.add('notes', 'valsi')
    n.innerHTML = `${
      melbi_uenzi({
        def: def.n,
        query,
        seskari,
        bangu,
      }).tergeha
    } `
    out.appendChild(n)
  }
  //<xuzganalojudri|lojbo>
  // if (index == 0 && seskari !== 'velcusku') {
  //   const { secs, div } = CLL({ valsi: def.w })
  //   if (secs && secs !== state.cll) out.appendChild(div)
  // }
  //</xuzganalojudri|lojbo>
  if (def.e) {
    var n = document.createElement('div')
    n.classList.add('examples', 'valsi')
    n.innerHTML = `<table class='ciksi'>${
      melbi_uenzi({
        def: `${def.e}\n`
          .replace(/%/g, '\n')
          .replace(
            /(.*?) — (.*?)\n/g,
            "<tr><td class='mupligreku'><b>$1</b></td><td class='mupligreku'><i>$2</i></td></tr>\n"
          ),
        query,
        seskari,
        bangu,
      }).tergeha
    }</table> `
    out.appendChild(n)
  }
  if (def.k) {
    var n = document.createElement('div')
    n.className = 'related'
    n.innerHTML = `See also: ${
      melbi_uenzi({
        def: def.k,
        query,
        seskari,
        bangu,
      }).tergeha
    } `
    out.appendChild(n)
  }
  if ((def.r || []).length > 0 && !def.l && window.xuzganalojudri) {
    const tanxe_leirafsi = document.createElement('div')
    tanxe_leirafsi.className = 'rafsi noselect'

    const rafcme = document.createElement('div')
    rafcme.className = 'tanxe zunle_tanxe'
    rafcme.innerHTML = 'rafsi'
    tanxe_leirafsi.appendChild(rafcme)

    const rafsi = document.createElement('div')
    rafsi.className = 'tanxe pritu_tanxe'
    for (i = 0; i < def.r.length; i++) {
      const rafElem = document.createElement('span')
      rafElem.className = 'pamei'
      const raf = def.r[i]
      // if ((def.t || '').match(/lujvo/)) {
      //   const a = document.createElement('a')
      //   a.setAttribute(
      //     'href',
      //     `#seskari=${seskari}&sisku=${encodeUrl(raf)}&bangu=${bangu}`
      //   )
      //   a.text = raf
      //   rafElem.appendChild(a)
      // } else {
      rafElem.innerHTML = basna({
        def: raf,
        query,
      })
      // }
      rafsi.appendChild(rafElem)
    }
    tanxe_leirafsi.appendChild(rafsi)
    out.appendChild(tanxe_leirafsi)
  }
  if ((def.rfs || []).length > 0) {
    const subDefs = document.createElement('div')
    subDefs.classList.add('definition', 'subdefinitions')
    for (var i = 0; i < def.rfs.length; i++) {
      const o = skicu_palodovalsi({
        def: def.rfs[i],
        inner: true,
        index: `${index}_${i}`,
        query,
        seskari,
        bangu,
      })
      if (o) subDefs.appendChild(o)
    }
    out.appendChild(subDefs)
  }

  out.addEventListener('click', clicked)
  return out
}

function encodeValsiForWeb(v) {
  return encodeURIComponent(v).replace(/'/g, 'h')
}
function plukaquery(a) {
  if (a.charAt(0) !== '^' && a.slice(-1) !== '$')
    return a
      .replace(/\./g, ' ')
      .replace(/ {2,}/g, ' ')
      .replace(/’/g, "'")
      .trim()
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

function skicu_rolodovalsi({ query, seskari, bangu }) {
  const displayUpTo = Math.min(window.jimte, results.length)
  state.cll = undefined
  // if (resultCount === 0) {
  //   const { secs, div } = CLL({ pre: true, valsi: state.searching.query })
  //   state.cll = secs
  //   if (div) outp.appendChild(div)
  // }
  for (; resultCount < displayUpTo; resultCount++) {
    const a = skicu_palodovalsi({
      def: results[resultCount],
      query,
      seskari,
      bangu,
      length: results.length,
      index: resultCount,
    })
    if (a) outp.appendChild(a)
  }
}

// jimpe fi le jei su'o cnino sorcu ka'e se pilno ca lo nu jai gau akti fai le cnino papri
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.onmessage = function ({ data }) {
    console.log('teminde', data)
    if (data && data.teminde && data.teminde === 'ei ningau le sorcu') {
      //save to dexie all dumps
      worker.postMessage({ kind: 'cnino_sorcu', searching: state.searching })
    }
  }
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(
      ({ scope }) => {
        console.log('ServiceWorker registration successful with scope: ', scope)
      },
      (err) => {
        console.log('ServiceWorker registration failed: ', err)
      }
    )
  })
} else if (location.protocol === 'https:') {
  alert(
    'Your browser is not supported. Please, upgrade to the latest Chrome / Firefox / Safari.'
  )
} else {
  console.log("http protocol, service worker won't work")
}
//<xuzganalojudri|lojbo>
//pronunciation guide
const rows = [
  ['p', 't', 'k', 'f', 's', 'c'],
  ['b', 'd', 'g', 'v', 'z', 'j'],
  ['m', 'l', 'n', 'r', , 'x', "'"],
  ['a', 'e', 'i', 'o', 'u', 'y'],
  [],
  ['aia', 'aua'],
  ['au', 'ai', 'ei', 'oi'],
]

const audio = document.querySelector('#audio')

function text(name, text, style) {
  const el = document.createElement(name)
  el.textContent = text
  if (style) el.className = style
  return el
}

function elem(name, contents, style) {
  const el = document.createElement(name)
  if (style) el.className = style
  if (Array.isArray(contents))
    contents.forEach((sub) => {
      el.appendChild(sub)
    })
  else if (contents) el.appendChild(contents)
  return el
}

function play(url) {
  audio.src = url
  audio.play()
}
document.querySelector('#table').appendChild(
  elem(
    'table',
    rows.map((row) =>
      elem(
        'tr',
        row.map((col) => {
          const button = text('button', col, 'bangu')
          button.onclick = () => {
            play(`/sutysisku/sance/lerfu/${encodeURIComponent(col)}.ogg`)
          }
          return elem('td', button)
        })
      )
    ),
    'centero'
  )
)

//</xuzganalojudri|lojbo>

//sockets
var socket
// socket = io ? io.connect("https://jbotcan.org:3020"):undefined;
// if (socket) socket.on("connect", function () {
//   document.getElementById("arxivo").style.display = "inline-block";
// });
// if (socket) socket.on("connect_error", function () {
//   document.getElementById("arxivo").style.display = "none";
// });
// if (socket) socket.on("disconnect", function () {
//   document.getElementById("arxivo").style.display = "none";
// });
var socket1Chat
// socket1Chat = if (io) io.connect("https://1chat-bridge.lojban.pw");
// if (socket1Chat) {
//   socket1Chat.on("connect", function () {
//     document.getElementById("velcusku").style.display = "inline-block";
//   });
//   socket1Chat.on("connect_error", function () {
//     document.getElementById("velcusku").style.display = "none";
//   });
//   // socket1Chat.on("disconnect", function() {
//   //   document.getElementById("velcusku").style.display = "none";
//   // });
//   socket1Chat.on("sentFrom", function (data) {
//     var i = data.data;
//     var msg = {
//       d: i.chunk.replace(/[\n\r]+$/g, ""),
//       s: i.channelId,
//       w: i.author
//     };
//     // if (msg.s === channel)
//     outp.appendChild(
//       skicu_palodovalsi({
//         def: msg,
//         query: state.searching.query,
//         seskari: "velcusku"
//       })
//     );
//     outp.childNodes.length = Math.min(outp.childNodes.length, 201);
//     // content.scrollTop = content.scrollHeight;
//   });
//   socket1Chat.on("history", function (data) {
//     // console.log(data);
//     document.getElementById("velcusku").style.display = "inline-block";
//     results = data.map(function (i) {
//       return {
//         d: i.chunk.replace(/[\n\r]+$/g, ""),
//         s: i.channelId,
//         w: i.author
//       };
//     });
//     // .filter(function(i) {
//     //   return i.s === channel;
//     // });
//     RenderResults({
//       query: state.searching.query,
//       seskari: "velcusku"
//     });
//     content.scrollTop = content.scrollHeight;
//   });
// }
ciska.focus()
