const { Schema, model } = require("mongoose");

// User Schema goes here
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      "Must match a valid email address.",
    ],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

// Virtual that retrieves length of user's friends array field on query.
// UserSchema.virtual("friendCount").get(function () {
//   return this.friends.length;
// });
//will need for thought.js, but not reaction.js
const User = model("User", UserSchema);

module.exports = User;
