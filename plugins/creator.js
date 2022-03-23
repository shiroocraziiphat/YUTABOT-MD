const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Hyzer;;;'
                    + 'FN:Hyzer\n' // full name
                    + 'ORG:Hyzer;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=628789271054:+62 878 9271 1054\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Hyzerr', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
