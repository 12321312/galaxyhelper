const Discord = module.require("discord.js");
const fs = require("fs");
const ms = require("ms"); 

exports.run = async (bot, message, args,connection) => { 
if(!message.member.roles.some(r=>["Помощь проекта", "Команда сервера", "Менеджер проекта", "Discord-admin", "Куратор DarkRP", "Куратор SCP-RP", "Куратор MilitaryRP"].includes(r.name))) return message.reply('Отказано в доступе.');
if (!(args[0])) return message.reply("Не верно указан пользователь, напиши так: ```!унмут <юзер упоминание> <причина>```");
let tomute = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
if(!tomute) return message.reply("такого участника нету");
if (!tomute.roles.find('name', "мут")) return message.reply('Он не в муте, прикинь...'); 

connection.query(`SELECT * FROM mute WHERE id = '${tomute.id}'`, async (err, rows) => {

let unmuterole = message.guild.roles.find('name', "мут");
let unmreason = args.slice(1).join(" ") || "--no reason--";

let muteEmbed = new Discord.RichEmbed()
.setDescription("Мут снят принудительно")
.setTimestamp()
.addField("Снят мут с:", `${tomute}`, true)
.addField("Администратор:", `${message.author}`, true)
.addField("Причина:", unmreason, false);


let mutechannel = message.guild.channels.get("712602863293169695"); 
if(!mutechannel) return message.channel.send("Сбились настройки логирования, проверьте пожалуйста их.");

//message.channel.send('Пользователь' + `<@${tomute.id}>` + ' был размутен принудительно');
message.delete();
mutechannel.send({embed:muteEmbed}); 
tomute.removeRole(unmuterole.id);

let mutesremove = `DELETE FROM mute WHERE id = '${tomute.id}'`  
connection.query(mutesremove);
});     


};
module.exports.command = {
    name: 'unmute',
    aliases: ["унмут", "снятьмут", "unmute"],
    description: "Снимает ебанный мут, чо доебался?",
    usage: "admincommand",
    category: "admin",
    enabled: true
}; 