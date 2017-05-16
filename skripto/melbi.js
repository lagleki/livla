const fs = require("fs"),
      path = require("path-extra"),
      lojban = require("lojban");

const input = path.join(__dirname, "../zasni/", "eikatna.txt");
const output = path.join(__dirname, "../zasni/","sekatna.txt");
fs.writeFileSync(output, '');

fs.readFileSync(input).toString().split('\n').forEach(function (line) { 
    const a = lojban.ilmentufa_off(line
                            .split("sp\.")[0]
                            .split(" ").slice(1,3).join(" ")
                            .toLowerCase()
                            .replace(/ɩ/g,'i')
                            .replace(/w/g,'u')
                            , 3).toString()
             .replace(/h/g, "H")
             .replace(/[^a-z \.\,'\n]/g, "")
             .replace(/ +/g, " ")
             .replace(/ +\n/g, "\n") +
             '\n';
    fs.appendFileSync(output, a);
});

/*
const byline = require('byline');
const stream = byline(fs.createReadStream(input));
stream.on('line', function(line) { 
    return run_camxesoff(line, 3).toString()
             .replace(/h/g, "H")
             .replace(/[^a-z \.\,'\n]/g, "")
             .replace(/ +/g, " ")
             .replace(/ +\n/g, "\n")
             + '\n';
});
stream.pipe(fs.createWriteStream(output));
*/
console.log('mulno');
