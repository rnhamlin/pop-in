const router = require("express").Router();
const {
  findAllThoughts,
  findOneThoughtById,
  addThought,
  updateThought,
  removeThought,
} = require("../../controllers/thought-controller");

//specify endpoints with router.use()
//see below one simplified way and one longhand way of writing this out

// /api/thoughts
router.route("/").get(findAllThoughts).post(addThought);

// /api/thoughts/:id
router.route("/:id").get(findOneThoughtById);
router.route("/:id").put(updateThought);
router.route("/:id").delete(removeThought);

module.exports = router;
