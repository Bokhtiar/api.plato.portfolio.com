const {Schema, model} = require('mongoose')

/* table fild decleared */
const adminSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    phone : {
        type: String,
        default: null,

    },
    image : {
        type: String,
        default: null,

    },
    role: {
        type: String,
        default: "admin",
    }
},{
    timestamps: true
})

/* table name declear admins */
const admins = model('admins', adminSchema)
module.exports = admins