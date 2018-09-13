var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form');
});

router.post('/print-data', function(req, res, next) {
	var name= req.body.name;
		var id= req.body.emailid;
	res.render('print-data',{name,id});
});

module.exports = router;
