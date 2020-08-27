const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 

    const categoryId = "693518881938997349";
 

    var userName = message.author.username;

    var userDiscriminator = message.author.discriminator;
 

    var bool = false;
 

    message.guild.channels.forEach((channel) => {
 

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
 
            message.channel.reply("Você já criou um ticket");
 
            bool = true;
 
        }
 
    });
 

    if (bool == true) return;
 
    message.channel.send("O seu ticket foi criado.");
 

    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {
 
        createdChan.setParent(categoryId).then((settedParent) => { 
           

            settedParent.overwritePermissions(message.guild.roles.find('name', "📞| Suportes"), { "READ_MESSAGES": true });
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            

            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            var embedParent = new discord.RichEmbed()
                .setTitle("Olá, " + message.author.username.toString())
                .setDescription("Já convocamos um staff para responder todas as suas dúvidas!\n Apenas aguarde pacientemente.");
 
            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("Algo deu errado.");
        });
 
    }).catch(err => {
        message.channel.send("Algo deu errado.");
    });
 
}
 
module.exports.config = {
    name: "ticket",
    aliases: ["abrir"]
}    