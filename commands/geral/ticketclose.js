const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 

    const categoryId = "693518881938997349";
 

    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Por favor, coloque este comando em um canal de ticket.");
 
    }
 
}
 
module.exports.config = {
    name: "fechar",
    aliases: ["close"]
}    