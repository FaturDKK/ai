/*
› Create By 𝐖𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥🧿
› Recode By [ SKER JB ]
› Base By Hw Mods

› Buy No Enc? Contact Di Bawah
› Pm Tele : @WannOFFC08 [ ON ]
› Pm Wa : 083143590828 [ ON ]
› YT : @WannOFFC
*/
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
const fs = require('fs')
const chalk = require('chalk')
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
global.owner = "6287765856537"// Ur No Owner
global.botname = ""// Ur Bot Name
global.ownername = ""// Ur Owner Name
global.version = "10.0"// Ur Version
global.autoJoin = false
global.antilink = false
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.thumb = fs.readFileSync("./thumb.png")
global.sessionName = 'skerjb' //Jangan Di Ubah!!
global.tekspushkon = ""// Jangan Di Ubah!!
global.tekspushkonv2 = ""// Jangan Di Ubah!!
global.tekspushkonv3 = ""// Jangan Di Ubah!!
global.tekspushkonv4 = ""// Jangan Di Ubah!!
global.packname = ""// Jangan Di Ubah!!
global.author = "Sticker"// Ur Author
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
global.nodana = ""// Ur No Dana
global.nogopay = "08"// Ur No Gopay
global.noovo = "08"// Ur No Ovo
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
const mess = {
   wait: "Wait, Otw Proses Mas👏",
   success: "Sukses Bos SKERJB👏",
   save: "Sukses Save Nomer Otomatis",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Bang?",
       link: "Link Nya Mana Bang?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Fitur Nya Cuman Bisa Di Dalem Grup Yah Bang",
       private: "Di Chat Pribadi Bang Sans Biar Bisa Di Pake",
       owner: "Maaf, Anda Tidak Dapat Mengunakan Fitur Ini",
       admin: "Maaf, Anda Tidak Dapat Mengunakan Fitur Ini",
       badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner",
   }
}
global.mess = mess
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
