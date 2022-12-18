// call on functions created in the Controllers; those are the "actual" routes. Controllers manage what's happening to data once the route is used.
const router = require("express").Router();

// list the functions in {} below to create the object to call on in the router.
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// /api/user
router.route("/").get(getAllUsers).post(createUser);

// /api/user/:id
router
  .route("/:id")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
