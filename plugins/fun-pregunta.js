let handler = async (m, { command, usedPrefix, text }) => { 
if (!text) throw ` اكتب سؤالك ليتم الرد عليه\nمثل\n*${usedPrefix + command} Hoy va llover?*`   
let pre =` 
❔سؤال:  *${text}*
✅ جواب: *${['لا','اي', 'ممكن', 'امممم بفكر', 'اكيد لا', 'ربما لا', 'ربما نعم', 'بفكر في امر' ].getRandom()}*
༺═•⊰『 𝑹𝑨𝑪𝑯𝑬𝑳🪶 』⊱•═༻`.trim() 

conn.reply(m.chat, pre, m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|ريتشل$/i  
export default handler






