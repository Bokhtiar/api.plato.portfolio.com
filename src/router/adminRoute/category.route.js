const categoryRoute = require('express').Router()
const categoryController = require('../../controller/adminController/categoryController')

    categoryRoute.post('/', categoryController.Store)

module.exports = categoryRoute