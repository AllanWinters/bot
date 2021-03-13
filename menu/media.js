const a = '```'
const mediaa = (prefix, pushname2, groupName, user, name) => {
return `

╭─────≽「 *USER INFO* 」
┴
┣⊱  ${a}NAMA USER:${a} *${pushname2}*
┣⊱  ${a}NAMA GRUP:${a} *${groupName}*
┣⊱  ${a}VERSION:${a} *1.0.0*
┣⊱  ${a}USER TERDAFTAR:${a} *${user.length} User*
┬
╰────────────────────────

͏͏͏͏͏͏͏͏͏͏͏͏͏͏╭─────≽「 *MEDIA MENU & DOWNLOAD* 」
┴
┠≽ *${prefix}tiktokstalk username*
┠≽ *${prefix}igstalk _farhan_xcode7*
┠≽ *${prefix}tiktoksearch dayana*
┠≽ *${prefix}instavid link valid*
┠≽ *${prefix}instaimg link valid*
┠≽ *${prefix}instastory username*
┠≽ *${prefix}ssweb url*
┠≽ *${prefix}url2img Url*
┠≽ *${prefix}tiktok*
┠≽ *${prefix}fototiktok*
┠≽ *${prefix}kbbi*
┠≽ *${prefix}wait*
┬
╰────────────────────────
`
 }

exports.mediaa = mediaa
