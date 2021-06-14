import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import BgImage from "../assets/images/aboutBgImage.jpg";
import NgProductOne from "../assets/images/cart/p1.png";
import NgProductTwo from "../assets/images/cart/p4.png";
import NgProductThree from "../assets/images/cart/p5.png";
import NgProductFour from "../assets/images/cart/p6.png";
import NgProductFive from "../assets/images/cart/p7.png";
import NgProductSix from "../assets/images/cart/p8.png";

import {
	AboutScreenContainer,
	AboutScreenTitle,
	ASCallOut,
	ASCallOutBottom,
	ASCallOutBottomImage,
	ASCallOutBottomImageContainer,
	ASCallOutBottomMain,
	ASCallOutBtnDiv,
	ASCallOutButton,
	ASCallOutImage,
	ASCallOutPara,
	ASCallOutTitle,
	ASCallOutTwo,
	BackGImage,
	TopOfBg,
} from "../pages_styles/AboutScreenStyles";
import { COLORS } from "../assets/styles";

const AboutScreen = () => {
	return (
		<div>
			<Header image={BgImage} />
			<BackGImage image={BgImage} />
			<TopOfBg>
				<h1>Hi, we are E_Commerce</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum integer
					semper vel pellentesque lectus malesuada eu diam.
				</p>
			</TopOfBg>
			<AboutScreenContainer>
				<div>
					<AboutScreenTitle>
						<h3>Lorem ipsum</h3>
						<span />
					</AboutScreenTitle>
					<ASCallOut>
						<div>
							<ASCallOutTitle>Lorem Ipsum</ASCallOutTitle>
							<ASCallOutPara>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet commodo
								sed eu, massa ultrices risus interdum turpis pulvinar. Ligula orci
								feugiat massa laoreet morbi risus ullamcorper tristique.
							</ASCallOutPara>
							<ASCallOutPara>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet commodo
								sed eu, massa ultrices risus interdum turpis pulvinar. Ligula orci
								feugiat massa laoreet morbi risus ullamcorper tristique.
							</ASCallOutPara>
							<ASCallOutBtnDiv>
								<ASCallOutButton>Learn More</ASCallOutButton>
							</ASCallOutBtnDiv>
						</div>
						<div>
							<ASCallOutImage image={NgProductOne} />
						</div>
					</ASCallOut>
					<ASCallOutTwo>
						<div>
							<ASCallOutTitle>Lorem Ipsum</ASCallOutTitle>
							<ASCallOutPara>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet commodo
								sed eu, massa ultrices risus interdum turpis pulvinar. Ligula orci
								feugiat massa laoreet morbi risus ullamcorper tristique.
							</ASCallOutPara>
							<ASCallOutPara>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet commodo
								sed eu, massa ultrices risus interdum turpis pulvinar. Ligula orci
								feugiat massa laoreet morbi risus ullamcorper tristique.
							</ASCallOutPara>
							<ASCallOutBtnDiv>
								<ASCallOutButton color={COLORS.secondary}>Learn More</ASCallOutButton>
							</ASCallOutBtnDiv>
						</div>
						<div>
							<ASCallOutImage image={NgProductTwo} />
						</div>
					</ASCallOutTwo>
				</div>
			</AboutScreenContainer>
			<ASCallOutBottom>
				<AboutScreenTitle>
					<h3>💻 Lorem ipsum</h3>
					<span />
				</AboutScreenTitle>
				<ASCallOutBottomMain>
					<p>
						Share a photo of your LARQ Bottle for the chance to be featured! @livelarq
						#DrinkBrilliantly
					</p>
					<ASCallOutBottomImageContainer>
						<ASCallOutBottomImage image={NgProductThree} />
						<ASCallOutBottomImage image={NgProductFour} />
						<ASCallOutBottomImage image={NgProductFive} />
						<ASCallOutBottomImage image={NgProductSix} />
					</ASCallOutBottomImageContainer>
				</ASCallOutBottomMain>
			</ASCallOutBottom>
			<Footer />
		</div>
	);
};

export default AboutScreen;
