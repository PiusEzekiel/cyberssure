const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: [true, "Email already exist!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  name: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
