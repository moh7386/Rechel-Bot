let handler = async (m, { conn, command, text }) => {
    let as=`./media/as.mp3`
let love = `*(⌐■_■) مقياس السرقة (⌐■_■)*
*${text}نسبة السرقة لك  ${Math.floor(Math.random() * 100)}%* *من 100%*
 *طاهر القلب نقي ذاكر لله*
  
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })

ptt: true })}
handler.help = ['lie']
handler.tags = ['fun']
handler.command = /^(lie|سرقة)$/i
export default handler
