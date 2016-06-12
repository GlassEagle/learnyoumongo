var mongo = require("mongodb").MongoClient;

var dbName = process.argv[2];
var collectionName = process.argv[3];
var id = process.argv[4];

mongo.connect("mongodb://localhost:27017/" + dbName, function(err, db){
    if(err) throw err;
    db.collection(collectionName)
        .remove({
            _id: id
        }, function(err, result){
            if(err) throw err;
            db.close();
        });
});