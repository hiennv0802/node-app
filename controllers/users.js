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
    user = new User({username: req.body.username, password: req.body.password});
    user.save(function(err, docs) {
      if(err) throw err;
      else {
        console.log('Create user successfully!');
        res.redirect(req.get('referer'));
      }
    })
  });

  app.get('/users/:id', function(req, res) {
    console.log(req.params.id);
    User.findOne({'id': req.params.id}, function(err, user) {
      console.log(user);
      res.format({
        html: function() {
          res.render('users/show.html', {user: user});
        }
      });
    })
  });

  app.post('/users/delete/:id',function(req, res) {
    console.log(req.params.id);
    User.remove({'id': req.params.id}, function(err, res) {
      if(err) throw err;
      res.redirect(req.get('referer'));
    })
  });
}
