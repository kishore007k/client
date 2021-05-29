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
			<ProductCard />
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
