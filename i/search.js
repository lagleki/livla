
var searchIdCounter = 0;
function search(query, callback) {
  var searchId = ++searchIdCounter;
  var words = (literals[query] || []).slice();
  limit = 10;
  words.push(query);

  if (query.length === 0) {
    return;
  }
  var set = {};
  var resultCount = 0;
  results = [];
  for (var i = 0; i < words.length; i++) {
    resultCount++;
    set[words[i]] = true;
    var doc = documentStore[words[i]];
    if (!doc) {
      continue;
    }
    results.push(doc);
  }
  //if (results.length === 0) {
    var rafsiDecompositions = parseLujvo(query);
    for (i = 0; i < rafsiDecompositions.length; i++) {
      var decomposition = rafsiDecompositions[i];
      results.push({
        type: 'decomposing ...',
        word: query,
        rafsi: decomposition,
        rafsiDocuments: decomposition.map(function(r){return rafsi[r] || documentStore[r]})
      });
    }
  //}
  var greatMatches = [];
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
      if (key === query || (doc.type == 'gismu' && ((doc.rafsi || []).indexOf(query) != -1))) {
        greatMatches.push(doc);
        continue;
      }
      results.push(doc);
    }

    results = greatMatches.concat(results);

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
    var text = [key, doc.type, doc.definition, doc.notes, (doc.rafsi||[]).join(' ')].join(' ');
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