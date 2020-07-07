"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("ProductLists", [
			{
				productListName: "dresses",
				categoryId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productListName: "swimwear",
				categoryId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productListName: "shirts",
				categoryId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productListName: "lingerie",
				categoryId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productListName: "graphictee",
				categoryId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productListName: "shorts",
				categoryId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productListName: "jeans & demin",
				categoryId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productListName: "hoodies",
				categoryId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productListName: "skirts",
				categoryId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productListName: "tops",
				categoryId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productListName: "kid-dresses",
				categoryId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("ProductLists", null, {});
	},
};
