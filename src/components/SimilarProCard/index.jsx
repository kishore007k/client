import React from "react";
import { Link } from "react-router-dom";
import Stars from "../Stars";

import { CardWrapper, ProStat } from "./style";

const SimilarProCard = ({ product }) => {
	const { title, image, price, category, stars, id } = product;

	return (
		<CardWrapper>
			<Link to="/">
				<img src={image[1]} alt={category} />
				<h4>{title}</h4>
				<ProStat>
					<h5>{price}/-</h5>
					<Stars stars={stars} />
				</ProStat>
			</Link>
		</CardWrapper>
	);
};

export default SimilarProCard;
