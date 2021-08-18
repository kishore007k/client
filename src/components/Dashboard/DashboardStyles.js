import styled, { css } from "styled-components";
import { COLORS, DEVICE, FONTS } from "../../assets/styles";

export const DashboardContainer = styled.div`
	display: block;
	margin-top: 80px;
	background-color: ${COLORS.adminPanelBg};
`;

export const DashboardWrapper = styled.div`
	display: block;
	width: 100%;
`;

export const DMain = styled.div`
	display: grid;
	grid-template-columns: 1fr 8fr;
`;

export const DashboardHeader = styled.div`
	display: flex;
	width: 100%;
	height: 80px;
	justify-content: center;
	align-items: center;
	background-color: ${COLORS.white};
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.02));
	z-index: 10;
`;

export const DHWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 80px;
	justify-content: space-between;
	align-items: center;
	padding: 0px 20px;
`;

export const UserProfilePic = styled.div`
	display: block;
	width: 40px;
	height: 40px;
	background: url(${(props) => (props.image ? props.image : "")});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 50%;
`;

export const UserData = styled.div`
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		text-decoration: none;
	}

	h4 {
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.semiBold};
		padding-right: 10px;
	}
`;

export const DSideBar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-height: 100vh;
	height: 100%;
	padding-top: 100px;
	padding-bottom: 20px;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
	z-index: 5;
`;

export const DSBItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media ${DEVICE.tablet} {
		padding: 10px;
	}
`;

export const DSBItem = styled.div`
	display: block;
	width: 100%;
	background-color: ${(props) => (props.active ? COLORS.lightBlack : "")};
	padding: 5px 20px;
	border-radius: 5px;
	margin-bottom: 20px;
	position: relative;
	transition: 0.5s ease-in-out all;
	cursor: pointer;
	${(props) =>
		props.active &&
		css`
			filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.1));
		`}

	a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		color: ${(props) => (props.active ? COLORS.white : COLORS.mediumBlack)};
		font-size: ${FONTS.fontSize.subTitle};
		font-weight: ${FONTS.fontWeight.semiBold};
		text-decoration: none;
		transition: 0.5s ease-in-out all;
	}

	svg {
		width: 30px;
		margin-right: 10px;
		fill: ${(props) => (props.active ? COLORS.primary : COLORS.lightBlack)};
		transition: 0.5s ease-in-out all;
	}

	::after {
		content: "";
		width: 5px;
		height: 25px;
		position: absolute;
		top: 7.5px;
		left: -22px;
		margin: auto 0px;
		background-color: ${(props) => (props.active ? COLORS.lightBlack : "")};
		border-radius: 5px;
		transition: 0.5s ease-in-out all;
	}

	:hover {
		${(props) =>
			!props.active &&
			css`
				background-color: ${COLORS.lightBlack};

				a {
					color: ${COLORS.white};
				}

				svg {
					fill: ${COLORS.primary};
				}
			`}
	}

	@media ${DEVICE.tablet} {
		padding: 5px 10px;
		margin-bottom: 15px;

		svg {
			width: 25px;
		}

		a {
			font-size: ${FONTS.fontSize.para};
		}
	}
`;

export const DSBLogout = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	padding: 10px 20px;
	outline: none;
	border: none;
	background: none;
	margin: 0 10px;
	cursor: pointer;

	:hover {
		background-color: ${COLORS.lightGreyText};
		border-radius: 5px;
	}

	svg {
		width: 30px;
	}

	p {
		font-size: ${FONTS.fontSize.para};
		font-weight: ${FONTS.fontWeight.medium};
		width: 100%;
		display: block;
		text-align: center;
		letter-spacing: 0.2em;
	}

	@media ${DEVICE.tablet} {
		padding: 5px 10px;

		svg {
			width: 25px;
			margin-right: 5px;
		}

		p {
			font-size: ${FONTS.fontSize.mediumText};
		}
	}
`;
