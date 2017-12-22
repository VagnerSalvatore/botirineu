const Discord = require("discord.js");
const bot = new Discord.Client();
const embed = new Discord.RichEmbed();
const fs = require('fs');
const db = require('quick.db');

// Global Settings
const prefix = '!'; // This is the prefix, you can change it to whatever you want.
//Login Do Bot
bot.login('MzkyNzk0MTAzNzcyODcyNzE1.DRtKpg.do0s2qG6k8oXSeLmVajwh8dnuJ8');



bot.on('ready', () => {
    console.log(`BOT LIGADO`);
    bot.user.setPresence({ game: { name: `Irineu`, type: 0 } });
});

// Anti chat
bot.on('message', async (msg) => {
    var is_PM = msg.channel.type == "dm";
    var message = msg;
    if (is_PM && msg.author.id != "139412744439988224") {
        return msg.reply();
    }

    if (msg.content.split(" ")[0].indexOf("!") < 0) {
        return;
    }
    var cmd = msg.content.split(" ")[0];

    if (cmd == "!on") {
        msg.channel.send("**Claro Que Sim Pô**");
    }

//Bem Vindo
bot.on("guildMemberAdd", function(member) {
    const WelcomeMsg = new Discord.RichEmbed()
      .setTitle("Novo Integrante!")
      .setColor(0x42f1f4)
      .setDescription(member.toString() + "**Bem Vindo Ao Servidor** :wave: ")
      .setFooter("Joined the server at!")
      .setTimestamp();
         
      var channel = bot.channels.get("393749252896981003");
      member.addRole("393750458432356353");
      channel.send({embed: WelcomeMsg}) 

    })


    //Down

    if (message.content.startsWith('!irineu')) {
        message.channel.send('Você Não Sabe Nem Eu');
    }


    //Doação Netflix
    if (message.content.startsWith('!netflix')) {
        message.channel.send('Enviei no Pv');
        message.author.sendFile('https://cdn.discordapp.com/attachments/392823534541471765/393060119639752704/logins.txt');


    }

    //Testador De Logins
    if (message.content.startsWith('!testar')) {
        if (message.channel.sendFile('http://localhost/logins.txt'));

    }


    //Numero de Servidores
    if (message.content.startsWith('!bot')) {
        message.channel.send('Servidores Em Que Estou');
        message.channel.send(client.guilds.size)

    }
    if (message.content.startsWith('!invite')) {
        message.guild.channels.get('392823534541471765').createInvite().then(invite =>
            message.channel.send(invite.url)
        );
    }
    if (message.content.startsWith('!botinfo')) {
        const embed = new Discord.RichEmbed()
            .setTitle("Irineubot.com.br")
            .setAuthor("IrineuBotTop", "http://imageurl.com.br/images/2017/12/21/avatar_anime_by_mrjavatwitch-d5uxc1h.png")
            /*
             * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
             */
            .setColor(0x00AE86)
            .setDescription("Acesse Meu Site Oficial.")
            .setFooter("Criado Por:Dark#6709", "http://imageurl.com.br/images/2017/12/21/avatar_anime_by_mrjavatwitch-d5uxc1h.png")
            .setImage("http://imageurl.com.br/images/2017/12/21/47f6c63a6d26755680b7313eb942ac5483b454e4_00.gif")
            .setThumbnail("http://imageurl.com.br/images/2017/12/21/avatar_anime_by_mrjavatwitch-d5uxc1h.png")
            /*
             * Takes a Date object, defaults to current date.
             */
            .setTimestamp()
            .setURL("https://irineubot.com.br")
            .addField("Servidores",
            "Estou Em Cerca de :1 Servidores")
            /*
             * Inline fields may not display as inline if the thumbnail and/or image is too big.
             */
            .addField("Irineu", "Você Não Sabe Nem Eu.", true)
            /*
             * Blank field, useful to create some space.
             */
            .addBlankField(true)
            .addField("Versão", "V2.04", true);

        message.channel.send({ embed });

    }

if(message.content.startsWith("!ping")) {
                const embed = new Discord.RichEmbed()
                message.channel.send(new Date().getTime() - message.createdTimestamp + " ms :ping_pong: pong");
                    
                }

    //Ban/Kick
    if (cmd == "!ban") {
        let modRole = msg.guild.roles.find("name", "DONO");
        if (msg.member.roles.has(modRole.id)) {
            let banMember = msg.guild.member(msg.mentions.users.first());
            msg.guild.member(banMember).ban();
            msg.channel.sendMessage("Membro **banido** com sucesso :call_me:.");
        } else {
            return msg.reply("Sem Permissão! :face_palm:.");
        }
    }

    if (cmd == "!kick") {
        let modRole = msg.guild.roles.find("name", "DONO");
        if (msg.member.roles.has(modRole.id)) {
            let banMember = msg.guild.member(msg.mentions.users.first());
            msg.guild.member(banMember).kick();
            msg.channel.sendMessage("Membro **Chutado** com sucesso :call_me:.");
        } else {
            return msg.reply("Sem Permissão! :face_palm:.");
        }
    
    //Ban/Kick

    }
    
    //Deletando Mensagens
    let role = message.guild.roles.find("name", "DONO");
    if (message.member.roles.has(role.id) && message.content.startsWith("!delete")) {
        msgDel = 10
        let numberMessages = parseInt("msgDel")
        message.channel.fetchMessages({ limit: numberMessages }).then(messages => message.channel.bulkDelete(messages));
    }

    bot.on("message", function (message) {
        const PREFIX = '!'
        if (message.content == PREFIX + 'meme') {
            const pictureNumber = Math.floor(Math.random()*3)+1;
            message.channel.send({ files: [new Discord.Attachment(`./${pictureNumber}.jpg`)] });
        };
    });
// Listener Event: Runs whenever a message is received.
bot.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let args = message.content.slice(prefix.length).trim().split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let cmd = args.shift().toLowerCase(); // This takes away the first object in the cont array, then puts it in this.

    // Message Leveling System - Make sure you require quick.db
    db.updateValue(message.author.id + message.guild.id, 1).then(i => { // You pass it the key, which is authorID + guildID, then pass it an increase which is 1 in this instance.
        // It also returns the new updated object, which is what we will use.

        let messages; // Create an empty variable - These IF statements will run if the new amount of messages sent is the same as the number.
        if (i.value == 10) messages = 10; // Level 1
        else if (i.value == 200) messages = 200; // Level 2
        else if (i.value == 300) messages = 300; // Level 3 - You can set these to any number, and any amount of them.

        if (!isNaN(messages)) { // If messages IS STILL empty, run this.
            db.updateValue(`userLevel_${message.author.id + message.guild.id}`, 1).then(o => { // This returns the updated object of userLevel_ID. 
                message.channel.send(`Você Enviou ${messages} Mensagens, E subiu de Nivel! Você Agora é level ${o.value}`) // Send their updated level to the channel.
            })
        }

    })

    // We also need to make sure it doesn't respond to bots
    if (sender.bot) return;
    if (!message.content.startsWith(prefix)) return; // We also want to make it so that if the message does not start with the prefix, return.

    // Command Handler - .trim() removes the blank spaces on both sides of the string
    try {
        let commandFile = require(`./commands/${cmd}.js`); // Arquivo CommandFile
        commandFile.run(bot, message, args, func); // This will add the functions, from the functions.js file into each commandFile.
    } catch (e) { // If an error occurs, this will run.
        console.log(e.message); // This logs the error message
    } finally { // This will run after the first two clear up
        console.log(`${message.author.username} ran the command: ${cmd}`);
    }

});


});
