const warnModel = require('../Models/warnModel.js');
const { EmbedBuilder } = require('discord.js');
module.exports.run = async (client, message) => {

	const user = message.mentions.users.first();


	const userWarnings = await warnModel.find({
		userId: user.id,
		guildId: message.guildId,
	});

	if (!userWarnings?.length) return message.channel.send(`${user} has no warnings in the server`);

	const embedDescription = userWarnings
		.map((warn) => {

			const moderator = message.guild.members.cache.get(warn.moderatorId) || 'Has Left';
			return [

				`warnId: ${warn._id}`,
				`Moderator: ${moderator || 'Has Left'}`,
				`User And Reason: ${warn.reason || 'None'}`,

			].join('\n');

		}).join('\n\n');

	const embed = new EmbedBuilder()
		.setTitle(`${user.tag}'s warnings`)
		.setDescription(embedDescription)
		.setColor('Red');

	message.channel.send({ embeds: [embed] });
};