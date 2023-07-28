"use strict";
const Catalog = require('../models/Catalog');

exports.getCatalogById = async (req, res) => {
    const catalogId = req.params.id;
    try {
        const catalog = await Catalog.findOne({id: Number(catalogId)});
        if (!catalog) {
            return res.status(404).json({error: 'Catalog not found.'});
        }
        const {id, name, description, url, cost1, cost2, cost3, req1, req2, req3} = catalog;
        const price = {cost1, cost2, cost3};
        const req = {req1, req2, req3};

         res.json({id, name, description, imageUrl: url, price, req});
    } catch (error) {
        res.status(500).json({error: 'Server error.'});
    }
};
