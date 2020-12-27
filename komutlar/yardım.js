const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const codemarefi= new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Türk Bot`, client.user.avatarURL) 
    .setDescription('**[Beni Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=777498134828810272&scope=bot&permissions=8)** | **[Destek Sunucumuz](https://discord.gg/7yVX2B8GTa)**')
    .setThumbnail(client.user.avatarURL)
    .addField('** EĞLENCE (57)**', '`adam-asmaca`, `ara-155`, `ascii`, `random-atatürk`, `atla`, `avatarım`, `efkarlan`, `aşk-ölç`, `balık-tut`, `bitcoin`, `casper`, `cool-resim`, `inek`, `deyim`, `efkar-ölç`, `el-yazı`, `emoji-yaz`, `espri`, `fake-yaz`, `fal`, `gif`, `galatasaray`, `hapishane`, `hava-durumu`, `herkese-benden-çay`, `ilginç-bilgi`, `kapak-laf`, `kar-topu`, `kaç-cm`, `korkut`, `korona-ol`, `link-kısalt`, `mc-başarım`, `mc-skin`, `mesaj-döndür`, `pixel`, `random-atasözü`, `rip`, `sunucu-pp`, `sigara-yak`, `simit-ye`, `sor`, `steam`, `stres-çarkı`, `ters-renk`, `wasted`, `wikipedia`, `winner`, `wwe-gif`, `yazı-tura`, `youtube-ara`, `yumruk`, `zar`, `zula`, `çekiç`, `şanslı-sayım`, `şifre`')
    .addField('** MODERASYON (22)**', '`ban-liste`, `ban-sorgu`, `ban`, `davet-sırası`, `davet-kur`, `ddos`, `duyuru`, `emoji-kur`, `forceban`, `herkese-dm`, `kanal-ismi-değiş`, `kick`, `çek`, `oy-kick`, `oylama`, `reklam-ara`, `rol-bilgi`, `rol-say`, `sil`, `sunucu-bilgi`, `sustur`, `süreli-kanal`, `süreli-ses-kanal`, `toplu-ban-kaldır`, `unban`, `yavaş-mod`, `yetkilerim`, `üyeler`')
    .addField('** BOT İLE İLGİLİ (12)**', '`davet`, `hata`, `hesapla`, `istatistik`, `kare-bul`, `karekök`, `küp`, `ping`, `uptime`, `çeviri`, `öneri`')
    .addField('** MÜZİK (1)**', '`türk-radyo`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(codemarefi).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yardım'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'MC-AT Yardım Menüsü',
      description: 'yardım',
};