import fs from 'fs'

let timeout = 60000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'لا تزال هناك ألغاز لم تتم الإجابة عليها في هذه الدردشة ', conn.tekateki[id][0])
        throw false
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/game/mk.json`))
    let json = tekateki[Math.floor(Math.random() * tekateki.length)]
    let _clue = json.جواب
    let clue = _clue.replace(/[A-Za-z]/g, '_')
    let caption = `
ⷮ *⌝مـقـولات الأنـمـي╎📚⌞*
*↻╍╍━┛🪶┗━╍╍↺*
*❖↫┋من الـقـائـل ❔╎${json.سوال}」*
*❖↫┋الوقت ⌚╎${(timeout / 1000).toFixed(2)} ثانيه」*
*↻╍╍━┛🪶┗━╍╍↺*
*⨀⇠ تــوقــيــع ⇣* 
*「إدارﮪ  𝑹𝑨𝑪𝑯𝑬𝑳 🪶𝑩𝑶𝑻 」*

`.trim()
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `انتهى الوقت !\n*جواب:* ${json.جواب}`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}

handler.help = ['acertijo']
handler.tags = ['game']
handler.command = /^(acertijo|مقولة|pregunta|adivinanza|tekateki)$/i

export default handler