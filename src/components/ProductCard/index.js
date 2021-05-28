import React from "react";
import {
	Card,
	CardContainer,
	CardDesc,
	CardDetails,
	CardPrice,
	CardStars,
	CardStat,
	CardTitle,
	Stat,
} from "./style";

import ActiveStarIcon from "../../assets/icons/ActiveStarIcon";
import InActiveStarIcon from "../../assets/icons/InActiveStarIcon";

// Product Images
import PicOne from "../../assets/images/slide/pic1.jpg";
import PicTwo from "../../assets/images/slide/pic2.jpg";
import PicThree from "../../assets/images/slide/pic3.jpg";
import PicFour from "../../assets/images/slide/pic4.jpg";

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
				<Card key={index}>
					<div>
						<img src={item.image} alt={item.title} style={{ width: "400px" }} />
					</div>
					<div>
						<CardDetails>
							<CardTitle>{item.title}</CardTitle>
							<CardStars>
								<ActiveStarIcon />
								<ActiveStarIcon />
								<ActiveStarIcon />
								<ActiveStarIcon />
								<InActiveStarIcon />
							</CardStars>
						</CardDetails>
						<CardDesc>{item.desc}</CardDesc>
						<CardStat>
							<Stat>{item.stat}</Stat>
							<CardPrice>{item.price}</CardPrice>
						</CardStat>
					</div>
				</Card>
			))}
		</CardContainer>
	);
};

export default ProductCard;
