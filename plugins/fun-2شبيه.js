import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata, command, conn, text, usedPrefix}) {
    
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let x = `${pickRandom(['لوفي من ونبيس ','نامي من ونبيس كيوت' ,'ميكو من التوأم الخمس كيوت'  ,'كيلوا من هنتر' ,'انيا من سباي اكس فاميلي' ,'هيناتا من ناروتو' ,'نيزوكو من قاتل الشياطين' ,'يوري مدري اي انمي' ,'توغا من بوكو نو هيرو' ,'سيبر من فيت زيرو' ,'نيل من بليتش' ,'ايتشيغو من بليتش' ,'زورو من ون بيس','ميكاسا من أتاك','ايرين من أتاك','ايتاتشي من ناروتو','يونو من بلاك كلوفر','غوجو من جوجيتسو','دازاي من الكلاب الضالة','بييغ مام من ون بيس','دوفي من ونبيس'])}`
let love =`*☆: oنسبة التشابه من الأنميo :☆*

*@${m.sender.split("@")[0]}*

*أنت تشبه:  ${x}💕😩* 
 *نسبة التشابه هي ${Math.floor(Math.random() * 100)}%*
*مرة نايس* 🙈💕
`.trim()

m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(شبيه)$/i
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}