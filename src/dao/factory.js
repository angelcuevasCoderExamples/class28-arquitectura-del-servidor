const { persistence, mongoConnectionLink } = require("../config/config");
const mongoose = require('mongoose');

let Contacts; 
let Products; 

switch(persistence){
    case 'MONGO':
        mongoose.connect(mongoConnectionLink).then(()=>{
            console.log('Connected to atlas.')
        })
        Contacts = require('./mongo/contacts.mongo')
        Products = require('./mongo/products.mongo')
    break; 

    case 'MEMORY':
        Contacts = require('./memory/contacts.memory')
        Products = require('./memory/products.memory')
    break; 
}

module.exports = {
    Contacts, 
    Products
}