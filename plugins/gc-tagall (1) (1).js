let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command , groupMetadata}) => {
if (!(isAdmin || isOwner)) {
    
global.dfail('admin', m, conn)
throw false
}
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*الرسالة:* ${pesan}`
let teks = `
*⁽♔₎┋𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐋𝐈𝐒𝐓 ┋:*\n\n
*${groupMetadata.subject}*

❏ *المؤسس: @${owner.split('@')[0]}*

❏ *عدد الأعضاء: ${participants.length} عضو*

❏ *قائمة المشرفين:*
${listAdmin}

❏ ${oi}\n\n❏ *قائمة الأعضاء:*\n`
for (let mem of participants) {
teks += `┣➥ @${mem.id.split('@')[0]}\n`}
    
teks += `*└𝑹𝑨𝑪𝑯𝑬𝑳 𝑩𝑶𝑻* \n\n*${groupMetadata.subject}*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن|جماعي|tagall)$/i
handler.admin = true
handler.group = true
export default handler
