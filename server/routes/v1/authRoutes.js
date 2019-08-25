const authRouter = require('express').Router();
const userCtrl = require('../../controllers/userCtrl');
const{usernameExist, emailExist, hasAccess} = require('../../middlewares/auth');
const{ validateUserDetails, validateLoginDetails, checkValidationResult} = require('../../middlewares/validations');
const{createUser, loginUser, logoutUser } = userCtrl;

authRouter.post('/auth/signup', validateUserDetails, checkValidationResult, usernameExist, emailExist, createUser);
authRouter.post('/auth/login', validateLoginDetails, checkValidationResult, loginUser);
authRouter.post('/auth/logout', hasAccess, logoutUser )

module.exports = authRouter;