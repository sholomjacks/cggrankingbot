const axios = require('axios')
const noblox = require('noblox.js')
const groupId = 5912172

module.exports = {
    name: '*deny',
    description: 'Deny',
    async execute(msg, args) {
        if (msg.member.roles.cache.find(r => r.name === "Ranking Permissions")) {
            // allowed access to command

            let split = msg.content.split(' ')
            let targetUserName = split[1]

            console.log(targetUserName)

            let targetUserId = await axios.get(`https://api.roblox.com/users/get-by-username?username=${targetUserName}`)

            noblox.setCookie("_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_3929B703220B032A071E0B3893D4788F89A9CEF71943F0309081AEACCEBC92B7D0E6106E76F942E6D001C0D0842576BDD21AD837D32F1C8AC318699312485A9C9742F6E61285EF75DFE73113ABA6156CFC0C7804D677D949E1B1263D6043C00F2627D520EFEED77C15C49612BA407C633FDE6B8F12892ED8E12CA72B1CD6F0C77BA140F197BD2B0D739D633CDD3FCAA0DA2DD06FF464ABD8D529B60E3F7D0CF7FCA8C2B599650B30C478841C93FE3EA337AFCB84F29CA0B3A342D45D2C8F0CB6E69F8A157E3871FFB7F6A620B84D041867916387C6D987CBCCE76714C0A9D74EFBA8A9CD5C1E90AAF0B2C77606E5A5FC565A061581C7B98387408A31D6891BB9F820BEDDDF876EBA678E03F1586FECD75DEFA6B3AE22CD154ED803423F39D882940C53DEAEE44E3FCDE7242C50EB8692A709F489").then(function () {
                noblox.handleJoinRequest(groupId, targetUserId, false)
            })

            msg.channel.send(`Success! Accepted ${targetUserName}`);

        } else {
            msg.channel.send('Error! You do not have ranking permission role.')
        }
    }
}




