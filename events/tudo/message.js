const { prefix } = require("../../config.json");
const fs = require('fs')
module.exports = async (bot, message) => { 
  let discord = require('discord.js')
    //Mensagem de verificação
    let VerificarE = new discord.RichEmbed()
    .setAuthor('Verificação', bot.user.avatarURL, 'https://discordapp.com/invite/mEAFG9u')
    .setDescription('Para ganhares o cargo <@&693297318266404934>, reage nesta mensagem!')
    .setColor('#eb3446')
    .setFooter('Bot feito pela Francisca.105#8965')
    if(message.content === 'Verificar') {
      message.delete()
      message.channel.send(VerificarE).then(ver => ver.react('🛒'))
    }

    //Resposta a menção
    if (message.content.startsWith(`<@${bot.user.id}>`)){
      message.channel.send(`Quem me chamou?`)
    }    
    //Palavras Proibidas
      let WordArray = message.content.split(" ")
      let blaclist = ["fuck", "fuder", "foder", "foda-se", "fodasse", "puta", "otário", "otario", "cabrão", "cabrao", "caralho", "merda", "pussy", "Puta", "Merda"]
      
      for (var i = 0; i < blaclist.length; i++){
        if(WordArray.includes(blaclist[i])){
          message.delete(),
          message.reply("Parece que a sua mensagem continha uma __palavra proibída__!")
        }
      }
    //sistema de perguntas
        if (message.content.startsWith("Bot, como te chamas?")){
            message.channel.send(`Olá, eu chamo-me ${client.user.username}!`)
        }      

    //Bloqueador de invites
    let membro = message.member
    let guild = message.guild
    //let role = guild.roles.find(r => r.name === "💫▸Divulgador")
    let convite = /(discord.gg|discordapp.com)\/(invite)?/ig.test(message.content)
        if(convite === true) {
          if(membro.guild.id !== "566811320083808257") return;
          if(membro.roles.has("613125913063981057")) return;
          if(message.author.id === "290092310002270218") return;
            message.delete()
            message.reply('Não pode divulgar convites de outros servidores aqui!')
        }        
        
    //Comandos
    if(message.author.bot || message.channel.type === "dm") return;

    let prefixo = prefix;
    let args = message.content.slice(prefixo.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefixo)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args)


}