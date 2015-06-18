var express = require('express');
var router = express.Router();

/* GET users listing. */
router
	.get('/', function(req, res, next) {
	var responseJson ={hello: "This is my api"};
	
	res.json(responseJson);			 
});

module.exports = router;
