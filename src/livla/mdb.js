import axios from 'axios'
import MDBReader from 'mdb-reader'

const LOGLAN_MDB_URL =
  'https://github.com/torrua/LOD/blob/master/source/LoglanDictionary.mdb?raw=true'

;(async () => {
  try {
    const { data: buffer } = await axios.get(LOGLAN_MDB_URL, {
      responseType: 'arraybuffer',
    })
    const reader = new MDBReader(buffer)
    let tableSpells = reader.getTable('WordSpell').getData()
    const tableDefs = reader.getTable('WordDefinition').getData()
    const tableWords = reader.getTable('Words').getData()
    const djifoa = tableWords
      .filter((i) => i.Type === 'Afx' && i.Origin)
      .map((i) => ({ ...i, Word: i.Origin.replace(/[()]/g, '') }))
    console.log(djifoa)

    tableSpells = tableDefs
      .map((i) => {
        const spellRow = tableSpells.find((j) => j.WID === i.WID) || {}
        const wordRow = tableWords.find((j) => j.WID === i.WID)
        const tmp = { ...spellRow, definition: i, source: wordRow }
        if (tmp.definition.Usage !== null) {
          tmp.Word = tmp.definition.Usage.replace(/(?<=[a-z])%/g, '').replace(/(?<![a-z])%/g, tmp.Word)
          delete tmp.source
        }
        const foundDjifoa = djifoa
          .filter((k) => k.Word === tmp.Word)
          .map((k) => tableSpells.find((j) => j.WID === k.WID)?.Word)
          .filter(Boolean)
        if (foundDjifoa.length > 0) tmp.r = foundDjifoa
        return tmp
      })
      .filter((i) => i.source?.Type !== 'Afx')
      .map((i) => {
        const notes = []
        if (i.source) {
          if (i.source.UsedIn) {
            notes.push(
              (i.source.UsedIn || '')
                .split(/ *\| */)
                .filter(Boolean)
                .map((seg) => `{${seg}}`)
                .join(', ')
            )
          }
          if (i.source.Origin) notes.push('⬅ ' + i.source.Origin)
        }
        const obj = {
          i,
          WID: i.WID,
          bangu: 'loglan',
          w: i.Word,
          n: notes.join('\n'),
          d: i.definition.Definition,
          t: i.source?.Type,
          s: i.definition.Grammar || i.source?.XType,
        }
        if (i.source?.Affixes) obj.r = i.source.Affixes.split(/ +/)
        for (const key of Object.keys(obj)) {
          if ([undefined, '', null].includes(obj[key])) delete obj[key]
        }
        return obj
      })
  } catch (err) {
    console.error('Loglan MDB processing failed:', err.message)
    throw err
  }
})()
