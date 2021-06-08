const router = require("express").Router();
let Review = require("../../models/Review");
const auth = require("../../middleware/auth");

router.get("/", (req, res) => {
  Review.find()
    .sort({ date: -1 })
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/", auth, (req, res) => {
  const newReview = new Review({
    body: req.body.body,
    image: req.body.image,
    user: req.body.user,
  });

  newReview
    .save()
    .then((review) => res.json(review))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", auth, (req, res) => {
  Review.findById(req.params.id)
    .then((review) => review.remove().then(() => res.json("Review Deleted")))
    .catch((err) => res.status(404).json("Error: " + err));
});

module.exports = router;
