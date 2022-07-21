/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
module.exports.run = async (client, message) => {

	if (message.author.bot) return;

	let amount = message.content.slice(7);
  if (!amount) return message.channel.send(`You Have't Sent Me A Amount To Delete!`)
  async function clear() {
    message.delete();
            const fetched = await message.channel.messages.fetch({ limit: 99 });
            message.channel.bulkDelete(fetched);
  }
  if (amount == 'all') return clear();
				if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`You Do Not Have Valid Permissions!`);


        // if there's no amount provided or the amount is not a number. it will return this message.
        if (isNaN(amount)) return message.channel.send('Please provide a valid number!')
        if (amount == String) return message.channel.send(`Please Provide A Integer!`);

        // if the amount is more than 99 it will set the amount to 99
        if (amount > 99) amount = 99;
        try {
            // we're adding 1 here to delete the command message as well.
            await message.channel.bulkDelete(parseInt(amount) + 1, true).then(m => {
                // the bot will send a message after bulkdeleting and delete it after 3 seconds
                // It will only display the amount of messages that the bot has deleted.
							message.channel.send(`Purge Pursued`).then(m => {
                    m.delete({ timeout: 1000 });
                })
            })
				}
 catch (err) {
					message.channel.send(`Error Has Occured`)
					console.log(err)
				}
}