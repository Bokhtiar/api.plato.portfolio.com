const abouts = require('../../models/about')

/**index */
const Index = async(req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}


/**Store */
const Store = async(req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = {
    Index,
    Store
}