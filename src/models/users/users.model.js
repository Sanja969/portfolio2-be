const users = require('./users.mongo');
require('dotenv').config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();

async function getLatestUserNumber() {
  const latestUser = await users.
  findOne()
  .sort('-userNumber');

  if (!latestUser) return 1;

  return latestUser.userNumber;
}

async function createUser(user) {
  const newUserNumber = await getLatestUserNumber() + 1;
  const newUser = Object.assign(user,
    {
    userNumber: newUserNumber,
  });
  newUser.password = await bcrypt.hash(newUser.password, 10);
  await users.create(newUser)
}

async function loginUser(user) {
  const storedUser = await users.findOne({username: user.username});
  if (storedUser) {
    const result = await bcrypt.compare(user.password, storedUser.password);
    if (result) {
      console.log(process.env.SECRET + 'ree')
      const token = await jwt.sign({ username: storedUser.username }, process.env.SECRET);
      return token;
    } else {
      return "password doesn't match"
    }
  } else {
    return "User doesn't exist";
  }
}

module.exports = {
  createUser,
  loginUser,
}