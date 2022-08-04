const resumes = require('../../models/resume')
const {Host} = require('../../helpers/images')

/*resume list*/
const List = async(req, res, next) => {
    try {
        const items = []
        const results = await resumes.find()
        if(!results){
            res.status(404).json({
                status: false,
                message: "Something went wrong..."
            })
        }

        if(results && results.length > 0){
           for (let i = 0; i < results.length; i++) {
            const element = results[i]
                items.push({
                    _id: element._id,
                    type: element.type,
                    title: element.title,
                    short_des: element.short_des,
                    long_des: element.long_des,
                    image: element.image
                    ? Host(req) + "uploads/resume/" + element.image
                    : null,
                })
               
           }
        }
        
        res.status(201).json({
            status: true,
            data: items
        })

    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = {
    List,
}