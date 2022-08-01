const AdminAuthRoute = require('express').Router()
const AuthController = require('../../../controller/adminController/authController')
const {validateRequest, isRequestValidated} = require('../../../validator/adminAuth')

    AdminAuthRoute.post('/register',validateRequest, isRequestValidated, AuthController.register)


    AdminAuthRoute.get('/list', AuthController.adminList)
    AdminAuthRoute.post('/login', AuthController.Login)
    

module.exports = AdminAuthRoute