module.exports = async function(client, message, cmd, args, prefix) {

let ms = client.uptime 
    let seconds = Math.floor(ms / 1000)
    ms = ms % 1000
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    let memory = (process.memoryUsage().heapUsed / 1024 / 1024)
    seconds = seconds % 60
    minutes = minutes % 60
    
    const Embed = new Discord.RichEmbed()
            .setTitle("Bot info")
            .addField("Why this bot was made?", `Because i wanted to own a bot :V and also i wanted to know javascript and the best was to do it is creating a discord bot.Im constantly uptading it with new features, to make it the best bot ever!!`, true)
            .addField("Memory usage", `${math.round.memory} MB`, true)
            .addField("Uptime", `**Ms:**\`${ms}\`, **Seconds:**\`${seconds}\`, **Minutes:**\`${minutes}\`, **Hours:**\`${hours}\``, true)
            .setColor(667110);
  message.channel.send({embed: Embed});
    
}
