const contactModel = require("./models/contacts.model");

class Contacts {
    async get(){
        return await contactModel.find({});
    }
    async getById(id){
        return await contactModel.findById(id);
    }
    async create(contact){
        return await contactModel.create(contact);
    }
    async update(id, contact){
        return await contactModel.updateOne({_id:id}, contact)
    }
    async delete(id){
        return await contactModel.deleteOne({_id: id});
    }
}

module.exports = Contacts;