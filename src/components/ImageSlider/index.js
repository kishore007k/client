import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import "swiper/swiper.min.css";
import "swiper/components/effect-flip/effect-flip.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// Product Images
import PicOne from "../../assets/images/slide/pic1.jpg";
import PicTwo from "../../assets/images/slide/pic2.jpg";
import PicThree from "../../assets/images/slide/pic3.jpg";
import PicFour from "../../assets/images/slide/pic4.jpg";

import {
	ContentContainer,
	PAddToCartBtn,
	PButtonContainer,
	PBuyNowBtn,
	PDesc,
	PPrice,
	PStat,
	PTitle,
	Wrapper,
} from "./style";

import ActiveStarIcon from "../../assets/icons/ActiveStarIcon";
import InActiveStarIcon from "../../assets/icons/InActiveStarIcon";

SwiperCore.use([Autoplay, Pagination, Navigation]);

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

const ImageSlider = () => {
	return (
		<Swiper
			spaceBetween={30}
			centeredSlides={true}
			pagination={{
				clickable: true,
			}}
			navigation={false}
		>
			{data.map((item, index) => (
				<SwiperSlide>
					<Wrapper bgImage={item.image}>
						<ContentContainer>
							<div>
								<img src={item.image} alt={item.title} style={{ width: "580px" }} />
							</div>
							<div>
								<PTitle>{item.title}</PTitle>
								<PDesc>{item.desc}</PDesc>
								<PStat>
									<span>{item.stat}</span>
									<div>
										<ActiveStarIcon />
										<ActiveStarIcon />
										<ActiveStarIcon />
										<ActiveStarIcon />
										<InActiveStarIcon />
									</div>
								</PStat>
								<PPrice>{item.price}</PPrice>
								<PButtonContainer>
									<PBuyNowBtn>Buy Now</PBuyNowBtn>
									<PAddToCartBtn>Add to Cart</PAddToCartBtn>
								</PButtonContainer>
							</div>
						</ContentContainer>
					</Wrapper>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ImageSlider;
