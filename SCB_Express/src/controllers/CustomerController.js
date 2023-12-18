const CustomerService = require("../services/CustomerService");


class CustomerController {
    // Các hàm xử lý


    create = async (req, res, next) => {
        try {
            const { name, phone, email, address, yearOfBirth, gender } = req.body;
            // goi den tang service

            let data = {
                name, phone, email, address, yearOfBirth, gender
            }
            
            const customer = await CustomerService.create(data);

            res.status(200).json({
                customer
            });
            

        } catch (error) {
           throw error;
        }
    };


    getAll = async (req, res, next) => {
        try {

            const customers = await CustomerService.getAll();

            res.status(200).json({
                customers
            });
        } catch (error) {
            throw error;
        }
    };


    
    update = async (req, res, next) => {
        try {
            const { name, phone, email, address, yearOfBirth, gender} = req.body;
            // goi den tang service

            const { id } = req.params;

            let data = {
                name, phone, email, address, yearOfBirth, gender
            }
            
            const result = await CustomerService.update(id, data);
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
            

            const result = await CustomerService.delete(id);
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

module.exports = new CustomerController();