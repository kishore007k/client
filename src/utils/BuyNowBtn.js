import styled from "styled-components";
import { COLORS, FONTS } from "../assets/styles";

const BuyNowBtn = styled.button`
	padding: 10px 25px;
	border-radius: 50px;
	border: 1px solid ${COLORS.primary};
	background: none;

	color: ${COLORS.primary};
	font-size: ${FONTS.fontSize.subTitle};
	font-weight: ${FONTS.fontWeight.medium};
	position: relative;
	cursor: pointer;
	transition: 0.5s ease-out all;

	:hover {
		color: ${COLORS.white};
		box-shadow: 0px 10px 20px rgba(142, 154, 255, 0.5);
		background-color: ${COLORS.primary};
	}
`;

export default BuyNowBtn;
