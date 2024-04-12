const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    user_name: String,
    role: String, 
    password: String 
})

const productModel = mongoose.model('products', productSchema);

module.exports = productModel; 