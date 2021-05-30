const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: ['ticket-setup', 'ticket-set'], // You Can Keep Any Name
    permissions: 'ADMINISTRATOR', // You Can Keep Any Permission
    permissionError: 'You Cant Use This Command', // Optional
    description: 'SetUp Ticket', // Optional

    callback: async(message, args) => {

        const channel = message.mentions.channels.first() // Mention Channel
        if(!channel) return message.reply('Add A Channel To SetUp Ticket System.') // If No Channel Is Provided

        const embed = await channel.send(new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Ticket System')
        .setDescription(`
Need Help?
For Common Help React With 🎫
For Coding Help React With 👨‍💻
For GiveAway Help React With 🎉
`)
        .setFooter('Ticket System')
        )
        // channel.send(embed).then(message => {
        //     message.react('🎫')
        // })
        console.log(embed.id) // For Creating Channel
        await embed.react('🎫') // React To Embed
        await embed.react('👨‍💻') // React To Embed
        await embed.react('🎉') // React To Embed
        message.delete() // Delete Original Message
    }
}
