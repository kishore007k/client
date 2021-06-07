import React from "react";

// Swiper
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Product Images
import PicOne from "../../assets/images/slide/pic1.jpg";
import PicTwo from "../../assets/images/slide/pic2.jpg";
import PicThree from "../../assets/images/slide/pic3.jpg";
import PicFour from "../../assets/images/slide/pic4.jpg";

// Styles
import {
	Content,
	ContentContainer,
	PButtonContainer,
	PDesc,
	PPrice,
	PStat,
	PTitle,
	Wrapper,
	Image,
} from "./style";
import BuyNowBtn from "../../utils/BuyNowBtn";
import AddToCartBtn from "../../utils/AddToCartBtn";
import Stars from "../Stars";

const data = [
	{
		title: "ROG Strix GT 4X",
		image: [PicOne, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		stars: 4,
		reviewCount: 4021,
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		stars: 4,
		reviewCount: 4021,
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicThree, PicTwo, PicFour],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		stars: 4,
		reviewCount: 4021,
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicFour, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		stars: 4,
		reviewCount: 4021,
	},
];

const settings = {
	dots: true,
	infinite: true,
	fade: true,
	speed: 2000,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnHover: true,
};

const ImageSlider = () => {
	return (
		<Slider {...settings}>
			{data.map((item, index) => (
				<Wrapper bgImage={item.image[0]} key={index}>
					<div>
						<ContentContainer>
							<Image>
								<img src={item.image[0]} alt={item.title} />
							</Image>
							<Content>
								<PTitle>{item.title}</PTitle>
								<PDesc>{item.desc}</PDesc>
								<PStat>
									<span>{item.stat}</span>
									<div>
										<Stars stars={item.stars} />
									</div>
									<span>{`(${item.reviewCount})`}</span>
								</PStat>
								<PPrice>{item.price}</PPrice>
								<PButtonContainer>
									<BuyNowBtn>Buy Now</BuyNowBtn>
									<AddToCartBtn>Add to Cart</AddToCartBtn>
								</PButtonContainer>
							</Content>
						</ContentContainer>
					</div>
				</Wrapper>
			))}
		</Slider>
	);
};

export default ImageSlider;
