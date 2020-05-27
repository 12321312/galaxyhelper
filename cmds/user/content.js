const Discord = module.require("discord.js");
const fs = require("fs");
exports.run = async (bot, message, args) => { 
    message.reply('**ссылки на скачивание контента наших серверов:**\n`Контент DarkRP` - https://vk.cc/8v2keP\n`Контент SCP-RP` - https://vk.cc/8SO3ho\n`Контент MilitaryRP` - https://vk.cc/auIPwZ');
};
module.exports.command = {
    name: 'content',
    aliases: ["контент", "еррор", "еррорки"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand", 
    category: "user",
    enabled: true
};  