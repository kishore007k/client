import React from "react";
import { Link } from "react-router-dom";
import Stars from "../Stars";

import { CardWrapper, ProStat, SPWrapper } from "./style";

const SimilarProCard = ({ product }) => {
	return (
		<SPWrapper>
			{product.map((item, index) => (
				<CardWrapper>
					<Link
						to={{ pathname: `/products/${item.slug}`, state: { product: item } }}
						key={index}
					>
						<img src={item.image[1]} alt={item.category} />
						<h4>{item.title}</h4>
						<p>{item.desc}</p>
						<ProStat>
							<h5>{item.price}/-</h5>
							<Stars stars={item.stars} />
						</ProStat>
					</Link>
				</CardWrapper>
			))}
		</SPWrapper>
	);
};

export default SimilarProCard;
