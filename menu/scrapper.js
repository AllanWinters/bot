const a = '```'
const scrapper = (prefix, pushname2, groupName, user, name) => {
return `
╭─────≽「 *USER INFO* 」
┴
┣⊱  ${a}NAMA USER:${a} *${pushname2}*
┣⊱  ${a}NAMA GRUP:${a} *${groupName}*
┣⊱  ${a}VERSION:${a} *1.0.0*
┣⊱  ${a}USER TERDAFTAR:${a} *${user.length} User*
┬
╰────────────────────────

╭──≽「 *STORY & SCRAPPER MENU* 」
┴
┠≽ *${prefix}wattpad tere liye*
┠≽ *${prefix}randomkpop*
┠≽ *${prefix}cersex*
┠≽ *${prefix}randombokep*
┠≽ *${prefix}pornhub stepMoms*
┠≽ *${prefix}xvideos japan*
┠≽ *${prefix}xnxx japan*
┠≽ *${prefix}nekopoi oni chichi*
┬
╰────────────────────────
`
}
exports.scrapper = scrapper
