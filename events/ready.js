module.exports = {
  async main(client, config) {
    
var botlog;
var channel_suggest;
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
});

client.on("ready", () => {
client.user.setPresence({ game: { name: `B[help | ${client.guilds.size} server(s)`, type: 0 } });
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
    
  }
}
