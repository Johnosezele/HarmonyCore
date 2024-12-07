const express = require('express');
const router = express.Router();

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// We'll add more routes here later for:
// - URL text extraction
// - File upload
// - Text-to-speech conversion

module.exports = router;
