const Discord = require('discord.js');

module.exports = async function(client, message, cmd, args, prefix) {
  let a = message.content.split(`beta.random `)
  let b = a.join(" ")
  let choose = b.split("_")
  
  if (!args[0]) {
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Chooses from a list`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} [Option 1]_[Option 2]_[Option X]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
  
  let title = (`${message.author} Randomising:(${choose.length}) \`${choose.join(", ")}\``)
  
  function rand(min, cnt) {
    return Math.floor((Math.random() * cnt) + min)
  }
  
  let selected = (`Selected: ${choose[rand(0, choose.length)]}`)
  
  const Result = new Discord.RichEmbed()
            .setTitle("\`Random\`")
            .addField(`Selection(${choose.length})`, `\`\`\`${choose.join(", ")}\`\`\``, true)
            .addField("Selected", `\`\`\`${choose[rand(0, choose.length)]}\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Result});
    
  
}