/* eslint-disable no-undef */
const { EmbedBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports.run = (client, message) => {
	const embed = new EmbedBuilder()
		.setTitle('Ping Roles')
		.setDescription(`
        To get these roles just click on the reaction corresponding to the name!\n\n
        📢 - Announcment Ping\n
        🎉 - Event ping\n
        🤖 - Bot Ping
        `);
	const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('primary')
				.setLabel('Announcment Ping')
				.setStyle(ButtonStyle.Primary),
			new ButtonBuilder()
				.setCustomId('secondary')
				.setLabel('Event Ping')
				.setStyle(ButtonStyle.Secondary),
			new ButtonBuilder()
				.setCustomId('third')
				.setLabel('Bot Update Ping')
				.setStyle(ButtonStyle.Success),
		);

	message.channel.send({ embeds: [embed], components: [row] });

	const filter = i => i.customId === 'primary';

	const collector = message.channel.createMessageComponentCollector({ filter });

	collector.on('collect', async (i) => {
		i.member.roles.add(message. guild. roles. cache. find(r => r. id === '1002552324109115392')).then(message.channel.send('I Gave you a role!'));
	});

	//	const filter = (reaction) => {
	// return ['🤖', '🎉', '📢'].includes(reaction.emoji.name);
	// };

	//	if (reaction.emoji.name === '🤖') {
	// user.roles.add(message. guild. roles. cache. find(r => r. id === '1002553293546983444'));
	// }
	//	else if (reaction.emoji.name === '🎉') {
	// user.roles.add(message. guild. roles. cache. find(r => r. id === '1002552383060050010'));
	// }
	//	else {
	//			//user.roles.add(message. guild. roles. cache. find(r => r. id === '1002552324109115392'));
	// }
	// });
};