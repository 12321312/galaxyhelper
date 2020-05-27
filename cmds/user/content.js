const Discord = module.require("discord.js");
const fs = require("fs");
exports.run = async (bot, message, args) => { 
    message.reply('**ссылки на скачивание контента наших серверов:**\n`Контент DarkRP` - https://steamcommunity.com/sharedfiles/filedetails/?id=1258532420\n`Контент SCP-RP` - https://steamcommunity.com/workshop/filedetails/?id=1575404086\n`Контент MilitaryRP` - https://steamcommunity.com/sharedfiles/filedetails/?id=2043670984');
};
module.exports.command = {
    name: 'content',
    aliases: ["контент", "еррор", "еррорки"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand", 
    category: "user",
    enabled: true
};  