const contacts = require('../../models/contact')

const Store = async(req, res, next) => {
    try {
        const { name, email, subject, text } = req.body
        const newContact = new contacts({
            name,email,subject,text
        })
        await newContact.save()

        res.status(201).json({
            status: true,
            message: "Contact created successfully"
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
} 

module.exports = {
    Store
}