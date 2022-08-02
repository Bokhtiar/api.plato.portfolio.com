const appRoute = require('express').Router()
const AdminAuthRoute = require('../router/adminRoute/auth/auth.route')
const categoryRoute = require('./adminRoute/category.route')

appRoute.use('/admin', AdminAuthRoute)
appRoute.use('/admin/category', categoryRoute)

module.exports = appRoute