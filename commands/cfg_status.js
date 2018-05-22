let ownerID = process.env.OWNER
module.exports = async function(client, message, cmd, args, prefix) {
  
  if(message.author.id !== ownerID) return message.reply({embed: { title: ":x:Error", "color": 16711680, description: `This command is avalible for the bot owner @Goseale.`}}).then(m => {m.delete(5000);})
    if (!args[0]) return message.reply(`Please say the new status.Usage:${prefix}cfg_status online|idle|dnd|invisible`).then(m => {m.delete(10000);});
    if (args[0] === "online") {client.user.setStatus("online")}
    if (args[0] === "idle") {client.user.setStatus("idle")}
    if (args[0] === "dnd") {client.user.setStatus("dnd")}
    if (args[0] === "invisible") {client.user.setStatus("invisible")}
    message.channel.send(`:white_check_mark:Status updated to:\`\`\`${args.join(" ")}\`\`\``).then(m => {
  m.delete(5000);
     })
  
}