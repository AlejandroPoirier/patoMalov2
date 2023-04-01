const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const phoneNumberSchema = new Schema({
    number: {
        type: String,
        required: true,
        unique: true
    },
    comments: {
        type:[String],
        required: true
    }
})


module.exports = mongoose.model('PhoneNumber', phoneNumberSchema);