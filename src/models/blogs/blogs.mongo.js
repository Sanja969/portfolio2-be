const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
  blogNumber: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
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

module.exports = new mongoose.model('Blog', blogsSchema);