const { check, validationResult } = require('express-validator');

/*register validation*/
exports.validateRequest = [
    check('name').notEmpty().withMessage('Name is required...!'),
    check('email').notEmpty().withMessage('Email is required...!'),
    check('email').isEmail().withMessage('Email Formate Eroor...!'),
]

/*login validation*/
exports.loginValidateRquest = [
    check('email').notEmpty().withMessage('E-mail is required...!'),
    check('email').isEmail().withMessage('Invalid Email Formater'),
    check('password').notEmpty().withMessage('Password is required...!'),
]

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.array().length > 0){
        res.status(400).json({error: errors.array()[0].msg})
    }
    next()
}

exports.isLoginRequestValidated = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.array().length > 0){
        res.status(404).json({error: errors.array()[0].msg})
    }
    next()
}
    