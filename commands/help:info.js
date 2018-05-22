module.exports = async function(client, message, cmd, args) {
    message.channel.send(`\`\`\`html
<info>                           Information about the bot
<userinfo [@User]  /  userinfo>  Shows information about a user
<serverInfo>                     Shows information about the server
<serverRoles>                    Shows the roles of the server
<serverEmojis>                   Shows the emojis of the server
<servers>                        Shows the servers that the bot is in
<uptime>                         Time since the last reboot
<credits>                        Credits
\`\`\``)
}