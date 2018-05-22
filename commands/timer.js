module.exports = async function(client, message, cmd, args, prefix) {

function timer(message) {
            if (!args[0]) {
    const Discord = require('discord.js');
    const Error = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Description` ,`Sets a timer`, true)
            .addField("Usage", `\`\`\`${prefix}${cmd} [Time in seconds (Max 600)]\`\`\``, true)
            .setColor(message.member.displayHexColor);

        message.channel.send({embed: Error});
    return
  }
            let timer = parseInt(args[0])
            //let timer = 10
            if (isNaN(args[0])) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**Number required**`}}).then(m => {m.delete(10000);})
              if (timer <= 0) return message.channel.send(`The timer must be above 0 seconds`).then(m => {m.delete(5000);})
                if (timer > 600) return message.channel.send(`The limit of the timer is 600 seconds (10 minutes)`).then(m => {m.delete(5000);})
                let secondTimeont = timer * 1000
                let count = 0
                let change = Math.floor(timer * 0.25)
                let mess;
                message.channel.send({embed: {title: "Timer",description: `**Timer set to ${timer} seconds**`,"color": 667110}}).then(m => {mess = m});
                var time = setInterval(function() {
                  Timer();
                },
                1000);
                function Timer() {
                  count += 1;
                  timer -= 1;
                  if (timer <= 0) {
                    mess.edit({embed: {title: "Timer",description: `**Timer ended**`,"color": 667110}});
                  }
                  if (count >= 3) {
                    count = 0;
                    let seconds = timer
                    let minutes = Math.floor(seconds / 60)
                    seconds = seconds % 60
                    if (seconds < 10) seconds = `0${seconds}`
                    mess.edit({embed: {title: "Timer",description: `**${minutes}:${seconds}**`,"color": 667110}});
                  }
                  if (timer <= 0) {
                    mess.channel.send(`${message.author.toString()}.Time is up`).then(m => {m.delete(60000)});
                    count = 0
                    stopTimer()
                    }
                function stopTimer(){
                  clearInterval(time)
                    }
              }
          }
    timer(message)
}