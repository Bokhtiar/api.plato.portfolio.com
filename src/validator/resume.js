const { check, validationResult } = require('express-validator');

/*register validation*/
exports.ResumevalidateRequest = [
    check('title').notEmpty().withMessage('Title is required...!'),
    check('short_des').notEmpty().withMessage('Short Description is required...!'),
    check('long_des').notEmpty().withMessage('Long Description is required...!'),
]

exports.isResumeRequestValidated = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.array().length > 0){
        res.status(400).json({error: errors.array()[0].msg})
    }
    next()
}