var express = require('express');
var router = express.Router();

/* GET /test */
router.get('/', function(req, res, next) {
  res.send({message:'Hello React'});
});

module.exports = router;
