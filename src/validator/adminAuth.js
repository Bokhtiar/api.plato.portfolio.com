const { check, validationResult } = require('express-validator');

exports.validateRequest = [
    check('name').notEmpty().withMessage('Name is required...!'),
    check('email').notEmpty().withMessage('Email is required...!'),
    check('email').isEmail().withMessage('Email Formate Eroor...!'),
]

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.array().length > 0){
        res.status(400).json({error: errors.array()[0].msg})
    }
    next()
}
    