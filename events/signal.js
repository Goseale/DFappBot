module.exports = {
  async main(client) {

let hiddenlog = client.channels.get(`357596301522632715`);
var currentdate = new Date(); 
var datetime = "Event on: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    
function handle(signal) {
  console.log(" ")
  console.log(`Received ${signal}`);
  console.log(" ")
  if (hiddenlog) hiddenlog.send(`Received ${signal}\nClient has been terminated.\n${datetime}`)
  client.destroy()
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);
  }
