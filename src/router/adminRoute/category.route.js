const categoryRoute = require('express').Router()
const categoryController = require('../../controller/adminController/categoryController')
const { CategoryvalidateRequest, isCategoryRequestValidated } = require('../../validator/category')


    categoryRoute.get('/', categoryController.Index)
    categoryRoute.post('/', CategoryvalidateRequest, isCategoryRequestValidated, categoryController.Store)

module.exports = categoryRoute