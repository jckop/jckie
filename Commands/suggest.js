const { EmbedBuilder } = require('discord.js');


module.exports.run = (client, message) => {

	const suggestionch = client.channels.cache.get('997215542991663184');

	const msgsug = message.content.slice(9);
	if (!mssug) return message.channel.send(`No suggestion!`);
	const suggestionEmbed = new EmbedBuilder()
		.setAuthor({ name: `${message.member.displayName}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
		.setTitle('New Suggestion Made')
		.setColor('Green')
		.setDescription(`${msgsug}`);


	const addsuggestionEmbed = new EmbedBuilder()
		.setTitle('New Suggestion Added')
		.setColor('Green')
		.setDescription(`${msgsug}`);

	message.channel.send({ embeds: [addsuggestionEmbed] });
	suggestionch.send({ embeds: [suggestionEmbed] });
};