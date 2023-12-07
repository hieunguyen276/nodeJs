//userRoutes.js
const express = require('express');
const router = express.Router();


router.get('/get/:customerId', (req, res) => {
    let customerId = req.params.customerId;
    console.log(customerId);
    res.status(200).json({ msg: `Get customerId: ${customerId} `});
});


router.get('/get', (req, res) => {
    const { name, email, phone, address } = req.query;
    console.log( name, email, phone, address );
    res.status(200).json({ msg: `name: ${name}, email: ${email}, phone: ${phone}, address: ${address}` });
});


router.post('/create', (req, res) => {
    const { name, email, phone, address } = req.body;
    res.status(201).json({ 
        name, 
        email, 
        phone, 
        address 
    })
});


router.put('/update', (req, res) => {
    const { name, email, phone, address } = req.body;
    res.status(200).json({ 
        name, 
        email, 
        phone, 
        address 
    })
});


router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;

    console.log(id);
    res.status(200).json({ msg:`delete customer: ${id}` });
});


module.exports = router;