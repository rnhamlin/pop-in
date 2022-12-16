const { timeSince } = require("bson");
const { Schema, model } = require("mongoose");
const ReactionSchema = require("./Reaction.js");

// thought schema, broken down into multiple objects:

const ThoughtSchema = new Schema(
  // the content of the reaction (text)
  {
    thoughtText: {
      type: String,
      required: true,
      length: 1 - 280,
    },
  },
  // when the reaction was created
  {
    createdAt: {
      type: Date,
      get: {
        type: Date,
        get: (date) => timeSince(date),
      },
      timestamps: true,
      toJSON: {
        getters: true,
        virtuals: true,
      },
    },
  },
  // which user posted the reaction
  {
    userName: {
      type: String,
      Required: true,
    },
  },
  // array of nested documents from the reactionSchema
  {
    reactions: [
      {
        type: Schema.Types.DocumentArray,
        ref: ReactionSchema,
      },
    ],
  },
  // Setup for virtual
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// reactionCount virtual goes here to retrieve the length of the thought's reactions array field on query.
ThoughtSchema.virtual("reactionCount", ThoughtSchema).get(function () {
  return this.reactions.length;
});
const Thought = model("Thought", ThoughtSchema);

// Export code goes here

module.exports = Thought;
