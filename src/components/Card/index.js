import React from "react";
import {
	CardCard,
	CardDesc,
	CardDetails,
	CardImage,
	CardPrice,
	CardStars,
	CardStat,
	CardTitle,
	Stat,
} from "./style";

import { ActiveStarIcon, InActiveStarIcon } from "../../assets/icons";

const Card = ({ image, title, desc, stat, price }) => {
	return (
		<CardCard>
			<CardImage>
				<img src={image} alt={title} />
			</CardImage>
			<div>
				<CardDetails>
					<CardTitle>{title}</CardTitle>
					<CardStars>
						<ActiveStarIcon />
						<ActiveStarIcon />
						<ActiveStarIcon />
						<ActiveStarIcon />
						<InActiveStarIcon />
					</CardStars>
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
