var mongo = require("mongodb").MongoClient;

var dbname = process.argv[2]

mongo.connect("mongodb://localhost:27017/" + dbname, function(err, db){
    if(err) throw err;
    db.collection("users")
        .update({
            username: "tinatime"
        },{
            $set: {
                age: 40
            }
        }, function(err, result){
            if(err) throw err;
            db.close();
        });
});

