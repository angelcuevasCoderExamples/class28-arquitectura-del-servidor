const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    full_name: String, 
    email : String,
    active: Boolean,
    role: String 
})

const contactModel = mongoose.model('contacts', contactSchema);

module.exports = contactModel; 