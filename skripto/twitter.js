var twitter_id = "550172170,475221831,848076906960388096,747142713733046272,755276948780134400,1748346150"
var twitter = require('twitter');
var config = {
  channels: ["#lojbanme"],
  server: "irc.freenode.net",
  botName: "test^^^^"
};

var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
});

twit.stream('statuses/filter', {follow:twitter_id}, function(stream) {
    stream.on('data', function(l) {
        if (l.text !== undefined &&
           l.lang==='en' &&
           l.retweeted===false &&
           l.text.indexOf("RT ")!==0
         )// && data.user.screen_name == twitter_id
        {
          console.log(JSON.stringify(l));
          bot.action(config.channels[0], l.user.screen_name + " says: "+ l.text + " [https://twitter.com/"+l.user.screen_name+"/status/"+l.id_str+"]");
        }

    });

});
