import React from "react";
import { Link } from "react-router-dom";
import SimilarProCard from "../SimilarProCard";

import PicOne from "../../assets/images/slide/pic1.jpg";
import PicTwo from "../../assets/images/slide/pic2.jpg";
import PicThree from "../../assets/images/slide/pic3.jpg";
import {
	SimilarProCardContainer,
	SimilarProContainer,
	SimilarProTop,
} from "./style";

const similarData = [
	{
		id: 1,
		title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
		image: [PicOne, PicTwo, PicThree],
		price: "₹ 72,907.00",
		category: "men's clothing",
		stars: 4,
	},
	{
		id: 2,
		title: "Mens Casual Premium Slim Fit T-Shirts ",
		image: [PicOne, PicTwo, PicThree],
		price: "₹ 72,907.00",
		category: "men's clothing",
		stars: 5,
	},
	{
		id: 3,
		title: "Mens Cotton Jacket",
		image: [PicOne, PicTwo, PicThree],
		price: "₹ 72,907.00",
		category: "men's clothing",
		stars: 3,
	},
	{
		id: 4,
		title: "Mens Casual Slim Fit",
		image: [PicOne, PicTwo, PicThree],
		price: "₹ 72,907.00",
		category: "men's clothing",
		stars: 4,
	},
];

const SimilarProducts = () => {
	return (
		<SimilarProContainer>
			<SimilarProTop>
				<h3>Similar Products</h3>
				<Link to="/">Show More</Link>
			</SimilarProTop>
			<SimilarProCardContainer>
				{similarData.map((item) => (
					<div key={item.id}>
						<SimilarProCard product={item} />
					</div>
				))}
			</SimilarProCardContainer>
		</SimilarProContainer>
	);
};

export default SimilarProducts;
