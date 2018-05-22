let ownerID = process.env.OWNER

module.exports = async function(client, message, cmd, args, prefix) {
  
  message.channel.send("Command disabled temporarely")
  return
  
  
if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply("I don`t have *MANAGE_MESSAGE* permissions!");
          if (!message.guild.me.permissions.has("MANAGE_MESSAGES") || !message.member.permissions.has("MANAGE_MESSAGES") && message.author.id !== ownerID) return message.reply("You don`t have *MANAGE_MESSAGE* permissions!").then(m => {m.delete(3000)});
          let id = args[0]
          let mess = message.content.split(' ').slice(2).join(" ").replace(/\\n/gi, '\n');
          let fetched = message.channel.fetchMessages({message: id});
          //if (!message.channel.messages.get(id)) return message.channel.send("Message not found!").then(m => {m.delete(3000)})
          message.channel.messages.fetchMessages({message: fetched}).edit(`${mess}`)
  
}