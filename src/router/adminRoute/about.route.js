const AboutRoute = require('express').Router()
const aboutController = require('../../controller/adminController/aboutController')

    AboutRoute.get('/', aboutController.Index)
    AboutRoute.post('/', aboutController.Store)
    

module.exports = AboutRoute