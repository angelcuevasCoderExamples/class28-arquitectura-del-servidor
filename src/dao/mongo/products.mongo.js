const productModel = require("./models/products.model");

class Products {
    async get(){
        return await productModel.find({});
    }
}

module.exports = Products;