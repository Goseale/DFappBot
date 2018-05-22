const Discord = require('discord.js');
let ownerID = process.env.OWNER
module.exports = async function(client, message, cmd, args, prefix) {

if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply("I don`t have *MANAGE_MESSAGE* permissions!");
                  if (!message.guild.me.permissions.has("MANAGE_MESSAGES") || !message.member.permissions.has("MANAGE_MESSAGES") && message.author.id !== ownerID) return message.reply("You don`t have *MANAGE_MESSAGE* permissions!").then(m => {m.delete(5000)});
                  let richEmbed = new Discord.RichEmbed()
                  .setTitle(`${message.author.username}`)
                  .setDescription(`${args.join(' ')}`)
                  .setThumbnail(`https://images-ext-2.discordapp.net/external/Ac7Z_CY3vNjdeKV5u550spAIEgFFSWsvY8IiVCkLSxA/https/i.imgur.com/VCvtCnk.png?width=80&height=80`)
                  message.channel.send({embed: richEmbed}).then(m => {m.pin()});
}