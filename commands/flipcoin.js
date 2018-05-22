module.exports = async function(client, message, cmd, args, prefix) {

message.channel.send(["you got heads", "you got tails"][Rand(0,2)])
  

}

function Rand(min, cnt) {
  return Math.floor((Math.random() * cnt) + min);
}