const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'Njg5ODUzNDk3MjAxNzg2OTA1.XnI7Pw.Rykc6ieE8d2dmdcJPBuI9kU5_ng';

bot.login(process.env.BOT_TOKEN);
bot.on('ready', () => {
    console.log('Pronto');
});
bot.on('message', msg => {
    if (msg.content === '*comandos') {
        msg.reply('Comandos: *comandos, *games, *info');
    }
});
bot.on('message', msg => {
    if (msg.content === '*info') {
        msg.reply('Olá bem vindo ao Server do DS, esse server foi criado com o intuito de entreterimento em meio a quarentena do corona vírus. Temos os chats de voz "Chat 1-" e "Chat 2-" para conversas sem compromissos, entre quando quiser, quem sabe alguém não está querendo conversar também. Temos também os chats de voz "Jogos 1-" e "Jogos 2-" para quando a Gameplay avançada for rolar, e por último temos também nossos chats de textos, isso é tudo por enquanto, divirtam-se');
    }
});
bot.on('message', msg => {
    if (msg.content === '*games') {
        msg.reply('Games que recomendamos você baixar, para jogarmos aqui(fique tranquilos todos os jogos dessa lista são gratuitos): Unturned, Paladins, Roblox, Fortnite, Deceit, Amoung Us(Mobile), Cod(Mobile), Brawl Stars(Mobile)');
    }
});