// JavaScript Document
var fs = require("fs"),path = require("path-extra");
var download=false;
var refresh=false;
var domuplis=true;

var goahead = function (){
	if (download===true){
		tatodownload();
	}
	if (refresh===true){
		tatocreatedb();
	}
	if (domuplis===true){
		mupliscreatedump();
	}
};

var mupliscreatedump = function(){
	var LineByLineReader = require('line-by-line');
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database(path.join(__dirname,"../ircbot/dumps","1.sql"));
	var wstream = fs.createWriteStream(path.join(__dirname,"data","parsed-tatoeba.js.temp"));
	wstream.write('var documentStore = [\n');
	db.serialize(function() {
		db.run("BEGIN TRANSACTION");
		db.each("SELECT name FROM sqlite_master WHERE type = 'table'", function(err, row) {
			console.log(row.name);
		});
		db.each("SELECT tat.sentence as one, tati.sentence as six,tag.tag as five FROM tatoeba as tat left join links on links.fir=tat.idsentence left join tatoeba as tati on links.sec=tati.idsentence left join tags as tag on tag.ids=tat.idsentence and tag.tag='sampu staile' where (tat.lang='jbo' and not exists (select a.ids from tags as a where (a.ids=tat.idsentence and a.tag='@needs native check'))) limit 100000", function(err, row) {
			
			if (row.five===null){
			wstream.write("{w:\""+row.one.replace(/"/g,"'")+"\",d:\""+(row.six||"").replace(/"/g,"'").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/gi," ").replace(/\\/g,"\\\\".replace("\\","\\\\"))+"\"},\n");}else
			{wstream.write("{w:\""+row.one.replace(/"/g,"'")+"\",t:\""+row.five+"\",d:\""+(row.six||"").replace(/"/g,"'").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/gi," ").replace(/\\/g,"\\\\".replace("\\","\\\\"))+"\"},\n");}
		});
		db.run("COMMIT");
	});
	db.close(function(){
		wstream.write('];\n');wstream.end();
		//fs.renameSync(path.join(__dirname,"data","parsed-tatoeba.js.temp"), path.join(__dirname,"data","parsed-tatoeba.js"));
	});
};

var tatocreatedb = function(){
	//tatogettwo();
	var tsorcu = path.join(__dirname,"../ircbot/dumps","tatoeba/sentences.csv");
	var LineByLineReader = require('line-by-line');
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database(path.join(__dirname,"../ircbot/dumps","1.sql"));
	db.serialize(function() {
		//db.run("PRAGMA locking_mode = EXCLUSIVE");
		db.run("PRAGMA journal_mode = OFF");
		//db.run("PRAGMA temp_store = FILE");
		//db.run("PRAGMA cache_size = 100");
		db.run("DROP TABLE IF EXISTS 'tatoebatemp'");
		db.run("CREATE TABLE tatoebatemp (idsentence INTEGER, lang TEXT, sentence TEXT)");
		db.run("DROP TABLE IF EXISTS 'linkstemp'");
		db.run("CREATE TABLE linkstemp (fir INTEGER, sec INTEGER)");
		db.run("DROP TABLE IF EXISTS 'tagstemp'");
		db.run("CREATE TABLE tagstemp (ids INTEGER, tag INTEGER)");
		//db.run("PRAGMA synchronous = OFF");
		db.run("BEGIN TRANSACTION");
		//db.parallelize(function() {
			var stmt = db.prepare("INSERT INTO tatoebatemp VALUES (?,?,?)");
			lr = new LineByLineReader(tsorcu);
			lr.on('error', function (err) {
			    // 'err' contains error object
			});
			lr.on('line', function (line) {
			    // 'line' contains the current line without the trailing newline character. write it to a new file
			    var l = line.split("\t");
			    stmt.run(l[0],l[1],l[2]);
			});
			lr.on('end', endfuncone.bind(null,db,LineByLineReader));
		//});
	});
	//global.gc();
	//db=null;
};
var endfuncone = function (db,LineByLineReader) {
			var stmtq = db.prepare("INSERT INTO linkstemp VALUES (?,?)");
			var tjorne = path.join(__dirname,"../ircbot/dumps","tatoebalinks/links.csv");
			lrq = new LineByLineReader(tjorne);
			lrq.on('error', function (err) {
			    // 'err' contains error object
			});
			lrq.on('line', function (line) {
			    // 'line' contains the current line without the trailing newline character. write it to a new file
			    var l = line.split("\t");
			    stmtq.run(l[0],l[1],l[2]);
			});
			lrq.on('end', endfuncthree.bind(null,db,LineByLineReader));
};

var endfuncthree = function (db,LineByLineReader) {
			var stmtq = db.prepare("INSERT INTO tagstemp VALUES (?,?)");
			var ttcita = path.join(__dirname,"../ircbot/dumps","tatoebatags/tags.csv");
			var lrs = new LineByLineReader(ttcita);
			lrs.on('error', function (err) {
			    // 'err' contains error object
			});
			lrs.on('line', function (line) {
			    // 'line' contains the current line without the trailing newline character. write it to a new file
			    var l = line.split("\t");
			    stmtq.run(l[0],l[1]);
			});
			lrs.on('end', endfunc.bind(null,db,LineByLineReader));
};

var endfunc = function (db,LineByLineReader) {
db.serialize(function() {
	db.run("COMMIT");
	db.run("PRAGMA shrink_memory");
	db.run("DROP TABLE IF EXISTS 'tatoeba'");
	db.run("ALTER TABLE 'tatoebatemp' RENAME TO 'tatoeba'");
	db.run("ALTER TABLE 'linkstemp' RENAME TO 'links'");
	db.run("ALTER TABLE 'tagstemp' RENAME TO 'tags'");
	db.close();
	/*db.each("SELECT name FROM sqlite_master WHERE type = 'table'", function(err, row) {
		console.log(row.name);
	});*/
	/* now select */
});
};

var tatodownload = function(){
	var request = require("request");
	var fs = require("fs");
	var t = path.join(__dirname,"../ircbot/dumps","tatoeba.tar.bz2");
	var ttemp = path.join(__dirname,"../ircbot/dumps","tatoeba.tar.bz2.temp");
	var tbakfu = path.join(__dirname,"../ircbot/dumps","tatoeba");
	var uri="http://downloads.tatoeba.org/exports/sentences.tar.bz2";
	requestd = request.defaults({jar: true});
	requestd({
	    uri: uri, method: "GET"
	}).on("error", function (err) {
	}).pipe(fs.createWriteStream(ttemp)).on("finish", function () {
		fs.renameSync(ttemp,t);console.log("Tatoeba db updated");
		var Bunzip = require('seek-bzip');
		var compressedData = fs.readFileSync(t);
		var data = Bunzip.decode(compressedData);
		fs.writeFileSync(ttemp, data);
		var tarball = require('tarball-extract');
		tarball.extractTarball(ttemp, tbakfu, function(err){
  		if(err) console.log(err);
		});
				var tlink = path.join(__dirname,"../ircbot/dumps","links.tar.bz2");
				var tlinktemp = path.join(__dirname,"../ircbot/dumps","links.tar.bz2.temp");
				var tlinkbakfu = path.join(__dirname,"../ircbot/dumps","tatoebalinks");
				var uri = 'http://downloads.tatoeba.org/exports/links.tar.bz2';
				requestd({
				    uri: uri, method: "GET"
				}).on("error", function (err) {
				}).pipe(fs.createWriteStream(tlinktemp)).on("finish", function () {
					fs.renameSync(tlinktemp,tlink);console.log("Tatoeba link db updated");
					var Bunzip = require('seek-bzip');
					var compressedData = fs.readFileSync(tlink);
					var data = Bunzip.decode(compressedData);
					fs.writeFileSync(tlinktemp, data);
					var tarball = require('tarball-extract');
					tarball.extractTarball(tlinktemp, tlinkbakfu, function(err){
			  		if(err) console.log(err);
					});
					var ttags = path.join(__dirname,"../ircbot/dumps","tags.tar.bz2");
					var ttagstemp = path.join(__dirname,"../ircbot/dumps","tags.tar.bz2.temp");
					var ttagsbakfu = path.join(__dirname,"../ircbot/dumps","tatoebatags");
					var uri = 'http://downloads.tatoeba.org/exports/tags.tar.bz2';
					requestd({
					    uri: uri, method: "GET"
					}).on("error", function (err) {
					}).pipe(fs.createWriteStream(ttagstemp)).on("finish", function () {
						fs.renameSync(ttagstemp,ttags);console.log("Tatoeba tags db updated");
						var Bunzip = require('seek-bzip');
						var compressedData = fs.readFileSync(ttags);
						var data = Bunzip.decode(compressedData);
						fs.writeFileSync(ttagstemp, data);
						var tarball = require('tarball-extract');
						tarball.extractTarball(ttagstemp, ttagsbakfu, function(err){
				  		if(err) console.log(err);
						});
					});
				});
	});
};

goahead();
