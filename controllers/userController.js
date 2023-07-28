"use strict";
const User = require("../models/User");
const Asset = require("../models/Asset");
const Product = require("../models/Product");
const Catalog = require("../models/Catalog");

exports.buyProduct = async (req, res) => {
  try {
    const { id, address, typeId } = req.body;
    const catalog = await Catalog.findOne({ id });
    const user = await User.findOne({ address });


    if (!catalog || !user) {
      return res.status(404).json({ success: false, error: { errorMessage: "Catalog or User not found" } });
    }

    const { cash1, cash2, cash3 } = user;
    const { cost1, cost2, cost3, req1, req2, req3 } = catalog;

    if (cash1 <= cost1 || cash2 <= cost2 || cash3 <= cost3) {
      return res.status(200).json({
        success: false,
        error: { errorMessage: "Not enough resources to buy the product" },
      });
    }

    if (req1 !== null || req2 !== null || req3 !== null) {
      const asset = await Asset.findOne({ type: typeId }).populate({
        path: "user",
        match: {
          $eq: address,
        },
      });

        if (!asset ||  (asset.level <= req1 && asset.level <= req2 && asset.level <= req3)) {
          return res.status(400).json({
            success: false,
            error: { errorMessage: "Particular product doesn't meet the necessary requirements specified in the catalog for that product." },
          });
        }

    }

    user.cash1 -= cost1;
    user.cash2 -= cost2;
    user.cash3 -= cost3;
    await user.save();

    const product = await Product.create({
      id: catalog._id,
      address: user.address,
      user: user._id,
    });
    await product.save();

    return res.json({
      success: true,
      data: {
        resources: {
          cash1: user.cash1,
          cash2: user.cash2,
          cash3: user.cash3,
        },
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
