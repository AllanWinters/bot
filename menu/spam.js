const a = '```'
const spam = (prefix, pushname2, groupName, user, name) => {
return `

╭─────≽「 *USER INFO* 」
┴
┣⊱  ${a}NAMA USER:${a} *${pushname2}*
┣⊱  ${a}NAMA GRUP:${a} *${groupName}*
┣⊱  ${a}VERSION:${a} *1.0.0*
┣⊱  ${a}USER TERDAFTAR:${a} *${user.length} User*
┬
╰────────────────────────

╭─────≽「 *SPAMMER MENU* 」
┴
┠≽ *${prefix}spamcall 083xxxxxxxxx*
┠≽ *${prefix}spamgmail contoh@gmail.com*
┬
╰────────────────────────
`
}
exports.spam = spam
