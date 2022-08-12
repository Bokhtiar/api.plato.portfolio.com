const {Schema, model} = require('mongoose')

/**field decleared */
const aboutSchema = new Schema({
    image: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    body: {
        type: String,
        require: true
    },
    about1: {
        type: String,
        require: true
    },
    about2: {
        type: String,
        require: true
    },
    about3: {
        type: String,
        require: true
    },
    about4: {
        type: String,
        require: true
    },  
}, {
    timestamps: true
})

/**databae name */
const abouts = model("abouts", aboutSchema)
module.exports = abouts