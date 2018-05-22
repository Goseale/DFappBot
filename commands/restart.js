const Discord = require('discord.js');
module.exports = async function(client, message, cmd, args, prefix) {
message.react("✅");
                         message.channel.send("restarting... [0/3] :red_circle: :red_circle: :red_circle:").then(m => {
                           setTimeout(() => m.edit("**Restarting... [1/3] :large_blue_circle: :red_circle: :red_circle:**"), 100);
                           setTimeout(() => m.edit("**Restarting... [2/3] :large_blue_circle: :large_blue_circle: :red_circle:**"), 300);
                           setTimeout(() => m.edit("**Restarting... [3/3] :large_blue_circle: :large_blue_circle: :large_blue_circle:**"), 500);
                           setTimeout(() => m.edit("**Successfully restarted! :white_check_mark:**"), 700);
                           setTimeout(() => m.edit("**Successfully restarted! :white_check_mark:**").then(() => process.exit()));
})
}