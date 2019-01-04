window = this;var sorcu={};var bau = location.href.split('/').slice(-2)[0];if (bau==='cipra'){bau='en';}
postMessage({kind: 'loading'});
importScripts('bangu.js','../data/parsed-simplingua-zho.js?sisku=2018_12_26_00_29_10', '../sisku.js?sisku=2018_12_26_00_29_10');
postMessage({kind: 'ready'});
this.onmessage = function(ev) {if (ev.data.kind == 'newSearch') {sisku(ev.data, function(results) {postMessage({kind: 'searchResults', results: results,query:ev.data.query})})}}