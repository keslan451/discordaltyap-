const Discord = require('discord.js')
const ms = require('ms')

exports.run = async (client, message, args) => {
let Ad = args[0];
let Süre = args[1];
if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Yeterli yetkin bulunmamakta.')
if (!Ad) return message.reply('Kanalın İsmi Ne Olsun ?')
if (!Süre) return message.reply('Ne Kadar Açık Dursun ?')
let Kanal = await message.guild.createChannel(`${Ad}`, 'text')
message.channel.send(`Metin Kanalı Başarı İle Oluşturuldu!!`)
setTimeout(() => {
    message.guild.channels.get(Kanal.id).delete()
    message.channel.send(`Oluşturulan Metin Kanalı Süresi Dolduğundan Kanal Silindi`);
  }, ms(Süre));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['süreli-kanal'],
  permLevel: 0
};
exports.help = {
  name: 'geçici-kanal',
  description: '',
  usage: 'geçici-kanal'
};