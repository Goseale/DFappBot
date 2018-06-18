const Discord = require('discord.js');
module.exports = async function(client, message, cmd, args, prefix) {
  
  let ownerID = process.env.OWNER
  let littleID = process.env.LITTLE
  if(message.author.id !== ownerID && message.author.id !== littleID) {
    
    const Noperm = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Error` ,`You dont have the permission to do this`, true)
            .setColor(16711680);

        message.channel.send({embed: Noperm});
    return
    
  }
  
  
var file = require('graceful-fs')
let a = message.content.split(`[addcmd `)
  let b = a.join(" ")
  let choose = b.split(`c:`)
  
  
  
  if (!args[0]) {
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Adds a command temporarely to the bot`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} [Name] c:[code]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
  
  
  
  try {
  new Function(choose);
  // valid code
  const Valid = new Discord.RichEmbed()
            .setTitle(`\`Add ${args[0]}\``)
            .addField(`Result` ,`Command **${args[0]}** succsesfully added`, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Valid});
    
} catch(e) {
 // Code is invalid
const Invalid = new Discord.RichEmbed()
            .setTitle(`\`Add ${args[0]}\``)
            .addField(`Result` ,`Command code has an error`, true)
            .addField(`Error` ,`${e}`, false)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Invalid});
  return
}
  
file.writeFile(`commands/${args[0]}.js`, `
module.exports = async function(client, message, cmd, args, prefix) {
${choose[1]}
}

//code generated on cmd
`, function(err) {console.log(err)})
  
}
