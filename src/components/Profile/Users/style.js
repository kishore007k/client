import styled from "styled-components";
import { COLORS, FONTS } from "../../../assets/styles";

export const BackCurveContainer = styled.div`
	position: absolute;
	top: 120px;
	left: 100px;
	width: 75%;
	z-index: -1;
	transform: scale(1.5);
	overflow: hidden;
`;

export const ProfilePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1300px;
	width: 100%;
	margin: 0px auto;
`;

export const ProfileContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 120px;
	height: 120px;
`;

export const ProfileImage = styled.div`
	width: 120px;
	height: 120px;
	display: block;
	background-image: url(${(props) => (props ? props.image : "")});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 50%;
	position: relative;
	z-index: 1;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
	margin-top: 50px;
`;

export const EditIconContainer = styled.div`
	display: block;
	position: absolute;
	right: 0;
	top: 30px;
	z-index: 2;
`;

export const BlurEffect = styled.div`
	display: block;
	position: absolute;
	top: -10px;
	right: -10px;
	width: 40px;
	height: 40px;
	background: rgba(255, 255, 255, 0.1);
	filter: blur(10px);
	backdrop-filter: blur(20px);
	border-radius: 50px;
	z-index: -1;
	box-shadow: 0px 2.5px 5px rgba(0, 0, 0, 0.5);
`;

export const ProfileMain = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 40px;
`;

export const ProfileSub = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 70%;
	margin: 40px auto;
`;

export const UserInfo = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const UserInfoTitle = styled.h3`
	color: ${COLORS.darkBlack};
	font-size: ${FONTS.fontSize.title};
	font-weight: ${FONTS.fontWeight.bold};
	font-family: ${FONTS.fontFamily.secondary};
	margin-bottom: 30px;
	line-height: 28px;
	letter-spacing: 0.1em;
`;

export const UserInfoDiv = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 20px;

	h4 {
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.para};
		font-weight: ${FONTS.fontWeight.semiBold};
		font-family: ${FONTS.fontFamily.secondary};
		line-height: 25px;
		letter-spacing: 0.05em;
		padding-right: 50px;
	}

	h6 {
		color: ${COLORS.lightBlack};
		font-size: ${FONTS.fontSize.para};
		font-weight: ${FONTS.fontWeight.medium};
		font-family: ${FONTS.fontFamily.secondary};
		line-height: 25px;
		letter-spacing: 0.05em;
	}
`;

export const UserName = styled.h6`
	padding-left: 10px;
`;

export const UserLastName = styled.h6`
	padding-left: 10px;
`;

export const UserEmail = styled.h6`
	padding-left: 50px;
`;

export const UserAddress = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

export const UserAddressTitle = styled.h3`
	color: ${COLORS.darkBlack};
	font-size: ${FONTS.fontSize.title};
	font-weight: ${FONTS.fontWeight.semiBold};
	font-family: ${FONTS.fontFamily.secondary};
	margin-bottom: 30px;
	line-height: 28px;
	letter-spacing: 0.1em;
`;

export const UserAddressDiv = styled.div`
	display: flex;
	align-items: center;

	h5 {
		color: ${COLORS.mediumBlack};
		font-size: ${FONTS.fontSize.para};
		font-weight: ${FONTS.fontWeight.semiBold};
		font-family: ${FONTS.fontFamily.secondary};
		line-height: 25px;
		letter-spacing: 0.05em;
		padding-right: 50px;
	}

	p {
		color: ${COLORS.lightBlack};
		font-size: ${FONTS.fontSize.para};
		font-weight: ${FONTS.fontWeight.medium};
		font-family: ${FONTS.fontFamily.secondary};
		line-height: 25px;
		letter-spacing: 0.05em;
	}
`;

export const Address = styled.p`
	display: block;
	width: 80%;
	height: 120px;
	background-color: ${COLORS.lightGreyText};
	padding: 10px;
`;
