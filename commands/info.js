const Discord = require('discord.js');
const os = require('os');
const worker = require("core-worker");
module.exports = async function(client, message, cmd, args, prefix) {
    const npmv = await worker.process("npm -v").death();

let ms = client.uptime 
    let seconds = Math.floor(ms / 1000)
    ms = ms % 1000
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    seconds = seconds % 60
    minutes = minutes % 60
    
    
    try{
    const Embed = new Discord.RichEmbed()
            .setTitle("Bot info")
            .addField("Whats this bot?", `A bot for server moderation`, true)
            .addField("Memory Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("Node Version", process.version, true)
            .addField("NPM Version", npmv.data.replace("\n", ""), true)
            .addField('OS', `${os.platform()} (${process.arch})`, true)
            .addField("Uptime", `**Ms:**\`${ms}\`, **Seconds:**\`${seconds}\`, **Minutes:**\`${minutes}\`, **Hours:**\`${hours}\``, true)
            .setColor(667110);
  message.channel.send({embed: Embed});
    } catch(err) {
        console.log(err)
        return
    }
    
}
