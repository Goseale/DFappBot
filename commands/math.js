
module.exports = async function(client, message, cmd, args, prefix) {

  if (!args[0]) {
    const Discord = require('discord.js');
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Do simple math`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} [Number 1] [+ - * /] [Number 2]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
              if (!args[1]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**Error choose one operator.For more help do ${prefix}math**`}}).then(m => {m.delete(15000);})
              if (!args[2]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**Error type the second number.For more help do ${prefix}math**`}}).then(m => {m.delete(15000);})
              let num1 = parseInt(args[0])
              let sign = args[1]
              let num2 = parseInt(args[2])
              if (isNaN(args[0])) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**Number required in num1**`}}).then(m => {m.delete(15000);})
              if (isNaN(args[2])) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**Number required in num2**`}}).then(m => {m.delete(15000);})
              if (sign === "+") {var ans = num1 + num2}
              if (sign === "-") {var ans = num1 - num2}
              if (sign === "*") {var ans = num1 * num2}
              if (sign === "/") {var ans = num1 / num2}
              message.channel.send({embed: {
                title: `Math result [${num1}${sign}${num2}]`,
                "color": 667110,
                "description": `\`\`\`${ans}\`\`\``,
              }})
  
}