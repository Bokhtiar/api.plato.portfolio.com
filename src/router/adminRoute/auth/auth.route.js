const AdminAuthRoute = require('express').Router()
const AuthController = require('../../../controller/adminController/authController')

    AdminAuthRoute.post('/register', AuthController.register)
    AdminAuthRoute.get('/list', AuthController.adminList)
    AdminAuthRoute.post('/login', AuthController.Login)
    

module.exports = AdminAuthRoute