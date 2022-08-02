const { triggerWords } = require('../index.js');

module.exports.run = (client, message) => {
	const say = message.content.slice(5);
	if (message.author.bot) return;
	if (say.includes('.say')) return;
	if (say.includes(triggerWords)) return;

	message.reply(say + `- ${message.author}` || 'Nothing to say');
};