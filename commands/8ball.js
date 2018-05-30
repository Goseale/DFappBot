const Discord = require('discord.js');
module.exports = async function(client, message, cmd, args, prefix) {

  try{

const responses = [
        // Affirmative
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes, definitely.",
        "You may rely on it.",
        "You can count on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Absolutely.",
        "No wonder",
        "Of curse!",
        "Yes, yes, YES!!",

        // Non-commital
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Hummmm i dont have it clear",

        // Negative
        "Don't count on it.",
        "My reply is no.",
        "My sources say no,",
        "Outlook not so good.",
        "Very doubtful.",
        "I dont think so",
        "Chances aren't good.",
        "As in your sould no",
        "Evaled chances are 0/0",
        "no......"
    ]
    let eightBall = new Discord.RichEmbed()
    .setTitle(`${message.author.tag} asks the Magic :8ball: Ball:`)
    .addField(args.join(" "), responses[Math.floor(Math.random() * (responses.length - 1))])
    .setColor(message.member.displayHexColor)

    message.channel.send({ embed: eightBall });

  } catch (err) {
    console.log(err)
  }
    
}