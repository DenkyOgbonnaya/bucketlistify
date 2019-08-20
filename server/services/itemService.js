const Item = require('../models/item');

const ItemService = {
    async create(item){
        try{
            return createdItem = await Item.create(item)
        }catch(err){
            throw err;
        }
    },
    async items(bucket_id){
        try{
            return ItemList = await  Item.find({bucket: bucket_id}, '-__v');
          }catch(err){
            throw err;
        }
    },
    async getOne(id, item_id){
        try{
            return item = await  Item.findOne({bucket: id, _id: item_id}, '-__v');
          }catch(err){
            throw err;
        }
    },
    async update(id, item_id, credentials){
        try{
            return updated = await  Item.findOneAndUpdate({bucket: id, _id: item_id}, {$set: credentials}, {new: true});
        }catch(err){
            throw err;
        }
    },
    async delete(id, item_id){
        try{
            return deleted = await  Item.findOneAndRemove({bucket: id, _id: item_id});
        }catch(err){
            throw err;
        }
    },
}

module.exports = ItemService;