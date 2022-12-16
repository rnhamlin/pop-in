const { Schema, model } = require("mongoose");


// User Schema goes here
const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
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
  },
  // Setup for the virtual.
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual that retrieves length of user's friends array field on query.
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
//will need for thought.js, but not reaction.js
const User = model("User", UserSchema);

module.exports = User;
