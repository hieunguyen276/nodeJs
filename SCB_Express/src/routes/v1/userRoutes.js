//userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController');


router.get('/get/:userid', UserController.get);
router.post('/create', UserController.create);
router.put('/update', UserController.update);
router.delete('/delete/:id', UserController.delete);


module.exports = router;