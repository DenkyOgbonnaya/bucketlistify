const events = require('events');
const bucketService = require('../services/bucketService');

const bucketlistEvent = new events.EventEmitter();
bucketlistEvent.on('newItem', async (id, item) => {
    const bucket = await bucketService.getOne(id);
    bucket.items.push(item);
    bucket.save();
})

module.exports = bucketlistEvent;