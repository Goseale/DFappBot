const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const settings = require("./settings.json");
const guildTimers = new Discord.Collection()
const ffmpeg = require("ffmpeg-static");
console.log("FFMPEG PATH: " + ffmpeg.path);
const dispatcher = require('streamdispatch');
const ytdl          = require('ytdl-core');
const getYouTubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const request = require('request');
const fs = require("fs");
const http = require('http'); 

const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const PersistentCollection = require('djs-collection-persistent');       //For prefix
const guildSettings = new PersistentCollection({name: 'guildSettings'}); //For prefix
const message_log = new PersistentCollection({name: 'Message_log'}); //For prefix
const defaultSettings = { //For prefix
  prefix: "["
  }
const Jimp = require("jimp");
//const graphic = require("graphic");
var algebra = require('algebra.js');
const snekfetch = require('snekfetch');
var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;
const ownerID = process.env.OWNER
const online_status = config.online_status
const RoleName = config.role_name
const yt_api_key = config.yt_api_key;
const hook = new Discord.WebhookClient('429048457710403604', "6bGx0MVRjineYJXDc_Nx15VvdaoH3BWAghUbvHZYbWFafNqD91h2ukH22jE4uUnOghDt");

client.login(process.env.TOKEN);

//http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'}); res.send('it is running\n'); }).listen(process.env.PORT || 5000)

//para ver la ID del canal usar un eval con message.channel.id//
var botlog;
var channel_suggest;
var hiddenlog;
client.on("ready", () => {
  console.log(config.welcome_message_console);
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
  const guilds = client.guilds;
  const guildNames = guilds.map(g => g.name)
  const longest = guildNames.reduce((long, str) => Math.max(long, str.length), 0);
  console.log("==================================================")
  console.log(guilds.map(g => `< ${` `.repeat(longest - g.name.length)}${g.name}${` `.repeat(longest / g.name.length)} --- ${g.members.size} >`).join(`\n`));
  console.log(`${client.guilds.size} Servers`)
  console.log("==================================================")
  channel_suggest = client.channels.get(`341355620496048132`);
  hiddenlog = client.channels.get(`357596301522632715`);
});

client.on("ready", () => {
client.user.setPresence({ game: { name: `[help | ${client.guilds.size} server(s)`, type: 0 } });
if (botlog) botlog.send("Starting bot...")
if (botlog) botlog.send("Loading the code...")
if (botlog) botlog.bulkDelete(100)
if (botlog) botlog.send("The bot has succesfully bootted-up :white_check_mark: <@229016449593769984>").then(m => {
  m.delete(15000)});
if (botlog) botlog.send("**__The Servers im on:__**").then(m => {
  m.delete(14500)});
if (botlog) botlog.send(client.guilds.map(g => g.name).join('\n')).then(m => {
  m.delete(14000)});
client.user.setPresence({ game: { name: `[help | ${client.guilds.size} server(s)`, type: 0 } });
client.user.setStatus("online"); //online,invisible,idle,dnd (do not disturb)
});

client.on('guildCreate', guild => {
  client.user.setPresence({ game: { name: `[help | ${client.guilds.size} server(s)`, type: 0 } });
  let richEmbed = new Discord.RichEmbed()
                .setTitle(`Joined guild`)
                .setDescription(`**Server:**${guild.name}
**By:**${guild.owner}
**Member count:**${guild.memberCount}
**CreatedAt:**${guild.createdAt}`)
                .setColor(65280)
                if (hiddenlog) hiddenlog.send({embed: richEmbed});
  if (guild.defaultChannel) guild.defaultChannel.send({
     embed: {
       "color": 13253,
         description: `**Thanks for inviting me to your server! do [help to get started :D**`
     }});
});


client.on('guildDelete', guild => {
  client.user.setPresence({ game: { name: `[help | ${client.guilds.size} server(s)`, type: 0 } });
  let richEmbed = new Discord.RichEmbed()
                .setTitle(`Left guild`)
                .setDescription(`**Server:**${guild.name}
**By:**${guild.owner}
**Member count:**${guild.memberCount}
**CreatedAt:**${guild.createdAt}`)
                .setColor(16711680)
                if (hiddenlog) hiddenlog.send({embed: richEmbed});
});


//              Detector de escritura                    //
//client.on('typingStart', (channel, user) => {
  //console.log(`${user.username} is typing in ${channel.name}`);
  //});

