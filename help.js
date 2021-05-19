const axios = require('axios')
const noblox = require('noblox.js')
const groupId = 5912172

module.exports = {
    name: '*demote',
    description: 'Demote',
    async execute(msg, args) {
        msg.channel.send(`Here is a list of commands:\n*help Shows a list of all commands\n*promote <user> Promotes the specified user\n*demote <user. Demotes the specified user\n*accept <user> Accepts the specified user's join request\n*deny <user> Denies the specified user's join request`);
    }
}