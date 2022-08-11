const categories = require('../../models/categories')

/**index */

const Index = async(req, res, next) => {
    try {
        const results = await categories.find()
        res.status(201).json({
            status: true,
            data: results
        })
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    Index
}