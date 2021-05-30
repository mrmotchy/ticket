const db = require('quick.db') // npm i quick.db

module.exports = {
    commands: ['unlock-ticket'], // You Can Keep Any Name
    permissions: 'MANAGE_CHANNELS', // You Can Keep Any Permission
    permissionError: 'You Cant Use This COmmand', // Optional
    description: 'UnLock Ticket', // Optional

    callback: (message, args) => {

        if(message.channel.name.includes('ticket')) return // If Channel Isn't Ticket Channel, Won't Work
        else {
            const memberinticket = db.fetch(`ticket-user_${message.channel.id}`) // Get User In Ticket
            message.channel.updateOverwrite(memberinticket, {
                SEND_MESSAGES: true
            }) // Permission
            message.channel.send(`UnLocked Ticket`)
        }
    }
}
