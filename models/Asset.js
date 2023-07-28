"use strict";
const mongoose = require('mongoose');

const AssetSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    type: { type: Number, enum: [1, 2, 3] },
    level: { type: Number, min: 1, max: 10 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Asset = mongoose.model('Asset', AssetSchema);

module.exports = Asset;
