import styled from "styled-components";
import { COLORS, FONTS, DEVICE } from "../assets/styles";

export const APSContainer = styled.div`
	display: block;
	background: ${COLORS.white};
	padding: 20px;
	margin: 30px 50px;
	border-radius: 10px;
	filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 1px 2px);

	@media ${DEVICE.tablet} {
		margin: 20px;
	}
`;

export const ASPTopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 50px;

	@media ${DEVICE.tablet} {
		margin-bottom: 30px;
	}
`;

export const ASPTopTitleC = styled.div`
	display: flex;
	align-items: center;

	h2 {
		margin-right: 10px;
		font-size: ${FONTS.fontSize.title};
		color: ${COLORS.mediumBlack};
		font-weight: ${FONTS.fontWeight.semiBold};
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	span {
		color: ${COLORS.grayIcon};
		font-size: ${FONTS.fontSize.para};
		font-weight: ${FONTS.fontWeight.medium};
	}

	@media ${DEVICE.tablet} {
		h2 {
			font-size: ${FONTS.fontSize.para};
		}

		span {
			font-size: ${FONTS.fontSize.mediumText};
		}
	}
`;

export const ASPTopSearchDiv = styled.div`
	position: relative;

	label {
		position: absolute;
		transform: translate(30px, -15px);
		background: ${COLORS.white};
		padding: 5px;
		z-index: 2;
		color: ${COLORS.lightBlack};
	}

	@media ${DEVICE.laptop} {
		label {
			font-size: ${FONTS.fontSize.mediumText};
		}
	}
`;

export const ASPTopSearchInput = styled.input`
	padding: 10px 20px;
	border: 1px solid ${COLORS.darkGrey};
	border-radius: 10px;
	min-width: 350px;
	position: relative;
	outline: none;

	:active {
		outline: none;
	}

	@media ${DEVICE.laptop} {
		padding: 7px 12px;
		min-width: 250px;

		font-size: ${FONTS.fontSize.mediumText};
	}
`;

export const ASPTopAddPBtn = styled.button`
	display: block;
	padding: 10px 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	color: ${COLORS.white};
	background-color: ${COLORS.gitHubGo};
	font-size: ${FONTS.fontSize.subTitle};
	font-weight: ${FONTS.fontWeight.semiBold};
	filter: drop-shadow(0px 5px 10px rgba(0, 124, 155, 0.2));
	cursor: pointer;
	transition: 0.5s ease-in-out all;

	:hover {
		filter: drop-shadow(0px 10px 20px rgba(0, 124, 155, 0.2));
	}

	@media ${DEVICE.laptop} {
		padding: 7px 12px;
		font-size: ${FONTS.fontSize.para};
	}
`;

export const ASPTable = styled.table`
	display: block;
	width: 100%;

	thead,
	tbody {
		display: block;
		width: auto;
	}
`;

export const ASPTableHead = styled.tr`
	display: grid;
	grid-template-columns: 0.5fr 1fr 1fr 2fr 1fr 1fr 1fr;
	padding: 15px 0px;
	border-bottom: 1px solid ${COLORS.darkGrey};
	text-align: center;
	margin-bottom: 20px;

	td {
		text-transform: uppercase;
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.semiBold};
		letter-spacing: 0.1em;
	}

	@media ${DEVICE.tablet} {
		margin-bottom: 10px;

		td {
			font-size: ${FONTS.fontSize.mediumText};
		}
	}
`;

export const ASPTableBody = styled.tr`
	display: grid;
	grid-template-columns: 0.5fr 1fr 1fr 2fr 1fr 1fr 1fr;
	padding: 15px 0px;
	border-bottom: 1px solid ${COLORS.darkGrey};
	text-align: center;

	td {
		font-size: ${FONTS.fontSize.smallText};
		font-weight: ${FONTS.fontWeight.medium};
	}

	@media ${DEVICE.laptopL} {
		td {
			font-size: ${FONTS.fontSize.para};
			font-weight: ${FONTS.fontWeight.medium};
		}
	}
`;

export const ASPTableCheckBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	.container-checkbox {
		display: block;
		position: relative;
		padding-left: 35px;
		cursor: pointer;
		user-select: none;
	}

	.container-checkbox input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	.container-checkbox .checkmark {
		position: absolute;
		top: 2px;
		left: 0;
		height: 18px;
		width: 18px;
		border: 1px solid ${COLORS.darkGrey};
		background-color: ${COLORS.white};
		border-radius: 2px;
	}

	.container-checkbox:hover input ~ .checkmark {
		background-color: ${COLORS.grayIcon};
	}

	.container-checkbox input:checked ~ .checkmark {
		background-color: ${COLORS.primary};
		border: none;
	}

	.container-checkbox .checkmark:after {
		content: "";
		position: absolute;
		display: none;
	}

	.container-checkbox input:checked ~ .checkmark:after {
		display: block;
	}

	.container-checkbox .checkmark:after {
		left: 6.5px;
		top: 2.5px;
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 3px 3px 0;
		transform: rotate(45deg);
	}

	@media (max-width: ${DEVICE.tablet}) {
		.container-checkbox .checkmark {
			width: 15px;
			height: 15px;
		}

		.container-checkbox .checkmark:after {
			left: 5.5px;
			top: 1.5px;
		}
	}
`;
