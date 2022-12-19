const express = require('express');
const { httpGetLatestQuote, httpAddNewQuote } = require('./quotes.controller')
const { isLoggedIn } = require('../users/users.middleware')

const quotesRouter = express.Router();

quotesRouter.get('/', httpGetLatestQuote);
quotesRouter.post('/', isLoggedIn, httpAddNewQuote);

module.exports = quotesRouter;