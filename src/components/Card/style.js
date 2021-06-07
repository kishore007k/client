import styled from "styled-components";
import { COLORS, FONTS } from "../../assets/styles";

export const CardCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: 0.5s ease-in all;

	:hover {
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
		border-radius: 2px;
	}
`;

export const CardImage = styled.div`
	img {
		width: 400px;
		padding-top: 10px;
	}
`;

export const CardDetails = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
`;

export const CardTitle = styled.h2`
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.title};
	font-weight: ${FONTS.fontWeight.semiBold};
	width: 100%;
`;

export const CardStars = styled.div`
	width: 60%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const CardDesc = styled.div`
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.para};
	font-weight: ${FONTS.fontWeight.medium};
	margin: 10px;
`;

export const CardStat = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
`;

export const Stat = styled.h5`
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.mediumText};
	font-weight: ${FONTS.fontWeight.semiBold};
	font-style: italic;
`;

export const CardPrice = styled.h3`
	color: ${COLORS.darkBlack};
	font-size: ${FONTS.fontSize.subTitle};
	font-weight: ${FONTS.fontWeight.semiBold};
`;

export const CardReviewCount = styled.span`
	color: ${COLORS.lightBlack};
	font-size: ${FONTS.fontSize.smallText};
	font-weight: ${FONTS.fontWeight.regular};
	font-family: ${FONTS.fontFamily.secondary};
`;
