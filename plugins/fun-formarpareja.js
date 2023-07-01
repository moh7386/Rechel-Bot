let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, مبروك وجدت توأمك💍 هو ${toM(b)},كونوا صديقين 🧚‍♀️💕*

*${toM(a)}, أنه شخص لطيف 💍 كن صديقه ${toM(b)},كيوت كوبل 🧚‍♀️💕*`, null, {
mentions: [a, b]
  
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['توأم','زوج']
handler.group = true
export default handler