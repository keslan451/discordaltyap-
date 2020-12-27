const Discord = require('discord.js')
exports.run = (client, message, args) => {
  
  const Mesaj = new Discord.RichEmbed()
    .setColor('#000000')
    .setDescription(`${args[0]} sayısının karesi: ${args[0] * args[0]}`)
  
  if (args[0]) message.channel.send(Mesaj)
  
  if (!args[0]) message.channel.send('Lütfen bir sayı giriniz.')
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kare-bul'],
  permLevel: 5
}

exports.help = {
  name: 'Kare'
}