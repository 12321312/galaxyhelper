const Discord = module.require("discord.js");
const fs = require("fs");
exports.run = async (bot, message, args) => { 
    let infore = new Discord.RichEmbed()
    .addField("**ссылки на скачивание контента наших серверов:**", '`Контент DarkRP` - https://vk.cc/8v2keP\n`Контент SCP-RP` - https://vk.cc/8SO3ho\n`Контент MilitaryRP` - https://vk.cc/auIPwZ' , true);
    message.reply({embed:infore});
};
module.exports.command = {
    name: 'content',
    aliases: ["контент", "еррор", "еррорки"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand", 
    category: "user",
    enabled: true
};  