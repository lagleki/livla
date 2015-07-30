var rafsi = {};
function onUpdateDocumentStore() {
	for (var key in documentStore) {
	var def = documentStore[key];
		if ((def.t||'').match(/lujvo/)) {
			continue;
		}
		for (var i = 0; i < (def.r||[]).length; i++) {
			rafsi[(def.r[i]||'')] = def;
		}
	}
}
onUpdateDocumentStore();

var xulujvo = function (inp){
	var myreg = new RegExp("^"+CVV+CCV+"$|^(?:"+CVV+"(?:r(?!r)|n(?=r))|"+CCV+"|"+CVC+"y?|"+gism+"y)(?:"+CVV+"|"+CCV+"|"+CVC+"y?|"+gism+"y)*(?:"+CVV+"|"+CCV+"|"+gism+V+")$", "gm");
	if((inp.match(myreg)||[]).length==1){return true;}else{return false;}
};

var jvokatna = function (lujvoi){
	var tmp;
	tmp=lujvoi.toLowerCase().replace(/[^a-z']/img,"");
	var myregexp = new RegExp("^("+CVV+")[rn]", "gm");
	var myregexpi = new RegExp("("+gism+V+"$|"+gism+"(?=y)|" + CVV + "|" +CCV + "|" + CVC + ")","g");
	tmp=tmp.replace(myregexp,"$1 ");
	tmp=tmp.replace(myregexpi,"$1 ");
	tmp=tmp.replace(/y/g," ");
	tmp=tmp.replace(/ +/g," ");
	return tmp.trim().split(" ");
};
var C="("+"[bcdfgjklmnprstvxz]"+")";
var V="("+"[aeiou]"+")";
var Vy="("+"[aeiouy]"+")";
var CC="("+"[bcfgkmpsvx][lr]|[td]r|[cs][pftkmn]|[jz][bvdgm]|t[cs]|d[jz]"+")";
var C_C="("+"[bdgjvzcfkpstx][lrmn]|[lrn][bdgjvzcfkpstx]|b[dgjvz]|d[bgjvz]|g[bdjvz]|j[bdgv]|v[bdgjz]|z[bdgv]|c[fkpt]|f[ckpstx]|k[cfpst]|p[cfkstx]|s[fkptx]|t[cfkpsx]|x[fpst]|l[rmn]|r[lmn]|m[lrnbdgjvcfkpstx]|n[lrm]"+")";
var CxC="("+"[lmnr][bcdfgjkpstvx]|l[mnrz]|mn|n[lmrz]|r[lmnz]|b[dgjmnvz]|d[bglmnv]|g[bdjmnvz]|[jz][lnr]|v[bdgjmnz]|f[ckmnpstx]|k[cfmnpst]|p[cfkmnstx]|sx|t[fklmnpx]|x[fmnpst]"+")";
var CyC="("+"("+C+")\\2|[bdgjvz][cfkpstx]|[cfkpstx][bdgjvz]|[cjsz]{2,2}|[ck]x|x[ck]|mz"+")";
var CCV="("+CC+V+")";
var CVV="("+C+"(?:ai|au|ei|oi|"+V+"'"+V+")"+")";
var CVC="("+C+V+C+")";
var gism="("+CC+V+C+"|"+C+V+C_C+")";

function parseLujvo(lujvo) {
	var m = lujvo.match("([a-z']+) zei ([a-z']+)");
	console.log(window.xuzganalojudri);
	if ((window.xuzganalojudri!==true)||(xulujvo(lujvo) !== true)){
		return [lujvo.split(" ").map(function(arg){return arg+"Q";})];
	}
	else if (m) {
			return [[m[1]+"Q",m[2]]];
		}
	else {
		return [jvokatna(lujvo)];
	}
}
