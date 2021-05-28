import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

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
} from "./style";
import BuyNowBtn from "../../utils/BuyNowBtn";
import AddToCartBtn from "../../utils/AddToCartBtn";

// Icons
import ActiveStarIcon from "../../assets/icons/ActiveStarIcon";
import InActiveStarIcon from "../../assets/icons/InActiveStarIcon";

// Styles for swiper
import "swiper/swiper.min.css";
import "swiper/components/effect-flip/effect-flip.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

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
							<Content>
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
									<BuyNowBtn>Buy Now</BuyNowBtn>
									<AddToCartBtn>Add to Cart</AddToCartBtn>
								</PButtonContainer>
							</Content>
						</ContentContainer>
					</Wrapper>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ImageSlider;
