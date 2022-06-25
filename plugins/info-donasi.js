import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?
*✃ ᴘᴀʏᴍᴇɴᴛ*
• _*Pulsa:*_ [089636219593]]
• _*Dana:*_ [0895347198105]
• _*Gopay:*_ [089636219593]
ʂɛʈɛℓɑɦ ∂ɵɲɑʂɨ ӄɨɾɨɱ ɓựӄʈɨ ∂ɵɲɑʂɨ ӄɛ ɵωɲɛɾ
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://github.com/RifBotZ', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
