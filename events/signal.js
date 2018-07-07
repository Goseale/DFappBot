module.exports = {
  async main(client) {

let hiddenlog = client.channels.get(`357596301522632715`);
function handle(signal) {
  console.log(" ")
  console.log(`Received ${signal}`);
  console.log(" ")
  if (hiddenlog) hiddenlog.send(`Received ${signal}\nClient has been terminated.`)
  client.destroy()
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);
  }
