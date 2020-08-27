module.exports = async (bot, membro) => { 
    const discord = require('discord.js')
    let embed = new discord.RichEmbed()
    .setAuthor(membro.username, membro.avatarURL, "https://discord.gg/KBHNPYh")
    .setDescription("Espero que se divirta em nossa loja!")
    .setFooter("Temos atualmente" + bot.guilds.get("566811320083808257").users.size + " membros!")
    .setColor('eb3446')
    
    member.addRole('693287373462568961')
    bot.guilds.get('566811320083808257').channels.get('693299186342297641').send(embed)
}