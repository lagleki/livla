window = this;
importScripts('bangu.js','../data/parsed-ru.js', '../lujvo_beta.js', '../sisku.js');
postMessage({kind: 'loading'});
postMessage({kind: 'ready'});
var searchId;
this.onmessage = function(ev) {if (ev.data.kind == 'newSearch') {searchId = ev.data.searchId;search(ev.data.query, function(results) {postMessage({kind: 'searchResults', results: results,query:ev.data.query});});}};