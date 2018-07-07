


function handle(signal) {
  console.log(`Received ${signal}`);
  client.destroy()
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);
