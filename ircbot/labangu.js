var labangu = function(){
	var request = require("request");
	var path = require("path-extra");
	var fs = require("fs");
	var t = path.join(__dirname,"dumps","labangu.csv");
	requestd = request.defaults({jar: true});
	var uri="https://docs.google.com/spreadsheets/d/19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw/export?format=csv&id=19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw&gid=1855189494";
	/*requestd({
	    uri: uri, method: "GET"
	}).on("error", function (err) {
	}).pipe(fs.createWriteStream(t)).on("finish", function () {
		var take = fs.readFileSync(t,{encoding: 'utf8'});
		take=take.replace(/➜/igm,"=>");
		take=take.replace(/&/igm,"&amp;");
		take=take.replace(/<(|\/)(small|sub)>|&nbsp;/igm,"");
		take=take.replace(/^(.*?),\"\n/igm,"<valsi word=\"$1\"><definition>");
		take=take.replace(/\"(\n|\r)/igm,"</definition></valsi>\n");
		take=take.replace(/'''(.*?)'''/igm,"{$1}").replace(/''(.*?)''/igm,"{$1}");
		take="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<?xml-stylesheet type=\"text/xsl\" href=\"jbovlaste.xsl\"?>\n<dictionary>\n<direction from=\"lojban\" to=\"La Bangu English\">\n"+take+"</definition></valsi>\n</direction>\n</dictionary>";
		take = fs.writeFileSync(t+".temp",take);
		fs.renameSync(t+".temp",path.join(__dirname,"dumps","jb.xml"));console.log("La Bangu updated");
	});*/
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
	/*var tr = path.join(__dirname,"dumps","eng2jbo.tsv");
	requestd = request.defaults({jar: true});
	uri="https://docs.google.com/spreadsheets/d/19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw/pub?gid=1786445405&single=true&output=tsv";
	requestd({
	    uri: uri, method: "GET"
	}).on("error", function (err) {}).pipe(fs.createWriteStream(tr)).on("finish", function () {
		var take = fs.readFileSync(tr,{encoding: 'utf8'});
		var x = take.split('\n');//x is our array
		for (var i=1; i<x.length; i++) {//from i=1, i.e. the second line
		    y = x[i].split('\t');
		    x[i] = y;
		}
		var col3 = x.map(function(value,index) { return value[3-1]; }).join(", ").split(", ");
		var col4 = x.map(function(value,index) { return value[4-1]; }).join(", ").split(", ");
		var col5 = x.map(function(value,index) { return value[5-1]; }).join(", ").split(", ");
		var col7 = x.map(function(value,index) { return value[7-1]; }).join(", ").split(", ");
		var col10 = x.map(function(value,index) { return value[10-1]; }).join(", ").split(", ");
		var col11 = x.map(function(value,index) { return value[11-1]; }).join(", ").split(", ");
		var col12 = x.map(function(value,index) { return value[12-1]; }).join(", ").split(", ");
		var col14 = x.map(function(value,index) { return value[14-1]; }).join(", ").split(", ");
		var col15 = x.map(function(value,index) { return value[15-1]; }).join(", ").split(", ");
		var col16 = x.map(function(value,index) { return value[16-1]; }).join(", ").split(", ");
		var col17 = x.map(function(value,index) { return value[17-1]; }).join(", ").split(", ");
		var col18 = x.map(function(value,index) { return value[18-1]; }).join(", ").split(", ");
		var col19 = x.map(function(value,index) { return value[19-1]; }).join(", ").split(", ");
		var col20 = x.map(function(value,index) { return value[20-1]; }).join(", ").split(", ");
		var col21 = x.map(function(value,index) { return value[21-1]; }).join(", ").split(", ");
		var col22 = x.map(function(value,index) { return value[22-1]; });
		var col23 = x.map(function(value,index) { return value[23-1]; });
		var colall = col3.concat(col4).concat(col5).concat(col7).concat(col10).concat(col11).concat(col12).concat(col14).concat(col15).concat(col16).concat(col17).concat(col18).concat(col19).concat(col20).concat(col21).filter(Boolean).sort();
		var collmupli = concat(col23).concat(col22).filter(Boolean).sort();
		allenglish = colall.filter(function(item, pos, self) {
			return self.indexOf(item) == pos;
		});
		alllojban=allenglish.slice(0);
		alllojbancomment=allenglish.slice(0);
		for (var j=0;j<allenglish.length;j++){
			alllojban[j]="";alllojbancomment[j]="";
			var so=allenglish[j].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
			for (i=1;i<x.length; i++){
				if(
				  (x[i][3-1].search("^"+so+"$")>=0
				||x[i][3-1].search("^"+so+", ")>=0
				||x[i][3-1].search(", "+so+", ")>=0
				||x[i][3-1].search(", "+so+"$")>=0) & x[i][1-1]==='yes'
				){
					alllojban[j]+=""+x[i][2-1]+", ";
					//console.log(so+j);
				}
				if(
				  (x[i][4-1].search("^"+so+"$")>=0
				||x[i][4-1].search("^"+so+", ")>=0
				||x[i][4-1].search(", "+so+", ")>=0
				||x[i][4-1].search(", "+so+"$")>=0) & x[i][1-1]==='yes'
				)
				{
					alllojban[j]+="se "+x[i][2-1]+", ";
				}
				if(
				  (x[i][5-1].search("^"+so+"$")>=0
				||x[i][5-1].search("^"+so+", ")>=0
				||x[i][5-1].search(", "+so+", ")>=0
				||x[i][5-1].search(", "+so+"$")>=0) & x[i][1-1]==='yes'
				)
				{
					alllojban[j]+="te "+x[i][2-1]+", ";
				}
				if(
				  (x[i][10-1].search("^"+so+"$")>=0
				||x[i][10-1].search("^"+so+", ")>=0
				||x[i][10-1].search(", "+so+", ")>=0
				||x[i][10-1].search(", "+so+"$")>=0) & x[i][8-1]==='yes'
				){
					alllojban[j]+=x[i][9-1]+", ";
					//console.log(so+j);
				}
				if(
				  (x[i][11-1].search("^"+so+"$")>=0
				||x[i][11-1].search("^"+so+", ")>=0
				||x[i][11-1].search(", "+so+", ")>=0
				||x[i][11-1].search(", "+so+"$")>=0) & x[i][8-1]==='yes'
				)
				{
					alllojban[j]+=""+x[i][9-1]+" cu'i, ";
				}
				if(
				  (x[i][12-1].search("^"+so+"$")>=0
				||x[i][12-1].search("^"+so+", ")>=0
				||x[i][12-1].search(", "+so+", ")>=0
				||x[i][12-1].search(", "+so+"$")>=0) & x[i][8-1]==='yes'
				)
				{
					alllojban[j]+=""+x[i][9-1]+" nai, ";
				}
				if(
				  (x[i][7-1].search("^"+so+"$")>=0
				||x[i][7-1].search("^"+so+", ")>=0
				||x[i][7-1].search(", "+so+", ")>=0
				||x[i][7-1].search(", "+so+"$")>=0) & x[i][20-1]==='yes'
				)
				{
					alllojban[j]+=""+x[i][6-1]+", ";
						if(
							(x[i][21-1]!=='')
						)
						{
							alllojbancomment[j]+=x[i][21-1]+", ";
						}
				}
				if(
				  (x[i][14-1].search("^"+so+"$")>=0
				||x[i][14-1].search("^"+so+", ")>=0
				||x[i][14-1].search(", "+so+", ")>=0
				||x[i][14-1].search(", "+so+"$")>=0)
				)
				{
					alllojban[j]+=""+x[i][13-1]+", ";
				}
				if(
				  (x[i][15-1].search("^"+so+"$")>=0
				||x[i][15-1].search("^"+so+", ")>=0
				||x[i][15-1].search(", "+so+", ")>=0
				||x[i][15-1].search(", "+so+"$")>=0) & x[i][1-1]==='yes'
				)
				{
					alllojban[j]+="lo "+x[i][2-1]+", ";
				}
				if(
				  (x[i][16-1].search("^"+so+"$")>=0
				||x[i][16-1].search("^"+so+", ")>=0
				||x[i][16-1].search(", "+so+", ")>=0
				||x[i][16-1].search(", "+so+"$")>=0) & x[i][1-1]==='yes'
				)
				{
					alllojban[j]+="lo se "+x[i][2-1]+", ";
				}
				if(
				  (x[i][17-1].search("^"+so+"$")>=0
				||x[i][17-1].search("^"+so+", ")>=0
				||x[i][17-1].search(", "+so+", ")>=0
				||x[i][17-1].search(", "+so+"$")>=0) & x[i][1-1]==='yes'
				)
				{
					alllojban[j]+="lo te "+x[i][2-1]+", ";
				}
				if(
				  (x[i][18-1].search("^"+so+"$")>=0
				||x[i][18-1].search("^"+so+", ")>=0
				||x[i][18-1].search(", "+so+", ")>=0
				||x[i][18-1].search(", "+so+"$")>=0) & x[i][1-1]==='yes'
				)
				{
					alllojban[j]+="lo ve "+x[i][2-1]+", ";
				}
				if(
				  (x[i][19-1].search("^"+so+"$")>=0
				||x[i][19-1].search("^"+so+", ")>=0
				||x[i][19-1].search(", "+so+", ")>=0
				||x[i][19-1].search(", "+so+"$")>=0) & x[i][1-1]==='yes'
				)
				{
					alllojban[j]+="lo xe "+x[i][2-1]+", ";
				}
			}
			alllojban[j]=alllojban[j].replace(/(, )+$/,"");
			alllojbancomment[j]=alllojbancomment[j].replace(/(, )+$/,"").replace(/_/g,"").replace(/'/g,"&apos;").replace(/[\{\}]/g,"'''").replace(/@@@/g,"''").trim();
		}
		//now join into string
		var out='';
		for (j=0;j<allenglish.length;j++){
			if(!(alllojban[j]==='' || allenglish[j]==='')){
				out+=("''"+allenglish[j].replace(/_/g,"").replace(/'/g,"&apos;").replace(/^([ ]+)/,"")+"''").replace(/^''(.*?) \[(.*?)\]''$/,"''<small>$2</small> $1''")+"  –  '''"+alllojban[j].replace(/, /,"''', '''")+"'''";
				if(alllojbancomment[j]!=='')
					{
						out+=". " + alllojbancomment[j];
					}
				out+="\n\n";
			}
		}
		take = fs.writeFileSync(tr+".temp",out);
		fs.renameSync(tr+".temp",tr);console.log("La Bangu Eng2Jbo updated");
	});
	*/
};
labangu();
