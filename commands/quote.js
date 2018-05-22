const Discord = require('discord.js');
module.exports = async function(client, message, cmd, args, prefix) {

  
    if (!args[0]) {
    const Discord = require('discord.js');
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`quotes a message from someone`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} [ID of the message]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
  
  
if (!message.channel.messages.get(`${args[0]}`)) return message.channel.send("Message not found!\nThis might be becouse the bot was offline").then(m => {m.delete(5000)})
            let mess = message.channel.messages.get(args[0])
            let messAuthor = mess.author
            let messEmb = mess.embeds[0]
            var person = messAuthor
            let user = person.user
            if (messEmb) {var hasembed = "[Has embed]"};
            if (!messEmb) {var hasembed = " "};
            let richEmbed = new Discord.RichEmbed()
            .setTitle(`${message.author.tag} quoted a message from:${person.tag}`)
            .setDescription(`${mess.content}${hasembed}`)
            .setColor(65280)
            .setThumbnail(`${person.avatarURL}`)
            message.channel.send({embed: richEmbed});
            if (messEmb) {
                let messageEmbed = new Discord.RichEmbed()
                if (messEmb.title) messageEmbed = messageEmbed.setTitle(messEmb.title)
                if (messEmb.description) messageEmbed = messageEmbed.setDescription(messEmb.description)
                if (messEmb.thumbnail) messageEmbed = messageEmbed.setThumbnail(messEmb.description)
                if (messEmb.footer) messageEmbed = messageEmbed.setFooter(messEmb.footer.text, messEmb.footer.iconURL)
                if (messEmb.image) messageEmbed = messageEmbed.setImage(messEmb.image.url)
                if (messEmb.hexColor) messageEmbed = messageEmbed.setColor(messEmb.hexColor)
                message.channel.send({embed: messageEmbed})
            }
}