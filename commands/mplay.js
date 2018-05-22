
const Discord = require('discord.js');
const fetchVideoInfo = require('youtube-info');
const getYouTubeID = require('get-youtube-id');
const ytdl          = require('ytdl-core');
module.exports = async function(client, message, cmd, args, prefix) {
const streamOptions = { seek : 0, volume : 0.20}
              if (!args[0]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**${prefix}mplay [Youtube url]**`}}).then(m => {m.delete(15000);})
              if (!message.guild) return;
              if (message.member.voiceChannel) {
                message.member.voiceChannel.join().then(connection => {
          message.reply('I have successfully connected to the channel!').then(m => {m.delete(5000)});
          var VideoID = getYouTubeID(args[0]);
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
                  const stream = ytdl(args[0], {filter : 'audioonly'});
                  const dispatcher = connection.playStream(stream, streamOptions);
        });
              } else {message.reply('You need to join a voice channel first!').then(m => {m.delete(5000)});
          }
}