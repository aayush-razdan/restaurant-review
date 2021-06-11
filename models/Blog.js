const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const BlogSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  //user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  // likes: {
  //   type: Number,
  //   default: 0,
  // },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;
