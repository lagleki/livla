var request = require("request");
var libxmljs = require("libxmljs");
var path = require("path-extra");
var fs = require("fs");

//MediaWiki editing
function readConfig(filename) {
	var configDirectory = path.join(path.homedir(),".livla");
	ensureDirExistence(configDirectory);
	file = path.join(configDirectory, filename);
	try {
		return fs.readFileSync(file,{encoding: 'utf8'});
	} catch (e) {
		// If we get an “ENOENT” error, we return an empty string.
		// Other errors are still thrown.
		if (typeof(e.code) === "undefined" || e.code !== 'ENOENT') {
			throw e;
		}
		return "";
	}
}
var mw_edit = function(title,text,resume){
	var mw = readConfig("mw-settings.json"); // Ensure existance
	var mwSettings = JSON.parse(mw);
	var user = mwSettings.ralju.user;
	var pass = mwSettings.ralju.password;
	var bot = require('nodemw');
	var client = new bot(
		{
			"protocol": "https",
			"server": "mw.lojban.org",  // host name of MediaWiki-powered site
			"path": "",                  // path to api.php script
			"debug": false,                // is more verbose when set to true
			"username": user,             // account to be used when logIn is called (optional)
			"password": pass,             // password to be used when logIn is called (optional)
			"userAgent": "Custom UA",      // define custom bot's user agent
			"concurrency": 5               // how many API requests can be run in parallel (defaults to 3)
		}
	);
	
	client.logIn(function(err) {
		if (err) {
			console.log(err);
			return;
		}
		client.edit(title,text,resume,function(err, data) {
			if (err) {
				console.log(err);
				return;
			}
			console.log(data);
		}
		);
	});
};

function ensureDirExistence(path) {
	// We first try to make a dir. If it was missing, now, it is not
	// anymore.
	try {
		fs.mkdirSync(path);
	} catch (e) {
		// If creation of the dir failed, there can be many reasons.
		// However, if the reason is not “there was already a file
		// there!”, we don't want to ignore the error, so we throw it
		// again.
		if (typeof(e.code) === "undefined" || e.code !== 'EEXIST') {
			throw e;
		}
		// In the case where the path was taken, we want to be sure it
		// is a directory. If the path existed *and* it is a directory,
		// all is good.  Otherwise, we would be asking for trouble by
		// trying to use a file, socket, or whatever as a directory.
		if (!fs.statSync(path).isDirectory()) {
			throw new Error("“" + path + "” is not a directory.");
		}
	}
}

function readConfig(filename) {
	var configDirectory = path.join(path.homedir(),".livla");
	ensureDirExistence(configDirectory);
	file = path.join(configDirectory, filename);
	try {
		return fs.readFileSync(file,{encoding: 'utf8'});
	} catch (e) {
		// If we get an “ENOENT” error, we return an empty string.
		// Other errors are still thrown.
		if (typeof(e.code) === "undefined" || e.code !== 'ENOENT') {
			throw e;
		}
		return "";
	}
}

