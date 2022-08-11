const portfolios = require('../../models/portfolio')
const {Host} = require('../../helpers/images')

/*portfolio list show */ 
const List = async(req, res, next) => {
    try {
        const items = []
        const results = await portfolios.find().populate('category')
        if(!results){
            res.status(404).json({
                status: true,
                message: "Something Went Wrong...."
            })
        }
    
        for (let i = 0; i < results.length; i++) {
            const element = results[i];
            items.push({
                _id: element._id,
                title: element.title,
                body: element.body,
                project_url: element.project_url,
                start_date: element.start_time,
                client_name: element.client_name,
                category: element.category,
                image: element.image
                ? Host(req) + "uploads/portfolio/" + element.image
                : null,
            })

            
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

/**details */
const Show = async(req, res, next) => {
    try {
        const {id} = req.params
        const item = []
        const result = await portfolios.findById(id).populate('category')
         
        item.push({
            title : result.title,
            category : result.category,
            body : result.body,
            image: result.image
            ? Host(req) + "uploads/portfolio/" + result.image
            : null,
            project_url: result.project_url,
            client_name: result.client_name,
            start_time: result.start_time,
        })

        res.status(201).json({
            status: true,
            data : item
        })
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    List,
    Show
}