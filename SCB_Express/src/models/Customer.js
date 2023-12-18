// models/User.js

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true},
  address: { type: String, required: true},
  yearOfBirth: { type: Number, required: true, min: 1980},
  gender: { type: String, required: true }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;