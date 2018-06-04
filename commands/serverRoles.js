const Discord = require('discord.js');
module.exports = async function(client, message, cmd, args, prefix) {
  
  try{
let roles = message.guild.roles.map(r => `<@&${r.id}>`).join('\n')
                  let richEmbed = new Discord.RichEmbed()
                  .setTitle(`Server roles list:`)
                  .setDescription(`${roles}`)
                  message.channel.send({embed: richEmbed})
  } catch(err) {
    console.log(err)
}
  
}
