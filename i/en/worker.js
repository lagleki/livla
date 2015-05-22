window = this;
importScripts('../data/parsed-en.js', '../lujvo_beta.js', '../lib/fullproof/unicode/categ_letters_numbers.js', '../lib/fullproof/unicode/normalizer_lowercase_nomark.js', '../lib/fullproof/unicode/unicode.js', '../lib/fullproof/analyzers.js', '../lib/fullproof/normalizers.js', '../lib/fullproof/misc/dataloader.js', '../lib/fullproof/capabilities.js', '../lib/fullproof/utils.js', '../lib/fullproof/common-engine.js', '../lib/fullproof/boolean-engine.js', '../lib/fullproof/resultsets.js', '../lib/fullproof/storemanager.js', '../lib/fullproof/stores/memory_store.js', '../search.js');

var searchId;
this.onmessage = function(ev) {
  if (ev.data.kind == 'newSearch') {
    searchId = ev.data.searchId;
    search(ev.data.query, function(results) {
      postMessage({kind: 'searchResults', results: results,
                   query:ev.data.query});
    });
  }
};
var descr = '<p><b>la sursis</b> is a fast dictionary for the Lojban language.<p>- Can I use it if I lose internet access?<br>- Yes, if this happens try opening this very address from this browser.<br> It should still open. A latest version of Chrome, Safari or Firefox is required.<br/>For more resources visit <a href="http://lojban.org" target="_blank">Lojban Wiki</a>.</p>';
postMessage({kind: 'loading', message: 'Building index...'});
setupSearchEngine(function() {
  postMessage({kind: 'ready'});
}, function(percent) {
  postMessage({kind: 'progress', percent: percent});
});
