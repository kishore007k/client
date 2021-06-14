import styled from "styled-components";
import { COLORS, FONTS } from "../assets/styles";

export const CSWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 185px auto 150px auto;

	h1 {
		color: ${COLORS.darkBlack};
		font-size: ${FONTS.fontSize.H1};
		font-weight: ${FONTS.fontWeight.bold};
		margin-bottom: 60px;
		letter-spacing: 0.2em;
	}
`;

export const CSInnerDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 30px;

	h4 {
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.semiBold};
		letter-spacing: 0.2em;
		margin-bottom: 20px;
	}

	p {
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.para};
		font-weight: ${FONTS.fontWeight.medium};
		margin-bottom: 20px;
	}
`;
