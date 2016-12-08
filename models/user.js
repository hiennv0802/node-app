var db = require("../db")
  ,crypto = require("crypto")

hash = function(password) {
  return crypto.createHash("sha1").update(password).digest("base64");
}

exports.create = function(name, email, password, cb) {
  var user = {
    name: name,
    email: email,
    password: hash(password)
  }
}
