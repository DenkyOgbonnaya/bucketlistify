const redis = require('redis');
const JWTR = require('jwt-redis').default;

const redisClient = redis.createClient();
const jwtr = new JWTR(redisClient);

redisClient.on('connect', () => {
    console.log('Redis server connected');
    
})
redisClient.on('error', err => {
    console.log('Err', err);
    
})

module.exports = jwtr;