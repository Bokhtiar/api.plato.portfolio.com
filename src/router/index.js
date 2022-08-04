const appRoute = require('express').Router()
const AdminAuthRoute = require('../router/adminRoute/auth/auth.route')
const blogRoute = require('./adminRoute/blog.route')
const categoryRoute = require('./adminRoute/category.route')
const portfolioRoute = require('./adminRoute/portfolio')
const resumeRoute = require('./adminRoute/resume.route')

appRoute.use('/admin', AdminAuthRoute)
appRoute.use('/admin/category', categoryRoute)
appRoute.use('/admin/blog', blogRoute)
appRoute.use('/admin/resume', resumeRoute)
appRoute.use('/admin/portfolio', portfolioRoute)

module.exports = appRoute