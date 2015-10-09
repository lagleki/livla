var searchIdCounter = 0;
function search(query, callback) {
	if (query.length === 0) {
		return;
	}
	var searchId = ++searchIdCounter;
	var resultCount = 0;
	var results = [];
	var greatMatches = [];
	var rafsiDecompositions = decomposeString(query);
	for (i = 0; i < rafsiDecompositions.length; i++) {
		var decomposition = rafsiDecompositions[i];
		/*var decompnew = "\t"+decomposition.join("\t").toLowerCase()+"\t";
		var tmpnew = documentStore.filter(function(val){
			return (decompnew.search("\t"+val.w+"\t")>0);
		});
		console.log(tmpnew.join("\t"));*/
		if (decomposition.length>1){
				var tmp=(decomposition.map(
					function(r){
						return rafsi[r] || (documentStore.filter(function(val){
							return val.w==r.replace("Q","").toLowerCase();
						})[0]);
					})||[]).filter(function(n){ return n != undefined });
		results.push({
			t: "decomposing ...",
			w: query,
			r: decomposition.filter(function(y){return y.search(/Q$/)===-1;}),
			rafsiDocuments: tmp
		});
		}
	}
	var goodMatches = [];
	var normalMatches = [];
	var selmahoMatches = [];
	searchEngine.lookup(query, function(engineResults) {
		console.log(engineResults);
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
			
			if (!doc) {//todo: try decomposing it as a lujvo
				continue;
			}
				if (doc.w === query||(doc.g||'')===query||(query>0 && (doc.g||'').search("(^|;)"+query+"(;|$)")>=0)){
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
				else {results.push(doc);}
		}
		results = greatMatches.concat(selmahoMatches).concat(goodMatches).concat(normalMatches).concat(results);
		callback(results);
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
var Stem = function(lng) {
	var testStemmer = new Snowball(lng);
	return function(word) {
	testStemmer.setCurrent(word);
	testStemmer.stem();
	return testStemmer.getCurrent();
	};
};
function println(lng, word){
	return new Stem(lng)(word);
}

function initializer(injector, callback) {
	var numTerms = objectSize(documentStore);
	var synchro = fullproof.make_synchro_point(callback, numTerms);
	var wordsArray = [];
	var valuesArray = [];
	var text;
	for (var key in documentStore) {
		var doc = documentStore[key];
		doc.t = (typeof doc.t === 'undefined') ? '' : doc.t;var bng;var docd;
		docd = doc.d;
		if (doc.s){text = [doc.w, (doc.t||''), doc.s, docd, doc.n, (doc.g||''), (doc.r||[]).join(' ')].join(' ');}
		else{
			text = [doc.w, docd, doc.n];
			try{text.push(doc.t);}catch(err){}
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