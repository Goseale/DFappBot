module.exports = async function(client, message, cmd, args, prefix) {

      let ownerID = process.env.OWNER
      let littleID = 230880116035551233
      
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
    
    if(message.author.id !== ownerID && message.author.id !== littleID) return message.channel.send(`${message.author.username}: ${args.join(' ')}`)
    message.channel.send(args.join(' '))
}
