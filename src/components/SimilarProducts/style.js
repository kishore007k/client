import styled from "styled-components";
import { COLORS, FONTS } from "../../assets/styles";

export const SimilarProContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1300px;
	margin: 30px auto;
`;

export const SimilarProTop = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 20px;

	h3 {
		color: ${COLORS.darkBlack};
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.semiBold};
	}

	a {
		text-decoration: none;
		color: ${COLORS.primary};
		font-size: ${FONTS.fontSize.subTitle};
		font-weight: ${FONTS.fontWeight.medium};
		transition: 0.5s ease-in-out all;

		:hover {
			font-weight: ${FONTS.fontWeight.semiBold};
		}
	}
`;

export const SimilarProCardContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
`;
