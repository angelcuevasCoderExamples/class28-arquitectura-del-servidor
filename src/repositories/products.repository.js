
class ProductRepository {

    constructor(dao){
        this.dao = dao; 
    }

    async get(){
        return await this.dao.get()
    }

}

module.exports = ProductRepository;