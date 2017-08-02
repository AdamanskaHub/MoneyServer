var express = require('express');
const transactionRoutes = require('./api/transactionRoutes');

var router = express.Router();
//fbehkru
router.use('/api', transactionRoutes);

module.exports = router;