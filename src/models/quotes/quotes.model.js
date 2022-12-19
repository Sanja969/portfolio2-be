const quotes = require('./quotes.mongo');

async function getAllQuotes() {
  return await quotes.find({}, {
    '_id': 0, '__v': 0,
  })
}

async function getLatestQuote() {
  const latestQuote = await quotes.
  findOne()
  .sort('-quoteNumber');

  return { text : latestQuote.text };
}

async function saveQuote(quote) {
  await quotes.findOneAndUpdate( 
    { quoteNumber: quote.quoteNumber },
    quote, 
    { upsert: true }
  )
}

async function createQuote(quote) {
  const latest = await getLatestQuote()
  const newQuoteNumber = latest ? latest.quoteNumber : 1
  const newQuote = Object.assign(quote,
    {
    quoteNumber: newQuoteNumber,
  });
  await saveQuote(newQuote);
}

module.exports = {
  getAllQuotes,
  createQuote,
  getLatestQuote
}