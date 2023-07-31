// routes/csvRoutes.js
const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csvController');

// Route to render the CSV download page
router.get('/download', csvController.renderCSVPage);

// Route to generate and download the CSV
router.get('/generate', csvController.downloadCSV);

module.exports = router;
