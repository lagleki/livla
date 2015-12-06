// // load peg.js and the file system module
var fs = require("fs");
var PEG = require("pegjs");
var UglifyJS = require("uglify-js");
//uglifyjs --compress --mangle -- 
// // read peg and build a parser
var cmene = "camxes-exp.js";
var camxes_peg = fs.readFileSync(cmene+".peg").toString();
var camxes = PEG.buildParser(camxes_peg, {cache: true, trace: true});
// // write to a file
// fs.writeFileSync("camxes.js", camxes.toSource());
var fd = fs.openSync(cmene, 'w+');
var buffer = new Buffer('var camxes = ');
fs.writeSync(fd, buffer, 0, buffer.length);
buffer = new Buffer(camxes.toSource());
fs.writeSync(fd, buffer, 0, buffer.length);
buffer = new Buffer("\n\nmodule.exports = camxes;\n\nterm = process.argv[2];\nif (term !== undefined && typeof term.valueOf() === 'string')\n  console.log(JSON.stringify(camxes.parse(term)));\n\n");
fs.writeSync(fd, buffer, 0, buffer.length);
fs.close(fd);
fs.writeFileSync(cmene, UglifyJS.minify(cmene).code);

