const Discord = module.require("discord.js");
const fs = require("fs");
exports.run = async (bot, message, args) => { 
    let infore = new Discord.RichEmbed()
    .addField("**Актуальные ссылки на правила проекта:**", '`DarkRP` - https://svyanov.com/redirect?s=0\n`Правила SCP-RP` - https://svyanov.com/redirect?s=6\n`Правила MilitaryRP` - https://svyanov.com/redirect?s=8\n`Правила Discord` - https://vk.cc/auIPim' , true);
    message.reply({embed:infore});

};
module.exports.command = {
    name: 'role',
    aliases: ["правила", "правило", "правилабл"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand",  
    category: "user",
    enabled: true
};  