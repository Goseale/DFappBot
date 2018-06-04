const Discord = require('discord.js');
module.exports = async function(client, message, cmd, args, prefix) {

const user = message.mentions.members.first();
    let argse = message.content.split(' ').slice(2)
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("I don`t have *KICK_MEMBERS* permissions!");
    if (!message.guild.me.permissions.has("KICK_MEMBERS") || !message.member.permissions.has("KICK_MEMBERS")) return message.reply("You don`t have *KICK_MEMBERS* permissions!").then(m => {m.delete(3000);});

    if (!args[0]) {
    const Discord = require('discord.js');
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Kicks a member from the server`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} @member [Reason]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
    if (!user) return message.reply("Please mention a user to kick.").then(m => {m.delete(3000);})
    try{
    user.kick(argse.join(' '));
    message.reply(`Successfully kicked ${user.user.tag}.`);
    } catch(err) {
        message.channel.send(`Person coulnt be kicked becouse of ${err}`)
        return
    }
    
    let logchannel = message.guild.channels.find("name", "log")
    let richEmbed = new Discord.RichEmbed()
    .setTitle(`Kick member`)
.setDescription(`**Staff:**${message.author.tag}
**Channel:**${message.channel.name}
**CreatedAt:**${message.createdAt}
**User kicked:**${user}
**Reson:**${argse.join(' ')}`)
.setColor(16776960)
     if (logchannel) logchannel.send({embed: richEmbed})
  
}
