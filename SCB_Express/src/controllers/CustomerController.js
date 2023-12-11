class CustomerController {
    get = (req, res, next) => {
        try {
            let customerId = req.params.customerId;
            console.log(customerId);
            res.status(200).json({ msg: `Get customerId: ${customerId} `});
        } catch (error) {
            throw error;
        }
    };


    create = (req, res, next) => {
        try {
            const { name, email, phone, address } = req.body;
            res.status(201).json({ 
                name, 
                email, 
                phone, 
                address 
            })
        } catch (error) {
            throw error;
        }
    };


    update = (req, res, next) => {
        try {
            const { name, email, phone, address } = req.body;
            res.status(200).json({ 
                name, 
                email, 
                phone, 
                address 
            })
        } catch (error) {
            throw error;
        }
    };


    delete = (req, res, next) => {
        try {
            let id = req.params.id;
            console.log(id);
            res.status(200).json({ msg:`delete customer: ${id}` });
        } catch (error) {
            throw error;
        }
    };
}


module.exports = new CustomerController();