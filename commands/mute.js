let ownerID = process.env.OWNER
const Discord = require('discord.js');
const config = require("../config.json");


module.exports = async function(client, message, cmd, args, prefix) {
  let argse = message.content.split(' ').slice(2)

        const user = message.mentions.members.first();
        if (!message.guild.me.permissions.has("MANAGE_ROLES")) return message.reply("I don`t have *MANAGE_ROLES* permissions!");
        if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.reply("I don`t have *MANAGE_CHANNELS* permissions!");
        if (!message.guild.me.permissions.has("MANAGE_ROLES") || !message.member.permissions.has("MANAGE_ROLES") && message.author.id !== ownerID) return message.reply("You don`t have *MANAGE_ROLES* permissions!");

          if (!args[0]) {
    const Discord = require('discord.js');
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Mutes a member an prevents it from talking`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} @member [Reason]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
  
        if (!user) return message.channel.send("**Please mention a user to mute.**");

        message.channel.send(`**Successfully muted ${user.user.tag} with reason:${args.join(' ')}.**`);
        let logchannel = message.guild.channels.find("name", "log")
        let richEmbed = new Discord.RichEmbed()
        .setTitle(`Mute member`)
    .setDescription(`**Staff:**${message.author.tag}
**Channel:**${message.channel.name}
**CreatedAt:**${message.createdAt}
**User muted:**${user}
**Reson:**${argse.join(' ')}`)
    .setColor(16776960)
         if (logchannel) logchannel.send({embed: richEmbed})
         else message.guild.createChannel('log').then(c => c.send({embed: richEmbed}))

message.guild.createRole({
name: RoleName,
color: 'BLUE',
permissions: ["READ_MESSAGES"],
mentionable: true,
}).then(role => 
{ role.setPosition(1, true);
user.addRole(role.id)
}
)

}