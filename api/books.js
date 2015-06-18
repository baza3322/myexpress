var express = require('express');
var router = express.Router();
var database = require("../data/database")
/* GET users listing. */
router
	.get('/Books', function(req, res, next) {
			database.getDb(function (err, db) {
				if(err){
					next(err, null);
				}
				else {

					db.collection("books").find().toArray(function(err, results) {
						if(err){
							next(err,null);
						} else {
							res.json(results);
						}
					});
				}
			});
});

module.exports = router;
