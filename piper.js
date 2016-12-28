// a script to convert the comic about la .Piper. in to la zbalermorna
var fs = require('fs');
var path = require('path-extra');

var ncp = require('ncp').ncp;

const KEY_CODE_APOSTROPHE = 222;
const UNICODE_RANGE_START = 0xE2300;
const PARSE_MODE_TEXT = 0;
const PARSE_MODE_TAG  = 1;
const lerfu = ".'ptkflscmxbdgvrzjnqwaeiouy";

ncp.limit = 16;
 
function comp (a, b) {
  return function (x) { return a(b(x)); };
}

function formatUnicode (point) {
  return "&#x" + point.toString(16) + ";";
}

function toArray (list) {
  return Array.prototype.slice.apply(list);
}

function translate (text) {
	text = text.replace(/0/g,'no');
	text = text.replace(/1/g,'pa');
	text = text.replace(/2/g,'re');
	text = text.replace(/3/g,'ci');
	text = text.replace(/4/g,'vo');
	text = text.replace(/5/g,'mu');
	text = text.replace(/6/g,'xa');
	text = text.replace(/7/g,'ze');
	text = text.replace(/8/g,'bi');
	text = text.replace(/9/g,'so');
 	return toArray(text).map(comp(formatUnicode, latinToZLM)).join('');
}

function latinToZLM (chr) {
  if (chr === "h" || chr === "'")
    return UNICODE_RANGE_START + 16;
  if (-1 < lerfu.indexOf(chr))
    return UNICODE_RANGE_START + lerfu.indexOf(chr) * 16;
  return chr.codePointAt(0);
}

fs.readdir('./', (err, files) => {//pepp
  files.forEach(fl => {
	  let source = path.join(fl,"jb");
	  let dest = path.join(fl,"zj");
	  ncp(source, dest, function (err) {
	    if (err) {
	      //return console.error(err);
	    }
	  });
	  
	  fs.readdir(dest, (err, files) => {//zj
	      (files||[]).forEach(file => {
			  let tetcidu = path.join(__dirname,dest,file);
			  if (file.slice(-4)==='.svg'){
	          let data = fs.readFileSync(tetcidu, 'utf8');
	          let str = data.split(">");
	          for (let i=0;i<str.length;i++){
	          	  let gun = str[i].split("<");
	          	  let f = gun[0];
				  if (/^[a-z \.0-9\']+$/.test(f)) {gun[0]=translate(f);}
				  // gun[0] = f;
				  // gun = gun.join("<");
	          	  if (file.search("Pepper-and-Carrot_by-David-Revoy_E19\.svg")>=0 && f.trim()!=='') console.log(file + "+++" +  gun[0] +"+++"+/^[a-z \.]+$/.test(f));
				  str[i] = gun.join("<");
	          }
	          str = str.join(">");
	          /*
	          let acc = '';
	          let str = data.split("<tspan");
	          for (let i=1;i<str.length;i++) {
	          	  
	          	  let ki = str[i].indexOf('>');
				  str[i] = [str[i].slice(0,ki), str[i].slice(ki+1)];
	          	  let kitwo = str[i][1].indexOf('<');
	          	  str[i][1] = [str[i][1].slice(0,kitwo), str[i][1].slice(kitwo+1)] 
	          	  str[i][1][0] = translate(str[i][1][0]);
	          	  str[i][1] = (str[i][1]).join('<');
	          	  str[i] = str[i].join(">");
	          	  console.log('\n\n\n\n+++++++++++'+str[i][1][0]);
	              acc = acc + str[i];
	          }
	          acc = str[0] + acc;*/
	          /*str = data.split("<tspan");
	          for (let i=1;i<str.length;i++) {
	          	  let ki = str[i].indexOf('>');
				  str[i] = [str[i].slice(0,ki), str[i].slice(ki+1)];
	          	  let kitwo = str[i][0].indexOf('<');
	          	  let u = [str[i][0].slice(0,kitwo), str[i][0].slice(kitwo+1)] 
	          	  str[i][0] = u;
	          	  str[i][0][0] = translate(u);
	          	  str[i][0] = str[i].join("<");
	          	  str[i] = str[i].join(">");
	              acc = acc + str[i];
	          }
	          acc = str[0] + acc;*/
	          //console.log(acc);
	          

	  	// try{fs.unlinkSync(tetcidu+"-new");}catch(err){}
	          fs.writeFileSync(tetcidu+"-new", str, 'utf8', function (err) {
	             if (err) return console.log(err);
	          });
	    	}
	      });
    });
  });
});





