import axios from 'axios';
import { readFileSync } from "fs";
import MDBReader from "mdb-reader";


(async () => {
    const buffer = (await axios.get('https://github.com/torrua/LOD/blob/master/source/LoglanDictionary.mdb?raw=true', {
        responseType: 'arraybuffer'
    })).data
    // const buffer = readFileSync("LoglanDictionary.mdb");
    const reader = new MDBReader(buffer);
    let tableSpells = reader.getTable("WordSpell").getData();
    const tableDefs = reader.getTable("WordDefinition").getData();
    const tableWords = reader.getTable("Words").getData();
    const djifoa = tableWords.filter(i => i.Type === 'Afx' && i.Origin).map(i=>({...i, Word: i.Origin.replace(/[\(\)]/g,'')}))
    // console.log([...new Set(tableDefs.filter(i => i.Usage).map(i=>i.Usage))]);

    console.log(djifoa);
    
    tableSpells = tableDefs
        .map(i => {
            const tmp = ({ ...tableSpells.filter(j => j.WID == i.WID)[0], definition: i, source: tableWords.filter(j => j.WID == i.WID)[0] })
            if (tmp.definition.Usage !== null) {
                tmp.Word = tmp.definition.Usage.replace(/(?<=[a-z])%/g, '').replace(/(?<![a-z])%/g, tmp.Word)
                delete tmp.source;
            }
            //search for djifoa
            const foundDjifoa = djifoa.filter(k => k.Word === tmp.Word).map(k => tableSpells.filter(j=>j.WID===k.WID)[0].Word);
            if (foundDjifoa.length>0) tmp.r = foundDjifoa
            
            return tmp;
        })
        .filter(i => i.source?.Type !== 'Afx')
        .map(i => {
            let notes = []
            if (i.source) {
                if (i.source.UsedIn) notes.push((i.source.UsedIn || '').split(/ *\| */).filter(Boolean).map(i => `{${i}}`).join(", "))
                if (i.source.Origin) notes.push('⬅ ' + i.source.Origin)
            }
            notes = notes.join("\n")
            const obj = ({
                i, WID: i.WID, bangu: 'loglan', w: i.Word, n: notes, d: i.definition.Definition, t: i.source?.Type, s: i.definition.Grammar || i.source?.XType
            })
            if (i.source?.Affixes) obj.r = i.source?.Affixes.split(/ +/)
            Object.keys(obj).forEach(key => [undefined, '', null].includes(obj[key]) && delete obj[key])
            // obj.ss = i
            return obj;
        })

    // table.getColumnNames(), // ['id', 'name', 'color']
    // reader.getTableNames(), // ['Cats', 'Dogs', 'Cars']
    // console.log(JSON.stringify(tableSpells.filter(i => /[a-z]%/.test(i?.i?.definition?.Usage)).map(i => ({ w: i.w, d: i?.i?.definition?.Definition, u: i?.i?.definition?.Usage })), null, 2));
})()
