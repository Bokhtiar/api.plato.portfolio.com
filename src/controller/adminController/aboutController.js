const { FileUpload } = require('../../helpers/images');
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
        const {
            title,
            body,
            about1,
            about2,
            about3,
            about4,
        } = req.body

        /**image file upload */
        const image = req.files.image
        if(!image){
            res.status(404).json({
                status: true,
                message: "File upload something went wrong..."
            })
        }
      
        const uploadFile = await FileUpload(image,  "./uploads/about/")
        if(!uploadFile){
            res.status(404).json({
                    status: true,
                    message: "File upload something went wrong..."
                })
        }

        const newAbout = new abouts({
            title,
            body,
            about1,
            about2,
            about3,
            about4,
            image: uploadFile
        })
        
        await newAbout.save()

        res.status(201).json({
            status: true,
            message: "About Successfully Done."
        })

    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = {
    Index,
    Store
}