const Discord = require("discord.js");
const client = new Discord.Client();
const request = require('request');

client.on('ready', () => {
  console.log(`BOT LIGADO`);
  client.user.setPresence({ game: { name: `Irineu`, type: 0} });
});

// Anti chat
client.on('message',async  (msg) => {
    var is_PM = msg.channel.type == "dm";
    var message = msg;
    if(is_PM && msg.author.id != "392794103772872715"){
        return msg.reply("**Sem mensagens no privado!**.");
    }

    if(msg.content.split(" ")[0].indexOf(".") < 0){
        return;
    }
    var cmd = msg.content.split(" ")[0];

 if(cmd == ".teste"){
    msg.channel.send("**STATUS: ON**");
 }
   
    //Comandos Bot

    //Ban/Kick
    if(cmd == "!ban") {
        let modRole = msg.guild.roles.find("name", "DONO");
        if(msg.member.roles.has(modRole.id)) { 
          let banMember = msg.guild.member(msg.mentions.users.first());
          msg.guild.member(banMember).ban();
          msg.channel.sendMessage("Membro **banido** com sucesso :call_me:.");
        } else {
          return msg.reply("Sem Permissão :vindieselpngmemevindieselpng512:.");
        }
      }

      if(cmd == "!kick") {
        let modRole = msg.guild.roles.find("name", "DONO");
        if(msg.member.roles.has(modRole.id)) { 
          let banMember = msg.guild.member(msg.mentions.users.first());
          msg.guild.member(banMember).kick();
          msg.channel.sendMessage("Membro **kickado** com sucesso :call_me:.");
        } else {
          return msg.reply("Sem Permissão :vindieselpngmemevindieselpng512:.");
        }
      }
      //Ban/Kick
	
	//Comandos Por Dark
	bot.on('message', message => {
            if (message.content.startsWith('!ping')){
                message.channel.send('!pong');
            }



                if (message.content.startsWith('!on')){
                    message.channel.send('Claro Que Sim Pô');
                }
        

                if (message.content.startsWith('!irineu')){
                    message.channel.send('Você Não Sabe Nem Eu');
                }
                  
                    if (message.content.startsWith('!netflix')){
                    message.channel.send('Enviei no Pv');
                  message.author.sendFile('https://cdn.discordapp.com/attachments/392823534541471765/393060119639752704/logins.txt');
   
                           
                   }

                   if (message.content.startsWith('!testar')){
                   if (message.channel.sendFile ('http://localhost/logins.txt'));
                   
                   }     
                   
                  if (message.content.startsWith('!cpf')){
                   if (message.author.send ("I've just banned you!"));
                          
                          
                  }
                   
                
                

let role = message.guild.roles.find("name", "Admin");
if(message.member.roles.has(role.id) && message.content.startsWith("!delete")){
    msgDel = 10
    let numberMessages = parseInt("msgDel")
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));

}
	
	
	  
});
client.login('MzkyNzk0MTAzNzcyODcyNzE1.DRxHhQ.sYvrQ3k9sCo_LaUPpPAT4hLTXQk'); //Token do seu bot
});
