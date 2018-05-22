let ownerID = process.env.OWNER
module.exports = async function(client, message, cmd, args, prefix) {
  
if(message.author.id !== ownerID) return message.reply({embed: { title: ":x:Error", "color": 16711680, description: `This command is avalible for the bot owner @Goseale.`}}).then(m => {m.delete(5000);})
    if (!args[0]) return message.reply(`Please say the new status update.Usage:${prefix}cfg_playing [Text]`).then(m => {m.delete(10000);});
    if (args[0] === "default") {
      client.user.setPresence({ game: { name: `[help | ${client.guilds.size} server(s)`, type: 0 } })
      message.channel.send(`:white_check_mark:Playing status updated to:\`\`\`The default setting\`\`\``).then(m => {
        m.delete(5000)});
      return
                               }
    client.user.setPresence({ game: { name: `${args.join(" ")}`, type: 0 } });
    message.channel.send(`:white_check_mark:Playing status updated to:\`\`\`${args.join(" ")}\`\`\``).then(m => {
  m.delete(5000);
     })
}