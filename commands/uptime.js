const Discord = require('discord.js');
module.exports = async function(client, message, cmd, args, prefix) {

         let ms = client.uptime 
         let seconds = Math.floor(ms / 1000)
         ms = ms % 1000
         let minutes = Math.floor(seconds / 60)
         let hours = Math.floor(minutes / 60)
         seconds = seconds % 60
         minutes = minutes % 60
         const Embed = new Discord.RichEmbed()
            .setTitle("Uptime")
            .addField("Ms", `\`\`\`${ms}\`\`\``, true)
            .addField("Seconds", `\`\`\`${seconds}\`\`\``, true)
            .addField("Minutes", `\`\`\`${minutes}\`\`\``, true)
            .addField("Hours", `\`\`\`${hours}\`\`\``, true)
            .setColor(667110);
  message.channel.send({embed: Embed});
  
}