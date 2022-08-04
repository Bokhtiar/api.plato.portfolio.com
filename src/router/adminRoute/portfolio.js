const portfolioRoute = require('express').Router()
const portfolioController = require('../../controller/adminController/portfolioController')
const { PortfoliovalidateRequest, isPortfolioRequestValidated } = require('../../validator/portfolio')
    
    portfolioRoute.get('/',portfolioController.Index)
    portfolioRoute.post('/',PortfoliovalidateRequest,isPortfolioRequestValidated, portfolioController.Store)

module.exports = portfolioRoute