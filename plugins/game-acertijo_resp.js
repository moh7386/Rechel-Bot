import similarity from 'similarity'

import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import fs from 'fs'
 

const threshold = 0.72

let handler = m => m

handler.before = async function (m, { conn, usedPrefix, command, text })  {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => gataImg.getRandom())
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let user = global.db.data.users[m.sender]
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let f=`❜🤹🏻‍♀️ *أنتهت* 🤹🏻‍♂️❛
*✦↫👤المجاوب :*「${name}/@${tag}」
*✦↫💸الجائزة :*「5k」
*✦↫⌚الوقت :*「30 ثانية」
*•ه─────────────ه•*
*❍.إدارة : 𓆸*
*「𝑹𝑨𝑪𝑯𝑬𝑳 🪶𝑩𝑶𝑻 」*`

   
    let id = m.chat

    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0

    this.tekateki = this.tekateki ? this.tekateki : {}

    if (!(id in this.tekateki)) return m.reply('إنتهى الوقت!')

    if (m.quoted.id == this.tekateki[id][0].id) {

        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))

        // m.reply(JSON.stringify(json, null, '\t'))

        if (m.text.toLowerCase() == json.جواب.toLowerCase().trim()) {

            global.db.data.users[m.sender].exp += this.tekateki[id][2]

          await conn.sendFile(m.chat, pp, 'gata.jpg', f, m, false, { mentions: [aa] })

            clearTimeout(this.tekateki[id][3])

            delete this.tekateki[id]

        } else if (similarity(m.text.toLowerCase(), json.جواب.toLowerCase().trim()) >= threshold) m.reply(`لقد كدت تنجح!`)

        else m.reply('إجابة غير صحيحة!')

    }

    return !0

}



handler.exp = 0



export default handler
