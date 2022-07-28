// EmbedBuilder
const { EmbedBuilder } = require('discord.js');

// module.exports.run

module.exports.run = (client, message, args) => {
	if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('You do not have permission to use this command');

	if (!args.length) return message.channel.send('> Usage: .announce <title> <message> <-ping ?>');

    let mention;

	const channel = client.channels.cache.get('997883596704587866');

	if (!channel) return message.reply('Please specify a channel!');

	if (!args[1]) return message.reply('Please specify a message to announce');

	// mentions
	if (args.some((val) => val.toLowerCase() === '-ping')) {
		for (let i = 0; i < args.length; i++) {
			if (args[i].toLowerCase() === '-ping') args.splice(i, 1);
		}

		mention = true;
	}
	else {mention = false;}

	if (mention === true) channel.send('@everyone');
	const embed = new EmbedBuilder()
		.setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
		.setTitle((args.slice(2)).join(' '))
		.setDescription(args.slice(1).join(' '))
		.setTimestamp()
		.setColor('Blue');
	channel.send({ embeds: [embed] });
};
