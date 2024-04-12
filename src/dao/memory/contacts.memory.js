class Contacts {
    static id = 0; 
    constructor(){
        this.contacts = []
    }
    get(){
        return this.contacts;
    }
    getById(id){
        return this.contacts.find(c=>c.id == id); 
    }
    create(contact){
        contact.id = ++Contacts.id; 
        this.contacts.push(contact)
        return contact; 
    }
    update(id, contact){
        const index = this.contacts.findIndex(c=>c.id == id)
        this.contacts[index] = {...this.contacts[index], ...contact}
        return this.contacts[index];
    }
    delete(id){ 
        const index = this.contacts.findIndex(c=>c.id == id)
        return this.contacts.splice(index,1)
    }
}

module.exports = Contacts;