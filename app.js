var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var fs = require('fs');
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var db =require('mongoose');
// MongoClient.connect('mongodb://localhost:27017/node-app');
db.connect('mongodb://localhost:27017/node-app');
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(express.cookieParser('your secret here'));
// app.use(express.session());
// app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

fs.readdirSync('./controllers/').forEach(function (file) {
  if(file.substr(-3) == '.js') {
    route = require('./controllers' + '/' + file);
    route.controller(app);
  }
});

// http.createServer(app).listen(app.get('port'), function() {
//   console.log('Express server is listening on port ' + app.get('port'));
// });

// app.listen(3000, function() {
//   console.log("Listen on port 3000...");
// });
app.listen(3000);

module.exports = app;
