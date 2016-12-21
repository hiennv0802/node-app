var express = require("express");
var router = express.Router();

/*Get list comments */

router.get("/", function(req, res, next) {
  debugger;
  res.send("Response with comments");
});

module.exports = router;
