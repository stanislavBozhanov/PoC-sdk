var express = require('express');
var router = express.Router();
var generatePDF = require('../utils/generatePDF');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Welcome to KNAB SDK PoC'
  }));
});

router.get('/pdf', generatePDF);

module.exports = router;
