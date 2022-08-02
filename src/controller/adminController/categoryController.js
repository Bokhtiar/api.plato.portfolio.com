const categories = require('../../models/categories')

/*category list show */
const Index = async(req, res, next) => {
    try {
        const results = await categories.find()
        res.status(200).json({
            status:true,
            data : results
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

/*create store*/
const Store = async(req, res, next) => {
    try {
        const {
            name,
            image,
        } = req.body
        
        const newCategory = new categories({
            name,
            image,
            slug: name,
        })
        await newCategory.save()
        res.status(200).json({
            status: true,
            message: "Successfully Category Done...!"
        })
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}
 
module.exports = {
    Index,
    Store,
} 