const mongoose = require('mongoose')
const {Schema} = mongoose

const dataSchema = new Schema({
    Name: String
});

module.exports = mongoose.model('data', dataSchema, 'dataSchema');