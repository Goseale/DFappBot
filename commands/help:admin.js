module.exports = async function(client, message, cmd, args) {
    message.channel.send(`\`\`\`html
<prefix>                      Set the bots prefix
<spam>                        Sends a message 4 time
<purge>                       Purge messages
<kick @user Reason>           Kick members
<mute> / <unmute>             Mutes a member and prevents them to talk
<warn @user Reason>           Warns a user
<editmessage [ID] [New text]> Edits a message sent by the bot
<messagepin [Message]>        Pins a message with an embed

User permissions needed:
<Chat_commands> Manage_messages
<User_commands> Kick_members
\`\`\``)
}