module.exports.run = (client, message) => {
	const userPermissions = ['MANAGE_SERVER', 'ADMINISTRATOR'];
	if (!message.member.permissions.has(userPermissions)) return message.channel.send('You Do Not Have Permission To Do That!');
	const iconurl = message.content.slice(9);
	if (!iconurl) return message.channel.send('no Icon!');
	message.guild.setIcon(iconurl).then(message.channel.send(`Set Icon To ${iconurl}
`));
};