const mongoose = require('mongoose');

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/bucketlist';

const connectToDb = () => {
    mongoose.connect(dbUrl, {useNewUrlParser: true})
    .then(() => console.log('connected to BucketList db'))
    .catch(err => console.log(err))
}

module.exports = connectToDb;
