const { EmbedBuilder } = require('discord.js');

module.exports.run = (client, message) => {
	const target = message.mentions.users.first();
	if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('You coudn\'t ban that member!');
	const modlogch = client.channels.cache.get('996785753348649101');
	const msgreason = message.content.slice(5);

	if (target) {
		const memberTarget = message.guild.members.cache.get(target.id);
		memberTarget.ban();
		message.channel.send('User has been Banned');
		const banEmbed = new EmbedBuilder()
			.setTitle('New User Ban.')
			.setColor('Green')
			.setDescription(`Reason And User: ${msgreason}`);

		modlogch.send({ embeds: [banEmbed] });
	}
};