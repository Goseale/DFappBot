let ownerID = process.env.OWNER
const Discord = require('discord.js');
const config = require("../config.json");
let RoleName = config.role_name

module.exports = async function(client, message, cmd, args, prefix) {

const user = message.mentions.members.first();
  let role = message.guild.roles.find("name", RoleName)
  if (!message.guild.me.permissions.has("MANAGE_ROLES")) return message.reply("I don`t have *MANAGE_ROLES* permissions!");
  if (!message.guild.me.permissions.has("MANAGE_ROLES") || !message.member.permissions.has("MANAGE_ROLES") && message.author.id !== ownerID) return message.reply("You don`t have *MANAGE_ROLES* permissions!");

  if (!user) return message.channel.send("**Please mention a user to unmute.**");

            message.channel.send(`**Successfully unmuted ${user.user.tag}.**`);
            let logchannel = message.guild.channels.find("name", "log")
            let richEmbed = new Discord.RichEmbed()
            .setTitle(`Unmute member`)
        .setDescription(`**Staff:**${message.author.tag}
**Channel:**${message.channel.name}
**CreatedAt:**${message.createdAt}
**User unmuted:**${user}`)
        .setColor(65280)
             if (logchannel) logchannel.send({embed: richEmbed})
             else message.guild.createChannel('log').then(c => c.send({embed: richEmbed}))

            role.delete({name: RoleName})

}