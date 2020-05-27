const Discord = module.require("discord.js");
const fs = require("fs");
exports.run = async (bot, message, args) => { 
    message.reply('**актуальные ссылки на набор администрации серверов:**\n`DarkRP` - https://svyanov.com/redirect?s=2\n`SCP-RP` - https://svyanov.com/redirect?s=7\n`MilitaryRP` - https://vk.cc/auIPcX\n\n`Набор на пост ивентера` - https://vk.cc/auIPro');
};
module.exports.command = {
    name: 'nabor',
    aliases: ["набор", "заявки", "наборбл"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand", 
    category: "user",
    enabled: true
};  