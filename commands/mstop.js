module.exports = async function(client, message, cmd, args, prefix) {

if (message.member.voiceChannel) {
              message.member.voiceChannel.leave()
              message.reply('I have successfully disconected from the channel!').then(m => {m.delete(5000)});
              } else {message.reply('Join the channel that you want me to disconect').then(m => {m.delete(5000)});
            }
}