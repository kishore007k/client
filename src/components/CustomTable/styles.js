import styled from "styled-components";
import { COLORS, FONTS } from "../../assets/styles";

export const Wrapper = styled.div`
	width: 100%;
	max-width: 1300px;
	margin: 30px auto;
	justify-content: center;
	display: flex;
`;

export const Table = styled.table`
	display: block;
	width: 100%;
	padding-top: 20px;
`;

export const TableHeading = styled.thead`
	width: 100%;
	display: block;

	tr {
		display: grid;
		grid-template-columns: 3fr 1fr 1fr;
		width: 100%;
		border-bottom: 1px solid ${COLORS.darkGrey};
		padding-bottom: 10px;
		text-align: center;
	}
`;

export const TableBody = styled.tbody`
	width: 100%;
	display: block;

	tr {
		display: grid;
		grid-template-columns: 3fr 1fr 1fr;
		grid-gap: 20px;
		width: 100%;
		border-bottom: 1px solid ${COLORS.darkGrey};
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: center;
	}
`;

export const TableHeadingTitle = styled.th`
	font-size: ${FONTS.fontSize.title};
	font-weight: ${FONTS.fontWeight.bold};
	font-family: ${FONTS.fontFamily.secondary};
	color: ${COLORS.darkBlack};
	margin-right: 20px;
	padding-left: 10px;
	padding-right: 10px;
`;

export const TableBodyData = styled.td`
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.para};
	font-weight: ${FONTS.fontWeight.medium};
	font-family: ${FONTS.fontFamily.secondary};
	padding-top: 10px;
	padding-bottom: 10px;
`;

export const TableBodyDelivered = styled.td`
	color: ${COLORS.status};
	margin-top: 10px;
`;
