const Discord = module.require("discord.js");
const fs = require("fs");
exports.run = async (bot, message, args) => { 
    if(!message.member.roles.some(r=>["Помощь проекта", "Команда сервера", "Менеджер проекта", "Discord-admin", "Куратор DarkRP", "Куратор SCP-RP", "Куратор MilitaryRP"].includes(r.name))) return message.reply('Отказано в доступе.');
    if(!bUser) return message.channel.send("нет такого пользователя!");

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let bReason = args.slice(1).join(" ") || "--no reason--";

    let banEmbed = new Discord.RichEmbed()
    .setTitle("Выдан бан")
    .setTimestamp()
    .addField("Забанен:", `${bUser}`, true)
    .addField("Администратор:", `<@${message.author.id}>`, true)
    .addField("Канал:", message.channel, true)
    .addField("Причина:", bReason, false);

    let banchannel = message.guild.channels.get("712602863293169695");
    if(!banchannel) return message.channel.send("Сбились настройки логирования, проверьте пожалуйста их.");

    message.delete();
    message.guild.member(bUser).ban(bReason);

    banchannel.send({embed:banEmbed});
    //message.channel.send('Пользователь' + `<@${bUser.id}>` + ' был забанен по причине: **' + `${bReason}` + '**');

};


module.exports.command = {
  name: 'ban',
  aliases: ["забанить", "баннед", "банхамер", "бан"],
  description: "Выдаёт бан нахуй, чо доебался?",
  usage: "admincommand",
  category: "admin",
  enabled: true
}; 