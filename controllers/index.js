var express = require("express")
  , router = express.Router()
  , Comment = require("../models/comment")

router.use("/comments", require("../comments"));
