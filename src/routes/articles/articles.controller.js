const fs = require('fs');
const { getAllArticles, createArticle } = require('../../models/articles/articles.model');

async function httpGetAllArticles(req, res) {
  const articles = await getAllArticles()
  return res.status(200).json(articles);
}

async function httpAddNewArticle(req, res) {
  const article = req.body;

  if (!article.title) {
    return res.status(400).json({
      error: 'Missing required article title'
    })
  }

  if (!article.text) {
    return res.status(400).json({
      error: 'Missing required article text'
    })
  }

  if (!article.text) {
    return res.status(400).json({
      error: 'Missing required article link'
    })
  }

  await createArticle(article);
  res.status(201).json(article);
}

module.exports = {
  httpGetAllArticles,
  httpAddNewArticle
}