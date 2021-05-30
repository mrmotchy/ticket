const { MessageEmbed } = require('discord.js')
const db = require('quick.db') // npm i quick.db

module.exports = {
    commands: ['warn'], // You Can Keep Any Name
    description: 'Warn SomeOne', // Optional
    permissions: 'MUTE_MEMBERS', // You Can Keep Any Permission
    permissionError: 'You Cant Use It', // Optional

    callback: async(message, args, client) => {

        const user = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase())
        if(!user) return message.reply('Whom Do You Want To Wanr?') // If User Is Not Provided
        let reason = args.slice(1).join(' ') // For Reason
        if(!reason) reason = 'Not Specified' // If Reason Is Not Provided

        const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} Warned`, user.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('RANDOM')
        .setDescription(`
<@${user.id}> Was Warned For **${reason}** By <@${message.author.id}>
        `)
        message.channel.send(embed)
        db.add(`warns_${message.guild.id}_${user.id}`, 1) // `warns_${message.guild.id}_${user.id}` Because Warning Will be Different In All Server, If We Keep `warns_${user.id}` Then It Will Show Same Warnings In All Servers // Add 1 Warning To User
    }
}