const shortIds = require('shortid');
const URL = require('../models/url');

async function handleShortNewUrl(req, res) {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  const shortId = shortIds.generate();

  try {
    const newURL = new URL({
      shortId,
      redirectUrl: url,
      visitHistory: [],
    });

    await newURL.save();

    return res.json({ id: newURL.shortId });
  } catch (error) {
    console.error('Error saving URL:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

module.exports = { 
    handleShortNewUrl,
    handleGetAnalytics, 
};