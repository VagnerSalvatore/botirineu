const Discord = require("discord.js");
const bot = new Discord.Client();
const embed = new Discord.RichEmbed();
const prefix = '!'; //PREFIXO DO BOT.
//Login Do Bot
bot.login('');

bot.on('ready', () => {
    console.log(`IRINEU ON`);
    bot.user.setPresence({ game: { name: `Look At Me!`, type: 0 } });
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
      bot.on("guildMemberAdd", function (member) {
        const WelcomeMsg = new Discord.RichEmbed()
            .setTitle("Novo Integrante!")
            .setColor(0x42f1f4)
            .setDescription(member.toString() + "**Bem Vindo Ao Servidor** :wave: ")
            .setFooter("Joined the server at!")
            .setTimestamp();

        var channel = bot.channels.get("393749252896981003");
        member.addRole("393750458432356353");
        channel.send({ embed: WelcomeMsg })
      });

                if (message.content.startsWith('!irineu')){
                    message.channel.send('Você Não Sabe Nem Eu');
                }
                  
                    if (message.content.startsWith('!netflix')){
                    message.channel.send('Enviei no Pv');
                  message.author.sendFile('https://cdn.discordapp.com/attachments/392823534541471765/393060119639752704/logins.txt');
   
                           
                   }

                  //KKK
    if (message.content.startsWith('!bom dia')) {

        message.channel.send("Bom Dia " + ", É o Caralho!" + message.author.toString());
    }  
                   
     //Numero de Servidores
    if (message.content.startsWith('!bot')) {
        message.channel.send('Servidores Em Que Estou');
        message.channel.send(bot.guilds.size)
    }
                
    if (message.content.startsWith('!invite')) {
        message.guild.channels.get('393841445376622612').createInvite().then(invite =>
           message.channel.send(invite.url)
        )
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


    if (message.content.startsWith("!ping")) {
        const embed = new Discord.RichEmbed()
        message.channel.send(new Date().getTime() - message.createdTimestamp + " ms :ping_pong: pong");

    }

    if(message.content.startsWith('!play'))
    message.channel.send('Para adicionar o bot de musica no servidor acesse o link https://discordapp.com/api/oauth2/authorize?client_id=393931909350293504&permissions=8&scope=bot');
    


//Ban/Kick
if (cmd == "!ban") {
    let modRole = msg.guild.roles.find("name", "Dono");
    if (msg.member.roles.has(modRole.id)) {
        let banMember = msg.guild.member(msg.mentions.users.first());
        msg.guild.member(banMember).ban();
        msg.channel.sendMessage("Membro **banido** com sucesso :call_me:.");
 } else {
        return msg.reply("Sem Permissão! :face_palm:.");
}
}

if (cmd == "!kick") {
    let modRole = msg.guild.roles.find("name", "Dono");
    if (msg.member.roles.has(modRole.id)) {
        let banMember = msg.guild.member(msg.mentions.users.first());
        msg.guild.member(banMember).kick();
        msg.channel.sendMessage("Membro **Chutado** com sucesso :call_me:.");
    } else {
        return msg.reply("Sem Permissão! :face_palm:.");
    }
}

    
let role = message.guild.roles.find("name", "Dono");
if(message.member.roles.has(role.id) && message.content.startsWith("!delete")){
    msgDel = 10
    let numberMessages = parseInt("msgDel")
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));

}
                

//SISTEMA DE PONTOS
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
const prefix = "!";

client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    message.reply(`Você Subiu Para O Nivel **${curLevel}**! é isso mesmo irineu?`);
  }

  if (message.content.startsWith(prefix + "level")) {
    message.reply(`Seu Nivel É ${userData.level}, Com ${userData.points} Pontos.`);
  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
});

client.login("MzkyNzk0MTAzNzcyODcyNzE1.DR8FZg.OJFtzwGysBBCUYrp9MxaXxW2htA");

//DANDO CARGO A USUARIOS
    if (message.member.roles.has(role.id)) {
        //MENCIONAR USUARIO
        let member = message.mentions.members.first();
        if (message.content.startsWith('!cargo')) {
            member.addRole(role).catch(console.error);
        }
    }
    if (message.member.roles.has(role.id)) {
        //MENCIONAR USUARIO
        let member = message.mentions.members.first();
    if (message.content.startsWith('!removecargo')) {
        member.removeRole(role).catch(console.error);
    
    }
}

});
