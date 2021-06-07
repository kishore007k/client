import React from "react";

// Product Images
import PicOne from "../assets/images/slide/pic1.jpg";
import PicTwo from "../assets/images/slide/pic2.jpg";
import PicThree from "../assets/images/slide/pic3.jpg";
import PicFour from "../assets/images/slide/pic4.jpg";
import ProductCard from "../screens/ProductCard";

import Header from "../components/Header";
import Footer from "../components/Footer";

const data = [
	{
		title: "ROG Strix GT 4X",
		image: [PicOne, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicTwo, PicFour, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 3,
		reviewCount: 4201,
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicThree, PicTwo, PicFour],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicFour, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 5,
		reviewCount: 4201,
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicOne, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 1,
		reviewCount: 4201,
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicTwo, PicFour, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 3,
		reviewCount: 4201,
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicThree, PicTwo, PicFour],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicFour, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicOne, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 5,
		reviewCount: 4201,
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicTwo, PicFour, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicThree, PicTwo, PicFour],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 2,
		reviewCount: 4201,
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicFour, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
	},
];

const ProductScreen = () => {
	return (
		<div>
			<Header />
			<div style={{ marginTop: "80px" }}>
				<div></div>
				<div>
					<ProductCard data={data} />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProductScreen;
