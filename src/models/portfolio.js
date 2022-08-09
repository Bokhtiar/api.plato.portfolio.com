const {Schema, model, mongoose} = require('mongoose')

/*fild deaclear */  
const portfolioSchema = new Schema({
    category: {
        type: mongoose.Types.ObjectId,
        ref: "categories"
    },
    title: {
        type: String,
        trime: true,
        require: true 
    },
	body: { 
        type: String,
        trime: true,
        require: true
    },
	image: {
        type: String,
        trime: true,
        require: true
    },
	project_url:{
        type: String,
        trime: true,
        require: false
    },
	client_name:{
        type: String,
        trime: true,
        require: false
    },
	start_time: {
        type: String,
        trime: true,
        require: false
    },
    portfolioStatus: {
        type: Boolean,
        default: false
    }

},{
    timestamps: true
})

/*table name dacleare */
const portfolios = model('portfolios', portfolioSchema)
module.exports = portfolios
