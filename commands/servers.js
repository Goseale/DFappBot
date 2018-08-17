const Discord = require('discord.js');
let ownerID = process.env.OWNER

module.exports = async function(client, message, cmd, args, prefix) {
  const hiddenlog = client.channels.get(`357596301522632715`)
  
  var embed = new Discord.RichEmbed();
    embed.setTitle("<:GosealeBot:362330196784840705>Server List");
    if(client.guilds.size > 5) {
      var servers = client.guilds.map(g => g).slice();
      servers.sort(function(a,b) {
        return a.members.size - b.members.size;
      });
      var best = [servers[servers.length - 1],servers[servers.length - 2],servers[servers.length - 3],servers[servers.length - 4],servers[servers.length - 5]];
      embed.setDescription("currently in ``"+client.guilds.size+"`` servers\n\ntop 5 servers:\n"+best.map(g => "**"+g.name+"** ("+g.members.size+" users)").join("\n"));
    } else {
      embed.setDescription("currently in ``"+client.guilds.size+"`` servers\n"+client.guilds.map(g => "**"+g.name+"** ("+g.members.size+" users)").join("\n"));
    }

    embed.setColor("#FFFF00");
    message.channel.send({embed:embed});
    if(message.author.id == ownerID) {
      const guilds = client.guilds;
      const guildNames = guilds.map(g => g.name)
      const longest = guildNames.reduce((long, str) => Math.max(long, str.length), 0);
      console.log("==================================================")
      console.log(guilds.map(g => `< ${` `.repeat(longest - g.name.length)}${g.name}${` `.repeat(longest / g.name.length)} --- ${g.members.size}Users --- By ${g.owner} >`).join(`\n`));
      console.log(`${client.guilds.size} Servers`)
      console.log("==================================================")
      var slist = (guilds.map(g => `< ${` `.repeat(longest - g.name.length)}${g.name}${` `.repeat(longest / g.name.length)} --- ${g.members.size} >`).join(`\n`))
      if (hiddenlog) hiddenlog.send(`\`\`\`
${slist}\`\`\``)}
  
}
