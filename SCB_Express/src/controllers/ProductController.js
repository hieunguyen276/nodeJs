const ProductService = require("../services/ProductService");

class ProductController {
    
    create = async (req, res, next) => {
        try {
            const { name, producer, yearOfManufacture, quantity, price } = req.body;

            let data = {  name, producer, yearOfManufacture, quantity, price }

            const product = await ProductService.create(data);

            res.status(201).json({ 
                product
            })
        } catch (error) {
            throw error;
        }
    };


    getAll = async (req, res, next) => {
        try {

            const products = await ProductService.getAll();

            res.status(200).json({
                products
            });
        } catch (error) {
            throw error;
        }
    };


    update = async (req, res, next) => {
        try {
            const { name, producer, yearOfManufacture, quantity, price} = req.body;
            // goi den tang service

            const { id } = req.params;

            let data = {
                name, producer, yearOfManufacture, quantity, price
            }
            
            const result = await ProductService.update(id, data);
            if (result) {
                res.status(200).json({
                    msg: 'Updated'
                });              
            } else {
                throw new error('Error updating');
            }

        } catch (error) {
           throw error;
        }
    };


    delete = async (req, res, next) => {
        try {
            const { id } = req.params;
            

            const result = await ProductService.delete(id);
            if (result) {
                res.status(200).json({
                    msg: 'Deleted'
                });              
            } else {
                throw new error('Error deleting');
            }
        } catch (error) {
           throw error;
        }
    };
    
}

module.exports = new ProductController();