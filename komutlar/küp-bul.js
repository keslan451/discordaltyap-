const Discord = require('discord.js')
exports.run = (client, message, args) => {
  
  const Mesaj = new Discord.RichEmbed()
    .setColor('#000000')
    .setDescription(`${args[0]} sayısının küpü: ${args[0] * args[0] * args[0]}`)
  
  if (args[0]) message.channel.send(Mesaj)
  
  if (!args[0]) message.channel.send('Lütfen bir sayı giriniz.')
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küp'],
  permLevel: 0,
  kategori: "eğlence"
}

exports.help = {
    name: 'küpünü-bul',
    description: 'Sayının küpünü bulur.',
    usage: 'küpünü-bul <sayı>',
}