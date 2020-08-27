exports.run = async (client, message) => {
    if(message.author.id !== "290092310002270218") return message.reply('Não podes usar este comando.')
    client.emit("guildMemberAdd", message.member)
}
module.exports.config = {
    name: "welcome",
    aliases: []
}