const BucketRouter = require('express').Router();
const bucketController = require('../controllers/bucketController');
const itemController = require('../controllers/itemController');

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
.post(createBucket)
.get(getBucketList)

BucketRouter.route('/bucketlists/:id')
.get(getSingleBucket)
.put(updateBucket)
.delete(deleteBucket)

BucketRouter.route('/bucketlists/:id/items')
.post(createItem)
.get(getItems)

BucketRouter.route('/bucketlists/:id/items/:item_id')
.get(getSingleItem)
.put(updateItem)
.delete(deleteItem)

module.exports = BucketRouter