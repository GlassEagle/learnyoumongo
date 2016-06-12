var mongo = require("mongodb").MongoClient;

var age = parseInt(process.argv[2]);

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db){
    if(err){
        throw err;
    }
    
    db.collection("parrots")
        .find({
            age: {
                $gt: age
            }
        }).toArray(function(err, documents){
            if(err){
                throw err;
            }
            console.log(documents);
            db.close();
        });
    
});
