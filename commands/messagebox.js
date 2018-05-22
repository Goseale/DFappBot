module.exports = async function(client, message, cmd, args, prefix) {

if (!args[0]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `Code is missing, Command:**${prefix}messagebox [code language] [Text]**`}}).then(m => {m.delete(10000);})
                    if (!args[1]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `Text is missing, Command:**${prefix}messagebox [code language] [Text]**`}}).then(m => {m.delete(10000);})
                    let code = args[0]
                    let pretext = message.content.split(' ').slice(2)
                    let text = pretext.join(' ')
                    message.channel.send(`\`\`\`${code}
${text}

Sender:${message.author.username} | using code:${code}
\`\`\``);
}