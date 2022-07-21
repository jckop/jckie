const warnModel = require('../Models/warnModel.js')

module.exports.run = (client, message) => {
  let user = message.mentions.users.first()
  let reason = message.content.slice(6)
  let userPermissions = ["MANAGE_MESSAGES", "ADMINISTRATOR"]
  new warnModel({
    userId: user.id,
    guildId: message.guildId,
    reason: reason,
    moderatorId: message.author.id,
    timestamp: Date.now(),
  }).save();
  if (!message.member.permissions.has(userPermissions)) return message.channel.send(`You Do Not Have Permissions!`);
  if (user.bot) return;
  user.send(`You Have Been in ${message.guild.name} for ${reason}`);

  message.channel.send(`${user} has been warned for ${reason}`)
}