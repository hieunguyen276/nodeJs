class ProductController {
    get = (req, res, next) => {
        try {
            let productId = req.params.productId;
            console.log(productId);
            res.status(200).json({ msg: `Get productId: ${productId} `});
        } catch (error) {
            throw error;
        }
    };


    create = (req, res, next) => {
        try {
            const { name, code, price, quantity } = req.body;
            res.status(201).json({ 
                name, 
                code, 
                price, 
                quantity 
            })
        } catch (error) {
            throw error;
        }
    };


    update = (req, res, next) => {
        try {
            const { name, code, price, quantity } = req.body;
            res.status(200).json({ 
                name, 
                code, 
                price, 
                quantity 
            })
        } catch (error) {
            throw error;
        }
    };


    delete = (req, res, next) => {
        try {
            let id = req.params.id;
            console.log(id);
            res.status(200).json({ msg:`delete product: ${id}` });
        } catch (error) {
            throw error;
        }
    };
    
}

module.exports = new ProductController();