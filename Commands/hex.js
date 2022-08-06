const { EmbedBuilder, resolveColor } = require('discord.js');


module.exports.run = (client, message) => {
	const msghex = message.content.slice(5);
	const reg = /^#([0-9a-f]{3}){1,2}$/i;

	const test = reg.test(msghex);
	if (test !== true) return message.channel.send('INVALID HEX COLOR');
	if (!msghex) return message.channel.send('INVALID HEX COLOR');
	const embed = new EmbedBuilder()
		.setTitle(`${msghex}`)
		.setURL(`https://www.color-hex.com/color/${msghex}`)
		.setColor(resolveColor(`${msghex}`));

	message.channel.send({ embeds: [embed] }).then(message.channel.send('The website [colorhex](<https://color-hex.com>) has some issues with some hex colors so if you get sent to a invalid hex color page but the bot still sends the hex color, just ignore it')).catch(err => {
		console.log(err);
	});
};