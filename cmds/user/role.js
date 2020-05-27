const Discord = module.require("discord.js");
const fs = require("fs");
exports.run = async (bot, message, args) => { 
    message.reply('Правила DarkRP - https://svyanov.com/redirect?s=0\nПравила SCP-RP - https://svyanov.com/redirect?s=6\nMilitaryRP - https://docs.google.com/document/d/1SfuAcAYXILoBPwAewMYFpJUqA6KWNxbMnISZb3B0JaE/edit#heading=h.28yu4yk7jaag\nDiscord - https://docs.google.com/document/d/1DeTwuIwS6GY8A9mp7J1gD304meQ8DlS2-yxZmDUEleo/edit?usp=drivesdk');
};
module.exports.command = {
    name: 'role',
    aliases: ["правила", "правило", "правилабл"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand", 
    category: "user",
    enabled: true
};  