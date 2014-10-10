## A lojban dictionary

### Features
* Fast
* Full text search
* Works offline

To use it offline, simply try to load the site in your browser as usual. If your browser supports the HTML5 Application Cache, it will work exactly as though you did have a connection, as everything is cached after your first visit.

### License

Libraries under lib/ have their own license, as does the data in the data/ directory.

sutsis itself is released under the MIT license.

### Hacking

sutsis uses appengine as a static file server – all the uptime and speed of
a CDN for free, plus configurable routes and a local server! To start it up,
 download the app engine sdk, then just do

    $ dev_appserver.py ./app.yaml


##### Scary Warning: App Cache

The app cache is great for users, reliably giving excellent speed, however
for development it's less than ideal. For best results, do most development
without the appcache – just remove the manifest declaration at the top of index.
html – then add it back in before pushing your changes up.

Otherwise you'll likely see none of your changes reflected until you refresh
a couple times (or more).

