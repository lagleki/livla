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
		var luj=decomposeLujvo(lu);
		if (luj){
			var kim=[];
			for (var ji in luj){
				kim.push(rafsi[luj[ji]]);
			}
			kil.push({
				t: "decomposing ...",
				w: query,
				rafsiDocuments: kim.filter(function(n){ return n !== undefined })
			});
		}
		return kil;
	}
	//preciseMatches
	if (!window.muplis && queryDecomposition.length>1){
		for (var i=0;i<queryDecomposition.length;i++){
			var luj=decomposeLujvo(queryDecomposition[i]);
			var isdef = documentStore.filter(function (val){return val.w==queryDecomposition[i].toLowerCase();})[0];
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
	else if (query.indexOf('/')===0)
	{
		var queryRE="^"+query.replace(/\//g,'')+"$";
		preciseMatches=documentStore.filter(function(val){return (val.w.match(queryRE.toLowerCase())||[]).length > 0;}).splice(0,100).filter(function(n){n=restore(n); return n !== undefined });
		//todo: add notice that results were truncated
	}
	var exactMatches = [];
	var lujvoDecompMatches = [];
	var greatMatches = [];
	var selmahoMatches = [];
	var goodMatches = [];
	var normalMatches = [];
	var defMatches = [];
	searchEngine.lookup(query, function(lo_matra_cu_cupra) {
		console.log(JSON.stringify(lo_matra_cu_cupra));
		if (!lo_matra_cu_cupra) {
			callback(be(preciseMatches,query));
			return;
		}
		if (searchId !== searchIdCounter||query.indexOf('*')>-1) {
			return;
		}
		for (var i=0;i<lo_matra_cu_cupra.getSize();i++) {
			var key = lo_matra_cu_cupra.getItem(i);
			var doc = restore(documentStore[key]);//todo: disable for la muplis or optimize for phrases
			if (!doc) {
				continue;
			}
				if (doc.w === query){
					exactMatches.push(doc);
					exactMatches=be(exactMatches,query);
					continue;
				}
				else if ((doc.g||'')===query||(query>0 && (doc.g||'').search("(^|;)"+query+"(;|$)")>=0)){
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
				else if (((doc.d||'').toLowerCase().search("\\b"+query+"\\b")>=0)){
					defMatches.push(doc);
					continue;
				}
				else {preciseMatches.push(doc);}
		}
		function sor(ar){
			var gism=[];
			var cmav=[];
			for (c=0;c<ar.length;c++){
				if (ar[c].t==='gismu'){gism.push(ar.splice(c,1)[0]);}
			}
			for (c=0;c<ar.length;c++){
				if (ar[c].t==='cmavo'){cmav.push(ar.splice(c,1)[0]);}
			}
			return gism.sort(sortMultiDimensional).concat(cmav.sort(sortMultiDimensional)).concat(ar.sort(sortMultiDimensional));
		}
		function sortMultiDimensional(a,b)
		{
			return (((a.d||'').length < (b.d||'').length) ? -1 : (((a.d||'').length > (b.d||'').length) ? 1 : 0));
		}
		//exactMatches=sor(exactMatches);
		greatMatches=sor(greatMatches);
		selmahoMatches=sor(selmahoMatches);
		goodMatches=sor(goodMatches);
		normalMatches=sor(normalMatches);
		defMatches=sor(defMatches);
		preciseMatches=sor(preciseMatches);
		preciseMatches = exactMatches.concat(lujvoDecompMatches).concat(greatMatches).concat(selmahoMatches).concat(goodMatches).concat(normalMatches).concat(defMatches).concat(preciseMatches);
		callback(preciseMatches);
	});
}

var searchEngine;
var progress;
function setupSearchEngine(callback, prgrss) {
	progress = prgrss;
	var dbName = "sutysisku";
	searchEngine = new fullproof.BooleanEngine();
	var index = {
			name: "normalindex",
			analyzer: new fullproof.StandardAnalyzer(
				fullproof.normalizer.to_lowercase_nomark),
			capabilities: new fullproof.Capabilities().setUseScores(
				false).setDbName(dbName),
			initializer: initializer
	};
/*	var index2 = {
			name: "stemmedindex",
			analyzer: new fullproof.StandardAnalyzer(
				fullproof.normalizer.to_lowercase_nomark, fullproof.english.metaphone),
			capabilities: new fullproof.Capabilities().setStoreObjects(false).setUseScores(false).setDbName(dbName),
			initializer: initializer
	};*/
	searchEngine.open([index], fullproof.make_callback(callback, true), fullproof.make_callback(callback, false));
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

function SaveIndexToLocalStorage(data)
{
	localStorage.setItem('wordsArray', JSON.stringify(wordsArray));
	localStorage.setItem('valuesArray', JSON.stringify(valuesArray));
}

function initializer(injector, callback) {
	var wordsArray = documentStore.map(function(r){return Object.keys(r).map(function (key) {return r[key];}).join(" ")});
	var valuesArray = Object.keys(documentStore);
	var synchro = fullproof.make_synchro_point(callback, valuesArray.length);
	injector.injectBulk(wordsArray, valuesArray, callback, progress);
}
