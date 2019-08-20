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
module.exports.hasAccess = (req, res, next) => {
    let token = req.headers['authorization'] || req.headers['x-access-token']
    
    if(token && token.startsWith('Bearer'))
        token = token.slice(7);
    if(!token) return res.status(401 ).send({message: 'Access denied! unauthorized user'})
    
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
        if(err) {
            return res.status(401).send({message: err.message})
        }
    
        next();
    });
}
