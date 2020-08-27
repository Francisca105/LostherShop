const { Client, Collection } = require("discord.js");
const { token } = require("./config.json");
const discord = require('discord.js')
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));



bot.login(token);