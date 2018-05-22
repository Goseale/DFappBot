let ownerID = process.env.OWNER
module.exports = async function(client, message, cmd, args, prefix) {
 
  if (!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply("I don`t have *MANAGE_MESSAGE* permissions!");
    if (!message.guild.me.permissions.has("MANAGE_MESSAGES") || !message.member.permissions.has("MANAGE_MESSAGES") && message.author.id !== ownerID) return message.reply("You don`t have *MANAGE_MESSAGE* permissions!").then(m => {m.delete(3000)});
  message.delete()
  let messages = parseInt(args[0])
  
    if (!args[0]) {
    const Discord = require('discord.js');
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Deletes multiple messages from a server`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} [Number 1-100]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
  
  if (isNaN(messages)) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**Number of messages required**`}}).then(m => {m.delete(10000);})
  if (messages === 1) {message.channel.send(".")
                       message.channel.bulkDelete(2)
                       message.channel.send('Message purged.:white_check_mark:').then(m => {m.delete(3000)});
                       return}
  message.channel.bulkDelete(messages)
  message.channel.send('Messages purged.:white_check_mark:').then(m => {
  m.delete(3000);
})
  
}