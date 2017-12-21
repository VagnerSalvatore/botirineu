const Discord = require('discord.js');
const bot = new Discord.Client();
const embed = new Discord.RichEmbed();
//Login Do Bot
bot.login('MzkyNzk0MTAzNzcyODcyNzE1.DRtKpg.do0s2qG6k8oXSeLmVajwh8dnuJ8');

bot.on('message', message => {
    if (message.content.startsWith('!ping')) {
        message.channel.send('!pong');
    }


    //Ligado ?
    if (message.content.startsWith('!on')) {
        message.channel.send('Claro Que Sim Pô');
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


    //Ira Puxar o Cpf
    if (message.content.startsWith('!cpf')) {
        if (message.author.send("I've just banned you!"));

    }

    if (message.content.startsWith('!help')) {
        message.channel.send({
            embed: {
                color: 3447003,
                description: "Meus Comandos"
            }
        });
    }
    if (message.content.startsWith('!invite')) {
        message.guild.channels.get('392823534541471765').createInvite().then(invite =>
            message.channel.send(invite.url)
        );
    }
    if (message.content.startsWith('!info')) {
        const embed = new Discord.RichEmbed()
            .setTitle("This is your title, it can hold 256 characters")
            .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
            /*
             * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
             */
            .setColor(0x00AE86)
            .setDescription("This is the main body of text, it can hold 2048 characters.")
            .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
            .setImage("http://i.imgur.com/yVpymuV.png")
            .setThumbnail("http://i.imgur.com/p2qNFag.png")
            /*
             * Takes a Date object, defaults to current date.
             */
            .setTimestamp()
            .setURL("https://irineubot.com.br")
            .addField("Meu Site Oficial",
            "Clique Para Acessar.")
            /*
             * Inline fields may not display as inline if the thumbnail and/or image is too big.
             */
            .addField("Inline Field", "They can also be inline.", true)
            /*
             * Blank field, useful to create some space.
             */
            .addBlankField(true)
            .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

        message.channel.send({ embed });

    }


    //Deletando Mensagens
    let role = message.guild.roles.find("name", "DONO");
    if (message.member.roles.has(role.id) && message.content.startsWith("!delete")) {
        msgDel = 10
        let numberMessages = parseInt("msgDel")
        message.channel.fetchMessages({ limit: numberMessages }).then(messages => message.channel.bulkDelete(messages));

    }



});
