import styled from "styled-components";
import { COLORS, FONTS } from "../assets/styles";

export const Container = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${COLORS.white};
	filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 1px 2px);
	padding: 20px;
	margin: 30px 50px;
	border-radius: 10px;

	h1 {
		color: ${COLORS.mediumBlack};
		text-transform: uppercase;
		font-size: ${FONTS.fontSize.H1};
		font-weight: ${FONTS.fontWeight.semiBold};
		margin-bottom: 50px;
	}

	button {
		padding: 15px 100px;
		background: ${COLORS.primary};
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.semiBold};
		border: none;
		outline: none;
		border-radius: 50px;
		color: ${COLORS.white};
		filter: drop-shadow(0px 5px 10px rgba(142, 154, 255, 0.3));
		cursor: pointer;
		transition: 0.5s ease-in-out all;

		:hover {
			transform: scale(1.05);
			filter: drop-shadow(0px 10px 20px rgba(142, 154, 255, 0.5));
		}
	}
`;

export const ImageUploaderDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 50px;
	padding: 20px;
	width: 240px;
	background-color: ${COLORS.BgShade};
	border-radius: 10px;
	filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1));
	height: 100%;
`;

export const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 200px;
	padding: 15px 10px;
	border: 2px dashed ${COLORS.darkGrey};
	border-radius: 5px;
	position: relative;
	cursor: pointer;
	background-color: ${COLORS.BgShade};
	z-index: 2;

	span {
		padding: 10px 5px;
		font-size: ${FONTS.fontSize.subTitle};
		color: ${COLORS.lightBlack};
		font-weight: ${FONTS.fontWeight.semiBold};
	}

	input {
		width: 100%;
		height: 100%;
		opacity: 0;
		position: absolute;
		cursor: pointer;
	}
`;

export const MainDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
`;

export const CategoryNameAndInput = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	h3 {
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.semiBold};
		margin-bottom: 20px;
		letter-spacing: 0.1em;
		text-align: center;
	}

	input {
		display: block;
		width: 70%;
		padding: 5px 15px;
		background: ${COLORS.input};
		border: none;
		border-radius: 10px;
		outline: none;
		font-size: ${FONTS.fontSize.subTitle};
		margin-top: 10px;
		text-align: center;
		filter: drop-shadow(0px 2px 5px rgba(255, 219, 186, 0.2));
	}
`;

export const CategoryImage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	h3 {
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.semiBold};
		margin-bottom: 20px;
		letter-spacing: 0.1em;
		text-align: center;
	}
`;

export const SideWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${COLORS.white};
	border-radius: 10px;
	padding: 20px;
	margin: 30px 50px 30px 0px;
	filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 1px 2px);

	h3 {
		font-size: ${FONTS.fontSize.title};
		color: ${COLORS.mediumBlack};
		font-weight: ${FONTS.fontWeight.semiBold};
		text-transform: capitalize;
		letter-spacing: 0.1em;
		text-align: center;
		margin-bottom: 50px;
	}
`;

export const UnorderedList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 45%;

	li {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.para};
		font-weight: ${FONTS.fontWeight.medium};

		div {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-evenly;
			align-items: center;

			div {
				margin-right: 10px;
			}
		}

		span {
			display: block;
			width: 10px;
			height: 10px;
			background: ${COLORS.circle};
			border-radius: 50%;
			margin-right: 20px;
		}
	}
`;

export const PImageContainer = styled.div`
	width: 30px;
	height: 30px;
	background: url(${(props) => (props.image ? props.image : "")});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	border-radius: 50%;
`;

export const CImage = styled.div`
	display: block;
	width: 250px;
	height: 250px;
	background: url(${(props) => (props.image ? props.image : "")});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	border-radius: 50%;
	background-color: ${COLORS.BgShade};
	filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1));
`;
