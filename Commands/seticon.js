module.exports.run = (client, message) => {
  let userPermissions = ["MANAGE_SERVER", "ADMINISTRATOR"]
  if (!message.member.permissions.has(userPermissions)) return message.channel.send(`You Do Not Have Permission To Do That!`);
  let iconurl = message.content.slice(9)
  message.guild.setIcon(iconurl).then(message.channel.send(`Set Icon To ${iconurl}
`))
}