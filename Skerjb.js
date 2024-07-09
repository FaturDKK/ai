/*
› Create By 𝐖𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥🧿
› Recode By SKERJB
› Base By Hw Mods

› Buy No Enc? Contact Di Bawah
› Pm Tele : @WannOFFC08 [ ON ]
› Pm Wa : 083143590828 [ ON ]
› YT : @WannOFFC
*/
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const hxz = require('hxz-api')
const ytdl = require("ytdl-core")
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// read database
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await haikal.decodeJid(haikal.user.id)
const sender = m.key.fromMe ? (haikal.user.id.split(':')[0]+'@s.whatsapp.net' || haikal.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await haikal.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false 
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const jam = moment.tz('asia/jakarta').format("HH:mm:ss");
const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
const antilink = JSON.parse(fs.readFileSync('./all/antilink.json'));
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return haikal.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
    
// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await haikal.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await haikal.getName(i + '@s.whatsapp.net')}\n
FN:${await haikal.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

const thomz = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}
// Function Reply
const reply = (teks) => { 
haikal.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Sc SkerJb`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": m, 
"mediaUrl": "https://youtube.com/@SKERJB", 
"sourceUrl": "https://youtube.com/@SKERJB" }}}, { quoted: m }) }
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
switch (command) {
case "menu": {
const text12 = `
• *Hai Kak @${sender.split("@")[0]}👏*

┏━━ 𝐈𝐍𝐅𝐎 𝐌𝐄𝐍𝐔 ━⊜

 ∘ 𝘕𝘢𝘮𝘢 𝘖𝘸𝘯𝘦𝘳 : ${global.ownername}
 ∘ 𝘕𝘢𝘮𝘢 𝘉𝘰𝘵 : ${global.botname}
 ∘ 𝘕𝘰𝘮𝘦𝘳 𝘖𝘸𝘯𝘦𝘳 : ${global.owner}
 ∘ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 𝘚𝘤𝘳𝘪𝘱𝘵 : ${global.version}
 ∘ 𝘙𝘶𝘯𝘛𝘪𝘮𝘦 : ${runtime(process.uptime())}

┗━━━━━━━━━━━━━━

     •• [ 𝘔𝘰𝘩𝘰𝘯 𝘑𝘢𝘯𝘨𝘢𝘯 𝘚𝘱𝘢𝘮 𝘉𝘰𝘵 𝘠𝘢 ] ••
       
┏━━ 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 ━⊜
 ∘ ${prefix}public
 ∘ ${prefix}self
 ∘ ${prefix}script
 ∘ ${prefix}listjualan
 ∘ ${prefix}done
 ∘ ${prefix}payment
 © SKERJB🦅
┗━━━━━━━━━━━━━━━━
┏━━ 𝐏𝐔𝐒𝐇𝐊𝐎𝐍 𝐌𝐄𝐍𝐔 ━⊜
 ∘ ${prefix}cekidgc
 ∘ ${prefix}idgc
 ∘ ${prefix}listidgc
 ∘ ${prefix}savekon
 ∘ ${prefix}sendkon
 ∘ ${prefix}pushkonid *id|text*
 ∘ ${prefix}pushkongc *text*
 ∘ ${prefix}pushkonidjd *id|jeda|text*
 ∘ ${prefix}pushkongcjd *jeda|text*
 ∘ ${prefix}saveconid *id*
 ∘ ${prefix}savecongc
 ∘ ${prefix}bcgc *teks*
 ∘ ${prefix}jpm *teks*
 ∘ ${prefix}jpm2 *teks*
 © SKERJB🦅
┗━━━━━━━━━━━━━━━━
`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/d7e076445d699e76585a6.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "public": {
if (!isOwner) return reply("mess.only.owner")
haikal.public = true
reply("mess.success")
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "self": {
if (!isOwner) return reply(mess.only.owner)
haikal.public = false
reply(mess.success)
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "owner": {
const repf = await haikal.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
haikal.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Ini Owner Ku Kak Kalo Mau Buy Panel Ke Dia Aja`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "sc" :
case "script": {
const text12 = `
Script Ini Di Jual Hanya Dengan Harga 10K No Enc.
Jangan Bagikan Sc Ini Secara Free !!, Jika Ketahuan WhatsApp Anda Tidak Akan Aman² Saja.
Contact Owner :
Telegram : t.me/sker_jb
WhatsApp : wa.me/6282140981331`
reply(text12)
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case 'payment':{
const owned = `${global.ownerNumber}@s.whatsapp.net`
let rsm = `*Hi @${sender.split("@")[0]} 👋*

[ Foto Di Atas Adalah Qris Dan Silahkan Scan Jika Perlu ]͏͏͏͏͏

Dana : ${global.nodana}
Gopay : ${global.nogopay}
Ovo : ${global.noovo}

[ Sertakan Bukti Pembayaran Ya Mas :)]`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/1679fab706e5c4e793f36.jpg` }, caption: `${rsm}` }, { quoted: m })
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "listjualan": {
const text12 = `
🦅 Kazerion Digital Store 🦅    

𝗥𝗘𝗔𝗗𝗬 ✅
•••••••••••••••••••••••••••••••••••••••••••••••••
𝗟𝗜𝗦𝗧 𝗣𝗔𝗡𝗘𝗟 𝗕𝗜𝗔𝗦𝗔 :

𝗥𝗔𝗠 𝟭 𝗚𝗕 𝗖𝗣𝗨 𝟯𝟬% 𝗥𝗣 𝟮.𝟬𝟬𝟬 / 𝗕𝗨𝗟𝗔𝗡
𝗥𝗔𝗠 𝟮 𝗚𝗕 𝗖𝗣𝗨 𝟲𝟬% 𝗥𝗣 𝟰.𝟬𝟬𝟬 / 𝗕𝗨𝗟𝗔𝗡
𝗥𝗔𝗠 𝟯 𝗚𝗕 𝗖𝗣𝗨 𝟴𝟬% 𝗥𝗣 𝟲.𝟬𝟬𝟬 / 𝗕𝗨𝗟𝗔𝗡
𝗥𝗔𝗠 𝟱 𝗚𝗕 𝗖𝗣𝗨 𝟭𝟰𝟬% 𝗥𝗣 𝟳.𝟬𝟬𝟬 / 𝗕𝗨𝗟𝗔𝗡
𝗥𝗔𝗠 & 𝗖𝗣𝗨 𝗨𝗡𝗟𝗜𝗠𝗜𝗧𝗘𝗗 𝟴.𝟬𝟬𝟬 / 𝗕𝗨𝗟𝗔𝗡
•••••••••••••••••••••••••••••••••••••••••••••••••
𝗟𝗜𝗦𝗧 𝗦𝗖𝗥𝗜𝗣𝗧 :

• 𝗦𝗖 𝗖𝗣𝗔𝗡𝗘𝗟 𝗦𝗜𝗠𝗣𝗟𝗘 𝗩𝟳 [ 𝟭𝟬𝗞 ]
• 𝗦𝗖 𝗖𝗣𝗔𝗡𝗘𝗟 𝗦𝗜𝗠𝗣𝗟𝗘 𝗩𝟴 [ 𝟭𝟮𝗞 ]
• 𝗦𝗖 𝗛𝗪 𝗩𝟮𝟰 𝗢𝗥𝗜𝗚𝗜𝗡𝗔𝗟 [ 𝟰𝟬𝗞 ]
• 𝗦𝗖 𝗦𝗨𝗕𝗗𝗢 𝟮𝟯 𝗗𝗢𝗠𝗔𝗜𝗡 [ 𝟭𝟬𝗞 ]
• 𝗦𝗖 𝟭𝟬𝟬𝟬+ 𝗙𝗜𝗧𝗨𝗥 [ 𝟴𝗞 ]
• 𝗦𝗖 𝗣𝗨𝗦𝗛𝗞𝗢𝗡𝗧𝗔𝗞 [ 𝟴𝗞 ]
•••••••••••••••••••••••••••••••••••••••••••••••••
𝗟𝗜𝗦𝗧 𝗞𝗘𝗕𝗨𝗧𝗨𝗛𝗔𝗡 𝗣𝗧𝗘𝗥𝗢 :

• 𝗝𝗔𝗦𝗔 𝗜𝗡𝗦𝗧𝗔𝗟 𝗣𝗔𝗡𝗘𝗟 & 𝗪𝗜𝗡𝗚𝗦 [ 𝟭𝟬𝗞 ]
• 𝗝𝗔𝗦𝗔 𝗜𝗡𝗦𝗧𝗔𝗟𝗟 𝗪𝗜𝗡𝗚𝗦  [ 𝟴𝗞 ]
• 𝗝𝗔𝗦𝗔 𝗜𝗡𝗦𝗧𝗔𝗟𝗟 𝗧𝗛𝗘𝗠𝗘 [ 𝟭𝟬𝗞 ]
• 𝗦𝗖 𝗧𝗛𝗘𝗠𝗘 𝗕𝗜𝗟𝗟𝗜𝗡𝗛 [ 𝟭𝟱𝗞 ]
• 𝗦𝗖 𝗧𝗛𝗘𝗠𝗘 𝗦𝗧𝗘𝗟𝗟𝗔𝗥 [ 𝟭𝟬𝗞 ]
•••••••••••••••••••••••••••••••••••••••••••••••••
🛒› VPS/RDP BY LINODE

- [ RAM 4 CORE 2 ]
  • 25K
  • IDR.25.000

- [ RAM 8 CORE 4 ]
  • 30K
  • IDR.30.000

- [ RAM 16 CORE 6 ]
  • 35K
  • IDR.35.000

• Free Install Pterodactyl
• Free tema Diatas Ram 8
• Free Akses Vps 30 Hari
            [ No Garansi ]
•••••••••••••••••••••••••••••••••••••••••••••••••
• ADMIN PANEL/BULAN
  • 10K
  • IDR.10.000
• PT PANEL/BULAN
  • 15K
  • IDR.15.000

NO PTPT🫡
•••••••••••••••••••••••••••••••••••••••••••••••••
Buy? Pv • t.me/sker_jb
Testi? • t.me/sker_jb

Ragu? Mc In🫡`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/d7e076445d699e76585a6.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
           case 'done':{
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nominal`);
let barang = t[0];
let nominal = t[1];
reply(`
*━━ TRANSAKSI BERHASIL BY SKERJB ━━*

 _• *Barang:* ${barang}_
 _• *Nominal:* Rp${nominal}_
 _• *Nama Store:* ${botname}_

*TERIMA KASIH TELAH ORDER DI ${global.botname}*\n*JANGAN LUPA ORDER LAGI YA*🙏`)
}
        break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "listidgc": {
if (!isOwner) return reply(mess.only.owner)
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `ID GRUP\n\n`
for (let x of anu) {
let metadata2 = await haikal.groupMetadata(x)
teks += `${metadata2.id}\n`
}
reply(teks + `\nUntuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "cekidgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
    await reply(mess.wait)
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await haikal.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "pushkonid":{
if (!isOwner) return reply(`Khusus Owner`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(mess.wait)
const groupMetadataa = !isGroup? await haikal.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await haikal.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(4000)
} else {
await haikal.sendMessage(mem, { text: global.tekspushkon })
await sleep(4000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:haikal🦅[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await haikal.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "pushkongc":{
if (!isOwner) return reply(`Khusus Owner`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
reply(mess.wait)
const groupMetadata = isGroup? await haikal.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await haikal.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(30000)
} else {
await haikal.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(30000)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:SkerJb🦅[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await haikal.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "pushkonidjd":
if (!isOwner) return reply(`Khusus Owner`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("Laksanakan Bos")
const groupMetadataa = !isGroup? await haikal.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await haikal.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await haikal.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Succes Bos!")
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "pushkongcjd":
if (!isOwner) return reply(`Khusus Owner`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await reply("Laksanakan Bos")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await haikal.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await haikal.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Success!")
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "savecongc": {
if (!isOwner) return reply(`Khusus Owner`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = isGroup? await haikal.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:SkerJb🦅[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await haikal.sendMessage(sender, { document: fs.readFileSync("./data/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case 'idgc': case 'getkontak':
if (!isOwner) return reply(`Khusus Owner`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
huhuhs = await haikal.sendMessage(m.chat, {
    text: `*ID :* ${groupMetadata.id}\n\nJangan Lupa Di Salin Idnya!!*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
reply
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case 'savekon': case 'svkontak':
if (!isOwner) return reply(`Khusus SKERJB Aja`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
let cmiggc = await haikal.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
haikal.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case 'sendkon': case 'kontak':
if (!isOwner) return reply(`Khusus Owner`)
if (!isGroup) return m.reply(`Khusus Group`)
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
haikal.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "saveconid": {
if (!isOwner) return reply(`Khusus Owner`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !isGroup? await haikal.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await haikal.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "jpm": case "jpm2":{
if (!isOwner) return reply(`Khusus Owner`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await haikal.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await haikal.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await haikal.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*Done Bos✅*")
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case 'jpmfoto': case 'jpmvidio': {
if (!isOwner) return reply(`Khusus Owner`)
        if (!q) return reply(`*Enter Text*`)
        let getGroups = await haikal.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        reply(`\`\`\`Broadcasting in\`\`\` *${xeoncast.length}* \`\`\`Group Chat, in\`\`\` *${xeoncast.length * 1.5} seconds*`)
        for (let i of xeoncast) {
let txt = `*${global.ownerName}'s Broadcast*\n\n\`\`\`Message :\`\`\` *${q}*`
if(/image/.test(mime)) {
let media = await quoted.download()
await haikal.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await haikal.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        reply(`\`\`\`Successfuly Broadcasted in\`\`\` *${xeoncast.length} Groups*`)      
}
        break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case 'bcgc': {
if (!isOwner) return reply(`Khusus Owner`)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} Bos!!?`
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Jpm Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(3000)
haikal.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply('Khusus Premium')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply('Khusus Premium')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return m.reply('Khusus Premium')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
