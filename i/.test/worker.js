window = this;
importScripts('bangu.js','../data/parsed-en.js', '../sisku_2.js');
postMessage({kind: 'loading'});
postMessage({kind: 'ready'});
var searchId;
this.onmessage = function(ev) {if (ev.data.kind == 'newSearch') {searchId = ev.data.searchId;sisku(ev.data.query, function(results) {postMessage({kind: 'searchResults', results: results,query:ev.data.query});});}};