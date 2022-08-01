const AdminAuthRoute = require('express').Router()
const AuthController = require('../../../controller/adminController/authController')
const {validateRequest,
     isRequestValidated,
     loginValidateRquest, 
     isLoginRequestValidated,
    } = require('../../../validator/adminAuth')

    AdminAuthRoute.post('/register',validateRequest, isRequestValidated, AuthController.register)
    AdminAuthRoute.get('/list', AuthController.adminList)
    AdminAuthRoute.post('/login', loginValidateRquest,isLoginRequestValidated, AuthController.Login)
    

module.exports = AdminAuthRoute