const express = require("express");
const router = express.Router();
const orderPaymentHandler = require("./Handler/Order-payment");

/* GET users listing. */
router.get("/", orderPaymentHandler.getOrders);

module.exports = router;
