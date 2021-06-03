import styled from "styled-components";
import { COLORS, FONTS } from "../../assets/styles";

export const CustomerRevWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 20px;
`;

export const CustomerRevMain = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px 0;

	h3 {
		color: ${COLORS.darkBlack};
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.bold};
	}

	span {
		display: flex;
		align-items: center;
		margin-top: 5px;

		pre {
			font-size: ${FONTS.fontSize.smallText};
			color: ${COLORS.lightBlack};
		}
	}
`;

export const CustomerRevContainer = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;
