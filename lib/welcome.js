const { create } = require('@open-wa/wa-automate')
const fs = require('fs-extra')
const color = require('./color')

module.exports = welcome = async (bucin, event, message) => {
  if (event.who == '9074161917@c.us') return 
  const wel = JSON.parse(fs.readFileSync('./lib/welcome.json'))
  const iswel = wel.includes(event.chat)
  try {
    if ((event.action == 'add') && (iswel == true)) {
    const det = await bucin.getChatById(event.chat)
    const person = await bucin.getContact(event.who)
    const descc = det.groupMetadata.desc
    const personname = person.pushname 
    const groupname = det.contact.formattedName 
    var picc = await bucin.getProfilePicFromServer(event.who)
    const filename = `Welcome.jpg`
    const capp = `🔰 -----[ *SELAMAT DATANG* ]----- 🔰\n\n Halo *_${personname}_*\nSelamat Datang Di Grub ${groupname} Jangan Lupa Baca Deskripsi Grup Terlebih Dahulu, Dan Patuhi Rules Yang Ada!\n\n🔱Rules Grup:\n\n${descc}\n\n🔰 -----[ *ANOSBOT* ]----- 🔰`
	console.log(color('ADA MEMBER MASUK GRUP!!!', 'red'))
    bucin.sendFileFromUrl(event.chat, picc, filename, capp)
    } else {
    if ((event.action == 'remove') && (iswel == true)) {
    const det = await bucin.getChatById(event.chat)
    const person = await bucin.getContact(event.who)
    const descc = det.groupMetadata.desc
    const personname = person.pushname 
    const groupname = det.contact.formattedName 
    var picc = await bucin.getProfilePicFromServer(event.who)
    const filename = `Welcome.jpg`
    bucin.sendTextWithMentions(event.chat, `🔰 -----[ *SELAMAT TINGGAL SEMOGA KAMU TENANG DI ALAM SANA* ]----- 🔰\n\n @${event.who.split('@')[0]} Telah Meninggalkan Grup!\n\n*AL FATIHAH BUAT YANG KELUAR GRUP*\n\n🔰 -----[ *ANOSBOT* ]----- 🔰`)
	console.log(color('ADA MEMBER KELUAR GRUP!!!', 'red'))
    }}

    } catch(err) {
    console.log(err)
  }
}
