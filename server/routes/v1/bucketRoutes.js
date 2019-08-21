const BucketRouter = require('express').Router();
const bucketController = require('../../controllers/bucketController');
const itemController = require('../../controllers/itemController');
const{validateBucketitem, validateBucketlist, checkValidationResult} = require('../../middlewares/validations');
const {hasAccess} = require('../../middlewares/auth');

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
.post(hasAccess, validateBucketlist, checkValidationResult, createBucket)
.get(hasAccess, getBucketList)

BucketRouter.route('/bucketlists/:id')
.get(hasAccess, getSingleBucket)
.put(hasAccess, validateBucketlist, checkValidationResult, updateBucket)
.delete(hasAccess, deleteBucket)

BucketRouter.route('/bucketlists/:id/items')
.post(hasAccess, validateBucketitem, checkValidationResult, createItem)
.get(hasAccess, getItems)

BucketRouter.route('/bucketlists/:id/items/:item_id')
.get(hasAccess, getSingleItem)
.put(hasAccess, validateBucketitem, checkValidationResult, updateItem)
.delete(hasAccess, deleteItem)

module.exports = BucketRouter