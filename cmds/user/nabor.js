const Discord = module.require("discord.js");
const fs = require("fs");
exports.run = async (bot, message, args) => { 
    let infore = new Discord.RichEmbed()
    .addField("Набор на пост администрации серверов:", '`DarkRP` - https://svyanov.com/redirect?s=2\n`SCP-RP` - https://svyanov.com/redirect?s=7\n`MilitaryRP` - https://vk.cc/auIPcX\n\n`Набор на пост ивентера` - https://vk.cc/auIPro' , true);
    message.reply({embed:infore});
};
module.exports.command = {
    name: 'nabor',
    aliases: ["набор", "заявки", "наборбл"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand", 
    category: "user",
    enabled: true
};  