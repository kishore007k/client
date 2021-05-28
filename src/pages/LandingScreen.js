import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserDetail } from "../api/Auth";

// Styles
import styled from "styled-components";
import ImageSlider from "../components/ImageSlider";

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
		</Wrapper>
	);
};

export default LandingScreen;

const Wrapper = styled.div`
	margin-top: 80px;
	width: 100%;
	height: 100%;
`;
