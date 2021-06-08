import styled from "styled-components";
import { COLORS, FONTS } from "../../../assets/styles";

export const EditProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1300px;
	width: 100%;
	margin: 80px auto;
`;

export const EditProfileImage = styled.div`
	width: 200px;
	height: 200px;
	display: block;
	background-image: url(${(props) => (props ? props.image : "")});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 50%;
	position: relative;
	z-index: 1;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
	margin-top: 50px;
`;

export const BackCurveContainer = styled.div`
	position: absolute;
	top: 120px;
	left: 100px;
	width: 75%;
	z-index: -1;
	transform: scale(1.5);
	overflow: hidden;
`;

export const EditProfileTitle = styled.h2`
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.H2};
	font-weight: ${FONTS.fontWeight.semiBold};
	margin-top: 30px;
`;

export const EPImageUpload = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const EPImageUploader = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	margin-top: 50px;
	padding: 15px 10px;
	border: 2px dashed ${COLORS.primary};
	position: relative;
	cursor: pointer;
	background-color: ${COLORS.BgShade};
	z-index: 2;

	span {
		padding: 10px 5px;
	}

	input {
		width: 100%;
		height: 100%;
		opacity: 0;
		position: absolute;
		cursor: pointer;
	}
`;

export const EPInputs = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 60px;
`;

export const EPInnerInputs = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	margin-bottom: 30px;

	div {
		display: flex;
		flex-direction: column;

		label {
			margin-bottom: 10px;
			font-size: ${FONTS.fontSize.subTitle};
			font-weight: ${FONTS.fontWeight.semiBold};
			color: ${COLORS.mediumBlack};
		}

		input {
			border: none;
			outline: none;
			background-color: ${COLORS.input};
			padding: 10px 15px;
			border-radius: 5px;
			filter: drop-shadow(0px 5px 10px rgba(255, 217, 182, 0.25));
			color: ${COLORS.mediumBlack};
			font-size: ${FONTS.fontSize.para};
			font-weight: ${FONTS.fontWeight.medium};
		}
	}
`;

export const EPInnerInputPN = styled.div`
	display: block;
	text-align: center;
	margin-bottom: 60px;

	label {
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.subTitle};
		font-weight: ${FONTS.fontWeight.semiBold};
		margin-right: 10px;
	}

	input {
		border: none;
		outline: none;
		background-color: ${COLORS.input};
		padding: 10px 15px;
		border-radius: 5px;
		filter: drop-shadow(0px 5px 10px rgba(255, 217, 182, 0.25));
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.para};
		font-weight: ${FONTS.fontWeight.medium};
	}

	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

export const EPUpdateBtn = styled.button`
	border: none;
	outline: none;
	background-color: ${COLORS.secondary};
	padding: 10px 25px;
	border-radius: 50px;
	font-size: ${FONTS.fontSize.subTitle};
	font-weight: ${FONTS.fontWeight.semiBold};
	color: ${COLORS.lightGreyText};
	position: relative;
	cursor: pointer;

	::after {
		content: "";
		position: absolute;
		top: 50px;
		bottom: -30px;
		left: 0;
		right: 0;
		background: rgba(255, 137, 194, 0.5);
		filter: blur(20px);
		transition: 0.5s ease-in-out all;
	}

	:hover {
		::after {
			top: 0px;
			bottom: 0px;
			filter: none;
			background: none;
		}
	}
`;
