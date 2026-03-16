const log = console.log.bind(console)
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import fs from "fs-extra";
import path from "path-extra";
import lojban from "lojban";
import { to } from "await-to-js";
import axios from "axios";
import Irc from "irc-upd";
import natural from "natural";
const hashed = require("./hashed.json");
const locals = require("./locals.json");


import ua from "universal-analytics";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let home_path = '/livla'

// Online lensisku API (semantic search); phrases excluded from results
const LENSISKU_BASE = 'https://lensisku.lojban.org'
const LENSISKU_TIMEOUT_MS = 15_000
const MESSAGE_SPLIT_MIN = 190
const MESSAGE_SPLIT_MAX = 250
const MAX_DEFINITIONS_LIST = 30
const LANGUAGE_CODE_MAX_LENGTH = 100
const LUJVO_TOP_N = 3


const nodasezvafahi = "no da se zvafa'i"
const commandPrefix = '^ *(\\.|\\!)'

// Lensisku API expects language IDs from languages.langid (see lensisku dump jbocma.sql), not tags
const LENSISKU_LANG_TAG_TO_ID = {
  xx: 0, 'nolanguage': 0, no: 19, en: 2, hi: 3, es: 4, ru: 5, zh: 6, ar: 7, fr: 8, de: 9, ja: 10,
  pl: 11, da: 12, it: 13, ko: 14, ro: 15, el: 16, he: 17, cs: 18, pt: 21, sv: 22, sr: 23, tr: 24,
  fa: 25, ka: 26, gu: 27, sq: 28, eu: 29, be: 30, id: 31, mg: 32, ne: 33, sa: 34, so: 35, br: 36,
  ch: 37, kw: 38, ca: 39, la: 40, hr: 41, nl: 42, hu: 43, lt: 44, bg: 45, sk: 46, sl: 47, vi: 48,
  et: 49, gl: 50, uk: 51, am: 52, cy: 53, ga: 54, ia: 55, wa: 56, tlh: 57, 'art-loglan': 58, loglan: 58,
  eo: 59, tpi: 60, jbo: 1, test: 315, ta: 314, 'art-guaspi': 316, guaspi: 316, 'en-simple': 317,
  fi: 20, 'fr-facile': 318, lv: 319, 'pt-br': 320, 'en-bpfk': 321, tok: 322, toki: 322,
}
const LENSISKU_DEFAULT_LANG_ID = 2 // English
const LENSISKU_MIN_SIMILARITY = 0.5 // for .en / language-code search, only show results above this
function lensiskuLangId(tag) {
  if (tag == null || tag === '') return LENSISKU_DEFAULT_LANG_ID
  const t = String(tag).toLowerCase().trim()
  return LENSISKU_LANG_TAG_TO_ID[t] ?? LENSISKU_DEFAULT_LANG_ID
}

