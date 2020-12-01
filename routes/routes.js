const express = require('express');
const router = express.Router();

router.use('/api/shoplist', require('./shoplist.routes'));

module.exports = router;