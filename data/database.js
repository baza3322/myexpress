// database.js
(function (database) {
	
	var mongodb = require("mongodb");

		//var mongoUrl = "mongodb://localhost:27017/bookAPI";

		var mongoUrl = "mongodb://webapi:baza7183@ds047752.mongolab.com:47752/shuoism";

	var theDb = null;

	database.getDb = function (next) {
	if (!theDb) {
	  // connect to the database
	  mongodb.MongoClient.connect(mongoUrl, function (err, db) {
		if (err) {
		  next(err, null);
		} else {
		  theDb = db;
		  next(null, theDb);
		}
	  });
	} else {
	  next(null, theDb);
	}
	}

})(module.exports);
