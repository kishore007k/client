import styled from "styled-components";
import { COLORS, FONTS } from "../../assets/styles";

export const HeaderWrapper = styled.div`
	width: 100vw;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 50;

	::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 80px;
		background: rgba(255, 255, 255, 0.1);
		filter: blur(5px);
		backdrop-filter: blur(20px);
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1300px;
	height: inherit;
	z-index: 1;
`;

export const LogoContainer = styled.div`
	max-width: 150px;

	img {
		height: 20px;
	}
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: space-evenly;
	width: 500px;

	button {
		border: none;
		outline: none;
		background: none;
	}

	button:hover > a {
		border-radius: 50px;
		background-color: ${COLORS.primary};
		color: ${COLORS.white};
	}

	button > a {
		text-decoration: none;
		padding: 5px 10px;
		color: ${COLORS.primary};
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.semiBold};
		transition: 0.5s ease-in-out all;
	}
`;

export const Actions = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 25%;

	button {
		margin: 0 10px;
	}
`;

export const LoginBtn = styled.button`
	border: 1px solid ${COLORS.primary};
	border-radius: 50px;
	background: none;
	padding: 5px 25px;
	cursor: pointer;
	transition: 0.5s ease-in-out all;

	:hover {
		background: ${COLORS.primary};
	}

	:hover > a {
		color: ${COLORS.white};
	}

	a {
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.semiBold};
		text-decoration: none;
		color: ${COLORS.primary};
		transition: 0.5s ease-in-out all;
	}
`;

export const Btn = styled.button`
	border: none;
	outline: none;
	background: none;
`;

export const ProfileContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		width: 30px;
		margin: 0px 12px;
	}
`;

export const LogoutBtn = styled.button`
	border: 1px solid ${COLORS.primary};
	border-radius: 50px;
	background: none;
	padding: 5px 25px;
	cursor: pointer;
	transition: 0.5s ease-in-out all;
	font-size: ${FONTS.fontSize.title};
	font-weight: ${FONTS.fontWeight.semiBold};
	text-decoration: none;
	color: ${COLORS.primary};
	transition: 0.5s ease-in-out all;

	:hover {
		color: ${COLORS.white};
		background: ${COLORS.primary};
	}
`;
