module.exports = async function(client, message, cmd, args) {
    message.channel.send(`\`\`\`html
<suggest>         Suggest features to the bot
<timer>           Set a timer
<rng>             Generates a number
<math>            Do math
<mplay>           Plays a song from an youtube url
<msearch>         Search a song in Youtube
<mstop>           Stops the music
\`\`\``)
}