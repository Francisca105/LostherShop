const Discord = require('discord.js')
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment") 
moment.locale('pt-BR');

exports.run = async (client, message) => {
    const a = await message.channel.send("A carregar o menu de ajuda...");   
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} dias, ${hrs.padStart(2, '0')} horas, ${min.padStart(2, '0')} minutos, ${sec.padStart(2, '0')} segundos.`
    }
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
          return console.log(err);
        }
       
       let secs = Math.floor(client.uptime % 60);
       let days = Math.floor((client.uptime % 31536000) / 86400);
       let hours = Math.floor((client.uptime / 3600) % 24);
       let mins = Math.floor((client.uptime / 60) % 60);
    

    let mem = process.memoryUsage().heapUsed.toFixed(2)/ 1024 / 1024
    let memoria = Math.round(mem)
    let cpuusada = Math.round(percent.toFixed(2) / 15)

    let embed1 = new Discord.RichEmbed()
    .setAuthor('Bot Info', client.user.avtarURL, 'https://discord.gg/mEAFG9u')
    .setColor('#f4ff21')
    .setFooter('Bot feito pela Francisca.105#8965')
    .setDescription('Olá! Tudo bem?\nComo pedido aqui estão todas as minhas informações!')
    .addField('Criadora', 'Francisca.105#8965')
    .addField('Ping', `${a.createdTimestamp - message.createdTimestamp} ms`)
    .addField('Uptime', `${duration(client.uptime)}`)
    .addField('Hospedagem', 'Fantasy Hosting 🇺🇸')
    .addField("CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
    .addField("CPU a ser usada", `\`${cpuusada} %\``,true)
    .addField("Memoria sendo utilizada", `\`\`${memoria} / 5120 MB\`\``, true)
    .addField("Arch", `\`${os.arch()}\``,true)
    .addField("Plataforma", `\`\`${os.platform()}\`\``,true)
    
    a.edit(embed1);



})
}

module.exports.config = {
    name: "botinfo",
    aliases: ["bot"]
}    