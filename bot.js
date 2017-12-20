const Discord = require('discord.js');
const client = new Discord.Client({options: {disabledEvents: [
    'GUILD_SYNC',
    'GUILD_ROLE_CREATE',
    'GUILD_ROLE_DELETE',
    'GUILD_ROLE_UPDATE',
    'GUILD_BAN_ADD',
    'GUILD_BAN_REMOVE',
    'CHANNEL_CREATE',
    'CHANNEL_DELETE',
    'CHANNEL_UPDATE',
    'CHANNEL_PINS_UPDATE',
    'MESSAGE_DELETE',
    'MESSAGE_UPDATE',
    'MESSAGE_DELETE_BULK',
    'MESSAGE_REACTION_ADD',
    'MESSAGE_REACTION_REMOVE',
    'MESSAGE_REACTION_REMOVE_ALL',
    'USER_UPDATE',
    'USER_NOTE_UPDATE',
    'USER_SETTINGS_UPDATE',
    'PRESENCE_UPDATE',
    'VOICE_STATE_UPDATE',
    'TYPING_START',
    'VOICE_SERVER_UPDATE',
    'RELATIONSHIP_ADD',
    'RELATIONSHIP_REMOVE'
]}});
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
                    
                    (message.channel.sendFile('http://localhost/netflix.txt'));
                   }

                   if (message.content.startsWith('!testar')){
                   if (message.channel.sendFile ('http://localhost/logins.txt'));
                   
                   }     
                   


let role = message.guild.roles.find("name", "Admin");
if(message.member.roles.has(role.id) && message.content.startsWith("!delete")){
    msgDel = 10
    let numberMessages = parseInt("msgDel")
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));



}


});
