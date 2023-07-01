import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text }) => {
    let user = global.db.data.users[m.sender]
    let pp = `./men.jpg`
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let  menu=`*◞🪶 بوت ريتشل┆‹ 𝑅𝐴𝐶𝐻𝐸𝐿 𝐵𝑂𝑇 ᥫ᭡🪶✨◜*
*◞❊ ملاحظة حط قبل كل أمر نقطة(.)*
*◞❊ أهلا「@${m.sender.split("@")[0]}」*

*⎔ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ⎔*
         *❖ •﹝أوامر القروب﹞• ❖*
*◈ملاحظة ┆أوامر القروب فقط*
*「للمشرفين」*

*◞❊ منشن「tagall」* 
• عمل منشن جماعي في لقروب.
*◞❊ مخفي「hidetage」* 
• عمل منشن مخفي في لقروب.
*◞❊ تاج「totag」* 
• لعمل منشن لصورة او فيد او استمارة.
*◞❊ ترقية「promote」* 
• إعطاء عضو إشراف.
*◞❊ اعفاء「demote」* 
• سحب إشراف من عضو.
*◞❊ قفل「close」* 
• لقفل القروب.
*◞❊ للفتح「group open」* 
• لفتح القروب.
*◞❊ للقفل「group close」* 
• لقفل القروب.
*◞❊ اضف「add」* 
• لإضافة عضو.
*◞❊ طرد「kick」* 
• لطرد عضو.
*◞❊ رابط「link」* 
• لأخذ رابط القروب.
*◞❊ ترحيب「setwelcome」* 
• لعمل ترحيب ارسل الأمر مع استمارتك.
*◞❊ باي「setbye」* 
• لعمل رسالة خروج عضو ارسل الأمر مع استمارتك.
*◞❊ ريست「resetlink」* 
• لتغيير رابط القروب.
*⎔ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ⎔*
    *❖ •﹝أوامر التحميل﹞• ❖*
*◈ملاحظة ┆أوامر التحميل*
*「للكل」*

*◞❊ فيس「facebook」* 
• للتحميل من فيس بوك ارسل الأمر مع رابط.
*◞❊ ايجي「igstalk」* 
• لجلب بيانات حساب انستا ارسل الأمر مع يوزر الشخص.
*◞❊ انستا「ig」* 
• للتحميل من انستغرام ارسل الأمر مع الرابط.
*◞❊ بحث「play」* 
• للبحث عن صوتيات يوتيوب.
*◞❊ تيك「tiktok」* 
• للتحميل من تيك توك.
*◞❊ تويت「twitter」* 
• للتحميل من تويتر.
*◞❊ صوت「ytmp3」* 
• لتحميل صوت من يوتيوب حط الرابط بعد الأمر.
*◞❊ فيد「ytmp3」* 
• لتحميل فيد من يوتيوب حط الرابط بعد الأمر.
*⎔ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ⎔*
         *❖ •﹝أوامر منوع﹞• ❖*
*◈ملاحظة ┆هذه الأوامر*
*「للكل」*

*◞❊ جوجل「google」* 
• للبحث من جوجل.
*◞❊ شات「ia」* 
• للتحدث مع الذكاء الاصطناعي.
*◞❊ فضح「readvo」* 
• لإظهار صورة الون فيو.
*◞❊ رابطي「tourl」* 
• لتحويل اي شيء لرابط.
*◞❊ ترجم「trad」* 
• للترجمة.
*◞❊ نطق「tts」* 
• يقوم بنطق الكلام الذي تكتبه بأي لغة تريد.
◈مثال ┆ 「بقرة tts ar. 」
*◞❊ صوتي「tomp3」* 
• يحول الفيد لصوت.
*◞❊ صوتية「toav」* 
• يحول الصوت الى av.
*⎔ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ⎔*
         *❖ •﹝أوامر الملصقات﹞• ❖*
*◈ملاحظة ┆أوامر ملصقات*
*「للكل」*

*◞❊ ملصق 「s」* 
• لعمل ملصق من صورة.
*◞❊ حق「wm」* 
• لأخذ حقوق ملصق.
◈مثال┆
「.wm Rachel|Bot」
او 
「.حق Rachel|Bot」
*◞❊ صورة「toimg」* 
• يحول الملصق لصورة منشن الصورة فقط.
*◞❊ جيف「tovid」* 
• تحويل ملصق لصورة متحركة.

*⎔ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ⎔*
         *❖ •﹝أوامر البحث﹞• ❖*
*◈ملاحظة ┆أوامر الترفية*
*「للكل」*
*◞❊ صور「image」* 
• البحث عن صور في جوجل.
*◞❊ بين「pinterest」* 
• البحث عن صور في بينتريست.
*◞❊ خلفيات「wallpaper」* 
• بحث عن خلفيات البحث باللغة الإنجليزية.

*⎔ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ⎔*
         *❖ •﹝أوامر الترفية﹞• ❖*
*◈ملاحظة ┆أوامر الترفية*
*「للكل」*

*◞❊ نرد「dado」* 
• لعبة نرد الحظ.
*◞❊ اكس「ttt」* 
• لعبة أكس او .
◈مثال┆「ttt game. أو .أكس لعبة」
*◞❊ تحدي「pvp」* 
• تحدي خصم في لعبة حجر ورقةمقص.
◈مثال┆「pvp @tag. أو .تحدي @منشن لعضو」
*◞❊ كت「كت」* 
• كتابة شخصيات أنمي.
*◞❊ سؤال「سؤال」* 
• أسئلة انمي.
*◞❊ لو「لو」* 
• لو خيروك اسئلة منوعة.
*◞❊ رتب「رتب」* 
• ترتيب شخصيات أنمي.
*◞❊ احزر「احزر」* 
• اعرف الشخصية من الايموجي.
*◞❊ مقولة「مقولة」* 
• أعرف القائل.
*◞❊ غباء「غباء」* 
• نسبة غباء شخص ما.
*◞❊ ذكاء「ذكاء」* 
• نسبة ذكاء شخص ما.
*◞❊ جمال「جمال」* 
• نسبة جمال شخص ما.
*◞❊ حب「حب 」* 
• نسبة حب شخص ما لك.

*◞🪶 بوت ريتشل┆𝑅𝐴𝐶𝐻𝐸𝐿 𝐵𝑂𝑇 ᥫ᭡🪶✨◜*
                 *‏◞イベント◜*`
.trim()

const vi = ['https://e.top4top.io/m_2733ox0zq4.mp4',
'https://d.top4top.io/m_2733nq7dg3.mp4',
'https://c.top4top.io/m_2733vslem2.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen4, 'men.jpg', menu, fkontak, false, { mentions: [m.sender] })
} catch (error) {
return 
}}}} }

handler.help = ['اوتو']

handler.tags = ['menu']

handler.command = /^(ريتشل|اوامر|الاوامر|مينو|menu)$/i

export default handler