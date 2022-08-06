const UserPortfolioRoute = require('express').Router()
const portfolioController = require('../../controller/userController/portfolioController')
    
    UserPortfolioRoute.get('/', portfolioController.List)

module.exports = UserPortfolioRoute