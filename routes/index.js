var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form');
});

router.post('/print-data', function(req, res, next) {
	//var details= req.body;
	 var name= req.body.name;
		var id= req.body.emailid;
	res.render('print-data',{name,id});
		fs.appendFile('./file/details.txt',`name: ${name}	emailid: ${id}`+ '\r\n' , function(err) {
	if (err) throw err;
	console.log('successfull updated!!');
	//next(details);
});
});





	


module.exports = router;
