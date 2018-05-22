module.exports = async function(client, message, cmd, args, prefix) {

let ms = client.uptime 
    let seconds = Math.floor(ms / 1000)
    ms = ms % 1000
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    let memory = (process.memoryUsage().heapUsed / 1024 / 1024)
    seconds = seconds % 60
    minutes = minutes % 60
    message.channel.send({embed: {
        title: "Info",
        description: "A bot made by goseale",
        "color": 667110 ,
        "fields": [
          {"name": "Why this bot was made?",
           "value": "Because i wanted to own a bot :V and also i wanted to know javascript and the best was to do it is creating a discord bot.Im constantly uptading it with new features, to make it the best bot ever!!"
          },
          {
           "name": "Memory usage:",
           "value": `\`${Math.round(memory)}\` **MB**`
          },
          {
            "name": "Uptime",
            "value": `**Ms:**\`${ms}\`, **Seconds:**\`${seconds}\`, **Minutes:**\`${minutes}\`, **Hours:**\`${hours}\``
          }
        ]
    }})
  
}