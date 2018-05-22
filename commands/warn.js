let ownerID = process.env.OWNER
const Discord = require('discord.js');

module.exports = async function(client, message, cmd, args, prefix) {

let argse = message.content.split(' ').slice(2)
    const user = message.mentions.members.first();
    if (!message.guild.me.permissions.has("MANAGE_ROLES")) return message.reply("I don`t have *MANAGE_ROLES* permissions!");
    if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.reply("I don`t have *MANAGE_CHANNELS* permissions!");
    if (!message.guild.me.permissions.has("MANAGE_ROLES") || !message.member.permissions.has("MANAGE_ROLES") && message.author.id !== ownerID) return message.reply("You don`t have *MANAGE_ROLES* permissions!");
    
    if (!user) return message.channel.send("**Please mention a user to warn.**");
    if (!args[0]) return message.reply(`Please say the reason of the warn.Example:${prefix}warn @user [Reason]`).then(m => {m.delete(10000);})
    message.channel.send(`**Successfully warned ${user.user.tag} with reason:${args.join(' ')}.**`);
    let logchannel = message.guild.channels.find("name", "log")
    let richEmbed = new Discord.RichEmbed()
    .setTitle(`Warn member`)
.setDescription(`**Staff:**${message.author.tag}
**Channel:**${message.channel.name}
**CreatedAt:**${message.createdAt}
**User warned:**${user}
**Reson:**${argse.join(' ')}`)
.setColor(16776960)
     if (logchannel) logchannel.send({embed: richEmbed})
     else message.guild.createChannel('log').then(c => c.send({embed: richEmbed}))
  
}