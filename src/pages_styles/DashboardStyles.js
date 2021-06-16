import styled from "styled-components";
import { COLORS, FONTS } from "../assets/styles";

export const DashboardTopDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 10px;
	padding: 20px;
	margin: 20px 50px;
	border-radius: 10px;
	background-color: ${COLORS.white};
	filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1));
`;

export const DashboardTopCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-right: 1px solid ${COLORS.lightGreyText};

	:last-child {
		border: none;
	}
`;

export const DashboardTopCardImage = styled.div`
	display: block;
	padding: 15px;
	background-color: ${(props) => (props.bg ? props.bg : "")};
	margin-right: 20px;
	border-radius: 10px;

	svg {
		width: 70px;
		fill: ${(props) => (props.color ? props.color : "")};
	}
`;

export const DashboardTopCardMain = styled.div`
	display: flex;
	flex-direction: column;

	h5 {
		color: ${COLORS.lightBlack};
		font-size: ${FONTS.fontSize.subTitle};
		font-weight: ${FONTS.fontWeight.medium};
		padding-bottom: 10px;
	}

	h3 {
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.bold};
		padding-bottom: 10px;
	}
`;

export const DTCSub = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	p {
		color: ${COLORS.lightBlack};
		font-size: ${FONTS.fontSize.mediumText};
		font-weight: ${FONTS.fontWeight.medium};
		padding-right: 15px;
	}

	span {
		color: ${(props) => (props.color ? props.color : "")};
		font-size: ${FONTS.fontSize.mediumText};
		font-weight: ${FONTS.fontWeight.semiBold};
		background-color: ${(props) => (props.bg ? props.bg : "")};
		padding: 5px 10px;
		border-radius: 50px;
	}
`;

export const ImageUploadContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	padding: 10px;
	margin: 30px 50px;
	border-radius: 10px;
	background-color: ${COLORS.white};
	filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1));

	h4 {
		text-align: center;
		padding-top: 10px;
		font-size: ${FONTS.fontSize.title};
		color: ${COLORS.mediumBlack};
		font-weight: ${FONTS.fontWeight.semiBold};
		margin-bottom: 20px;
	}

	.uploadBtn {
		margin: 10px auto;
		font-size: ${FONTS.fontSize.title};
		color: ${COLORS.white};
		background-color: ${COLORS.primary};
		padding: 10px 30px;
		border: none;
		border-radius: 50px;
		cursor: pointer;
		box-shadow: 0px 10px 20px rgba(142, 154, 255, 0.1);
	}
`;
