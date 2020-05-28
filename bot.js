const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs');
const ms = require("ms"); 
const mysql = require("mysql");
let config = require('./config.json');
let prefix = config.prefix;

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const loadCommands = module.exports.loadCommands = (dir = "./cmds/") => {
    fs.readdir(dir, (error, files) => {                 
        if (error) return console.log(error); 
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
        console.log(`Загружено ${jsfiles.length} комманд`);                   
        files.forEach((file) => {   
            if (fs.lstatSync(dir + file).isDirectory()) {
                loadCommands(dir + file + "/");
                return;
            }

            delete require.cache[require.resolve(`${dir}${file}`)];

            let props = require(`${dir}${file}`);

            bot.commands.set(props.command.name, props);

            if (props.command.aliases)  props.command.aliases.forEach(alias => { 
                bot.aliases.set(alias, props.command.name); 
            });
        });
    });
};
loadCommands();

// mysql
var consql = {
    host: process.env.HOST_MYSQL,
    user: process.env.LOGIN_MYSQL,
    password: process.env.PASSWORD_MYSQL,
    database: process.env.DATABASE_MYSQL
};

var connection;
 function handleDisconnect() {
    connection = mysql.createConnection(consql); 

    connection.connect(function(err) {              
        if(err) {                                     
          console.log('error when connecting to db:', err);
          setTimeout(handleDisconnect, 2000); 
        }                                    
      });  
      connection.on('error', function(err) {
        //console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
          handleDisconnect();                         
        } else {                                      
          throw err;                                  
        }
      });
    }
    handleDisconnect();

bot.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  let command;

   if (bot.commands.has(cmd)) {
    command = bot.commands.get(cmd);
   } else if (bot.aliases.has(cmd)) {
    command = bot.commands.get(bot.aliases.get(cmd));
   }

   if (!message.content.startsWith(prefix)) return;


   if (command) {
    if (message.author.id !== "294844223675564034" && !command.command.enabled) return message.reply("извините. Команда была отключена!");
    await message.react("👍");
   }
   
   try {
    command.run(bot, message, args, connection);
   } catch (e) {
   }
});
   
bot.on('ready', () => {
  console.log('Запущен, сэр!'); 
  bot.user.setPresence({
         status: "online",
         game: {
             name: "нервы Фокса",
             url: "https://www.youtube.com/watch?v=5iYY-Lyr3DY",
             type: "STREAMING"
         }
     }); 
});


bot.on('guildMemberAdd', member => {
    connection.query(`SELECT * FROM mute WHERE id = '${member.user.id}'`, (err, rows) => {
        if(rows.length < 1) {
            console.log(`опа, новый участник(${member.user.id})`);     
         } else {
          let mutetime = rows[0].time;
          let mutecause = rows[0].cause;
          let mutetimerole = member.guild.roles.find('name', "мут");
          member.addRole(mutetimerole);
          console.log('У ' + member.user.tag + ' был мут!');


          let channellog = bot.channels.get("712602863293169695");
          let pizdez = new Discord.RichEmbed()
          .setTitle("Автомут")
          .setTimestamp()
          .addField("Был замучен:", `<@${member.user.id}>`, true)
          .addField("Был выдан:", `Автосистемой`, true)
          .addField("Время мута:", `${ms(mutetime)}`, true)
          .addField("Причина:", `Пользователь перезашёл с мутом\n **Причина мута: ${mutecause}**`, false);
          channellog.send({embed:pizdez});
      
          setTimeout(function(){
            member.removeRole(mutetimerole);
            let mutesqlq = `DELETE FROM mute WHERE id = '${tomute.id}'`  
            connection.query(mutesqlq);
          },mutetime);
          };
    });
});

bot.login(process.env.BOT_TOKEN);   