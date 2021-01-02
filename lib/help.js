function menu() {
	return `
	[ *Others Commands* ]
   1. */gifsticker*
   1. */sticker*
   2. */toimg [mengubah sticker menjadi image]*
   2. */neko*
   3. */pokemon*
   4. */inu*
   5. */jadwalShalat [daerah]*
   6. */jadwalTv [channel]*
   7. */cuaca [tempat]*
   8. */tts [kode bhs] [teks]*
   9. */igStalk [@username]*
   10. */wiki [query]*
   11. */waifu*
   12. */husbu*
   13. */randomNekoNime*
   14. */randomTraNnime*
   15. */randomAnime*
   16. */info*
   17. */infoGempa*
   18. */meme*
   19. */quotemaker [|teks|author|theme]*
   20. */join [linkGroup]*
   21. */quotes*
   22. */quotesnime*
   23. */wait*
   24. */nulis [teks]*
   25. */donasi*
   26. */lirik [optional]*
   27. */homebot [homebot bucin]*
   28. */tutorial [tutorial pasang bot]*
   29. */antikasar*
   30. */images [tema nya]*
   31. */nekopoi [BETA]*
   32. */pantun*
   33. */ceklokasi*
   34. */cerpen*
   35. */cersex*
   36. */covid*
   37. */shortlink*
   38. */listsurah*
   39. */bapakfont*
   40. */roll*
   41. */slap*
   42. */quotesgambar*
   43. */covidindo*
   44. */roll [putar dadu]*
   45. */slap [@tag]*
   46. */flip*`
}
exports.menu = menu()
function menugrup() {
	return `
	[ *Group Commands* ]
   
   1. */add 62858xxxxx*
   2. */kick @tagmember*
   3. */promote @tagmember*
   4. */demote @tagadmin*
   5. */mentionAll*
   6. */adminList*
   7. */ownerGroup*
   8. */leave*
   9. */linkgrup*
   10. */delete [replyChatBot]*
   11. */kickAll*
   12. */demoteall*
   13. */promoteall*
   14. */resetlink*
   15. */groupinfo*
   16. */deskgrup [mengambil deskripsi grup]*
   17. */mutegrup [on]/[off]*`
}
exports.menugrup = menugrup()
function menudownload() {
	return ` 
	[ *Downloader Commands* ]

1. */ytmp3 [linkYt]*
2. */ytmp4 [linkYt]*
3. */ig [linkIg]*
4. */fb [linkFb]*`
}
exports.menudownload = menudownload()
function menusuperowner() {
	return `
	[ *Super Owner Commands* ]
   
1. */tambahowner [@tag]*
2. */hapusowner [@tag]*
3. */tambahpremium [@tag]*
4. */hapuspremium [@tag]*
5. */chatowner [pesannya]*
6. */bikingrup [nama grup]*
\n❣ *ANOS BOT* ❣`
}
exports.menusuperowner = menusuperowner()
function menuowner() {
	return `
	[ *Owner Commands* ]
   
1. */ban [@tagmember]*
2. */unban [@tagmember]*
3. */banall [@tagmember]*
4. */unbanall [@tagmember]*
5. */bc [pesan nya]*
6. */clearall [Hapus semua chat]*`
}
exports.menuowner = menuowner()
function menupremium() {
	return `
	[ *Premium Commands* ]

1. */join*`
}
exports.menupremium = menupremium()
function help() {
	return `
\n❣ *ANOS BOT* ❣
1. */menu*
2. */menuowner*
3. */menudownload*
4. */menusuperowner*
5. */menupremium*
6. */menugrup*

 }
exports.help = help()
function readme() {
    return `
*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : */ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : */ytmp4 https://youtu.be/Bskehapzke8*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : */ig https://www.instagram.com/p/CEcNz0GoA4o/?igshid=11k8kupfuug14*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : */fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : */jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : */jadwalTv Indosiar*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : */cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : */tts id Test*
Note : Max 250 huruf

*[@username]* Diisi dengan username Instagram yang valid, tanpa tanda “[” dan “]”
Contoh : */igStalk @duar_amjay*

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : */quotemaker |Odading|Mang Oleh|Shark*

*[linkGroup]* Diisi dengan link group whatsapp yang valid, tanpa tanda “[” dan “]”.
Contoh : */join https://chat.whatsapp.com/Bhhw77d5t2gjao8*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : */lirik aku bukan boneka*`
}
exports.readme = readme()
function info() {
    return `Bot ini di buat dengan bahasa pemrograman Node.js / JavaScript
Source kode bot : https://github.com/bucinganteng/bucinBOT
Owner Bot : wa.me/6289678418893
Author? : Teen Bochen

Oh iya om, bot ini gratis ya, soalnya saya lihat banyak yang jual bot² kayak gini, tapi ini gratis kok.`
}
exports.info = info()
function snk() {
    return `Syarat dan Ketentuan Bot *Anos Gans*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks /`
}
exports.snk = snk()
function donate() {
    return `Ya halo om.. Mau donate?
    
Kalo mau donate langsung ae ke :
OVO/PULSA/DANA/GOPAY : 089678418893
SUBSCRIBE : https://youtube.com/channel/UC-3t84TB2HkXvEW6iXV4RQw

Thanks /`
}
exports.donate = donate()
function ytowner() {
    return `SUBSCRIBE CHANNEL YT OWNER https://youtube.com/channel/UC-3t84TB2HkXvEW6iXV4RQw`
}
exports.ytowner = ytowner()
function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
