const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  var oyun = [
    "OYNUYOR KISMI (İSTEDİĞİNİZİ YAZABİLİRSİNİZ)",
    "OYNUYOR KISMI (İSTEDİĞİNİZİ YAZABİLİRSİNİZ)",
    "OYNUYOR KISMI (İSTEDİĞİNİZİ YAZABİLİRSİNİZ)",
    "OYNUYOR KISMI (İSTEDİĞİNİZİ YAZABİLİRSİNİZ)",
    "OYNUYOR KISMI (İSTEDİĞİNİZİ YAZABİLİRSİNİZ)",
    "OYNUYOR KISMI (İSTEDİĞİNİZİ YAZABİLİRSİNİZ)",
    "OYNUYOR KISMI (İSTEDİĞİNİZİ YAZABİLİRSİNİZ)"
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(
      oyun[random],
      "https://www.youtube.com/channel/UCefQXJPxd3YxXea-W-hq5RQ"
    );
  }, 2 * 5000); //DEĞİŞME SÜRESİ

  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Şuan aktifim ve tüm komutlarım başarı ile yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yaptım artık uçuşa hazırım!`
  );
  client.user.setStatus("online");
  client.user.setActivity(
    `${prefix}yardım + ${client.guilds.size} sunucu`
  );
  //console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  //console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};