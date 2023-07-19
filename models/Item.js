const mongoose = require('mongoose');

// Define the schema for the item
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
},
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Item model
const Item = itemSchema || mongoose.model('Item', itemSchema);

module.exports = Item;
