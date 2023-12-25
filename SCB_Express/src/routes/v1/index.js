//userRoutes.js
const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const customerRoutes = require('./customerRoutes');
const productRoutes = require('./productRoutes');
const authRouter = require('./authRoutes');

router.get('/status', (req, res) => {
  res.status(200).json({ msg : 'Api are ready !'})
});


router.use('/users', userRoutes);
router.use('/customer', customerRoutes);
router.use('/product', productRoutes);
router.use('/auth', authRouter);



module.exports = router;