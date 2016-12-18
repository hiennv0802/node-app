var express = require('express')
  , router = express.Router()
  , User = require('../models/users')
  , mongoose = require('mongoose');
// var mongodb = require("mongodb");
// var MongoClient = mongodb.MongoClient;

module.exports.controller = function(app) {
  app.get('/users', function(req, res) {
    // var User = mongoose.model(User, mongoose);
    // users = User.findOne({ username: 'Hien Nguyen' })
    // console.log(users)
    // console.log('aaaaaa')
    res.render('users/index', {name: 'Hien Nguyen'});
  });
}
