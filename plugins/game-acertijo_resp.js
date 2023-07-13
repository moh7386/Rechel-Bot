import similarity from 'similarity'

import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import fs from 'fs'
 

const threshold = 0.72

let handler = m => m

handler.before = async function (m) {
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let f=`❜🤹🏻‍♀️ *أنتهت* 🤹🏻‍♂️❛
*✦↫👤المجاوب :*「${taguser}」
*✦↫💸الجائزة :*「5k」
*✦↫⌚الوقت :*「30 ثانية」
*•ه─────────────ه•*
*❍.إدارة : 𓆸*
*「𝑹𝑨𝑪𝑯𝑬𝑳 🪶𝑩𝑶𝑻 」*`

   
    let id = m.chat

    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0

    this.tekateki = this.tekateki ? this.tekateki : {}

    if (!(id in this.tekateki)) return m.reply('انتهى هذا اللغز!')

    if (m.quoted.id == this.tekateki[id][0].id) {

        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))

        // m.reply(JSON.stringify(json, null, '\t'))

        if (m.text.toLowerCase() == json.جواب.toLowerCase().trim()) {

            global.db.data.users[m.sender].exp += this.tekateki[id][2]

            m.reply(f, null, { mentions: conn.parseMention(f) })

            clearTimeout(this.tekateki[id][3])

            delete this.tekateki[id]

        } else if (similarity(m.text.toLowerCase(), json.جواب.toLowerCase().trim()) >= threshold) m.reply(`لقد كدت تنجح!`)

        else m.reply('إجابة غير صحيحة!')

    }

    return !0

}



handler.exp = 0



export default handler
