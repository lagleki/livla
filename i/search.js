var literals = (typeof literals === 'undefined') ? '' : literals;

var searchIdCounter = 0;
function search(query, callback) {
	if (query.length === 0) {
		return;
	}
	var searchId = ++searchIdCounter;
	var words = (literals[query] || []).slice();
	words.push(query);
	var set = {};
	var resultCount = 0;
	results = [];
	for (var i = 0; i < words.length; i++) {
		resultCount++;
		var doc = documentStore.filter(function(v) {return v.w === words[i];}).slice(0);
		if (doc) {
			for (var doci in doc){
				results.push(doc[doci]);set[doc[doci].w] = true;
			}
		}
	}
	//
	words = [];
	var patt = new RegExp("\\b"+query+"$","i");
	for (var k in literals){
		if (patt.test(k.toString())){
			words.push(literals[k][0]);
		}
	}
	patt = new RegExp("^"+query+"\\b","i");
	for (k in literals){
		if (patt.test(k.toString())){
			words.push(literals[k][0]);
		}
	}
	for (i = 0; i < words.length; i++) {
		resultCount++;
		var doct = documentStore.filter(function(v) {return v.w === words[i];}).slice(0);
		if (doct) {
			for (var docj in doct){
				if (!set[doct[docj].w]){
					results.push(doct[docj]);console.log(doct[docj]);set[doct[docj].w] = true;
				}
			}
		}
	}
	
	//if (results.length === 0) {
		var rafsiDecompositions = parseLujvo(query);
		for (i = 0; i < rafsiDecompositions.length; i++) {
			var decomposition = rafsiDecompositions[i];
			if (decomposition.length>1){
			results.push({
				t: "decomposing ...",
				w: query,
				r: decomposition.filter(function(y){return y.search(/Q$/)===-1;}),
				rafsiDocuments: (decomposition.map(function(r){return rafsi[r] || documentStore.filter(function(val){return val.w==r.replace("Q","")})[0]})||[])
			});
			}
		}
	//}
	var greatMatches = [];
	var normalMatches = [];
	var selmahoMatches = [];
	searchEngine.lookup(query, function(engineResults) {
		if (!engineResults) {
			callback(results);
			return;
		}
		if (searchId !== searchIdCounter) {
			return;
		}
		for (var i = 0; i < engineResults.getSize(); i++) {
			var key = engineResults.getItem(i);
			var doc = documentStore[key];
			if (doc.w in set) {continue;}
			if (!doc) {
				continue;
			}
				if ((doc.s||'') === query){
					selmahoMatches.push(doc);//selmaho
					continue;
				}
				else if (doc.w === query) {
					greatMatches.push(doc);
					continue;
				}
				else if ((doc.t == 'gismu' && ((doc.r || []).indexOf(query) != -1))) {
					normalMatches.push(doc);
					continue;
				}
				else {results.push(doc);}
		}

		results = greatMatches.concat(normalMatches).concat(selmahoMatches).concat(results);
		callback(results);
	});
}

var searchEngine;
var progress;
function setupSearchEngine(callback, prgrss) {
	progress = prgrss;
	var dbName = "sutsis";
	searchEngine = new fullproof.BooleanEngine();
	var indexes = [{
			name: "normalindex",
			analyzer: new fullproof.StandardAnalyzer(
					fullproof.normalizer.to_lowercase_nomark),
			capabilities: new fullproof.Capabilities().setUseScores(
					false).setDbName(dbName),
			initializer: initializer
	}];
	searchEngine.open(indexes, fullproof.make_callback(callback, true), fullproof.make_callback(callback, false));
}

var Stem = function(lng) {
	var testStemmer = new Snowball(lng);
	return function(word) {
	testStemmer.setCurrent(word);
	testStemmer.stem();
	return testStemmer.getCurrent();
	}
};
function println(lng, word){
	return new Stem(lng)(word);
}

function initializer(injector, callback) {
	var numTerms = objectSize(documentStore);
	var synchro = fullproof.make_synchro_point(callback, numTerms);
	var wordsArray = [];
	var valuesArray = [];
	for (var key in documentStore) {
		var doc = documentStore[key];
		doc.t = (typeof doc.t === 'undefined') ? '' : doc.t;var bng;var docd;
		//if (typeof window.bangu === 'undefined'){
			docd = doc.d;
		//}else{
		//	docd = doc.d.split(/\b/).map(function(r){return println(window.bangu,r);}).join("");
		//}
		if (doc.s){var text = [doc.w, (doc.t||''), doc.s, docd, doc.n, (doc.r||[]).join(' ')].join(' ');}
		else{var text = [doc.w, (doc.t||''), docd, doc.n, (doc.r||[]).join(' ')].join(' ');}
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