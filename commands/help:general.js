module.exports = async function(client, message, cmd, args) {
    message.channel.send(`\`\`\`html
<ping>           Tests the delay of the bot
<invite>         Shows the invitation link of the bot and also the invitation to the bot´s server.
<say>            Make the bot say something
<messagebox [Language] [Code]> Send code using a code box
<embed>          Shows an embed usage [embed [title] [description]
<test>           Testing command. Avalible for the owner of the bot
<MCserver [IP]>  Information of a Minecraft server
\`\`\``)
}
