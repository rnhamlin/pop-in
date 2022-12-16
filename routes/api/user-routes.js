// call on functions created in the Controllers; those are the "actual" routes. Controllers manage what's happening to data once the route is used.
const router = require("express").Router();
// list the functions in {} below to create the object to call on in the router.
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

// /api/user
router.use("/").get(getAllUsers).put(updateUser);

// /api/user/:id
router.use("/:id").get(getUserById).post(createUser).delete(deleteUser);
