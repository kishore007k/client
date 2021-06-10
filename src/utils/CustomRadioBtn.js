import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "../assets/styles";

const CustomRadioBtn = ({ data }) => {
	const [active, setActive] = useState(data[0].option);

	console.log(active);

	return (
		<Wrapper>
			{data.map((item, index) => (
				<label className="rad-label" key={index}>
					<input
						type="radio"
						className="rad-input"
						name="rad"
						onChange={() => setActive(item.option)}
					/>
					<div className="rad-design"></div>
					<div className="rad-text">{item.option}</div>
				</label>
			))}
		</Wrapper>
	);
};

export default CustomRadioBtn;

const Wrapper = styled.div`
	.rad-label {
		display: flex;
		align-items: center;
		border-radius: 100px;
		padding: 5px 10px;
		margin: 10px 0;
		cursor: pointer;
		transition: 0.3s;
	}

	.rad-label:hover,
	.rad-label:focus-within {
		background: hsla(0, 0%, 80%, 0.14);
	}

	.rad-input {
		position: absolute;
		left: 0;
		top: 0;
		width: 1px;
		height: 1px;
		opacity: 0;
		z-index: -1;
	}

	.rad-design {
		width: 15px;
		height: 15px;
		border-radius: 100px;
		background: ${COLORS.profileNav};
		position: relative;
	}

	.rad-design::before {
		content: "";
		display: inline-block;
		width: inherit;
		height: inherit;
		border-radius: inherit;
		background: hsl(0, 0%, 90%);
		transform: scale(1.1);
		transition: 0.3s;
	}

	.rad-input:checked + .rad-design::before {
		transform: scale(0);
	}

	.rad-text {
		color: ${COLORS.lightBlack};
		margin-left: 14px;
		letter-spacing: 3px;
		text-transform: uppercase;
		font-size: ${FONTS.fontSize.mediumText};
		font-weight: ${FONTS.fontWeight.bold};
		transition: 0.3s;
	}

	.rad-input:checked ~ .rad-text {
		color: ${COLORS.profileNav};
	}
`;
