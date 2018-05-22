module.exports = async function(client, message, cmd, args, prefix) {
  
  
  let a = message.content.split(`${prefix}embed`)
  let b = a.join(" ")
  let text = b.split("_")
  if (!args[0]) {
    const Discord = require('discord.js');
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Sends a basic enmbed`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} [Title]_[Description]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
  let t = text[0]
  let d = text[1]
      message.channel.send({embed: {
      title: `${t}`,
      "color": 500000,
      description: `${d}`,
    }});
  
  
}