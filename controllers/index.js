var express = require("express")
  , router = express.Router()
  , Comment = require("../models/comments")

router.use("/comments", require("../models/comments"));
router.use("/users", require("../models/users"));

router.get("/", function(req, res) {
  Comments.all(function(err, commnets) {
    res.render("index", {comments: comments});
  });
});

module.exports = router;
