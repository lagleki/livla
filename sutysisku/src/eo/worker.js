
    window = this;
    var sorcu={};
    var bau = location.href.split('/').slice(-2)[0];
    if (bau==='cipra'){bau='ru';}
    postMessage({kind: 'loading'});
    importScripts('bangu.js','../data/parsed-eo.js?sisku=2019_09_24_06_27_52', '../sisku.js?sisku=2019_09_24_06_27_52');
    postMessage({kind: 'ready'});
    this.onmessage = function(ev) {
      if (ev.data.kind == 'newSearch') {
        sisku(ev.data, function(results) {
          postMessage({
            kind: 'searchResults',
            results: results,
            req: {
              seskari: ev.data.seskari,
              query: ev.data.query
            }
          })
        })
      }
    }