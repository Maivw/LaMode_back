const express = require("express");
const { asyncHandler } = require("../utils");

const router = express.Router();
const db = require("../db/models");
const { Category, ProductList, Product } = db;

router.get(
	"/",
	asyncHandler(async (req, res) => {
		const productList = await ProductList.findAll({
			order: [["productListName"]],
			include: [Category],
		});
		res.json({ productList });
	})
);

module.exports = router;
