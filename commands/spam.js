let ownerID = process.env.OWNER
module.exports = async function(client, message, cmd, args, prefix) {

if (!message.member.permissions.has("MANAGE_MESSAGES") && message.author.id !== ownerID) return message.reply("You don`t have *MANAGE_MESSAGE* permissions!");
  message.delete()
  if (message.author.bot) return;
      if (!args[0]) {
    const Discord = require('discord.js');
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Sends a message multiple times`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} [Message]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
    message.channel.send(`Spam incoming from the user ${message.author.username}`)
    DelayNode: {2000}
    message.channel.send(args.join(' '))
    message.channel.send(args.join(' '))
    message.channel.send(args.join(' '))
    message.channel.send(args.join(' '))
  
}