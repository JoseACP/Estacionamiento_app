const express = require('express');
const router = express.Router();
const { generateReport } = require('../controllers/ReportController');

router.get('/', generateReport);

module.exports = router;