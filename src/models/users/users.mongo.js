const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  userNumber: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model('User', usersSchema);