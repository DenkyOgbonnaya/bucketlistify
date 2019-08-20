const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const{usernameExist, emailExist} = userService;

module.exports.usernameExist = async (req, res, next) => {
    const{username} = req.body;
    try{
        const isUsername = await usernameExist(username);
        if(isUsername)
            return res.status(400).send({status: 'error', message: 'This username is taken'})
            
        next();
    }catch(err){
        throw err
    }
}
module.exports.emailExist = async (req, res, next) => {
    const{email} = req.body;
    try{
        const isEmail = await emailExist(email);
        if(isEmail)
            return res.status(400).send({status: 'error', message: 'This email is taken'})
            
        next();
    }catch(err){
        throw err
    }
}
