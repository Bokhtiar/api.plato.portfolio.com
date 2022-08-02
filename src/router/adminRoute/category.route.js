const categoryRoute = require('express').Router()
const categoryController = require('../../controller/adminController/categoryController')
const { CategoryvalidateRequest, isCategoryRequestValidated } = require('../../validator/category')


    categoryRoute.get('/', categoryController.Index)
    categoryRoute.get('/:id', categoryController.Show)
    categoryRoute.post('/', CategoryvalidateRequest, isCategoryRequestValidated, categoryController.Store)
    categoryRoute.delete('/:id', categoryController.Destroy)
module.exports = categoryRoute