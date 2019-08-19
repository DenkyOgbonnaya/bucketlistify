const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buckeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {timestamps: true}
)

module.exports = mongoose.model('Bucket', buckeSchema)