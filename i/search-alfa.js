var literals = (typeof literals === 'undefined') ? '' : literals;

var searchIdCounter = 0;
function search(query, callback) {
	var searchId = ++searchIdCounter;
	var words = (literals[query] || []).slice();
	words.push(query);
	if (query.length === 0) {
		return;
	}
	var set = {};
	var resultCount = 0;
	results = [];
	/*var valw=function(val){return val.w==words[i]};
	for (var i = 0; i < words.length; i++) {
		resultCount++;
		set[words[i]] = true;
		var doc = documentStore.filter(valw(val))[0];
		if (!doc) {
			continue;
		}
		results.push(doc);
	}*/
	
	//if (results.length === 0) {
		var rafsiDecompositions = parseLujvo(query);
		for (i = 0; i < rafsiDecompositions.length; i++) {
			var decomposition = rafsiDecompositions[i];
			if (decomposition.length>1){
			results.push({
				t: 'decomposing ...',
				w: query,
				r: decomposition.map(function(x){return x.replace(/Q/g, '');}),
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
			if (key in set) {
	      continue;
			}
			var doc = documentStore[key];
			if (!doc) {
				continue;
			}
				if ((doc.s||'') === query){
					selmahoMatches.push(doc);//selmaho
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

function initializer(injector, callback) {
	var numTerms = objectSize(documentStore);
	var synchro = fullproof.make_synchro_point(callback, numTerms);

	var wordsArray = [];
	var valuesArray = [];
	for (var key in documentStore) {
		var doc = documentStore[key];
		doc.t = (typeof doc.t === 'undefined') ? '' : doc.t;
		if (doc.s){var text = [doc.w, (doc.t||''), doc.s, doc.d, doc.n, (doc.r||[]).join(' ')].join(' ');}
		else{var text = [doc.w, (doc.t||''), doc.d, doc.n, (doc.r||[]).join(' ')].join(' ');}
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