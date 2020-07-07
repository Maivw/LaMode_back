"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Products", [
			{
				productName: "vl1",
				color: "black",
				price: 32,
				productCode: "0000000001",
				description:
					"A slub knit knee-length T-shirt dress featuring a crew neck, short sleeves, back slit at the hem, and a bodycon silhouette.",
				size: "S",
				photo: "https://www.forever21.com/images/4_full_750/00409617-05.jpg",
				productListId: 1,
				volume: 10,
				promotion: "20%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productName: "vl2",
				color: "sage",
				price: 30,
				productCode: "0000000002",
				description:
					"A crinkle woven mini dress featuring sheer crochet lace panels, adjustable cami straps that crisscross at the back, self-tie support strap over a cutout, ruffled trim, and a fit and flare silhouette.",
				size: "M",
				photo: "https://www.forever21.com/images/2_side_750/00398962-04.jpg",
				productListId: 1,
				volume: 90,
				promotion: "25%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productName: "vl3",
				color: "golden haze",
				price: 40,
				productCode: "0000000003",
				description:
					"A knit T-shirt dress featuring a ribbed crew neck, short dolman sleeves, removable sash belt, and a mini length.",
				size: "M",
				photo: "https://www.forever21.com/images/4_full_750/00400089-04.jpg",
				productListId: 1,
				volume: 16,
				promotion: "20%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productName: "db1",
				color: "white",
				price: 22,
				productCode: "0000000004",
				description:
					"A stretch-knit one-piece swimsuit featuring a plunging halter V-neckline with self-tie closure, princess seams, high-leg cut, and back self-tie closure.",
				size: "XS",
				photo: "https://www.forever21.com/images/4_full_750/00391236-01.jpg",
				productListId: 2,
				volume: 20,
				promotion: "30%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productName: "db2",
				color: "coral",
				price: 29,
				productCode: "0000000005",
				description:
					"A stretch-knit bikini top featuring a V-neckline, adjustable cami straps, pull-on styling, and removable cups.",
				size: "S",
				photo: "https://www.forever21.com/images/1_front_750/00380394-03.jpg",
				productListId: 2,
				volume: 40,
				promotion: "50%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productName: "db3",
				color: "aqua",
				price: 37,
				productCode: "0000000006",
				description:
					"A pair of ribbed knit low-rise cheeky bikini bottoms featuring a high leg cut, full lining, and elasticized trim.",
				size: "L",
				photo: "https://www.forever21.com/images/1_front_750/00393264-03.jpg",
				productListId: 2,
				volume: 30,
				promotion: "25%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productName: "ap1",
				color: "beige",
				price: 17,
				productCode: "0000000007",
				description:
					"A pointelle knit sweater top featuring a front floral crochet panel, round neckline, 3/4 sleeves, and banded trim.",
				size: "S",
				photo: "https://www.forever21.com/images/1_front_750/00401003-02.jpg",
				productListId: 3,
				volume: 46,
				promotion: "25%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productName: "ap2",
				color: "back-multi",
				price: 23,
				productCode: "0000000008",
				description:
					"A woven shirt featuring an allover butterfly print, button-down front that ends in a vented hem, basic collar, dropped short sleeves, boxy fit, and a semi-cropped hem.",
				size: "M",
				photo: "https://www.forever21.com/images/1_front_750/00402745-04.jpg",
				productListId: 3,
				volume: 20,
				promotion: "40%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productName: "ap3",
				color: "yellow",
				price: 41,
				productCode: "0000000009",
				description:
					"A chiffon crop top featuring an allover clip dot design, sweetheart neckline, ruffle trim, long balloon sleeves, shirred bust, lined bodice, and a concealed side zip closure.",
				size: "M",
				photo: "https://www.forever21.com/images/1_front_750/00406694-04.jpg",
				productListId: 3,
				volume: 20,
				promotion: "20%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productName: "an1",
				color: "pink",
				price: 25,
				productCode: "0000000010",
				description:
					"A seamless knit bralette featuring a geo textured body with striped pattern, ribbed underband, bust lining, adjustable cami straps, V-neckline, and a longline fit",
				size: "M",
				photo: "https://www.forever21.com/images/1_front_750/00396950-04.jpg",
				productListId: 4,
				volume: 10,
				promotion: "25%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productName: "an2",
				color: "blush",
				price: 27,
				productCode: "0000000011",
				description:
					"A uniquely textured seamless knit bralette featuring a horizontal striped pattern, floral lace trim, V-neckline, adjustable cami straps, and lettuce-edge hem.",
				size: "M",
				photo: "https://www.forever21.com/images/1_front_750/00396936-03.jpg",
				productListId: 4,
				volume: 30,
				promotion: "50%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productName: "an3",
				color: "lavender",
				price: 18,
				productCode: "0000000012",
				description:
					"A metallic lace bralette featuring a V-neck, scalloped trim, lined cups, and adjustable shoulder straps that lead into a racerback.",
				size: "L",
				photo: "https://www.forever21.com/images/1_front_750/00377125-04.jpg",
				productListId: 4,
				volume: 10,
				promotion: "20%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productName: "apn1",
				color: "black",
				price: 28,
				productCode: "0000000013",
				description:
					"A knit tee featuring a front 'Goodnight' graphic, short sleeves, and a crew neck.",
				size: "L",
				photo: "https://www.forever21.com/images/1_front_750/00408074-02.jpg",
				productListId: 5,
				volume: 10,
				promotion: "20%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productName: "apn2",
				color: "white",
				price: 24,
				productCode: "0000000014",
				description:
					"A knit tee featuring front Cowboy Bebop graphics written in English and Japanese, front grid images of character Spike from the show, ribbed crew neck, and short sleeves",
				size: "M",
				photo: "https://www.forever21.com/images/1_front_750/00371075-01.jpg",
				productListId: 5,
				volume: 10,
				promotion: "30%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				productName: "apn3",
				color: "white",
				price: 25,
				productCode: "0000000015",
				description:
					"A knit tee featuring a front 'Forget About Me' text written in cursive and a rose graphic, crew neck, and dropped short sleeves.",
				size: "XL",
				photo: "https://www.forever21.com/images/1_front_750/00400008-01.jpg",
				productListId: 5,
				volume: 20,
				promotion: "40%",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Products", null, {});
	},
};