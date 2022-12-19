const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
  projectNumber: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    data: Buffer,
    contentType: String
  },
  technologies: {
    type: String,
  },
  source: {
    type: String,
    required: true,
  },
  live: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = new mongoose.model('Project', projectsSchema);