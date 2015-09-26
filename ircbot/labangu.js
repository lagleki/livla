var labangu = function(){
	var request = require("request");
	var libxmljs = require("libxmljs");
	var path = require("path-extra");
	var fs = require("fs");
	var t = path.join(__dirname,"dumps","labangu.csv");
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
		    y[1]=y[1].replace(/^([^\{\}@]+)$/,"'''$1'''");
		    x[i]=y[0] + "  –  "+y[1];
		    //x[i] = y;
		}
		//alllojban[j]=alllojban[j].replace(/(, )+$/,"");
		//alllojbancomment[j]=alllojbancomment[j].replace(/(, )+$/,"").replace(/_/g,"").replace(/'/g,"&apos;").replace(/[\{\}]/g,"'''").replace(/@@@/g,"''").trim();
		//out+=("''"+allenglish[j].replace(/_/g,"").replace(/'/g,"&apos;").replace(/^([ ]+)/,"")+"''").replace(/^''(.*?) \[(.*?)\]''$/,"''<small>$2</small> $1''")+"  –  '''"+alllojban[j].replace(/, /,"''', '''")+"'''";
		takei = fs.writeFileSync(tr+".temp",x.join("\n\n").replace(/\{(.*?)\}/g,"'''$1'''").replace(/@@@(.*?)@@@/g,"''$1''"));
		fs.renameSync(tr+".temp",tr);console.log("La Bangu Eng2Jbo updated");
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
		take=take.replace(/''x<sub>([^<]*?)<\/sub><sub>([^<]*?)<\/sub>''/igm,"$x $1 $2$");
		take=take.replace(/<(|\/)(small)>|&nbsp;/igm,"");
		take=take.replace(/^(.+?),\"(\n|\r)(.+?) \[(.+?)\] — (.+?)(\n|\r)/igm,"<valsi word=\"$1\" class=\"$4\">\n\t<definition>$5</definition>\n");
		take=take.replace(/^(.+?),\"(\n|\r)(.+?) — (.+?)(\n|\r)/igm,"<valsi word=\"$1\">\n\t<definition>$4</definition>\n");
		take=take.replace(/\"<\/definition>\n/igm,"</definition>\"\n");
		take=take.replace(/\"(\n|\r)/igm,"\n</valsi>\n");
		take=take.replace(/^:'''(.*?)''' — ''(.*?)''$/igm,"\t<example phrase=\"$1\">$2</example>");
		take=take.replace(/^:Comment: (.*?)$/igm,"\t<notes>$1</notes>");
		take=take.replace(/^:Related words: (.*?)$/igm,"\t<related>$1</related>");
		take=take.replace(/^: *(.*?)$/igm,"\t<gloss>$1</gloss>");
		take=take.replace(/'''(.*?)'''/igm,"{$1}").replace(/''(.*?)''/igm,"$1");
		take="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<?xml-stylesheet type=\"text/xsl\" href=\"jbovlaste.xsl\"?>\n<dictionary>\n<direction from=\"lojban\" to=\"English (La Bangu)\">\n" + take + "\n" + takei + "</direction>\n</dictionary>";
		take=take.replace(/ {2,}/g," ");
		take = fs.writeFileSync(t+".temp",take);
		fs.renameSync(t+".temp",path.join(__dirname,"dumps","jb.xml"));console.log("La Bangu updated");
	});
	});
	//
	var tr = path.join(__dirname,"dumps","eng2jbo.tsv");
	requestd = request.defaults({jar: true});
	uri="https://docs.google.com/spreadsheets/d/19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw/pub?gid=1968461413&single=true&output=tsv";
	requestd({
	    uri: uri, method: "GET"
	}).on("error", function (err) {}).pipe(fs.createWriteStream(tr)).on("finish", function () {
		var take = fs.readFileSync(tr,{encoding: 'utf8'});
		var x = take.replace(/_/g,"").replace(/'/g,"&apos;").split('\n');
		x.shift();
		x=x.sort(
				function (a, b) {
    				return a.toLowerCase().localeCompare(b.toLowerCase());
				}
			);//x is our array
		for (var i=0; i<x.length; i++) {
		    y = x[i].split('\t');
		    y[0]=("''"+y[0]+"''").replace(/^''(.*?) \[(.*?)\]''$/,"''<small>$2</small> $1''");
		    y[1]=y[1].replace(/^([^\{\}@]+)$/,"'''$1'''");
		    x[i]=y[0] + "  –  "+y[1];
		    //x[i] = y;
		}
		//alllojban[j]=alllojban[j].replace(/(, )+$/,"");
		//alllojbancomment[j]=alllojbancomment[j].replace(/(, )+$/,"").replace(/_/g,"").replace(/'/g,"&apos;").replace(/[\{\}]/g,"'''").replace(/@@@/g,"''").trim();
		//out+=("''"+allenglish[j].replace(/_/g,"").replace(/'/g,"&apos;").replace(/^([ ]+)/,"")+"''").replace(/^''(.*?) \[(.*?)\]''$/,"''<small>$2</small> $1''")+"  –  '''"+alllojban[j].replace(/, /,"''', '''")+"'''";
		take = fs.writeFileSync(tr+".temp",x.join("\n\n").replace(/\{(.*?)\}/g,"'''$1'''").replace(/@@@(.*?)@@@/g,"''$1''"));
		fs.renameSync(tr+".temp",tr);console.log("La Bangu Eng2Jbo updated");
	});
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
		for (var i=0;i<rev.length;i++) {
			var hi=rev[i].attr("word").value().replace("\\","\\\\");
			pars+="{\"w\":\""+hi+"\"";
			try{pars+=",\"t\":\""+rev[i].attr("type").value().replace(/\\/g,"\\\\")+"\"";}catch(err){}
			try{pars+=",\"s\":\""+rev[i].find("selmaho[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")+"\"";}catch(err){}
			try{pars+=",\"l\":\""+rev[i].attr("lang").value()+"\"";}catch(err){}
			try{pars+=",\"d\":\""+rev[i].find("definition[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")+"\"";}catch(err){}
			try{pars+=",\"n\":\""+rev[i].find("notes[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")+"\"";}catch(err){}
			try{pars+=",\"g\":\""+rev[i].find("glossword/@word").join(";").replace(/ word=\"(.*?)\"/g,"$1").replace(/"/g,"'").replace("\\","\\\\")+"\"";}catch(err){}
			try{pars+=",\"k\":\""+rev[i].find("related[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")+"\"";}catch(err){}
			try{
				pars+=",\"e\":\""+rev[i].find("example").toString().replace(/>,</g,">%<").replace(/<example phrase=\"(.*?)\">(.*?)<\/example>/g,"$1 — $2").replace(/"/g,"'").replace(/\\/g,"\\\\")+"\"";
				//console.log(rev[i].find("example").toString());
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

labangu();
