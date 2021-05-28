import styled, { keyframes } from "styled-components";
import { COLORS } from "../../assets/styles";

export const LoadingDiv = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background-color: ${COLORS.white};
`;

export const LoadingContainer = styled.div`
	width: 100px;
	height: 100px;
`;

export const Rotate = keyframes`
	to {
		transform: rotate(360deg);
	}
`;

export const LoadingRing = styled.div`
	position: absolute;
	width: 100px;
	height: 100px;

	:first-child {
		transform: skew(30deg, 20deg);
	}

	:last-child {
		transform: skew(-30deg, -20deg) scale(-1, 1);
	}

	:last-child svg {
		animation-delay: -0.5s;
	}

	svg {
		animation: ${Rotate} 1s linear infinite;
		fill: rgba(0, 0, 0, 0.2);
	}
`;
