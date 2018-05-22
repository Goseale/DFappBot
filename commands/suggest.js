const Discord = require('discord.js');


module.exports = async function(client, message, cmd, args, prefix) {
let channel_suggest = client.channels.get(`341355620496048132`);
  
    if (!args[0]) {
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Sends your idea to the bot developer regarding this bot`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} [Text]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
  
let richEmbed = new Discord.RichEmbed()
          .setTitle(`Suggestion from: ${message.author.username}`)
          .setDescription(`${args.join(' ')}`)
          .setColor(65280)
          .setThumbnail(`${message.author.avatarURL}`)
          if (channel_suggest) channel_suggest.send({embed: richEmbed});
            message.channel.send(`:white_check_mark:This suggestion has been sent to the bot´s discord.\`\`\`${args.join(" ")}\`\`\``).then(m => {
              m.delete(10000);
            })
}