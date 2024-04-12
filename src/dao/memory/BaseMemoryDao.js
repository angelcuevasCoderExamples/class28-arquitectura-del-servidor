/** base class for Memory DAOs */
class BaseMemoryDao {
    static id = 0; 
    constructor(){
        this.data = []
    }
    get(){
        return this.data;
    }
    getById(id){
        return this.data.find(c=>c.id == id); 
    }
    create(contact){
        contact.id = ++BaseMemoryDao.id; 
        this.data.push(contact)
        return contact; 
    }
    update(id, contact){
        const index = this.data.findIndex(c=>c.id == id)
        this.data[index] = {...this.data[index], ...contact}
        return this.data[index];
    }
    delete(id){ 
        const index = this.data.findIndex(c=>c.id == id)
        return this.data.splice(index,1)
    }
}

module.exports = BaseMemoryDao;