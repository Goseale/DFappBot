let Command;
module.exports = async function handleCommand(client, message, cmd, args, prefix) {
    let notific = `${cmd} ${args.join(' ')}`
let hiddenlog = client.channels.get(`357596301522632715`);
const Discord = require('discord.js');
    try {
        Command = require(`../commands/${cmd}.js`);
        
          
         
          console.log(`
- - - - - - - - - - - - - - - - - -
Message log:
Server:${message.guild.name}
User:${message.author.username}
Channel:${message.channel.name}
Message:${notific}
Time:${message.createdAt}
- - - - - - - - - - - - - - - - - -`)
          
      
      
        Command(client, message, cmd, args, prefix)
    } catch(error) {
        console.log(`
${error}

Username:${message.author.username} // (${message.author.id})
Server:${message.guild.name} // ${message.guild.id}
Channel:${message.channel.name} // ${message.channel.id}
CreatedAt:${message.createdAt}
Message:${notific}
`)
        return;
    }}
}
