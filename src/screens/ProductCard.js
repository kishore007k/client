import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Product Images
import PicOne from "../assets/images/slide/pic1.jpg";
import PicTwo from "../assets/images/slide/pic2.jpg";
import PicThree from "../assets/images/slide/pic3.jpg";
import PicFour from "../assets/images/slide/pic4.jpg";
import Card from "../components/Card";

const data = [
	{
		title: "ROG Strix GT 4X",
		image: [PicOne, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
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
		stars: 4,
		reviewCount: 4201,
	},
];

const ProductCard = () => {
	return (
		<CardContainer>
			{data.map((item, index) => (
				<Link
					to={{ pathname: `/products/${item.title}`, state: { product: item } }}
					key={index}
				>
					<Card
						image={item.image[0]}
						title={item.title}
						stars={item.stars}
						stat={item.stat}
						reviewCount={item.reviewCount}
						price={item.price}
						desc={item.desc}
					/>
				</Link>
			))}
		</CardContainer>
	);
};

export default ProductCard;

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 20px;
	grid-area: auto;
	grid-auto-flow: dense;
	width: 1300px;
	margin: 60px auto;

	a {
		text-decoration: none;
	}
`;
