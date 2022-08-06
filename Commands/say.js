const { triggerWords } = require('../index.js');

module.exports.run = (client, message) => {
	let say = message.content.slice(5);
	if (!say) return say = "Nothing to say";
	if (message.author.bot) return;
	if (say.includes('.say')) return;
	if (say.includes(triggerWords)) return;

	message.reply(say + `- ${message.author}`);
};