const { EmbedBuilder } = require('discord.js');

module.exports.run = (client, message) => {
	if (!message.member.permissions.has('ADMINISTIRATOR')) return;
	const title = message.content.slice(
		message.content.indexOf('<') + 1,
		message.content.lastIndexOf('>'),
	);
	const description = message.content.slice(
		message.content.indexOf('[') + 1,
		message.content.lastIndexOf(']'),
	);

	if (!description) return;
	if (!title) return;
	if (!description && !title) return;

	const announcech = client.channels.cache.get('997883596704587866');
	const embed = new EmbedBuilder()
		.setAuthor({ name: `${message.member.displayName}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
		.setTitle(`${title}`)
		.setColor('Green')
		.setDescription(`${description}`)
		.setFooter({ text: 'Jckie' });

	announcech.send({ embeds: [embed] });
};