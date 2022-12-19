const express = require('express');
const { httpGetAllArticles, httpAddNewArticle } = require('./articles.controller')
const { isLoggedIn } = require('../users/users.middleware')

const articlesRouter = express.Router();

articlesRouter.get('/', httpGetAllArticles);
articlesRouter.post('/', isLoggedIn, httpAddNewArticle);

module.exports = articlesRouter;