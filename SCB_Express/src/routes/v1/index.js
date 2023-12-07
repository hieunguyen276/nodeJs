//userRoutes.js
const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const customerRoutes = require('./customerRoutes');
const productRoutes = require('./productRoutes');

router.get('/status', (req, res) => {
  res.status(200).json({ msg : 'Api are ready !'})
});


router.use('/users', userRoutes);
router.use('/customer', customerRoutes);
router.use('/product', productRoutes);


module.exports = router;