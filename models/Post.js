const mongoose = require('mongoose'); // required package

const PostSchema = mongoose.Schema({ // This is required for defining a model and what instances of this model should contain.
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}) 

module.exports = mongoose.model('Posts', PostSchema);