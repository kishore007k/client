import styled from "styled-components";
import { COLORS, FONTS } from "../../assets/styles";

export const FooterWrapper = styled.div`
	width: "100%";
	height: 300px;
	background: linear-gradient(164.37deg, #333b50 -16.32%, #232837 114.33%);
	overflow: hidden;
`;

export const DivContainer = styled.div`
	display: flex;
	max-width: 1300px;
	width: "100%";
	height: "100%";
	justify-content: space-between;
	align-items: center;
	margin: 20px auto;
`;

export const TopDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Header = styled.h4`
	color: ${COLORS.lightGreyText};
	font-size: ${FONTS.fontSize.title};
	font-family: ${FONTS.fontFamily.secondary};
	font-weight: ${FONTS.fontWeight.bold};
	margin-bottom: 20px;
`;

export const InnerLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const InnerLinks = styled.a`
	text-decoration: none;
	color: ${COLORS.lightGreyText};
	font-size: ${FONTS.fontSize.para};
	font-weight: ${FONTS.fontWeight.regular};
	font-family: ${FONTS.fontFamily.secondary};
	margin: 10px 0;
	cursor: pointer;
`;

export const BottomDiv = styled.div`
	p {
		color: ${COLORS.lightGreyText};
		font-size: ${FONTS.fontSize.mediumText};
		font-family: ${FONTS.fontFamily.secondary};
		font-weight: ${FONTS.fontWeight.regular};
	}
`;

export const SocialLinks = styled.a`
	margin: 0px 10px;
	cursor: pointer;
	filter: grayscale(1);
	transition: 0.5s ease-in-out all;

	:hover {
		filter: none;
	}
`;
