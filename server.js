const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.on("message", msg => {
  const kzgn = client.emojis.get("512302904141545509");
  const embedlul = new Discord.RichEmbed()
    .setColor(0x00ae86)
    .setDescription(msg.author + " Reklam Yasak Bunu Bilmiyormusun!");

  const embedlulz = new Discord.RichEmbed()
    .setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
    .setColor(0x00ae86)
    .setDescription(
      "t+kick <kişi> veya t+ban <kişi> komutlarını kullanarak onu sunucudan uzaklaştırabilirsin!"
    )
    .addField("Kullanıcının mesajı:", "**" + msg.content + "**");

  if (
    msg.content
      .toLowerCase()
      .match(/(discord\.gg\/)|(discordapp\.com\/invite\/) (htpp)/g) &&
    msg.channel.type === "text" &&
    msg.channel
      .permissionsFor(msg.guild.member(client.user))
      .has("MANAGE_MESSAGES")
  ) {
    if (msg.member.hasPermission("BAN_MEMBERS")) {
      return;
    } else {
      msg
        .delete(30)
        .then(deletedMsg => {
          deletedMsg.channel.send(embedlul);
          msg.guild.owner.send(embedlulz).catch(e => {
            console.error(e);
          });
        })
        .catch(e => {
          console.error(e);
        });
    }
  }
});

const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const youtube = new YouTube("AIzaSyCkT_L10rO_NixDHNjoAixUu45TVt0ES-s");
const quee = new Map();

client.on(`guildMemberAdd`, async member => {
  var maze = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(":inbox_tray: Sunucuya yeni bir üye katıldı!")
    .setThumbnail(member.user.avatarURL)
    .setDescription(
      "Hoşgeldin " +
        member +
        " sunucuya hoşgeldin, seninle beraber " +
        member.guild.memberCount +
        " kişiye ulaştık."
    )
    .addField(`:id: Üye ID:`, `${member.id}`, true)
    .addField(`:octagonal_sign: Üye Adı`, `${member}`, true);
  client.channels.get("773547288399446048").send(maze); //Maze yaptı çalanı lucifer yakar, sağlığınız zarar görebilir ^^
});

client.on("guildRemove", async guild => {
  client.channels
    .get("KANAL İD")
    .send(`${guild}, isimli sunucudan atıldım.. :(`);
});

client.on("guildCreate", async guild => {
  client.channels
    .get("KANAL İD")
    .send(`${guild}, isimli sunucuya eklendim!`);
});

client.on("message", message => {
  if (message.content === `<@${client.user.id}>`) {
    message.reply("Prefixim : `PREFİXİNİZ`");
  }
});

client.on("message", m => {
  if (m.channel.id !== "KANAL İD") {
    //Sadece Resim Atılacak Kanal İDSİ
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "sa") {
    await msg.react("🇦");
    await msg.react("🇸");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "BOTUNUZUN ADI prefixin ne") {
    msg.reply("Buyur prefixim işte bu ---> `t+`");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "BOTUNUZUN ADI aktif misin") {
    msg.reply("Evet aktifim komutları görmek için t+yardım yazman yeterli!");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "hadi baskın") {
    msg.reply("Allahuakbar!");
  }
});

client.on("guildCreate", async guild => {
  let devtr = guild.channels.random();

  devtr.send(
    ":star: | **Beni Eklediğiniz İçin Teşekkürler! | :star: \n\n `=>` **t+yardım** yazarak komutlarıma erişebilirsiniz!"
  );
});

