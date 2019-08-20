const { check, validationResult } = require('express-validator/check');

module.exports.validateBucketlist = [
    check('name', 'BucketList name is required or too short').not().isEmpty().isLength({min: 2}),
]
module.exports.validateBucketitem = [
    check('name', 'Item name is required or too short').not().isEmpty().isLength({min: 2}),
    check('done', 'done must be true or false').optional().isIn(['true', 'false'])
]
module.exports.validateUserDetails= validateUserData = [
    check('username', 'username is required').isLength({min: 2}),
    check('email', 'valid email  is required').optional().isEmail(),
    check('password', 'password is required or too short').isLength({min: 3})
]
//validate login data
module.exports.validateLoginDetails = [
    check('username', 'username is required').isLength({min: 2}),
    check('password', 'password is required').isLength({min: 3})
]
module.exports.checkValidationResult = (req, res, next) => {
    const result = validationResult(req);
    if(!result.isEmpty())
        return res.status(400).send({message: result.array()[0].msg})
    next();
}