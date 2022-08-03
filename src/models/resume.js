const {Schema, model} = require('mongoose')

/*fild declear*/
const resumeSchema = new Schema({
    type: {
        type: String,
        default : "profession"
    },
    title:{
        type:String,
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
        default: null
    },
    resumeStatus:{
        type: Boolean,
        default: false
    }
},{
    timestamps:true
})
/*create database table*/
const resumes = model('resumes', resumeSchema)
module.exports = resumes