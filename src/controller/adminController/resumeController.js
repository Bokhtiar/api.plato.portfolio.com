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
            title, type, short_des, long_des,date
        } = req.body
       
  
        /*check same title*/
        const existTitle = await resumes.findOne({title})
        if(existTitle){
            res.status(503).json({
                status: false,
                message: "Already Exists Title"
            })
        }

       
            
        
        const newResume = new resumes({
            title,
            type,
            short_des,
            long_des,
            date
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
        const {id} = req.params
        const resume = await resumes.findById(id)
        if(!resume){
            res.status(404).json({
                status: true,
                message: "Something went wrong...",
            })
        }

        if(resume.resumeStatus == false){
            resume.resumeStatus = true
            resume.save()
            res.status(201).json({
                status: true,
                message: "Active Status Change Successfully."
            })
        }else{
            resume.resumeStatus = false
            resume.save()
            res.status(201).json({
                status: true,
                message: "Inactive Status Change Successfully."
            })
        }

        
        res.status(201).json({
            status: true,
            
        })
    } catch (error) {
        console.log(error);
        next()
    }
}


/*resumes destroy*/
const Destroy = async(req, res, next) => {
    try {
        const {id} = req.params
        const resume = await resumes.findByIdAndDelete(id)
        if(!resume){
            res.status(404).json({
                status: false,
                message: "Something Went Wrong..."
            })
        }

        res.status(201).json({
            status: true,
            message: "Deleted Successfully Done..."
        })

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