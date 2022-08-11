const UserCategoryRoute = require('express').Router()
const CategoryController = require('../../controller/userController/categoryController')
   
    UserCategoryRoute.get('/', CategoryController.Index)

module.exports = UserCategoryRoute