"use strict";
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  address: { type: String, required: true, unique: true },
  cash1: { type: Number },
  cash2: { type: Number },
  cash3: { type: Number },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
