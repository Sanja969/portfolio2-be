const express = require('express');

const projectsRouter = require('./projects/projects.router');
const blogsRouter = require('./blogs/blogs.router');
const articlesRouter = require('./articles/articles.router');
const usersRouter = require('./users/users.router');
const quotesRouter = require('./quotes/quotes.router');

const api = express.Router();

api.use('/projects', projectsRouter);
api.use('/blogs', blogsRouter);
api.use('/articles', articlesRouter);
api.use('/admin', usersRouter);
api.use('/quotes', quotesRouter);

module.exports = api;

module.exports = api;