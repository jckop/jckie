const { EmbedBuilder } = require('discord.js');

module.exports.run = async (client, message) => {
	const embed = new EmbedBuilder()
		.setTitle(`All of __${client.user.tag}__ commands!`)
		.setDescription(`Please Note That More Commands Will Be added in the future and some might not be added over here.`)
		.addFields(
			{ name: `Owner`, value: "`setname` `seticon` `announce` `addres`", inline: true },
			{ name: `Moderation`, value: "`warn` `warnings` `removewarn` `kick` `ban` `unban`", inline: true },
			{ name: `Fun`, value: "`say`" },
			{ name: `Miscellaneous`, value: "`suggest`", inline: true }
		)
		.setColor('Green')

	message.channel.send({ embeds: [embed] });
};