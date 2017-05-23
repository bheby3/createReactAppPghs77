var express = require('express');
var router = express.Router();
const keyPublishable = 'pk_test_BrM6NY0gVzfXoWtWNnWbZkf3';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('charge', { title: 'Express'});
});

module.exports = router;