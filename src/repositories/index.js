const { Contacts, Products } = require("../dao/factory");
const ContactRepository = require("./contacts.repository");
const ProductRepository = require("./products.repository");

const contactsService = new ContactRepository(new Contacts());
const productsService = new ProductRepository(new Products());


module.exports = {
    contactsService,
    productsService
}