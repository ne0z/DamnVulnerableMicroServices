var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200);
  res.json({
    status: 'OK',
    app: 'AccountService',
    version: 'v1.0.0'
  });
});

module.exports = router;
