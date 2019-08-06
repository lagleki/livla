la livla
=========
la livla is a combine providing different options in learning and developing Lojban language.

Installing:

```
npm install
```

IRC Bots
=========

In order to update dumps type "mensi: ko cnino"

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
 - `replier` is the name of the replier
 - `server` is the name of the IRC network to which the bot will connect.
