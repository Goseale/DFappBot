let ownerID = process.env.OWNER
module.exports = async function(client, message, cmd, args, prefix) {
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
  
  
 if(message.author.id !== ownerID) return message.reply({embed: { title: ":x:Error", "color": 16711680, description: `This command is avalible for the bot owner @Goseale.`}}).then(m => {m.delete(5000);})
     let run = args.join(" ")
  
  
}