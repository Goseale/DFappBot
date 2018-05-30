module.exports = async function(client, message, cmd, args, prefix) {

      if (!args[0]) {
    const Discord = require('discord.js');
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Sends a message by the bot`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} [Message]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
    message.delete()
    message.channel.send(args.join(' '))

}