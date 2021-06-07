import styled from "styled-components";
import { COLORS, FONTS } from "../../assets/styles";

export const CustomerReviewWrapper = styled.div``;

export const ReviewerProImageContainer = styled.div`
	display: flex;
	width: 45px;
	height: 45px;
	position: relative;
	margin-right: 10px;
`;

export const ReviewerProImageBg = styled.div`
	width: 45px;
	height: 45px;
	border-radius: 50px;
	background-color: ${COLORS.bubbleBg};
	position: absolute;
	transform: translate(-2.5px, -2.5px);
	z-index: -1;
`;

export const ReviewerProImage = styled.div`
	display: block;
	width: 40px;
	height: 40px;
	background-image: url(${(props) => props.reviewerImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 50px;
	position: absolute;
`;

export const ReviewImages = styled.img`
	width: 120px;
	margin-right: 10px;
`;

export const ReviewerNameAndImage = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

export const ReviewerNameAndStars = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	h5 {
		padding-left: 5px;
		font-size: ${FONTS.fontSize.mediumText};
		font-weight: ${FONTS.fontWeight.semiBold};
		color: ${COLORS.mediumBlack};
	}
`;

export const Review = styled.div`
	p {
		color: ${COLORS.darkBlack};
		font-size: ${FONTS.fontSize.mediumText};
		font-weight: ${FONTS.fontWeight.medium};
		margin-bottom: 10px;
	}
`;
