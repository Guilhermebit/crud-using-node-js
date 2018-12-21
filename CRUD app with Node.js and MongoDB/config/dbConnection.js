/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function() {

     var db = new mongo.Db (
         'usuarios',
           new mongo.Server (
 			'localhost',
 			 27017,
 			 {}

 		 ),
         {}

     );

     return db;
}	

module.exports = function() {
   return connMongoDB;

}



