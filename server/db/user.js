const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userName: String,
    password: String,
    email: {
      type: String,
      required: true,
      unique: true
    },
    firstName: String,
    lastName: String,
    gender: String,
    country: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);