client.on("message", (message) => {
  try {
  if (message.author.bot) return;
  if (!message.guild) return message.reply({embed: { title: ":x:Error", "color": 16711680, description: `Can you send that in a guild?`}}).then(m => {m.delete(5000);})


  if (!guildSettings.get(message.guild.id)) guildSettings.set(message.guild.id, defaultSettings); //For prefix
  guildSettings.get(message.guild.id);                                                            //For prefix
  if (!guildSettings.get(message.guild.id)) guildSettings.set(message.guild.id, defaultSettings)  //For prefix
    var thisConf = guildSettings.get(message.guild.id)                                            //For prefix
  const prefix = thisConf.prefix;                                                                 //For prefix


  //cmd setprefix
var params = message.content.split(' ').slice(1)
if (message.content.startsWith(prefix + 'prefix')) {
message.delete()
if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD") &&  message.author.id !== ownerID) return message.channel.send({
embed: {
description: `**You can not do that** ${message.author}**!** :no_entry: \nYou need to have the permission __Manage Messages__ to use *${prefix}prefix*.`,
color: 0xff0000
}
})
if (!params[0]) return;

thisConf.prefix = params[0]

guildSettings.set(message.guild.id, thisConf)
message.guild.member(client.user).setNickname(`[${thisConf.prefix}] ${client.user.username}`)
message.channel.send("Prefixes are stored until the bot restarts, this will be fixed soon")
message.channel.send({
embed: {
title: `Prefix was changed!`,
description: `Prefix was changed to **${thisConf.prefix}**`,
color: 0x0080ff
}
});
}
  //cmd prefix end


//Functions// //Start//
function Rand(min, cnt) {
  return Math.floor((Math.random() * cnt) + min);
}
    
function GosealeTest(){
  message.delete(2000)
  message.channel.send("<:Loading:435586369302298624> <:Typing:435586380899549184>");
  // Create a new webhook
//const hook = new Discord.WebhookClient('429048457710403604', "6bGx0MVRjineYJXDc_Nx15VvdaoH3BWAghUbvHZYbWFafNqD91h2ukH22jE4uUnOghDt");

// Send a message using the webhook
  //let args = message.content.split(' ').slice(1)
//hook.send("<:Loading:435586369302298624> <:Typing:435586380899549184>");

}
//Functions// //End//
    
    
    
    



  if (message.author.bot) return;
  if (!message.guild) return;

  if (message.content.startsWith(prefix + "ping")) {
     message.delete(3000)
     message.channel.send("Pinging...").then(m => setTimeout(function() { m.edit("pong! **" + (Math.round(client.ping)) + "ms** 1/5 <:greencircle:362731767729356804><:greycircle:362731740101476354><:greycircle:362731740101476354>"), m.edit("pong! **" + (Math.round(client.ping)) + "ms** 2/5 <:greycircle:362731740101476354><:greencircle:362731767729356804><:greycircle:362731740101476354>" ), m.edit("pong! **" + (Math.round(client.ping)) + "ms** 3/5 <:greycircle:362731740101476354><:greycircle:362731740101476354><:greencircle:362731767729356804>"), m.edit("pong! **" + (Math.round(client.ping)) + "ms** 4/5 <:greencircle:362731767729356804><:greycircle:362731740101476354><:greycircle:362731740101476354>"), m.edit("pong! **" + (Math.round(client.ping)) + "ms**") }, 1000))
     if (botlog) botlog.send(`${message.author.username} has requested the ping in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
  } else

  if (message.content == (prefix + "help")) {
    message.delete(3000)
    if (botlog) botlog.send(`${message.author.username} has requested help in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
    message.channel.send(`\`\`\`html
<help>                   Shows this embed
<help:general>           Go to the genneral commands
<help:admin>             Go to the administration commands
<help:info>              Go to the info commands
<help:fun>               Fun commands
<help:functional>        Commands that are be usefull

<Bot_version:>           27/04/18 // The menus update
\`\`\``)
  } else

    
  if (message.content == (prefix + "help:general")) {
    message.delete(3000)
    if (botlog) botlog.send(`${message.author.username} has requested help in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
    message.channel.send(`\`\`\`html
<ping>           Tests the delay of the bot
<invite>         Shows the invitation link of the bot and also the invitation to the bot´s server.
<say>            Make the bot say something
<messagebox [Language] [Code]> Send code using a code box
<embed>          Shows an embed usage [embed [title] [description]
<test>           Testing command. Avalible for the owner of the bot
\`\`\``)
  } else    
    
    
  if (message.content == (prefix + "help:admin")) {
    message.delete(3000)
    if (botlog) botlog.send(`${message.author.username} has requested help in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
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
  } else    
    
    
    
    
    
  if (message.content == (prefix + "help:info")) {
    message.delete(3000)
    if (botlog) botlog.send(`${message.author.username} has requested help in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
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
  } else    
    
  if (message.content == (prefix + "help:functional")) {
    message.delete(3000)
    if (botlog) botlog.send(`${message.author.username} has requested help in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
    message.channel.send(`\`\`\`html
<suggest>         Suggest features to the bot
<timer>           Set a timer
<rng>             Generates a number
<math>            Do math
<mplay>           Plays a song from an youtube url
<msearch>         Search a song in Youtube
<mstop>           Stops the music
\`\`\``)
  } else       
    
   
  if (message.content == (prefix + "help:fun")) {
    message.delete(3000)
    if (botlog) botlog.send(`${message.author.username} has requested help in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
    message.channel.send(`\`\`\`html
[Looks as there arent any fun commands]
\`\`\``)
  } else
    
    
    
    
    
    
    
    
    
  if (message.content.startsWith(prefix + "invite")) {
    message.channel.send({embed: {
      title: "Invitation",
      "color": 500000,
      description: "You can invite me [Here](https://discordapp.com/oauth2/authorize?client_id=338367109136646154&permissions=8&scope=bot) and also check out [my server](https://discord.gg/MpcraHT)",
    }})
    console.log(`${message.author.username} has requested the invitation link`)
    if (botlog) botlog.send(`${message.author.username} has requested the invitation link in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
  } else

  if (message.content.startsWith(prefix + "say")) {
    if (message.author.bot) return;
    message.delete();
    let args = message.content.split(' ').slice(1)
    if (!args[0]) return message.reply(`I cant send empty messages.Usage:${prefix}say [Text]`).then(m => {m.delete(10000);})
    if (botlog) botlog.send(`${message.author.username} has said \`\`${args.join(' ')}\`\` in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
    message.channel.send(args.join(' '))
  } else

    if (message.content.startsWith(prefix + "embed")) {
    message.delete();
    let args = message.content.split(/\s+/g);
    if (!args[0]) return message.reply(`I cant send an empty embed.Usage:${prefix}embed [Title] [Description]`).then(m => {m.delete(10000);})
    if (botlog) botlog.send(`${message.author.username} has requested an embed \`\`${args.join(' ')}\`\` in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
    let t = args[1]
    let d = message.content.split(/\s+/g).slice(2).join(" ");
      message.channel.send({embed: {
      title: `${t}`,
      "color": 500000,
      description: `${d}`,
    }});
  } else


  //                                     EVAL                                       
//
   if (message.content.startsWith(prefix + "eval")) {
    message.delete()
    let args = message.content.split(/\s+/g);
    if (!args[0]) return message.reply(`Please provide something to eval.Usage:${prefix}eval [Args]`).then(m => {m.delete(10000);})
    if(message.author.id !== ownerID) return message.reply({embed: { title: ":x:Error", "color": 16711680, description: `Tryed to use ${prefix}eval.He/She failed,now He/She is thinking about this bot is so secured :V`}}).then(m => {m.delete(15000);})
   args.shift();

    const result = new Promise((resolve, reject) => resolve(eval(args.join(" "))));

    result.then(out => {
    if(typeof out !== "string") out = require("util").inspect(out, {
        depth: 0
    });

    //`**Evaluated:**:white_check_mark:\n\`\`\`${out}\`\`\``//
    //description: `\`\`\`js
    //${out}\`\`\``
      
      
    message.channel.send({embed: {
      title: "**Evaluated:**:white_check_mark:",
      "color": 65280,
      "fields": [
      {
      "name": "Input:",
      "value": `\`\`\`js
      ${args.join(" ")}\`\`\``
      },
      {
      "name": "Output:",
      "value": `\`\`\`js
      ${out}\`\`\``
      },
           ]
    }});
    }).catch(e => {
    e = e.toString();

    //`:x:**Error:**\n\`\`\`${e}\`\`\``//
    message.channel.send({embed: {
      title: ":x:Error",
      "color": 16711680,
      "fields": [
      {
      "name": "Input:",
      "value": `\`\`\`js
      ${args.join(" ")}\`\`\``
      },
      {
      "name": "Output",
      "value": `\`\`\`js
      ${e}\`\`\``
      },
          ]
    }});
})};


//                                 END OF EVAL                                       
//


    if (message.content.startsWith(prefix + "betaeval")) {
  if(message.author.id !== ownerID) return message.reply({embed: { title: ":x:Error", "color": 16711680, description: `Tryed to use ${prefix}eval.He/She failed,now He/She is thinking about this bot is so secured :V`}}).then(m => {m.delete(15000);});
    try {
      let args = message.content.split(' ').slice(1)
      var code = args.join(" ");
      var evaled = eval(code);
      
      if (typeof evaled !== "string") {
        evaled = require('util').inspect(evaled);
      
      }
        evaled.replace(client.token, "[TOKEN]");
      if (evaled.length >= 2000) {
        var tooLong = new Discord.RichEmbed()
        .setTitle(`Whoops! Too long!`)
        .addField(`${evaled.length} characters!`, "That's past the charcacter limit! You can find the output in the console.");
        message.channel.send({embed: tooLong});
        console.log(evaled);
        return;
      }
      const successfulEval = new Discord.RichEmbed()
      .setTitle("Evaluated successfully")
      .addField("Input:", `\`\`\`JavaScript\n${code}\`\`\``)
      .addField("Output:", `\`\`\`JavaScript\n${evaled}\`\`\``)
      .setColor(0x00ff00)
      .setFooter("Beta eval")
      .setTimestamp();
      message.channel.send({embed: successfulEval});
    } catch (err) {
      const failedEval = new Discord.RichEmbed()
      .setTitle("Error during eval!")
      .setDescription("An error occured! Please review the code and the error!")
      .addField("Input:", `\`\`\`JavaScript\n${code}\`\`\``)
      .addField("Error:", `\`\`\`JavaScript\n${err}\`\`\``)
      .setColor(0xff0000)
      .setFooter("Eval Error")
      .setTimestamp();
      message.channel.send({embed: failedEval})
      }
  }
    
    
    
    
    
    
    
  if (message.content.startsWith(prefix + "info")) {
    message.delete()
    let ms = client.uptime 
    let seconds = Math.floor(ms / 1000)
    ms = ms % 1000
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    seconds = seconds % 60
    minutes = minutes % 60
  if (botlog) botlog.send(`${message.author.username} has requested info in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
    message.channel.send({embed: {
        title: "Info",
        description: "A bot made by goseale",
        "color": 667110 ,
        "fields": [
          {"name": "Why this bot was made?",
           "value": "Because i wanted to own a bot :V and also i wanted to know javascript and the best was to do it is creating a discord bot.Im constantly uptading it with new features, to make it the best bot ever!!"
          },
          {
           "name": "Memory usage:",
           "value": `\`${(process.memoryUsage().heapUsed / 1024 / 1024)}\`**MB**`
          },
          {
            "name": "Uptime",
            "value": `**Ms:**\`${ms}\`, **Seconds:**\`${seconds}\`, **Minutes:**\`${minutes}\`, **Hours:**\`${hours}\``
          }
        ]
    }})
  }

  if (message.content.startsWith(prefix + "test")) {
    if(message.author.id !== ownerID) return message.reply({embed: { title: ":x:Error", "color": 16711680, description: `This command is avalible for the bot owner @Goseale.`}}).then(m => {m.delete(5000);})
    
    
    let song = command.substr(4);
    if (queue[message.guild.id] == undefined) {
      queue[message.guild.id] = [];
    }
    queue[message.guild.id].push([song, message]);
    let recursivePlay = function() {
      let song = queue[message.guild.id].shift();
      ytsearch(
        song[0],
        {
          maxResults: 1,
          key: process.env.YTAPI
        },
        function(err, results) {
          if (err) return console.log(err);
          try {
            song[1].member.voiceChannel.join().then(voiceConnection => {
              song[1].channel.send({
            embed: new Discord.RichEmbed()
              .setTitle("Now Playing")
              .setDescription(
                "Song [" +
                  results[0].title +
                  "](https://www.youtube.com/watch?v=" +
                  results[0].id +
                  ") is now playing, as requested by <@" +
                  song[1].author.id +
                  ">"
              )
              .setTimestamp()
              .setColor("#961934")
          });
          queue[song[1].guild.id].playing = true;
          song[1].member.voiceChannel.join();
          queue[
            song[1].guild.id
          ].dispatcher = song[1].guild.voiceConnection.playStream(
            ytdl("https://www.youtube.com/watch?v=" + results[0].id, {
              filter: "audioonly"
            }),
            {
              passes: 1
            }
          );
          queue[song[1].guild.id].dispatcher.on("end", function() {
            song[1].guild.voiceConnection.disconnect();
            queue[song[1].guild.id].playing = false;
            if (queue[song[1].guild.id].length != 0) {
              recursivePlay();
            }
          });
        });
          } catch (e) {
            song[1].channel.send({
              embed: new Discord.RichEmbed()
                .setTitle("Queue")
                .setDescription(
                  "<@" +
                    song[1].author.id +
                    "> is not connected to a voice channel. Therefore, we must move on to the next song in the queue!"
                )
                .setTimestamp()
                .setColor("#961934")
            });
            if (queue[song[1].guild.id].length != 0) {
              recursivePlay();
            }
            return;
          }
    });
    }
    if (!queue[message.guild.id].playing) {
      recursivePlay();
    } else {
      message.channel.send({
        embed: new Discord.RichEmbed()
          .setTitle("Queue")
          .setDescription("Song request `" + song + "` added to the queue.")
          .setFooter("Position: " + queue[message.guild.id].length)
          .setColor("#961934")
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

  } else
  if (message.content.startsWith(prefix +"spam")) {
    if (!message.member.permissions.has("MANAGE_MESSAGES") && message.author.id !== ownerID) return message.reply("You don`t have *MANAGE_MESSAGE* permissions!");
  message.delete()
  if (message.author.bot) return;
    let args = message.content.split(' ').slice(1)
    if (!args[0]) return message.reply(`I cant send empty messages.Usage:${prefix}spam [Text]`).then(m => {m.delete(10000);})
    message.channel.send(`Spam incoming from the user ${message.author.username}`)
    if (botlog) botlog.send(`${message.author.username} has spammed \`\`${args.join(' ')}\`\` messages in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
    DelayNode: {2000}
    message.channel.send(args.join(' '))
    message.channel.send(args.join(' '))
    message.channel.send(args.join(' '))
    message.channel.send(args.join(' '))
  } else
  
  if (message.content.startsWith(prefix + "cfg_playing")) {
    message.delete()
    if(message.author.id !== ownerID) return message.reply({embed: { title: ":x:Error", "color": 16711680, description: `This command is avalible for the bot owner @Goseale.`}}).then(m => {m.delete(5000);})
    let args = message.content.split(' ').slice(1)
    if (!args[0]) return message.reply(`Please say the new status update.Usage:${prefix}cfg_playing [Text]`).then(m => {m.delete(10000);});
    if (args[0] === "default") {
      client.user.setPresence({ game: { name: `[help | ${client.guilds.size} server(s)`, type: 0 } })
      message.channel.send(`:white_check_mark:Playing status updated to:\`\`\`The default setting\`\`\``).then(m => {
        m.delete(5000)});
      return
                               }
    client.user.setPresence({ game: { name: `${args.join(" ")}`, type: 0 } });
    message.channel.send(`:white_check_mark:Playing status updated to:\`\`\`${args.join(" ")}\`\`\``).then(m => {
  m.delete(5000);
     })
  } else
  if (message.content.startsWith(prefix + "cfg_broadcast")) {
    message.delete()
    if(message.author.id !== ownerID) return message.reply({embed: { title: ":x:Error", "color": 16711680, description: `This command is avalible for the bot owner @Goseale.`}}).then(m => {m.delete(5000);})
    let args = message.content.split(' ').slice(1)
    if (!args[0]) return message.reply(`Please say the new status update.Usage:${prefix}cfg_broadcast [Text]`).then(m => {m.delete(10000);});
    if (args[0] === "default") {
      client.user.setPresence({game: {name: `[help | ${client.guilds.size} server(s)`, url: "https://twitch.tv/Goseale"}, status: "online"})
      message.channel.send(`:white_check_mark:Now broadcasting:\`\`\`The default setting\`\`\``).then(m => {
        m.delete(5000)});
        return
                               }
    client.user.setPresence({game: {name: `${args.join(" ")}`, url: "https://twitch.tv/Goseale"}, status: "online"})
    message.channel.send(`:white_check_mark:Now broadcasting:\`\`\`${args.join(" ")}\`\`\``).then(m => {
  m.delete(5000);
     })
  } else
  if (message.content.startsWith(prefix + "cfg_status")) {
    message.delete()
    if(message.author.id !== ownerID) return message.reply({embed: { title: ":x:Error", "color": 16711680, description: `This command is avalible for the bot owner @Goseale.`}}).then(m => {m.delete(5000);})
    let args = message.content.split(' ').slice(1)
    if (!args[0]) return message.reply(`Please say the new status.Usage:${prefix}cfg_status online|idle|dnd|invisible`).then(m => {m.delete(10000);});
    if (args[0] === "online") {client.user.setStatus("online")}
    if (args[0] === "idle") {client.user.setStatus("idle")}
    if (args[0] === "dnd") {client.user.setStatus("dnd")}
    if (args[0] === "invisible") {client.user.setStatus("invisible")}
    message.channel.send(`:white_check_mark:Status updated to:\`\`\`${args.join(" ")}\`\`\``).then(m => {
  m.delete(5000);
     })
  } else

  if (message.content.startsWith(prefix + "purge")) {
    if (!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply("I don`t have *MANAGE_MESSAGE* permissions!");
    if (!message.guild.me.permissions.has("MANAGE_MESSAGES") || !message.member.permissions.has("MANAGE_MESSAGES") && message.author.id !== ownerID) return message.reply("You don`t have *MANAGE_MESSAGE* permissions!").then(m => {m.delete(3000)});
  message.delete()
  let args = message.content.split(' ').slice(1)
  let messages = parseInt(args[0])
  if (isNaN(messages)) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**Number of messages required**`}}).then(m => {m.delete(10000);})
  if (!args[0]) return message.reply(`Please say the number of messages to delete min:1, max:100.Example:${prefix}purge 5`).then(m => {m.delete(10000);})
  if (botlog) botlog.send(`${message.author.username} has purged \`\`${args.join(' ')}\`\` messages in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
  if (messages === 1) {message.channel.send(".")
                       message.channel.bulkDelete(2)
                       message.channel.send('Message purged.:white_check_mark:').then(m => {m.delete(3000)});
                       return}
  message.channel.bulkDelete(messages)
  message.channel.send('Messages purged.:white_check_mark:').then(m => {
  m.delete(3000);
})
   } else
  if (message.content.startsWith(prefix + "servers" )) {
    message.delete()
    let args = message.content.split(' ').slice(1)
    if (!args[0]) {
    var embed = new Discord.RichEmbed();
    embed.setTitle("<:GosealeBot:362330196784840705>Server List");
    if(client.guilds.size > 5) {
      var servers = client.guilds.map(g => g).slice();
      servers.sort(function(a,b) {
        return a.members.size - b.members.size;
      });
      var best = [servers[servers.length - 1],servers[servers.length - 2],servers[servers.length - 3],servers[servers.length - 4],servers[servers.length - 5]];
      embed.setDescription("currently in ``"+client.guilds.size+"`` servers\n\ntop 5 servers:\n"+best.map(g => "**"+g.name+"** ("+g.members.size+" users)").join("\n"));
    } else {
      embed.setDescription("currently in ``"+client.guilds.size+"`` servers\n"+client.guilds.map(g => "**"+g.name+"** ("+g.members.size+" users)").join("\n"));
    }

    embed.setColor("#FFFF00");
    message.channel.send({embed:embed});
    if(message.author.id == ownerID) {
      const guilds = client.guilds;
      const guildNames = guilds.map(g => g.name)
      const longest = guildNames.reduce((long, str) => Math.max(long, str.length), 0);
      console.log("==================================================")
      console.log(guilds.map(g => `< ${` `.repeat(longest - g.name.length)}${g.name}${` `.repeat(longest / g.name.length)} --- ${g.members.size}Users --- By ${g.owner} >`).join(`\n`));
      console.log(`${client.guilds.size} Servers`)
      console.log("==================================================")
      var slist = (guilds.map(g => `< ${` `.repeat(longest - g.name.length)}${g.name}${` `.repeat(longest / g.name.length)} --- ${g.members.size} >`).join(`\n`))
      if (hiddenlog) hiddenlog.send(`\`\`\`
${slist}\`\`\``)
    }
    return
  }
  
  let nservers = parseInt(args[0])
  var embed = new Discord.RichEmbed();
  embed.setTitle("<:GosealeBot:362330196784840705>Server List");
  if(client.guilds.size > nservers) {
    var servers = client.guilds.map(g => g).slice();
    servers.sort(function(a,b) {
      return a.members.size - b.members.size;
    });
    function getBest(nservers) {
      var servers = client.guilds.map(g => g).slice();
      
      // sorts the array by amount of members
      servers.sort(function(a,b) {
        return a.members.size - b.members.size;
      });
    
      var best = [];
      for(var a = 0; a < nservers; a++) {
        best.push(servers[servers.length-1-a]);
      }
      return best;
    }
    embed.setDescription("currently in ``"+client.guilds.size+"`` servers\n\ntop `"+nservers+"` servers:\n"+best.map(g => "**"+g.name+"** ("+g.members.size+" users) by "+g.owner.user.tag+"").join("\n"));
  } else {
    embed.setDescription("currently in ``"+client.guilds.size+"`` servers\n"+client.guilds.map(g => "**"+g.name+"** ("+g.members.size+" users) by "+g.owner.user.tag+"").join("\n"));
  }

  embed.setColor("#FFFF00");
  message.channel.send({embed:embed});



    //var embed = new Discord.RichEmbed();
    //embed.setTitle("All the servers im on <:GosealeBot:362330196784840705>");
    //embed.setDescription(client.guilds.map(g => `**${g.name}** by ${g.owner.user.toString()} *(${g.members.size} members)*`).join("\n"));
    //message.author.send({embed:embed});
    //message.channel.send(`${message.author} check your direct messages`).then(m => {m.delete(5000)});
        } else

  if (message.content.startsWith(prefix + "serverInfo")) {
    message.delete()
    if (botlog) botlog.send(`${message.author.username} has requested the server info in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
    message.channel.send({
        embed: {
          thumbnail: {
  url: `${message.guild.iconURL}`},
            "color": 11730688,
            description: `**__Info about \`\`${message.guild.name}\`\`:notepad_spiral:__\n\nMembers: \`\`${message.guild.memberCount}\`\`\n\nDefaultChannel: ${message.guild.defaultChannel}\n\nServerOwner: ${message.guild.owner}\n\nServerOwnerID: \`\`${message.guild.ownerID}\`\`\n\nServerCreated: \`\`${message.guild.createdAt}\`\`\n\nServerID: \`\`${message.guild.id}\`\`\n\nChannels: \`\`${message.guild.channels.size}\`\`\n\nServerName: \`\`${message.guild.name}\`\`**`
        }})} else



