var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/node-app";
MongoClient.connect(url, function(err, db){
  if(err) {
    console.log("Unable to connect to the mongodb server. Error: ", err);
  } else {
    console.log("Connecttion established to", url);
  }
});
