let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ مقياس الحب ❤️❤️*
*نسبة حب ${text} لك* *${Math.floor(Math.random() * 100)}%* *من 100%*

 *هل يجب أن تطلب منه / منها أن يكون صديقك 😔💍 ️؟*
  
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love|حب)$/i
export default handler
