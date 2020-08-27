module.exports = async bot => {
    console.log(`${bot.user.username} está online em ${bot.guilds.size} servidores com ${bot.users.size} membros.`)
    bot.user.setActivity("fiquei online!", {type: "STREAMING", url:"https://discord.gg/KBHNPYh"});

   let statuses = [
       `LostherShop`,
       "a sua compra.",
       `prefixo .`,
       `.ajuda`,
       `a melhor loja do Brasil.`
   ]

   setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       bot.user.setActivity(status, {type: "STREAMING", url:"https://discord.gg/KBHNPYh"});

   }, 2* 5000)

}