// JavaScript Document
// This script generates .html files for la sutysisku of every localization
// the template is taken from cipra/template.html file

//config
const langs = ["en","ru","eo","es","fr-facile","ile","ina","ithkuil","ja","jbo","laadan","ldp","ru","zamenhofo","toki","jb","en-pt-BR","muplis","muplis-eng-pol","cipra"];

function addZero(i) {
		if (i < 10) {
				i = "0" + i;
		}
		return i;
}
//strip out template
function gp(file_m,tag,prefix){
	const m = (file_m.match(new RegExp((prefix===0?'':"window\.") + tag +" *= *[\"']?(.*?)[\"']?;(\\\n|\\\r)",""))||['','false'])[1].replace(/\\\"/g,"\"");
	if (m=='true') return true;
	if (m=='false') return undefined;
	return m;
}
function gpr(file_m,tag,input,fallback,prefix){
	const m = gp(file_m,tag,prefix)||(fallback?fallback:'');
	return input.replace(new RegExp("%"+tag+"%","g"),m);
}
function stripout(file_m,tag,output){
	let a_tag = tag.split("|");
	for (let tagg in a_tag){
		a_tag[tagg]=(file_m.match(new RegExp("window\."+a_tag[tagg]+" *= *[\"']?(.*?)[\"']?;(\\\n|\\\r)",""))||['',''])[1].replace(/\\\"/gm,"\"")=='true';
	}
	const m=a_tag.includes(true);
	const ku = m ? "$1" : "";const antiku = !m ? "$1" : "";
	return output
		.replace(new RegExp("\\\/\\\/<"+tag+">([\\s\\S]*?)\\\/\\\/<\\\/"+tag+">","gm"),ku)
		.replace(new RegExp("<"+tag+">([\\s\\S]*?)<\/"+tag+">","gm"),ku)
		.replace(new RegExp("\\\/\\\/<"+tag+" false>([\\s\\S]*?)\\\/\\\/<\\\/"+tag+">","gm"),antiku)
		.replace(new RegExp("<"+tag+" false>([\\s\\S]*?)<\/"+tag+">","gm"),antiku)
	;
}

///script
const fs = require("fs"),path = require("path-extra");
const template = fs.readFileSync(path.join(__dirname,"../../i/cipra","template.html"),{encoding: 'utf8'});
langs.forEach(function(a){
	const file = fs.readFileSync(path.join(__dirname,"../../i",a,"bangu.js"),{encoding: 'utf8'});
	let b;
	b=gpr(file,"bangudesc",template);
	b=gpr(file,"bangulo",b);
	b=gpr(file,"bangusisku",b,'',0);
	b=gpr(file,"opdescr",b,'',0);
	b=gpr(file,"title",b,"la sutysisku zo'u: ze'i mitysisku lo valsi",0);
	b=gpr(file,"favicon",b,'../pixra/sutysisku.png',0);
	b=gpr(file,"icon16",b,'../pixra/16.png',0);
	b=gpr(file,"icon32",b,'../pixra/32.png',0);
	b=b
		.replace("%ogurl%","https://la-lojban.github.io/sutysisku/"+a+"/index.html")
		.replace("%searchurl%","/i/"+a+"/sisku.xml")
		.replace("%searchtitle%",a+"-sutysisku");
	////non-Lojban sutysisku
	b=stripout(file,"xuzganalojudri\\|lojbo",b);
	b=stripout(file,"xuzganalojudri",b);
	b=stripout(file,"lojbo",b);
	////muplis
	b=stripout(file,"muplis",b);
	//colors for la muplis are different:
	const upper=gp(file,'upperdir');
	const muplis=gp(file,"muplis");
	m="<span id='site-title'><a id='title' href='#'>"+
		(muplis?"<img src=\"../pixra/plise.png\" height='16' width='16'>"+
		"<img src=\"../pixra/pelxuplise.png\" height='16' width='16'>"+
		"<img src=\"../pixra/crinoplise.png\" height='16' width='16'>"+
		"<img src=\"../pixra/blabiplise.png\" height='16' width='16'>"+
		"<img src=\"../pixra/cicnaplise.png\" height='16' width='16'>":
		"<img src=\"../pixra/sutysisku.png\" height='16' width='16'>"
		 ) +
		"<font color='#fff'>"+
		(muplis?"la muplis":"la sutysisku")+
		"</font></a></span>";
	b = b.replace(/%titlelogo%/g,m);
	b = gpr(file,"mupliskari1",b,"56,136,233",0);
	b = gpr(file,"mupliskari2",b,"34,87,213",0);
	b = gpr(file,"mupliskari3",b,"38,99,224",0);
	b = gpr(file,"mupliskari4",b,"25,65,165",0);
	b = gpr(file,"gradpos1",b,"0%",0);
	b = gpr(file,"gradpos2",b,"13%",0);
	b = gpr(file,"gradpos3",b,"88%",0);
	b = gpr(file,"gradpos4",b,"100%",0);
	//delete comments, compress code
	b = b.replace(/^[ \t]+/gm,"");
	b = b.replace(/^\/\/.*$/gm,"");
	b = b.replace(/\/\*((?!\/\*)[\s\S]*?)\*\//gm,"");
	b = b.replace(/<!--[\s\S]*?-->/gm,"");
	b = b.replace(/\n\s*\n/g, '\n');
	fs.writeFileSync(path.join(__dirname,"../../i",a,"index.html"), b);
});

const sisku = fs.readFileSync(path.join(__dirname,"../../i/cipra","sisku.xml"),{encoding: 'utf8'});
langs.forEach(function(a){
	if (a!=='cipra'){
		const file = fs.readFileSync(path.join(__dirname,"../../i",a,"bangu.js"),{encoding: 'utf8'});
		b = sisku.replace("%template%","https://la-lojban.github.io/sutysisku/en/index.html#sisku/{searchTerms}");
		b = b.replace("%shortname%",a+"-sutysisku");
		b=gpr(file,"siskudescr",b);
		fs.writeFileSync(path.join(__dirname,"../../i",a,"sisku.xml"), b);
		//now update manifest
		b = path.join(__dirname,"../"+a+"/","webapp.appcache");
		//change date in manifest
		const d = new Date();
		const n = d.getFullYear() + "-"+
							(addZero(d.getMonth()+1))  + "-" +
							addZero(d.getDate()) + "T"  +
							addZero(d.getHours()) + ":"  +
							addZero(d.getMinutes()) + ":" +
							addZero(d.getSeconds());
		const pars=fs.readFileSync(b,{encoding: 'utf8'}).replace(/\n# .+\n/,'\n# '+n+"\n");
		fs.writeFileSync(b,pars);
		console.log(b + ' updated');
	}
});

langs.forEach(function(a){
	const sisku="'../sisku.js";
	const b = "window = this;var sorcu={};var bau = location.href.split('/').slice(-2)[0];if (bau==='cipra'){bau='en';}\nimportScripts('bangu.js','../data/parsed-"+a.replace(/^cipra$/,'en').replace(/^muplis/,"tatoeba")+".js', "+(a==='cipra'?"'./sisku_2.js":sisku)+"');\npostMessage({kind: 'loading'});\npostMessage({kind: 'ready'});\nvar searchId;\nthis.onmessage = function(ev) {if (ev.data.kind == 'newSearch') {searchId = ev.data.searchId;sisku(ev.data.query, function(results) {postMessage({kind: 'searchResults', results: results,query:ev.data.query});});}};";
	fs.writeFileSync(path.join(__dirname,"../../i",a,"worker.js"), b);
});
