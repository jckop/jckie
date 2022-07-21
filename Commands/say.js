module.exports.run = (client, message) => {
  const say = message.content.slice(5)

  message.reply(say)
}