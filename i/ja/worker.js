window = this;
importScripts('bangu.js','../data/parsed-ja.js', '../lujvo_beta.js', '../sisku.js');
var searchId;
this.onmessage = function(ev) {if (ev.data.kind == 'newSearch') {searchId = ev.data.searchId;search(ev.data.query, function(results) {postMessage({kind: 'searchResults', results: results,query:ev.data.query});});}};
postMessage({kind: 'loading'});
postMessage({kind: 'ready'});