client.on("message", async message => {
  const ms = require("ms");
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "rol-kur") {
    if (
      message.guild.channels.find(channel => channel.name === "Bot Kullanımı")
    )
      return message.channel.send(" Bot Paneli Zaten Ayarlanmış.");
    message.channel.send(`Rol Kurulumu Başlatıldı`);
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        " Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.",
        {
          max: 1,
          time: 10000,
          errors: ["time"]
        }
      );

    message.guild.createRole({
      name: "?? | Sunucu Sahip",
      color: "ff0000",
      permissions: ["ADMINISTRATOR"]
    });

    message.guild.createRole({
      name: "?? | Genel Sorumlu",
      color: "49ff00",
      permissions: [
        "MANAGE_GUILD",
        "MANAGE_ROLES",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MANAGE_MESSAGES",
        "MANAGE_NICKNAMES",
        "KICK_MEMBERS"
      ]
    });

    message.guild.createRole({
      name: "?? | Yönetici",
      color: "ffb400",
      permissions: [
        "MANAGE_GUILD",
        "MANAGE_ROLES",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MANAGE_MESSAGES",
        "MANAGE_NICKNAMES"
      ]
    });

    message.guild.createRole({
      name: "?? | Partner Sorumlusu",
      color: "#FF4D00"
    });

    message.guild.createRole({
      name: "?? | Booster",
      color: "#FF77FF"
    });

    message.guild.createRole({
      name: "?? | Developer",
      color: "#FFCC00"
    });

    message.guild.createRole({
      name: "?? | Family",
      color: "#FF8C69"
    });

    message.guild.createRole({
      name: "? | Partner",
      color: "#002FA7"
    });

    message.guild.createRole({
      name: "?? | Kız",
      color: "d300ff"
    });

    message.guild.createRole({
      name: "?? | Erkek",
      color: "#0000FF"
    });

    message.guild.createRole({
      name: "?? | Discord Bot",
      color: "0006ff"
    });

    message.channel.send(" Gerekli Roller Açıldı ");
  }
});

client.on("guildMemberAdd", async devtr => {
  let sunucu = `SUNUCU İD`; //Verilcek Rolün Olduğu Sunucunun ID'sini girin.
  let rol = `ROL İD`; //Verilcek Rol ID
  let kanal = `KANAL İD`; //Fake Bildirim Log Kanalı ID.
  let gün = 15; //Bu günden önce giren hesaplar ceza yer.
  let hesap = moment
    .duration(new Date().getTime() - devtr.user.createdAt.getTime())
    .format("DD");
  if (gün < hesap)
    return client.channels
      .get(kanal)
      .send(
        `**${devtr.user.tag}** isimli kullanıcı sunucuya giriş yaptı, hesabı **${gün}** günden sonra açıldığı için kullanıcıya **dokunulmadı**.`
      );
  devtr.guild.members.get(devtr.id).roles.forEach(r => {
    devtr.guild.members.get(devtr.id).removeRole(r);
  });

  devtr.addRole(rol);
  client.channels
    .get(kanal)
    .send(
      `**${
        devtr.user.tag
      }** adlı kullanıcı sunucuya giriş yaptı, hesabı **${gün}** günden önce açıldığı için kullanıcıya \`${
        client.guilds.get(sunucu).roles.get(rol).name
      }\` adlı rol **verildi**.`
    );
});

client.on("message", msg => {
  var dm = client.channels.get("KANAL İD"); //mesajın geleceği kanal idsi//
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    const botdm = new Discord.RichEmbed()
      .setTitle(`${client.user.username} Dm`)
      .setTimestamp()
      .setColor("BLUE")
      .setThumbnail(`${msg.author.avatarURL}`)
      .addField(":boy: Gönderen ", msg.author.tag)
      .addField(":id:  Gönderen ID :", msg.author.id)
      .addField(":globe_with_meridians: Gönderilen Mesaj", msg.content);

    dm.send(botdm);
  }
  if (msg.channel.bot) return;
});

