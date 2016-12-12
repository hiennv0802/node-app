var express = require("express")
  , router = express.Router()
  , Comment = require("../models/comment")

router.use("/comments", require("./comments"));
router.use("/users", require("./users"));

router.get("/", function(req, res) {
  Comments.all(function(err, commnets) {
    res.render("index", {comments: comments});
  });
});

module.exports = router;