//Espiar conversaciones
//  if (message.content.startsWith("")) {
 //   if (message.author.bot) return;
  //  let args = message.content.split(' ').slice(0)
  //  if (botlog) botlog.send(`${message.author.username} Conversation: \`\`${args.join(' ')}\`\` in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
  //} else;

//Cambiar nicknames con message.guild.member("ID").setNickname("Nombre")
//Dar roles a un bot message.guild.me.addRole(message.guild.roles.find("name", "Friend"))
//Dar role a una persona message.guild.member("229016449593769984").addRole("341351878941999104")

 if (message.content.startsWith(prefix + "kick")) {
    message.delete()
    const user = message.mentions.members.first();
    let args = message.content.split(' ').slice(2)
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("I don`t have *KICK_MEMBERS* permissions!");
    if (!message.guild.me.permissions.has("KICK_MEMBERS") || !message.member.permissions.has("KICK_MEMBERS")) return message.reply("You don`t have *KICK_MEMBERS* permissions!").then(m => {m.delete(3000);});

    if (!user) return message.reply("Please mention a user to kick.").then(m => {m.delete(3000);})
    if (!args[0]) return message.reply(`Please say the reason of the kick.Example:${prefix}kick @user [Reason]`).then(m => {m.delete(10000);})
    user.kick(args.join(' '));
    message.reply(`Successfully kicked ${user.user.tag}.`);
    let logchannel = message.guild.channels.find("name", "log")
    let richEmbed = new Discord.RichEmbed()
    .setTitle(`Kick member`)
.setDescription(`**Staff:**${message.author.tag}
**Channel:**${message.channel.name}
**CreatedAt:**${message.createdAt}

**User kicked:**${user}
**Reson:**${args.join(' ')}`)
.setColor(16776960)
     if (logchannel) logchannel.send({embed: richEmbed})
     if (botlog) botlog.send(`\`\`${message.author.username}\`\` has kicked ${user.user.tag} with the reason ${args.join(' ')} in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
  } else

  if (message.content.startsWith(prefix + "clear console")) {
   if (message.author.bot) return;
   message.delete()
    if(message.author.id !== ownerID) return;
    message.channel.send('Console cleared.:white_check_mark:').then(m => {
  m.delete(3000);
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)
     console.log(` `)

    })}

  if (message.content.startsWith(prefix + "message to channel")) {
   if (message.author.bot) return;
   message.delete()
    if(message.author.id !== ownerID) return;
     let args = message.content.split(/\s+/g);
     let ch = args[3]
     let text = message.content.split(/\s+/g).slice(4).join(" ");
     let sendmessage = client.channels.get(`${ch}`);
      if (sendmessage) sendmessage.send(`${text}`);
       message.channel.send('Message sent.:white_check_mark:').then(m => {
       m.delete(3000);
      })}

       if (message.content.startsWith(prefix + "troll message")) {
        if (message.author.bot) return;
        message.delete()
         if(message.author.id !== ownerID) return;
          let args = message.content.split(/\s+/g);
          let ch = args[2]
          let text = message.content.split(/\s+/g).slice(3).join(" ");
          let sendmessage = client.channels.get(`${ch}`);
           if (sendmessage) sendmessage.send(`${text}`).then(m => {
            m.delete(10);
            message.channel.send('Message sent.:white_check_mark:').then(m => {
            m.delete(3000);
  })})}
  function timer(message) {
      if (message.content.startsWith(prefix + "timer")) {
       if (message.author.bot) return;
       message.delete()
          let args = message.content.split(" ").slice(1)
          if (!args[0]) return message.channel.send(`Usage:${prefix}timer [amount in seconds]`).then(m => {m.delete(5000);})
            let timer = parseInt(args[0])
            //let timer = 10
            if (isNaN(args[0])) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**Number required**`}}).then(m => {m.delete(10000);})
              if (timer <= 0) return message.channel.send(`The timer must be above 0 seconds`).then(m => {m.delete(5000);})
                if (timer > 600) return message.channel.send(`The limit of the timer is 600 seconds (10 minutes)`).then(m => {m.delete(5000);})
                let secondTimeont = timer * 1000
                let count = 0
                let change = Math.floor(timer * 0.25)
                let mess;
                message.channel.send({embed: {title: "Timer",description: `**Timer set to ${timer} seconds**`,"color": 667110}}).then(m => {mess = m});
                var time = setInterval(function() {
                  Timer();
                },
                1000);
                function Timer() {
                  count += 1;
                  timer -= 1;
                  if (timer <= 0) {
                    mess.edit({embed: {title: "Timer",description: `**Timer ended**`,"color": 667110}});
                  }
                  if (count >= 3) {
                    count = 0;
                    let seconds = timer
                    let minutes = Math.floor(seconds / 60)
                    seconds = seconds % 60
                    if (seconds < 10) seconds = `0${seconds}`
                    mess.edit({embed: {title: "Timer",description: `**${minutes}:${seconds}**`,"color": 667110}});
                  }
                  if (timer <= 0) {
                    mess.channel.send(`${message.author.toString()}.Time is up`).then(m => {m.delete(60000)});
                    count = 0
                    stopTimer()
                    }
                function stopTimer(){
                  clearInterval(time)
                    }
              }
          }
      }
    timer(message)

    if (message.content.startsWith(prefix + "mute")) {                                                     //Fix
      if (message.author.bot) return;
      message.delete()
      let args = message.content.split(' ').slice(2)
        const user = message.mentions.members.first();
        if (!message.guild.me.permissions.has("MANAGE_ROLES")) return message.reply("I don`t have *MANAGE_ROLES* permissions!");
        if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.reply("I don`t have *MANAGE_CHANNELS* permissions!");
        if (!message.guild.me.permissions.has("MANAGE_ROLES") || !message.member.permissions.has("MANAGE_ROLES") && message.author.id !== ownerID) return message.reply("You don`t have *MANAGE_ROLES* permissions!");

        if (!user) return message.channel.send("**Please mention a user to mute.**");
        if (!args[0]) return message.reply(`Please say the reason of the mute.Example:${prefix}mute @user [Reason]`).then(m => {m.delete(10000);})

        message.channel.send(`**Successfully muted ${user.user.tag} with reason:${args.join(' ')}.**`);
        let logchannel = message.guild.channels.find("name", "log")
        let richEmbed = new Discord.RichEmbed()
        .setTitle(`Mute member`)
    .setDescription(`**Staff:**${message.author.tag}
**Channel:**${message.channel.name}
**CreatedAt:**${message.createdAt}

**User muted:**${user}
**Reson:**${args.join(' ')}`)
    .setColor(16776960)
         if (logchannel) logchannel.send({embed: richEmbed})
         else message.guild.createChannel('log').then(c => c.send({embed: richEmbed}))

message.guild.createRole({
name: RoleName,
color: 'BLUE',
permissions: ["READ_MESSAGES"],
mentionable: true,
}).then(role => 
{ role.setPosition(1, true);
user.addRole(role.id)
}
)}

