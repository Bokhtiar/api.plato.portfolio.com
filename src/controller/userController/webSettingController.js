const websettings = require('../../models/webSettings')
const { Host } = require('../../helpers/images')


const Show = async(req, res, next) => {
    
    try {
       const {id} = req.params
        const item = []
        const result = await websettings.findById(id)
        if(!result){
            res.status(404).json({
                status : false,
                message: "Something Went Wrong..."
            })
        }

            item.push({
                _id : result._id,
                name: result.name,
                location: result.location,
                phone: result.phone,
                heading1: result.heading1,
                text: result.text,
                email: result.email,
                image: result.image
                ? Host(req) + "uploads/websetting/" + result.image
                : null,
                logo: result.logo
                ? Host(req) + "uploads/websetting/" + result.logo
                : null,
            })
            
        
        res.status(201).json({
            status : true,
            data : item
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = {
    Show
}