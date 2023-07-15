const express = require('express');
const { handleShortNewUrl, handleGetAnalytics } = require('../controler/url');

const router = express.Router();

router.post('/', handleShortNewUrl);

router.get('/analytics/:shortId', handleGetAnalytics)

module.exports = router;
