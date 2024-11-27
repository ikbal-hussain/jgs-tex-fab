const express = require("express");
const { getOrders } = require("../controllers/order.controller");
const validateQuery = require("../utils/validateQuery");

const router = express.Router();

router.get("/orders", validateQuery, getOrders);

module.exports = router;
