const Discord = require('discord.js');
exports.run = (client, message) => {
      const random = Math.floor(Math.random() * 100) + 1
      message.channel.send(`Efkarınız **%${random}**`)
   } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["efkar-ölç"],
 permLevel: 0
}
exports.help = {
 name: 'efkarÖLÇER',
 description: 'EfkarÄ±nÄ±zÄ± Ã–lÃ§er ',
 usage: 'efkar'
};