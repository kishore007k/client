import styled from "styled-components";

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
		cursor: pointer;
		font-size: 200%;
		line-height: 1.2;
		color: #ddd;
		text-shadow: 1px 1px #bbb, 2px 2px #666, 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5);
	}

	:not(:checked) > label:before {
		content: "★ ";
	}

	input:checked ~ label {
		color: #f70;
		text-shadow: 1px 1px #c60, 2px 2px #940, 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5);
	}

	:not(:checked) > label:hover,
	:not(:checked) > label:hover ~ label {
		color: gold;
		text-shadow: 1px 1px goldenrod, 2px 2px #b57340,
			0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5);
	}

	input:checked + label:hover,
	input:checked + label:hover ~ label,
	input:checked ~ label:hover,
	input:checked ~ label:hover ~ label,
	label:hover ~ input:checked ~ label {
		color: #ea0;
		text-shadow: 1px 1px goldenrod, 2px 2px #b57340,
			0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5);
	}

	label:active {
		position: relative;
		top: 2px;
		left: 2px;
	}
`;
