const categories = require('../../models/categories')
const {FileUpload} = require('../../helpers/images')

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
        const {name} = req.body
        const image = req.files.image

        /*category file upload FileUpdate() function parametter pass data, and path */
        const uploadFile = await FileUpload(image, "./uploads/category/");
        if(!uploadFile){
            res.status(404).json({
                    status: true,
                    message: "File upload something went wrong..."
                })
        }

        const newCategory = new categories({
            name,
            image: uploadFile,
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