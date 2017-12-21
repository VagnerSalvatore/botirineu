const Discord = require('discord.js');
const bot = new Discord.Client();
const embed = new Discord.RichEmbed();
const client = new Discord.Client();
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
            "Estou Em Cerca de :1 Servidores.")
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


    if(message.author.id !== config.ownerID) return;

    client.on("message", message => {
        const args = message.content.split(" ").slice(1);
      
        if (message.content.startsWith(config.prefix + "eval")) {
          if(message.author.id !== config.ownerID) return;
          try {
            const code = args.join(" ");
            let evaled = eval(code);
      
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
      
            message.channel.send(clean(evaled), {code:"xl"});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          }
        }
      });


    //Deletando Mensagens
    let role = message.guild.roles.find("name", "DONO");
    if (message.member.roles.has(role.id) && message.content.startsWith("!delete")) {
        msgDel = 10
        let numberMessages = parseInt("msgDel")
        message.channel.fetchMessages({ limit: numberMessages }).then(messages => message.channel.bulkDelete(messages));

    }



});
