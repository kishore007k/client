import styled from "styled-components";
import { COLORS, FONTS } from "../assets/styles";

export const AboutScreenContainer = styled.div`
	max-width: 1300px;
	width: 100%;
	margin: 150px auto 80px auto;
`;

export const BackGImage = styled.div`
	position: absolute;
	height: 550px;
	top: 0px;
	left: 0;
	right: 0;
	background: url(${(props) => (props.image ? props.image : "")});
	background-position: top;
	background-repeat: no-repeat;
	background-size: cover;
	z-index: -1;
`;

export const TopOfBg = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 450px;

	h1 {
		font-size: ${FONTS.fontSize.H1};
		color: ${COLORS.darkBlack};
		font-weight: ${FONTS.fontWeight.semiBold};
		line-height: 50px;
		margin-bottom: 60px;
	}

	p {
		font-size: ${FONTS.fontSize.title};
		color: ${COLORS.mediumBlack};
		font-weight: ${FONTS.fontWeight.medium};
		line-height: 30px;
		width: 750px;
		text-align: center;
	}
`;

export const AboutScreenTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 60px;

	h3 {
		color: ${COLORS.darkBlack};
		font-size: ${FONTS.fontSize.H2};
		font-weight: ${FONTS.fontWeight.semiBold};
		padding-bottom: 10px;
	}

	span {
		height: 2px;
		width: 80px;
		background-color: ${COLORS.orangeBtn};
	}
`;

export const ASCallOut = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ASCallOutTitle = styled.h4`
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.subTitle};
	font-weight: ${FONTS.fontWeight.bold};
	margin-bottom: 20px;
`;

export const ASCallOutPara = styled.p`
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.para};
	font-weight: ${FONTS.fontWeight.medium};
	margin-bottom: 20px;
`;

export const ASCallOutImage = styled.div`
	display: block;
	width: 360px;
	height: 360px;
	background: url(${(props) => (props.image ? props.image : "")});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const ASCallOutBtnDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ASCallOutButton = styled.button`
	display: block;
	border: none;
	border-radius: 5px;
	background-color: ${(props) =>
		props.color ? COLORS.secondary : COLORS.primary};
	padding: 10px 50px;
	position: relative;
	font-size: ${FONTS.fontSize.subTitle};
	font-weight: ${FONTS.fontWeight.medium};
	color: ${COLORS.white};
	cursor: pointer;

	::after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		border: 1px solid
			${(props) => (props.color ? COLORS.secondary : COLORS.primary)};
		transform: translate(5%, 15%);
		border-radius: 5px;
		transition: 0.5s ease-in-out all;
	}

	:hover {
		::after {
			transform: translate(0%, 0%);
		}
	}
`;

export const ASCallOutTwo = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: center;
	align-items: center;
`;

export const ASCallOutBottom = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) =>
		props.color ? COLORS.secondary : COLORS.BgShade};
	border-top-left-radius: 250px;
`;

export const ASCallOutBottomImageContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
`;

export const ASCallOutBottomImage = styled.div`
	display: block;
	width: 250px;
	height: 250px;
	background: url(${(props) => (props.image ? props.image : "")});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const ASCallOutBottomMain = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 50px;

	p {
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.para};
		font-weight: ${FONTS.fontWeight.medium};
		margin-bottom: 20px;
	}
`;
