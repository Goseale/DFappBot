const Discord = require('discord.js');
const childProcess = require('child_process');

module.exports = async function(client, message, cmd, args, prefix) {
  try{
    if (message.author.id !== process.env.OWNER && message.author.id !== process.env.LITTLE) return;
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

        const code = args.join(" ");
        let evaled = childProcess.execSync(encode_utf8(code));

        console.log(typeof evaled)
        console.log(evaled)

        if (typeof evaled !== "string")
        evaled = evaled.toString();

        if (evaled.length >= 2000) {
          msg.edit(`${message.author}, Output was longer than 2000 characters (${evaled.length} to be exact!) You can find it in the console.`);
          return console.log(evaled);
        }

        msg.edit(`**Bash execution successful.**\n\n:inbox_tray: Input:\n\`\`\`sh\n${code}\n\`\`\`\n\n:outbox_tray: Output:\n\`\`\`sh\n${clear(evaled)}\n\`\`\`\n\`Execution Completed\``);

      } catch (err) {
        msg.edit(`\`Bash ERROR\` \`\`\`sh\n${clear(err)}\n\`\`\``);
    }
  } catch (err) {
    console.log(err)
  }
  }
