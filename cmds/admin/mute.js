const Discord = module.require("discord.js");
const fs = require("fs");
const ms = require("ms"); 
exports.run = async (bot, message, args, connection) => { 
if(!message.member.roles.some(r=>["Помощь проекта", "Команда сервера", "Менеджер проекта", "Discord-admin", "Куратор DarkRP", "Куратор SCP-RP", "Куратор MilitaryRP"].includes(r.name))) return message.reply('Отказано в доступе.');
if (!(args[0])) return message.reply("Не верно указан пользователь, напиши так: ```!мут <юзер упоминание> <время> <причина>```");
if (!(args[1])) return message.reply("Не верно указано время, напиши так: ```!мут <юзер упоминание> <время> <причина>```");
let tomute = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
if(!tomute) return message.reply("такого участника нету");
if (tomute.roles.find('name', "мут")) return message.reply('он уже писать не может...');
// подключение к бд и поиск
connection.query(`SELECT * FROM mute WHERE id = '${tomute.id}'`, async (err, rows) => {
    if(rows.length < 1) {
let muterole = message.guild.roles.find('name', "мут");
let mreason = args.slice(2).join(" ") || "--no reason--";

if(!muterole) return message.reply("нет роли мута, сделай что-нибудь с этим или фоксу скажи");

message.delete();
// логирование
let mutechannel = message.guild.channels.get("712602863293169695");
if(!mutechannel) return message.channel.send("Сбились настройки логирования, проверьте пожалуйста их.");
// -----------
let mutetime = args[1];
if(!mutetime) return message.reply("время мута не указано.");

let muteEmbed = new Discord.RichEmbed()
.setDescription("Мут")
.setTimestamp()
.addField("Был замучен:", `${tomute}`, true)
.addField("Администратор:", `${message.author}`, true)
.addField("Канал:", message.channel, true)
.addField("Время мута:", `${ms(ms(mutetime))}`, true)
.addField("Причина:", mreason, false);

await(tomute.addRole(muterole.id));
message.channel.send('Пользователь' + `<@${tomute.id}>` + ' был замучен на `'+ `${ms(ms(mutetime))}` + '` по причине: **' + `${mreason}` + '**');
mutechannel.send({embed:muteEmbed}); 

let mutesql = `INSERT INTO mute (id, time, cause) VALUES ('${tomute.id}', '${ms(mutetime)}', '${mreason}')`
connection.query(mutesql);


setTimeout(function(){
    tomute.removeRole(muterole.id);
    let mutesqlq = `DELETE FROM mute WHERE id = '${tomute.id}';`  
    connection.query(mutesqlq);
},ms(mutetime));
}
});

 
};
module.exports.command = {
    name: 'mute',
    aliases: ["мут", "запретитьписать", "муте", "tempmute", "темпмуте"],
    description: "Выдаёт кик нахуй, чо доебался?",
    usage: "admincommand",
    category: "admin",
    enabled: true
}; 





