let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (chat.audios && m.text.match(/اوتو من تحبي/gi)) {    
let vn = '*أحب نيل خقمزتي💞🙈*'
m.reply( vn,null)}
 if (/^اوتو$/i.test(m.text) && !chat.isBanned) {  
let v = `${pickRandom(['شتبي','قلبها','انقلع لا تناديني','عمرها','حياتي','يلبيه','ما اعرفك','جيتتتت','مشغولة','بخلص واجي','عيونها'])}`
let vn=`*${v}*`
m.reply(vn,null)}
 if (/^هلا$/i.test(m.text) && !chat.isBanned) {   
let v =  `${pickRandom(['قول السلام عليكم','هلا فيك','شجابك','هلا يعمري','هلا يا حياتي','يلبيه اطلق من يجي','اووفف انعميت من نورك','منور ياقلبي','جاء النشبه','منور يا عسل','عيوني'])}`
let vn=`*${v}*`
m.reply(vn,null)}
    if (/^ريتشل$/i.test(m.text) && !chat.isBanned) {   
let v = `${pickRandom(['دز.','قلبها.','توكل.','عمري.','حياتي.','مالي خلق.','مشغولة.','عيونها.'])}`
let vn=`*${v}*`
m.reply(vn,null)}
   if (/^ابيك$/i.test(m.text) && !chat.isBanned) {   
let vn = '*جعل ما يبيني غيرك ي بعد كبدي💞🙈*'
m.reply(vn,null)}
 if (/^كم عمرك$/i.test(m.text) && !chat.isBanned) {     
let v = `${pickRandom(['شتبي فيهه','ابوي انت ولا وش','ليه!! تطلع لي بطاقة','لسى صغيرة معليك','استحي💞🙈','مابول اص','عمري 20 عندك مانع','هممم محب اقول','قول عمتي وبقول','بعمر جدتك','مالك دخل'])}`
let vn=`*${v}*`
m.reply(vn,null)}
   if (/^عمتي$/i.test(m.text) && !chat.isBanned) {    
let vn = '*يزينك عمري 15 ي حلو*'
m.reply(vn,null)}
return !0 }
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
