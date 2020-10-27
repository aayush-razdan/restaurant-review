const router = require("express").Router();
let City = require("../models/city.model");

router.route("/").get((req, res) => {
  City.find()
    .then((cities) => res.json(cities))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const city = req.body.city;

  const newCity = new City({ city });

  newCity
    .save()
    .then(() => res.json("City added !!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
