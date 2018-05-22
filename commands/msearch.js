const Discord = require('discord.js');
const fetchVideoInfo = require('youtube-info');
const ytdl          = require('ytdl-core');
module.exports = async function(client, message, cmd, args, prefix) {

const streamOptions = { seek : 0, volume : 0.20}
              if (!args[0]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**${prefix}msearch Search**`}}).then(m => {m.delete(15000);})
              if (!message.guild) return;
              if (message.member.voiceChannel) {
                message.member.voiceChannel.join().then(connection => {
          message.reply('I have successfully connected to the channel!').then(m => {m.delete(5000)});
                  
                  
                  var search = require('youtube-search'); 
                  var opts = { maxResults: 1, key: 'AIzaSyAwgJtJ1CUZCdrWo3eHblf4dBrv5a7jmBo' }; search(args.join(' '), opts, function(err, results) {
                    if(err) return console.log(err); 
                  
                  
          let VideoURL = "https://www.youtube.com/watch?v=" + results[0].id        
          var VideoID = results[0].id
          fetchVideoInfo(VideoID, function (err, videoInfo) { if (err) throw new Error(err); 
                   var Vd = videoInfo; 
                  
    let richEmbed = new Discord.RichEmbed()
.setTitle(`Playing... ؜ ؜ - ؜ ؜ ${message.author.username}`)
.setDescription(`\`\`\`${Vd.title}\`\`\`
**By:**${Vd.owner}
**Date published:**${Vd.datePublished}
**:eye: **${Vd.views}
**:thumbsup:**${Vd.likeCount} | **:thumbsdown:**${Vd.dislikeCount}
`)
                  .setColor(65280)
                  //.setThumbnail(`${user.avatarURL}`)
                  message.channel.send({embed: richEmbed});});
                  
                  const stream = ytdl(VideoURL, {filter : 'audioonly'});
                  const dispatcher = connection.playStream(stream, streamOptions);
        });
                  }); //from the thing
              } else {message.reply('You need to join a voice channel first!').then(m => {m.delete(5000)});
          }
}