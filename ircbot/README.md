# LIVLABOT:

In order to run LIVLABOT run from the root of ilmentufa directory:

```sh
node ircbot/node_modules/.bin/supervisor -w .,./ircbot -i ./ircbot/dumps ircbot/livla.js
```

Typing in the chat "rafsi: pof" will return "spofu". "rafsi: spofu" will return "pof po\'u". Typing "selmaho: ui" will return "UI". Typing "mensi: s klama" will return a random sentence (with its number) from Tatoeba containing "klama" sequence.";

In order to autoupdate dumps immediately type "mensi: ko ningau lo nei"

## Configuration:

 - `tcan` is the list of channels to which the replier will connect.
 - `livlytcan` is a channel where the asker talks to the replier.
 - `asker` is the name of the asker
 - `replier` is the name of the replier

You may want to modify `config` and `configmensi`. Actually, they both connect
to “#gleki” as well as “livlytcan”. Gleki is the original author of the script
and use this channel to do his testing. You can remove his hardcoded channel.

I currently tested this configuration without crash:

```javascript
var config = {
  server: 'irc.freenode.net',
  nick: asker,
  options: {
    channels: [livlytcan],
    debug: false,
    realName: 'http://mw.lojban.org/index.php?title=IRC_Bots',
    messageSplit: 276
  }
};

var configmensi = {
  server: 'irc.freenode.net',
  nick: replier,
  options: {
    channels: [tcan, livlytcan],
    debug: false,
    messageSplit: 276,
    realName: 'http://mw.lojban.org/index.php?title=IRC_Bots'
  }
};
```

## Issues related to the libxmljs installation:

If you get an fatal error about “ELF64” when querying a word, and you are on a
32 bit system, the modules that come with the repository are compiled for a 64
bit system. It should be safe to remove `ircbot/node_modules`, and then to
issue the command `npm install`:

```sh
 $ cd ircbot # (if you are not already in this directory)
 $ rm -r node_modules
 $ npm install
```

If you get an error about python 3 not being supported when trying `npm
install`, installing python 2 and issuing a command of this style (adapt the
path to your system) should solve the problem:

```sh
 $ npm config set python /usr/bin/python2.7
```

