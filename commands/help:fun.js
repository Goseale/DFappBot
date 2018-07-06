module.exports = async function(client, message, cmd, args) {
    message.channel.send(`\`\`\`html
<flipcoin>            Flips a coin
<random>              Chooses from a list
<8ball>               Ask a question to the 8ball
<ascii [Text]>        Prints a text in ascii form
\`\`\``)
}
