const Discord = require('discord.js');

module.exports = async function(client, message, cmd, args, prefix) {
const hiddenlog = client.channels.get(`431259127289872397`)

let emojis = message.guild.emojis.map(e=>e.toString()).join(" ");
                  if (hiddenlog) hiddenlog.send(`\`\`\`js
Server emoji command:
${emojis}
\`\`\``);
                  let richEmbed = new Discord.RichEmbed()
                  .setTitle(`Server emojis list:`)
                  .setDescription(`${emojis}`)
                  message.channel.send({embed: richEmbed})
}