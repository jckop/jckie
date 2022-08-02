const { EmbedBuilder } = require('discord.js');


module.exports.run = (client, message) => {

	if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('You Do Not Have Valid Permissions!');

	const resourcech = client.channels.cache.get('1002549356735504494');

	const msglink = message.content.slice(7);

	const newResource = new EmbedBuilder()
		.setTitle('New Resource Made')
		.setColor('Green')
		.setDescription(`[Resource Link](${msglink})`)
		.addFields(
{ name: 'Made By - ', value: `<@${message.author.id}>`}
)


	const addresourceEmbed = new EmbedBuilder()
		.setTitle('New Resource Added')
		.setColor('Green')
		.setDescription(`[Resource Link](${msglink})`);

	message.channel.send({ embeds: [addresourceEmbed] });
	resourcech.send({ embeds: [newResource] });
};
