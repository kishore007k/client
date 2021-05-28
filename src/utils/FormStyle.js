import styled from "styled-components";
import { COLORS, FONTS } from "../assets/styles";

export const Title = styled.h1`
	text-align: center;
	color: ${COLORS.white};
	font-size: ${FONTS.fontSize.H2};
	font-weight: ${FONTS.fontWeight.bold};
	font-family: ${FONTS.fontFamily.secondary};
	margin: 20px 0px;
`;

export const LoginForm = styled.form`
	display: flex;
	height: 90%;
	flex-direction: column;
	align-items: center;
	margin-top: 30px;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 120px;
`;

export const FormLabel = styled.label`
	color: ${COLORS.white};
	font-size: ${FONTS.fontSize.title};
	font-weight: ${FONTS.fontWeight.semiBold};
	font-family: ${FONTS.fontFamily.secondary};
`;

export const FormInput = styled.input`
	width: 450px;
	height: 40px;
	border: none;
	outline: none;
	border-radius: 10px;
	padding: 5px 10px;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
	font-size: ${FONTS.fontSize.para};
	letter-spacing: 0.05em;

	::placeholder {
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.para};
		font-family: ${FONTS.fontFamily.secondary};
	}
`;

export const ActionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

export const ActionButton = styled.button`
	width: 225px;
	height: 55px;
	border: none;
	border-radius: 50px;
	background-color: ${COLORS.secondary};
	margin: 30px 0px;
	font-size: ${FONTS.fontSize.title};
	font-weight: ${FONTS.fontWeight.semiBold};
	font-family: ${FONTS.fontFamily.secondary};
	position: relative;
	color: ${COLORS.white};
	cursor: pointer;

	::after {
		content: "";
		position: absolute;
		width: 225px;
		height: 25px;
		top: 50px;
		left: 0;
		right: 0;
		background: rgba(255, 137, 194, 0.5);
		filter: blur(40px);
	}
`;

export const GoogleBtn = styled.button`
	display: flex;
	width: 400px;
	justify-content: center;
	align-items: center;
	outline: none;
	border: none;
	background-color: ${COLORS.white};
	margin: 15px 0px;
	border-radius: 10px;
	cursor: pointer;
`;

export const GoogleText = styled.p`
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.title};
	font-weight: ${FONTS.fontWeight.semiBold};
	font-family: ${FONTS.fontFamily.secondary};
	letter-spacing: 0.1em;
	padding: 0px 10px;
`;

export const Span = styled.span`
	margin: 10px 0px;

	a {
		color: ${COLORS.white};
		text-decoration: none;
		font-size: ${FONTS.fontSize.para};
		font-weight: ${FONTS.fontWeight.regular};
		font-family: ${FONTS.fontFamily.secondary};
	}
`;

export const ForgotSpan = styled.span`
	margin-top: 10px;
	cursor: pointer;

	a {
		color: ${COLORS.lightGreyText};
		text-decoration: none;
		font-size: ${FONTS.fontSize.mediumText};
		font-weight: ${FONTS.fontWeight.regular};
		font-family: ${FONTS.fontFamily.secondary};
	}
`;

export const ContactInput = styled.input`
	border: none;
	outline: none;
	border-radius: 5px;
	width: 250px;
	height: 40px;
	padding-left: 10px;
	line-height: 19px;
	letter-spacing: 0.08em;
	margin-right: 10px;
	color: ${COLORS.lightBlack};
	font-size: ${FONTS.fontSize.smallText};
	font-family: ${FONTS.fontFamily.secondary};
	font-weight: ${FONTS.fontWeight.semiBold};

	::placeholder {
		text-align: center;
	}
`;

export const SendBtn = styled.button`
	border: none;
	outline: none;
	border-radius: 50px;
	padding: 8px 25px;
	background-color: ${COLORS.orangeBtn};
	color: ${COLORS.white};
	font-size: ${FONTS.fontSize.title};
	font-weight: ${FONTS.fontWeight.semiBold};
	font-family: ${FONTS.fontFamily.secondary};
	position: relative;
	cursor: pointer;

	::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		width: 90px;
		height: 20px;
		top: 40px;
		background: rgba(255, 140, 75, 0.3);
		filter: blur(15px);
	}
`;

export const PasswordInput = styled.input`
	width: 200px;
	height: 40px;
	border: none;
	outline: none;
	border-radius: 10px;
	padding: 5px 10px;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
	font-size: ${FONTS.fontSize.para};
	letter-spacing: 0.05em;

	::placeholder {
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.para};
		font-family: ${FONTS.fontFamily.secondary};
	}
`;
