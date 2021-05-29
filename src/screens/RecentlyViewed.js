import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";

// Product Images
import PicOne from "../assets/images/slide/pic1.jpg";
import PicTwo from "../assets/images/slide/pic2.jpg";
import PicThree from "../assets/images/slide/pic3.jpg";
import PicFour from "../assets/images/slide/pic4.jpg";

import styled from "styled-components";
import { COLORS, FONTS } from "../assets/styles";

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
];

const settings = {
	className: "center",
	centerMode: true,
	centerPadding: "30px",
	autoplay: true,
	dots: false,
	slidesToShow: 3,
	infinite: true,
	speed: 700,
	lazyLoad: true,
	autoplaySpeed: 1500,
	pauseOnFocus: true,
	focusOnSelect: true,
};

const RecentlyViewed = () => {
	return (
		<div>
			<Title>Recently Viewed</Title>
			<SliderContainer>
				<Slider {...settings}>
					{data.map((item, index) => (
						<CardContainer key={index}>
							<Card
								image={item.image}
								title={item.title}
								desc={item.desc}
								stat={item.stat}
								price={item.price}
							/>
						</CardContainer>
					))}
				</Slider>
			</SliderContainer>
		</div>
	);
};

export default RecentlyViewed;

const Title = styled.h1`
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.H1};
	font-weight: ${FONTS.fontWeight.semiBold};
	text-align: center;
`;

const SliderContainer = styled.div`
	max-width: 1300px;
	width: 100%;
	margin: 60px auto;
`;

const CardContainer = styled.div`
	margin: 20px 0px;
`;
