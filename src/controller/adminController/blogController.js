const { FileUpload, DeleteFile } = require('../../helpers/images')
const blogs = require('../../models/blogs')

/*blog list */
const Index = async(req, res, next) => {
    try {
        const results = await blogs.find().populate('category')
        res.status(201).json({
            status: true,
            data: results
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

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

/*blog show */
const Show = async(req, res, next) => {
    try {
        const {id} = req.params
        const result = await blogs.findById(id)
        if(!result){
            res.status(200).json({
                status: false,
                message: "Something Went Wrong..."
            })
        }
        res.status(201).json({
            status: true,
            data: result
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

/*status chnge */
const Status = async(req, res, next) => {
    try {
        const {id} = req.params

        const blog = await blogs.findById(id)
        if(!blog){
            res.status(404).json({
                status: true,
                message: "Something Went Wrong...!"
            })
        }
        
        if(blog.blogStatus == false){
            blog.blogStatus = true
            blog.save()
            res.status(201).json({
                status: true,
                message: "Status Change Successfully."
            })
        }else{
            blog.blogStatus = false
            blog.save()
            res.status(201).json({
                status: true,
                message: "Status Change Successfully."
            })
        }

    } catch (error) {
        console.log(error);
        next(error)
    }
}
/*blog Destroy */
const Destroy = async(req, res, next) => {
    try {
        const {id} = req.params
        const isRemove = await blogs.findByIdAndRemove(id)
        if(!isRemove){
            res.status(404).json({
                status: true,
                message: "Something Went Wrong...!"
            })
        }

        await DeleteFile("./uploads/blog/", isRemove.image)

        res.status(200).json({
            status: true,
            message: "Blog Deleted Successfully...!",
          });
    } catch (error) {
        
    }
}



module.exports = {
    Index,
    Store,
    Destroy,
    Show,
    Status
}