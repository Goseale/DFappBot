const Discord = require('discord.js');
module.exports = async function(client, message, cmd, args, prefix) {
let numb = parseInt(args[0])
             if (!args[0]) {
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Gnereates a random number from 0 to the number you choose`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} [Number]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
             if (isNaN(numb)) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**Number required**`}}).then(m => {m.delete(10000);})
             var random = Math.floor(Math.random() * numb) + 1; 
             message.channel.send({embed: { title: "Generating...", "color": 65280, description: `rng is generating a number...`}}).then(m => setTimeout(function() { m.edit({embed: { title: "Generated :white_check_mark:", "color": 65280, description: `RNG generated:**${random}**`}}) }, 3000))
}