module.exports = async function(client, message, cmd, args, prefix) {
  
  let ownerID = process.env.OWNER
  let littleID = process.env.LITTLE
  let toeval = args
  
  if (!toeval[0]) return message.reply(`Please provide something to eval.Usage:${prefix}eval [Args]`).then(m => {m.delete(10000);})
    if(message.author.id !== ownerID && message.author.id !== littleID) return message.reply({embed: { title: ":x:Error", "color": 16711680, description: `Tryed to use ${prefix}eval.He/She failed,now He/She is thinking about this bot is so secured :V`}}).then(m => {m.delete(15000);})
   toeval.shift();

    const result = new Promise((resolve, reject) => resolve(eval(toeval.join(" "))));

    result.then(out => {
    if(typeof out !== "string") out = require("util").inspect(out, {
        depth: 0
    });

    //`**Evaluated:**:white_check_mark:\n\`\`\`${out}\`\`\``//
    //description: `\`\`\`js
    //${out}\`\`\``
      
      
    message.channel.send({embed: {
      title: "**Evaluated:**:white_check_mark:",
      "color": 65280,
      "fields": [
      {
      "name": "Input:",
      "value": `\`\`\`js
      ${toeval.join(" ")}\`\`\``
      },
      {
      "name": "Output:",
      "value": `\`\`\`js
      ${out}\`\`\``
      },
           ]
    }});
    }).catch(e => {
    e = e.toString();

    //`:x:**Error:**\n\`\`\`${e}\`\`\``//
    message.channel.send({embed: {
      title: ":x:Error",
      "color": 16711680,
      "fields": [
      {
      "name": "Input:",
      "value": `\`\`\`js
      ${toeval.join(" ")}\`\`\``
      },
      {
      "name": "Output",
      "value": `\`\`\`js
      ${e}\`\`\``
      },
          ]
    }})
  })
  
  
}