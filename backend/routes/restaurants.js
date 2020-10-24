const router = require("express").Router();
let Restaurant = require("../models/restaurant.model");

router.route("/").get((req, res) => {
    Restaurant.find()
        .then(restaurants => res.json(restaurants))
        .catch(err => res.status(400).json("Error: " + err));
});


router.route("/add").post((req, res) => {
    const username = req.body.username;
    const restaurantName = req.body.restaurantName;
    const rating = Number(req.body.rating);
    const date = Date.parse(req.body.date);

    const newRestaurant = new Restaurant({
        username,
        restaurantName,
        rating,
        date,
    });

    newRestaurant.save()
        .then(() => res.json("Resataurant added !!"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Restaurant.findById(req.params.id)
        .then(restaurant => res.json(restaurant))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/:id").delete((req, res) => {
    Restaurant.findByIdAndDelete(req.params.id)
        .then(restaurant => res.json("Review Deleted !!"))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/update/:id").post((req, res) => {
    Restaurant.findById(req.params.id)
        .then(restaurant => {
            restaurant.username = req.body.username;
            restaurant.restaurantName = req.body.restaurantName;
            restaurant.rating = Number(req.body.rating);
            restaurant.date = Date(req.body.date);

            restaurant.save()
                .then(() => res.json("Review Updated !!"))
                .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
})

module.exports = router;