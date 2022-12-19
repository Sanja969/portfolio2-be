const articles = require('./articles.mongo');

async function getAllArticles() {
  return await articles.find({}, {
    '_id': 0, '__v': 0,
  })
}

async function getLatestArticleNumber() {
  const latestArticle = await articles.
  findOne()
  .sort('-articleNumber');

  if (!latestArticle) return 1;

  return latestArticle.articleNumber;
}

async function saveArticle(article) {
  await articles.findOneAndUpdate( 
    { articleNumber: article.articleNumber },
    article, 
    { upsert: true }
  )
}

async function createArticle(article) {
  const newArticleNumber = await getLatestArticleNumber() + 1;
  const newArticle = Object.assign(article,
    {
    articleNumber: newArticleNumber,
  });
  await saveArticle(newArticle);
}

module.exports = {
  getAllArticles,
  createArticle
}