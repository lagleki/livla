la glekitufa
=========
la glekitufa is a combine providing different options in learning and developing Lojban language.

Installing:

```
npm install
npm install --save libxmljs

```

IRC Bots
=========

In order to run LIVLABOT run from the root of ilmentufa directory:

```sh
npm run livla
```

In order to autoupdate dumps immediately type "mensi: ko cnino"

More information can be found [here](http://mw.lojban.org/index.php?title=IRC_Bots#mensi.2C_livla).

Configuration
=========

Configuration is done in “~/.livla/config.json”.

Here is the default configuration:

```json
{
        "tcan": "#lojban,#ckule",
        "livlytcan": "##jboselbau",
        "server": "irc.freenode.net",
        "asker": "livla",
        "replier": "mensi"
}
```

Every part of the configuration that is ommitted will be set to these default.
So, if your configuration file looks like that:

```json
{
	"server": "irc.example.com"
}
```

Your bot will connect to “#lojban” and “#ckule” of the “irc.example.com”
instead of those of “irc.freenode.net”.

 - `tcan` is the list of channels to which the replier will connect.
 - `livlytcan` is a channel where the asker talks to the replier.
 - `asker` is the name of the asker
 - `replier` is the name of the replier
 - `server` is the name of the IRC network to which the bot will connect.


Issues related to the libxmljs installation
=========

If you get an fatal error about “ELF64” when querying a word, and you are on a
32 bit system, the modules that come with the repository are compiled for a 64
bit system. It should be safe to remove `ircbot/node_modules`, and then to
issue the command `npm install`:

```sh
 $ npm uninstall libxmljs ; npm install libxmljs
```

If you get an error about python 3 not being supported when trying `npm
install`, installing python 2 and issuing a command of this style (adapt the
path to your system) should solve the problem:

```sh
 $ npm config set python /usr/bin/python2.7
```
