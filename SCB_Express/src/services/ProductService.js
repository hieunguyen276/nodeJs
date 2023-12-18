const Product = require("../models/Product");

class ProductService {

    create = async (data) => {
        try {
            // Xu ly cac nghiep vu lien quan
            // goi den tang model 
            const product = new Product(data);
            await product.save();
            return product;
        } catch (error) {
            throw error;
        }
    }


    getAll = async () => {
        try {
            // Xu ly cac nghiep vu lien quan
            // goi den tang model 
            const products = await Product.find();
            return products;
        } catch (error) {
            throw error;
        }
    }


    update = async (id, data) => {
        try {
            // Xu ly cac nghiep vu lien quan
            // goi den tang model 
            const result = await Product.updateOne({_id: id}, {name: data.name}, {producer: data.producer}, {yearOfManufacture: data.yearOfManufacture}, {quantity: data.quantity}, {price: data.price});
            return true;
        } catch (error) {
            throw error;
        }
    }


    delete = async (id) => {
        try {
            // Xu ly cac nghiep vu lien quan
            // goi den tang model 
            const product = await Product.findById(id);
            await product.deleteOne();
            return true;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new ProductService();