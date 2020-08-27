const Discord = require("discord.js")

exports.run = async (client, message, args) => {
   let S = args.slice(0)
                .join(" ");
        if (!S) return message.reply("Indica a tua sugestão!")
  message.delete()
  let sChannel = message.guild.channels.find(x => x.name === "〔📝〕sugestões")

  let embed = new Discord.RichEmbed()
    .setAuthor("Sugestão")
    .setDescription("\n" + S + "\n")
    .setColor(`#03fce3`)
    .setFooter(`Uma nova sugestão de ${message.author} chegou à minha caixa!`, client.user.avatarURL)
    .setTimestamp();
  
    if(sChannel){
      message.channel.send("Sugestão enviada com sucesso!").then(s => s.delete(15000))
    const m = await sChannel.send(embed);
    await m.react("✅");
    await m.react("❎");
    }
    if(!sChannel){
      message.channel.send("Sugestão enviada com sucesso!").then(s => s.delete(15000))
      const m = await message.channel.send(embed);
      await m.react("✅");
      await m.react("❎");
      message.channel.send("Como não existe um canal chamado \`〔📝〕sugestões\`, eu mandei a mensagem aqui").then(d => d.delete(15000))
      }    
}
module.exports.config = {
    name: "sugestao",
    aliases: ["sugestão", "sugerir"]
   }