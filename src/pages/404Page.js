import React from "react";
import Header from "../components/Header";
import { PageNotFoundIcon } from "../assets/icons";

import styled from "styled-components";
import { COLORS, FONTS } from "../assets/styles";
import { Link } from "react-router-dom";

const Page404 = () => {
	return (
		<div>
			<Header />
			<Wrapper>
				<h3>Oops! looks like you have lost!</h3>
				<PageNotFoundIcon />
				<p>The location couldn’t be found</p>
				<button>
					<Link to="/">Back to site</Link>
				</button>
			</Wrapper>
		</div>
	);
};

export default Page404;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1300px;
	width: 100%;
	margin: 80px auto;

	h3 {
		font-size: ${FONTS.fontSize.H1};
		font-weight: ${FONTS.fontWeight.bold};
		color: ${COLORS.mediumBlack};
		line-height: 50px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-top: 30px;
	}

	svg {
		margin: 40px 0px;
	}

	p {
		font-size: ${FONTS.fontSize.title};
		font-weight: ${FONTS.fontWeight.semiBold};
		color: ${COLORS.mediumBlack};
		line-height: 25px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 40px;
	}

	button {
		border: none;
		outline: none;
		background-color: ${COLORS.profileNav};
		padding: 10px 80px;
		position: relative;
		border-radius: 10px;
		cursor: pointer;

		a {
			text-decoration: none;
			color: ${COLORS.lightGreyText};
			font-size: ${FONTS.fontSize.title};
			font-weight: ${FONTS.fontWeight.medium};
		}

		::after {
			content: "";
			top: 50px;
			bottom: -20px;
			filter: blur(40px);
			left: 0;
			right: 0;
			position: absolute;
			background: #ff7474;
			border-radius: 10px;
			transition: 0.5s ease-in-out all;
		}

		:hover {
			::after {
				bottom: -30px;
				filter: blur(30px);
			}
		}
	}
`;
