// models/User.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    producer: { type: String, required: true},
    yearOfManufacture: { type: Number, required: true},
    quantity: { type: Number, required: true},
    price: { type: Number, required: true}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;