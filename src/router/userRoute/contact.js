const UserContactRoute = require('express').Router()
const contactController = require('../../controller/userController/contactController')

    UserContactRoute.post('/', contactController.Store)

module.exports = UserContactRoute