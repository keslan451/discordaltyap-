const Discord = require("discord.js");
exports.run = async function(client, message, args) {

if (!message.member.roles.find(r => r.name === "Bu Rolü Kullana Bilecek Yetkili Rolün ID'si",))
    return message.reply(`**Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin.**`);
  let yasak = await message.guild.fetchBans();
  yasak = yasak.array(); 
  yasak.forEach(function(ban) {
    message.guild.unban(ban.id);

        message.channel.send(`:gif36: ${yasak} Adlı Tüm Kullanıcıların Yasağı Kaldırıldı.**`);

  });
            
   
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['toplu-ban-kaldır'],
  permLevel: 0
};

exports.help = {
  name: 'toplubankaldır',
  description: 'Vortex Sunucusu Toplu Ban Kaldırma Komutudur.',
  usage: 'toplubankaldır'
}