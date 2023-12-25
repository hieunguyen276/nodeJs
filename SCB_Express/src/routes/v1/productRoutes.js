//userRoutes.js
const express = require('express');
const router = express.Router();
const ProductController = require('../../controllers/ProductController');


const Joi = require('joi');

const productValidationSchema = Joi.object({
    name: Joi.string().required().messages({
      'any.required': `"name" không được bỏ trống !`
    }),
    producer: Joi.string().required(),
    yearOfManufacture: Joi.number().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required()
});


// Middleware kiểm tra và xác thực dữ liệu
const validateProductData = (req, res, next) => {
    const { error, value } = productValidationSchema.validate(req.body, {abortEarly: false});
    console.log(error)
    if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }
  
    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};


router.get('/',verifyToken, ProductController.getAll);
router.post('/',validateProductData,verifyToken, ProductController.create);
router.put('/:id',verifyToken, ProductController.update);
router.delete('/:id',verifyToken, ProductController.delete);


module.exports = router;