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
                 
if (message.content.startsWith('!ball')){
        /**
 * @member {Object}
 */
const snekfetch = require('snekfetch');

exports.run = async (client, msg, args) => {
    if (!args.join(' ')) {
        return msg.channel.send('Please include a question');
    }
    let r = await snekfetch.get('https://8ball.delegator.com/magic/JSON/0');
    let answerBall = r.body;
    /**
     * @param {{magic:object}} The returned Object from API
     */
    let ball = answerBall.magic.answer;
    msg.channel.send('**[8 Ball]** :crystal_ball: ' + ball);
};

exports.help = {
    category: 'fun',
    usage: '[question]',
    description: 'Ask the magic 8 ball something',
    detail: 'Ask the magic 8 ball something',
    botPerm: ['SEND_MESSAGES'],
    authorPerm: [],
    alias: [
        '8b'
    ],
    example: 'Are you the may from overwatch?'
};
                
                
                
                
});
