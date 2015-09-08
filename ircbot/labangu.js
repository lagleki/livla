var labangu = function(){
	var request = require("request");
	var path = require("path-extra");
	var fs = require("fs");
	var t = path.join(__dirname,"dumps","labangu.csv");
	requestd = request.defaults({jar: true});
	var uri="https://docs.google.com/spreadsheets/d/19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw/export?format=csv&id=19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw&gid=1855189494";
	requestd({
	    uri: uri, method: "GET"
	}).on("error", function (err) {
	}).pipe(fs.createWriteStream(t)).on("finish", function () {
		var take = fs.readFileSync(t,{encoding: 'utf8'})+"\n";
		take=take.replace(/➜/igm,"=>");
		take=take.replace(/&/igm,"&amp;");
		take=take.replace(/<(|\/)(small|sub)>|&nbsp;/igm,"");
		take=take.replace(/^(.+?),\"(\n|\r)(.+?) \[(.*?)\] — (.*?)(\n|\r)/igm,"<valsi word=\"$1\" class=\"$4\">\n\t<definition>$3 — $5</definition>\n");
		take=take.replace(/^(.+?),\"(\n|\r)(.+?)(\n|\r)/igm,"<valsi word=\"$1\">\n\t<definition>$3</definition>\n");
		take=take.replace(/\"<\/definition>\n/igm,"</definition>\"\n");
		take=take.replace(/\"(\n|\r)/igm,"\n</valsi>\n");
		take=take.replace(/^:'''(.*?)''' — ''(.*?)''$/igm,"\t<example phrase=\"$1\">$2</example>");
		take=take.replace(/^:Comment: (.*?)$/igm,"\t<comment>$1</comment>");
		take=take.replace(/^:Related words: (.*?)$/igm,"\t<related>$1</related>");
		take=take.replace(/^: *(.*?)$/igm,"\t<gloss>$1</gloss>");
		take=take.replace(/'''(.*?)'''/igm,"{$1}").replace(/''(.*?)''/igm,"{$1}");
		take="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<?xml-stylesheet type=\"text/xsl\" href=\"jbovlaste.xsl\"?>\n<dictionary>\n<direction from=\"lojban\" to=\"English (La Bangu)\">\n"+take+"</direction>\n</dictionary>";
		take = fs.writeFileSync(t+".temp",take);
		fs.renameSync(t+".temp",path.join(__dirname,"dumps","jb.xml"));console.log("La Bangu updated");
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
};
labangu();