client.on("message", async message => {
  const ms = require("ms");
  const args = message.content
    .slice(ayarlar.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur") {
    if (
      message.guild.channels.find(channel => channel.name === "Bot Kullanımı")
    )
      return message.channel.send(" Bot Paneli Zaten Ayarlanmış.");
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        " Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir."
      );
    message.channel.send(
      `Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`
    );
    message.channel
      .awaitMessages(response => response.content === "evet", {
        max: 1,
        time: 10000,
        errors: ["time"]
      })
      .then(collected => {
        message.guild.createChannel("|--|ÖNEMLİ KANALLAR|--|", "category", [
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"]
          }
        ]);

        message.guild
          .createChannel("?:page_with_curl:?kurallar", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|ÖNEMLİ KANALLAR|--|"
              )
            )
          );
        message.guild
          .createChannel("?:door:?gelen-giden", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|ÖNEMLİ KANALLAR|--|"
              )
            )
          );
        message.guild
          .createChannel("?:white_check_mark:?sayaç", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|ÖNEMLİ KANALLAR|--|"
              )
            )
          );
        message.guild
          .createChannel("?:floppy_disk:?log-kanalı", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|ÖNEMLİ KANALLAR|--|"
              )
            )
          );
        message.guild
          .createChannel("?:loudspeaker:?duyuru-odası", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|ÖNEMLİ KANALLAR|--|"
              )
            )
          );
      })
      .then(collected => {
        message.guild.createChannel("|--|GENEL KANALLAR|--|", "category", [
          {
            id: message.guild.id
          }
        ]);
        message.guild
          .createChannel(`?:bulb:?şikayet-ve-öneri`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|GENEL KANALLAR|--|"
              )
            )
          );
        message.guild
          .createChannel(`????pre-arama-odası`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|GENEL KANALLAR|--|"
              )
            )
          );
        message.guild
          .createChannel(`????görsel-içerik`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|GENEL KANALLAR|--|"
              )
            )
          );
        message.guild
          .createChannel(`????bot-komutları`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|GENEL KANALLAR|--|"
              )
            )
          );
        message.guild
          .createChannel(`????sohbet`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|GENEL KANALLAR|--|"
              )
            )
          );

        message.guild
          .createChannel(`??»Kurucu Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|SES KANALLARI|--|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            let role2 = message.guild.roles.find("name", "Kurucu");

            c.overwritePermissions(role, {
              CONNECT: false
            });
            c.overwritePermissions(role2, {
              CONNECT: true
            });
          });
        message.guild.createChannel("|--|SES KANALLARI|--|", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`??»Yönetici Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|SES KANALLARI|--|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            let role2 = message.guild.roles.find("name", "Kurucu");
            let role3 = message.guild.roles.find("name", "Yönetici");
            c.overwritePermissions(role, {
              CONNECT: false
            });
            c.overwritePermissions(role2, {
              CONNECT: true
            });
            c.overwritePermissions(role3, {
              CONNECT: true
            });
          });

        message.guild
          .createChannel(`??»Sohbet Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|SES KANALLARI|--|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
              CONNECT: true
            });
          });

        message.guild.createChannel("|--|OYUN ODALARI|--|", "category", [
          {
            id: message.guild.id
          }
        ]);
        message.guild
          .createChannel(`:video_game:»LOL`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|OYUN ODALARI|--|"
              )
            )
          );
        message.guild
          .createChannel(`??»ZULA`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|OYUN ODALARI|--|"
              )
            )
          );
        message.guild
          .createChannel(`??»COUNTER STRİKE`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|OYUN ODALARI|--|"
              )
            )
          );
        message.guild
          .createChannel(`??»PUBG`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|OYUN ODALARI|--|"
              )
            )
          );
        message.guild
          .createChannel(`??»FORTNİTE`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|OYUN ODALARI|--|"
              )
            )
          );
        message.guild
          .createChannel(`??»MİNECRAFT`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|OYUN ODALARI|--|"
              )
            )
          );
        message.guild
          .createChannel(`??»ROBLOX`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|OYUN ODALARI|--|"
              )
            )
          );
        message.guild
          .createChannel(`??»WOLFTEAM`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|--|OYUN ODALARI|--|"
              )
            )
          );
        message.guild.createRole({
          name: "Kurucu",
          color: "RED",
          permissions: ["ADMINISTRATOR"]
        });

        message.guild.createRole({
          name: "Yönetici",
          color: "BLUE",
          permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
          ]
        });

        message.guild.createRole({
          name: "Moderatör",
          color: "GREEN",
          permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
          ]
        });

        message.guild.createRole({
          name: "V.I.P",
          color: "00ffff"
        });

        message.guild.createRole({
          name: "Üye",
          color: "WHITE"
        });

        message.guild.createRole({
          name: "Bot",
          color: "ORANGE"
        });

        message.channel.send("Gerekli Odalar Kuruldu!");
      });
  }
});

client.on("message", message => {
  if (message.content.toLowerCase() === "<@733628096405831710>") {
    message.delete();
    message.channel
      .send(message.author + ",  **Yapımcımı Etiketleme**")
      .then(message => message.delete(5000));
  }
});

client.on("message", msg => {
  if (client.ping > 2500) {
    let marefibölge = [
      "singapore",
      "eu-central",
      "india",
      "us-central",
      "london",
      "eu-west",
      "amsterdam",
      "brazil",
      "us-west",
      "hongkong",
      "us-south",
      "southafrica",
      "us-east",
      "sydney",
      "frankfurt",
      "russia"
    ];
    let yenibölge = marefibölge[Math.floor(Math.random() * marefibölge.length)];
    let sChannel = msg.guild.channels.find(c => c.name === "ddos-system");

    sChannel.send(
      `Sunucu'ya Saldırı Alğılandı \nSunucu Bölgesini Değiştirdim \n __**${yenibölge}**__  __**Sunucu Pingimiz**__ :` +
        client.ping
    );
    msg.guild
      .setRegion(yenibölge)
      .then(g => console.log(" bölge:" + g.region))
      .then(g => msg.channel.send("bölge **" + g.region + " olarak değişti"))
      .catch(console.error);
  }
});

