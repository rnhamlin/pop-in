// user controller

//import model
//const { User } = require("../models/User");
const { User } = require("../models");

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find()
      .select("-__v")
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // get one user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({ path: "thoughts", select: "-__v" })
      .then((dbUserData) => {
        // send error message if no user is found
        if (!dbUserData) {
          res.json(500).json({ message: "No username found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // create a user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // update user by id
  updateUser({ params, body }, res) {
    User.findOneandUpdate({ _id: params.id }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // delete user by id
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
    // BONUS: remove a user's associated thoughts when user is deleted
    UserSchema.thoughts("remove", function (next) {
      thoughts.remove({ client_id: this._id }).exec();
      next();
    });
  },
  // create friend
  addFriend({ params }, res) {
    User.findOneandUpdate(
      { _id: params.friendId },
      { $push: { friends: params.friendId } },
      { new: true, runValidators: true }
    ).then((dbFriendData) => {
      if (!dbFriendData) {
        res.status(500);
      }
    });
  },
  // delete friend
  removeFriend({ params }, res) {
    Friend.findOneAndDelete({ _id: params.id })
      .then((dbFriendData) => res.json(dbFriendData))
      .catch((err) => res.json(err));
  },
};

// export code

module.exports = userController;
