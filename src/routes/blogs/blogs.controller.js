const fs = require('fs');
const { getAllBlogs, createBlog } = require('../../models/blogs/blogs.model');

async function httpGetAllBlogs(req, res) {
  const blogs = await getAllBlogs()
  return res.status(200).json(blogs);
}

async function httpAddNewBlog(req, res) {
  const blog = req.body;

  if (!blog.title) {
    return res.status(400).json({
      error: 'Missing required Blog title'
    })
  }

  if (!blog.text) {
    return res.status(400).json({
      error: 'Missing required Blog text'
    })
  }

  await createBlog(blog);
  res.status(201).json(blog);
}

module.exports = {
  httpGetAllBlogs,
  httpAddNewBlog
}