client.on("message", async message => {
  if (message.channel.id === "753202643207323759") message.delete();
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on("message", msg => {
  if (msg.content.toLowerCase() === "sa") {
    if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
      msg.author.sendMessage("**Aleyküm Selam,  Hoş Geldin!**");
    } else {
      msg.reply("Aleyküm selam, hoş geldin ^^");
    }
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "selam") {
    if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
      msg.author.sendMessage("**Aleyküm Selam,  Hoş Geldin!**");
    } else {
      msg.reply("Aleyküm selam, hoş geldin ^^");
    }
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "sea") {
    if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
      msg.author.sendMessage("**Aleyküm Selam,  Hoş Geldin!**");
    } else {
      msg.reply("Aleyküm selam, hoş geldin ^^");
    }
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "selamun aleyküm") {
    if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
      msg.author.sendMessage("**Aleyküm Selam,  Hoş Geldin!**");
    } else {
      msg.reply("Aleyküm selam, hoş geldin ^^");
    }
  }
});

////////////////////////

client.on("guildMemberAdd", member => {
  let guild = member.guild;

  const channel = member.guild.channels.find("name", "giriş-çıkış");
  if (!channel) return;
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(":inbox_tray: | Sunucuya katıldı!")
    .setTimestamp();
  channel.sendEmbed(embed);
});

client.on("guildMemberRemove", member => {
  const channel = member.guild.channels.find("name", "giriş-çıkış");
  if (!channel) return;
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(":outbox_tray: | Sunucudan ayrıldı")
    .setTimestamp();
  channel.sendEmbed(embed);
});

////////////////////////

client.on("message", msg => {
  const uyarıembed = new Discord.RichEmbed()
    .setColor(0x00ae86)
    .setDescription(
      ":crown: " +
        msg.author +
        "Reklam Yapmayı Kes Seni Yetkililere Söyledim :angry: :rage: "
    );

  const dmembed = new Discord.RichEmbed()
    .setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
    .setColor(0x00ae86)
    .setDescription(
      " " +
        msg.author.tag +
        " Sunucunda Reklam Yapıyor  t+ban Komutu İle Kişiyi Banlayabilirsin "
    )
    .addField("Kullanıcının mesajı:", "**" + msg.content + "**");

  if (
    msg.content
      .toLowerCase()
      .match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) &&
    msg.channel.type === "text" &&
    msg.channel
      .permissionsFor(msg.guild.member(client.user))
      .has("MANAGE_MESSAGES")
  ) {
    if (msg.member.hasPermission("BAN_MEMBERS")) {
      return;
    } else {
      msg
        .delete(30)
        .then(deletedMsg => {
          deletedMsg.channel.send(uyarıembed);
          msg.guild.owner.send(dmembed).catch(e => {
            console.error(e);
          });
        })
        .catch(e => {
          console.error(e);
        });
    }
  }
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
