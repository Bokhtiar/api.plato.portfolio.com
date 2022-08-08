const { check, validationResult } = require('express-validator');

/*register validation*/
exports.WebsettingvalidateRequest = [
    check('name').notEmpty().withMessage('name is required...!'),
    check('email').notEmpty().withMessage('email is required...!'),
    check('text').notEmpty().withMessage('Long Description is required...!'),
    check('phone').notEmpty().withMessage('phone is required...!'),
    check('location').notEmpty().withMessage('location is required...!'),
    check('heading1').notEmpty().withMessage('heading1 is required...!'),

]

exports.isWebsettingRequestValidated = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.array().length > 0){
        res.status(400).json({error: errors.array()[0].msg})
    }
    next()
}