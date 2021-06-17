import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { CSInnerDiv, CSWrapper } from "../pages_styles/ContactScreenStyle";

import { Helmet } from "react-helmet";

const ContactScreen = () => {
	return (
		<>
			<Helmet>
				<title>E Commerce Site | Contact</title>
			</Helmet>
			<Header />
			<CSWrapper>
				<h1>How can we help?</h1>
				<CSInnerDiv>
					<h4>hello@e_commerce.com</h4>
					<p>
						We're happy to answer questions. We will do our best to respond to you
						within 24 hours, sometimes a bit longer on weekends.
					</p>
				</CSInnerDiv>
				<CSInnerDiv>
					<h4>Address</h4>
					<p>
						E Commerce, 950 RVS Builders, 12th Cross Street, Velacherry, Chennai,
						TamilNadu, India.
					</p>
				</CSInnerDiv>
			</CSWrapper>
			<Footer />
		</>
	);
};

export default ContactScreen;
