import fs from 'fs'

let timeout = 20000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'لا تزال هناك ألغاز لم تتم الإجابة عليها في هذه الدردشة ', conn.tekateki[id][0])
        throw false
    }
    let t = JSON.parse(fs.readFileSync(`./src/game/acertijo copy.json`))
    let json = t[Math.floor(Math.random() * t.length)]
    let _clue = json.جواب
    let clue = _clue.replace(/[A-Za-z]/g, '_')
    let pp=`${json.سوال}`
    let caption = `
ⷮ ❜  🤹🏻‍♀️ *اعرف الشخصية* 🤹🏻‍♂️  ❛
*✦↫👤المقدم :*「ريتشل بوت」
*✦↫💸الجائزة :*「5k」
*✦↫⌚الوقت :*「${(timeout / 1000).toFixed(2)} ثانية」
*•ه─────────────ه•*
*❍.إدارة : 𓆸*
*「𝑹𝑨𝑪𝑯𝑬𝑳 🪶𝑩𝑶𝑻 」*


`.trim()
    conn.tekateki[id] = [
       await conn.sendFile(m.chat,pp,null, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `❜  🤹🏻‍♀️ *أنتهت* 🤹🏻‍♂️  ❛
*✦↫👤المجاوب :*「لا أحد」
*✦↫✍️الإجاية :*「${json.جواب}」
*✦↫💸الجائزة :*「5k」
*✦↫⌚الوقت :*「${(timeout / 1000).toFixed(2)} ثانية」
*•ه─────────────ه•*
*❍.إدارة : 𓆸*
*「𝑹𝑨𝑪𝑯𝑬𝑳 🪶𝑩𝑶𝑻 」*`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}

handler.help = ['acertijo']
handler.tags = ['game']
handler.command = /^(acertijo|اعرف|pregunta|adivinanza|tekateki)$/i

export default handler