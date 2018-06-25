const Discord = require('discord.js');
module.exports = async function(client, message, cmd, args, prefix) {
  
  let ownerID = process.env.OWNER
  let littleID = process.env.LITTLE
  let toeval = args
  
  if (!toeval[0]) return message.reply(`Please provide something to eval.Usage:${prefix}eval [Args]`).then(m => {m.delete(10000);})
    if(message.author.id !== ownerID && message.author.id !== littleID) return message.reply({embed: { title: ":x:Error", "color": 16711680, description: `Tryed to use ${prefix}eval.He/She failed,now He/She is thinking about this bot is so secured :V`}}).then(m => {m.delete(15000);})

  
  
                 if(toeval.join(" ").indexOf("client.token") >= 0){
  message.channel.send("Token was found [1st filter]")
        return
}
        
          if(toeval.join(" ").indexOf("process.env.TOKEN") >= 0){
  message.channel.send("Token was found [2nd filter]")
        return
}
  
  
  
    const result = new Promise((resolve, reject) => resolve(eval(toeval.join(" "))));

    result.then(out => {
    if(typeof out !== "string") out = require("util").inspect(out, {
        depth: 0
    });

    //`**Evaluated:**:white_check_mark:\n\`\`\`${out}\`\`\``//
    //description: `\`\`\`js
    //${out}\`\`\``
      
      
      if (out.length >= 2000) {
          message.reply(`Output was longer than 2000 characters (${out.length} to be exact!) You can find it in the console.`);
          return console.log(out);
        }
      
            if(out.indexOf(client.token) >= 0){
  message.channel.send("Token was found [3rd filter]")
        return
}
      
    const Evaled = new Discord.RichEmbed()
            .setTitle("**Evaluated:**:white_check_mark:")
            .addField(`Imput`, `\`\`\`js
      ${toeval.join(" ")}\`\`\``)
            .addField(`Output`, `\`\`\`js
      ${out}\`\`\``)
            .setColor(65280);

        message.channel.send({embed: Evaled}).then(m => {
let response = m.createdTimestamp - message.createdTimestamp
m.edit(`**Evaled in: ${response}ms**`)})
      
    
    }).catch(e => {
    e = e.toString();

    //`:x:**Error:**\n\`\`\`${e}\`\`\``//
      
      
      const Errored = new Discord.RichEmbed()
            .setTitle(":x:Error")
            .addField(`Imput`, `\`\`\`js
      ${toeval.join(" ")}\`\`\``)
            .addField(`Output`, `\`\`\`js
      ${e}\`\`\``)
            .setColor(16711680);

        message.channel.send({embed: Errored}).then(m => {
let response = m.createdTimestamp - message.createdTimestamp
m.edit(`**Evaled in: ${response}ms**`)})
  })
  
  
}
