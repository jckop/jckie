const warnModel = require('../Models/warnModel.js');

module.exports.run = (client, message, args) => {
	const user = message.mentions.users.first();
	const reason = args.slice(1).join(' ') || 'No Reason';
	message.channel.send(`Warned <@${user.id}> for ${reason}.`);
	const userPermissions = ['MANAGE_MESSAGES', 'ADMINISTRATOR'];
	new warnModel({
		userId: user.id,
		guildId: message.guildId,
		reason: reason,
		moderatorId: message.author.id,
		timestamp: Date.now(),
	}).save();
	if (!message.member.permissions.has(userPermissions)) return message.channel.send('You Do Not Have Permissions!');
	if (user.bot) return;
	user.send(`You Have Been Warned in ${message.guild.name} for ${reason}`);

	message.channel.send(`${user} has been warned for ${reason}`);
};