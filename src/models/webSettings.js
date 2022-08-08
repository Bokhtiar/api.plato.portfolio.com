const {Schema , model} = require('mongoose')

/*fild decleare */
const webSettingSchema = new Schema({
    name: {
        type:String,
        trime: true,
        require: true,
    },
    email: {
        type: String,
        trime: true,
        require: true
    },
    heading1: {
        type: String,
        trime: true,
        require: true,
    },
    phone: {
        type: String,
        trime: true,
        require: true,
    },
    location: {
        type: String,
        trime: true,
        require: true,
    },
    text: {
        type: String,
        trime: true,
        require: true
    },
    logo: {
        type: String,
        trime: true,
        require: true,
    },
    image: {
        type: String,
        trime: true,
        require: true,
    }
},{
    timeseries: true
})

/*database table create */
const websettings = model('websettings', webSettingSchema)
module.exports = websettings