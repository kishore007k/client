import styled from "styled-components";
import { COLORS, FONTS } from "../../assets/styles";

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 260px;
	width: 100%;
	transition: 0.5s ease-in-out all;
	padding: 10px;
	border-radius: 2px;

	:hover {
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	}

	a {
		text-decoration: none;
	}

	img {
		margin: 0px auto;
		max-width: 250px;
		width: 100%;
	}

	h4 {
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.subTitle};
		font-weight: ${FONTS.fontWeight.semiBold};
		margin: 10px 0px;
		text-align: start;
	}
`;

export const ProStat = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	h5 {
		color: ${COLORS.darkBlack};
		font-size: ${FONTS.fontSize.mediumText};
		font-weight: ${FONTS.fontWeight.semiBold};
	}
`;