var update_cc_dict = function(){
	var t = path.join(__dirname,"dumps","the_crash_course_dict.csv");
	requestd = request.defaults({jar: true});
	var uri="https://docs.google.com/spreadsheets/d/19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw/export?format=csv&id=19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw&gid=1855189494";
	requestd({
	    uri: uri, method: "GET"
	}).on("error", function (err) {
	}).pipe(fs.createWriteStream(t)).on("finish", function () {
		var tr = path.join(__dirname,"dumps","eng2jbo.tsv");
		requestd = request.defaults({jar: true});
		uri="https://docs.google.com/spreadsheets/d/19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw/pub?gid=1968461413&single=true&output=tsv";
		requestd({
			uri: uri, method: "GET"
		}).on("error", function (err) {}).pipe(fs.createWriteStream(tr)).on("finish", function () {
		var takei = fs.readFileSync(tr,{encoding: 'utf8'});
		var x = takei.replace(/_/g,"").replace(/'/g,"&apos;").split('\n');
		x.shift();
		x=x.sort(
				function (a, b) {
    				return a.toLowerCase().localeCompare(b.toLowerCase());
				}
			);//x is our array
		for (var i=0; i<x.length; i++) {
		    y = x[i].split('\t');
		    y[0]=("''"+y[0]+"''").replace(/^''(.*?) \[(.*?)\]''$/,"''<small>$2</small> $1''");
		    y[1]=y[1].replace(/^([^\{\}@]+)$/,"'''$1'''").replace(/, /g,"''', '''");
		    x[i]=y[0] + "  –  "+y[1];
		}
		var txt = x.join("\n\n").replace(/\{(.*?)\}/g,"'''$1'''").replace(/@@@(.*?)@@@/g,"''$1''");
		takei = fs.writeFileSync(tr+".temp",txt);
		fs.renameSync(tr+".temp",tr);console.log("The Crash Course Eng2Jbo .tsv file updated");

		mw_edit("L17-04",txt,"zmiku se jmina");//title,text,resume
		//todo: reuse takei for .xml dump
		for (var xx in x){
			x[xx] = x[xx].replace(/'''(.*?)'''/g,"{$1}").replace(/^''(.*?)''  –  (.*?)$/,"<valsi word=\"$1\" lang=\"en\">\n\t<definition>$2</definition>\n</valsi>");
		}
		takei = x.join("\n\n").replace(/<(|\/)(small)>|&nbsp;/igm,"");
		//now jbo2eng
		var take = fs.readFileSync(t,{encoding: 'utf8'})+"\n";
		take=take.replace(/➜/igm,"=>");
		take=take.replace(/&/igm,"&amp;");
		//take=take.replace(/<sub>([^< ]*?) ([^< ]*?)/ig,"<sub>$1_$2");
		take=take.replace(/''x<sub>([^<]*?)<\/sub><sub>([^<]*?)<\/sub>''/igm,"$x_$1 $2$");
		take=take.replace(/<(|\/)(small)>|&nbsp;/igm,"");
		take=take.replace(/^(.+?),\"(\n|\r)(.+?) \[(.+?)\] — (.+?)(\n|\r)/igm,"<valsi word=\"$1\" class=\"$4\">\n\t<definition>$5</definition>\n");
		take=take.replace(/^(.+?),\"(\n|\r)(.+?) — (.+?)(\n|\r)/igm,"<valsi word=\"$1\">\n\t<definition>$4</definition>\n");
		take=take.replace(/\"<\/definition>\n/igm,"</definition>\"\n");
		take=take.replace(/\"(\n|\r)/igm,"\n</valsi>\n");
		take=take.replace(/^:'''(.*?)''' — ''(.*?)''$/igm,"\t<example phrase=\"$1\">$2</example>");
		take=take.replace(/^:Comment: (.*?)$/igm,"\t<notes>$1</notes>");
		take=take.replace(/^:Related words: (.*?)$/igm,"\t<related>$1</related>");
		take=take.replace(/^(: *.*?)_\. *$/igm,"$1.");
		take=take.replace(/^: *(.*?)$/igm,"\t<gloss>$1</gloss>");
		take=take.replace(/'''(.*?)'''/igm,"{$1}").replace(/''(.*?)''/igm,"‘$1’");
		take="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<?xml-stylesheet type=\"text/xsl\" href=\"jbovlaste.xsl\"?>\n<dictionary>\n<direction from=\"lojban\" to=\"English (The Crash Course)\">\n" + take + "\n" + takei + "</direction>\n</dictionary>";
		take=take.replace(/ {2,}/g," ");
		take = fs.writeFileSync(t+".temp",take);
		fs.renameSync(t+".temp",path.join(__dirname,"dumps","jb.xml"));console.log("The Crash Course dict. updated");
		
		var uri="https://docs.google.com/spreadsheets/d/19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw/pub?single=true&gid=1855189494&range=B1:B3000&output=csv";
		requestd({uri: uri,method: "GET"}, function(err, response, body) {
			var d = body.split("\n").map(function(a){a=a.replace(/[\"_]/,''); return a;}).join("\n").replace(/ {2,}/g,' ');
			mw_edit("L17-03",d,"zmiku se jmina");//title,text,resume
		});
	});
	});
	//
	var tr = path.join(__dirname,"dumps","eng2jbo.tsv");
	requestd = request.defaults({jar: true});
	uri="https://docs.google.com/spreadsheets/d/19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw/pub?gid=1968461413&single=true&output=tsv";
	//start la sutysisku's dump preparations, make from .xml file
	// LUJVO CONSTRUCTOR PART
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
	
	var xugismu = function (inp){
		var myreg = new RegExp("^"+gism+V+"$", "gm");
		if((inp.match(myreg)||[]).length==1){return true;}else{return false;}
	};
	//actual la sutysisku's dump
	var lng='jb';
	var xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"dumps",lng + ".xml"),{encoding: 'utf8'}));
	var pars='var documentStore = [';
	var rev = xmlDoc.find("/dictionary/direction[1]/valsi");
	String.prototype.unquote = function(){
		return this.replace(/"([^"]+)"/g,"‘$1’").replace(/\\/g,"\\\\");
	};
		for (var i=0;i<rev.length;i++) {
			var hi=rev[i].attr("word").value().replace("\\","\\\\");
			pars+="{\"w\":\""+hi+"\"";
			try{pars+=",\"t\":\""+rev[i].attr("type").value().replace(/\\/g,"\\\\")+"\"";}catch(err){}
			try{pars+=",\"s\":\""+rev[i].find("selmaho[1]")[0].text().unquote()+"\"";}catch(err){}
			try{pars+=",\"l\":\""+rev[i].attr("lang").value()+"\"";}catch(err){}
			try{pars+=",\"d\":\""+rev[i].find("definition[1]")[0].text().unquote()+"\"";}catch(err){}
			try{pars+=",\"n\":\""+rev[i].find("notes[1]")[0].text().unquote()+"\"";}catch(err){}
			try{pars+=",\"g\":\""+rev[i].find("glossword/@word").join(";").replace(/ word=\"(.*?)\"/g,"$1").replace(/"/g,"'").replace("\\","\\\\")+"\"";}catch(err){}
			try{pars+=",\"k\":\""+rev[i].find("related[1]")[0].text().unquote()+"\"";}catch(err){}
			try{
				pars+=",\"e\":\""+rev[i].find("example").toString().replace(/>,</g,">%<").replace(/<example phrase=\"(.*?)\">(.*?)<\/example>/g,"$1 — $2").replace(/""([^\"]*?)""/g,'‘$1’')+"\"";
			}catch(err){}
			var ra=rev[i].find("rafsi//text()[1]");
			if (xugismu(hi)===true){
				ra.push(hi);
				if(hi.indexOf("brod")!==0){ra.push(hi.substr(0,4));}
				if(hi.indexOf("broda")===0){ra.push("brod");}
			}
			ra=ra.join("\",\"");
			
			if (ra.length!==0){pars+=",\"r\":[\""+ra+"\"]";}//else{pars+=",\"rafsi\":[]";}//not needed anymore due to gleki's fixes
			pars+="}";
			if (i<rev.length-1){pars+=",\n";}//\n
		}
		pars+="];\n";
		var tt = path.join(__dirname,"../i/data","parsed-"+lng + ".js");
		pars = fs.writeFileSync(tt+".temp",pars.replace(/,\"[eg]\":\"\"/g,"").replace(/&amp;/g,"&"));
		fs.renameSync(tt+".temp",tt);
		tt = path.join(__dirname,"../i/"+lng+"/","webapp.appcache");
		/*var d = new Date();
		var n = d.getDate();
		if(n==1){*/
			try{pars=fs.readFileSync(tt,{encoding: 'utf8'});pars = fs.writeFileSync(tt,pars);console.log(tt + ' updated');}catch(err){}
		//}

};

update_cc_dict();
