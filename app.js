var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var fs = require('fs');
var mongodb = require('mongodb');
var swig = require('swig');
var swig = new swig.Swig();
var db = require('mongoose');

db.connect('mongodb://localhost:27017/node-app');
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

fs.readdirSync('./controllers/').forEach(function (file) {
  if(file.substr(-3) == '.js') {
    route = require('./controllers' + '/' + file);
    route.controller(app);
  }
});

app.listen(3000);

module.exports = app;
