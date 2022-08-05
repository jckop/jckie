const { EmbedBuilder } = require("@discordjs/builders");

module.exports.run = (client, message, args) => {
    const embed = new EmbedBuilder()
        .setTitle("Click on :white_check_mark: To get the member role!")

    message.channel.send({ embeds: [embed] }).then(sentEmbed => {
        sentEmbed.react('✅')
    })
}