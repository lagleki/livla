//converts lojban text to IPA and then produces audio files using AWS engine
const lojban = require('lojban')
const AWS = require('aws-sdk')
const fs = require('fs')
const config = require('./config.json')
const awsCredentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: config.IdentityPoolId,
})

const settings = {
  awsCredentials: awsCredentials,
  awsRegion: 'us-east-1',
  pollyVoiceId: 'Brian',
  cacheSpeech: true,
}

AWS.config.credentials = settings.awsCredentials
AWS.config.region = settings.awsRegion

const ph_lu = {
  '«': '',
  '»': '',
  '?': '',
  ',': 'ʔ',
  '.': 'ʔ',
  ' ': ' ',
  ˈ: 'ˈ',
  a: 'a',
  e: 'ɛ',
  i: 'i',
  o: 'o',
  u: 'u',
  y: 'ə',
  ai: 'aj',
  ei: 'ɛj',
  oi: 'oj',
  au: 'aw',
  ia: 'ja',
  ie: 'jɛ',
  ii: 'ji',
  io: 'jo',
  iu: 'ju',
  ua: 'wa',
  ue: 'wɛ',
  ui: 'wi',
  uo: 'wo',
  uu: 'wu',
  iy: 'jə',
  uy: 'wə',
  c: 'ʃ',
  j: 'ʒ',
  s: 's',
  z: 'z',
  f: 'f',
  v: 'v',
  x: 'x',
  "'": 'h',
  dj: 'dʒ',
  tc: 'tʃ',
  dz: 'ʣ',
  ts: 'ʦ',
  r: 'r',
  n: 'n',
  m: 'm',
  l: 'l',
  b: 'b',
  d: 'd',
  g: 'g',
  k: 'k',
  p: 'p',
  t: 't',
  '!!': 'ˈ',
  '-': '',
}

async function speak(t) {
  let phs = ''
  words = t.replace(/(?:\r\n|\r|\n)/g, ' ')
  words = lojban
    .cmaxes({ te_gerna: words, versiio: 'sebasna' })
    .kampu.filter((i) => i[0] !== 'drata')
    .map((i) => i[1])
  let output = '<s>\n'
  for (let w = 0; w < words.length; w++) {
    if (words[w] == 'i' || words[w] == "ni'o") {
      output += '</s>\n<s>\n'
    } else if (words[w][0] == '.') {
      output += '<break time="20ms" strength="x-weak" />\n'
    }

    let ph = ''
    for (let i = 0; i < [...words[w]].length; i++) {
      const c = [...words[w]][i]
      if (ph_lu[[...words[w]][i - 1] + c]) ph += ph_lu[[...words[w]][i - 1] + c]
      else if (ph_lu[c + [...words[w]][i + 1]]) continue
      else ph += ph_lu[c]
    }
    phs += ph
    phs += ' '
    output +=
      '<phoneme alphabet="ipa" ph="' + ph + '">' + words[w] + '</phoneme>\n'
    if (words[w][words[w].length - 1] == '.') {
      output += '<break time="20ms" strength="x-weak" />'
    }
  }
  output += '</s>\n'
  phonemes = '<speak><prosody rate="slow">' + output + '</prosody></speak>'
  ipa = phs
  console.log(ipa)
  await requestSpeechFromAWS({ phonemes, text: t })
}

async function requestSpeechFromAWS({ phonemes, text }) {
  return new Promise(function (successCallback, errorCallback) {
    const polly = new AWS.Polly()
    const params = {
      Engine: 'neural',
      OutputFormat: 'mp3',
      TextType: 'ssml',
      Text: phonemes,
      SampleRate: '24000',
      LanguageCode: 'en-GB',
      VoiceId: settings.pollyVoiceId,
    }
    polly.synthesizeSpeech(params, function (error, data) {
      if (error) {
        console.log(error)
      } else {
        fs.writeFileSync(`./build/${text}.mp3`, data.AudioStream)
        successCallback(data.AudioStream)
      }
    })
  })
}
const arr = config.valsi

;(async () => {
  for (let valsi of arr) {
    await speak(valsi)
  }
})()
