import React, { useState } from "react";
import FileBase64 from "react-file-base64";

import styled, { css } from "styled-components";
import { CopyIcon, UserProfilePlaceholder } from "../assets/icons/Admin";
import { COLORS, FONTS } from "../assets/styles";

import { CopyToClipboard } from "react-copy-to-clipboard";

const ImageUpload = ({
	image,
	setImage,
	imageWidth,
	imageHeight,
	inputWidth,
	inputHeight,
}) => {
	const [value, setValue] = useState(null);
	const [copied, setCopied] = useState(false);

	const handleCopyValue = (e) => {
		e.preventDefault();
		const target = document.getElementsByClassName("textOverflow");
		setValue(target[0].innerText);
	};

	setTimeout(() => {
		setCopied(false);
	}, [3000]);

	return (
		<Container>
			{image ? (
				<DisplayImageContainer>
					<DisplayImage image={image} width={imageWidth} height={imageHeight} />
					<div className="container">
						<div className="textOverflow">{image}</div>
						<CopyToClipboard text={value} onCopy={() => setCopied(true)}>
							<button className="copyBtn" onClick={handleCopyValue}>
								<CopyIcon />
								Copy
							</button>
						</CopyToClipboard>

						{copied ? <span className="copiedSpan">Copied!</span> : null}
					</div>
				</DisplayImageContainer>
			) : (
				<Placeholder>
					<UserProfilePlaceholder className="placeholder" />
				</Placeholder>
			)}
			<Wrapper width={inputWidth} height={inputHeight}>
				<InputContainer>
					<span>Drag & Drop</span>
					<FileBase64 onDone={(files) => setImage(files.base64)} />
				</InputContainer>
			</Wrapper>
		</Container>
	);
};

export default ImageUpload;

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const Placeholder = styled.div`
	display: block;

	.placeholder {
		fill: ${COLORS.lightGreyText};
		width: 250px;
		height: auto;
		background-color: ${COLORS.grayIcon};
		padding: 20px;
		border-radius: 10px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 50px;
	padding: 20px;
	width: auto;
	background-color: ${COLORS.BgShade};
	border-radius: 10px;
	filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1));

	${(props) =>
		props.width &&
		css`
			width: ${props.width};
		`};
	${(props) =>
		props.height
			? css`
					height: ${props.height};
			  `
			: css`
					height: 100%;
			  `};
`;

const DisplayImage = styled.div`
	display: block;
	width: 180px;
	height: 180px;
	border-radius: 10px;
	background: url(${(props) => (props.image ? props.image : "")});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
	height: 200px;
	padding: 15px 10px;
	border: 2px dashed ${COLORS.darkGrey};
	border-radius: 5px;
	position: relative;
	cursor: pointer;
	background-color: ${COLORS.BgShade};
	z-index: 2;

	span {
		padding: 10px 5px;
		font-size: ${FONTS.fontSize.subTitle};
		color: ${COLORS.lightBlack};
		font-weight: ${FONTS.fontWeight.semiBold};
	}

	input {
		width: 100%;
		height: 100%;
		opacity: 0;
		position: absolute;
		cursor: pointer;
	}
`;

const DisplayImageContainer = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.copiedSpan {
		color: ${COLORS.status};
		margin-top: 20px;
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}

	.textOverflow {
		white-space: nowrap;
		width: 180px;
		overflow: hidden;
		text-overflow: ellipsis;
		border: 1px solid ${COLORS.darkGrey};
		padding: 10px;
		border-radius: 5px;
	}

	.copyBtn {
		display: flex;
		border: none;
		margin-top: 20px;
		padding: 10px 15px;
		font-size: ${FONTS.fontSize.mediumText};
		font-weight: ${FONTS.fontWeight.semiBold};
		background-color: ${COLORS.profileDesignLayer1};
		border-radius: 50px;
		cursor: pointer;
		color: ${COLORS.mediumBlack};
		box-shadow: 0px 5px 10px rgba(142, 154, 255, 0.2);
		transition: 0.5s ease-in-out all;

		:hover {
			color: ${COLORS.white};
			background-color: ${COLORS.primary};
			box-shadow: 0px 10px 20px rgba(142, 154, 255, 0.2);

			svg {
				stroke: ${COLORS.white};
			}
		}

		svg {
			height: 20px;
			padding-right: 10px;
			stroke: ${COLORS.mediumBlack};
			stroke-width: 3px;
			transition: 0.5s ease-in-out all;
		}
	}
`;
