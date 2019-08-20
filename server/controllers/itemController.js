const itemService = require('../services/itemService');

const itemCtrl = {
    async createItem(req, res){
        const{id} = req.params;
        const{name} = req.body;
        try{
            let item = await itemService.create({name, bucket: id});
            let itemObj = item.toObject();
            delete itemObj.bucket;

            return res.status(201).send({
                status: 'success',
                item: itemObj,
                message: 'New item created succesfully'
            })
        }catch(err){
            res.status(500).send(err.message);    
        }
    },
    async getItems(req, res){
        const{id} = req.params;
       try{
           const items = await itemService.items(id);
           if(items.length === 0 )
                return res.status(204).send({message: 'No items in this bucket'});
            return res.status(200).send({
                status: 'success',
                items,
            })
        }catch(err){
            res.status(500).send(err.message);

        }
    },
    async getSingleItem(req, res){
        const{id, item_id} = req.params;

        try{
            const item = await itemService.getOne(id, item_id);
            if(item){
                return res.status(200).send({
                    status: 'success',
                    item
                })
            }
            return res.status(404).send({message: 'This item is not found'});
        }catch(err){
            res.status(500).send(err.message)
        }
    },
    
    async updateItem(req, res){
        const{id, item_id} = req.params;

        try{
            const item = await itemService.update(id, item_id, req.body);
            return res.status(200).send({status: 'success', item})
            
        }catch(err){
            res.status(500).send(err.message); 
        }
    },
    async deleteItem(req, res){
        const{id, item_id} = req.params;
        try{
            const deleted = await itemService.delete(id, item_id);
            return res.status(200).send({status: 'success'})
        }catch(err){
            res.status(400).send(err.message);
        }
    },
}
module.exports = itemCtrl;