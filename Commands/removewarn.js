const warnModel = require('../Models/warnModel.js')

module.exports.run = async (client, message) => {
  const userPermissions = ["MANAGE_MESSAGES", "ADMINISTRATOR"]
  if (!message.member.permissions.has(userPermissions)) return message.channel.send(`You Do Not Have Permission To Do This!`)
  const warnId = message.content.slice(12)
  const data = await warnModel.findById(warnId);
  if (!data) return message.channel.send(`${warnId} Does Not Exist Or Is Invalid`);
  data.delete();
  if(!warnId) return message.channel.send(`I Dont Know Which Warn To Remove!`);

  const user = message.guild.members.cache.get(data.userId);
  return message.channel.send(`Removed 1 ${user}'s Warnings `)
}