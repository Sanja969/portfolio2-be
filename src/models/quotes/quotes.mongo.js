const mongoose = require('mongoose');

const quotesSchema = new mongoose.Schema({
  quoteNumber: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    default: new Date(),
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model('Quote', quotesSchema);