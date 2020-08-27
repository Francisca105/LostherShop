const Discord = require('discord.js')
exports.run = async (client, message) => {

    const embed = new Discord.RichEmbed()
    .setAuthor('Ajuda', client.user.avatarURL, 'https://discord.gg/mEAFG9u')
    .setDescription('Perdido? Deixa-me ajudar-te, estes são todos os comandos disponíveis:')
    .addField('ajuda ou help', 'Envia no chat esta mensagem.')
    .addField('limpar ou clear', 'Limpa o chat.')
    .addField('parceiros ou parcerias', 'Envia a lista de parceiros.')
    .addField('site ou link', 'Manda o link do site.')
    .addField('ticket ou abrir', 'Abre um ticket privado.')
    .addField('fechar ou close', 'Irá fechar um ticket.')
    .setFooter('Bot feito pela Francisca.105#8965')
    .setColor('#34e8eb')
    message.channel.send(embed)
}

module.exports.config = {
    name: "ajuda",
    aliases: ["help"]
}