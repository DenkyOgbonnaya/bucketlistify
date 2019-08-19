const BucketRouter = require('express').Router();
const bucketCtrl = require('../controllers/bucketController');

const{
    createBucket, 
    getBucketList, 
    getSingleBucket, 
    updateBucket, 
    deleteBucket
} = bucketCtrl;

BucketRouter.route('/bucketlists')
.post(createBucket)
.get(getBucketList)

BucketRouter.route('/bucketlists/:id')
.get(getSingleBucket)
.put(updateBucket)
.delete(deleteBucket)

module.exports = BucketRouter