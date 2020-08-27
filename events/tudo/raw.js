module.exports = async (bot, dados) => {
    //Sistema de cargos por reação
    if(dados.t !== "MESSAGE_REACTION_ADD") return
    if(dados.d.message_id != "693535550153424927") return

        let servidor = bot.guilds.get("566811320083808257")
        let membro = servidor.members.get(dados.d.user_id)
      
        let reg = servidor.roles.get('693297318266404934')

      
        if(dados.t === "MESSAGE_REACTION_ADD"){
                if(dados.d.emoji.name === "🛒"){
                    membro.addRole(reg)
                    console.log('Um usuário registrou-se com sucesso no servidor.')
            }
        } else return;
      }