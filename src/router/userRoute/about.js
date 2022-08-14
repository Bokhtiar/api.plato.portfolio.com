const UserAboutRoute = require('express').Router()
const aboutController = require('../../controller/userController/aboutController')

    UserAboutRoute.get('/', aboutController.List)

module.exports = UserAboutRoute