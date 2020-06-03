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

# Development

## la sutysisku

In order to test la sutysisku 
* clone this repo
* `npm run start`
* livla/index.js is started, it should download XML dumps from jbovlaste.lojban.org
* `COMPRESS=false npm run sutysisku ; cp -avr build/sutysisku/* ~/your-public-folder/`
** la sutysisku gets compiled. You can test it either locally from `~/your-public-folder/` folder (which you may wish to be made accessible from a https address as well for a full staging env) 
