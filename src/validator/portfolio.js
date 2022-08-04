const { check, validationResult } = require('express-validator');

/*register validation*/
exports.PortfoliovalidateRequest = [
    check('title').notEmpty().withMessage('Title is required...!'),
    check('body').notEmpty().withMessage('Body is required...!'),
]

exports.isPortfolioRequestValidated = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.array().length > 0){
        res.status(400).json({error: errors.array()[0].msg})
    }
    next()
}