if (message.content.startsWith(prefix + "unmute")) {
  const user = message.mentions.members.first();
  let role = message.guild.roles.find("name", RoleName)
  if (!message.guild.me.permissions.has("MANAGE_ROLES")) return message.reply("I don`t have *MANAGE_ROLES* permissions!");
  if (!message.guild.me.permissions.has("MANAGE_ROLES") || !message.member.permissions.has("MANAGE_ROLES") && message.author.id !== ownerID) return message.reply("You don`t have *MANAGE_ROLES* permissions!");

  if (!user) return message.channel.send("**Please mention a user to unmute.**");

            message.channel.send(`**Successfully unmuted ${user.user.tag}.**`);
            let logchannel = message.guild.channels.find("name", "log")
            let richEmbed = new Discord.RichEmbed()
            .setTitle(`Unmute member`)
        .setDescription(`**Staff:**${message.author.tag}
**Channel:**${message.channel.name}
**CreatedAt:**${message.createdAt}

**User unmuted:**${user}`)
        .setColor(65280)
             if (logchannel) logchannel.send({embed: richEmbed})
             else message.guild.createChannel('log').then(c => c.send({embed: richEmbed}))

            role.delete({name: RoleName,
})
}

   if (message.content.startsWith(prefix + "warn")) {
    message.delete()
    let args = message.content.split(' ').slice(2)
    const user = message.mentions.members.first();
    if (!message.guild.me.permissions.has("MANAGE_ROLES")) return message.reply("I don`t have *MANAGE_ROLES* permissions!");
    if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.reply("I don`t have *MANAGE_CHANNELS* permissions!");
    if (!message.guild.me.permissions.has("MANAGE_ROLES") || !message.member.permissions.has("MANAGE_ROLES") && message.author.id !== ownerID) return message.reply("You don`t have *MANAGE_ROLES* permissions!");
    
    if (!user) return message.channel.send("**Please mention a user to warn.**");
    if (!args[0]) return message.reply(`Please say the reason of the warn.Example:${prefix}warn @user [Reason]`).then(m => {m.delete(10000);})
    message.channel.send(`**Successfully warned ${user.user.tag} with reason:${args.join(' ')}.**`);
    let logchannel = message.guild.channels.find("name", "log")
    let richEmbed = new Discord.RichEmbed()
    .setTitle(`Warn member`)
.setDescription(`**Staff:**${message.author.tag}
**Channel:**${message.channel.name}
**CreatedAt:**${message.createdAt}

**User warned:**${user}
**Reson:**${args.join(' ')}`)
.setColor(16776960)
     if (logchannel) logchannel.send({embed: richEmbed})
     else message.guild.createChannel('log').then(c => c.send({embed: richEmbed}))
   }
    
     {
      if (message.content.startsWith(prefix + "flipcoin")) {

        {message.channel.send(["you got heads", "you got tails"][Rand(0,2)])};
       }
         if (message.content.startsWith(prefix + "emoji")) {
          message.channel.send("Emoji list of GosealeBot:").then(m => {m.react(":CRed:338327025389666304"), m.react(":CGreen:338327749854887936"), m.react(":CBlue:338327886903640064"), m.react(":CBlack:338328018260852736"), m.react(":CWhite:338328181134196736"), m.react(":CYellow:350738691418750986"), m.react(":GosealeBot:362330196784840705")})
       }
        if (message.content.startsWith(prefix + "suggest")) {
          message.delete()
          let args = message.content.split(' ').slice(1)
          let richEmbed = new Discord.RichEmbed()
          .setTitle(`Suggestion from: ${message.author.username}`)
          .setDescription(`${args.join(' ')}`)
          .setColor(65280)
          .setThumbnail(`${message.author.avatarURL}`)
          if (channel_suggest) channel_suggest.send({embed: richEmbed});
            message.channel.send(`:white_check_mark:This suggestion has been sent to the bot´s discord.\`\`\`${args.join(" ")}\`\`\``).then(m => {
              m.delete(10000);
       })}}

       {
        //[eval message.channel.messages.get(`341661818089111562`).edit()
        if (message.content.startsWith(prefix + "editmessage")) {
          message.delete()
          if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply("I don`t have *MANAGE_MESSAGE* permissions!");
          if (!message.guild.me.permissions.has("MANAGE_MESSAGES") || !message.member.permissions.has("MANAGE_MESSAGES") && message.author.id !== ownerID) return message.reply("You don`t have *MANAGE_MESSAGE* permissions!").then(m => {m.delete(3000)});
          let args = message.content.split(' ').slice(1)
          let id = args[0]
          let mess = message.content.split(' ').slice(2).join(" ").replace(/\\n/gi, '\n');
          let fetched = message.channel.fetchMessages({message: id});
          //if (!message.channel.messages.get(id)) return message.channel.send("Message not found!").then(m => {m.delete(3000)})
          message.channel.messages.fetchMessages({message: fetched}).edit(`${mess}`)
       }}
       
       
       
       
       
       
       
       
       
       
       {
        if (message.content.startsWith(prefix + "lol_text_1")) {
          message.delete()
          message.channel.send('f็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎f็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎f็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎f็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎f็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎f็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎f็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎f็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎f็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็')
       }}
    
    {
     if (message.content.startsWith(prefix + "MCserverCheck")) {
       message.delete(200)
       let args = message.content.split(' ').slice(1)
       let ip = args.join(' ')
       if (!ip) return message.channel.send("Please provide an ip of a minecraft server")
       const api = `https://mcapi.us/server/status?ip=${ip}`;
       
       snekfetch.get(api).then(r => {
         if (r.body.status != "success") {return}
         //console.log(r.body)
         let server = r.body
         
         let ms = server.last_updated 
         let seconds = Math.floor(ms / 1000)
         ms = ms % 1000
         let minutes = Math.floor(seconds / 60)
         let hours = Math.floor(minutes / 60)
         let days = Math.floor(hours) / 60
         seconds = seconds % 60
         minutes = minutes % 60
         hours = hours % 24
         
         let richEmbed = new Discord.RichEmbed()
            .setTitle(`Minecraft server status`)
        .setDescription(`**IP:**${ip}
**Online?:**${server.online}
**Motd:**${server.motd}
**Players:**${server.players.now}/${server.players.max}
**Version**:${server.server.name}`)
        .setColor(10223360)
         
         message.channel.send({embed: richEmbed})
       });
      }
    }
    
    
    
    
    

       {
         if (message.content.startsWith(prefix + "uptime")) {
        message.delete()
         let ms = client.uptime 
         let seconds = Math.floor(ms / 1000)
         ms = ms % 1000
         let minutes = Math.floor(seconds / 60)
         let hours = Math.floor(minutes / 60)
         seconds = seconds % 60
         minutes = minutes % 60
         message.channel.send({embed: {
          title: "Uptime",
          "color": 667110,
          "fields": [
          {
          "name": "Ms",
          "value": `\`\`\`${ms}\`\`\``
          },
          {
          "name": "Seconds",
          "value": `\`\`\`${seconds}\`\`\``
          },
          {
          "name": "Minutes",
          "value": `\`\`\`${minutes}\`\`\``
          },
          {
            "name": "Hours",
            "value": `\`\`\`${hours}\`\`\``
          },
        ]
        }})
       }}
       
       {
       if (message.content.startsWith(prefix + "random")) {
        var random = Math.floor(Math.random() * 3) + 1; 
        if (random === 1) { message.channel.send("OWEN 🤔") } 
        if (random === 2) { message.channel.send("MISSY xD") } 
        if (random === 3) { message.channel.send("GOSEALE :V") }   
          }

          {
            if (message.content.startsWith(prefix + "rng")) {
             message.delete()
             let args = message.content.split(' ').slice(1)
             let numb = parseInt(args[0])
             if (!args[0]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**${prefix}rng [Max number]**.Rng generates a number from 0 to the max number`}}).then(m => {m.delete(15000);})
             if (isNaN(numb)) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**Number required**`}}).then(m => {m.delete(10000);})
             var random = Math.floor(Math.random() * numb) + 1; 
             message.channel.send({embed: { title: "Generating...", "color": 65280, description: `rng is generating a number...`}}).then(m => setTimeout(function() { m.edit({embed: { title: "Generated :white_check_mark:", "color": 65280, description: `RNG generated:**${random}**`}}) }, 3000))
               }}
        
          {
          if (message.content.startsWith(prefix + "quote")) {
            message.delete()
            let args = message.content.split(' ').slice(1)
            if (!message.channel.messages.get(`${args[0]}`)) return message.channel.send("Message not found!").then(m => {m.delete(3000)})
            let mess = message.channel.messages.get(args[0])
            let messAuthor = mess.author
            let messEmb = mess.embeds[0]
            var person = messAuthor
            let user = person.user
            if (messEmb) {var hasembed = "[Has embed]"};
            if (!messEmb) {var hasembed = " "};
            let richEmbed = new Discord.RichEmbed()
            .setTitle(`${message.author.tag} quoted a message from:${person.tag}`)
            .setDescription(`${mess.content}${hasembed}`)
            .setColor(65280)
            .setThumbnail(`${person.avatarURL}`)
            message.channel.send({embed: richEmbed});
            if (messEmb) {
                let messageEmbed = new Discord.RichEmbed()
                if (messEmb.title) messageEmbed = messageEmbed.setTitle(messEmb.title)
                if (messEmb.description) messageEmbed = messageEmbed.setDescription(messEmb.description)
                if (messEmb.thumbnail) messageEmbed = messageEmbed.setThumbnail(messEmb.description)
                if (messEmb.footer) messageEmbed = messageEmbed.setFooter(messEmb.footer.text, messEmb.footer.iconURL)
                if (messEmb.image) messageEmbed = messageEmbed.setImage(messEmb.image.url)
                if (messEmb.hexColor) messageEmbed = messageEmbed.setColor(messEmb.hexColor)
                message.channel.send({embed: messageEmbed})
            }
          }}}
          

          {
            if (message.content.startsWith(prefix + "math")) {
              message.delete()
              let args = message.content.split(' ').slice(1)
              if (!args[0]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**${prefix}math [num1] [+,-,/,*] [num2]**`}}).then(m => {m.delete(15000);})
              if (!args[1]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**Error choose one operator.For more help do ${prefix}math**`}}).then(m => {m.delete(15000);})
              if (!args[2]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**Error type the second number.For more help do ${prefix}math**`}}).then(m => {m.delete(15000);})
              let num1 = parseInt(args[0])
              let sign = args[1]
              let num2 = parseInt(args[2])
              if (isNaN(args[0])) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**Number required in num1**`}}).then(m => {m.delete(15000);})
              if (isNaN(args[2])) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**Number required in num2**`}}).then(m => {m.delete(15000);})
              if (sign === "+") {var ans = num1 + num2}
              if (sign === "-") {var ans = num1 - num2}
              if (sign === "*") {var ans = num1 * num2}
              if (sign === "/") {var ans = num1 / num2}
              message.channel.send({embed: {
                title: `Math result [${num1}${sign}${num2}]`,
                "color": 667110,
                "description": `\`\`\`${ans}\`\`\``,
              }})
          }}

          {
            if (message.content.startsWith(prefix + "algebra.quad")) {
              message.delete()
              let args = message.content.split('|').slice(1)
              var quad = new Equation("x^2 + 17/4x - 15/4", 0);

              var answer = quad.solveFor("x");

              message.channel.send({embed: {
                title: `Math result [${quad.toString()}$]`,
                "color": 667110,
                "description": `\`\`\`${"x = " + answer.toString()}\`\`\``,
              }})
          }}

          {
            if (message.content.startsWith(prefix + "credits")) {
              message.delete()
              message.channel.send({embed: {
                title: "Credits",
                "color": 65411,
                description: `\`\`\`
Alexkokholm:
The one who teach me Js and told me to create a bot
                
MissySaysMeow:
Really nice server owner, and good coder :D
                
RedstoneDaedalus:
A genius in coding knows everything,helped when i had doubts
                
Owendowen:
Helped in rng code
                
Wipeautcrafter:
He also knows coding and helped me a with many things such as
how to not pass the character limit and list only a few servers

LittleWhole:
Helped general in code, also a nice friend

iAmThe32Bit:
Helped me hosting my bot at openshift
\`\`\``
              }})
          }}

          {
            if (message.content.startsWith(prefix + "anounce")) {
              message.delete()
              return message.channel.send("Anouncement already made")
              if(message.author.id !== ownerID) return message.reply({embed: { title: ":x:Error", "color": 16711680, description: `This command is avalible for the bot owner @Goseale.`}}).then(m => {m.delete(5000);})
              message.channel.send("<@&330778484479885312> Anouncement!")
              message.channel.send({embed: {
                title: "New command added! [prefix",
                "color": 667110,
                description: `\`\`\`
Usage: [prefix [prefix]
Example: [prefix (!"

And really thank MissySaysMeows
for giving me a hand :D


One command done from my to-do list
[todo
\`\`\``
              }})
          }}

          {
            if (message.content.startsWith(prefix + "msearch")) {
              message.delete();
              const streamOptions = { seek : 0, volume : 0.20}
              let args = message.content.split(' ').slice(1)
              if (!args[0]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**${prefix}msearch Search**`}}).then(m => {m.delete(15000);})
              if (!message.guild) return;
              if (message.member.voiceChannel) {
                message.member.voiceChannel.join().then(connection => {
          message.reply('I have successfully connected to the channel!').then(m => {m.delete(5000)});
                  
                  
                  var search = require('youtube-search'); 
                  var opts = { maxResults: 1, key: 'AIzaSyAwgJtJ1CUZCdrWo3eHblf4dBrv5a7jmBo' }; search(args.join(' '), opts, function(err, results) {
                    if(err) return console.log(err); 
                  
                  
          let VideoURL = "https://www.youtube.com/watch?v=" + results[0].id        
          var VideoID = results[0].id
          fetchVideoInfo(VideoID, function (err, videoInfo) { if (err) throw new Error(err); 
                   var Vd = videoInfo; 
                  
    let richEmbed = new Discord.RichEmbed()
.setTitle(`Playing... ؜ ؜ - ؜ ؜ ${message.author.username}`)
.setDescription(`\`\`\`${Vd.title}\`\`\`
**By:**${Vd.owner}
**Date published:**${Vd.datePublished}
**:eye: **${Vd.views}
**:thumbsup:**${Vd.likeCount} | **:thumbsdown:**${Vd.dislikeCount}
`)
                  .setColor(65280)
                  //.setThumbnail(`${user.avatarURL}`)
                  message.channel.send({embed: richEmbed});});
                  
          if (botlog) botlog.send(`${message.author.username} has played music in the url \`\`${args.join(' ')}\`\` in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
                  const stream = ytdl(VideoURL, {filter : 'audioonly'});
                  const dispatcher = connection.playStream(stream, streamOptions);
        });
                  }); //from the thing
              } else {message.reply('You need to join a voice channel first!').then(m => {m.delete(5000)});
          }
              }




          {
              if (message.content.startsWith(prefix + "mplay")) {
              message.delete()
              const streamOptions = { seek : 0, volume : 0.20}
              let args = message.content.split(' ').slice(1)
              if (!args[0]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `**${prefix}mplay [Youtube url]**`}}).then(m => {m.delete(15000);})
              if (!message.guild) return;
              if (message.member.voiceChannel) {
                message.member.voiceChannel.join().then(connection => {
          message.reply('I have successfully connected to the channel!').then(m => {m.delete(5000)});
          var VideoID = getYouTubeID(args[0]);
          fetchVideoInfo(VideoID, function (err, videoInfo) { if (err) throw new Error(err); 
                   var Vd = videoInfo; 
                  
    let richEmbed = new Discord.RichEmbed()
.setTitle(`Playing... ؜ ؜ - ؜ ؜ ${message.author.username}`)
.setDescription(`\`\`\`${Vd.title}\`\`\`
**By:**${Vd.owner}
**Date published:**${Vd.datePublished}
**:eye: **${Vd.views}
**:thumbsup:**${Vd.likeCount} | **:thumbsdown:**${Vd.dislikeCount}
`)
                  .setColor(65280)
                  //.setThumbnail(`${user.avatarURL}`)
                  message.channel.send({embed: richEmbed});});
                  
          if (botlog) botlog.send(`${message.author.username} has played music in the url \`\`${args.join(' ')}\`\` in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
                  const stream = ytdl(args[0], {filter : 'audioonly'});
                  const dispatcher = connection.playStream(stream, streamOptions);
        });
              } else {message.reply('You need to join a voice channel first!').then(m => {m.delete(5000)});
          }}}

          {
            if (message.content.startsWith(prefix + "mstop")) {
              message.delete();
              if (message.member.voiceChannel) {
              message.member.voiceChannel.leave()
              if (botlog) botlog.send(`${message.author.username} has stopped the music in the channel \`\`${message.channel.name}\`\` in the server \`\`${message.guild.name}\`\``)
              message.reply('I have successfully disconected from the channel!').then(m => {m.delete(5000)});
              } else {message.reply('Join the channel that you want me to disconect').then(m => {m.delete(5000)});
            }}
            }

            {
              if (message.content.startsWith(prefix + "userinfo")) {
                message.delete();
                const person = message.mentions.members.first();
                if (!person) {
                  let user = message.author
                  let guild = message.guild.member(user)
                  let richEmbed = new Discord.RichEmbed()
                  .setTitle(`User info:`)
                  .setDescription(`Username:${user.username}
**Id:**${user.id}
**Discriminator:**${user.discriminator}
**Registered:**${user.createdAt}
**Nickname:**${guild.displayName}
**Highes role:**${guild.highestRole}
**Joined at:**${guild.joinedAt}
`)
                  .setColor(65280)
                  .setThumbnail(`${user.avatarURL}`)
                  message.channel.send({embed: richEmbed});
                  return
                }
                let user = person.user
                let guild = message.guild.member(user)
                if (user.bot = "false") {var isbot = ":x:"}
                if (user.bot = "true") {var isbot = ":white_check_mark:"}
                if (guild.kickable = "false") {var userkickable = ":x:"}
                if (guild.kickable = "true") {var userkickable = ":white_check_mark:"}
                let richEmbed = new Discord.RichEmbed()
                .setTitle(`**Info of:**${user.username}`)
                .setDescription(`**Username:**${user.username}
**Id:**${user.id}
**Discriminator:**${user.discriminator}
**Registered:**${user.createdAt}
**Nickname:**${guild.displayName}
**Highes role:**${guild.highestRole}
**Joined at:**${guild.joinedAt}
`)
                .setColor(65280)
                .setThumbnail(`${user.avatarURL}`)
                message.channel.send({embed: richEmbed});
              }
              }

              if (message.content.startsWith(prefix + "userperms")) {
                message.delete();
                const person = message.mentions.members.first();
                if (!person) {
                  let user = message.author
                  let guild = message.guild.member(user)
                  let richEmbed = new Discord.RichEmbed()
                  .setTitle(`User Perms:`)
                  .setDescription(`\`\`Perms of ${user.username}
 ${guild.permissions}
\`\`
`)
                  .setColor(65280)
                  .setThumbnail(`${user.avatarURL}`)
                  message.channel.send({embed: richEmbed});
                  return
                }
                let user = person.user
                let guild = message.guild.member(user)
                let richEmbed = new Discord.RichEmbed()
                .setTitle(`User Perms:`)
                .setDescription(`\`\`Perms of ${user.username}
${guild.permissions.join('\n')}
\`\`
`)
                .setColor(65280)
                .setThumbnail(`${user.avatarURL}`)
                message.channel.send({embed: richEmbed});
              }
              
              
              {
                if (message.content.startsWith(prefix + "imguserinfo")) {
                  message.delete();
                  const person = message.mentions.members.first();
                  if (!person) {
                    let user = message.author
                    let guild = message.guild.member(user)

                    let Username = `Username:${user.username}`
                    let id = `Id:${user.id}`
                    let disc = `Discriminator:${user.discriminator}`
                    let reg = `Registered:${user.createdAt}`
                    let nic = `Nickname:${guild.displayName}`
                    let join = `Joined at:${guild.joinedAt}`
                    let avurl = message.author.avatarURL.slice(0, message.author.avatarURL.length-10)
                    Jimp.read(avurl, function (err, avat) {
                      avat.resize(64, 64)
                    Jimp.read("C:/Users/USER/Desktop/Discord Bot/data/Images/UserProfile.png", function (err, testing) {
                      if (err) {message.channel.send(`Error:\`\`\`${err}\`\`\``)
                      return};
                      testing.resize(700, 200)
                      .quality(100)
                      .composite(avat, 10, 120)
                      Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function (font) {
                      testing.print(font, 10, 10, Username)
                      testing.print(font, 10, 30, id)
                      testing.print(font, 10, 50, disc)
                      testing.print(font, 10, 70, reg)
                      testing.print(font, 10, 90, join)
                             .write(`C:/Users/USER/Desktop/Discord Bot/data/Images/profile-${message.author.username}.png`)});
                      })});
                      message.channel.send("**Waiting for image creation...** [2 sec]").then(m => setTimeout(function() {
                      let richEmbed = new Discord.RichEmbed()
                      .setTitle(`Result`)
                      .setDescription("Image succsesfully created.")
                      .attachFile(`C:/Users/USER/Desktop/Discord Bot/data/Images/profile-${message.author.username}.png`)
                      m.delete()
                      message.channel.send({embed: richEmbed})}, 2000))
                    return
                  }
                  return message.channel.send(`I this funtion is not coded yet. Please use ${prefix}userinfo`).then(m => {m.delete(5000);})
                  let user = person.user
                  let guild = message.guild.member(user)
                  if (user.bot = "false") {var isbot = ":x:"}
                  if (user.bot = "true") {var isbot = ":white_check_mark:"}
                  if (guild.kickable = "false") {var userkickable = ":x:"}
                  if (guild.kickable = "true") {var userkickable = ":white_check_mark:"}
                  let richEmbed = new Discord.RichEmbed()
                  .setTitle(`**Info of:**${user.username}`)
                  .setDescription(`**Username:**${user.username}
  **Id:**${user.id}
  **Discriminator:**${user.discriminator}
  **Registered:**${user.createdAt}
  **Nickname:**${guild.displayName}
  **Highes role:**${guild.highestRole}
  **Joined at:**${guild.joinedAt}
  `)
                  .setColor(65280)
                  .setThumbnail(`${user.avatarURL}`)
                  message.channel.send({embed: richEmbed});
                }
                }





              {
                if (message.content.startsWith(prefix + "messagepin")) {
                  message.delete();
                  if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply("I don`t have *MANAGE_MESSAGE* permissions!");
                  if (!message.guild.me.permissions.has("MANAGE_MESSAGES") || !message.member.permissions.has("MANAGE_MESSAGES") && message.author.id !== ownerID) return message.reply("You don`t have *MANAGE_MESSAGE* permissions!").then(m => {m.delete(5000)});
                  let args = message.content.split(' ').slice(1)
                  let richEmbed = new Discord.RichEmbed()
                  .setTitle(`${message.author.username}`)
                  .setDescription(`${args.join(' ')}`)
                  .setThumbnail(`https://images-ext-2.discordapp.net/external/Ac7Z_CY3vNjdeKV5u550spAIEgFFSWsvY8IiVCkLSxA/https/i.imgur.com/VCvtCnk.png?width=80&height=80`)
                  message.channel.send({embed: richEmbed}).then(m => {m.pin()});
                }}

                {
                  if (message.content.startsWith(prefix + "messagebox")) {
                    message.delete();
                    let args = message.content.split(' ').slice(1)
                    if (!args[0]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `Code is missing, Command:**${prefix}messagebox [code language] [Text]**`}}).then(m => {m.delete(10000);})
                    if (!args[1]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `Text is missing, Command:**${prefix}messagebox [code language] [Text]**`}}).then(m => {m.delete(10000);})
                    let code = args[0]
                    let pretext = message.content.split(' ').slice(2)
                    let text = pretext.join(' ')
                    message.channel.send(`\`\`\`${code}
${text}

Sender:${message.author.username} | using code:${code}
\`\`\``);
                  }}

                  {
                    if (message.content.startsWith(prefix + "checkperms")) {
                      message.delete();
                      const person = message.mentions.members.first();
                      if (!person) {
                        let uperms = message.member.permissions.map(p => p.name).join('\n')
                        let richEmbed = new Discord.RichEmbed()
                        .setTitle(`${message.author.username}`)
                        .setDescription(`Permissions:\`\`\`${uperms}\`\`\``)
                        .setColor(65280)
                        message.channel.send({embed: richEmbed})
                      return
                    }

                    }}


                  if (message.content.startsWith(prefix + "serverRoles")) {
                  message.delete();
                  let roles = message.guild.roles.map(r => `<@&${r.id}>`).join('\n')
                  let richEmbed = new Discord.RichEmbed()
                  .setTitle(`Server roles list:`)
                  .setDescription(`${roles}`)
                  message.channel.send({embed: richEmbed})
                            };

                  if (message.content.startsWith(prefix + "serverEmojis")) {"<:GosealeBot:362330196784840705>Server List"
                  message.delete();
                  let emojis = message.guild.emojis.map(e=>e.toString()).join(" ");
                  if (hiddenlog) hiddenlog.send(`\`\`\`js
Server emoji command:
${emojis}
\`\`\``);
                  let richEmbed = new Discord.RichEmbed()
                  .setTitle(`Server emojis list:`)
                  .setDescription(`${emojis}`)
                  message.channel.send({embed: richEmbed})
                                        };


                  if (message.content.startsWith(prefix + "imagetext")) {
                  message.delete();
                  let args = message.content.split(' ').slice(1)
                  if (!args[0]) return message.channel.send({embed: { title: ":x:Error", "color": 16711680, description: `Text is missing, Command:**${prefix}imagetext [Text]**`}}).then(m => {m.delete(10000);})
                  let var1 = parseInt(args.join(' ').length)
                  let var2 = var1*13
                  Jimp.read("C:/Users/USER/Desktop/Discord Bot/data/Images/Testing.png", function (err, testing) {
                  if (err) {message.channel.send(`Error:\`\`\`${err}\`\`\``)
                  return};
                  testing.resize(var2, 32)
                  .quality(100);
                  Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function (font) {
                  testing.print(font, 10, 10, `${args.join(' ')}`)
                         .write("C:/Users/USER/Desktop/Discord Bot/data/Images/testing-small.png")});
                  });
                  message.channel.send("**Waiting for image creation...** [2 sec]").then(m => setTimeout(function() {
                  let richEmbed = new Discord.RichEmbed()
                  .setTitle(`Result`)
                  .setDescription("Image succsesfully created.")
                  .attachFile("C:/Users/USER/Desktop/Discord Bot/data/Images/testing-small.png")
                  m.delete()
                  message.channel.send({embed: richEmbed})}, 2000))
                };
                    














                      
                      if(message.content.startsWith(prefix + "restart")) {
                        if(message.author.id !== ownerID) return message.reply({embed: { title: ":x:Error", "color": 16711680, description: `This command is avalible for the bot owner @Goseale.`}}).then(m => {m.delete(5000);})
                        message.react("✅");
                         message.channel.send("restarting... [0/3] :red_circle: :red_circle: :red_circle:").then(m => {
                           setTimeout(() => m.edit("**Restarting... [1/3] :large_blue_circle: :red_circle: :red_circle:**"), 100);
                           setTimeout(() => m.edit("**Restarting... [2/3] :large_blue_circle: :large_blue_circle: :red_circle:**"), 300);
                           setTimeout(() => m.edit("**Restarting... [3/3] :large_blue_circle: :large_blue_circle: :large_blue_circle:**"), 500);
                           setTimeout(() => m.edit("**Successfully restarted! :white_check_mark:**"), 700);
                           setTimeout(() => m.edit("**Successfully restarted! :white_check_mark:**").then(() => process.exit()));
                         })}
                  
                      
                      
                      
                      let role = message.guild.roles.find("name", RoleName)
                      if (role) {
                        if (message.member.roles.has(role.id)) {
                          message.delete();
                          let richEmbed = new Discord.RichEmbed()
                          .setTitle(`Mute log`)
.setDescription(`**Username:**${message.author.tag}
**Channel:**${message.channel.name}
**CreatedAt:**${message.createdAt}
          
**Message:**${message.content}`)
                          .setColor(65280)
                          let channel = message.guild.channels.find("name", "muted-output")
                          if (channel) channel.send({embed: richEmbed})
                          else message.guild.createChannel('muted-output').then(c => c.send({embed: richEmbed}))
                          return;
                        }
                      }



            
            
            

            
            
            





