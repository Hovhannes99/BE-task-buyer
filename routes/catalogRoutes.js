"use strict";

const express = require('express');
const catalogController = require('../controllers/catalogController');
const {request, response} = require("express");

const router = express.Router();

router.get('/:id', catalogController.getCatalogById);

module.exports = router;
