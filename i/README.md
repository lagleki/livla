## A dictionary for Lojban, English and other languages

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### Features
* Fast
* Full text search
* Works offline

To use it offline, simply try to load the site in your browser as usual. If your browser supports the HTML5 Application Cache, it will work exactly as though you did have a connection, as everything is cached after your first visit.

### License

Libraries under lib/ have their own license, as does the data in the data/ directory.

	la sutysisku itself is released under the MIT license.

### Testing

/test folder doesn't have manifest file so it's fine for testing

### Updating

from the root glekitufa directory run

```cd i ; node .scripts/template.js ; node .scripts/vlaste.js ; git add . ; git commit -m "commit" ; git push ; cd .. ```
