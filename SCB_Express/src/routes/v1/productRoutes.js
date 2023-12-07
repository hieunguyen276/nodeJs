//userRoutes.js
const express = require('express');
const router = express.Router();


router.get('/get/:productId', (req, res) => {
    let productId = req.params.productId;
    console.log(productId);
    res.status(200).json({ msg: `Get productId: ${productId} `});
});


router.get('/get', (req, res) => {
    const { name, code, price, quantity } = req.query;
    console.log( name, code, price, quantity );
    res.status(200).json({ msg: `name: ${name}, code: ${code}, price: ${price}, quantity: ${quantity}` });
});


router.post('/create', (req, res) => {
    const { name, code, price, quantity } = req.body;
    res.status(201).json({ 
        name, 
        code, 
        price, 
        quantity 
    })
});


router.put('/update', (req, res) => {
    const { name, code, price, quantity } = req.body;
    res.status(200).json({ 
        name, 
        code, 
        price, 
        quantity 
    })
});


router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;

    console.log(id);
    res.status(200).json({ msg:`delete product: ${id}` });
});


module.exports = router;