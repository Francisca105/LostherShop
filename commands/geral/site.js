const Discord = require('discord.js')
exports.run = async (client, message) => {
    
    const embed = new Discord.RichEmbed()
    .setAuthor('Site', client.user.avatarURL, 'https://discord.gg/mEAFG9u')
    .setDescription('')
    .addField('Link da nossa loja:', `[Clica-me!](https://losthershop.com)`)
    .setFooter('Bot feito pela Francisca.105#8965')
    .setColor('#eb7134')
    message.channel.send(embed)
}
module.exports.config = {
    name: "site",
    aliases: ["link", "loja"]
   }