var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send('Send back the requested chord notation');
});

module.exports = router;
