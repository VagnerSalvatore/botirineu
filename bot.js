const Discord = require('discord.js');
const bot = new Discord.Client();
//Algo Que Conecta O Bot
bot.login('MzkyNzk0MTAzNzcyODcyNzE1.DRtKpg.do0s2qG6k8oXSeLmVajwh8dnuJ8');

        bot.on('message', message => {
            if (message.content.startsWith('!ping')){
                message.channel.send('!pong');
            }
            

              //Ligado ?
                if (message.content.startsWith('!on')){
                    message.channel.send('Claro Que Sim Pô');
                }
        

                //Down
                
                if (message.content.startsWith('!irineu')){
                    message.channel.send('Você Não Sabe Nem Eu');
                }
                  
                
                //Doação Netflix
                    if (message.content.startsWith('!netflix')){
                    message.channel.send('Enviei no Pv');
                  message.author.sendFile('https://cdn.discordapp.com/attachments/392823534541471765/393060119639752704/logins.txt');
   
                           
                   }
                 
                //Testador De Logins
                   if (message.content.startsWith('!testar')){
                   if (message.channel.sendFile ('http://localhost/logins.txt'));
                   
                   }     
                   
                
                //Ira Puxar o Cpf
                  if (message.content.startsWith('!cpf')){
                   if (message.author.send ("I've just banned you!"));
                          
                          
                  }
                   
                  if (message.content.startsWith('!info')){
                    message.channel.send({embed: {
                        color: 3447003,
                        author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL
                        },
                        title: "This is an embed",
                        url: "http://google.com",
                        description: "This is a test embed to showcase what they look like and what they can do.",
                        fields: [{
                            name: "Fields",
                            value: "They can have different fields with small headlines."
                          },
                          {
                            name: "Masked links",
                            value: "You can put [masked links](http://google.com) inside of rich embeds."
                          },
                          {
                            name: "Markdown",
                            value: "You can put all the *usual* **__Markdown__** inside of them."
                          }
                        ],
                        timestamp: new Date(),
                        footer: {
                          icon_url: client.user.avatarURL,
                          text: "© Example"
                        }
                      }
                    });
                }
               
                                   
                    
//Deletando Mensagens
let role = message.guild.roles.find("name", "DONO");
if(message.member.roles.has(role.id) && message.content.startsWith("!delete")){
    msgDel = 10
    let numberMessages = parseInt("msgDel")
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));

}
            
             
                
});
