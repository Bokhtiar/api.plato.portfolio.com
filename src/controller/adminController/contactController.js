const contacts = require('../../models/contact')

/*List*/
const List = async(req, res, next) => {
        try {
            console.log('hey')
            const results = await contacts.find()
            res.status(201).json({
                status: false,
                data: results
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
}

/*contact details */
const Show = async(req, res, next) =>{
    try {
        const {id} = req.params
        const result = await contacts.findById(id)
        res.status(201).json({
            status: true,
            data: result
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

/**contact delete */
const Destroy = async(req, res, next) => {
    try {
        const {id} = req.params
        await contacts.findByIdAndDelete(id)
        res.status(201).json({
            status: true,
            message: "Contact Deleted Successfully."
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}
module.exports = {
    List,
    Show,
    Destroy
}