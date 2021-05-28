import React from "react";
import styled from "styled-components";

import Pic from "../assets/images/slide/pic1.jpg";
import { COLORS, FONTS } from "../assets/styles";
import AddToCartBtn from "../utils/AddToCartBtn";
import BuyNowBtn from "../utils/BuyNowBtn";

const DetailsView = () => {
	return (
		<Container>
			<Wrapper>
				<ImageWrapper>
					<img src={Pic} alt="pic" />
				</ImageWrapper>
				<Content>
					<Title>
						DELL G3 Core i5 10th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home/4 GB
						Graphics/NVIDIA GeForce GTX 1650/120 Hz) G3 3500 Gaming Laptop (15.6 inch,
						Black, 2.3 kg)
					</Title>
					<Desc>
						Bring home this Dell gaming laptop that features a 10th Gen Intel
						processor and NVIDIA GeForce graphics card. The Alienware Command Center
						will facilitate the fine-tuning of settings to derive a fluid gaming
						experience. To get a boost in performance, activate the Game Shift
						Technology using the F7 key on the keyboard that instantly boosts the fan
						speed to keep the laptop cool.
					</Desc>
					<DetailsStat>
						<Stat>Best Selling</Stat>
						<Price>₹12000</Price>
					</DetailsStat>
					<DetailsStat>
						<BuyNowBtn>Buy Now</BuyNowBtn>
						<AddToCartBtn>Add To Cart</AddToCartBtn>
					</DetailsStat>
				</Content>
			</Wrapper>
		</Container>
	);
};

export default DetailsView;

const Container = styled.div`
	background-color: ${COLORS.BgShade};
	width: 100%;
	height: 350px;
`;

const Wrapper = styled.div`
	max-width: 1300px;
	width: 100%;
	height: 350px;
	display: flex;
	margin: 60px auto;
`;

const ImageWrapper = styled.div`
	img {
		height: 350px;
	}
`;

const Content = styled.div`
	margin-left: 20px;
`;

const Title = styled.h2`
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.title};
	font-weight: ${FONTS.fontWeight.semiBold};
	margin: 20px 0px;
`;

const Desc = styled.p`
	color: ${COLORS.lightBlack};
	font-size: ${FONTS.fontSize.para};
	font-weight: ${FONTS.fontWeight.regular};
	margin-bottom: 20px;
`;

const DetailsStat = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
`;

const Stat = styled.span`
	color: ${COLORS.lightBlack};
	font-size: ${FONTS.fontSize.para};
	font-weight: ${FONTS.fontWeight.medium};
	font-style: italic;
`;

const Price = styled.h3`
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.title};
	font-weight: ${FONTS.fontWeight.semiBold};
	margin-right: 10px;
`;
