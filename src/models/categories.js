const {Schema, model} = require('mongoose')

/*categories table fild define */
const CategorySchema = new Schema({
    name: {
        type: String,
        trime : true,
        require : true
    },
    slug:{
        type: String,
        trime: true,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    cat_status: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

/*table name define*/
const categories = model('categories', CategorySchema)
module.exports = categories