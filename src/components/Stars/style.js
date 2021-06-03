import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const Rating = styled.div`
	float: left;

	:not(:checked) > input {
		position: absolute;
		top: -9999px;
		clip: rect(0, 0, 0, 0);
	}

	:not(:checked) > label {
		float: right;
		width: 1em;
		padding: 0 0.1em;
		overflow: hidden;
		white-space: nowrap;
		cursor: default;
		font-size: 150%;
		line-height: 1.2;
		color: ${COLORS.darkGrey};
	}

	:not(:checked) > label:before {
		content: "★ ";
	}

	input:checked ~ label {
		color: #f70;
	}
`;
