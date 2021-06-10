import React, { useState } from "react";
import {
	TwitterIcon,
	InstagramIcon,
	FacebookIcon,
	LinkedInIcon,
} from "../../assets/icons/SocialIcons";
import {
	BottomDiv,
	FooterWrapper,
	Header,
	InnerLinkContainer,
	InnerLinks,
	TopDiv,
	DivContainer,
	SocialLinks,
} from "./styles";
import { ContactInput, SendBtn } from "../../utils/FormStyle";

const Footer = () => {
	const [email, setEmail] = useState("");

	return (
		<FooterWrapper>
			<DivContainer>
				<TopDiv>
					<Header>Help</Header>
					<InnerLinkContainer>
						<InnerLinks href="/help">Frequently asked questions</InnerLinks>
						<InnerLinks href="/profile">My Account</InnerLinks>
						<InnerLinks href="/help">Corporate Gifting</InnerLinks>
						<InnerLinks href="/contact">Contact Us</InnerLinks>
					</InnerLinkContainer>
				</TopDiv>
				<TopDiv>
					<Header>Shop</Header>
					<InnerLinkContainer>
						<InnerLinks href="/product">Asus</InnerLinks>
						<InnerLinks href="/product">Acer</InnerLinks>
						<InnerLinks href="/product">Dell</InnerLinks>
						<InnerLinks href="/product">Apple</InnerLinks>
					</InnerLinkContainer>
				</TopDiv>
				<TopDiv>
					<Header>Support</Header>
					<InnerLinkContainer>
						<InnerLinks href="/help">Help & Center</InnerLinks>
						<InnerLinks href="/privacy">Privacy Policy</InnerLinks>
					</InnerLinkContainer>
				</TopDiv>
				<div>
					<ContactInput
						type="email"
						value={email}
						placeholder="Buy me a coffee!"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<SendBtn>Send</SendBtn>
				</div>
			</DivContainer>
			<DivContainer>
				<BottomDiv>
					<p>© 2021 Kishore. All Rights Reserved.</p>
				</BottomDiv>
				<BottomDiv>
					<SocialLinks href="https://twitter.com/kishorekumarst1">
						<TwitterIcon />
					</SocialLinks>
					<SocialLinks href="https://www.instagram.com/kishore_007_k/">
						<InstagramIcon />
					</SocialLinks>
					<SocialLinks href="https://www.facebook.com/profile.php?id=100008567134618">
						<FacebookIcon />
					</SocialLinks>
					<SocialLinks href="https://www.linkedin.com/in/kishore-kumar-6bb5801a2/">
						<LinkedInIcon />
					</SocialLinks>
				</BottomDiv>
				<BottomDiv>
					<p>Terms & Privacy</p>
				</BottomDiv>
			</DivContainer>
		</FooterWrapper>
	);
};

export default Footer;
