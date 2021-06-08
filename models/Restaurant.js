const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  city: { type: mongoose.Schema.Types.ObjectId, ref: "city" },
  contact: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "review" }],
});

const Restaurant = mongoose.model("restaurant", RestaurantSchema);

module.exports = Restaurant;
