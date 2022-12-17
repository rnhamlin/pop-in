const User = require("./User.js");
const Thought = require("./Thought.js");
const Reaction = require("./Reaction.js");
//I don't need one for Reaction because it will only be a schema, not a model.

module.exports = { User, Thought, Reaction };
