const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Davet Menüsü",
              icon_url: "https://cdn.discordapp.com/avatars/495214808484806657/37b2db3f7519e024d25521ac272f7a0d.png?size=2048"
            },
			    "thumbnail": {
				 "url": "https://cdn.discordapp.com/avatars/495214808484806657/37b2db3f7519e024d25521ac272f7a0d.png?size=2048"
			},
            title: "",
            description: "[Davet Linkim](https://discord.com/oauth2/authorize?client_id=777498134828810272&scope=bot&permissions=8) \n[Destek Sunucusu](https://discord.gg/7yVX2B8GTa)",
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: " " + message.author.username + " "
            }
          }
        });
	    message.react("📝")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d', 'link', 'linkler'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gösterir',
  usage: 'davet'
};
