const talkedRecently = new Set(); //Ignore the error
module.exports = async function(client, message, cmd, args, prefix) {
  
 
  //anti spam
  if (talkedRecently.has(message.author.id)) {
            message.channel.send("This command can be a little spammy so it has a cooldown of 30 seconds -" + message.author);
            return
    }
  //anti spam end
  
  
  
  if (!args[0]) {
    const Discord = require('discord.js');
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Prints text in ascii form`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} [Text]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
  
  
  
  var figlet = require('figlet');
 
figlet(`${args.join(" ")}`, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    if (data.length >= 2000) {
          message.reply(`The text generated was longer than 2000 characters, ${data.length} to be exact\nCooldown wasnt set, you can send the cooldown again`);
          return
        }
    message.channel.send(`\`\`\`${data}\`\`\``)
  
  
  //anti spam
  talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30s
          talkedRecently.delete(message.author.id);
        }, 30000);
  
});
  
  
  
  
  
  
  
  
  
}
