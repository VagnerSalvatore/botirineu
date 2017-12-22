const Discord = require("discord.js");
const bot = new Discord.Client();
const embed = new Discord.RichEmbed();
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
    if (message.content.startsWith('!info')) {
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
            msg.channel.sendMessage("Membro **kickado** com sucesso :call_me:.");
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
});
