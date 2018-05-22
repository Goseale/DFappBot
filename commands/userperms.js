
const Discord = require('discord.js');

module.exports = async function(client, message, cmd, args, prefix) {

const person = message.mentions.members.first();
                if (!person) {
                  let user = message.author
                  let guild = message.guild.member(user)
                  let richEmbed = new Discord.RichEmbed()
                  .setTitle(`User Perms:`)
                  .setDescription(`\`\`Perms of ${user.username}
 ${guild.permissions}
\`\`
`)
                  .setColor(65280)
                  .setThumbnail(`${user.avatarURL}`)
                  message.channel.send({embed: richEmbed});
                  return
                }
                let user = person.user
                let guild = message.guild.member(user)
                let richEmbed = new Discord.RichEmbed()
                .setTitle(`User Perms:`)
                .setDescription(`\`\`Perms of ${user.username}
${guild.permissions.join('\n')}
\`\`
`)
                .setColor(65280)
                .setThumbnail(`${user.avatarURL}`)
                message.channel.send({embed: richEmbed});
}