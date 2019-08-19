const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    bucket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bucket'
    }
},
    {timestamps: true}
)

module.exports = mongoose.model('Item', itemSchema);