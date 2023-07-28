"use strict";
const mongoose = require('mongoose');

const CatalogSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String },
    description: { type: String },
    url: { type: String },
    cost1: { type: Number },
    cost2: { type: Number },
    cost3: { type: Number },
    req1: { type: Number },
    req2: { type: Number },
    req3: { type: Number },
    category: { type: Number },
});

const Catalog = mongoose.model('Catalog', CatalogSchema);

module.exports = Catalog;
