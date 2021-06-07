import styled from "styled-components";
import { COLORS, FONTS } from "../assets/styles";

export const Wrapper = styled.div`
	display: flex;
	max-width: 1300px;
	width: 100%;
	height: max-content;
	margin: 100px auto 20px auto;
`;

export const ProImageContainer = styled.div`
	display: flex;
	width: 50%;

	.mainImage {
		width: 80%;
		height: 400px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	}
`;

export const ProImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ProDescContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

export const ImageWrapper = styled.button`
	border: 1px solid ${COLORS.greyIconDark};
	outline: none;
	padding: 2px;
	background: none;
	margin-bottom: 10px;
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

	img {
		width: 90px;
	}
`;

export const Title = styled.h1`
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.title};
	font-weight: ${FONTS.fontWeight.semiBold};
	margin-bottom: 10px;
`;

export const StarsCount = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 10px;

	span {
		font-size: ${FONTS.fontSize.smallText};
		color: ${COLORS.lightBlack};
		font-weight: ${FONTS.fontWeight.semiBold};
	}
`;

export const Divider = styled.div`
	display: block;
	max-width: 1300px;
	margin: 0px auto;
	width: 100%;
	height: 2px;
	background-color: ${COLORS.grayIcon};
`;

export const PriceAndStat = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-bottom: 20px;
	margin-top: 10px;

	h3 {
		font-size: ${FONTS.fontSize.subTitle};
		font-weight: ${FONTS.fontWeight.bold};
		color: ${COLORS.mediumBlack};
	}

	span {
		font-style: italic;
		font-size: ${FONTS.fontSize.para};
		margin-right: 20px;
	}
`;

export const FlexBoxContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: 10px 0px;
`;

export const FlexBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	span {
		width: 66px;
		text-align: center;
		font-size: ${FONTS.fontSize.smallText};
		margin-top: 5px;
		font-style: oblique;
		color: ${COLORS.darkGrey};
	}
`;

export const StockAndInput = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 30%;
	height: 150px;
	/* background-color: ${COLORS.BgShade};
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); */

	span {
		color: ${COLORS.status};
		font-size: ${FONTS.fontSize.subTitle};
		font-weight: ${FONTS.fontWeight.medium};
	}
`;

export const StockInput = styled.div`
	display: flex;
	align-items: center;

	button {
		outline: none;
		border: none;
		padding: 0px 10px;
		color: ${COLORS.black};
		background: none;
		font-size: ${FONTS.fontSize.H2};
		font-weight: ${FONTS.fontWeight.semiBold};
		cursor: pointer;
		border-radius: 2px;
		transition: 0.5s ease-in-out all;
	}

	button:hover {
		color: ${COLORS.activeStatus};
	}

	input {
		width: 40px;
		height: 40px;
		text-align: center;
		font-size: ${FONTS.fontSize.title};
		/* background-color: ${COLORS.BgShade}; */
		border: none;
	}

	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

export const PriceAndTags = styled.div`
	display: block;
	width: 70%;
	margin-top: 10px;
`;

export const PriceAndButtons = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

export const Btns = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	margin: 20px 0px;
`;

export const PDesc = styled.div`
	margin: 20px 0px;
	display: block;
	width: 100%;

	h4 {
		font-size: ${FONTS.fontSize.subTitle};
		font-weight: ${FONTS.fontWeight.semiBold};
		color: ${COLORS.lightBlack};
		margin-bottom: 10px;
	}
`;

export const ReadMoreBtn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 1300px;
	margin: 40px auto;

	a {
		color: ${COLORS.primary};
		font-size: ${FONTS.fontSize.subTitle};
		font-weight: ${FONTS.fontWeight.medium};
		text-decoration: none;
		transition: 0.5s ease-in-out all;

		:hover {
			font-weight: ${FONTS.fontWeight.semiBold};
		}
	}
`;
