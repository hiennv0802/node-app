var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var fs = require('fs');
var mongodb = require('mongodb');
var swig = require('swig');
var swig = new swig.Swig();
var db = require('mongoose');
var bodyParser = require('body-parser');

db.connect('mongodb://localhost:27017/node-app');
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/public/stylesheets/style.css'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

fs.readdirSync('./controllers/').forEach(function (file) {
  if(file.substr(-3) == '.js') {
    route = require('./controllers' + '/' + file);
    route.controller(app);
  }
});

app.listen(3000);

module.exports = app;
