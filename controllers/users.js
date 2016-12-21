var express = require('express')
  , router = express.Router()
  , User = require('../models/users')
  , mongoose = require('mongoose');

module.exports.controller = function(app) {
  app.get('/users', function(req, res) {
    User.find({}, function(err, users) {
      if(err) throw err;
      else {
        res.format({
          html: function() {
            res.render('users/index.html', {
              title: "All users",
              users: users
            });
          },
          json: function() {
            res.json({name: 'Nguyen Van Hien'});
          }
        });
      }
    });
  });

  app.post('/users', function(req, res) {

  });
}
