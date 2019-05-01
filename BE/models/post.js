const Joi = require("joi");
const mongoose = require("mongoose");

const Post = mongoose.model(
  "Post",
  new mongoose.Schema({
    name: {
      type: String
    },
    email: {
      type: String
    },
    postImg: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    },
    post: {
      type: String
    }
  })
);

function validatePost(post) {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(50)
      .required(),
    post: Joi.string().required(),
    name: Joi.string().required()
  };

  return Joi.validate(post, schema);
}
exports.Post = Post;
exports.validate = validatePost;
