module.exports = async function(client, message, cmd, args) {


  
message.channel.send("Pinging...").then(m => setTimeout(function() {
  let response = m.createdTimestamp - message.createdTimestamp
  m.edit("Bot ping: **" + (Math.round(client.ping)) + `ms** - Api ping: ${response} ms 1/5 <:greencircle:362731767729356804><:greycircle:362731740101476354><:greycircle:362731740101476354>`),
    m.edit("pong! **" + (Math.round(client.ping)) + `ms** - Api ping: ${response} ms 2/5 <:greycircle:362731740101476354><:greencircle:362731767729356804><:greycircle:362731740101476354>` ),
    m.edit("pong! **" + (Math.round(client.ping)) + `ms** - Api ping: ${response} ms 3/5 <:greycircle:362731740101476354><:greycircle:362731740101476354><:greencircle:362731767729356804>`),
    m.edit("pong! **" + (Math.round(client.ping)) + `ms** - Api ping: ${response} ms 4/5 <:greencircle:362731767729356804><:greycircle:362731740101476354><:greycircle:362731740101476354>`),
    m.edit("pong! **" + (Math.round(client.ping)) + `ms** - Api ping: **${response}** ms`) }, 1000))

}