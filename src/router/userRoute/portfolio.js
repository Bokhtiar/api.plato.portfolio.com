const UserPortfolioRoute = require('express').Router()
const portfolioController = require('../../controller/userController/portfolioController')
    
    UserPortfolioRoute.get('/', portfolioController.List)
    UserPortfolioRoute.get('/:id', portfolioController.Show)

module.exports = UserPortfolioRoute