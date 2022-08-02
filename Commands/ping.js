module.exports.run = (client, message) => {
	message.channel.send(`${Date.now() - message.createdTimestamp}ms`);
};