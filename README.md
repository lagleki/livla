la livla
=========
la livla is a combine providing different options in learning and developing Lojban language.

# Installation

* install Docker or podman
* copy `default-config/config.json` to `data/config.json`
        - edit appropriately, you will need a password for your IRC bot  
* `./docker_build.sh`
* edit `./docker_start.sh` and replace 3020:3020 with YOU_FREE_PORT:3020 where instead of `YOU_FREE_PORT` write the free port that will start the websocket service. 
* `./docker_start.sh`

## IRC Bots

In order to update dumps type "mensi: ko cnino" in any IRC chat mensi bot is connected

More information can be found [here](http://mw.lojban.org/index.php?title=IRC_Bots#mensi.2C_livla).

## Configuration

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
	"server": "irc.freenode.org"
}
```

Your bot will connect to “#lojban” and “#ckule” of the “irc.freenode.org”
instead of those of “irc.freenode.net”.

 - `tcan` is the list of channels to which the replier will connect.
 - `replier` is the name of the replier
 - `server` is the name of the IRC network to which the bot will connect.

# Development

## la sutysisku

In order to test la sutysisku 
* enter your docker environment via `podman run -it livla /bin/bash`
* `COMPRESS=false npm run sutysisku`
** la sutysisku gets compiled. You can test it either locally fromthe outside of your docker environment from `build/sytysisku` folder (which you may wish to be made accessible from a https address as well for a full staging env) 
