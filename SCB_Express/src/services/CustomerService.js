const Customer = require("../models/Customer");

class CustomerService {

    create = async (data) => {
        try {
            // Xu ly cac nghiep vu lien quan
            // goi den tang model 
            const customer = new Customer(data);
            await customer.save();
            return customer;
        } catch (error) {
            throw error;
        }
    }


    getAll = async () => {
        try {
            // Xu ly cac nghiep vu lien quan
            // goi den tang model 
            const customers = await Customer.find();
            return customers;
        } catch (error) {
            throw error;
        }
    }


    update = async (id, data) => {
        try {
            // Xu ly cac nghiep vu lien quan
            // goi den tang model 
            const result = await Customer.updateOne({_id: id}, {name: data.name}, {phone: data.phone}, {email: data.email}, {address: data.address}, {yearOfBirth: data.yearOfBirth}, {gender: data.gender});
            return true;
        } catch (error) {
            throw error;
        }
    }


    delete = async (id) => {
        try {
            // Xu ly cac nghiep vu lien quan
            // goi den tang model 
            const customer = await Customer.findById(id);
            await customer.deleteOne();
            return true;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new CustomerService();