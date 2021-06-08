const router = require("express").Router();
let Item = require("../../models/Item");
const auth = require("../../middleware/auth");

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/", auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json("Item Deleted")))
    .catch((err) => res.status(404).json("Error: " + err));
});

module.exports = router;
