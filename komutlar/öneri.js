const Discord = require('discord.js')

exports.run = (client, message, args) => {
   let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: t+öneri (bot öneriniz)'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Öneriniz başarıyla iletildi  \nEn Yakın Zamanda Destek Sunucumuzdaki #❕-yardım  Kanalından Cevap Vereceğiz  \n[Destek Sunucumuza Katılmak İçin](https://discord.gg/7yVX2B8GTa)')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının tavsiyesi:`)
.addField(`**Kulanıcı Bilgileri**`, `**Kullanıcı ID**: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\n**Kullanıcı Tagı**: ${message.author.discriminator}`)
.addField("Tavsiye", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('782305555875889222').send(embed2); // Kanal ID

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['öneri'],
    permLevel: 0,
  kategori: "iletisim"
}

exports.help = {
    name: 'tavsiye',
    description: 'Bot geliştiricisine hataları raporlamayı/tavsiye vermeyi/öneri iletmeyi sağlar.',
    usage: 'tavsiye [bildiri]'
}