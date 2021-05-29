import React from "react";
import styled from "styled-components";

// Product Images
import PicOne from "../assets/images/slide/pic1.jpg";
import PicTwo from "../assets/images/slide/pic2.jpg";
import PicThree from "../assets/images/slide/pic3.jpg";
import PicFour from "../assets/images/slide/pic4.jpg";
import Card from "../components/Card";

const data = [
	{
		title: "ROG Strix GT 4X",
		image: PicOne,
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
	},
	{
		title: "ROG Strix GT 4X",
		image: PicTwo,
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
	},
	{
		title: "ROG Strix GT 4X",
		image: PicThree,
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
	},
	{
		title: "ROG Strix GT 4X",
		image: PicFour,
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
	},
	{
		title: "ROG Strix GT 4X",
		image: PicOne,
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
	},
	{
		title: "ROG Strix GT 4X",
		image: PicTwo,
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
	},
	{
		title: "ROG Strix GT 4X",
		image: PicThree,
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
	},
	{
		title: "ROG Strix GT 4X",
		image: PicFour,
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
	},
	{
		title: "ROG Strix GT 4X",
		image: PicOne,
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
	},
	{
		title: "ROG Strix GT 4X",
		image: PicTwo,
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
	},
	{
		title: "ROG Strix GT 4X",
		image: PicThree,
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
	},
	{
		title: "ROG Strix GT 4X",
		image: PicFour,
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
	},
];

const ProductCard = () => {
	return (
		<CardContainer>
			{data.map((item, index) => (
				<Card
					image={item.image}
					title={item.title}
					stat={item.stat}
					price={item.price}
					desc={item.desc}
					key={index}
				/>
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
`;
