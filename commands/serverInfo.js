module.exports = async function(client, message, cmd, args, prefix) {
  
   message.channel.send({
        embed: {
          thumbnail: {
  url: `${message.guild.iconURL}`},
            "color": 11730688,
            description: `**__Info about \`\`${message.guild.name}\`\`:notepad_spiral:__\n\nMembers: \`\`${message.guild.memberCount}\`\`\n\nDefaultChannel: ${message.guild.defaultChannel}\n\nServerOwner: ${message.guild.owner}\n\nServerOwnerID: \`\`${message.guild.ownerID}\`\`\n\nServerCreated: \`\`${message.guild.createdAt}\`\`\n\nServerID: \`\`${message.guild.id}\`\`\n\nChannels: \`\`${message.guild.channels.size}\`\`\n\nServerName: \`\`${message.guild.name}\`\`**`
        }})
  
}