const { EmbedBuilder } = require('discord.js');


module.exports.run = (client, message, args) => {
	const target = message.mentions.users.first();
	if (!message.member.permissions.has('KICK_MEMBERS')) return;
	message.channel.send('You coudn\'t kick that member!');
	const modlogch = client.channels.cache.get('996785753348649101');
	if (!target) return message.channel.send('No User To Kick!');
	const msgreason = args.slice(1).join(" ")
	if (!msgreason) return message.channel.send('no Reason!');
	if (target) {
		const memberTarget = message.guild.members.cache.get(target.id);
		memberTarget.kick();
		message.channel.send('User has been kicked');
		const kickEmbed = new EmbedBuilder()
			.setTitle('New User Kick.')
			.setColor('Green')
			.addFields({
				name: 'Moderator', value: [message.author, message.author.id],
			})
			.setDescription(`Reason And User: ${msgreason}`);
		modlogch.send({ embeds: [kickEmbed] });
	}
	else if (!message.member.permissions.has('KICK_MEMBERS')) {
		message.channel.send('You coudn\'t kick that member!');
	}
};