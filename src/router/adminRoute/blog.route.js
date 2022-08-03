const blogRoute = require('express').Router()
const blogController = require('../../controller/adminController/blogController')
const { BlogvalidateRequest, isBlogRequestValidated } = require('../../validator/blog')

    blogRoute.post('/',BlogvalidateRequest,isBlogRequestValidated, blogController.Store)

module.exports = blogRoute