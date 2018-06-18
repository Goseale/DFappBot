const Discord = require('discord.js');
module.exports = async function(client, message, cmd, args, prefix) {
const fs = require('fs');
  
  
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
  
  
  if (!args[0]) {
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Removes a command temporarely to the bot`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} [cmd]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
  

try {
  fs.unlinkSync(`commands/${args[0]}.js`);
  message.channel.send(`Deleted file ${args[0]}.js`);
} catch (err) {
  message.channel.send("File couldnt be deleted. Look at console")
  console.log(err)
  return
}
}
