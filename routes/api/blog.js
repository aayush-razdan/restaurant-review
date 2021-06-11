const router = require("express").Router();
let Blog = require("../../models/Blog");
const auth = require("../../middleware/auth");

router.get("/", (req, res) => {
  Blog.find()
    .sort({ date: -1 })
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/", auth, (req, res) => {
  const newBlog = new Blog({
    name: req.body.name,
    title: req.body.title,
    image: req.body.image,
    body: req.body.body,
  });

  newBlog
    .save()
    .then((blog) => res.json(blog))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", auth, (req, res) => {
  Blog.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json("Item Deleted")))
    .catch((err) => res.status(404).json("Error: " + err));
});

module.exports = router;
