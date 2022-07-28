module.exports.run = (client, message) => {
	const userPermissions = ['MANAGE_SERVER', 'ADMINISTRATOR'];
	if (!message.member.permissions.has(userPermissions)) return message.channel.send('You Do Not Have Permission To Do That!');
	const sertit = message.content.slice(9);
	message.guild.setName(sertit).then(message.channel.send(`The servers title has been set to ${sertit}`));
};