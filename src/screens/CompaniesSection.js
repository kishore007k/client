import React from "react";
import styled from "styled-components";

import {
	AcerIcon,
	AsusIcon,
	HpIcon,
	LenovoIcon,
	AppleIcon,
	DellIcon,
} from "../assets/icons/Companies Icon";
import { COLORS, FONTS } from "../assets/styles";

const CompaniesSection = () => {
	return (
		<Wrapper>
			<Title>Products from</Title>
			<Icons>
				<LenovoIcon />
				<AsusIcon />
				<AcerIcon />
				<HpIcon />
				<DellIcon />
				<AppleIcon />
			</Icons>
		</Wrapper>
	);
};

export default CompaniesSection;

const Wrapper = styled.div`
	max-width: 1300px;
	width: 100%;
	margin: 60px auto;
`;

const Title = styled.h1`
	text-align: center;
	color: ${COLORS.mediumBlack};
	font-size: ${FONTS.fontSize.H1};
	font-weight: ${FONTS.fontWeight.semiBold};
`;

const Icons = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 60px;
	margin-bottom: 60px;
`;
