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
	ReadMoreBtn,
	SimilarProductsDiv,
} from "../pages_styles/ProductScreenStyles";
import SimilarProducts from "../components/SimilarProCard";
import CustomerReviews from "../components/CustomersReview";
import { Link } from "react-router-dom";

import PicOne from "../assets/images/slide/pic1.jpg";
import PicTwo from "../assets/images/slide/pic2.jpg";
import PicThree from "../assets/images/slide/pic3.jpg";
import PicFour from "../assets/images/slide/pic4.jpg";

import { Helmet } from "react-helmet";

const ProductDetailScreen = (props) => {
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

	const data = [
		{
			title: "ROG Strix GT 4X",
			image: [PicOne, PicTwo, PicThree],
			desc:
				"Some Desc about the product and some features that this product has and how much it will be useful",
			stat: "Best Selling",
			price: "₹4400",
			category: "computer",
			stars: 4,
			reviewCount: 4201,
			slug: "rog-strix-gt-4x",
		},
		{
			title: "ROG Strix GT 4X",
			image: [PicTwo, PicFour, PicThree],
			desc:
				"Some Desc about the product and some features that this product has and how much it will be useful",
			stat: "Best Selling",
			price: "₹4400",
			category: "computer",
			stars: 3,
			reviewCount: 4201,
			slug: "rog-strix-gt-4x",
		},
		{
			title: "ROG Strix GT 4X",
			image: [PicThree, PicTwo, PicFour],
			desc:
				"Some Desc about the product and some features that this product has and how much it will be useful",
			stat: "Best Selling",
			price: "₹4400",
			category: "computer",
			stars: 4,
			reviewCount: 4201,
			slug: "rog-strix-gt-4x",
		},
		{
			title: "ROG Strix GT 4X",
			image: [PicFour, PicTwo, PicThree],
			desc:
				"Some Desc about the product and some features that this product has and how much it will be useful",
			stat: "Best Selling",
			price: "₹4400",
			category: "computer",
			stars: 5,
			reviewCount: 4201,
			slug: "rog-strix-gt-4x",
		},
	];

	return (
		<>
			<Helmet>
				<title>E Commerce Site | {title}</title>
			</Helmet>
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
								<h3>M.R.P ₹{price}/-</h3>
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
			<SimilarProductsDiv>
				<h3>Similar Products</h3>
				<Link to="/product">Show More</Link>
			</SimilarProductsDiv>
			<SimilarProducts product={data} />
			<Divider />
			<CustomerReviews stars={stars} reviewCount={reviewCount} />
			<ReadMoreBtn>
				<Link>Read More</Link>
			</ReadMoreBtn>
			<Footer />
		</>
	);
};

export default ProductDetailScreen;
