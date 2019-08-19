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
            res.status(500).send(err.message);    
        }
    },
    async getBucketList(req, res){
       try{
           const bucketList = await bucketService.list();
           if(bucketList.length === 0 )
                return res.status(404).send({message: 'Empty bucketlist'});
            return res.status(200).send({
                status: 'success',
                bucketList,
            })
        }catch(err){
            res.status(500).send(err.message);

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
            res.status(500).send(err.message)
        }
    },
    
    async updateBucket(req, res){
        const{id} = req.params;

        try{
            const bucket = await bucketService.update(id, req.body);
            return res.status(200).send({status: 'success', bucket})
            
        }catch(err){
            res.status(500).send(err.message); 
        }
    },
    async deleteBucket(req, res){
        const{id} = req.params;
        try{
            const deleted = await bucketService.delete(id);
            return res.status(200).send({status: 'success'})
        }catch(err){
            res.status(400).send(err.message);
        }
    },
}
module.exports = bucketCtrl;