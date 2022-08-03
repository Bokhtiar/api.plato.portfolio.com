const { FileUpload } = require('../../helpers/images')
const resumes = require('../../models/resume')

/*resumes list*/
const Index = async(req, res, next) => {
    try {
        const results = await resumes.find()
        if(!results){
            res.status(404).json({
                status: false,
                message: "Something Went Wrong..."
            })
        }

        res.status(201).json({
            status: true,
            data: results
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

/*resumes Store*/
const Store = async(req, res, next) => {
    try {

       
        const {
            title, type, short_des, long_des
        } = req.body
       
  
        /*check same title*/
        const existTitle = await resumes.findOne({title})
        if(existTitle){
            res.status(503).json({
                status: false,
                message: "Already Exists Title"
            })
        }

        /*if select image */
        const image = req.files.image
        const uploadFile = await FileUpload(image, "./uploads/resume/");
        if(!uploadFile){
            res.status(404).json({
                    status: false,
                    message: "File upload something went wrong..."
                })
        }
            
            
        
        const newResume = new resumes({
            title,
            type,
            short_des,
            long_des,
            image: uploadFile
        })
        await newResume.save()

        res.status(201).json({
            status: true,
            message: "Resume Created Successfully Done..."
        })
    } catch (error) {
        console.log(error);
        next()
    }
}

/*resumes Show*/
const Show = async(req, res, next) => {
    try {
        const {id} = req.params
        
        const result = await resumes.findById(id)
        if(!result){
            res.status(404).json({
                status: true,
                message: "Something Went Wrong..."
            })
        }

        res.status(201).json({
            status: true,
            data: result
        })
    } catch (error) {
        console.log(error);
        next()
    }
}


/*resumes Status*/
const Status = async(req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error);
        next()
    }
}


/*resumes destroy*/
const Destroy = async(req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error);
        next()
    }
}

module.exports = {
    Index,
    Store,
    Show,
    Status,
    Destroy
}