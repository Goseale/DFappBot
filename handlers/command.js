let Command;
module.exports = async function handleCommand(client, message, cmd, args, prefix) {
    let notific = `${cmd} ${args.join(' ')}`
let hiddenlog = client.channels.get(`357596301522632715`);
const Discord = require('discord.js');
    try {
        Command = require(`../commands/${cmd}.js`);
        
      
        if (hiddenlog) {
          
         
          console.log(`
- - - - - - - - - - - - - - - - - -
Message log:
Server:${message.guild.name}
User:${message.author.username}
Channel:${message.channel.name}
Message:${notific}
Time:${message.createdAt}
- - - - - - - - - - - - - - - - - -`)
                let richEmbed = new Discord.RichEmbed()
                .setTitle(`Message log`)
                .setDescription(`**Server:**${message.guild.name}
**Username:**${message.author.username} (${message.author.id})
**Channel:**${message.channel.name}
**CreatedAt:**${message.createdAt}
**Message:**${notific}
\`\`\`${notific}\`\`\``)
                .setColor(65280)
                .setThumbnail(`${message.author.avatarURL}`)
                if (hiddenlog) hiddenlog.send({embed: richEmbed});
          
          
        }
      
      
        Command(client, message, cmd, args, prefix)
    } catch(error) {
        if (hiddenlog) {hiddenlog.send(`Error:
\`\`\`js
${error}

Username:${message.author.username} // (${message.author.id})
Channel:${message.channel.name}
CreatedAt:${message.createdAt}
\`\`\``)
        return;
    }}
}
