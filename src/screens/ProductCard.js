import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const ProductCard = ({ data }) => {
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
	max-width: 1300px;
	width: 100%;
	margin: 60px auto;

	a {
		text-decoration: none;
	}
`;
