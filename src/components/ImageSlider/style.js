import styled from "styled-components";
import { COLORS, FONTS } from "../../assets/styles";

export const Wrapper = styled.div`
	width: 100%;
	height: 600px;
	background-image: url(${(props) => (props.bgImage ? props.bgImage : "")});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	::before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(255, 255, 255, 0.1);
		filter: blur(10px);
		backdrop-filter: blur(5px);
	}
`;

export const ContentContainer = styled.div`
	position: absolute;
	width: 945px;
	height: 390px;
	display: flex;
	align-items: center;
	z-index: 1;
`;

export const PTitle = styled.h3`
	font-size: ${FONTS.fontSize.H2};
	font-weight: ${FONTS.fontWeight.semiBold};
	color: ${COLORS.white};
	margin-left: 10px;
	margin-bottom: 10px;
`;

export const PDesc = styled.p`
	font-size: ${FONTS.fontSize.subTitle};
	font-weight: ${FONTS.fontWeight.regular};
	letter-spacing: 0.05em;
	color: ${COLORS.white};
	margin-left: 10px;
	margin-bottom: 30px;
`;

export const PStat = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 10px;
	margin-bottom: 30px;

	span {
		width: 100%;
		color: ${COLORS.lightGreyText};
		font-size: ${FONTS.fontSize.mediumText};
		font-weight: ${FONTS.fontWeight.medium};
		font-style: italic;
	}

	div {
		display: flex;
		width: 70%;
		justify-content: space-evenly;
		align-items: center;
	}
`;

export const PPrice = styled.h5`
	color: ${COLORS.white};
	font-size: ${FONTS.fontSize.subTitle};
	font-weight: ${FONTS.fontWeight.semiBold};
	margin-left: 10px;
	margin-bottom: 30px;
`;

export const PButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;

	button {
		border: none;
		outline: none;
	}
`;

export const PBuyNowBtn = styled.button`
	background-color: ${COLORS.primary};
	padding: 10px 25px;
	border-radius: 50px;

	color: ${COLORS.white};
	font-size: ${FONTS.fontSize.subTitle};
	font-weight: ${FONTS.fontWeight.medium};
	position: relative;
	box-shadow: 0px 10px 20px rgba(142, 154, 255, 0.5);
`;

export const PAddToCartBtn = styled.button`
	background-color: ${COLORS.secondary};
	padding: 10px 25px;
	border-radius: 50px;

	color: ${COLORS.white};
	font-size: ${FONTS.fontSize.subTitle};
	font-weight: ${FONTS.fontWeight.medium};
	position: relative;
	box-shadow: 0px 10px 20px rgba(255, 137, 194, 0.5);
`;
