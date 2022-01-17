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
    tableSpells = tableDefs
        .map(i => {
            const tmp = ({ ...tableSpells.filter(j => j.WID == i.WID)[0], definition: i, source: tableWords.filter(j => j.WID == i.WID) })
            if (tmp.definition.Usage !== null) {
                tmp.Word = tmp.definition.Usage.replace(/%/g, tmp.Word)
                delete tmp.source;
            }
            return tmp;
        })
        .map(i => {
            let notes = []
            if (i.source) {
                i.source = i.source[0]
                if (i.source.UsedIn) notes.push((i.source.UsedIn || '').split(/ *\| */).filter(Boolean).map(i => `{${i}}`).join(", "))
                if (i.source.Origin) notes.push('⬅ ' + i.source.Origin)
            }
            notes = notes.join("\n")
            const obj = ({
                bangu: 'loglan', w: i.Word, n: notes, d: i.definition.Definition, t: i.source?.Type, s: i.definition.Grammar || i.source?.XType
            })
            if (i.source?.Affixes) obj.r = i.source?.Affixes.split(/ +/)
            Object.keys(obj).forEach(key => [undefined, '', null].includes(obj[key]) && delete obj[key])
            // obj.ss = i
            return obj;
        })

    // table.getColumnNames(), // ['id', 'name', 'color']
    // reader.getTableNames(), // ['Cats', 'Dogs', 'Cars']
    console.log(JSON.stringify(tableSpells.filter(i => i.w === 'kamla'), null, 2));
    // console.log(JSON.stringify(tableDefs.filter(i => i.Usage !== null), null, 2));
    // console.log(tableWords);

})()
