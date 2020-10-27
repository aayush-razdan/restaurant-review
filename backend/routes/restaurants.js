const router = require("express").Router();
let Restaurant = require("../models/restaurant.model");

router.route("/").get((req, res) => {
  Restaurant.find()
    .then((restaurants) => res.json(restaurants))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const resname = req.body.resname;
  const description = req.body.description;
  const address = req.body.address;
  const city = req.body.city;
  const contact = req.body.contact;

  const newRestaurant = new Restaurant({
    resname,
    description,
    address,
    city,
    contact,
  });

  newRestaurant
    .save()
    .then(() => res.json("Resataurant added !!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Restaurant.findById(req.params.id)
    .then((restaurant) => res.json(restaurant))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Restaurant.findByIdAndDelete(req.params.id)
    .then((restaurant) => res.json("Review Deleted !!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Restaurant.findById(req.params.id)
    .then((restaurant) => {
      restaurant.resname = req.body.resname;
      restaurant.description = req.body.description;
      restaurant.address = req.body.address;
      restaurant.city = req.body.city;
      restaurant.contact = req.body.contact;

      restaurant
        .save()
        .then(() => res.json("Review Updated !!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
