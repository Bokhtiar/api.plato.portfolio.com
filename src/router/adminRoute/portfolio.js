const portfolioRoute = require('express').Router()
const portfolioController = require('../../controller/adminController/portfolioController')
const { PortfoliovalidateRequest, isPortfolioRequestValidated } = require('../../validator/portfolio')
    
    portfolioRoute.get('/',portfolioController.Index)
    portfolioRoute.post('/',PortfoliovalidateRequest,isPortfolioRequestValidated, portfolioController.Store)
    portfolioRoute.get('/:id',portfolioController.Show)
    portfolioRoute.get('/status/:id',portfolioController.Status)
    portfolioRoute.delete('/:id',portfolioController.Destroy)
module.exports = portfolioRoute