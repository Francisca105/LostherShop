const Discord = require('discord.js')
exports.run = async (client, message) => {

    const embed = new Discord.RichEmbed()
    .setAuthor('Parceiros', client.user.avatarURL, 'https://discord.gg/mEAFG9u')
    .setDescription('Interessado em ver os nossos parceiros?\n\n**Aqui estão:**')
    .addField('FantasyHosting', `[Clica-me!](https://fantasyhosting.com.br/)`)
    .setFooter('Bot feito pela Francisca.105#8965')
    .setColor('#eb7134')
    message.channel.send(embed)
}

module.exports.config = {
    name: "parceiros",
    aliases: ["parcerias"]
}