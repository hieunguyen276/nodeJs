//userRoutes.js
const express = require('express');
const router = express.Router();
const CustomerController = require('../../controllers/CustomerController');
const verifyToken = require('../../middlewares/VerifyToken');

const Joi = require('joi');

const CustomerValidationSchema = Joi.object({
    name: Joi.string().alphanum().required().messages({
    'any.required': `"username" không được bỏ trống !`
    }),
    phone: Joi.string().min(10).max(10).required().messages({
        'any.required': `"phone" không được bỏ trống`
    }),
    email: Joi.string().email().required(),
    address: Joi.string().required(),
    yearOfBirth: Joi.number().required(),
    gender: Joi.string().required()
});


// Middleware kiểm tra và xác thực dữ liệu
const validateCustomerData = (req, res, next) => {
    const { error, value } = CustomerValidationSchema.validate(req.body, {abortEarly: false});
    console.log(error)
    if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }
  
    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};


router.get('/',verifyToken, CustomerController.getAll);
router.post('/',validateCustomerData,verifyToken, CustomerController.create);
router.put('/:id',verifyToken, CustomerController.update);
router.delete('/:id',verifyToken, CustomerController.delete);



module.exports = router;