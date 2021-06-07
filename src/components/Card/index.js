import React from "react";
import {
	CardCard,
	CardDesc,
	CardDetails,
	CardImage,
	CardPrice,
	CardReviewCount,
	CardStars,
	CardStat,
	CardTitle,
	Stat,
} from "./style";

import Stars from "../Stars";

const Card = ({ image, title, desc, stat, price, stars, reviewCount }) => {
	return (
		<CardCard>
			<CardImage>
				<img src={image} alt={title} />
			</CardImage>
			<div>
				<CardDetails>
					<CardTitle>{title}</CardTitle>
					<CardStars>
						<Stars stars={stars} />
					</CardStars>
					<CardReviewCount>{`(${reviewCount})`}</CardReviewCount>
				</CardDetails>
				<CardDesc>{desc}</CardDesc>
				<CardStat>
					<Stat>{stat}</Stat>
					<CardPrice>{price}</CardPrice>
				</CardStat>
			</div>
		</CardCard>
	);
};

export default Card;
