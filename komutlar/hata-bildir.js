const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım : t+hata (bulduğunuz hata)')
const embed = new Discord.RichEmbed()
.setColor('#00ff00')
.setDescription('Bildiriniz başarıyla iletildi  \nEn Yakın Zamanda Destek Sunucumuzdaki #❕-yardım  Kanalından Cevap Vereceğiz  \n[Destek Sunucumuza Katılmak İçin](https://discord.gg/7yVX2B8GTa)')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("#ff0009")
.setDescription(`**${message.author.tag}** adlı kullanıcının **bildirisi ;**`)
.addField(`:envelope: **Gönderen Kişinin Bilgileri**`, `:white_small_square:Kullanıcı ID: ${message.author.id}\n:white_small_square:Kullanıcı Adı: ${message.author.username}\n:white_small_square:Kullanıcı Tagı: ${message.author.discriminator}`)
.addField(":pencil: **Gönderilen Hatalı/Buglu Kod Mesajı**", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('782305555875889222').send(embed2); // Kanal ID 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['hata'],
  permLevel: 0
}

exports.help = {
    name: 'hata',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'hata <hata>'
}