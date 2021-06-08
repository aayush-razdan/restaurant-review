const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const CitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const City = mongoose.model("city", CitySchema);

module.exports = City;
