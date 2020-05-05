const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")

client.on("ready", () => {
    console.log(`Bot started!`);
    client.user.setActivity("Argon - Support") 
});


client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const parancs = args.shift().toLowerCase();
  
    try {
      let parancsFile = require(`./parancsok/${parancs}.js`);
      parancsFile.run(client, message, args);
    } catch (err) {
   }
  });


client.login("BOT TOKEN :D"); 
