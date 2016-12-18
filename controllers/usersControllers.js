var express = require('express')
  , router = express.Router()
  , Users = require('../models/users');

router.get('/', function(req, res) {
  console.log("controller");
})
