// // load peg.js and the file system module
var fs = require("fs")
var PEG = require("pegjs")
// // read peg and build a parser
var camxes_peg = fs.readFileSync("\camxes-exp.js.peg").toString();
var camxes = PEG.buildParser(camxes_peg, {cache: true});
// // test it
camxes.parse("ko'a broda");
// [ 'text',
//   [ 'text_1',
//     [ 'paragraphs', [Object] ] ] ]
// // write to a file
fs.writeFileSync("\camxes-exp.js", camxes.toSource());

