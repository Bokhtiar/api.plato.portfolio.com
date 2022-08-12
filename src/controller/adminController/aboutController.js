const { FileUpload, Host } = require('../../helpers/images');
const abouts = require('../../models/about')

/**index */
const Index = async(req, res, next) => {
    try {
        const results = await abouts.find()
        res.status(201).json({
            status:true,
            data: results
        })
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

/**show */
const Show = async(req, res, next) => {
    try {
        const {id} = req.params
        const item = []
        const result = await abouts.findById(id)
        item.push({
            _id : result._id,
            title: result.title,
            body : result.body,
            about1: result.about1,
            about2: result.about2,
            about3: result.about3,
            about4: result.about4,
            updateImage: result.image,
            image: result.image
            ? Host(req) + "uploads/about/" + result.image
            : null,
        })
        res.status(201).json({
            status: true,
            data: item
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

/**Destroy */
const Destroy = async(req, res, next) => {
    try {
        const {id} = req.params
        console.log("resid",id)
        const isRemove = await abouts.findByIdAndDelete(id)
        if(!isRemove){
            res.status(404).json({
                status: false,
                message: "remove about"
            })
        }
        res.status(201).json({
            status: true,
            message: "About Already Delete"
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = {
    Index,
    Store,
    Show,
    Destroy
}