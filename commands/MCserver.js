const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const talkedRecently = new Set(); //Ignore the error

module.exports = async function(client, message, cmd, args, prefix) {
  
  //anti spam
  if (talkedRecently.has(message.author.id)) {
            message.channel.send("This command uses an API so it has a cooldown of 1 minute -" + message.author);
            return
    }
  //anti spam end
  
  
  
         let ip = args.join(' ')
       if (!args[0]) {
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Checks a minecraft server`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} [IP]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
       const api = `https://mcapi.us/server/status?ip=${ip}`;
       
       snekfetch.get(api).then(r => {
         if (r.body.status != "success") {return}
         //console.log(r.body)
         let server = r.body
         
         let ms = server.last_updated 
         let seconds = Math.floor(ms / 1000)
         ms = ms % 1000
         let minutes = Math.floor(seconds / 60)
         let hours = Math.floor(minutes / 60)
         let days = Math.floor(hours) / 60
         seconds = seconds % 60
         minutes = minutes % 60
         hours = hours % 24
         
         let richEmbed = new Discord.RichEmbed()
            .setTitle(`Minecraft server status`)
        .setDescription(`**IP:**${ip}
**Online?:**${server.online}
**Motd:**${server.motd}
**Players:**${server.players.now}/${server.players.max}
**Version**:${server.server.name}`)
        .setColor(10223360)
         
         message.channel.send({embed: richEmbed})
       });
  
  //anti spam
  talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
  
}
