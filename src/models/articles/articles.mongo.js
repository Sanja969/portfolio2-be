const mongoose = require('mongoose');

const articlesSchema = new mongoose.Schema({
  articleNumber: {
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
  link: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model('Article', articlesSchema);