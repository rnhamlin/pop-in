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
router.use("/").get(findAllThoughts).put(updateThought).delete(removeThought);

// /api/thoughts/:id
router.use("/").get(findOneThoughtById);
router.use("/:id").post(addThought);
