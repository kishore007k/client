import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserDetail } from "../api/Auth";

// Styles
import styled from "styled-components";

// Components
import ImageSlider from "../components/ImageSlider";
import ProductCard from "../screens/ProductCard";
import DetailsView from "../screens/DetailsView";
import CompaniesSection from "../screens/CompaniesSection";
import RecentlyViewed from "../screens/RecentlyViewed";

// Product Images
import PicOne from "../assets/images/slide/pic1.jpg";
import PicTwo from "../assets/images/slide/pic2.jpg";
import PicThree from "../assets/images/slide/pic3.jpg";
import PicFour from "../assets/images/slide/pic4.jpg";

const data = [
	{
		title: "ROG Strix GT 4X",
		image: [PicOne, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: 4400,
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
		price: 4400,
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
		price: 4400,
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
		price: 4400,
		category: "computer",
		stars: 5,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicOne, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: 4400,
		category: "computer",
		stars: 1,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicTwo, PicFour, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: 4400,
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
		price: 4400,
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
		price: 4400,
		category: "computer",
		stars: 4,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicOne, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: 4400,
		category: "computer",
		stars: 5,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicTwo, PicFour, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: 4400,
		category: "computer",
		stars: 4,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicThree, PicTwo, PicFour],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: 4400,
		category: "computer",
		stars: 2,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicFour, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: 4400,
		category: "computer",
		stars: 4,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
];

const LandingScreen = () => {
	const localUserDataJson = JSON.parse(localStorage.getItem("user"));
	const dispatch = useDispatch();

	const id = localUserDataJson?.data?._id;

	useEffect(() => {
		fetchUserDetail({ id, dispatch });
	}, [id, dispatch]);

	return (
		<Wrapper>
			{/* Slider */}
			<ImageSlider />
			{/* Products as Card */}
			<ProductCard data={data} />
			{/* Details View */}
			<DetailsView />
			{/* Companies */}
			<CompaniesSection />
			{/* Recent Items */}
			<RecentlyViewed />
		</Wrapper>
	);
};

export default LandingScreen;

const Wrapper = styled.div`
	margin-top: 80px;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;
