//userRoutes.js
const express = require('express');
const router = express.Router();
const ProductController = require('../../controllers/ProductController');


router.get('/', ProductController.getAll);
router.post('/', ProductController.create);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);


module.exports = router;