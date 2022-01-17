const { Schema, model } = require("mongoose");
const thoughtSchema = require("./thought");

// Schema to create user model
const userSchema = new Schema(
  {
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
      lowercase: true,
      trim: true,
    },
    // thoughts: [thoughtSchema],
    // friends: [userSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema
  .virtual("friendCount")
  // Getter
  .get(function () {
    return this.friends.length;
  });

const User = model("User", userSchema);

module.exports = User;
