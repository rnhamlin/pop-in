const { Schema, Types } = require("mongoose");

//reaction schema goes here
const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId(),
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
  },
  {
    username: {
      type: String,
      required: true,
    },
  },
  {
    createdAt: {
      type: Date,
      get: (date) => timeSince(date),
    },
    timestamps: true,
    toJSON: {
      getters: true,
    },
  }
);

schema.exports = ReactionSchema;
