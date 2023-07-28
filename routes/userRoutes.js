"use strict";

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/buyProduct', userController.buyProduct);

module.exports = router;
