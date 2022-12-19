const { getLatestQuote, createQuote } = require('../../models/quotes/quotes.model');

async function httpGetLatestQuote(req, res) {
  const quotes = await getLatestQuote()
  return res.status(200).json(quotes);
}

async function httpAddNewQuote(req, res) {
  const quote = req.body;

  if (!quote.text) {
    return res.status(400).json({
      error: 'Missing required quote text'
    })
  }

  await createQuote(quote);
  res.status(201).json(quote);
}

module.exports = {
  httpGetLatestQuote,
  httpAddNewQuote
}