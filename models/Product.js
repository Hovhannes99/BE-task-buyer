"use strict";
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  address: { type: String, required: true, unique: false },
  id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
