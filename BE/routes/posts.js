const express = require("express");
const router = express.Router();
const fs = require("fs");
const mongoose = require("mongoose");
const multer = require("multer");
var cors = require("cors");

const { Post, validate } = require("../models/post");

////////////////////////////////////////
////////////////////////////////////////
///////// upload scanned cards//////////
////////////////////////////////////////
////////////////////////////////////////
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./posts/");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
////////////////////////////////////////
////////////////////////////////////////
/////////////////cors///////////////////
////////////////////////////////////////
////////////////////////////////////////

////////////////////////////////////////
////////////////////////////////////////
///////// filter uploaded cards/////////
////////////////////////////////////////
////////////////////////////////////////

const fileFilter = (req, file, cb) => {
  console.log("oofie");
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif"
  ) {
    console.log("oof");
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    /* stuff */
  }
});

////////////////////////////////////////
////////////////////////////////////////
////////////// Routes //////////////////
////////////////////////////////////////
////////////////////////////////////////

router.get("/", async (req, res) => {
  console.log("get all");
  const post = await Post.find().sort({ date: -1 });
  res.send(post);
});

//////////////////////////////////////////
//////////////////////////////////////////

router.post("/", upload.single("PostImage"), async (req, res) => {
  if (typeof req.file === "undefined") {
    return res.status(400).send("no file");
  }
  console.log(req.file);
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let post = new Post({
    name: req.body.name,
    email: req.body.email,
    date: Date.now(),
    postImg: `http://165.22.15.56:3000/posts/${req.file.originalname}`,
    post: req.body.post
  });
  post = await post.save();

  res.send(post);
});

module.exports = router;
