window = this;var sorcu={};var bau = location.href.split('/').slice(-2)[0];if (bau==='cipra'){bau='en';}
postMessage({kind: 'loading'});
importScripts('bangu.js','../data/parsed-jbo.js?sisku=2019_09_21_17_37_31', '../sisku.js?sisku=2019_09_21_17_37_31');
postMessage({kind: 'ready'});
this.onmessage = function(ev) {if (ev.data.kind == 'newSearch') {sisku(ev.data, function(results) {postMessage({kind: 'searchResults', results: results,query:ev.data.query})})}}