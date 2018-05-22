const Handler = require("../handlers/command.js");

module.exports = {
  async main(client, prefix) {
    client.on('message', async message => {
      // Verify that the message is not sent by a bot.
      if (message.author.bot || (message.guild && !message.guild.available) || (message.guild && !message.guild.me.permissions.has("SEND_MESSAGES"))) return;
      // non-command
      
      try{
const config = require("../config.json");
let RoleName = config.role_name
const Discord = require('discord.js');    
      
      let role = message.guild.roles.find("name", RoleName)
                      if (role) {
                        if (message.member.roles.has(role.id)) {
                          message.delete();
                          let richEmbed = new Discord.RichEmbed()
                          .setTitle(`Mute log`)
.setDescription(`**Username:**${message.author.tag}
**Channel:**${message.channel.name}
**CreatedAt:**${message.createdAt}
          
**Message:**${message.content}`)
                          .setColor(65280)
                          let channel = message.guild.channels.find("name", "muted-output")
                          if (channel) channel.send({embed: richEmbed})
                          else message.guild.createChannel('muted-output').then(c => c.send({embed: richEmbed}))
                          return;
                        }
                      }
      } catch (err) {
        console.log(err)
      }
      
      
      
      
      
      
      
      
      
      
      

      // Get command
      const args = message.content.split(/\s+/g);
      const cmd = args.shift().slice(prefix.length);

      // Verify command
      if (!cmd) return;
      if (!message.content.startsWith(prefix)) return;
      
      // Handle command
      Handler(client, message, cmd, args, prefix);
      });

  }

}