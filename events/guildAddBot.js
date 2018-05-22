

module.exports = {
  async main(client, Discord, hiddenlog) {
    
    client.on('guildCreate', guild => {
  client.user.setPresence({ game: { name: `B[help | ${client.guilds.size} server(s)`, type: 0 } });
  let richEmbed = new Discord.RichEmbed()
                .setTitle(`Joined guild`)
                .setDescription(`**Server:**${guild.name}
**By:**${guild.owner}
**Member count:**${guild.memberCount}
**CreatedAt:**${guild.createdAt}`)
                .setColor(65280)
                if (hiddenlog) hiddenlog.send({embed: richEmbed});
  if (guild.defaultChannel) guild.defaultChannel.send({
     embed: {
       "color": 13253,
         description: `**Thanks for inviting me to your server! do B[help to get started :D**`
     }});
});
    
  }
}