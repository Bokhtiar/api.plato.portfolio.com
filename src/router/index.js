const appRoute = require('express').Router()
const AdminAuthRoute = require('../router/adminRoute/auth/auth.route')
const blogRoute = require('./adminRoute/blog.route')
const categoryRoute = require('./adminRoute/category.route')
const contactRoute = require('./adminRoute/contact')
const portfolioRoute = require('./adminRoute/portfolio')
const resumeRoute = require('./adminRoute/resume.route')
const webSettingRoute = require('./adminRoute/websetting.route')
const UserContactRoute = require('./userRoute/contact')
const UserPortfolioRoute = require('./userRoute/portfolio')
const UserResumeRoute = require('./userRoute/resume')
const UserWebSetting = require('./userRoute/webSetting')

appRoute.use('/admin', AdminAuthRoute)
appRoute.use('/admin/category', categoryRoute)
appRoute.use('/admin/blog', blogRoute)
appRoute.use('/admin/resume', resumeRoute)
appRoute.use('/admin/portfolio', portfolioRoute)
appRoute.use('/admin/websetting', webSettingRoute)
appRoute.use('/admin/contact', contactRoute)

/*public route no protected*/
appRoute.use('/user/resume', UserResumeRoute)
appRoute.use('/user/portfolio', UserPortfolioRoute)
appRoute.use('/user/websetting', UserWebSetting)
appRoute.use('/user/contact', UserContactRoute)

module.exports = appRoute