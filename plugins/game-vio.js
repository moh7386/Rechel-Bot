import fs from 'fs'

let timeout = 5000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.vio = conn.vio ? conn.vio : {}
    let id = m.chat
    if (id in conn.vio) {
        conn.reply(m.chat, 'لا تزال هناك ألغاز لم تتم الإجابة عليها في هذه الدردشة ', conn.vio[id][0])
        throw false
    }
    let t = JSON.parse(fs.readFileSync(`./src/game/vio.json`))
    let json = t[Math.floor(Math.random() * t.length)]
    let _clue = json.جواب
    let clue = _clue.replace(/[A-Za-z]/g, '_')
    let pp=`${json.سوال}`
        let p=`${json.جو}`
        let r= `❜  🤹🏻‍♀️ *أنتهت* 🤹🏻‍♂️  ❛
*✦↫👤المجاوب :*「لا أحد」
*✦↫✍️الإجاية :*「${json.جواب}」
*✦↫💸الجائزة :*「5k」
*✦↫⌚الوقت :*「${(timeout / 1000).toFixed(2)} ثانية」
*•ه─────────────ه•*
*❍.إدارة : 𓆸*
*「𝑹𝑨𝑪𝑯𝑬𝑳 🪶𝑩𝑶𝑻 」*`
    let caption = `
ⷮ ❜  🤹🏻‍♀️ *خمن الشخصية* 🤹🏻‍♂️  ❛
*✦↫👤المقدم :*「ريتشل بوت」
*✦↫💸الجائزة :*「5k」
*✦↫⌚الوقت :*「${(timeout / 1000).toFixed(2)} ثانية」
*•ه─────────────ه•*
*❍.إدارة : 𓆸*
*「𝑹𝑨𝑪𝑯𝑬𝑳 🪶𝑩𝑶𝑻 」*


`.trim()
    conn.vio[id] = [
       await conn.sendFile(m.chat,pp,null, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.vio[id]) await conn.sendFile(m.chat,p,null,r, conn.vio[id][0])
            delete conn.vio[id]
        }, timeout)
    ]
}

handler.help = ['acertijo']
handler.tags = ['game']
handler.command = /^(acertijo|خمن|pregunta|adivinanza|tekateki)$/i

export default handler