const express = require("express");
const paypal = require("paypal-rest-sdk");
const { asyncHandler } = require("../utils");
const { check } = require("express-validator");
const _ = require("lodash");

const router = express.Router();
const db = require("../db/models");
const { User, Payment } = db;

router.post(
	"/",
	asyncHandler(async (req, res, next) => {
		const {
			payerId,
			userId,
			emailAddress,
			amount,
			currentcyCode,
			payerName,
			shippingAddress,
		} = req.body;
		const payment = await Payment.create({
			payerId,
			userId,
			emailAddress,
			amount,
			currentcyCode,
			payerName,
			shippingAddress,
		});
		res.status(201).json({ payment, message: "Update successfully" });
	})
);

module.exports = router;
