const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")
const fs = require("fs");

client.login(config.token);

client.on("ready", () => {
  console.log("I am ready!");
});
//set up permissions
/**/
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot


  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if(message.content.startsWith(config.prefix + "prefix")) {
    // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change the configuration in memory
    config.prefix = newPrefix;

    // Now we have to save the file.
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }
  if(message.content.startsWith(config.prefix + "message add")){
    if(message.member.roles.has(Owner.id)){
    let newMessage = message.content.split(" add ").slice(1, 2)[0];
    config.message = newMessage;
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
    message.channel.send(config.message);
  }
}
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  NewUser = member.user;
  member.send(config.message);
  guild.defaultChannel.send("Welcome " + NewUser + " to our server!");
//  message.newMember.sendMessage("Your message here.");


});
