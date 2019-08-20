const BucketRouter = require('express').Router();
const bucketController = require('../controllers/bucketController');
const itemController = require('../controllers/itemController');
const{validateBucketitem, validateBucketlist, checkValidationResult} = require('../middlewares/validations');

const{
    createBucket, 
    getBucketList, 
    getSingleBucket, 
    updateBucket, 
    deleteBucket
} = bucketController;
const{
    createItem, 
    getItems, 
    getSingleItem, 
    updateItem, 
    deleteItem
} = itemController;

BucketRouter.route('/bucketlists')
.post(validateBucketlist, checkValidationResult, createBucket)
.get(getBucketList)

BucketRouter.route('/bucketlists/:id')
.get(getSingleBucket)
.put(validateBucketlist, checkValidationResult, updateBucket)
.delete(deleteBucket)

BucketRouter.route('/bucketlists/:id/items')
.post(validateBucketitem, checkValidationResult, createItem)
.get(getItems)

BucketRouter.route('/bucketlists/:id/items/:item_id')
.get(getSingleItem)
.put(validateBucketitem, checkValidationResult, updateItem)
.delete(deleteItem)

module.exports = BucketRouter