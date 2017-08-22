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
  let Owner = message.guild.roles.get(config.OwnerID);
//  let EveryoneID = "349672318936678400";
//  let EveryMember = message.guild.roles.get("349672318936678400").members
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if(message.content.startsWith(config.prefix + "prefix")) {
    // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change the configuration in memory
    config.prefix = newPrefix;

    // Now we have to save the file.
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }
  if(message.content.startsWith(config.prefix + "message join set")){
    if(message.member.roles.has(Owner.id)){
    let newMessage = message.content.split(" join set ").slice(1, 2)[0];
    config.Jmessage = newMessage;
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
    message.channel.send(config.Jmessage);
  }
}
if(message.content.startsWith(config.prefix + "message leave set")){
  if(message.member.roles.has(Owner.id)){
  let newMessage = message.content.split(" leave set ").slice(1, 2)[0];
  config.Lmessage = newMessage;
  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  message.channel.send(config.Lmessage);
}
}
});
client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  NewUser = member.user;
  member.send(config.Jmessage);
  guild.defaultChannel.send("Welcome " + NewUser + " to our server!");
//  message.newMember.sendMessage("Your message here.");
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  LeavingUser = member.user;
  member.send(config.Lmessage);
  guild.defaultChannel.send(LeavingUser + " has left our server. :'(");
//  message.newMember.sendMessage("Your message here.");
});
