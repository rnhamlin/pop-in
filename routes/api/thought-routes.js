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
router.use("/").get(findAllThoughts).post(addThought);

// /api/thoughts/:id
router.use("/:id").get(findOneThoughtById);
router.use("/:id").put(updateThought);
router.use("/:id").delete(removeThought);

module.exports = router;
