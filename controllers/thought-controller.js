//make controllers before routes.

//thought controller

//import model
const { Thought, User } = require("../models");

const thoughtController = {
  //add comment to user

  addThought({ params, body }, res) {
    console.log(body);
    Thought.create(body)
      .then(({ _id }) => {
        //   console.log(_id);
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No username found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  //remove comment
  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((deletedThought) => {
        if (!deletedThought) {
          res.status(404).json({ message: "No thoughts posted with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
