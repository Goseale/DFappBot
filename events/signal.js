module.exports = {
  async main(client) {


function handle(signal) {
  console.log(" ")
  console.log(`Received ${signal}`);
  console.log(" ")
  client
  client.destroy()
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);
  }
