const categoryRoute = require('express').Router()
const categoryController = require('../../controller/adminController/categoryController')

    categoryRoute.get('/', categoryController.Index)
    categoryRoute.post('/', categoryController.Store)

module.exports = categoryRoute