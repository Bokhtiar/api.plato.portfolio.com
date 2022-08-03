const appRoute = require('express').Router()
const AdminAuthRoute = require('../router/adminRoute/auth/auth.route')
const blogRoute = require('./adminRoute/blog.route')
const categoryRoute = require('./adminRoute/category.route')

appRoute.use('/admin', AdminAuthRoute)
appRoute.use('/admin/category', categoryRoute)
appRoute.use('/admin/blog', blogRoute)

module.exports = appRoute