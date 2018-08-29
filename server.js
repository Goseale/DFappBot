//Main
const Discord = require("discord.js");
const client = new Discord.Client();

//Vars1
const config = require("./config.json");
const guildTimers = new Discord.Collection()

//var2

const Ready = require('./events/ready.js');
const message = require("./events/message.js");
const EvMessage = require("./events/message.js")
const SIG = require("./events/signal.js")
const prefix = "["

//Vars3
const ownerID = process.env.OWNER
const online_status = config.online_status
const RoleName = config.role_name
const yt_api_key = config.yt_api_key;
const hiddenlog = client.channels.get(`431259127289872397`)

//Modules
const ffmpeg = require("ffmpeg-static");
console.log("FFMPEG PATH: " + ffmpeg.path);
const dispatcher = require('streamdispatch');
const ytdl          = require('ytdl-core');
const getYouTubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const request = require('request');
const fs = require("fs");
const http = require('http'); 
const Jimp = require("jimp");
//const graphic = require("graphic");
var algebra = require('algebra.js');
const snekfetch = require('snekfetch');
var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;

//Pinger
/*
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

*/

//Prefix start
/*
const PersistentCollection = require('djs-collection-persistent');
const guildSettings = new PersistentCollection({name: 'guildSettings'});
const message_log = new PersistentCollection({name: 'Message_log'});
const defaultSettings = {
  prefix: "B["
  }
*/
//Prefix end

client.login(process.env.TOKEN);

//http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'}); res.send('it is running\n'); }).listen(process.env.PORT || 5000)


process.on('uncaughtException', function (err) {
  console.error(err);
if (hiddenlog) hiddenlog.send(`<@229016449593769984> Bot tryed to crash, error: ${err}
\`\`\`js
${err.stack}
\`\`\``)
});


Ready.main(client, config);
EvMessage.main(client, prefix);
SIG.main(client)


/*
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
message.guild.member(client.user).setNickname(`B[${thisConf.prefix}] ${client.user.username}`)
message.channel.send("Prefixes are stored until the bot restarts, this will be fixed soon")
message.channel.send({
embed: {
title: `Prefix was changed!`,
description: `Prefix was changed to **${thisConf.prefix}**`,
color: 0x0080ff
}
});
}

*/
  //cmd prefix end
