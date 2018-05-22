module.exports = {
  async main(client, Discord, hiddenlog) {
    
    client.on('guildDelete', guild => {
  client.user.setPresence({ game: { name: `[help | ${client.guilds.size} server(s)`, type: 0 } });
  let richEmbed = new Discord.RichEmbed()
                .setTitle(`Left guild`)
                .setDescription(`**Server:**${guild.name}
**By:**${guild.owner}
**Member count:**${guild.memberCount}
**CreatedAt:**${guild.createdAt}`)
                .setColor(16711680)
                if (hiddenlog) hiddenlog.send({embed: richEmbed});
});
    
  }
}
