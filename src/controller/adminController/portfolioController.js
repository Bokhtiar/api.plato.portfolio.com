const { FileUpload } = require('../../helpers/images')
const portfolios = require('../../models/portfolio')

/*list portfolios */
const Index = async(req, res, next) => {
    try {   
        const results = await portfolios.find()
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

/*store portfolios */
const Store = async(req, res, next) => {
    try {

        if(!req.files){
            res.status(404).json({
                status: false,
                message: "Image fild is require"
            })
        }

        const {
            title,
            body,
            project_url,
            client_name,
            start_time
        } = req.body

        const image = req.files.image
        const uploadFile = await FileUpload(image, "./uploads/portfolio/")
        if(!uploadFile){
            res.status(404).json({
                status: false,
                message: "Something went wrong file upload"
            })
        }     
        const newPortfolio = new portfolios({
            title,
            body,
            image: uploadFile,
            project_url,
            client_name,
            start_time
        })
        await newPortfolio.save()
        res.status(201).json({
            status: true,
            message: "Portfolio Created Succssfully Done..."
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