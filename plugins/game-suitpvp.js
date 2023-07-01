let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix, text }) => {
conn.suit = conn.suit ? conn.suit : {}
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[❗] 𝚃𝙴𝚁𝙼𝙸𝙽𝙰 𝚃𝚄 𝙿𝙰𝚁𝚃𝙸𝙳𝙰 𝙰𝙽𝚃𝙴𝚂 𝙳𝙴 𝙸𝙽𝙲𝙸𝙰𝚁 𝙾𝚃𝚁𝙰*'
let textquien = `*𝙰 𝚀𝚄𝙸𝙴𝙽 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙳𝙴𝚂𝙰𝙵𝙸𝙰𝚁? 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 𝙰 𝚄𝙽𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n${usedPrefix}suit @${global.suittag}`
if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, { mentions: conn.parseMention(textquien)})
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[❗] 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝙰 𝙻𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙳𝙴𝚂𝙰𝙵𝙸𝙰𝚁 𝙰𝚄𝙽 𝙴𝚂𝚃𝙰 𝙹𝚄𝙶𝙰𝙽𝙳𝙾 𝙾𝚃𝚁𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰, 𝙴𝚂𝙿𝙴𝚁𝙰 𝙰 𝚀𝚄𝙴 𝚃𝙴𝚁𝙼𝙸𝙽𝙴 𝙳𝙴 𝙹𝚄𝙶𝙰𝚁`
let id = 'suit_' + new Date() * 1
let caption = `🎮 𝙶𝙰𝙼𝙴𝚂 - 𝙿𝚅𝙿 - 𝙶𝙰𝙼𝙴𝚂 🎮\n\n—◉ @${m.sender.split`@`[0]} 𝙳𝙴𝚂𝙰𝙵𝙸𝙰 𝙰 @${m.mentionedJid[0].split`@`[0]} 𝙰 𝙴𝙽 𝚄𝙽 𝙿𝚅𝙿 𝙳𝙴 𝙿𝙸𝙴𝙳𝚁𝙰, 𝙿𝙰𝙿𝙴𝙻 𝙾 𝚃𝙸𝙹𝙴𝚁𝙰`.trim()
let footer = `◉ 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 "aceptar" 𝙿𝙰𝚁𝙰 𝙰𝙲𝙴𝙿𝚃𝙰𝚁\n◉ 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 "rechazar" 𝙿𝙰𝚁𝙰 𝚁𝙴𝙲𝙷𝙰𝚉𝙰𝚁`
let imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`
conn.suit[id] = {
chat: await conn.reply(m.chat,  `🎮 تحدي حجر ورقة مقص 🎮\n\n—◉ @${m.sender.split`@`[0]} خصمك هو-< @${m.mentionedJid[0].split`@`[0]} لبدء التحدي انظر تحت.\nللموافقة على التحدي أكتب: \n ok \n للرفض اكتب:\n no`, null, {mentions: conn.parseMention(caption)}),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `[ ⏳ ] 𝚃𝙸𝙴𝙼𝙿𝙾 𝙳𝙴 𝙴𝚂𝙿𝙴𝚁𝙰 𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙾, 𝙴𝙻 𝙿𝚅𝙿 𝚂𝙴 𝙲𝙰𝙽𝙲𝙴𝙻𝙾 𝙿𝙾𝚁 𝙵𝙰𝙻𝚃𝙰 𝙳𝙴 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰`, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.command = /^pvp|تحدي|suit(pvp)?$/i
handler.group = true
handler.game = true
export default handler
