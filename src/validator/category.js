const { check, validationResult } = require('express-validator');

/*register validation*/
exports.CategoryvalidateRequest = [
    check('name').notEmpty().withMessage('Name is required...!'),
]

exports.isCategoryRequestValidated = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.array().length > 0){
        res.status(400).json({error: errors.array()[0].msg})
    }
    next()
}