const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const ReviewSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  image: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model("review", ReviewSchema);

module.exports = Review;
