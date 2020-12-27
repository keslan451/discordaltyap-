const Discord = require('discord.js');

exports.run = (client, msg, args) => {
  let türkbot = args.slice(0).join(' ');
        if (türkbot.length < 1) {
        return msg.reply('Kime kartopu atmak isterin ya isim yaz yada etiketle!');
            } else {
              msg.channel.send('<=====     :snowflake:')
              .then(nmsg => nmsg.edit('<=====    :snowflake:'))
.then(nmsg => nmsg.edit('<====    :snowflake:'))
              .then(nmsg => nmsg.edit('<====    :snowflake:'))
.then(nmsg => nmsg.edit('<===   :snowflake:'))
              .then(nmsg => nmsg.edit('<===   :snowflake:'))
.then(nmsg => nmsg.edit('<==  :snowflake:'))
              .then(nmsg => nmsg.edit('<==  :snowflake:'))
.then(nmsg => nmsg.edit('<= :snowflake:'))
              .then(nmsg => nmsg.edit('<= :snowflake:'))
.then(nmsg => nmsg.edit(':snowflake:'))
              .then(nmsg => nmsg.edit(':snowflake:'))
.then(nmsg => nmsg.edit(`${türkbot} artık :snowman: oldu.`));

       
      }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kar-topu"],
  permLevel: 0
};

exports.help = {
  name: 'kartopu'
}; 