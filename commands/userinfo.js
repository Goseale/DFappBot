const Discord = require('discord.js');
module.exports = async function(client, message, cmd, args, prefix) {

const person = message.mentions.members.first();
                if (!person) {
                  let user = message.author
                  let guild = message.guild.member(user)
                  let richEmbed = new Discord.RichEmbed()
                  .setTitle(`User info:`)
                  .setDescription(`Username:${user.username}
**Id:**${user.id}
**Discriminator:**${user.discriminator}
**Registered:**${user.createdAt}
**Nickname:**${guild.displayName}
**Highes role:**${guild.highestRole}
**Joined at:**${guild.joinedAt}
`)
                  .setColor(65280)
                  .setThumbnail(`${user.avatarURL}`)
                  message.channel.send({embed: richEmbed});
                  return
                }
  
  let user = person.user
                let guild = message.guild.member(user)
                if (user.bot = "false") {var isbot = ":x:"}
                if (user.bot = "true") {var isbot = ":white_check_mark:"}
                if (guild.kickable = "false") {var userkickable = ":x:"}
                if (guild.kickable = "true") {var userkickable = ":white_check_mark:"}
                let richEmbed = new Discord.RichEmbed()
                .setTitle(`**Info of:**${user.username}`)
                .setDescription(`**Username:**${user.username}
**Id:**${user.id}
**Discriminator:**${user.discriminator}
**Registered:**${user.createdAt}
**Nickname:**${guild.displayName}
**Highes role:**${guild.highestRole}
**Joined at:**${guild.joinedAt}
`)
                .setColor(65280)
                .setThumbnail(`${user.avatarURL}`)
                message.channel.send({embed: richEmbed});
  
}