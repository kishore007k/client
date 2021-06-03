import React, { useState } from "react";
import Stars from "../components/Stars";
import Header from "../components/Header";
import Footer from "../components/Footer";

import BuyNowBtn from "../utils/BuyNowBtn";
import AddToCartBtn from "../utils/AddToCartBtn";
import {
	FreeDeliveryIcon,
	ReplacementIcon,
	WarrantyIcon,
} from "../assets/icons";

import {
	Wrapper,
	Btns,
	Divider,
	FlexBox,
	FlexBoxContainer,
	ImageWrapper,
	PDesc,
	PriceAndButtons,
	PriceAndStat,
	PriceAndTags,
	ProDescContainer,
	ProImageContainer,
	ProImageWrapper,
	StarsCount,
	StockAndInput,
	StockInput,
	Title,
} from "../pages_styles/ProductScreenStyles";
import SimilarProducts from "../components/SimilarProducts";
import CustomerReviews from "../components/CustomersReview";

const ProductScreen = (props) => {
	const {
		product: { image, desc, stars, title, price, reviewCount, stat },
	} = props?.location?.state;

	const [currentImage, setCurrentImage] = useState(image[0]);
	const [pCount, setPCount] = useState(1);

	const increasePCount = () => {
		setPCount(Number(pCount) + 1);
	};

	const decreasePCount = () => {
		setPCount(Number(pCount) - 1);
	};

	return (
		<>
			<Header />
			<Wrapper>
				<ProImageContainer>
					<ProImageWrapper>
						{image.map((img, index) => (
							<ImageWrapper onClick={() => setCurrentImage(img)} key={index}>
								<img src={img} alt={title} />
							</ImageWrapper>
						))}
					</ProImageWrapper>
					<img src={currentImage} alt={currentImage} className="mainImage" />
				</ProImageContainer>
				<ProDescContainer>
					<Title>{title}</Title>
					<StarsCount>
						<Stars stars={stars} />
						<span>({reviewCount})</span>
					</StarsCount>
					<Divider />
					<PriceAndButtons>
						<PriceAndTags>
							<PriceAndStat>
								<span>{stat}</span>
								<h3>M.R.P {price}/-</h3>
							</PriceAndStat>
							<FlexBoxContainer>
								<FlexBox>
									<ReplacementIcon />
									<span>10 days replacement</span>
								</FlexBox>
								<FlexBox>
									<FreeDeliveryIcon />
									<span>free devilry</span>
								</FlexBox>
								<FlexBox>
									<WarrantyIcon />
									<span>1 year warranty</span>
								</FlexBox>
							</FlexBoxContainer>
						</PriceAndTags>
						<StockAndInput>
							<span>In Stock</span>
							<StockInput>
								<button onClick={decreasePCount}> - </button>
								<input
									type="number"
									value={pCount}
									onChange={(e) => setPCount(e.target.value)}
								/>
								<button onClick={increasePCount}> + </button>
							</StockInput>
						</StockAndInput>
					</PriceAndButtons>
					<Btns>
						<BuyNowBtn>Buy Now</BuyNowBtn>
						<AddToCartBtn>Add To Cart</AddToCartBtn>
					</Btns>
					<Divider />
					<PDesc>
						<h4>About this item:</h4>
						<p>{desc}</p>
					</PDesc>
				</ProDescContainer>
			</Wrapper>
			<Divider />
			<SimilarProducts />
			<Divider />
			<CustomerReviews stars={stars} reviewCount={reviewCount} />
			<Footer />
		</>
	);
};

export default ProductScreen;
