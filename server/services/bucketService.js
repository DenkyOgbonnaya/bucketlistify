const Bucket = require('../models/bucket');

const bucketService = {
    async create(bucket){
        try{
            return createdBucket = await Bucket.create(bucket)
        }catch(err){
            throw err;
        }
    },
    async list(query, paginatioOptions){
        const{page, limit} = paginatioOptions;
        const offset = (page*limit)-limit;

        try{
            return bucketList = await  Bucket.find(query)
            .skip(offset)
            .limit(limit)
            .sort({createdAt: -1})
            .populate('created_by', '-password -__v')
            .populate('items', ' -__v');
          }catch(err){
            throw err;
        }
    },
    async bucketListCount(created_by){
        const query = {};
        if(created_by)
            query.created_by = created_by
        try{
            return count = Bucket.countDocuments(query);
        }catch(err){
            throw err;
        }
    },
    async getOne(id){
        try{
            return bucket = await  Bucket.findById(id).populate('items', '-__v');
          }catch(err){
            throw err;
        }
    },
    async update(id, credentials){
        try{
            return updated = await  Bucket.findByIdAndUpdate(id, {$set: credentials}, {new: true});
        }catch(err){
            throw err;
        }
    },
    async delete(id){
        try{
            return deleted = await  Bucket.findByIdAndRemove(id);
        }catch(err){
            throw err;
        }
    },
}

module.exports = bucketService;