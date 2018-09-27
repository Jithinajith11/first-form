var express = require('express');
var router = express.Router();
var fs = require('fs');
let name;
let id;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form');
});

router.post('/', function(req, res, next) {
	//var details= req.body;
	  name= req.body.name;
	 id= req.body.emailid;
	res.render('print-data',{name,id});
});

router.post('/success',function(req,res,next) {
	fs.appendFile('./file/details.txt',`name: ${name}	emailid: ${id}`+ '\r\n' , function(err) {
	if (err) throw err;
	res.writeHead(200,{'content-type': 'text/html'});
	res.write("successfully updated!! :)");
	res.write('<form action="/" method="get">');
	res.write('<button> new</button>');
	res.write('</form>');

	//next(details);
});
});





	


module.exports = router;
