const Discord = require('discord.js');
const bot = new Discord.Client();

//Algo Que Conecta O Bot
bot.login('MzkyNzk0MTAzNzcyODcyNzE1.DRtKpg.do0s2qG6k8oXSeLmVajwh8dnuJ8');

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
                 
             client.on("message", (message) => {
    if(message.member.roles.has(role.id) && message.content.startsWith("!kick")) {
        // Easy way to get member object though mentions.
        let member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
});
});
