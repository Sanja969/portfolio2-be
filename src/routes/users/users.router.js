const express = require('express');
const { httpLogin } = require('./users.controller')

const usersRouter = express.Router();

usersRouter.post('/login', httpLogin);
// usersRouter.post('/create', httpAddNewUser);

module.exports = usersRouter;