const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
})
mongoose.connection.on('error', (err) => {
  console.error(err);
})

async function mongoConnect() {
  return await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  return await mongoose.disconnect();
}

module.exports = {
  mongoConnect, mongoDisconnect
}