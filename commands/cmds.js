const Discord = require('discord.js');
const childProcess = require('child_process');

module.exports = async function(client, message, cmd, args, prefix) {
  try{
    
    
  let ownerID = process.env.OWNER
  let littleID = process.env.LITTLE
  if(message.author.id !== ownerID && message.author.id !== littleID) {
    
    const Noperm = new Discord.RichEmbed()
            .setTitle(`\`${cmd}\``)
            .addField(`Error` ,`You dont have the permission to do this`, true)
            .setColor(16711680);

        message.channel.send({embed: Noperm});
    return
    
  }
    
    
    
    function encode_utf8(s) {
              return unescape(encodeURIComponent(s));
          }

          function decode_utf8(s) {
              return decodeURIComponent(escape(s));
          }

          const clear = text => {
              if (typeof(text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
              else
                  return text;
    }
    let msg = await message.channel.send("<a:Loading:435585507016310785> Executing...");
      try {

        const code = "ls commands";
        let evaled = childProcess.execSync(encode_utf8(code));

        console.log(typeof evaled)
        console.log(evaled)

        if (typeof evaled !== "string")
        evaled = evaled.toString();

        if (evaled.length >= 2000) {
          message.reply(`Output was longer than 2000 characters (${evaled.length} to be exact!) You can find it in the console.`);
          return console.log(evaled);
        }

        msg.edit(`**Bash execution successful.**\n\n:inbox_tray: Input:\n\`\`\`sh\nCommands list\n\`\`\`\n\n:outbox_tray: Output:\n\`\`\`sh\n${clear(evaled)}\n\`\`\`\n\`Execution Completed\``);

      } catch (err) {
        msg.edit(`\`Bash ERROR\` \`\`\`sh\n${clear(err)}\n\`\`\``);
    }
  } catch (err) {
    console.log(err)
  }
  }