// Bot log ---------------------------------------------------------------------------------------------------------------------//
              if (message.content.startsWith(prefix)) {
                let args = message.content.split(' ').slice(0)
                console.log(`
- - - - - - - - - - - - - - - - - -
Message log:
Server:${message.guild.name}
User:${message.author.username}
Channel:${message.channel.name}
Message:${args.join(' ')}
Time:${message.createdAt}
- - - - - - - - - - - - - - - - - -`)
                let richEmbed = new Discord.RichEmbed()
                .setTitle(`Message log`)
                .setDescription(`**Server:**${message.guild.name}
**Username:**${message.author.username} (${message.author.id})
**Channel:**${message.channel.name}
**CreatedAt:**${message.createdAt}

**Message:**${args.join(' ')}
\`\`\`${args.join(' ')}\`\`\``)
                .setColor(65280)
                .setThumbnail(`${message.author.avatarURL}`)
                if (hiddenlog) hiddenlog.send({embed: richEmbed});
                //if (hook) hook.send({embed: richEmbed})
             }
// Bot log ---------------------------------------------------------------------------------------------------------------------//


          }} catch(err) {
  console.log("Error:\n"+err)
  message.react(":warning:")
  let args = message.content.split(' ').slice(0)
  let richEmbed = new Discord.RichEmbed()
  .setTitle(`:warning:Error on bot code detected!`)
  .setDescription(`\`\`\`fix
 Last command executed:${args.join(' ')}
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 By:${message.author.username}
 Channel:${message.channel.name}
 Server:${message.guild.name}
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 Error:${err}
 [ ! ] Message sent to bot´s owner to a fix
\`\`\``)
  .setColor(16711680)
  if (hiddenlog) hiddenlog.send({embed: richEmbed});
  if(message.author.id !== ownerID) return;
  message.channel.send({embed: richEmbed}).then(m => {m.delete(10000)});

}

    });
