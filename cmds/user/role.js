const Discord = module.require("discord.js");
const fs = require("fs");
exports.run = async (bot, message, args) => { 
    message.reply('**Правила серверов и discord:**\n`DarkRP` - https://svyanov.com/redirect?s=0\n`Правила SCP-RP` - https://svyanov.com/redirect?s=6\n`Правила MilitaryRP` - https://svyanov.com/redirect?s=8\n`Правила Discord` - https://docs.google.com/document/d/1DeTwuIwS6GY8A9mp7J1gD304meQ8DlS2-yxZmDUEleo');
};
module.exports.command = {
    name: 'role',
    aliases: ["правила", "правило", "правилабл"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand",  
    category: "user",
    enabled: true
};  