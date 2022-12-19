const fs = require('fs');
const { createUser, loginUser } = require('../../models/users/users.model');

async function httpAddNewUser(req, res) {
  if (!req.body.username) {
    return res.status(400).json({
      error: 'Missing required username'
    })
  }

  if (!req.body.password) {
    return res.status(400).json({
      error: 'Missing required user password'
    })
  }
  try {
    console.log(req.body.password)
    const user = await createUser(req.body);

    res.status(201).json(user);

  } catch (error) {
    res.status(400).json({ error });
  }
}

async function httpLogin(req, res) {
  try {
    const result = await loginUser(req.body)

    if (result === "password doesn't match" || result === "User doesn't exist") {
      res.status(400).json({ error: result });
    }
    else {
      res.status(200).json({ token: result });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
}

module.exports = {
  httpAddNewUser,
  httpLogin
}