//userRoutes.js
const express = require('express');
const router = express.Router();
const ProductController = require('../../controllers/ProductController');


router.get('/get/:productId', ProductController.get);
router.post('/create', ProductController.create);
router.put('/update', ProductController.update);
router.delete('/delete/:id', ProductController.delete);


module.exports = router;