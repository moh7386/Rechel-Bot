import fs from "fs"
let handler = m => m
 handler.all = async function (m, { conn, command, text }) {
    let chat = global.db.data.chats[m.chat]
    let x=`_${pickRandom(global.piropo)}_`
    let top = `*${x}*`
   

if (/^ح$/i.test(m.text) && !chat.isBanned) {

    m.reply(top, null)}}
export default handler

function pickRandom(list) {
   
  return list[Math.floor(list.length * Math.random())]
}
 global.piropo = ["شخصية بحرف(أ)","شخصية بحرف(ب)","شخصية بحرف(ت)","شخصية بحرف(ث)","شخصية بحرف(ج)","شخصية بحرف(ح)","شخصية بحرف(خ)","شخصية بحرف(د)","شخصية بحرف(ذ)","شخصية بحرف(ر)","شخصية بحرف(أز)","شخصية بحرف(س)","شخصية بحرف(ش)","شخصية بحرف(ص)","شخصية بحرف(ض)","شخصية بحرف(ط)","شخصية بحرف(أظ)","شخصية بحرف(ع)","شخصية بحرف(غ)","شخصية بحرف(ف)","شخصية بحرف(ق)","شخصية بحرف(ك)","شخصية بحرف(ل)","شخصية بحرف(م)","شخصية بحرف(ن)","شخصية بحرف(ه)","شخصية بحرف(و)","شخصية بحرف(ي)","شخصية بحرف(نا)","شخصية بحرف(لو)","شخصية بحرف(اس)",]



