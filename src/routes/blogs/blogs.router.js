const express = require('express');
const { httpGetAllBlogs, httpAddNewBlog } = require('./blogs.controller')
const { isLoggedIn } = require('../users/users.middleware')

const blogsRouter = express.Router();

blogsRouter.get('/', httpGetAllBlogs);
blogsRouter.post('/', isLoggedIn, httpAddNewBlog);

module.exports = blogsRouter;