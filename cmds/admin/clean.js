const Discord = module.require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => { 
if(!message.member.roles.some(r=>["Помощь проекта", "Команда сервера", "Менеджер проекта", "Discord-admin", "Куратор DarkRP", "Куратор SCP-RP", "Куратор MilitaryRP"].includes(r.name))) return message.reply('Отказано в доступе.');

let mention = message.mentions.users.first();
message.delete();
    if (!mention) {
if (!(args[0])) return message.reply('А сколько удалять то? \n Напиши: `!удалить <число>`');
if ((args[0]) >= 100) return message.reply('Больше 100 за раз не могу ;с');
const fetched = await message.channel.fetchMessages({limit: args[0]});

console.log(fetched.size + ' сообщения найдены, удаление...'); 
message.channel.send('Удалено `' + fetched.size + '` сообщений');            
message.channel.bulkDelete(fetched)
mutechannel.send({embed:clearmess})
.catch(error => message.channel.send(`Error: ${error}`)); 

} else {
  if (!(args[1])) return message.reply('А сколько удалять то? \n Напиши: `!удалить <упоминание> <число>`');
  if ((args[1]) >= 100)  return message.reply('Больше 100 за раз не могу ;с'); 
  let mention = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
  if (mention.roles.get("565899297187692544")) return message.reply('ботов, сука, не трогай');
  fetched = await message.channel.fetchMessages({limit: args[1]});
  fetched = fetched .filter(m => m.createdTimestamp >= Date.now() - 1179360000);
  if (mention) fetched = fetched.filter(m => m.author.id === mention.id || m.content === message.content);
  console.log(fetched.size + ' сообщения пользователя ' + `${mention.user.tag}` + ' найдены, удаление...'); 
  message.channel.send('Удалено `' + fetched.size + '` сообщений пользователя ' + `<@${mention.id}>`);       
  message.channel.bulkDelete(fetched)
  .catch(error => message.channel.send(`Error: ${error}`)); 
};
};
module.exports.command = {
    name: 'clear',
    aliases: ["очистить", "удалить", "стереть"],
    description: "Удаляет всё нахуй, чо доебался?",
    usage: "moders",
    category: "moders",
    enabled: true
}; 