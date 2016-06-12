var mongo = require("mongodb").MongoClient;

var firstName = process.argv[2];
var lastName = process.argv[3];

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db){
    if (err) throw err;
    db.collection("docs")
        .insert({
            firstName: firstName,
            lastName: lastName
        }, null, function(err, data){
            if (err) throw err;
            console.log(JSON.stringify(data.ops[0]));
            db.close();
        });
    
});