var searchIdCounter = 0;
function search(query, callback) {
	if (query.length === 0) {
		return;
	}
	var searchId = ++searchIdCounter;
	var resultCount = 0;
	var preciseMatches = [];
	var queryDecomposition = decomposeString(query);
	var kij=[];
	var ki=[];
	function be(kil,lu){
		var kim=[];
		var luj=decomposeLujvo(lu);
		if (luj){
			for (var ji in luj){
				kim.push(rafsi[luj[ji]]);
			}
		}
		kil.push({
			t: "decomposing ...",
			w: query,
			rafsiDocuments: kim.filter(function(n){ return n !== undefined })
		});
		return kil;
	}
	//preciseMatches
	if (queryDecomposition.length>1){
		for (var i=0;i<queryDecomposition.length;i++){
			var luj=decomposeLujvo(queryDecomposition[i]);
			var isdef = documentStore.filter(function (val){return val.w==queryDecomposition[i].toLowerCase();})[0]
			ki.push(isdef);
			if (luj && !isdef){
				for (var ji in luj){
					ki.push(rafsi[luj[ji]]);
				}
			}
		}
		preciseMatches.push({
			t: "decomposing ...",
			w: query,
			rafsiDocuments: ki.filter(function(n){ return n !== undefined })
		});
	}
	else if (query.indexOf('*')>-1)
	{
		var queryRE="^"+query.replace(/\*/g,'.*')+"$";
		kij.push(documentStore.filter(function(val){return (val.w.match(queryRE.toLowerCase())||[]).length > 0;}));
		preciseMatches.push({
			t: "decomposing ...",
			w: query,
			rafsiDocuments: (kij[0]).splice(0,50).filter(function(n){ return n !== undefined })
			//todo: add notice that results were truncated
		});
	}
	var exactMatches = [];
	var lujvoDecompMatches = [];
	var greatMatches = [];
	var selmahoMatches = [];
	var goodMatches = [];
	var normalMatches = [];
	searchEngine.lookup(query, function(lo_matra_cu_cupra) {
		if (!lo_matra_cu_cupra||kij.length!==0) {
			callback(be(preciseMatches,query));
			return;
		}
		if (searchId !== searchIdCounter||query.indexOf('*')>-1) {
			return;
		}
		for (var i = 0; i < lo_matra_cu_cupra.getSize(); i++) {
			var key = lo_matra_cu_cupra.getItem(i);
			var doc = documentStore[key];
			if (!doc.t){
				if(xugismu(doc.w)===true){doc.t='gismu'}
				else if(xulujvo(doc.w)===true){doc.t='lujvo'}
				else if(xufuhivla(doc.w)===true){doc.t="fu'ivla"}
				else if(xucmavo(doc.w)===true){doc.t="cmavo"}
				else if(xucmavogunma(doc.w)===true){doc.t="cmavo compound"}
				else if(xucmevla(doc.w)===true){doc.t="cmevla"}
				else {doc.t=''}
			}
			if (!doc) {
				continue;
			}
				if (doc.w === query){
					exactMatches.push(doc);
					exactMatches=be(exactMatches,query);
					continue;
				}
				if ((doc.g||'')===query||(query>0 && (doc.g||'').search("(^|;)"+query+"(;|$)")>=0)){
					greatMatches.push(doc);
					continue;
				}
				else if ((doc.s||'') === query){
					selmahoMatches.push(doc);//selmaho
					continue;
				}
				else if ((doc.g||'').search("\\b"+query+"\\b")>=0) {
					goodMatches.push(doc);
					continue;
				}
				else if ((doc.t == 'gismu' && ((doc.r || []).indexOf(query) != -1))) {
					normalMatches.push(doc);
					continue;
				}
				else {preciseMatches.push(doc);}
		}
		function sor(ar){
			var c;
			var gism=[];
			var cmav=[];
			for (c=0;c<ar.length;c++){
				if (ar[c].t==='gismu'){gism.push(ar.splice(c,1)[0]);}
			}
			for (c=0;c<ar.length;c++){
				if (ar[c].t==='cmavo'){cmav.push(ar.splice(c,1)[0]);}
			}
			return gism.concat(cmav).concat(ar);			
		}
		exactMatches=sor(exactMatches);
		greatMatches=sor(greatMatches);
		selmahoMatches=sor(selmahoMatches);
		goodMatches=sor(goodMatches);
		normalMatches=sor(normalMatches);
		preciseMatches=sor(preciseMatches);
		preciseMatches = exactMatches.concat(lujvoDecompMatches).concat(greatMatches).concat(selmahoMatches).concat(goodMatches).concat(normalMatches).concat(preciseMatches);
		callback(preciseMatches);
	});
}

var searchEngine;
var progress;
function setupSearchEngine(callback, prgrss) {
	progress = prgrss;
	var dbName = "sutysisku";
	searchEngine = new fullproof.BooleanEngine();
	var indexes = [{
			name: "normalindex",
			analyzer: new fullproof.StandardAnalyzer(
					fullproof.normalizer.to_lowercase_nomark),
			capabilities: new fullproof.Capabilities().setUseScores(
					false).setDbName(dbName),
			initializer: initializer
	}
    ];
	searchEngine.open(indexes, fullproof.make_callback(callback, true), fullproof.make_callback(callback, false));
}
/*,
	{
            name: "stemmedindex",
            analyzer: new fullproof.StandardAnalyzer(fullproof.normalizer.to_lowercase_nomark, fullproof.english.metaphone),
            capabilities: new fullproof.Capabilities().setStoreObjects(false).setUseScores(false).setDbName(dbName),
            initializer: initializer
        }
*/
/*var Stem = function(lng) {
	var testStemmer = new Snowball(lng);
	return function(word) {
	testStemmer.setCurrent(word);
	testStemmer.stem();
	return testStemmer.getCurrent();
	};
};
function println(lng, word){
	return new Stem(lng)(word);
}*/

function initializer(injector, callback) {
	var numTerms = objectSize(documentStore);
	var synchro = fullproof.make_synchro_point(callback, numTerms);
	var wordsArray = [];
	var valuesArray = [];
	var text;
	for (var key in documentStore) {
		var doc = documentStore[key];
		docd = doc.d;
		if (doc.s){text = [doc.w, doc.s, docd, doc.n, (doc.g||''), (doc.r||[]).join(' ')].join(' ');}
		else{
			text = [doc.w, docd, doc.n];
			try{text.push(doc.g);}catch(err){}
			try{text.push(doc.r.join(' '));}catch(err){}
			text=text.join(' ');
		}
		wordsArray.push(text);
		valuesArray.push(key);
	}
	injector.injectBulk(wordsArray, valuesArray, callback, progress);
}

function objectSize(obj) {
	var i = 0;
	for (var key in obj) i++;
	return i;
}