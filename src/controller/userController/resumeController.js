const resumes = require('../../models/resume')

/*resume list*/
const List = async(req, res, next) => {
    try {
        const results = await resumes.find()
        if(!results){
            res.status(404).json({
                status: false,
                message: "Something went wrong..."
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

module.exports = {
    List,
}