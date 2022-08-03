const {Schema, model} = require('mongoose')

/*fild declear*/
const resumeSchema = new Schema({
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
    },
    resumeStatus:{
        type: Boolean,
        default:true
    }
},{
    timestamps:true
})
/*create database table*/
const resumes = model('resumes', resumeSchema)
module.exports = resumes