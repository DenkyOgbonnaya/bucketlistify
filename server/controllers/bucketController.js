const bucketService = require('../services/bucketService');

const bucketCtrl = {
    async createBucket(req, res){
        try{
            const bucket = await bucketService.create(req.body);
            return res.status(201).send({
                status: 'success',
                bucket: bucket,
                message: 'New bucketlist created succesfully'
            })
        }catch(err){
            res.status(500).send({message: err.message});    
        }
    },
    async getBucketList(req, res){
        const page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 20;
        const search = req.query.q;
        const created_by = req.query.created_by;
        let query = {};

        if(limit > 100)
            limit = 100;
        if(search)
            query.name = {$regex: search, $options: 'i'}
        if(created_by)
            query.created_by = created_by;

       try{
           const bucketList = await bucketService.list(query, {page, limit});
           const bucketListCount = await bucketService.bucketListCount(created_by);

           if(bucketList.length === 0 )
                return res.status(204).send({message: 'Empty bucketlist'});
            return res.status(200).send({
                status: 'success',
                bucketList,
                page,
                pages: Math.ceil(bucketListCount/limit),
                total: bucketListCount
                })
        }catch(err){
            res.status(500).send({message: err.message});

        }
    },
    async getSingleBucket(req, res){
        const{id} = req.params;

        try{
            const bucket = await bucketService.getOne(id);
            if(bucket){
                return res.status(200).send({
                    status: 'success',
                    bucket
                })
            }
            return res.status(404).send({message: 'This bucket is not found'});
        }catch(err){
            res.status(500).send({message: err.message})
        }
    },
    
    async updateBucket(req, res){
        const{id} = req.params;

        try{
            const bucket = await bucketService.update(id, req.body);
            return res.status(200).send({status: 'success', bucket})
            
        }catch(err){
            res.status(500).send({message: err.message}); 
        }
    },
    async deleteBucket(req, res){
        const{id} = req.params;
        try{
            const deleted = await bucketService.delete(id);
            return res.status(200).send({status: 'success'})
        }catch(err){
            res.status(400).send({message: err.message});
        }
    },
}
module.exports = bucketCtrl;