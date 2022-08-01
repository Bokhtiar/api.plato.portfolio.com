const appRoute = require('express').Router()
const AdminAuthRoute = require('../router/adminRoute/auth/auth.route')

appRoute.use('/admin', AdminAuthRoute)

module.exports = appRoute