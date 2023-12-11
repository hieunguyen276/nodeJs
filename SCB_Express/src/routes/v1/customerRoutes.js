//userRoutes.js
const express = require('express');
const router = express.Router();
const CustomerController = require('../../controllers/CustomerController');


router.get('/get/:customerId', CustomerController.get);
router.post('/create', CustomerController.create);
router.put('/update', CustomerController.update);
router.delete('/delete/:id', CustomerController.delete);



module.exports = router;