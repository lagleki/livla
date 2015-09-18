// JavaScript Document
// This script generates .html files for la sutysisku of every localization except la muplis
// the template is taken from template.html file

//config
var langs = ["en","ru","eo","fr-facile","ile","ithkuil","ja","jbo","laadan","ldp","ru","zamenhofo","toki","jb","en-pt-BR"];

///script
var fs = require("fs"),path = require("path-extra");
var templ = fs.readFileSync(path.join(__dirname,"../i/test","template.html"),{encoding: 'utf8'});var bng;var b;
langs.forEach(function(thisa){
	var file = fs.readFileSync(path.join(__dirname,"../i",thisa,"bangu.js"),{encoding: 'utf8'});
	var m = file.match(/window\.bangudesc *= *[\"'](.*?)[\"'];(\n|\r)/)[1].replace(/\\\"/g,"\"");
	b = templ.replace("%bangudesc%",m);
	
	m = file.match(/window\.bangulo *= *[\"'](.*?)[\"'];(\n|\r)/)[1].replace(/\\\"/g,"\"");
	b = b.replace("%bangulo%",m);
	
	m = file.match(/window\.bangusisku *= *[\"'](.*?)[\"'];(\n|\r)/)[1].replace(/\\\"/g,"\"");
	b = b.replace("%2%",m);
	
	m = file.match(/opdescr *= *[\"'](.*?)[\"'];(\n|\r)/)[1].replace(/\\\"/g,"\"");
	b = b.replace("%1%",m);

	b = b.replace("%ogurl%","http://mw.lojban.org/extensions/ilmentufa/i/"+thisa+"/index.html");
	b = b.replace("%searchurl%","/extensions/ilmentufa/i/"+thisa+"/sisku.xml");
	b = b.replace("%searchtitle%",thisa+"-sutysisku");
	try{m = file.match(/titlelogo *= *[\"'](.*?)[\"'];(\n|\r)/)[1].replace(/\\\"/g,"\"");}catch(err){m="<span id='plise'><a id='st' href=\"../\"><img src=\"../sutysisku.png\" height='16' width='16'><span class='site-title'><font color=\"#fff\">la sutysisku</font></span></a></span>";}
	b = b.replace("%titlelogo%",m);
	fs.writeFileSync(path.join(__dirname,"../i",thisa,"index.html"), b);
});

templ = fs.readFileSync(path.join(__dirname,"../i/test","sisku.xml"),{encoding: 'utf8'});var bng;var b;
langs.forEach(function(thisa){
	var file = fs.readFileSync(path.join(__dirname,"../i",thisa,"bangu.js"),{encoding: 'utf8'});
	//var m = file.match(/window\.bangudesc *= *[\"'](.*?)[\"'];(\n|\r)/)[1].replace(/\\\"/g,"\"");
	b = templ.replace("%1%","http://mw.lojban.org/extensions/ilmentufa/i/"+thisa+"/index.html#sisku/{searchTerms}");
	b = b.replace("%2%",thisa+"-sutysisku");
	m = file.match(/siskudescr *= *[\"'](.*?)[\"'];(\n|\r)/)[1].replace(/\\\"/g,"\"");
	b = b.replace("%3%",m);
	fs.writeFileSync(path.join(__dirname,"../i",thisa,"sisku.xml"), b);
});