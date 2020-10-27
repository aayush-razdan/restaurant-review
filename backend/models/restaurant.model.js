const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    resname: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
