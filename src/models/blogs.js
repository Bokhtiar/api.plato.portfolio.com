const {Schema, model, mongoose} = require('mongoose')

/*table fild create */
const blogSchema = new Schema({
    creator: {
        type: mongoose.Types.ObjectId,
        ref: "admins"
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "categories"
    },
    title: {
        type: String,
        require: true,
        trime: true
    },
    short_des: {
        type: String,
        require:true
    },
    long_des: {
        type: String,
        require:true
    },
    image: {
        type: String,
    },
    blogStatus: {
        type: Boolean,
        default: false,
    }

}, {
    timestamps: true
})
/*create database table */
const blogs = model('blogs', blogSchema)
module.exports = blogs