const Discord = module.require("discord.js");
const fs = require("fs");
const ms = require("ms"); 

exports.run = async (bot, message, args) => { 

    if(!message.member.roles.some(r=>["Помощь проекта", "Команда сервера", "Менеджер проекта", "Discord-admin", "Куратор DarkRP", "Куратор SCP-RP", "Куратор MilitaryRP"].includes(r.name))) return message.reply('Отказано в доступе.');
    if(!bUser) return message.channel.send("нет такого пользователя!");
    if (!(args[1])) return message.reply("Не верно указано время, напиши так: ```!бан <юзер упоминание> <время> <причина>```");


    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let bReason = args.slice(2).join(" ") || "--no reason--";


    let bantime = args[1];
    if(!bantime) return message.reply("время бана не указано.");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Выдан бан")
    .setTimestamp()
    .addField("Забанен:", `<@${bUser.id}>`, true)
    .addField("Администратор:", `<@${message.author.id}>`, true);
    if(bantime == 0){ 
        banEmbed.addField("Время бана:", `Навсегда`, true);
    } else {
        banEmbed.addField("Время бана:", `${ms(ms(bantime))}`, true);
    };
    banEmbed.addField("Причина:", bReason, false);

    let unbanEmbed = new Discord.RichEmbed()
    .setTimestamp()
    .addField("Был снят **бан** из-за истечения срока:", `<@${bUser.id}>`, true);

    let banchannel = message.guild.channels.get("712602863293169695");
    if(!banchannel) return message.channel.send("Сбились настройки логирования, проверьте пожалуйста их.");

    message.delete();
    message.guild.member(bUser).ban(bReason);

    banchannel.send({embed:banEmbed});
    //message.channel.send('Пользователь' + `<@${bUser.id}>` + ' был забанен по причине: **' + `${bReason}` + '**');

if(bantime == 0) return;
setTimeout(function(){
message.guild.member(bUser).unban("Бан закончился");
mutechannel.send({embed:unbanEmbed}); 
},ms(bantime));
};


module.exports.command = {
  name: 'ban',
  aliases: ["забанить", "баннед", "банхамер", "бан"],
  description: "Выдаёт бан нахуй, чо доебался?",
  usage: "admincommand",
  category: "admin",
  enabled: true
}; 