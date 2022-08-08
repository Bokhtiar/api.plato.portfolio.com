const {Schema, model} = require('mongoose')
/*field create */

const ContactScheme = new Schema({
    name: {
        type: String,
        trime: true,
        require: true,
    },
    email: {
        type: String,
        require: true,
        trime: true,
    },
    subject: {
        type: String,
        require: true,
    },
    text: {
        type: String,
        require: true
    }

}, {
    timestamps: true
})

/**table name create */
const contacts = model('contacts', ContactScheme)
module.exports = contacts