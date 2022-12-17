const User = require("./User.js");
const Thought = require("./Thought.js");
//I don't need one for Reaction because it will only be a schema, not a model.

User.index({ name: 1, type: -1 }).get(function () {
  return this.User;
});
User.index({ email: 1, type: -1 }).get(function () {
  return this.User;
});

module.exports = { User, Thought };
