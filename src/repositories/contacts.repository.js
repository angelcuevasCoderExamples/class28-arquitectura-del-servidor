
class ContactRepository {

    constructor(dao){
        this.dao = dao; 
    }

    async get(){
        return await this.dao.get()
    }
    async getById(id){
        return await this.dao.getById(id);
    }
    async create(contact){
        return await this.dao.create(contact);
    }
    async update(id, contact){
        return await this.dao.update(id, contact)
    }
    async delete(id){
        return await this.dao.delete(id);
    }
}

module.exports = ContactRepository;