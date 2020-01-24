const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjcwMDgwODMzNTI0MDcyNDcw.XipLlw.vdtgTYO-DNtc5nVTUnorDWfHLCk';

bot.on('ready', () =>{
console.log('Fn Bot is ready to go')
})


// Codes

bot.on('message', msg=>{
    if(msg.content === "renegade raider"){
        msg.reply('This Only Works In Lobby Heres the Code For Renegade Raider : https://pastebin.com/h4Zjn8K0');
    }
})

bot.on('message', msg=>{
    if(msg.content === "aerial assault trooper"){
        msg.reply('This Only Works In Lobby Heres the Code For Aerial Assault Trooper : https://pastebin.com/QU4ZksMe');
    }
})

bot.on('message', msg=>{
    if(msg.content === "recon expert"){
        msg.reply('This Only Works In Lobby Heres the Code For Recon Expert : https://pastebin.com/mhkjBVWT');
    }
})

bot.on('message', msg=>{
    if(msg.content === "ghoul trooper"){
        msg.reply('This Only Works In Lobby Heres the Code For *Pink* Ghoul trooper : https://pastebin.com/4VLbW2Kv');
    }
})

bot.on('message', msg=>{
    if(msg.content === "skull trooper"){
        msg.reply('Still working on Purple Skull trooper, Sorry!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "black knight"){
        msg.reply('This Only Works In Lobby Heres the Code For Black knight : https://pastebin.com/8wEpWKkC');
    }
})




bot.login(token);
