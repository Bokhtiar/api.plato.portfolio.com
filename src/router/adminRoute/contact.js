const contactRoute = require('express').Router()
const contactController = require('../../controller/adminController/contactController')

    contactRoute.get('/', contactController.List)
    contactRoute.get('/:id', contactController.Show)
    contactRoute.delete('/:id', contactController.Destroy)

module.exports = contactRoute