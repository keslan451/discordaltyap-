const Discord = require("discord.js");
const request = require('request');
exports.run = async (client, message, args) => {
const ayarlar = require('../ayarlar.json')
 
let turkbot = args[0];
let kanal = `https://discordapp.com/api/v6/channels/${message.channel.id}`
if (turkbot > 21600) return message.channel.send(" Süre Limiti Maksimum 21600 (6 Saat) Saniye Olabilir.")
if(isNaN(turkbot)) return message.reply(" Yavaş Mod Limitini Bir Sayı Biçiminde Giremlisin!")
request({
url: kanal,
method: "PATCH",
json: {
rate_limit_per_user:turkbot
},
headers: {
"Authorization": `Bot ${ayarlar.token}`
}
})
if(turkbot == 0) return message.reply('Yavaş mod kaldırıldı!');
return message.channel.send(`✅ | Yavaş Mod ${turkbot} Olarak Ayarlandı`);
};
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["yavaş-mod"],
  permLevel: 1
};
exports.help = {
  name: 'yavaşmod',
  description: 'Yavaşmod',
  usage: 'yavaşmod'
};