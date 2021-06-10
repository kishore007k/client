import styled from "styled-components";
import { COLORS, FONTS } from "../assets/styles";

export const CartWrapper = styled.div`
	max-width: 1300px;
	width: 100%;
	margin: 0px auto;
`;

export const CartBackIcon = styled.button`
	border: none;
	outline: none;
	background: none;
	cursor: pointer;

	a {
		display: flex;
		align-items: center;
		line-height: 20px;
		letter-spacing: 0.1em;
		text-transform: capitalize;
		font-size: ${FONTS.fontSize.para};
		font-weight: ${FONTS.fontWeight.semiBold};
		color: ${COLORS.mediumBlack};
		text-decoration: none;
		margin: 30px 0px;
	}

	svg {
		width: 30px;
		margin-right: 10px;
	}
`;

export const CartMain = styled.div`
	display: flex;
	align-items: center;
`;

export const CartProductImage = styled.div`
	display: block;
	width: 150px;
	height: 150px;
	background: url(${(props) => (props.image ? props.image : "")});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const CartCart = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	h3 {
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.semiBold};
		color: ${COLORS.mediumBlack};
		line-height: 25px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 30px;
	}
`;

export const CartCartCart = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 70%;
	padding-right: 60px;
`;

export const CardGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
	grid-gap: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
`;

export const CartGridView = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
	grid-gap: 10px;
	border-bottom: 1px solid ${COLORS.grayIcon};
	padding-top: 10px;
	padding-bottom: 10px;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;

		p {
			font-size: ${FONTS.fontSize.mediumText};
			font-weight: ${FONTS.fontWeight.semiBold};
			color: ${COLORS.mediumBlack};
		}

		span {
			font-size: ${FONTS.fontSize.mediumText};
			font-weight: ${FONTS.fontWeight.bold};
			color: ${COLORS.mediumBlack};
		}
	}
`;

export const CartCloseIcon = styled.div`
	svg {
		cursor: pointer;
		width: 15px;
	}
`;

export const CartHeadings = styled.h4`
	font-size: ${FONTS.fontSize.para};
	font-weight: ${FONTS.fontWeight.semiBold};
	color: ${COLORS.mediumBlack};
	line-height: 20px;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	text-align: center;
`;

export const RadioBtnWrapper = styled.div`
	.rad-label {
		display: flex;
		align-items: center;
		border-radius: 100px;
		padding: 5px 10px;
		margin: 10px 0;
		cursor: pointer;
		transition: 0.3s;
	}

	.rad-label:hover,
	.rad-label:focus-within {
		background: hsla(0, 0%, 80%, 0.14);
	}

	.rad-input {
		position: absolute;
		left: 0;
		top: 0;
		width: 1px;
		height: 1px;
		opacity: 0;
		z-index: -1;
	}

	.rad-design {
		width: 15px;
		height: 15px;
		border-radius: 100px;
		background: ${COLORS.profileNav};
		position: relative;
	}

	.rad-design::before {
		content: "";
		display: inline-block;
		width: inherit;
		height: inherit;
		border-radius: inherit;
		background: hsl(0, 0%, 90%);
		transform: scale(1.1);
		transition: 0.3s;
	}

	.rad-input:checked + .rad-design::before {
		transform: scale(0);
	}

	.rad-text {
		color: ${COLORS.lightBlack};
		margin-left: 14px;
		letter-spacing: 3px;
		text-transform: uppercase;
		font-size: ${FONTS.fontSize.mediumText};
		font-weight: ${FONTS.fontWeight.bold};
		transition: 0.3s;
	}

	.rad-input:checked ~ .rad-text {
		color: ${COLORS.profileNav};
	}
`;

export const CartRightSideCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${COLORS.cartBg};
	width: 100%;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.1);

	h1 {
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.bold};
		color: ${COLORS.darkBlack};
		line-height: 25px;
		letter-spacing: 0.1em;
		text-align: center;
		margin-bottom: 40px;
	}

	h3 {
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.semiBold};
		color: ${COLORS.darkBlack};
		line-height: 25px;
		letter-spacing: 0.1em;
		margin-bottom: 20px;
	}
`;

export const CartRSAddress = styled.p`
	width: 50%;
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.para};
	font-weight: ${FONTS.fontWeight.medium};
	text-align: center;
	margin: 0px auto 20px auto;
`;

export const CartRSPhoneNo = styled.p`
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.para};
	font-weight: ${FONTS.fontWeight.medium};
	margin-bottom: 20px;
	text-align: center;
`;

export const CartCouponInputContainer = styled.div`
	display: block;
	width: 80%;
	margin: 10px auto;
`;

export const CartCouponInput = styled.input`
	outline: none;
	border: none;
	width: 100%;
	text-align: center;
	border-bottom: 2px solid ${COLORS.darkGrey};
	padding: 10px 0px;
	background: none;

	font-size: ${FONTS.fontSize.para};
	font-weight: ${FONTS.fontWeight.semiBold};
	color: ${COLORS.mediumBlack};
	text-transform: uppercase;
	letter-spacing: 0.2em;
`;

export const CartRightSideCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 30%;
	padding-top: 30px;
`;

export const BuyNowBtnContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;

	button {
		border: none;
		outline: none;
		padding: 10px 20px;
		margin-top: 30px;
		background-color: ${COLORS.primary};
		border-radius: 50px;
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.semiBold};
		color: ${COLORS.lightGreyText};
		box-shadow: 0px 10px 20px rgba(142, 154, 255, 0.5);
		cursor: pointer;
		transition: 0.5s ease-in-out all;

		:hover {
			box-shadow: 0px 5px 10px rgba(142, 154, 255, 0.6);
		}
	}
`;

export const CartTotalContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	h3,
	h4 {
		color: ${COLORS.mediumBlack};
		margin-top: 30px;
	}

	h3 {
		font-size: ${FONTS.fontSize.subTitle};
		font-weight: ${FONTS.fontWeight.semiBold};
		margin-right: 20px;
	}

	h4 {
		font-size: ${FONTS.fontSize.subTitle};
		font-weight: ${FONTS.fontWeight.semiBold};
	}
`;