let langs = [
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
if (process.argv && process.argv[2]) {
  const langs_ = (process.argv[2]).split(",").map(i => i.trim())
  if (langs_.length > 1) langs = langs_
}

log(langs, 'languages loaded')

const robangu = [
  'fr-facile',
  'en',
  'ru',
  'pl',
  'de',
  'ja',
  'jbo',
  'guaspi',
  'loglan',
  'eo',
  'fr',
  '2002',
  'es',
  'zh',
  'sv',
  'en-simple',
  'krasi',
  'dukti',
  'laadan',
  'toki',
]
let tcan =
  '#lojban,#ckule,#tokipona,#jbosnu,#fraso,#spero,#pepper&carrot,##jboselbau,##esperanto,#polsk,#tokpona,#ponjbo,#rusko'
let localConfig
let replier = 'mensi'
let httpPort = 3000
let password = ''
let email = ''
let server = 'irc.freenode.net'
let config = {}

let userSettings = {}
userSettings[replier] = {
  language: 'jbo',
}

const defaultLanguage = 'en'

const ensureDirExistence = (dirPath) => {
  fs.mkdirSync(dirPath, { recursive: true })
  if (!fs.statSync(dirPath).isDirectory()) {
    throw new Error(`"${dirPath}" is not a directory.`)
  }
}

const readConfig = (filename) => {
  const configDirectory = path.join(home_path, 'config')
  ensureDirExistence(configDirectory)
  const file = path.join(configDirectory, filename)
  try {
    return fs.readFileSync(file, {
      encoding: 'utf8',
    })
  } catch (e) {
    if (!e.code || e.code !== 'ENOENT') {
      throw e
    }
    return ''
  }
}

const getConfigPath = (obj, pathStr, fallback) =>
  pathStr.split('.').reduce((o, key) => o?.[key], obj) ?? fallback

const loadConfig = () => {
  localConfig = readConfig('config.json')
  if (localConfig.trim() === '') return
  localConfig = JSON.parse(localConfig)

  replier = getConfigPath(localConfig, 'replier.name', replier)
  tcan = getConfigPath(localConfig, 'tcan', tcan)
  server = getConfigPath(localConfig, 'server', server)
  password = getConfigPath(localConfig, 'replier.password', '')
  email = getConfigPath(localConfig, 'replier.email', '')

  config = { ...localConfig }
}

loadConfig()

const configmensi = {
  server,
  nick: replier,
  options: {
    autoConnect: true,
    autoRejoin: true,
    autoRenick: true,
    channels: [],
    password,
    debug: false,
    messageSplit: 1900,
    realName: 'https://mw.lojban.org/papri/IRC_Bots',
    userName: replier,
    floodProtection: true,
    floodProtectionDelay: 400,
    // Reconnect when connection is lost (infinite retries, 5s then 10s backoff cap)
    retryCount: null,
    retryDelay: 5000,
    // Detect stuck/half-open connections via ping (silence 2.5 min, timeout 60s)
    millisecondsOfSilenceBeforePingSent: 2.5 * 60 * 1000,
    millisecondsBeforePingTimeout: 60 * 1000,
  },
}

const loadUserSettings = () => {
  const localConfig = readConfig('user-settings.json')
  if (localConfig.trim() === '') return
  userSettings = JSON.parse(localConfig)
}

loadUserSettings()

const updateUserSettings = () => {
  const configDirectory = path.join(home_path, 'config')
  ensureDirExistence(configDirectory)
  const body = JSON.stringify(userSettings, null, 2)
  const filename = 'user-settings.json'
  const file = path.join(configDirectory, filename)
  try {
    fs.writeFileSync(file, body, 'utf8')
    log('User settings updated')
  } catch (e) {
    // If we get an “ENOENT” error, we return an empty string.
    // Other errors are still thrown.
    if (e.code !== 'ENOENT') {
      throw e
    }
  }
}

// IRC bot
let clientmensi
if (!config.disableIrcBots && password) {
  log('channels', configmensi.options.channels)
  clientmensi = new Irc.Client(
    configmensi.server,
    configmensi.nick,
    configmensi.options
  )
}

function benji({ socket, sendTo, what, action }) {
  if (socket) {
    socket.emit('la_livla_cu_cusku', {
      message: what,
    })
    return what
  } else if (clientmensi) {
    if (!action) {
      clientmensi.say(sendTo, what)
    } else {
      clientmensi.action(sendTo, what)
    }
  }
}

const bangu = (lng, username) => {
  let ret = ''
  lng = lng.trim().toLowerCase()
  if (lng.length > LANGUAGE_CODE_MAX_LENGTH) {
    return ret
  }
  if (!userSettings[username]) {
    userSettings[username] = {}
  }
  userSettings[username].language = lng
  switch (lng) {
    // ME(speaking in third person) isn't implemented in irc.js
    case 'lv':
      ret = `Es ar '${username}' turpmāk runāšu latviešu valodā.`
      break
    case 'jbo':
      ret = `.i ca\'e mi co\'a tavla fi la\'o zoi.'${username}.zoi. fo lo lojbo`
      break
    case 'en':
      ret = `I will speak to '${username}' in English from now on.`
      break
    case 'ru':
      ret = `Теперь я буду говорить с '${username}' по-русски.`
      break
    default:
      ret = `.i ca\'e mi co\'a tavla fi la\'o zoi.'${username}.zoi. fo lo lojbo`
      break
  }
  updateUserSettings()
  return ret
}

const retrieveUserLanguage = (username, lng) => {
  if (!userSettings[username]?.language) {
    return lng ?? defaultLanguage
  }
  return userSettings[username].language
}

const lojTemplate = (s) => {
  let out = s.replace(/\$.*?\$/g, (match) => {
    const inner = match.slice(1, -1)
    return inner
      .replace(/(\w+)_\{(\d+)\}/g, '$1$2')
      .replace(/(\w+)_(.+)/g, '$1$2')
      .replace(/\{/g, '[')
      .replace(/\}/g, ']')
  })
  return out
    .replace(/\{(.*?)\}/g, (_, inner) => inner)
    .replace(/`/g, "'")
    .replace(/ {2,}/g, ' ')
}

const getLocalizationString = ({
  language,
  param,
  json,
  string,
  defaultLanguage = 'en',
}) => {
  if (!language || !json[language] || !json[language][string])
    language = defaultLanguage
  return (json[language][string] || '').replace(/%s/g, param || '')
}
// --- Lensisku API (online search; phrases excluded) ---
async function lensiskuSemanticSearch({ search, language, per_page = 10, page = 1 }) {
  const langId = lensiskuLangId(language)
  const [err, res] = await to(
    axios.get(`${LENSISKU_BASE}/api/jbovlaste/semantic-search`, {
      params: {
        page: page || 1,
        per_page: per_page || 10,
        search: search || '',
        include_comments: true,
        languages: langId,
        group_by_thread: false,
        search_in_phrases: false,
        semantic: true,
      },
      timeout: LENSISKU_TIMEOUT_MS,
    })
  )
  if (err) {
    log('lensisku semantic-search error', err.message)
    return { definitions: [], total: 0 }
  }
  return {
    definitions: res.data?.definitions || [],
    total: res.data?.total ?? 0,
    decomposition: res.data?.decomposition || [],
  }
}

function filterBySimilarity(definitions, query = null, minSimilarity = LENSISKU_MIN_SIMILARITY) {
  if (!Array.isArray(definitions)) return definitions
  const q = query != null ? String(query).trim().toLowerCase() : null
  return definitions.filter((d) => {
    const word = (d.valsiword || '').trim().toLowerCase()
    if (q !== null && word === q) return true
    return typeof d.similarity !== 'number' || d.similarity > minSimilarity
  })
}

async function lensiskuDefinitionsSearch({ search, language, selmaho, per_page = 30 }) {
  const langId = lensiskuLangId(language)
  const params = {
    search: search || undefined,
    languages: langId,
    search_in_phrases: false,
    per_page: per_page || 30,
  }
  if (selmaho) params.selmaho = selmaho
  const [err, res] = await to(
    axios.get(`${LENSISKU_BASE}/api/jbovlaste/definitions`, {
      params,
      timeout: LENSISKU_TIMEOUT_MS,
    })
  )
  if (err) {
    log('lensisku definitions error', err.message)
    return { definitions: [], total: 0 }
  }
  return {
    definitions: res.data?.definitions || [],
    total: res.data?.total ?? 0,
  }
}

function formatLensiskuDef(d, language) {
  const arr = []
  if (d.type_name)
    arr.push(
      getLocalizationString({
        language,
        param: d.type_name,
        json: locals,
        string: 'klesi',
      })
    )
  if (d.selmaho)
    arr.push(
      getLocalizationString({
        language,
        param: d.selmaho,
        json: locals,
        string: 'selmaho',
      })
    )
  if (d.valsiword)
    arr.push(
      getLocalizationString({
        language,
        param: d.valsiword,
        json: locals,
        string: 'valsi',
      })
    )
  if (d.definition)
    arr.push(
      getLocalizationString({
        language,
        param: lojTemplate(d.definition),
        json: locals,
        string: 'smuvelcki',
      })
    )
  if (d.notes)
    arr.push(
      getLocalizationString({
        language,
        param: lojTemplate(d.notes),
        json: locals,
        string: 'pinka',
      })
    )
  if (d.examples && d.examples.length > 0)
    arr.push(
      getLocalizationString({
        language,
        param: d.examples.map((e) => e.content).join('; '),
        json: locals,
        string: 'mupli',
      })
    )
  if (d.username)
    arr.push(
      getLocalizationString({
        language,
        param: d.username,
        json: locals,
        string: 'finti',
      })
    )
  return arr.join(' ').trim()
}

const prettyLujvoScore = (items) =>
  items
    .filter(({ lujvo }) => /[aeiou]/.test(lujvo.slice(-1)[0]))
    .map(({ lujvo, score }) => `${lujvo}: ${score}`)
    .slice(0, 4)
    .join(', ')

async function multipleDefs({ word, language }) {
  let lin = word
    .replace(/\"/g, '')
    .replace(/\)$/, '')
    .replace(/^[\(\.]/, '')
  let pre = ''
  if (lojban.xulujvo(word)) {
    try {
      const l = lojban.jvokaha_gui(word)
      const f = lojban
        .jvozba(l)
        .filter(({ lujvo }) => /[aeiou]/.test(lujvo.slice(-1)))
      const fslice = f.slice(0, Math.min(f.length, LUJVO_TOP_N))
      const arr_defs = []
      for (const { lujvo } of fslice) {
        const data = await lensiskuSemanticSearch({ search: lujvo, language, per_page: 3 })
        const defs = filterBySimilarity(data.definitions || [], lujvo).map((d) => formatLensiskuDef(d, language))
        if (defs.length) arr_defs.push(defs.join('\n'))
      }
      const l_joined = l.join(' ')
      pre = `${prettyLujvoScore(fslice)}\n${l_joined}\n`
      if (arr_defs.length > 0) {
        return {
          count: arr_defs.length,
          reply: pre + arr_defs.join('\n'),
        }
      }
    } catch (e) {
      log(e.toString())
      return { count: 0, reply: e.toString() }
    }
  }
  const data = await lensiskuSemanticSearch({ search: lin, language, per_page: 5 })
  const defs = filterBySimilarity(data.definitions || [], lin)
  if (defs.length > 0) {
    const reply = defs.map((d) => formatLensiskuDef(d, language)).join('\n')
    return { count: defs.length, reply }
  }
  const mulno = await mulnoSisku({ word: lin, language })
  if (mulno.count > 0) return { count: mulno.count, reply: pre + mulno.reply }
  if (pre !== '') return { count: 1, reply: pre }
  return { count: 0, reply: nodasezvafahi }
}

async function mulnoSisku({ word, language }) {
  const data = await lensiskuDefinitionsSearch({
    search: word,
    language,
    per_page: 35,
  })
  const defs = data.definitions || []
  let r = defs.map((d) => d.valsiword).filter(Boolean)
  r = uniques(r)

  const xo = r.length
  if (xo > MAX_DEFINITIONS_LIST) {
    r.splice(MAX_DEFINITIONS_LIST)
    r.push('...')
  }
  if (xo > 1) {
    return { count: xo, reply: `${xo} da se zvafa'i: ${r.join(', ').trim()}` }
  }
  if (r.length === 1) {
    const single = defs.find((d) => (d.valsiword || '').toLowerCase() === r[0].toLowerCase())
    let reply
    if (single) {
      reply = formatLensiskuDef(single, language)
    } else {
      const d2 = await lensiskuSemanticSearch({ search: r[0], language, per_page: 1 })
      const one = filterBySimilarity(d2.definitions || [], r[0])[0]
      reply = one ? formatLensiskuDef(one, language) : nodasezvafahi
    }
    return { count: 1, reply }
  }
  return { count: 0, reply: nodasezvafahi }
}

async function selmaho(word) {
  word = word.toLowerCase()
  const data = await lensiskuDefinitionsSearch({
    search: null,
    language: 'en',
    selmaho: word.toUpperCase().replace(/h/g, 'H'),
    per_page: 50,
  })
  const defs = data.definitions || []
  const full = uniques(defs.map((d) => d.valsiword).filter(Boolean))
  if (full.length > 0) {
    return `[${word.toUpperCase().replace(/H/g, 'h')}] ${full.join(',')}`
  }
  return ".i no da se zvafa'i"
}

async function vlaste({ word, language }) {
  word = word.toLowerCase().trim()
  let ret
  if (word.slice(0, 5).trim() === '/full') {
    ret = await mulnoSisku({ word: word.slice(6).trim(), language })
  } else {
    ret = await multipleDefs({ word, language })
  }
  if (ret.count === 1) {
    ret.reply = ret.reply.replace(
      new RegExp(`(.{${MESSAGE_SPLIT_MIN},${MESSAGE_SPLIT_MAX}})(, |[ ."\\/])`, 'g'),
      '$1$2\n'
    )
  }
  return ret
}

const sidju = () => {
  const sidj = {
    en: `Parsers: type ".ilm " (stable BPFK grammar), ".beta " (experimental), ".jbofihe " (jbofi'e), or ".yacc " (official yacc) followed by the text to show the structure of sentences.\nLojban dictionary: type ".language-code word", where "language-code" is one of jbo,en,ru,es,fr,fr-facile,ja,de,eo,zh,hu,sv. This searches in both directions.\n".selmaho CAhA" gives "bi'ai, ca'a, ..."\n".rafsi kulnu" gives "klu", ".rafsi klu" gives "kulnu"\n".lujvo klama gasnu" build the lujvo "klagau" plus other lengtheir versions with their lujvo scores.\nOther dictionaries: ".toki ", ".laadan ", ".loglan "\nLojban <-> Loglan conversion (incomplete): ".coi ", ".loi "`,
  }
  return sidj.en
}

const gimkaConflicts = () => ".i gimka cu nitcu lo vreji .e mi na pilno lo vreji"
const wordnet = ({ socket, sendTo, text }) => {
  const wn = new natural.WordNet()
  wn.lookup(text, (defs) => {
    if (!defs || defs.length === 0) {
      benji({ socket, sendTo, what: '[not found]' })
      return
    }
    defs.forEach((w) => {
      const num = w.synsetOffset ? `[${w.synsetOffset}] ` : ''
      const lemma = w.lemma ? `"${w.lemma}" ` : ''
      const pos = w.pos ? `/${w.pos}/ ` : ''
      // const wCnt = w.wCnt ? `frequency: ${w.wCnt}` : '';
      const firstline = (lemma + pos + num).trim()
      const prettyfirstline = firstline !== '' ? `${firstline} -\n` : ''
      const def = w.def ? `..... ${w.def}\n` : ''
      const exp = w.exp && w.exp.length > 0 ? `..... examples: ${w.exp}\n` : ''
      const syns = w.synonyms
        ? `..... synonyms: ${w.synonyms
          .toString()
          .split(',')
          .map((i) => i.replace(/_/g, ' '))
          .join(', ')}\n`
        : ''
      const whole = prettyfirstline + def + exp + syns
      benji({ socket, sendTo, what: whole })
    })
  })
}
const wiktionary = ({ socket, sendTo, text, bangu }) => {
  const wiktLangMap = { en: 'English', es: 'Spanish', jbo: 'Lojban', ja: 'Japanese', zh: 'Chinese', ru: 'Russian' }
  let wor = text
  if (!bangu) {
    const parts = text.split('/')
    if (parts.length > 1) {
      bangu = wiktLangMap[parts[0]] ?? parts[0]
      wor = parts.slice(1).join('')
    } else {
      bangu = 'English'
      wor = text
    }
  }
  lojban.wiktionary(wor, bangu, (result) => benji({ socket, sendTo, what: result }))
}

async function rafsi_giho_nai_se_rafsi(te_gerna) {
  const g = te_gerna.replace(/[^a-z'\.]/g, '')
  if (!g) return ".i no da se zvafa'i"
  const data = await lensiskuDefinitionsSearch({ search: g, language: 'en', per_page: 40 })
  const defs = data.definitions || []
  const rafsiList = []
  const selrafsiList = []
  for (const d of defs) {
    const w = (d.valsiword || '').toLowerCase()
    if (w === g) {
      const r = d.rafsi || ''
      if (r) rafsiList.push(...r.split(/[\s,;]+/).filter(Boolean))
    }
    const r = (d.rafsi || '').toLowerCase()
    if (r === g || r.split(/[\s,;]+/).includes(g)) selrafsiList.push(d.valsiword)
    const place = d.place_keywords || []
    if (place.some((pk) => (pk.keyword || pk.word || '').toLowerCase() === g)) selrafsiList.push(d.valsiword)
  }
  const res = []
  if (uniques(rafsiList).length > 0) {
    res.push(uniques(rafsiList).map((i) => `ra'oi ${i}`).join(' .e ') + ` rafsi zo ${te_gerna}`)
  }
  if (uniques(selrafsiList).length > 0) {
    res.push(uniques(selrafsiList).map((i) => `zo ${i}`).join(' .e ') + ` se rafsi ra'oi ${te_gerna}`)
  }
  if (res.length === 0) return ".i no da se zvafa'i"
  return res.join('\n')
}

function uniques(array) {
  return [...new Set(array)]
}

function replyToHashed({ text, socket, sendTo }) {
  if (hashed[text]) {
    benji({ socket, sendTo, what: hashed[text] })
    return true
  }
}

const jsonCommand = {
  lujvo: ({ text }) => {
    if (text.indexOf(' ') === -1) return { error: true }
    let ma_lujvo
    try {
      ma_lujvo = lojban.jvozba(text.split(' '))
      ma_lujvo = prettyLujvoScore(ma_lujvo)
    } catch (e) {
      ma_lujvo = e.toString()
    }
    return ma_lujvo
  },
  cma: ({ origText }) => lojban.romoi_lahi_cmaxes(origText).kampu,
  k: ({ origText }) => lojban.ilmentufa_off(origText, 'C', true).kampu,
  ilm: ({ origText }) => lojban.ilmentufa_off(origText, 'T', true).kampu,
  'ilm+': ({ origText }) => {
    const params = `${origText} `.split('+')[1].toUpperCase()
    return lojban.ilmentufa_off(origText, params, true).kampu
  },
  beta: ({ origText }) => lojban.ilmentufa_exp(origText, 'T', true).kampu,
  'beta+': ({ origText }) => {
    const params = `${origText} `.split('+')[1].toUpperCase()
    return lojban.ilmentufa_exp(origText, params, true).kampu
  },
  raw: ({ origText }) => lojban.ilmentufa_off(origText, 'NJ', true).kampu,
  zei: ({ origText }) => lojban.zeizei(origText),
  help: ({ }) => sidju(),
  anji: ({ text }) => lojban.anji(text),
  modzi: ({ text }) => lojban.modzi(text),
  ruk: ({ text }) => lojban.rukylermorna(text),
  kru: ({ text }) => lojban.krulermorna(text),
  bangu: ({ text, from: username }) => bangu(text, username ?? 'user'),
  selmaho: async ({ text }) => await selmaho(text),
  "selma'o": async ({ text }) => await selmaho(text),
  rafsi: async ({ text }) => await rafsi_giho_nai_se_rafsi(text.replace(/[^a-z'\.]/g, '')),
  gloss: ({ text }) => lojban.gloss(text, 'en', false, true).join(' '),
  gimka: ({ text }) => gimkaConflicts(text.replace(/[^a-z'.\*0-9]/g, '')),
  loi: ({ text }) => lojban.lojban2loglan(text),
  coi: ({ text }) => lojban.loglan2lojban(text),
  rot13: ({ text }) => lojban.rotpaci(text),
  jb: ({ }) =>
    'Dictionary with Examples can be accessed via https://mw.lojban.org/papri/L17-B',
}

async function processCommand({ socket, sendTo, text = '', origText = '', from }) {
  let cmd
  try {
    cmd = text.split(' ')[0].split('').slice(1).join('')
  } catch (e) {
    return
  }
  text = text.split(' ').slice(1).join(' ')
  origText = origText.split(' ').slice(1).join(' ')
  const ctx = { text, origText, from }
  if (jsonCommand[cmd]) {
    const what = await jsonCommand[cmd](ctx)
    if (what && what.error) {
      const fallbackLang = sendTo === '#jbosnu' ? 'jbo' : 'en'
      return processCommand({ socket, sendTo, text: `.${fallbackLang} ${text}`, origText: `.${fallbackLang} ${origText}`, from })
    }
    if (what != null) {
      benji({ socket, sendTo, what })
    }
    return true
  }
  const leftMatched = Object.keys(jsonCommand).filter(
    (i) => cmd.search(new RegExp('^' + i + '(?![a-z])', 'igm')) === 0
  )
  if (leftMatched[0]) {
    const what = await jsonCommand[leftMatched[0]](ctx)
    if (what != null) {
      benji({ socket, sendTo, what })
    }
    return true
  }
  log('Unknown command:', cmd)
  if (jsonWiktionary[cmd]) {
    jsonWiktionary[cmd]({ socket, sendTo, text })
    return true
  }
  if (robangu.includes(cmd)) {
    let what
    if (sendTo === '#jbosnu' && cmd !== 'jbo') {
      what = 'ko lojbo .iu'
      benji({ socket, sendTo, what })
    } else {
      what = await vlaste({ word: text, language: cmd })
      if (cmd === 'fr') {
        const what_alt = await vlaste({ word: text, language: 'fr-facile' })
        if (what_alt.count + what.count === 0)
          benji({ socket, sendTo, what: what.reply })
        if (what.count > 0) benji({ socket, sendTo, what: what.reply })
        if (what_alt.count > 0) benji({ socket, sendTo, what: what_alt.reply })
      } else {
        benji({ socket, sendTo, what: what.reply })
      }
    }
    return true
  }
}

const jsonWiktionary = {
  wn: (args) => wordnet(args),
  wikt: (args) => wiktionary(args),
  den: (args) => wiktionary({ ...args, bangu: 'English' }),
  dru: (args) => wiktionary({ ...args, bangu: 'Russian' }),
  dzh: (args) => wiktionary({ ...args, bangu: 'Chinese' }),
  deo: (args) => wiktionary({ ...args, bangu: 'Esperanto' }),
}

function removePrefix(text) {
  return text.replace(/^\.[^ ]+ /, '')
}

async function processor({ from, towhom, text, socket }) {
  const sendTo = towhom && towhom.includes('#') ? towhom : from
  const bridgeMatch = text.match(/^<(.*?)>: /)
  if (bridgeMatch) {
    from = bridgeMatch[1]
    text = text.replace(/^<.*?>: /, '')
  }
  const origText = text
  text = text.toLowerCase().trim().replace(/’/g, "'")
  let inLanguage = defaultLanguage
  if (text.charAt(0) === '#' && replyToHashed({ text, socket, sendTo })) return
  if (text.search(RegExp(commandPrefix)) === 0) {
    const r = await processCommand({ text, origText, socket, sendTo, from })
    if (r) return
  }
  let what
  switch (true) {
    case text.search("(\\.i |i |)ma rafsi zo [a-z']+") === 0:
      const rg = /.*ma rafsi zo ([a-z']+).*/
      what = await rafsi_giho_nai_se_rafsi(
        text.match(rg)[1].replace(/[^a-z'\.]/g, '')
      )
      break
    case text.search("ra'oi [a-z']+ rafsi ma") === 0:
      const reg = /ra'oi ([a-z']+) rafsi ma/
      what = await rafsi_giho_nai_se_rafsi(
        reg.exec(text)[1].replace(/[^a-z'\.]/g, '')
      )
      break
    case text.indexOf(`${replier}: loadconfig`) === 0:
      loadConfig()
      what = 'config reloaded from config.json'
      break
    case text.indexOf('?:') === 0:
      inLanguage = retrieveUserLanguage(from, inLanguage)
      what = await vlaste({ word: text, language: inLanguage })
      break // Gives definition of valsi in the default language set to user
    case text === `${replier}: ju'i`:
      what = "re'i"
      break
    case text === `${replier}: io`:
      what = 'io'
      break
    case text === `${replier}: aigne`:
      what = 'CommonSenseError: Expected normal word but Curtis found.'
      break
    case text === `${replier}: help`:
      what = sidju()
      break
    case sendTo === from:
      // Gives definition of valsi in the default language set to user
      inLanguage = retrieveUserLanguage(from, inLanguage)
      what = await vlaste({ word: ` ${text.trim()}`, language: inLanguage })
      break
  }
  if (what) {
    if (what.reply) what = what.reply
    benji({ socket, sendTo, what })
    return
  }

  switch (true) {
    case text.search(RegExp(`${commandPrefix}yacc `)) === 0 ||
      text.search(RegExp(`${commandPrefix}cowan `)) === 0:
      tcepru(removePrefix(text), sendTo, socket)
      break
    case text.search(RegExp(`${commandPrefix}gerna `)) === 0 ||
      text.search(RegExp(`${commandPrefix}jbofi['h]e `)) === 0:
      jbofihe(removePrefix(text), sendTo, socket)
      break
    // Change default language
    case text.indexOf(`${replier}: mhnt `) === 0:
      ningaumahantufa(text.slice(12), socket)
      break
    case text.indexOf(`${replier}: getgr `) === 0:
      getmahantufagrammar(text.slice(13), socket)
      break
  }
}

if (!config.disableIrcBots && password) {
  let identified = false
  let channelsToJoin = []
  try {
    channelsToJoin = String(tcan || '').split(',').map(c => c.trim()).filter(c => c)
  } catch (e) {
    log('Error parsing channels list:', e)
  }
  log(`Initialized with channels to join: ${JSON.stringify(channelsToJoin)}`)
  let joinChannelsTimeout = null

  const isNickServIdentificationSuccess = (noticeText) => {
    const t = String(noticeText ?? '').toLowerCase()
    return (
      t.includes('password accepted') ||
      t.includes('you are now identified') ||
      t.includes('successfully identified') ||
      t.includes('you are already identified') ||
      t.includes('you have been identified') ||
      (t.includes('identified') && !t.includes('not') && !t.includes('not logged'))
    )
  }

  // Watchdog: if no IRC traffic for this long, force disconnect so client can reconnect
  const IRC_WATCHDOG_MS = 6 * 60 * 1000 // 6 minutes
  let ircWatchdogTimer = null
  const clearIrcWatchdog = () => {
    if (ircWatchdogTimer) {
      clearTimeout(ircWatchdogTimer)
      ircWatchdogTimer = null
    }
  }
  const startIrcWatchdog = () => {
    clearIrcWatchdog()
    ircWatchdogTimer = setTimeout(() => {
      ircWatchdogTimer = null
      log(`IRC watchdog: no activity for ${IRC_WATCHDOG_MS / 60000} min, disconnecting to reconnect`)
      if (clientmensi) clientmensi.disconnect()
    }, IRC_WATCHDOG_MS)
  }
  const resetIrcWatchdog = () => {
    if (clientmensi && clientmensi.conn && !clientmensi.conn.destroyed) startIrcWatchdog()
  }

  // If socket stops being writable (half-open connection), force reconnect
  const IRC_WRITABILITY_CHECK_MS = 2 * 60 * 1000 // 2 minutes
  let ircWritabilityCheckInterval = null
  const startIrcWritabilityCheck = () => {
    if (ircWritabilityCheckInterval) return
    ircWritabilityCheckInterval = setInterval(() => {
      if (!clientmensi || !clientmensi.conn) return
      const conn = clientmensi.conn
      if (conn.destroyed || conn.writable === false) {
        log('IRC socket not writable or destroyed, disconnecting to reconnect')
        clearIrcWatchdog()
        if (ircWritabilityCheckInterval) {
          clearInterval(ircWritabilityCheckInterval)
          ircWritabilityCheckInterval = null
        }
        clientmensi.disconnect()
      }
    }, IRC_WRITABILITY_CHECK_MS)
  }
  const stopIrcWritabilityCheck = () => {
    if (ircWritabilityCheckInterval) {
      clearInterval(ircWritabilityCheckInterval)
      ircWritabilityCheckInterval = null
    }
  }

  const joinChannels = () => {
    log(`joinChannels() invoked. Identified: ${identified}`)
    if (identified) {
      log(`joinChannels() called but already identified, skipping`)
      return // Already joined
    }
    identified = true
    log(`Joining channels: ${channelsToJoin.join(', ')}`)
    channelsToJoin.forEach((channel, index) => {
      setTimeout(() => {
        log(`Attempting to join ${channel}...`)
        clientmensi.join(channel)
      }, index * 500) // Stagger joins to avoid flood
    })
  }

  // Identify with NickServ immediately after registration
  clientmensi.on('registered', () => {
    startIrcWatchdog()
    startIrcWritabilityCheck()
    if (password) {
      log(`Identifying with NickServ as ${replier} (password length: ${password.length} chars)`)
      // Try IDENTIFY command - on Libera Chat, the format is: IDENTIFY password
      // Some networks require: IDENTIFY nickname password, but Libera uses just password
      setTimeout(() => {
        if (identified) {
          log(`Already identified, skipping explicit IDENTIFY command`)
          return
        }
        log(`Sending: /msg NickServ IDENTIFY ${password.substring(0, 3)}...`)
        clientmensi.say('NickServ', `IDENTIFY ${password}`)
      }, 1000)
      // Fallback: join channels after 15 seconds if we don't get a notice
      // (increased from 5s to allow more time for NickServ response)
      joinChannelsTimeout = setTimeout(() => {
        if (!identified) {
          log(`Timeout waiting for NickServ confirmation, attempting to join channels anyway...`)
          joinChannels()
        }
      }, 15000)
    } else {
      log(`WARNING: No password configured for NickServ identification`)
    }
  })

  // Add raw event listener to catch NickServ messages for debugging
  clientmensi.on('raw', (message) => {
    resetIrcWatchdog()
    // Log all NOTICE messages to see structure
    if (message.command === 'NOTICE') {
      const prefix = message.prefix || ''
      const nick = message.nick || prefix.split('!')[0] || ''
      const args = message.args || []
      log(`[RAW] NOTICE from prefix="${prefix}" nick="${nick}" args=${JSON.stringify(args)} command=${message.command}`)
      
      if (nick.toLowerCase() === 'nickserv' || prefix.toLowerCase().includes('nickserv')) {
        const noticeText = args[1] ? String(args[1]) : (args[0] ? String(args[0]) : '')
        log(`[RAW] NickServ NOTICE text: "${noticeText}"`)
        const noticeTextLower = noticeText.toLowerCase()
        
        // Check if nickname is not registered and try to register it
        if ((noticeTextLower.includes('is not a registered nickname') || 
             noticeTextLower.includes('is not registered') ||
             noticeTextLower.includes('not a registered')) && !identified) {
          log(`Nickname ${replier} is not registered. Attempting to register...`)
          if (email) {
            log(`Registering ${replier} with email ${email}`)
            clientmensi.say('NickServ', `REGISTER ${password} ${email}`)
          } else {
            log(`WARNING: No email configured for registration. Please add "replier.email" to config.json`)
            log(`Attempting registration without email (may not work on all networks)...`)
            // Some networks allow registration without email, but Libera Chat requires it
            clientmensi.say('NickServ', `REGISTER ${password}`)
          }
          return
        }
        
        // Check for successful registration
        if (noticeTextLower.includes('registered successfully') ||
            noticeTextLower.includes('has been registered') ||
            noticeTextLower.includes('registration successful')) {
          log(`Nickname ${replier} registered successfully. Verifying email if needed...`)
          // After registration, we still need to identify
          setTimeout(() => {
            if (password) {
              log(`Identifying with NickServ after registration...`)
              clientmensi.say('NickServ', `IDENTIFY ${password}`)
            }
          }, 2000)
          return
        }
        
        if (isNickServIdentificationSuccess(noticeTextLower) && !identified) {
          if (joinChannelsTimeout) {
            clearTimeout(joinChannelsTimeout)
            joinChannelsTimeout = null
          }
          log(`Successfully identified with NickServ (via raw event)`)
          joinChannels()
        }
      }
    } else if (['400', '401', '402', '403', '404', '405', '406', '407', '433', '471', '472', '473', '474', '475', '476', '477', 'JOIN'].includes(message.command) || message.command >= 400) {
       // Log errors and JOINs
       log(`[RAW] ${message.command} args=${JSON.stringify(message.args)}`)
    }
  })

  clientmensi.on('join', (channel, nick, _message) => {
    log(`Joined ${channel} as ${nick}`)
  })

  // Listen for notices from NickServ to confirm identification
  clientmensi.on('notice', (...args) => {
    // Log all notice events to debug structure
    log(`[NOTICE EVENT] args.length=${args.length}, args=${JSON.stringify(args.map(a => typeof a === 'string' ? a : (a?.toString ? a.toString() : typeof a)))}`)
    
    // Handle different possible parameter formats
    let from, to, text
    if (args.length === 3) {
      [from, to, text] = args
    } else if (args.length === 2) {
      [from, text] = args
      to = null
    } else if (args.length === 1) {
      const msg = args[0]
      from = msg.nick || msg.from || msg.prefix?.split('!')[0]
      to = msg.to || msg.target
      text = msg.message || msg.text || msg.args?.[1] || msg.args?.[0]
    }
    
    // Convert to string in case it's a Buffer
    const textStr = text && text.toString ? text.toString() : String(text || '')
    const fromStr = from && from.toString ? from.toString() : String(from || '')
    
    // Log all notices from NickServ for debugging
    if (fromStr && fromStr.toLowerCase() === 'nickserv') {
      log(`NickServ notice (from=${fromStr}, to=${to}, text="${textStr}"): ${textStr}`)
      const noticeText = textStr.toLowerCase()
      
      if (isNickServIdentificationSuccess(noticeText)) {
        if (joinChannelsTimeout) {
          clearTimeout(joinChannelsTimeout)
          joinChannelsTimeout = null
        }
        if (!identified) {
          log(`Successfully identified with NickServ`)
          joinChannels()
        }
      } else if (noticeText.includes('password incorrect') || 
                 noticeText.includes('invalid password') ||
                 noticeText.includes('authentication failed') ||
                 noticeText.includes('incorrect password') ||
                 noticeText.includes('invalid credentials')) {
        log(`ERROR: NickServ authentication failed - password may be incorrect`)
        log(`NickServ response: ${textStr}`)
      } else if (noticeText.includes('not registered') || 
                 noticeText.includes('not found') ||
                 noticeText.includes('is not registered') ||
                 noticeText.includes('is not a registered nickname')) {
        log(`Nick ${replier} is not registered with NickServ. Attempting to register...`)
        log(`NickServ response: ${textStr}`)
        if (email) {
          log(`Registering ${replier} with email ${email}`)
          clientmensi.say('NickServ', `REGISTER ${password} ${email}`)
        } else {
          log(`WARNING: No email configured for registration. Please add "replier.email" to config.json`)
          log(`Attempting registration without email (may not work on all networks)...`)
          clientmensi.say('NickServ', `REGISTER ${password}`)
        }
      } else if (noticeText.includes('registered successfully') ||
                 noticeText.includes('has been registered') ||
                 noticeText.includes('registration successful')) {
        log(`Nickname ${replier} registered successfully. Verifying email if needed...`)
        // After registration, we still need to identify
        setTimeout(() => {
          if (password) {
            log(`Identifying with NickServ after registration...`)
            clientmensi.say('NickServ', `IDENTIFY ${password}`)
          }
        }, 2000)
      } else if (noticeText.includes('not logged in') || noticeText.includes('you are not logged')) {
        log(`WARNING: Not logged in - identification may have failed`)
        log(`NickServ response: ${textStr}`)
        // Try identifying again
        if (!identified && password) {
          setTimeout(() => {
            log(`Retrying NickServ identification after 'not logged in' message...`)
            clientmensi.say('NickServ', `IDENTIFY ${password}`)
          }, 1000)
        }
      }
    } else {
      // Log all notices for debugging (can be removed later)
      log(`Notice from ${fromStr} to ${to}: ${textStr}`)
    }
  })

  // Also listen for private messages from NickServ (some networks use PRIVMSG instead of NOTICE)
  clientmensi.on('pm', (from, text) => {
    if (from && from.toLowerCase() === 'nickserv') {
      log(`NickServ PM: ${text}`)
      if (isNickServIdentificationSuccess(text)) {
        if (joinChannelsTimeout) {
          clearTimeout(joinChannelsTimeout)
          joinChannelsTimeout = null
        }
        if (!identified) {
          log(`Successfully identified with NickServ (via PM)`)
          joinChannels()
        }
      }
    }
  })

  clientmensi.on('message', (from, towhom, text) => {
    // Debug: log messages from NickServ
    if (from && from.toLowerCase() === 'nickserv') {
      log(`NickServ message to ${towhom}: ${text}`)
    }
    try {
      Promise.resolve(processor({ from, towhom, text })).catch((err) => {
        log('IRC processor error (message still processed next time)', err && err.message ? err.message : err)
        if (err && err.stack) log(err.stack)
      })
    } catch (err) {
      log('IRC processor sync error', err && err.message ? err.message : err)
    }
  })

  clientmensi.on('error', (message) => {
    // Handle invite-only channel errors (473) gracefully
    if (message.rawCommand === '473' || message.command === 'err_inviteonlychan') {
      const channel = message.args && message.args[1] ? message.args[1] : 'unknown'
      log(`warning: Cannot join invite-only channel ${channel} - skipping`)
      return
    }
    // Handle registered-only channel errors (477) gracefully
    if (message.rawCommand === '477' || message.command === 'err_needreggednick') {
      const channel = message.args && message.args[1] ? message.args[1] : 'unknown'
      log(`warning: Cannot join registered-only channel ${channel} - need to identify with NickServ first`)
      // If we haven't identified yet, try again
      if (!identified && password) {
        setTimeout(() => {
          log(`Retrying NickServ identification...`)
          clientmensi.say('NickServ', `IDENTIFY ${password}`)
        }, 2000)
      }
      return
    }
    log(`error on ${replier}'s listening`, JSON.stringify(message))
  })

  clientmensi.on('close', () => {
    identified = false
    clearIrcWatchdog()
    stopIrcWritabilityCheck()
    if (joinChannelsTimeout) {
      clearTimeout(joinChannelsTimeout)
      joinChannelsTimeout = null
    }
    log(`IRC connection closed; will reconnect (identified reset)`)
  })

  clientmensi.on('pingTimeout', () => {
    identified = false
    clearIrcWatchdog()
    log(`IRC ping timeout; connection considered dead, reconnecting`)
  })

  clientmensi.on('netError', (err) => {
    log(`IRC netError:`, err && err.message ? err.message : err)
  })

  // Log unhandled rejections so one failing command doesn't silently break the bot
  process.on('unhandledRejection', (reason, promise) => {
    log('Unhandled rejection (IRC/processor may be affected)', reason)
  })
} else {
  log('IRC bots not started. Either password not specified or disableIrcBots enabled')
}

const io = require("socket.io")(httpPort)

const IPFromRequest = ({ headers, connection, params }) => {
  let ip
  if (headers && headers['x-forwarded-for']) {
    ip = headers['x-forwarded-for'].split(', ').shift()
  } else if (connection && connection.remoteAddress) {
    ip = connection.remoteAddress
  } else if (params && params.ip) {
    ip = params.ip
  } else {
    ip = '127.0.0.1'
  }
  return ip
}

io.sockets.on('connection', (socket) => {
  socket.on('le_te_cusku_be_fi_la_livla', (data) => {
    if (
      data.data.indexOf(`${replier}: doi`) === -1 &&
      data.data.indexOf(`${replier}: tell`) === -1
    ) {
      processor({ from: 'mw.lojban.org', text: data.data, socket })
    }
  })
  socket.on('pingServer', (_data) => {
    socket.emit('pongServer', 'ok')
  })
  socket.on('sisku', (data) => {
    const ip = IPFromRequest(socket.request)
    const visitor = ua(config.GoogleAnalytics, ip, {
      strictCidFormat: false,
    })
    data.uip = ip
    visitor.pageview(data).send()
  })
})

