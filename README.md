This is a bot for discord that welcomes people when they join with a custom message and announces their departure when they leave.

Commands

/prefix:
changes when prefix you use to initiate commands
requires a premission set in the config.

/message join set <message>:
sets what message people who are joining your server get in the form of a dm.
also outputs your message to the channel where you set it.
requires a premission set in the config.

/message leave set <message>:
currently not working.
outputs whatever message you type
requires a premission set in the config.

Requires a config.json file.
The config must have:
token:<your bot token>
OwnerID:<the role id of what role you want to be able to use the commands>
prefix:<prefix to initiate commands>

This require nodejs to run.

To set up: 
1. Navigate to the directory this bot is in.
2. Run npm install discord.js.
3. Run node bot.js
Thats it.
