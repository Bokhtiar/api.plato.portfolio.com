const UserResumeRoute = require('express').Router()
const resumeController = require('../../controller/userController/resumeController')
    
    UserResumeRoute.get('/', resumeController.List)

module.exports = UserResumeRoute