const { FileUpload } = require('../../helpers/images')
const blogs = require('../../models/blogs')

/*blog store */
const Store = async(req, res, next) => {
    try {
        /*file check */
        if(!req.files){
            res.status(404).json({
                status: false,
                message: "Blog image is required"
            })
        }
        const {
            creator,
            category,
            title,
            short_des,
            long_des,
            image,
        } = req.body

        /*exist title */
        const exitsTitle = await blogs.findOne({title})
        if(exitsTitle){
            res.status(500).json({
                status: false,
                message: "Already Exists The Title"
            })
        }

        const Fileimage = req.files.image
        const uploadFile = await FileUpload(Fileimage, './uploads/blog/')
        const newBlog = new blogs({
            creator,
            category,
            title,
            slug: title,
            image:uploadFile,
            short_des,
            long_des,
        }) 

        await newBlog.save()
        res.status(201).json({
            status: true,
            message: "Blog Created Successfully Done..."
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = {
    Store,
}