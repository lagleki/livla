pxeger.min.js: Makefile sources/browser.js sources/grammar.peg
	cat sources/browser.js                                   > /tmp/pxeger.js
	cat sources/grammar.peg | pegjs -e window.Pxeger.parser >> /tmp/pxeger.js
	uglifyjs --comments -- /tmp/pxeger.js                    > pxeger.min.js
