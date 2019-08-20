const authRouter = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const{usernameExist, emailExist} = require('../middlewares/auth');
const{ validateUserDetails, validateLoginDetails, checkValidationResult} = require('../middlewares/validations');
const{createUser, loginUser} = userCtrl;

authRouter.post('/auth/signup', validateUserDetails, checkValidationResult, usernameExist, emailExist, createUser);
authRouter.post('/auth/login', validateLoginDetails, checkValidationResult, loginUser);

module.exports = authRouter;