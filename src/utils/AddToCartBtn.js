import styled from "styled-components";
import { COLORS, FONTS } from "../assets/styles";

const AddToCartBtn = styled.button`
	border: 1px solid ${COLORS.secondary};
	padding: 10px 25px;
	border-radius: 50px;
	background: none;

	color: ${COLORS.secondary};
	font-size: ${FONTS.fontSize.subTitle};
	font-weight: ${FONTS.fontWeight.medium};
	position: relative;
	cursor: pointer;
	transition: 0.5s ease-out all;

	:hover {
		color: ${COLORS.white};
		background-color: ${COLORS.secondary};
		box-shadow: 0px 10px 20px rgba(255, 137, 194, 0.5);
	}
`;

export default AddToCartBtn;
