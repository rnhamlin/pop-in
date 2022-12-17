//make controllers before routes.

//import model
//const { Thought, User } = require("../models").default;
const { Thought } = require("../models/Thought.js");
const { User } = require("../models/User.js");

//thought controller: an array of all the thought-related functions.
const thoughtController = {
  //GET all thoughts
  //.populate will come in later, when we are wondering why our thoughts aren't populating
  findAllThoughts(req, res) {
    Thought.find()
      .populate({ path: "user", select: "-__v" })
      .populate({ path: "user", select: "-__v" })
      .select("-__v")
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        // 400 is user error; 500 is a server error. --> Whose fault? Was there anything the user could have done differently?
        res.sendStatus(500);
      });
  },

  //get one thought
  findOneThoughtById({ params }, res) {
    Thoughts.findOne({ _id: params.id })
      .select("-__v")
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  //POST - create comment to user

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

  // PUT - modify/update thought by ID
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },

  //DELETE - remove comment
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
