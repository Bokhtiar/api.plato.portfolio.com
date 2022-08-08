const { FileUpload, Host } = require('../../helpers/images')
const websettings = require('../../models/webSettings')

const Index = async(req, res, next) => { 
    try {
        const items = []
        const results = await websettings.find()
        if(!results){
            res.status(404).json({
                status : false,
                message: "Something Went Wrong..."
            })
        }

        for (let i = 0; i < results.length; i++) {
            const element = results[i];
            items.push({
                _id : element._id,
                name: element.name,
                location: element.location,
                phone: element.phone,
                heading1: element.heading1,
                text: element.text,
                email: element.email,
                image: element.image
                ? Host(req) + "uploads/websetting/" + element.image
                : null,
                logo: element.logo
                ? Host(req) + "uploads/websetting/" + element.logo
                : null,
            })
            
        }
        res.status(201).json({
            status : true,
            data : items
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}


/*store function */
const Store = async(req, res, next) => {
    try {
        if(!req.files.logo){
            res.status(404).json({
                status: false,
                message: "Select your logo"
            })
        }
        if(!req.files.image){
            res.status(404).json({
                status: false,
                message: "Select your logo"
            })
        } 

        const {
            name, email, phone, location, text, heading1,
        } = req.body

        const logo = req.files.logo
        const image = req.files.image
        const uploadLogo = await FileUpload(logo, './uploads/websetting/')
        const uploadImage = await FileUpload(image, './uploads/websetting/')

        const newWebSetting = new websettings({
            name,
            heading1,
            location,
            phone,
            email,
            text,
            image: uploadImage,
            logo: uploadLogo
        })

        await newWebSetting.save()
        
        res.status(201).json({
            status: true,
            message: "Websetting Created Successfully..."
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

/*destroy */
const Destroy = async(req, res, next) => {
    try {
        const {id} = req.params
        const result = await websettings.findByIdAndDelete(id)

        res.status(201).json({
            status: true,
            message: "Deleted Successfully Done..."
        })

    } catch (error) {
        console.log(error);
        next(error)
    }
}
module.exports = {
    Index,
    Store,
    Destroy
}